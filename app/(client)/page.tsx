import { AboutSection } from "@/components/section/about-section";
import { ContactSection } from "@/components/section/contact-section";
import { HeroSection } from "@/components/section/hero-section";
import { PartnersSection } from "@/components/section/partner-section";
import { PortfolioSection } from "@/components/section/portfolio-section";
import { ServicesSection } from "@/components/section/service-section";
import { ServiceShowcase } from "@/components/section/service-showcase";
import { TechnologiesSection } from "@/components/section/technologies-section";
import { WorkProcessSection } from "@/components/section/work-process-section";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
        }
      >
        <ParticlesBackground />
        <HeroSection />
        <ServicesSection />
        <ServiceShowcase />
        <AboutSection />
        <TechnologiesSection />
        <WorkProcessSection />
        <PortfolioSection />
        <PartnersSection />
        {/* <TestimonialsSection /> */}
        {/* <BlogSection /> */}
        <ContactSection />
      </Suspense>
    </main>
  );
}
