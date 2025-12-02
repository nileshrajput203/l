    "use client";
    
    import Image from "next/image";
    import { heroImages } from "@/lib/data";
    
    export default function Hero() {
      return (
        <section id="home" className="relative bg-background w-full overflow-hidden pt-16 md:pt-0">
          <div className="relative w-full">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              data-ai-hint={heroImages[0].aiHint}
              width={1920} 
              height={1080}
              layout="responsive"
              priority
            />
          </div>
        </section>
      );
    }
