import { cn } from "@/lib/utils";
import { Lightbulb, Target } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  inView: boolean;
  className?: string;
};

const MissionVision = ({ className, inView }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10",
        className
      )}
    >
      <div className="bg-gradient-to-br from-blue-900 to-blue-900/80 rounded-2xl p-8 text-white shadow-xl">
        <div className="rounded-full bg-white/20 p-3 w-fit mb-6">
          <Target className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-white/90 text-lg">
          To empower businesses through innovative technology solutions that
          drive growth and create exceptional user experiences. We are committed
          to delivering high-quality software that solves real-world problems
          and helps our clients achieve their goals.
        </p>
      </div>

      <div className="bg-gradient-to-br from-color-1 to-color-1/80 rounded-2xl p-8 text-white shadow-xl">
        <div className="rounded-full bg-white/20 p-3 w-fit mb-6">
          <Lightbulb className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-white/90 text-lg">
          To be the leading software development partner known for delivering
          cutting-edge solutions that transform industries and improve lives. We
          aspire to create a future where technology enhances human potential
          and makes the world a better place.
        </p>
      </div>
    </motion.div>
  );
};

export default MissionVision;
