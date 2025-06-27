"use client";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  FileText,
  BookOpen,
  Download,
} from "lucide-react"; // Import Download icon
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
      case "download": // Added case for download link
        return <Download className="h-4 w-4 mr-2" />;
      default:
        return <ExternalLink className="h-4 w-4 mr-2" />;
    }
  };

  const getButtonVariant = (type: string) => {
    switch (type) {
      case "live":
        return "default"; // Primary action button
      case "github":
        return "outline"; // Outline for secondary actions like GitHub
      case "download": // Distinct variant for download
        return "default"; // Can be 'default' or a custom variant if you define one
      case "documentation":
      case "case-study":
        return "secondary"; // Less prominent for documentation/case studies
      default:
        return "secondary";
    }
  };

  // Added custom styling for download button if 'default' isn't distinct enough
  // This can be applied via `className` prop directly on the Button
  const getButtonClassNames = (type: string) => {
    if (type === "download") {
      return "bg-color-1";
    }
    // You can add more custom classes here for other types if needed
    return "";
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
              variant={getButtonVariant(link.type) as any} // Cast as any because variant types might not perfectly match string literals
              className={`flex items-center ${getButtonClassNames(link.type)}`}
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
