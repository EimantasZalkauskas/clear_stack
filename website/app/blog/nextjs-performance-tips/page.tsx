import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/ui/blur-fade"
import { Metadata } from "next"

// Blog post metadata - used by the blog index to generate cards
export const blogMetadata = {
  title: "Next.js Performance Optimization: Tips for Lightning-Fast Websites",
  description: "Practical tips for optimizing Next.js applications. Learn about image optimization, code splitting, caching strategies, and more to achieve sub-second load times.",
  date: "2025-03-04",
  author: "Eimantas Zalkauskas",
  category: "Web Development",
  tags: ["Next.js", "React", "Performance", "SEO"],
  readTime: "6 min read",
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
                Next.js provides excellent performance out of the box, but there are several optimizations you can apply to make your site even faster. Here are the techniques I use on every project.
              </p>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Image Optimization</h2>
              <p className="text-gray-700 mb-6">
                Always use Next.js Image component instead of standard img tags. It automatically handles responsive sizing, lazy loading, and serves images in modern formats like WebP. This alone can reduce image payload by 50-70%.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Code Splitting & Dynamic Imports</h2>
              <p className="text-gray-700 mb-6">
                Use dynamic imports for components that aren't needed on initial page load. Heavy libraries, modals, and below-the-fold content are perfect candidates. This reduces your initial bundle size significantly.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Server Components by Default</h2>
              <p className="text-gray-700 mb-6">
                In Next.js 13+, components are Server Components by default. Only add "use client" when you need interactivity. This reduces JavaScript sent to the browser and improves initial load time.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Caching Strategies</h2>
              <p className="text-gray-700 mb-6">
                Implement proper caching headers for static assets. Use revalidate in getStaticProps for incremental static regeneration. For dynamic data, consider SWR or React Query for client-side caching.
              </p>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Monitoring Performance</h2>
              <p className="text-gray-700 mb-6">
                Use tools like Lighthouse, WebPageTest, and Vercel Analytics to continuously monitor performance. Set budgets for Core Web Vitals and track them in CI/CD to prevent performance regressions.
              </p>
            </BlurFade>

            <BlurFade delay={0.7} inView>
              <h2 className="text-2xl font-bold heading-text mt-12 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 mb-6">
                Performance optimization is not a one-time task but an ongoing process. Start with these fundamentals, measure the impact, and continuously refine based on real user data.
              </p>
            </BlurFade>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
