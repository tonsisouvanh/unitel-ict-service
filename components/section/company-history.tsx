import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Props = {
  inView: boolean;
  className?: string;
};
const timelineEvents = [
  {
    year: "2013",
    title: "Company Founded",
    description:
      "Unitel was founded with a vision to create innovative software solutions.",
  },
  {
    year: "2015",
    title: "First Major Client",
    description:
      "Secured our first enterprise client and expanded our team to 15 members.",
  },
  {
    year: "2017",
    title: "International Expansion",
    description:
      "Opened our first international office and started serving clients globally.",
  },
  {
    year: "2019",
    title: "Award Recognition",
    description:
      "Received industry recognition for our innovative approach to software development.",
  },
  {
    year: "2021",
    title: "50+ Team Members",
    description:
      "Reached a milestone of 50 team members and 100+ successful projects.",
  },
  {
    year: "2023",
    title: "New Headquarters",
    description:
      "Moved to a new headquarters and launched our advanced R&D department.",
  },
];
const CompanyHistory = ({ className, inView }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={cn("mb-24 relative z-10", className)}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5] mb-4">
          Our Journey
        </h3>
        <p className="max-w-[800px] mx-auto text-zinc-500 text-lg dark:text-zinc-400">
          From our humble beginnings to where we are today, our journey has been
          defined by growth, innovation, and a relentless pursuit of excellence.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-color-2 to-color-1 transform md:-translate-x-1/2"></div>

        <div className="space-y-12 relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="text-color-1 font-bold text-xl mb-2">
                    {event.year}
                  </div>
                  <h4 className="text-xl font-bold text-color-2 dark:text-[#F5F5F5] mb-2">
                    {event.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="md:w-16 flex justify-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-color-2 flex items-center justify-center shadow-lg z-10 relative"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-color-2 to-color-1 blur-md opacity-30"></div>
                </div>
              </div>
              <div className="flex-1 md:block hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyHistory;
