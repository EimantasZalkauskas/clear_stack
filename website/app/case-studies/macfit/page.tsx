import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlurFade } from "@/components/ui/blur-fade"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MacFit Gym App Case Study | ClearStack",
  description: "Custom mobile app for gym management with member check-ins, class scheduling, and real-time capacity tracking for 5K+ members.",
  keywords: ["gym app", "fitness app", "mobile app development", "React Native", "member management", "class scheduling"],
}

export default function MacFitCaseStudy() {
  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full"><Navbar /></section>

      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-sm font-semibold text-[#3B82F6] mb-4">CASE STUDY</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-6">
              MacFit: Modern Gym Management
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl sm:text-2xl body-text max-w-4xl mb-8">
              A comprehensive mobile app for gym operations featuring member check-ins, class scheduling, trainer booking, and real-time capacity tracking.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">5K+</div>
                <div className="text-sm body-text">Active Members</div>
              </div>
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">500+</div>
                <div className="text-sm body-text">Daily Check-ins</div>
              </div>
              <div className="px-6 py-3 bg-[#F8FAFC] rounded-lg">
                <div className="text-2xl font-bold heading-text">4.7★</div>
                <div className="text-sm body-text">App Rating</div>
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
              MacFit gym was managing member check-ins, class schedules, and trainer bookings through manual processes and outdated software. This led to long queues at reception, double-booked classes, and frustrated members.
            </p>
            <p className="text-lg body-text">
              They needed a modern mobile solution that would streamline operations, improve member experience, and provide real-time insights into gym capacity and class popularity.
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
                <h3 className="text-xl font-semibold heading-text mb-2">QR Code Check-In System</h3>
                <p className="body-text">
                  Implemented a QR code-based check-in system allowing members to scan and enter the gym in seconds, eliminating reception queues.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Class Booking & Scheduling</h3>
                <p className="body-text">
                  Built a real-time class booking system with capacity limits, waitlists, and automatic notifications for class updates or cancellations.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Personal Trainer Booking</h3>
                <p className="body-text">
                  Created a booking interface for members to view trainer availability, book sessions, and manage their training schedule.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-xl font-semibold heading-text mb-2">Admin Dashboard</h3>
                <p className="body-text">
                  Developed a comprehensive admin panel for staff to manage members, track attendance, analyze usage patterns, and optimize gym operations.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-8">Technology Stack</h2>
          </BlurFade>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["React Native", "Node.js", "PostgreSQL", "Redis", "Firebase", "QR Code API", "Push Notifications", "Stripe"].map((tech, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.05} inView>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <span className="font-semibold body-text">{tech}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="background-primary w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-12 text-center">Results & Impact</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlurFade delay={0.2} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">80%</div>
                <div className="text-lg heading-text font-semibold mb-2">Faster Check-ins</div>
                <p className="body-text">Average check-in time reduced from 2min to 20sec</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">95%</div>
                <div className="text-lg heading-text font-semibold mb-2">Member Satisfaction</div>
                <p className="body-text">Based on post-launch survey</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">40%</div>
                <div className="text-lg heading-text font-semibold mb-2">More Class Bookings</div>
                <p className="body-text">Increased class participation</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#3B82F6] mb-2">Zero</div>
                <div className="text-lg heading-text font-semibold mb-2">Double Bookings</div>
                <p className="body-text">Eliminated scheduling conflicts</p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl font-bold heading-text mb-6">
              Need a Custom Mobile App?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl body-text mb-8">
              Let's discuss how I can build a mobile solution tailored to your business needs.
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
