import { motion } from "motion/react";

export function BlogHeader() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-color-1 relative overflow-hidden">
      <img
        className="absolute inset-0 opacity-10 w-full h-full object-cover"
        src="/assets/images/blog-header-bg.jpg"
        alt=""
      />
      <div className="absolute inset-0 opacity-10 code-pattern"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-block rounded-lg bg-[#F5F5F5]/10 px-3 py-1 text-sm text-[#F5F5F5]">
            TechNova Blog
          </div>
          <h1 className="text-3xl font-bold tracking-tighter text-[#F5F5F5] sm:text-5xl md:text-6xl">
            Insights & Expertise
          </h1>
          <p className="max-w-[900px] text-[#F5F5F5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our collection of articles, tutorials, and insights on
            software development, technology trends, and industry best
            practices.
          </p>
        </motion.div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div> */}
    </section>
  );
}
