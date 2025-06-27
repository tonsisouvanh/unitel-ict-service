"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Home } from "lucide-react";
import Link from "next/link";

export function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-gray-900 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="text-8xl md:text-9xl font-bold text-[#1E3A8A]/20 dark:text-[#F5F5F5]/20">
              404
            </div>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Search className="h-16 w-16 text-[#F97316]" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#F5F5F5]">
              Project Not Found
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              Sorry, we couldn't find the project you're looking for. It might
              have been moved, deleted, or the URL might be incorrect.
            </p>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md max-w-md w-full"
          >
            <h3 className="text-lg font-semibold text-[#1E3A8A] dark:text-[#F5F5F5] mb-4">
              What you can do:
            </h3>
            <ul className="space-y-2 text-zinc-500 dark:text-zinc-400 text-left">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                Check the URL for any typos
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                Browse our portfolio for similar projects
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                Contact us if you need specific information
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/#portfolio">
              <Button className="bg-[#F97316] text-white hover:bg-[#F97316]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#F97316]/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 dark:border-[#F5F5F5] dark:text-[#F5F5F5] dark:hover:bg-[#F5F5F5] dark:hover:text-[#1E3A8A]"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#1E3A8A]/20 rounded-full"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-3/4 right-1/4 w-6 h-6 bg-[#F97316]/20 rounded-full"
            />
            <motion.div
              animate={{
                x: [0, 60, 0],
                y: [0, -80, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#1E3A8A]/30 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
