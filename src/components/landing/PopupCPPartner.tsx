
"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useCPPartnerStore } from "@/hooks/use-c-p-partner-store";

export function PopupCPPartner() {
  const { isOpen, close } = useCPPartnerStore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [entityType, setEntityType] = useState("individual");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
        formType: 'cpPartner',
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        reraNo: formData.get("reraNo") as string,
        type: entityType,
        organisationName: formData.get("organisationName") as string,
        website: formData.get("website") as string,
        address: formData.get("address") as string,
        locality: formData.get("locality") as string,
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
            setEntityType("individual");
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
      <DialogContent className="w-[95vw] max-w-none sm:max-w-3xl p-4 sm:p-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-serif text-center">Channel Partner Registration</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 grid gap-4 sm:gap-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5">
              <Label htmlFor="cp-name">Name *</Label>
              <Input id="cp-name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cp-email">Email *</Label>
              <Input id="cp-email" name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cp-phone">Mobile No *</Label>
              <Input id="cp-phone" name="phone" type="tel" placeholder="Enter your mobile number" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cp-rera">CP RERA NO</Label>
              <Input id="cp-rera" name="reraNo" placeholder="Enter CP RERA number" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Label>Type</Label>
            <RadioGroup 
              defaultValue="individual"
              onValueChange={setEntityType} 
              className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="type-individual" />
                <Label htmlFor="type-individual">Individual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="proprietorship" id="type-proprietorship" />
                <Label htmlFor="type-proprietorship">Proprietorship</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="partnership" id="type-partnership" />
                <Label htmlFor="type-partnership">Partnership</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="limited company" id="type-limited" />
                <Label htmlFor="type-limited">Limited Company</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5">
              <Label htmlFor="cp-org-name">Organisation Name *</Label>
              <Input id="cp-org-name" name="organisationName" placeholder="Enter organisation name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cp-website">Website</Label>
              <Input id="cp-website" name="website" placeholder="Enter website URL" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cp-address">Address *</Label>
              <Input id="cp-address" name="address" placeholder="Enter address" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cp-locality">Locality *</Label>
              <Input id="cp-locality" name="locality" placeholder="Enter locality" required />
            </div>
          </div>

          <div className="mt-2 flex justify-center">
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto px-10 bg-[#4CAF50] hover:bg-[#45a049]">
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
