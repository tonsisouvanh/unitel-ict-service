"use client";
import { useAnimation } from "@/lib/provider/animation-provider";
import { motion } from "motion/react";
import {
  CheckCircle,
  ClipboardList,
  Code,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react";

export function WorkProcessSection() {
  const { ref, inView } = useAnimation("process");

  const steps = [
    {
      icon: <Lightbulb className="h-10 w-10 text-[#F97316]" />,
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and requirements to define the project scope.",
    },
    {
      icon: <Search className="h-10 w-10 text-[#F97316]" />,
      title: "Research & Planning",
      description:
        "Our team researches and plans the best approach to meet your specific needs and objectives.",
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-[#F97316]" />,
      title: "Design",
      description:
        "We create wire-frames and designs that align with your brand and provide optimal user experience.",
    },
    {
      icon: <Code className="h-10 w-10 text-[#F97316]" />,
      title: "Development",
      description:
        "Our developers build your solution using the latest technologies and best practices.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#F97316]" />,
      title: "Testing & QA",
      description:
        "Rigorous testing ensures your software is bug-free, secure, and performs optimally.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#F97316]" />,
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support and maintenance to ensure its success.",
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 code-pattern"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-color-1/10 px-3 py-1 text-sm text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]">
            Our Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            How We Work
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Our proven methodology ensures high-quality, scalable, and
            maintainable software solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-color-2 to-[#F97316] transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div
                    className={`border-2 border-color-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-color-2 mb-2 dark:text-[#F5F5F5]">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-16 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg z-10 relative">
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-color-1 to-[#F97316] blur-md opacity-30"></div>
                  </div>
                </div>
                <div className="flex-1 md:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
