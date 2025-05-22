import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Props = {
  inView: boolean;
  className?: string;
};

const Teams = ({ className, inView }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={cn("mb-16 relative z-10", className)}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5] mb-4">
          Our Leadership
        </h3>
        <p className="max-w-[800px] mx-auto text-zinc-500 text-lg dark:text-zinc-400">
          Meet the talented individuals who drive our vision and lead our teams
          to success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={"/assets/images/avatar-placeholder.png"}
                alt={`Team Member ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-color-1/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="hover:text-color-1 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="hover:text-color-1 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-color-2 dark:text-[#F5F5F5] mb-1">
                {index === 0
                  ? "Sarah Johnson"
                  : index === 1
                    ? "Michael Chen"
                    : index === 2
                      ? "Emily Rodriguez"
                      : "David Kim"}
              </h4>
              <p className="text-color-1 font-medium mb-3">
                {index === 0
                  ? "CEO & Founder"
                  : index === 1
                    ? "CTO"
                    : index === 2
                      ? "Design Director"
                      : "Head of Operations"}
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {index === 0
                  ? "Visionary leader with 15+ years of experience in the tech industry."
                  : index === 1
                    ? "Tech expert specializing in scalable architecture and emerging technologies."
                    : index === 2
                      ? "Award-winning designer focused on creating exceptional user experiences."
                      : "Operations specialist with a background in process optimization and team management."}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
