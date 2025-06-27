"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
