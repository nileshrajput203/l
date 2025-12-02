
"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useCPPartnerStore } from "@/hooks/use-c-p-partner-store";

export function PopupCPPartner() {
  const { isOpen, close } = useCPPartnerStore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
        formType: 'cpPartner',
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        reraNo: formData.get("reraNo") as string,
        message: formData.get("message") as string,
    };
    
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            toast({
                title: "Registration Successful! ✅",
                description: "Our team will review your details and get in touch.",
            });
            (e.target as HTMLFormElement).reset();
            close();
        } else {
           toast({
                variant: "destructive",
                title: "An Error Occurred",
                description: result.message || 'Failed to submit form.',
            });
        }
    } catch (error) {
        toast({
            variant: "destructive",
            title: "An Error Occurred",
            description: "An unexpected error occurred. Please try again.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      close();
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] w-[95vw] max-w-none p-4 sm:p-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Register as a CP Partner</DialogTitle>
          <DialogDescription>
            Join our network of trusted partners. Fill out the form below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-3 sm:gap-4 py-2 sm:py-4">
          <div className="space-y-2">
            <Label htmlFor="cp-name">Your Name</Label>
            <Input id="cp-name" name="name" placeholder="e.g. John Doe" required className="text-sm" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cp-phone">Phone Number</Label>
            <Input id="cp-phone" name="phone" type="tel" placeholder="e.g. 9876543210" required className="text-sm" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cp-rera">RERA Number (Optional)</Label>
            <Input id="cp-rera" name="reraNo" placeholder="e.g. A1234567890" className="text-sm" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cp-message">Message</Label>
            <Textarea
              id="cp-message"
              name="message"
              placeholder="Tell us about yourself..."
              rows={4}
              required
            />
          </div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Register Now
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
