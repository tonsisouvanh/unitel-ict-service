"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
  category: string;
}

const technologies = [
  {
    name: "React",
    icon: "/assets/svg/reactjs.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "/assets/svg/nextjs.svg",
    category: "Frontend",
  },
  {
    name: "Vue.js",
    icon: "/assets/svg/vuejs.svg",
    category: "Frontend",
  },
  {
    name: "Angular",
    icon: "/assets/svg/angular.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "/assets/svg/typescript.svg",
    category: "Language", // Category adjusted to Language for TypeScript
  },
  {
    name: "JavaScript",
    icon: "/assets/svg/javascript.svg", // No direct logo in provided data
    category: "Language",
  },
  {
    name: "Node.js",
    icon: "/assets/svg/nodejs.svg",
    category: "Backend",
  },
  {
    name: "Java",
    icon: "/assets/svg/java.svg",
    category: "Backend",
  },
  {
    name: "React Native",
    icon: "/assets/svg/reactjs.svg", // No direct logo in provided data for Mobile
    category: "Mobile",
  },
  {
    name: "MongoDB",
    icon: "/assets/svg/mongodb.svg",
    category: "Database",
  },
  {
    name: "MySQL",
    icon: "/assets/svg/mysql.svg",
    category: "Database",
  },
  {
    name: "AWS",
    icon: "/assets/svg/aws.svg", // Using AWS logo from Cloud & AI category
    category: "Cloud",
  },
  {
    name: "Azure",
    icon: "/assets/svg/msazure.svg", // Using Azure logo from Cloud & AI category
    category: "Cloud",
  },
  {
    name: "Google Cloud",
    icon: "/assets/svg/google-cloud.svg",
    category: "Cloud",
  },
  {
    name: "Docker",
    icon: "/assets/svg/docker.svg",
    category: "DevOps",
  },
  {
    name: "GitHub",
    icon: "/assets/svg/github.svg", // No direct logo in provided data for Tools
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: "/assets/svg/githubcopilot.svg", // No direct logo in provided data for Tools
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: "/assets/svg/gitlab.svg", // No direct logo in provided data for Tools
    category: "Tools",
  },
];

interface TechnologySliderProps {
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function TechnologySlider({
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}: TechnologySliderProps) {
  // Duplicate the technologies array to create seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x:
            direction === "left"
              ? [0, -50 * technologies.length]
              : [-50 * technologies.length, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 group-hover:border-[#F97316]/50 transition-all duration-300">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8 object-contain filterd brightness-0d invertd opacity-80d group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Tooltip */}
              {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-white dark:text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-gray-800"></div>
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Alternative slider with category grouping
export function CategorizedTechnologySlider({
  className = "",
}: {
  className?: string;
}) {
  const categories = [
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Cloud",
    "DevOps",
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {categories.map((category, categoryIndex) => {
        const categoryTechs = technologies.filter(
          (tech) => tech.category === category
        );
        const duplicatedCategoryTechs = [...categoryTechs, ...categoryTechs];

        return (
          <div key={category} className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4 items-center"
              animate={{
                x:
                  categoryIndex % 2 === 0
                    ? [0, -40 * categoryTechs.length]
                    : [-40 * categoryTechs.length, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30 + categoryIndex * 5,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCategoryTechs.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#F97316]/30 transition-all duration-300">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="w-5 h-5 object-contain filter brightness-0 invert opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// Floating technology icons
export function FloatingTechnologyIcons({
  className = "",
}: {
  className?: string;
}) {
  const featuredTechs = technologies.slice(0, 12);

  return (
    <div className={`relative h-32 overflow-hidden ${className}`}>
      {featuredTechs.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
            ease: "linear",
          }}
        >
          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
            <Image
              src={tech.icon || "/placeholder.svg"}
              alt={tech.name}
              width={20}
              height={20}
              className="w-4 h-4 object-contain filter brightness-0 invert opacity-80"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
