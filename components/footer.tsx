import { motion } from "motion/react";
import { Facebook, Youtube } from "lucide-react";
import ServicesList from "./services-list";
import TermsList from "./term-list";
import PressList from "./press-list";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#F5F5F5] dark:bg-gray-900 pt-16 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 opacity-10 h-auto">
        <img
          src="/assets/images/logo-no-text.png"
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
      {/* Wave SVG at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-1px]">
        <svg
          className="relative block w-full h-[70px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/assets/images/logo-full.jpg"
                className="w-auto h-24"
                alt=""
              />
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/Unitel.la"
                target="_blank"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                <Facebook className="text-color-1" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@unitellao8744"
                target="_blank"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                <Youtube className="text-color-1" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </motion.div>

          <ServicesList />
          <TermsList />
          <PressList />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-700"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-zinc-500 md:text-left dark:text-zinc-400">
              © {currentYear} Unitel. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
