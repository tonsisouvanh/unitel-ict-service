"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coreServices } from "@/const";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAnimation } from "@/lib/provider/animation-provider";
import { CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function ServiceShowcase() {
  const { ref, inView } = useAnimation("service-showcase");
  const isMobile = useIsMobile();
  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-color-1/3 ">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-full bg-color-1/10 px-4 py-1.5 text-sm font-medium text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]">
            Core Expertise
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Our <span className="text-color-1">Key Services</span>
          </h2>
          <p className="max-w-[800px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
            Explore our core services that help businesses transform their
            digital presence and operations.
          </p>
        </motion.div>

        <Tabs defaultValue="web" className="w-full mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${
              isMobile
                ? "relative rounded-sm overflow-x-auto h-10 bg-muted"
                : "flex justify-center"
            }`}
          >
            <TabsList
              className={`${
                isMobile
                  ? "absolute flex flex-row justify-stretch w-full"
                  : "bg-gray-100 dark:bg-gray-800 p-1 rounded-full"
              }`}
            >
              {coreServices.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-color-1 data-[state=active]:text-white rounded-full px-6 py-2 transition-all duration-300 cursor-pointer"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {coreServices.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5]">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-lg dark:text-zinc-400">
                    {service.description}
                  </p>

                  <div className="space-y-4 mt-8">
                    <h4 className="text-xl font-semibold text-color-2 dark:text-[#F5F5F5]">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-color-1 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-zinc-700 dark:text-zinc-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 mt-8">
                    <h4 className="text-xl font-semibold text-color-2 dark:text-[#F5F5F5]">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-color-2 px-3 py-1 rounded-full text-sm font-medium dark:bg-gray-800 dark:text-[#F5F5F5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/#contact">
                      <Button className="bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full">
                        Get Started
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xld bg-whited">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={500}
                      height={500}
                      quality={100}
                      className="object-fill w-full h-full bg-white"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-tr from-color-1/10 to-transparent"></div> */}
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-color-1/10 rounded-full"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-color-2/10 rounded-full z-[-1]d"></div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
