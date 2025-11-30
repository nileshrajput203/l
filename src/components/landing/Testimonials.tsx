
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.section
      id="testimonials"
      className="py-12 md:py-24 bg-secondary"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.whileInView}
      transition={fadeInAnimation.transition}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from families who have found their dream homes with us.
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{ loop: true, align: "start" }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="h-full flex flex-col justify-between shadow-lg">
                       <CardContent className="p-4 md:p-6 flex-grow flex flex-col">
                         <div className="mb-4 md:mb-5">
                            <Image
                                src={testimonial.avatar}
                                alt={`${testimonial.author}'s avatar`}
                                width={56}
                                height={56}
                                className="rounded-full object-cover w-14 h-14 md:w-16 md:h-16 shadow-md"
                            />
                        </div>
                        <blockquote className="text-sm md:text-base text-muted-foreground italic flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                      <div className="p-4 md:p-6 pt-0">
                        <p className="font-bold text-base md:text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
}
