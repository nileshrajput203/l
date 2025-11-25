      "use client";
      
      import Image from "next/image";
      import { heroImages } from "@/lib/data";
      
      export default function Hero() {
        return (
          <section id="home" className="relative bg-background h-screen">
            <div className="absolute inset-0">
              <div className="relative w-full h-full overflow-hidden bg-background">
                <Image
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  data-ai-hint={heroImages[0].aiHint}
                  fill
                  className="object-cover md:object-center"
                  priority
                />
              </div>
            </div>
          </section>
        );
      }
