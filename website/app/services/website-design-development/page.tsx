import { ServiceDetailLayout } from "@/components/services/pages/ServiceDetailLayout"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Design & Development | ClearStack",
  description: "Custom website design and development services. I build fast, responsive, and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.",
  keywords: ["website design", "web development", "React", "Next.js", "Tailwind CSS", "responsive design", "custom websites"],
}

export default function WebsiteDesignDevelopmentPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      <ServiceDetailLayout
        title="Website Design & Development"
        description="Transform your vision into a stunning digital presence. I create custom websites that are fast, responsive, and designed to convert visitors into customers."
        features={[
          "Custom responsive design optimized for all devices",
          "Modern tech stack (React, Next.js, TypeScript)",
          "SEO-optimized structure and performance",
          "Fast page load times (<3 seconds)",
          "Intuitive user interface and navigation",
          "Content management system integration",
          "E-commerce functionality (if needed)",
          "Analytics and tracking setup",
          "Ongoing maintenance and support",
        ]}
        benefits={[
          "Professional online presence that builds trust and credibility",
          "Mobile-first design ensures great experience on any device",
          "SEO optimization helps you rank higher in search results",
          "Fast loading speeds reduce bounce rates and improve conversions",
        ]}
        technologies={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
          "Vercel",
          "AWS",
        ]}
        processSteps={[
          {
            title: "Discovery",
            description: "We discuss your goals, target audience, and requirements to create a clear project roadmap.",
          },
          {
            title: "Design",
            description: "I create wireframes and mockups that bring your vision to life with modern design principles.",
          },
          {
            title: "Development",
            description: "Your website is built using best practices, with regular updates and opportunities for feedback.",
          },
          {
            title: "Launch & Support",
            description: "After thorough testing, we launch your site and I provide ongoing support to ensure everything runs smoothly.",
          },
        ]}
      />

      <Footer />
    </div>
  )
}
