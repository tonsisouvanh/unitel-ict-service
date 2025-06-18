"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./language-swticher";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Partners", href: "/#partners" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const isActive = (href: string) => {
    // const [path, hash] = href.split("#");
    // return pathname === path && (hash ? currentHash === `#${hash}` : true);
    return false;
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-color-1/80 backdrop-blur-md shadow-md dark:bg-gray-900/80"
          : "bg-color-1"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/#hero" className="flex items-center gap-2">
          <motion.div className="w-[50px] h-[50px]">
            <Image
              src="/assets/images/logo-white-bg.png"
              alt="Unitel logo"
              className="object-cover w-full h-full"
              width={500}
              height={500}
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 text-shadow-lg ${
                isActive(link.href)
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="flex items-center gap-3">
          <Link href="/#contact" className="hidden md:flex gap-4">
            <Button className="bg-white text-color-2 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20">
              Get Started
            </Button>
          </Link>
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div className="md:hidden overflow-hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-white shadow-md dark:bg-gray-900">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-color-1"
                      : "text-color-2 hover:text-color-1"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="space-y-3">
              <Button className="w-full bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20">
                Get Started
              </Button>
              <div className="">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
