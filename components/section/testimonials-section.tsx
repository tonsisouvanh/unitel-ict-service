"use client";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useState } from "react";
import { useAnimation } from "@/lib/provider/animation-provider";
import Image from "next/image";

export function TestimonialsSection() {
  const { ref, inView } = useAnimation("testimonials");
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Unitel delivered our project on time and within budget. Their team's expertise and dedication resulted in a product that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
    },
    {
      quote:
        "Working with Unitel has been a game-changer for our business. Their innovative solutions helped us streamline operations and increase revenue by 40%.",
      author: "Michael Chen",
      position: "CEO, GlobalTech",
    },
    {
      quote:
        "The team at Unitel truly understands our business needs. They've become an invaluable partner in our digital transformation journey.",
      author: "Emily Rodriguez",
      position: "Product Manager, InnovateCorp",
    },
    {
      quote:
        "Unitel's expertise in modern web technologies helped us transform our outdated platform into a cutting-edge solution that our customers love.",
      author: "David Kim",
      position: "Director of Technology, FutureSoft",
    },
    {
      quote:
        "We've been working with Unitel for over 3 years now. Their consistent quality and reliability make them our go-to development partner.",
      author: "Jessica Martinez",
      position: "COO, NextLevel Systems",
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden "
    >
      <div className="absolute w-full h-full inset-0 opacity-20">
        <Image
          width={500}
          height={500}
          src="/assets/images/react-light.png"
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      <div className="absolute inset-0 opacity-5 code-pattern"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-color-1/10 px-3 py-1 text-sm text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            What Our Clients Say
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="shadow-lg border border-color-1/50 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-color-1 mb-4 opacity-50" />
                <p className="text-xl md:text-2xl text-zinc-700 mb-6 italic dark:text-zinc-300">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gradient-to-r from-color-2 to-color-1 p-1 mr-4">
                    <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-lg font-bold text-color-2 dark:text-[#F5F5F5]">
                        {testimonials[activeIndex].author.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-color-2 dark:text-[#F5F5F5]">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {testimonials[activeIndex].position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-color-1 w-6"
                    : "bg-color-2/20 hover:bg-color-2/40 dark:bg-[#F5F5F5]/20 dark:hover:bg-[#F5F5F5]/40"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
