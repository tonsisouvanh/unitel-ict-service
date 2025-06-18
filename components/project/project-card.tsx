"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  project: Project;
  index: number;
  inView: boolean;
};

const ProjectCard = ({ className, project, index, inView }: Props) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden card-hover border-0 shadow-lg pt-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.images[0].src || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            width={200}
            height={200}
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-color-1 mb-2 dark:dtext-[#F5F5F5]">
            {project.title}
          </h3>
          <p className="text-zinc-500 mb-4 dark:dtext-zinc-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-color-1/10 text-color-2 dark:dbg-color-2/20 dark:dtext-[#F5F5F5]"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link href={`/projects/${project.slug}`}>
            <Button
              variant="outline"
              className="w-full bg-color-1 text-white hover:bg-color-1/70 hover:text-white transition-all duration-300"
            >
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
