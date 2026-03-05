"use client"

import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/ui/blur-fade"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or email directly.')
      console.error('Contact form error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="flex flex-col w-full">
      <section className="background-primary w-full">
        <Navbar />
      </section>

      {/* Hero */}
      <section className="background-primary w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <BlurFade delay={0.1} inView>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-6">
                Let's Build Something Great Together
              </h1>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-xl sm:text-2xl body-text">
                Whether you need a custom website, scalable backend system, or cloud infrastructure—I'm here to help.
                Get in touch to discuss your project.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="background-secondary w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <BlurFade delay={0.3} inView>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold heading-text mb-6">Send a Message</h2>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-[#3B82F6] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold heading-text mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold heading-text mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold heading-text mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold heading-text mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                        {errorMessage}
                      </div>
                    )}

                    <InteractiveHoverButton
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </InteractiveHoverButton>
                  </form>
                )}
              </div>
            </BlurFade>

            {/* Contact Info */}
            <div className="space-y-8">
              <BlurFade delay={0.4} inView>
                <div>
                  <h2 className="text-2xl font-bold heading-text mb-6">Get in Touch</h2>
                  <p className="text-lg body-text mb-6">
                    I typically respond within 24 hours. For urgent inquiries, feel free to reach out via email directly.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.5} inView>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold heading-text mb-4">What to Expect</h3>
                  <ul className="space-y-3 body-text">
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-3">✓</span>
                      <span>Initial consultation to understand your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-3">✓</span>
                      <span>Transparent timeline and cost estimates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-3">✓</span>
                      <span>Regular updates throughout the project</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-3">✓</span>
                      <span>Ongoing support after delivery</span>
                    </li>
                  </ul>
                </div>
              </BlurFade>

              <BlurFade delay={0.6} inView>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold heading-text mb-4">Available For</h3>
                  <ul className="space-y-2 body-text">
                    <li>• New project development</li>
                    <li>• System modernization & migration</li>
                    <li>• Technical consulting</li>
                    <li>• Code reviews & audits</li>
                    <li>• Ongoing maintenance & support</li>
                  </ul>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
