"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 px-4">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-color-2/5 to-[#F97316]/5 dark:from-color-2/10 dark:to-[#F97316]/10"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[#F97316]/5 to-color-2/5 dark:from-[#F97316]/10 dark:to-color-2/10"></div>

      <div className="max-w-3xl w-full text-center z-10">
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="text-[150px] md:text-[200px] font-bold text-color-2/10 dark:text-color-2/20">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl md:text-6xl font-bold text-color-2 dark:text-[#F5F5F5]">
                  Oops!
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-color-2 dark:text-[#F5F5F5] mb-4">
          Page Not Found
        </h1>

        <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search our site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-color-2 dark:border-zinc-700 dark:bg-gray-800 dark:text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-color-2 hover:bg-color-2/90 text-white">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-color-2 text-color-2 hover:bg-color-2 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Visit Our Blog
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-color-2 to-[#F97316] p-1 mb-4">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <span className="text-xl font-bold gradient-text">TN</span>
              {/* Added for testing purposes. */}
            </div>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Unitel. All rights reserved.
          </p>
        </div>
      </div>

      {/* Static code blocks */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-[200px] opacity-30">
          <div className="flex space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-[200px] opacity-30">
          <div className="flex space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
