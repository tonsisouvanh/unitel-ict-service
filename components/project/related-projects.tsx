import { Project } from "@/lib/projects";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-[#1E3A8A] dark:text-[#F5F5F5] mb-6">
        Related Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    src={project.images[0].src || "/placeholder.svg"}
                    alt={project.images[0].alt}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#1E3A8A] dark:text-[#F5F5F5] group-hover:text-[#F97316] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.category}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center text-[#1E3A8A] dark:text-[#F5F5F5] hover:text-[#F97316] dark:hover:text-[#F97316] font-medium transition-colors duration-300"
        >
          View All Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
