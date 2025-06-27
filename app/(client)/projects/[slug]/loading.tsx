"use client";

import { motion } from "framer-motion";

export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-gray-900">
      {/* Hero Section Skeleton */}
      <div className="w-full py-12 md:py-24 lg:py-32 bg-color-1 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 code-pattern"></div>
        <div className="container px-4 md:px-6 relative z-10">
          {/* Title Skeleton */}
          <div className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="h-4 bg-white/20 rounded w-24"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.2,
              }}
              className="h-12 bg-white/20 rounded w-3/4"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.4,
              }}
              className="h-6 bg-white/20 rounded w-full"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.6,
              }}
              className="h-6 bg-white/20 rounded w-2/3"
            />
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <div className="space-y-6">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48"
              />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                    }}
                    className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"
                  />
                ))}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                  className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"
                />
              </div>
            </div>

            {/* Gallery Skeleton */}
            <div className="space-y-6">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.2,
                }}
                className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-32"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                    }}
                    className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((section) => (
                <div key={section} className="space-y-4">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: section * 0.1,
                    }}
                    className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-32"
                  />
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: (section * 3 + i) * 0.1,
                        }}
                        className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-6">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-32"
              />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                      }}
                      className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"
                    />
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1 + 0.1,
                      }}
                      className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-4">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.2,
                }}
                className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-28"
              />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                    }}
                    className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
