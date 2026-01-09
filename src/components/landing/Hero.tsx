 "use client";
 
 import Image from "next/image";
 import { motion } from "framer-motion";
 import { heroImages } from "@/lib/data";
 
 export default function Hero() {
   const hero = heroImages[0];
 
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black min-h-screen"
    >
      <div className="relative w-full h-screen">
        <Image
          src={hero.src}
          alt={hero.alt}
          data-ai-hint={hero.aiHint}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
 
        {/* Accessible but visually hidden text for SEO/screen readers */}
         <div className="sr-only">
           <p>Navkar Group</p>
           <h1>Homes and spaces in Palghar that feel lived in</h1>
           <p>
             Local team, 10+ years of projects, and a simple focus: practical homes,
             shops and workplaces that age well.
           </p>
         </div>
       </div>
     </section>
   );
 }
