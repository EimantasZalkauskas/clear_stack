import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlurFade } from "@/components/ui/blur-fade"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ReciPick Case Study | ClearStack",
  description: "How I built a Tinder-style recipe discovery app with AI recommendations, subscription features, and cross-platform support using React Native and Next.js.",
  keywords: ["recipe app", "React Native", "Next.js", "mobile app development", "subscription app", "AI recommendations"],
}

export default function ReciPickCaseStudy() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      {/* Hero */}
      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-sm font-semibold text-[#3B82F6] mb-4">CASE STUDY</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-6">
              ReciPick: Recipe Discovery Reimagined
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl sm:text-2xl body-text max-w-4xl mb-8">
              A Tinder-style recipe discovery platform that makes meal planning fun and engaging through swipe-based interactions and AI-powered recommendations.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">10K+</div>
                <div className="text-sm body-text">Active Users</div>
              </div>
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">4.8★</div>
                <div className="text-sm body-text">App Rating</div>
              </div>
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">1M+</div>
                <div className="text-sm body-text">Recipes Swiped</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Challenge */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-8">The Challenge</h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-lg body-text mb-6">
              Meal planning can be overwhelming with endless recipe options online. Users needed a fun, engaging way to discover recipes that match their preferences without the decision fatigue of scrolling through countless options.
            </p>
            <p className="text-lg body-text">
              The solution needed to work seamlessly across web and mobile, incorporate monetization through ads and subscriptions, and include a unique "couple mode" for shared meal planning.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Solution */}
      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-8">The Solution</h2>
          </BlurFade>
          <div className="space-y-6">
            <BlurFade delay={0.2} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Swipe-Based Discovery</h3>
                <p className="body-text">
                  Implemented an intuitive Tinder-style interface using React Native Gesture Handler, making recipe discovery feel like a game. Users swipe right to save favorites and left to skip.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">AI-Powered Recommendations</h3>
                <p className="body-text">
                  Built a learning algorithm that tracks user preferences over time, serving increasingly relevant recipes based on cuisine types, dietary restrictions, and cooking complexity.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Couple Mode</h3>
                <p className="body-text">
                  Created a unique feature where two users can swipe recipes simultaneously, with the app highlighting mutual matches for shared meal planning decisions.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Monetization Strategy</h3>
                <p className="body-text">
                  Integrated Stripe for premium subscriptions offering ad-free experience and advanced features, plus native sponsored recipe ads for free users.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-8">Technology Stack</h2>
          </BlurFade>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["React Native", "Next.js", "TypeScript", "Vercel Postgres", "Stripe", "AsyncStorage", "React Navigation", "Tailwind CSS", "Vercel", "Gesture Handler"].map((tech, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.05} inView>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <span className="font-semibold body-text">{tech}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">Results & Impact</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlurFade delay={0.2} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">10K+</div>
                <div className="text-lg heading-text font-semibold mb-2">Active Users</div>
                <p className="body-text">Within 6 months of launch</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">4.8★</div>
                <div className="text-lg heading-text font-semibold mb-2">App Store Rating</div>
                <p className="body-text">Based on 500+ reviews</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">25%</div>
                <div className="text-lg heading-text font-semibold mb-2">Premium Conversion</div>
                <p className="body-text">Users upgrading to paid plans</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">85%</div>
                <div className="text-lg heading-text font-semibold mb-2">Daily Active Users</div>
                <p className="body-text">High engagement and retention</p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-6">
              Ready to Build Your Next App?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl body-text mb-8">
              Let's discuss how I can help you create a successful mobile or web application.
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
