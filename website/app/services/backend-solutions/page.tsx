import { ServiceDetailLayout } from "@/components/services/pages/ServiceDetailLayout"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Backend Solutions & API Development | ClearStack",
  description: "Scalable backend systems and API development services. I build robust server infrastructure, RESTful APIs, and databases that power your applications.",
  keywords: ["backend development", "API development", "Node.js", "Python", "PostgreSQL", "microservices", "REST API", "GraphQL"],
}

export default function BackendSolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      <ServiceDetailLayout
        title="Backend Solutions & API Development"
        description="Build a solid foundation for your application with scalable backend systems. I create robust APIs and server infrastructure that handle growth and ensure reliability."
        features={[
          "RESTful API design and development",
          "GraphQL API implementation",
          "Database design and optimization",
          "Authentication and authorization systems",
          "Real-time data processing",
          "Microservices architecture",
          "Third-party API integrations",
          "Performance monitoring and logging",
          "Automated testing and CI/CD pipelines",
        ]}
        benefits={[
          "Scalable architecture that grows with your business",
          "Secure authentication and data protection built-in",
          "High performance even under heavy load",
          "Easy integration with frontend applications and third-party services",
        ]}
        technologies={[
          "Node.js",
          "Python",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "Kubernetes",
          "AWS",
          "Azure",
        ]}
        processSteps={[
          {
            title: "Requirements Analysis",
            description: "We define your data models, API endpoints, and system requirements.",
          },
          {
            title: "Architecture Design",
            description: "I design a scalable system architecture that meets your current and future needs.",
          },
          {
            title: "Implementation",
            description: "Your backend is built with clean code, comprehensive tests, and detailed documentation.",
          },
          {
            title: "Deployment & Monitoring",
            description: "Your system is deployed with monitoring, logging, and automated backups in place.",
          },
        ]}
      />

      <Footer />
    </div>
  )
}
