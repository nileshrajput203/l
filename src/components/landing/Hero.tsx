 "use client";
 
 import Image from "next/image";
 import { motion } from "framer-motion";
 import { heroImages } from "@/lib/data";
 
 export default function Hero() {
   const hero = heroImages[0];
 
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pt-16 md:pt-0"
      style={{ width: '100%' }}
    >
      {/* Desktop / tablet: full-screen cover - scales with browser zoom */}
      <div 
        className="relative hidden md:block w-full"
        style={{ 
          width: '100vw',
          height: '100vh',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw'
        }}
      >
        <img
          src={hero.src}
          alt={hero.alt}
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          loading="eager"
        />
      </div>

      {/* Mobile: natural image height, full image visible */}
      <div className="block md:hidden w-full">
        <Image
          src={hero.src}
          alt={hero.alt}
          data-ai-hint={hero.aiHint}
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
      </div>

      {/* Accessible but visually hidden text for SEO/screen readers */}
      <div className="sr-only">
        <p>Navkar Group</p>
        <h1>Homes and spaces in Palghar that feel lived in</h1>
        <p>
          Local team, 10+ years of projects, and a simple focus: practical homes,
          shops and workplaces that age well.
        </p>
      </div>
    </section>
  );
 }
