import { BlurFade } from "@/components/ui/blur-fade"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import Link from "next/link"
import { ReactNode } from "react"

interface ServiceDetailLayoutProps {
  title: string
  description: string
  features: string[]
  benefits: string[]
  technologies?: string[]
  processSteps: { title: string; description: string }[]
  children?: ReactNode
}

export function ServiceDetailLayout({
  title,
  description,
  features,
  benefits,
  technologies,
  processSteps,
  children,
}: ServiceDetailLayoutProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-6">
              {title}
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl sm:text-2xl body-text max-w-4xl">
              {description}
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="mt-8 flex gap-4">
              <InteractiveHoverButton>
                <Link href="/contact">Get Started</Link>
              </InteractiveHoverButton>
             
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Features Section */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">
              What's Included
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <span className="text-[#3B82F6] mr-3 text-2xl">✓</span>
                    <p className="body-text">{feature}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">
              Why Choose This Service
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="flex items-start">
                  <span className="text-[#3B82F6] mr-4 text-xl font-bold">{index + 1}</span>
                  <p className="body-text text-lg">{benefit}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section (Optional) */}
      {technologies && technologies.length > 0 && (
        <section className="background-secondary w-full py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">
                Technologies & Tools
              </h2>
            </BlurFade>
            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.05} inView>
                  <span className="px-6 py-3 bg-white border border-gray-200 rounded-lg body-text font-semibold shadow-sm">
                    {tech}
                  </span>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">
              How It Works
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#3B82F6] text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold heading-text mb-3">{step.title}</h3>
                  <p className="body-text">{step.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Content */}
      {children}

      {/* CTA Section */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-6">
              Ready to Get Started?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl body-text mb-8">
              Schedule a free consultation to discuss your project and see how I can help bring your vision to life.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <InteractiveHoverButton>
              <Link href="/contact">Schedule Free Consultation</Link>
            </InteractiveHoverButton>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
