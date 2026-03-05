import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlurFade } from "@/components/ui/blur-fade"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OpenSearch Cost Optimization Case Study | ClearStack",
  description: "How I reduced infrastructure costs by 90% using Apache Flink for real-time data processing and OpenSearch optimization.",
  keywords: ["OpenSearch", "cost optimization", "Apache Flink", "real-time processing", "cloud optimization"],
}

export default function OpenSearchOptimizationCaseStudy() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full"><Navbar /></section>

      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-sm font-semibold text-[#3B82F6] mb-4">CASE STUDY</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-6">
              OpenSearch Cost Optimization with Flink
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl sm:text-2xl body-text max-w-4xl mb-8">
              Reduced infrastructure costs by 90% and improved query performance 3x through strategic OpenSearch optimization and Apache Flink implementation.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">90%</div>
                <div className="text-sm body-text">Cost Reduction</div>
              </div>
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">3x</div>
                <div className="text-sm body-text">Faster Queries</div>
              </div>
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">100TB+</div>
                <div className="text-sm body-text">Data Processed</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-8">The Challenge</h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-lg body-text mb-6">
              A growing SaaS company was spending $50K/month on OpenSearch infrastructure to handle their log analytics and search workloads. As data volume increased, costs were spiraling while query performance degraded.
            </p>
            <p className="text-lg body-text">
              The existing architecture was inefficient, with unnecessary data duplication, oversized clusters, and suboptimal indexing strategies that led to both high costs and slow queries.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-8">The Solution</h2>
          </BlurFade>
          <div className="space-y-6">
            <BlurFade delay={0.2} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Apache Flink Integration</h3>
                <p className="body-text">
                  Implemented Apache Flink for real-time data processing and aggregation before indexing, reducing the volume of data stored in OpenSearch by 70%.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Index Lifecycle Management</h3>
                <p className="body-text">
                  Designed automated index lifecycle policies to transition older data to cheaper storage tiers and delete obsolete data, optimizing storage costs.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Cluster Right-Sizing</h3>
                <p className="body-text">
                  Analyzed actual usage patterns and downsized clusters appropriately, using smaller instance types with better price-performance ratios.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Query Optimization</h3>
                <p className="body-text">
                  Rewrote expensive queries, implemented caching strategies, and optimized mapping configurations, dramatically improving query performance.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">Results & Impact</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlurFade delay={0.2} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">$45K</div>
                <div className="text-lg heading-text font-semibold mb-2">Monthly Savings</div>
                <p className="body-text">From $50K to $5K/month</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">3x</div>
                <div className="text-lg heading-text font-semibold mb-2">Query Performance</div>
                <p className="body-text">Average query time reduced</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">70%</div>
                <div className="text-lg heading-text font-semibold mb-2">Storage Reduction</div>
                <p className="body-text">Through intelligent aggregation</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">100%</div>
                <div className="text-lg heading-text font-semibold mb-2">Uptime Maintained</div>
                <p className="body-text">Zero downtime migration</p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-6">
              Need Cloud Cost Optimization?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl body-text mb-8">
              Let's analyze your infrastructure and find opportunities to reduce costs while improving performance.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <InteractiveHoverButton>
              <Link href="/contact">Get Cost Analysis</Link>
            </InteractiveHoverButton>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  )
}
