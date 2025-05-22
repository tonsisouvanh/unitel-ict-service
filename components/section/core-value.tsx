import { cn } from "@/lib/utils";
import { Heart, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  inView: boolean;
  className?: string;
};
const coreValues = [
  {
    icon: <Lightbulb className="h-8 w-8 text-color-1" />,
    title: "Innovation",
    description:
      "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: <Target className="h-8 w-8 text-color-1" />,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality in everything we do.",
  },
  {
    icon: <Users className="h-8 w-8 text-color-1" />,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and partnership with our clients.",
  },
  {
    icon: <Heart className="h-8 w-8 text-color-1" />,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical business practices.",
  },
];
const CoreValue = ({ inView, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn("mb-24 relative z-10", className)}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5] mb-4">
          Our Core Values
        </h3>
        <p className="max-w-[800px] mx-auto text-zinc-500 text-lg dark:text-zinc-400">
          These principles guide our actions and decisions, shaping our company
          culture and the way we work with our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="rounded-full bg-color-2/10 dark:bg-color-2/20 p-3 w-fit mb-4">
              {value.icon}
            </div>
            <h4 className="text-xl font-bold text-color-2 dark:text-[#F5F5F5] mb-2">
              {value.title}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoreValue;
