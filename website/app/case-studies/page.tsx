import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/ui/blur-fade"
import { MagicCard } from "@/components/ui/magic-card"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | ClearStack - Real Project Success Stories",
  description: "Explore real-world projects: recipe discovery apps, cloud cost optimization, and gym management systems. See how I help businesses succeed with modern technology.",
  keywords: ["case studies", "portfolio", "project examples", "web development projects", "cloud optimization", "mobile apps"],
}

const caseStudies = [
  {
    title: "ReciPick - Recipe Discovery App",
    slug: "recipick",
    description: "A Tinder-style recipe discovery platform with AI-powered recommendations, subscription features, and couple mode for shared meal planning.",
    metrics: "10K+ active users, 4.8★ rating",
    category: "Mobile & Web App",
    tags: ["React Native", "Next.js", "AI/ML", "Subscriptions"],
  },
  {
    title: "OpenSearch Cost Optimization",
    slug: "opensearch-optimization",
    description: "Reduced infrastructure costs by 90% using Apache Flink for real-time data processing, optimizing OpenSearch cluster sizing and query patterns.",
    metrics: "90% cost reduction, 3x faster queries",
    category: "Cloud & Infrastructure",
    tags: ["Apache Flink", "OpenSearch", "AWS", "Cost Optimization"],
  },
  {
    title: "MacFit Gym Management App",
    slug: "macfit",
    description: "Custom mobile app for gym management featuring member check-ins, class scheduling, trainer booking, and real-time capacity tracking.",
    metrics: "5K+ members, 500+ daily check-ins",
    category: "Mobile App",
    tags: ["React Native", "Real-time", "QR Codes", "Firebase"],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      {/* Hero */}
      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-6">
              Real Projects, Real Results
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl sm:text-2xl body-text max-w-4xl mx-auto">
              From mobile apps with thousands of users to enterprise infrastructure optimization,
              see how I help businesses build and scale with modern technology.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                <MagicCard
                  gradientColor="#e0e7ff"
                  gradientOpacity={0.3}
                  gradientFrom="#9E7AFF"
                  gradientTo="#FE8BBB"
                  className="bg-white p-8 rounded-lg shadow-md w-full min-h-[380px] flex flex-col"
                >
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider">
                      {study.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 heading-text">{study.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{study.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-bold text-[#3B82F6]">{study.metrics}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <InteractiveHoverButton className="w-full">
                    <Link href={`/case-studies/${study.slug}`} className="block w-full">
                      View Case Study
                    </Link>
                  </InteractiveHoverButton>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-6">
              Ready to Build Something Great?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl body-text mb-8">
              Let's discuss your project and create a solution that drives real results.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <InteractiveHoverButton>
              <Link href="/contact">Start Your Project</Link>
            </InteractiveHoverButton>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  )
}
