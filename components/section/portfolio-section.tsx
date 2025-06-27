"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProjects } from "@/lib/projects";
import { useAnimation } from "@/lib/provider/animation-provider";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import * as React from "react";
import ProjectCard from "../project/project-card";

export function PortfolioSection() {
  const { ref, inView } = useAnimation("portfolio");
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const projects = getProjects() || [];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5] dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-color-1/10 px-3 py-1 text-sm text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]">
            Our Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Recent Projects
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Explore our latest work and see how we've helped businesses achieve
            their goals.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8 "
          >
            <TabsList className="bg-color-1/10 dark:bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger
                className="data-[state=active]:bg-color-1 data-[state=active]:text-white"
                value="all"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-color-1 data-[state=active]:text-white"
                value="web"
              >
                Web Apps
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-color-1 data-[state=active]:text-white"
                value="mobile"
              >
                Mobile Apps
              </TabsTrigger>
            </TabsList>
          </motion.div>
          <TabsContent value="all" className="mt-0">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="p-3">
                {projects.map((project, index) => (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3"
                    key={index}
                  >
                    <ProjectCard
                      project={project}
                      index={index}
                      inView={inView}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-color-1 text-white rounded-full p-2 shadow-lg dark:dbg-zinc-700 hover:bg-color-1/70 transition-colors hidden md:flex" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-color-1 text-white rounded-full p-2 shadow-lg dark:dbg-zinc-700 hover:bg-color-1/70 transition-colors hidden md:flex" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
