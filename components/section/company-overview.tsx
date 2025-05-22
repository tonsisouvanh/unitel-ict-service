import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Props = {
  inView: boolean;
  className?: string;
};
const achievements = [
  { number: "10+", label: "Years of Experience" },
  { number: "100+", label: "Projects Delivered" },
  { number: "50+", label: "Team Members" },
  { number: "20+", label: "Countries Served" },
];
const CompanyOverview = ({ className, inView }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
        className={cn("relative", className)}
      >
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
          <img
            src={"/assets/images/unitel-building.jpg"}
            alt="Our Team"
            className="object-cover w-full h-full "
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-color-1/40 to-transparent"></div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-color-1/10 rounded-full z-[-1]"></div>
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-color-2/10 rounded-full z-[-1]"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-bold text-color-2 dark:text-[#F5F5F5]">
          Who We Are
        </h3>
        <p className="text-zinc-500 text-lg dark:text-zinc-400">
          {/* Founded in 2013, Unitel has grown from a small startup to a
              leading software development company with a global presence. Our
              journey has been driven by a passion for technology and a
              commitment to delivering exceptional value to our clients. */}
          Over the past 11 years, under the brand name "Unitel", Star Telecom
          Company Limited has grown rapidly and developed leapfrog from the
          smallest network in Laos to the number one network in providing
          services to society by providing comprehensive telecommunications
          services, with 3G; 4G; 4.5G mobile internet networks covering 100% of
          all provinces nationwide, the largest and most extensive mobile signal
          transmission infrastructure, including more than 9,000 base stations,
          a 30,000 km fiber optic cable transmission system covering remote
          areas, and providing modern technology services in all areas, which is
          an important contribution to the digital transformation of the Lao
          PDR.
        </p>
        <p className="text-zinc-500 hidden text-lg dark:text-zinc-400">
          {/* Today, we are a team of 50+ talented professionals working
              together to create innovative solutions that help businesses
              thrive in the digital age. Our expertise spans across various
              technologies and industries, allowing us to tackle complex
              challenges and deliver results that exceed expectations. */}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-color-1 mb-1">
                {achievement.number}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyOverview;
