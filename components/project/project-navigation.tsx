"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Project } from "@/lib/projects";
import Link from "next/link";

interface ProjectNavigationProps {
  previousProject?: Project;
  nextProject?: Project;
}

export function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <div className="flex hidden justify-between items-center py-8 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div>
        {previousProject && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/projects/${previousProject.slug}`}>
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Previous Project
                  </span>
                  <span className="font-medium">{previousProject.title}</span>
                </div>
              </Button>
            </Link>
          </motion.div>
        )}
      </div>

      <div>
        {nextProject && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/projects/${nextProject.slug}`}>
              <Button variant="outline" className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Next Project
                  </span>
                  <span className="font-medium">{nextProject.title}</span>
                </div>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
