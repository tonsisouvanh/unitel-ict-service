import type { Metadata } from "next";
import { PrivacyContent } from "./components/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | TechNova",
  description:
    "Learn about how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-color-1 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 code-pattern"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#F5F5F5]/10 px-3 py-1 text-sm text-[#F5F5F5]">
              Our Commitment
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-[#F5F5F5] sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="max-w-[900px] text-[#F5F5F5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn about how we collect, use, and protect your personal
              information.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <PrivacyContent />
    </main>
  );
}
