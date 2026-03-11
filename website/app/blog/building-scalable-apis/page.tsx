import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/ui/blur-fade"
import { Metadata } from "next"

// Blog post metadata - used by the blog index to generate cards
export const blogMetadata = {
  title: "Building Scalable REST APIs with Node.js and TypeScript",
  description: "Learn best practices for building production-ready REST APIs that can handle millions of requests. Covers architecture, database design, caching strategies, and deployment.",
  date: "2025-03-11",
  author: "Eimantas Zalkauskas",
  category: "Backend Development",
  tags: ["Node.js", "TypeScript", "REST API", "Scalability"],
  readTime: "8 min read",
}

export const metadata: Metadata = {
  title: `${blogMetadata.title} | ClearStack Blog`,
  description: blogMetadata.description,
  keywords: blogMetadata.tags,
}

export default function BlogPost() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      {/* Hero */}
      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide">
                {blogMetadata.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">{blogMetadata.readTime}</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight heading-text mb-6">
              {blogMetadata.title}
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="font-medium">{blogMetadata.author}</span>
              <span className="text-gray-400">•</span>
              <span>{new Date(blogMetadata.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <div className="flex flex-wrap gap-2 mb-8">
              {blogMetadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-[#3B82F6] text-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Content */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <BlurFade delay={0.1} inView>
              <p className="text-xl text-gray-700 mb-8">
                Building a REST API that can scale to handle millions of requests requires careful planning and architectural decisions. In this guide, I'll share the patterns and practices I use when building production APIs.
              </p>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Why Scalability Matters</h2>
              <p className="text-gray-700 mb-6">
                When building an API, it's tempting to focus solely on functionality. However, thinking about scalability from day one saves significant refactoring later. A well-architected API can grow from hundreds to millions of users without major rewrites.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Key Architecture Principles</h2>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Stateless Design:</strong> Each request contains all necessary information, enabling horizontal scaling</li>
                <li><strong>Database Connection Pooling:</strong> Reuse database connections to reduce overhead</li>
                <li><strong>Caching Strategy:</strong> Implement Redis for frequently accessed data</li>
                <li><strong>Async Operations:</strong> Use message queues for long-running tasks</li>
                <li><strong>Rate Limiting:</strong> Protect your API from abuse and ensure fair usage</li>
              </ul>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">TypeScript for Type Safety</h2>
              <p className="text-gray-700 mb-6">
                TypeScript adds a layer of safety that becomes invaluable as your API grows. Defining request/response types, validating input with libraries like Zod, and catching errors at compile-time rather than runtime saves countless debugging hours.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Performance Optimization</h2>
              <p className="text-gray-700 mb-6">
                Performance optimization is an ongoing process. Start by measuring with tools like New Relic or Datadog. Common optimizations include database indexing, query optimization, implementing CDNs for static assets, and using compression middleware.
              </p>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Deployment & Monitoring</h2>
              <p className="text-gray-700 mb-6">
                Deploy your API using containerization (Docker) and orchestration (Kubernetes) for easy scaling. Set up comprehensive logging and monitoring from day one. Track key metrics like response times, error rates, and database query performance.
              </p>
            </BlurFade>

            <BlurFade delay={0.7} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-6">
                Building scalable APIs is about making smart architectural decisions early and continuously optimizing. By following these principles and patterns, you'll create APIs that can grow with your business needs.
              </p>
            </BlurFade>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
