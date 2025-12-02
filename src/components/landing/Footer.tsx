
"use client";

import { useState, useEffect } from 'react';
import { Phone } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { footerLinks } from '@/lib/data';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        aria-hidden="true"
        viewBox="0 0 24 24"
        {...props}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/navkargroupofficial?igsh=MTk0cDZmdWdhMWZ6cg==", name: "Instagram" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="py-8 md:py-12 border-t bg-secondary">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6 md:gap-8">
          {/* About Section */}
          <div className="space-y-3 md:space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl">
              <Image src="/logo.png" alt="Navkar Logo" width={70} height={70} className="md:w-[80px] md:h-[80px] object-contain" />
            </Link>
            <p className="text-sm md:text-base text-muted-foreground">
              Crafting landmarks with integrity and innovation for over a decade.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Legal Section */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Follow us on ${social.name}`}
                  className="text-muted-foreground p-2 -m-2 rounded-full transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
            <p>
              © {year ?? new Date().getFullYear()} Navkar Group. All rights reserved. | Designed by{' '}
              <a href="https://blinkbeyond.co.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                BlinkBeyond
              </a>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Buttons */}
      <div className={cn(
        "fixed bottom-3 md:bottom-4 right-3 md:right-4 z-50 transition-opacity duration-300 space-y-2 md:space-y-3",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <a
          href="https://wa.me/917888022788"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 ring-wave"
        >
          <FaWhatsapp className="h-6 w-6 md:h-8 md:w-8" />
        </a>
      </div>
       <div className={cn(
        "fixed bottom-3 md:bottom-4 left-3 md:left-4 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <a
          href="tel:+917888022788"
          aria-label="Call Us"
          className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        >
          <Phone className="h-5 w-5 md:h-7 md:w-7" />
        </a>
      </div>
    </>
  );
}
