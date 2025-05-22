"use client";
import { ProjectTechnology } from "@/lib/projects";
import { motion } from "motion/react";

interface ProjectTechnologiesProps {
  technologies: ProjectTechnology[];
}

export function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-center rounded-full px-4 py-2 text-sm font-medium"
          style={{
            backgroundColor: `${tech.color}15` || "#f5f5f5",
            color: tech.color || "#333",
            border: `1px solid ${tech.color}30` || "#e5e5e5",
          }}
        >
          {tech.icon && <span className="mr-2">{tech.icon}</span>}
          {tech.name}
        </motion.div>
      ))}
    </div>
  );
}
