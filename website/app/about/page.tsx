import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/ui/blur-fade"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About | ClearStack - Hands-On Software Engineer",
  description: "Meet Eimantas, a hands-on software engineer with 5+ years of experience building scalable systems. From startups to enterprise, I bring technical expertise and a practical approach.",
  keywords: ["software engineer", "full stack developer", "backend engineer", "cloud engineer", "React", "Node.js", "AWS"],
}

export default function AboutPage() {
  const technologies = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Flink", "Redis"] },
    { category: "Cloud & DevOps", items: ["AWS", "Opensearch", "GCP", "Docker", "Kubernetes", "Terraform"] },
    { category: "Tools & Practices", items: ["Git", "CI/CD", "Agile", "TDD", "System Design"] },
  ]

  const values = [
    {
      title: "Hands-On Approach",
      description: "I write code, debug issues, and ship features—no delegation, just direct technical work from start to finish."
    },
    {
      title: "Practical Solutions",
      description: "I focus on what works. Simple, maintainable solutions that solve real problems without over-engineering."
    },
    {
      title: "Clear Communication",
      description: "Technical jargon translated into plain English. You'll always know what's happening and why."
    },
    {
      title: "Long-Term Thinking",
      description: "Building systems that scale and evolve with your business, not just quick fixes."
    },
  ]

  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      {/* Hero */}
      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <BlurFade delay={0.1} inView>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-6">
                Hi, I'm Eimantas
              </h1>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-xl sm:text-2xl body-text mb-6">
                A hands-on software engineer who builds scalable systems and ships working solutions.
                No corporate layers—just direct technical expertise and a practical approach to solving problems.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg body-text">
                With 5+ years of experience across startups and enterprise environments, I've built everything from
                mobile apps with thousands of users to cloud infrastructure handling millions of requests per day.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Experience & Approach */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">
              How I Work
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold heading-text mb-3">{value.title}</h3>
                  <p className="body-text">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-4 text-center">
              Technology Stack
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-lg body-text text-center mb-12 max-w-3xl mx-auto">
              I work with modern technologies and frameworks, focusing on what delivers results rather than chasing trends.
            </p>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                <div>
                  <h3 className="text-lg font-semibold heading-text mb-4 text-center">
                    {tech.category}
                  </h3>
                  <div className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-center body-text text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">
              What I've Built
            </h2>
          </BlurFade>
          <div className="space-y-8">
            <BlurFade delay={0.2} inView>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3B82F6]">
                <h3 className="text-xl font-semibold heading-text mb-2">Mobile & Web Applications</h3>
                <p className="body-text">
                  Built cross-platform apps with React Native and Next.js, handling everything from user authentication
                  to payment processing, serving 10K+ active users.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3B82F6]">
                <h3 className="text-xl font-semibold heading-text mb-2">Cloud Infrastructure & Optimization</h3>
                <p className="body-text">
                  Designed and optimized cloud architectures on AWS, achieving 90% cost reduction through smart
                  resource allocation and real-time data processing with Apache Flink.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3B82F6]">
                <h3 className="text-xl font-semibold heading-text mb-2">Backend Systems & APIs</h3>
                <p className="body-text">
                  Architected scalable backend systems with Node.js and Python, building RESTful APIs that handle
                  millions of requests with proper error handling, logging, and monitoring.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3B82F6]">
                <h3 className="text-xl font-semibold heading-text mb-2">System Modernization</h3>
                <p className="body-text">
                  Helped businesses transition from legacy systems to modern cloud-based solutions, improving
                  efficiency while minimizing disruption to daily operations.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-8 text-center">
              Why Work With Me?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <div className="bg-[#F8FAFC] p-8 rounded-lg">
              <p className="text-lg body-text mb-4">
                <strong>You get a senior engineer who codes.</strong> I'm in the terminal, writing tests, reviewing pull
                requests, and debugging production issues. Not managing teams or filling out spreadsheets.
              </p>
              <p className="text-lg body-text mb-4">
                <strong>You get honest technical advice.</strong> I'll tell you when something is over-engineered,
                when a simpler solution exists, or when you don't need that expensive third-party service.
              </p>
              <p className="text-lg body-text">
                <strong>You get someone who cares about your success.</strong> Your project isn't just another
                contract—it's a technical challenge I'm invested in solving.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-6">
              Let's Talk About Your Project
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl body-text mb-8">
              Whether you're starting from scratch or need help with an existing system,
              I'd love to hear what you're building.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <InteractiveHoverButton>
              <Link href="/contact">Get in Touch</Link>
            </InteractiveHoverButton>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  )
}
