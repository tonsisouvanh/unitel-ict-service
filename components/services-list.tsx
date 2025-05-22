import { motion } from "motion/react";
import Link from "next/link";

const servicesData = [
  "Web Development",
  "Fraud Prevention Reconciliation",
  "Network Security",
  "Digital Infrastructure",
  "Digital Transformation Service",
  "Fraud Prevention Reconciliation",
];

const ServicesList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-bold text-color-1 dark:text-[#F5F5F5]">
        Services
      </h3>
      <ul className="space-y-2">
        {servicesData.map((service, index) => (
          <li key={index}>
            <Link
              href="/#services"
              className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServicesList;
