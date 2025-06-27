"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { technologies } from "@/const";

interface EnhancedTechnologySliderProps {
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  showGlow?: boolean;
  className?: string;
}

export function EnhancedTechnologySlider({
  speed = 1,
  direction = "left",
  pauseOnHover = true,
  showGlow = true,
  className = "",
}: EnhancedTechnologySliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const xRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time, delta) => {
    if (!isPaused && containerRef.current) {
      const moveDistance = (delta / 1000) * speed * 50;
      xRef.current += direction === "left" ? -moveDistance : moveDistance;

      // Reset position for seamless loop
      const containerWidth = containerRef.current.scrollWidth / 2;
      if (Math.abs(xRef.current) >= containerWidth) {
        xRef.current = 0;
      }

      containerRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex gap-6 items-center will-change-transform"
        style={{ width: `${duplicatedTechnologies.length * 80}px` }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 group relative"
            whileHover={{ scale: 1.15, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className={`relative w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300 ${
                showGlow
                  ? "group-hover:shadow-lg group-hover:shadow-white/20"
                  : ""
              }`}
            >
              {/* Glow effect */}
              {showGlow && (
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"
                  style={{ backgroundColor: tech.color }}
                />
              )}

              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={32}
                height={32}
                className="w-7 h-7 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300 relative z-10"
              />

              {/* Tooltip */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-[#1E3A8A] dark:text-white px-3 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="font-semibold">{tech.name}</div>
                  <div className="text-xs opacity-70">{tech.category}</div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-gray-800"></div>
              </div>

              {/* Category indicator */}
              <div
                className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Staggered multi-row slider
export function MultiRowTechnologySlider({
  className = "",
}: {
  className?: string;
}) {
  const rows = [
    technologies.slice(0, 8),
    technologies.slice(8, 16),
    technologies.slice(16, 24),
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      {rows.map((rowTechs, rowIndex) => (
        <EnhancedTechnologySlider
          key={rowIndex}
          speed={0.8 + rowIndex * 0.2}
          direction={rowIndex % 2 === 0 ? "left" : "right"}
          pauseOnHover={true}
          showGlow={true}
        />
      ))}
    </div>
  );
}
