
import { CaseStudiesSection } from "@/components/case_studies/caseStudies";
import { CTASection } from "@/components/contact/ctaSection";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero/heroSection";
import Navbar from "@/components/navbar";
import { ServicesSection } from "@/components/services/services_section";
import { StatsSection } from "@/components/stats/stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClearStack | Web Development & Cloud Solutions Expert",
  description: "Expert web development, backend engineering, and cloud solutions. Specializing in custom websites, scalable backend systems, cloud migration, and digital transformation.",
  keywords: ["web development", "backend development", "cloud solutions", "system modernisation", "full stack developer", "React", "Next.js", "AWS", "cloud migration", "API development"],
  authors: [{ name: "ClearStack" }],
  openGraph: {
    title: "ClearStack | Web Development & Cloud Solutions",
    description: "Transform your business with modern technology. From custom websites to enterprise cloud infrastructure.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Navigation */}
      <section className="background-primary w-full flex justify-center items-center">
      <Navbar />
      </section>
      <section className="background-primary min-h-screen w-full flex justify-center items-center">
      {/* Hero */}
        <HeroSection />
      </section>

      <section className="background-secondary py-16 w-full flex justify-center items-center">
        {/* Stats */}
        <StatsSection/>
      </section>

      <section className="background-primary min-h-screen w-full flex justify-center items-center">
        {/* Services */}
        <ServicesSection/>
      </section>

      <section className="background-secondary min-h-screen w-full flex justify-center items-center">
        {/* Case Studies */}
        <CaseStudiesSection/>

      </section>

      <section className="background-primary min-h-screen w-full flex justify-center items-center">
        {/* Get In Touch */}
          <CTASection/>
      </section>

      <section className="background-secondary w-full flex justify-center items-center">
        {/* Footer */}
        <Footer/>

      </section>
    </div>
  );
}
