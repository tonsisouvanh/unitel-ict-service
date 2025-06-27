"use client";

import type React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
  showHome?: boolean;
  separator?: React.ReactNode;
  className?: string;
}

// Path label mappings for better UX
const pathLabels: Record<string, string> = {
  "": "Home",
  portfolio: "Portfolio",
  blog: "Blog",
  about: "About",
  services: "Services",
  contact: "Contact",
  technologies: "Technologies",
  process: "Process",
  testimonials: "Testimonials",
  // Dynamic segments
  "ecommerce-platform": "E-Commerce Platform",
  "fitness-tracking-app": "Fitness Tracking App",
  "real-estate-dashboard": "Real Estate Dashboard",
  "food-delivery-app": "Food Delivery App",
  "learning-management-system": "Learning Management System",
  "travel-companion-app": "Travel Companion",
  // Blog categories
  "web-development": "Web Development",
  "mobile-development": "Mobile Development",
  "ai-machine-learning": "AI & Machine Learning",
  devops: "DevOps",
  "ui-ux-design": "UI/UX Design",
};

function formatPathSegment(segment: string): string {
  // Check if we have a custom label
  if (pathLabels[segment]) {
    return pathLabels[segment];
  }

  // Convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Add home
  breadcrumbs.push({
    label: "Home",
    href: "/",
    isActive: pathname === "/",
  });

  // Build breadcrumbs from path segments
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    breadcrumbs.push({
      label: formatPathSegment(segment),
      href: currentPath,
      isActive: isLast,
    });
  });

  return breadcrumbs;
}

export function Breadcrumb({
  customItems,
  showHome = true,
  separator = <ChevronRight className="h-4 w-4" />,
  className = "",
}: BreadcrumbProps) {
  const pathname = usePathname();

  // Use custom items if provided, otherwise generate from pathname
  const items = customItems || generateBreadcrumbs(pathname);

  // Filter out home if showHome is false
  const displayItems = showHome ? items : items.slice(1);

  // Don't show breadcrumbs on home page unless there are custom items
  if (pathname === "/" && !customItems) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex items-center space-x-1 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {displayItems.map((item, index) => (
          <motion.li
            key={item.href}
            variants={itemVariants}
            className="flex items-center space-x-1"
          >
            {index > 0 && (
              <span
                className="text-white dark:dtext-white mx-2"
                aria-hidden="true"
              >
                {separator}
              </span>
            )}

            {item.isActive ? (
              <span
                className="font-medium text-black dark:dtext-[#F5F5F5] truncate max-w-[200px]"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-white hover:text-black dark:dtext-zinc-400 dark:dhover:text-[#F5F5F5] transition-colors duration-200 truncate max-w-[200px] flex items-center gap-1"
              >
                {index === 0 && showHome && <Home className="h-4 w-4" />}
                <span>{item.label}</span>
              </Link>
            )}
          </motion.li>
        ))}
      </ol>
    </motion.nav>
  );
}

// Breadcrumb variants for different use cases
export function SimpleBreadcrumb({ className = "" }: { className?: string }) {
  return (
    <Breadcrumb
      className={`bg-white dark:dbg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm ${className}`}
    />
  );
}

export function CompactBreadcrumb({ className = "" }: { className?: string }) {
  return (
    <Breadcrumb
      showHome={false}
      separator={<span className="text-zinc-400">/</span>}
      className={`text-xs ${className}`}
    />
  );
}

// Breadcrumb with custom styling for hero sections
export function HeroBreadcrumb({ className = "" }: { className?: string }) {
  return (
    <Breadcrumb
      className={`text-white ${className}`}
      separator={<ChevronRight className="h-4 w-4 text-white/60" />}
    />
  );
}
