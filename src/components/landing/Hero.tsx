      "use client";
      
      import Image from "next/image";
      import { heroImages } from "@/lib/data";
      
      export default function Hero() {
        return (
          <section id="home" className="relative bg-background w-full overflow-hidden pt-0 -mt-0">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                data-ai-hint={heroImages[0].aiHint}
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        );
      }
