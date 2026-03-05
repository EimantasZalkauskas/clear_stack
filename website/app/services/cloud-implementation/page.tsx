import { ServiceDetailLayout } from "@/components/services/pages/ServiceDetailLayout"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cloud Implementation & Migration | ClearStack",
  description: "Enterprise cloud solutions on AWS, Azure, and GCP. Cloud migration, infrastructure as code, cost optimization, and cloud-native architecture design.",
  keywords: ["cloud migration", "AWS", "Azure", "GCP", "cloud architecture", "infrastructure as code", "Terraform", "Kubernetes", "cost optimization"],
}

export default function CloudImplementationPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      <ServiceDetailLayout
        title="Cloud Implementation & Migration"
        description="Leverage the power of cloud computing to scale your business. I help you migrate to the cloud, optimize costs, and build cloud-native applications that are reliable and performant."
        features={[
          "Cloud platform selection (AWS, Azure, GCP)",
          "Infrastructure as Code (Terraform, CloudFormation)",
          "Cloud migration strategy and execution",
          "Container orchestration (Kubernetes, ECS)",
          "Serverless architecture implementation",
          "CI/CD pipeline setup",
          "Cost optimization and monitoring",
          "Security and compliance configuration",
          "Disaster recovery and backup solutions",
        ]}
        benefits={[
          "Reduce infrastructure costs by up to 90% with smart cloud architecture",
          "Improve reliability with auto-scaling and fault-tolerant design",
          "Accelerate deployment with automated infrastructure provisioning",
          "Enhanced security with cloud-native security tools and best practices",
        ]}
        technologies={[
          "AWS",
          "Azure",
          "GCP",
          "Terraform",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "CloudWatch",
          "Datadog",
        ]}
        processSteps={[
          {
            title: "Assessment",
            description: "Analyze your current infrastructure and identify cloud migration opportunities.",
          },
          {
            title: "Strategy & Planning",
            description: "Create a detailed migration plan with cost estimates and timeline.",
          },
          {
            title: "Migration & Implementation",
            description: "Execute the migration with minimal downtime and implement cloud-native solutions.",
          },
          {
            title: "Optimization & Training",
            description: "Optimize costs, performance, and train your team on cloud operations.",
          },
        ]}
      />

      <Footer />
    </div>
  )
}
