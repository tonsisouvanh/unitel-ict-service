"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { ProjectLink } from "@/lib/projects";

interface ProjectLinksProps {
  links: ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "live":
        return <ExternalLink className="h-4 w-4 mr-2" />;
      case "github":
        return <Github className="h-4 w-4 mr-2" />;
      case "documentation":
        return <FileText className="h-4 w-4 mr-2" />;
      case "case-study":
        return <BookOpen className="h-4 w-4 mr-2" />;
      default:
        return <ExternalLink className="h-4 w-4 mr-2" />;
    }
  };

  const getButtonVariant = (type: string) => {
    switch (type) {
      case "live":
        return "default";
      case "github":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <Button
              variant={getButtonVariant(link.type) as any}
              className="flex items-center"
            >
              {getIcon(link.type)}
              {link.title}
            </Button>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
