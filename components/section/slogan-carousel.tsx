import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const typewriterTexts = [
  "Software Development",
  "Cybersecurity services",
  "Digital Infrastructure Service",
  "Digital Transformation Service",
  "Fraud Prevention Reconciliation",
  "T & human resource consulting and training",
];

export function SloganCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-fit"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {typewriterTexts.map((ele, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <span className="text-5xl max-sm:text-2xl font-bold leading-20 text-wrap">
                {ele}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
