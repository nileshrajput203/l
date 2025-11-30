
"use client";

import Image from "next/image";
import { Home, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.section 
      id="about" 
      className="py-12 md:py-24 bg-secondary"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
    >
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            Building with Integrity, Delivering with Excellence
          </h3>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            For over a decade, Navkar Group has shaped neighbourhoods with
            thoughtfully designed projects that prioritise liveability,
            sustainability and value creation. Our commitment spans the full
            lifecycle — from land acquisition to design, construction and
            customer care.
          </p>

          <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <f.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="font-semibold text-base md:text-lg">{f.title}</div>
                  <div className="text-sm md:text-base text-muted-foreground">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
            <Image
              src="https://i.postimg.cc/C1yFnRbZ/bldg-3-20x30.jpg"
              alt="Modern building by Navkar Group"
              data-ai-hint="modern building"
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
