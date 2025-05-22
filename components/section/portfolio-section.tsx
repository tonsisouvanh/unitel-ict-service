"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAnimation } from "@/lib/provider/animation-provider";
import { motion } from "motion/react";
import ProjectCard from "../project/project-card";

export function PortfolioSection() {
  const { ref, inView } = useAnimation("portfolio");

  const projects = [
    {
      category: "web",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with advanced product filtering and secure payment processing.",
      image: "/assets/images/ecommerce-app.png",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      category: "mobile",
      title: "Fitness Tracking App",
      description:
        "A mobile app that helps users track their workouts, nutrition, and progress towards fitness goals.",
      image: "/assets/images/ecommerce-app.png",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
    },
    {
      category: "web",
      title: "Real Estate Dashboard",
      description:
        "An admin dashboard for real estate agents to manage listings, clients, and transactions.",
      image: "/assets/images/ecommerce-app.png",
      tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    },
    {
      category: "mobile",
      title: "Food Delivery App",
      description:
        "A mobile app connecting users with local restaurants for food delivery and pickup orders.",
      image: "/assets/images/ecommerce-app.png",
      tags: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    },
    {
      category: "web",
      title: "Learning Management System",
      description:
        "An online platform for educational institutions to manage courses, students, and learning materials.",
      image: "/assets/images/ecommerce-app.png",
      tags: ["Next.js", "TypeScript", "AWS", "MySQL"],
    },
    {
      category: "mobile",
      title: "Travel Companion",
      description:
        "A travel app with itinerary planning, booking integration, and local recommendations.",
      image: "/assets/images/ecommerce-app.png",
      tags: ["React Native", "GraphQL", "MongoDB", "AWS"],
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5] dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-color-1/10 px-3 py-1 text-sm text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]">
            Our Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]">
            Recent Projects
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Explore our latest work and see how we've helped businesses achieve
            their goals.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8 "
          >
            <TabsList className="bg-color-1/10 dark:bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger
                className="data-[state=active]:bg-color-1 data-[state=active]:text-white"
                value="all"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-color-1 data-[state=active]:text-white"
                value="web"
              >
                Web Apps
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-color-1 data-[state=active]:text-white"
                value="mobile"
              >
                Mobile Apps
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "web")
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    inView={inView}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "mobile")
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    inView={inView}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
