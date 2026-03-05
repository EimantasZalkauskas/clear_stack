import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";
import { BlurFade } from "../ui/blur-fade";
import { Globe } from "../ui/globe";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";

export function HeroSection() {
    return (
        <div className="relative bg-background flex flex-col w-full min-h-screen items-center justify-center overflow-hidden">
        <InteractiveGridPattern
            className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
            )}
        />
        <div className="relative z-10 flex justify-center text-center flex-col items-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Globe className="top-28" />
            <BlurFade delay={0.1} inView>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-balance heading-text">Backend Systems That Scale. Full Stack Solutions That Ship.</h1>
            </BlurFade>
            <BlurFade delay={0.5} inView>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl font-medium text-pretty body-text max-w-3xl">Expert web development, backend engineering, and cloud solutions. Helping businesses build scalable systems and modernize their digital presence—from custom websites to enterprise cloud infrastructure.</p>
            </BlurFade>
            <BlurFade delay={1} inView>
            <ShimmerButton className="accent mt-6 sm:mt-8"><Link href="/contact">Book a Discovery Call</Link></ShimmerButton>
            </BlurFade>
        </div>

        </div>
    )
}
