"use client"

import { useEffect } from "react"
import { BlurFade } from "../ui/blur-fade"

export function CTASection() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12">
            {/* CTA Message Column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
                <BlurFade delay={0.2} inView>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-text mb-4">
                        Ready to Transform Your Business?
                    </h2>
                </BlurFade>
                <BlurFade delay={0.4} inView>
                    <p className="text-lg sm:text-xl body-text mb-6">
                        Schedule a free 30-minute discovery call to discuss how we can help you build scalable backend systems and ship full-stack solutions faster.
                    </p>
                </BlurFade>
            </div>

            {/* Calendly Widget Column */}
            <BlurFade delay={0.6} inView className="w-full lg:w-1/2 max-w-2xl h-full">
                <div
                    className="calendly-inline-widget h-[700px] w-full rounded-lg shadow-lg"
                    data-url="https://calendly.com/eimantaszalkauskas/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=3b82f6"
                />
            </BlurFade>
        </div>
    )
}