import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/ui/blur-fade"
import { MagicCard } from "@/components/ui/magic-card"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | ClearStack - Web Development & Cloud Solutions",
  description: "Expert web development, backend solutions, cloud implementation, and system modernisation services. Transform your business with modern technology.",
  keywords: ["web development", "backend solutions", "cloud migration", "system modernisation", "consulting services"],
}

const services = [
  {
    title: "Website Design & Development",
    slug: "website-design-development",
    description: "Custom websites built with modern technologies. From landing pages to complex web applications, I create fast, responsive, and user-friendly digital experiences.",
    icon: "🌐",
  },
  {
    title: "Backend Solutions",
    slug: "backend-solutions",
    description: "Scalable backend systems designed for performance. I build robust APIs, databases, and server infrastructure that power your applications.",
    icon: "⚙️",
  },
  {
    title: "Cloud Implementation",
    slug: "cloud-implementation",
    description: "Enterprise-grade cloud solutions on AWS, Azure, or GCP. Migrate to the cloud, optimize costs, and leverage cloud-native architectures.",
    icon: "☁️",
  },
  {
    title: "System Modernisation",
    slug: "system-modernisation",
    description: "Transform legacy systems into modern digital solutions. Transition from outdated processes to efficient, online-first operations.",
    icon: "🚀",
  },
]

export default function ServicesPage() {
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
              Services That Drive Results
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl sm:text-2xl body-text max-w-4xl mx-auto">
              From custom websites to enterprise cloud solutions, I provide end-to-end technology services
              that help businesses scale and succeed in the digital age.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Services Grid */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                <MagicCard
                  gradientColor="#e0e7ff"
                  gradientOpacity={0.3}
                  gradientFrom="#9E7AFF"
                  gradientTo="#FE8BBB"
                  className="bg-white p-8 rounded-lg shadow-md w-full min-h-[320px] flex flex-col"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold mb-4 heading-text">{service.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="w-full">
                    <InteractiveHoverButton className="w-full">
                      Learn More
                    </InteractiveHoverButton>
                  </Link>
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
              Ready to Start Your Project?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl body-text mb-8">
              Let's discuss how I can help bring your vision to life with modern technology solutions.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <InteractiveHoverButton>
              <Link href="/contact">Schedule a Free Consultation</Link>
            </InteractiveHoverButton>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </div>
  )
}
