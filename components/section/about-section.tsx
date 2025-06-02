"use client";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/lib/provider/animation-provider";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CompanyHistory from "./company-history";
import CompanyOverview from "./company-overview";
import CoreValue from "./core-value";
import MissionVision from "./mission-vision";
import Teams from "./teams";
import Link from "next/link";

export function AboutSection() {
  const { ref, inView } = useAnimation("about");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      ref={ref}
      className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div ref={containerRef} className="container px-4 md:px-6 relative">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-0 w-64 h-64 rounded-full bg-color-2/5 dark:bg-color-2/10 z-0"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-color-1/5 dark:bg-color-1/10 z-0"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16 relative z-10"
        >
          <div className="inline-block rounded-full bg-color-1/10 px-4 py-1.5 text-sm font-medium text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]">
            About Us
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Our <span className="text-color-1">Story</span>
          </h2>
          <p className="max-w-[800px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
            We are a team of passionate developers, designers, and strategists
            dedicated to creating exceptional software solutions that transform
            businesses and drive innovation.
          </p>
        </motion.div>

        {/* Company Overview */}
        <CompanyOverview inView={inView} />

        {/* Mission & Vision */}
        <MissionVision className="" inView={inView} />

        {/* Core Values */}
        <CoreValue className="hidden" inView={inView} />

        {/* Company History */}
        <CompanyHistory className="hidden" inView={inView} />

        {/* Team Section */}
        {/* <Teams inView={inView} /> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center relative z-10"
        >
          <Link href="/#contact">
            <Button className="bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full">
              Join Our Team
              <ArrowRight />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
