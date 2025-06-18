"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { coreServices } from "@/const"; // Your data source
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; // Import Next.js Image component for optimization
import * as React from "react";

export function CoreServicesCarousel() {
  const isMobile = useIsMobile();
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      {isMobile ? (
        <div className="relative w-full overflow-hidden">
          {/* <Carousel
            plugins={[plugin.current]}
            className="relative w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="">
              {coreServices.map((service, index) => (
                <CarouselItem key={index}>
                  <div
                    className={cn(
                      `bg-transparent dark:dbg-zinc-800/90 rounded-xl p-6 md:p-8 flex flex-row gap-8 items-center md:items-start transition-all duration-300 ease-in-out`,
                      isMobile ? "flex-col" : ""
                    )}
                  >
                    <div className="flex-1 space-y-4 text-center md:text-left p-4 rounded-lg">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-white dark:dtext-orange-400 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-gray-100 max-md:max-w-md dark:dtext-gray-300 text-lg">
                        {service.description}
                      </p>
                      {service.features &&
                        service.features.length > 0 && ( // Conditional rendering for features
                          <div className="max-md:hidden">
                            <h4 className="font-bold text-white dark:dtext-gray-200 mt-4 mb-2 text-xl">
                              Key Features:
                            </h4>
                            <ul className="list-disc list-inside text-white dark:dtext-gray-300 text-base space-y-1">
                              {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>

                    <div className="w-full flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600} // Set appropriate width based on your image aspect ratio and layout
                        height={400} // Set appropriate height
                        className="w-full h-auto rounded-lg object-cover shadow-md"
                        quality={85} // Optimize image quality
                        priority={index === 0} // Prioritize loading for the first image
                      />
                      {service.technologies &&
                        service.technologies.length > 0 && (
                          <div className="pt-2">
                            <h4 className="font-bold text-gray-100 mb-2 text-base md:text-lg">
                              Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {service.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel> */}
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full"
          >
            <CarouselContent className="">
              {coreServices.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="flex-1 space-y-2 mt-5 text-center md:text-left">
                      <h2 className="text-2xl md:text-4xl font-extrabold text-white dark:dtext-orange-400 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-gray-100 max-md:max-w-md dark:dtext-gray-300 text-sm">
                        {service.description}
                      </p>
                      {service.features &&
                        service.features.length > 0 && ( // Conditional rendering for features
                          <div className="max-md:hidden">
                            <h4 className="font-bold text-white dark:dtext-gray-200 mt-4 mb-2 text-xl">
                              Key Features:
                            </h4>
                            <ul className="list-disc list-inside text-white dark:dtext-gray-300 text-base space-y-1">
                              {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>

                    <div className="w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg object-cover shadow-md"
                        quality={85}
                        priority={index === 0}
                      />
                      {service.technologies &&
                        service.technologies.length > 0 && (
                          <div className="pt-2">
                            <h4 className="font-bold text-gray-100 mb-2 text-base md:text-lg">
                              Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {service.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]"></div>
          {/* A slightly darker orange for inner glow */}
          <Carousel
            plugins={[plugin.current]}
            className="relative w-full max-w-8xl mx-auto z-10"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="p-4">
              {coreServices.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 sm:px-4 md:px-6 lg:px-8"
                >
                  <div
                    className={cn(
                      `bg-transparent dark:dbg-zinc-800/90 rounded-xl p-6 md:p-8 flex flex-row gap-8 items-center md:items-start transition-all duration-300 ease-in-out`,
                      isMobile ? "flex-col" : ""
                    )}
                  >
                    {/* Content Section */}
                    <div className="flex-1 space-y-4 text-center md:text-left p-4 rounded-lg">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-white dark:dtext-orange-400 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-gray-100 max-md:max-w-md dark:dtext-gray-300 text-lg">
                        {service.description}
                      </p>
                      {service.features &&
                        service.features.length > 0 && ( // Conditional rendering for features
                          <div className="max-md:hidden">
                            <h4 className="font-bold text-white dark:dtext-gray-200 mt-4 mb-2 text-xl">
                              Key Features:
                            </h4>
                            <ul className="list-disc list-inside text-white dark:dtext-gray-300 text-base space-y-1">
                              {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                    {/* Image Section */}
                    <div className="w-full max-w-1/2 flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600} // Set appropriate width based on your image aspect ratio and layout
                        height={400} // Set appropriate height
                        className="w-full h-auto rounded-lg object-cover shadow-md"
                        quality={85} // Optimize image quality
                        priority={index === 0} // Prioritize loading for the first image
                      />
                      {service.technologies &&
                        service.technologies.length > 0 && (
                          <div className="pt-2">
                            {" "}
                            {/* Added padding top for separation */}
                            <h4 className="font-bold text-gray-100 mb-2 text-base md:text-lg">
                              Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {service.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  // Lightly transparent white background, white text for good contrast on dark gradient
                                  className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Custom positioned Carousel Navigation Buttons */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:dbg-zinc-700 dark:dhover:bg-zinc-600 transition-colors hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:dbg-zinc-700 dark:dhover:bg-zinc-600 transition-colors hidden md:flex" />
          </Carousel>
        </div>
      )}
    </>
  );
}
