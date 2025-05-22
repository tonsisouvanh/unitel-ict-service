"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useAnimation } from "@/lib/provider/animation-provider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

// Partner data structure
interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  website?: string;
  tier: "platinum" | "gold" | "silver"; // For potential filtering or highlighting
}

// Sample partner data - in a real app, this might come from an API or CMS
const partners: Partner[] = [
  {
    id: "viettel",
    name: "Viettel",
    description: "",
    logo: "/assets/images/partners/viettel.png",
    website: "https://www.vietteltelecom.vn/vx/",
    tier: "platinum",
  },
  {
    id: "laovietbank",
    name: "LAOVIET Bank",
    description: "",
    logo: "/assets/images/partners/laoviet-bank.png",
    website: "https://www.laovietbank.com.la/",
    tier: "platinum",
  },
  {
    id: "nokia",
    name: "Nokia",
    description: "",
    logo: "/assets/images/partners/nokia.png",
    website: "https://www.nokia.com/",
    tier: "gold",
  },
  {
    id: "bcel",
    name: "BCEL",
    description: "",
    logo: "/assets/images/partners/bcel.png",
    website: "https://www.bcel.com.la/bcel/home.html",
    tier: "gold",
  },
  {
    id: "huawei",
    name: "Huawei",
    description: "",
    logo: "/assets/images/partners/huawei.png",
    website: "https://www.huawei.com/en/",
    tier: "silver",
  },
  {
    id: "mbbank",
    name: "MB Bank Laos",
    description: "",
    logo: "/assets/images/partners/mbbank.png",
    website: "https://mbbank.com.la/",
    tier: "silver",
  },
  {
    id: "ericsson",
    name: "Ericsson",
    description: "",
    logo: "/assets/images/partners/ericsson.png",
    website: "https://www.ericsson.com/en",
    tier: "silver",
  },
  {
    id: "apb",
    name: "APB",
    description: "",
    logo: "/assets/images/partners/apb.png",
    website: "https://www.apbsingapore.com.sg/",
    tier: "silver",
  },
];

export function PartnersSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const { ref, inView } = useAnimation("partners");
  const isMobile = useIsMobile();
  const [hoveredPartnerId, setHoveredPartnerId] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="partners"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-[url('/assets/images/partners/handshake.jpg')] bg-no-repeat bg-center bg-cover"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full bg-color-1 opacity-60"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-lg bg-white/80 px-3 py-1 text-sm text-color-2 dark:bg-color-2/20 dark:text-[#F5F5F5]">
            Trusted By Industry Leaders
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Our <span className="text-white">Partners</span>
          </h2>
          <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            We collaborate with leading organizations to deliver exceptional
            solutions and drive innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Carousel
            opts={{ align: "start" }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem
                  className="basis-1/2 md:basis-1/5"
                  key={partner.id}
                >
                  <motion.div
                    key={partner.id}
                    variants={itemVariants}
                    className="bg-transparent rounded-xl overflow-hidden"
                    onMouseEnter={() => setHoveredPartnerId(partner.id)}
                    onMouseLeave={() => setHoveredPartnerId(null)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-center items-center h-32 md:mb-3 mb-0 relative">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={`${partner.name} logo`}
                            width={240}
                            height={120}
                            className="object-contain max-h-full transition-transform duration-300"
                            style={{
                              transform:
                                hoveredPartnerId === partner.id && !isMobile
                                  ? "scale(1.05)"
                                  : "scale(1)",
                            }}
                          />

                          {/* Animated glow effect on hover */}
                          {hoveredPartnerId === partner.id && !isMobile && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.7 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-gradient-to-r from-color-2/0 via-color-2/5 to-color-2/0 rounded-full filter blur-xl"
                            />
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white text-center">
                        {partner.name}
                      </h3>
                      {partner.website && (
                        <div className="mt-auto text-center">
                          <Link
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-zinc-100 hover:text-color-2 transition-colors duration-300"
                          >
                            Visit Partner
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </motion.div>

        {/* Partner with us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-xl p-[2px]">
            <div className="bg-white/80 dark:bg-gray-900 rounded-lg px-6 py-4">
              <p className="text-lg font-medium text-color-2 dark:text-[#F5F5F5] mb-2">
                Interested in becoming a partner?
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                Join our partner ecosystem and let's create innovative solutions
                together.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center text-[#F97316] hover:text-color-2 dark:hover:text-[#F5F5F5] font-medium transition-colors duration-300"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
