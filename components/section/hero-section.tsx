"use client";
import animationData from "@/animations/developing-lottie.json";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/lib/provider/animation-provider";
import Lottie from "lottie-react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { SloganCarousel } from "./slogan-carousel";

export function HeroSection() {
  const { ref, inView } = useAnimation("hero");

  return (
    <section
      ref={ref}
      id="hero"
      className="w-full relative overflow-hidden py-12 bg-white"
    >
      <div className="text-center px-6 relative z-[1] space-y-10 max-sm:space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex flex-col justify-center items-center gap-10 max-sm:gap-3"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tighter text-[#F5F5F5] sm:text-5xl xl:text-6xl/none">
              ICT Services - Star Telecom
              {/* <span className="text-color-2 max-lg:block">
              <TypewriterEffect
              texts={typewriterTexts}
                className="min-h-[1.2em] inline-block leading-20"
                />
                </span> */}
            </h1>
            <SloganCarousel />
          </div>

          <p className="max-w-[600px] text-[#F5F5F5] text-shadow-md md:text-xl">
            Providing IT Services management services for all aspects related to
            digital technology.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-5 min-[400px]:flex-row"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F5F5F5]  hover:bg-[#F5F5F5] bg-transparent text-white transition-all duration-300"
              >
                Our Services
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-sm:mt-5d max-w-fit mx-auto bg-whited rounded-lg shadow-lgd w-80 md:w-[400px]"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="h-[400px] max-sm:h-[300px]"
          />
        </motion.div>
      </div>
      <div className="absolute ml-[-50%] h-[500px]d w-[200%] rounded-b-[100%] top-0 bg-[url(/assets/images/hero-bg.jpg)] bg-center bg-fill h-full max-h-[600px] bg-no-repeat"></div>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-color-1 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
