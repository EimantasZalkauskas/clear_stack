import { ServiceDetailLayout } from "@/components/services/pages/ServiceDetailLayout"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "System Modernisation & Digital Transformation | ClearStack",
  description: "Transform legacy systems into modern digital solutions. From paper-based processes to cloud-based automation, I help businesses modernize their operations.",
  keywords: ["digital transformation", "system modernisation", "legacy migration", "business automation", "process automation", "digital operations"],
}

export default function SystemModernisationPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      <ServiceDetailLayout
        title="System Modernisation & Digital Transformation"
        description="Bring your business into the digital age. I help companies transition from legacy systems and manual processes to modern, efficient, online-first operations that improve productivity and customer experience."
        features={[
          "Legacy system assessment and migration planning",
          "Business process automation",
          "Custom software development",
          "Data migration and integration",
          "Digital workflow design",
          "Training and change management",
          "API integration with existing tools",
          "Mobile app development",
          "Ongoing support and maintenance",
        ]}
        benefits={[
          "Eliminate manual paperwork and reduce human error",
          "Improve team productivity with streamlined digital workflows",
          "Better customer experience with online access 24/7",
          "Real-time data and insights for better decision making",
        ]}
        technologies={[
          "React",
          "Next.js",
          "Node.js",
          "Python",
          "PostgreSQL",
          "AWS",
          "REST APIs",
          "React Native",
        ]}
        processSteps={[
          {
            title: "Discovery & Analysis",
            description: "I assess your current systems, identify pain points, and understand your business goals.",
          },
          {
            title: "Solution Design",
            description: "Create a comprehensive modernisation strategy with clear milestones and deliverables.",
          },
          {
            title: "Phased Implementation",
            description: "Roll out changes incrementally to minimize disruption while delivering quick wins.",
          },
          {
            title: "Training & Handoff",
            description: "Train your team, provide documentation, and ensure a smooth transition to the new system.",
          },
        ]}
      />

      <Footer />
    </div>
  )
}
