import { BlogCard } from "@/components/blog/BlogCard"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/ui/blur-fade"
import { getAllBlogPosts } from "@/lib/blog"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | ClearStack - Insights on Web Development & Cloud Solutions",
  description: "Technical insights, tutorials, and best practices for web development, backend engineering, and cloud solutions from ClearStack.",
  keywords: ["web development blog", "backend engineering", "cloud solutions", "technical tutorials", "software development"],
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

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
              Blog
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl sm:text-2xl body-text max-w-4xl mx-auto">
              Technical insights, tutorials, and best practices for building modern web applications and scalable systems.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlurFade key={post.slug} delay={0.3 + index * 0.1} inView>
                  <BlogCard post={post} />
                </BlurFade>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BlurFade delay={0.3} inView>
                <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-6">
                  Coming Soon
                </h2>
                <p className="text-xl body-text mb-8">
                  I'm working on creating valuable content about web development, backend systems, and cloud solutions. Check back soon for technical articles and tutorials.
                </p>
              </BlurFade>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
