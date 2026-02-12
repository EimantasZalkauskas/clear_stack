import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";
import { BlurFade } from "../ui/blur-fade";
import { Globe } from "../ui/globe";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";

export function HeroSection() {
    return (
        <div className="relative bg-background flex w-full min-h-screen items-center justify-center overflow-hidden">
        <InteractiveGridPattern
            className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
            )}
        />
        <div className="flex justify-center text-center flex-col items-center gap-6">
            <Globe className="top-28" />
            <BlurFade delay={0.1} inView>
            <h1 className="text-5xl font-semibold tracking-tight text-balance heading-text sm:text-7xl">Data to enrich your online business</h1>
            </BlurFade>
            <BlurFade delay={0.5} inView>
            <p className="mt-8 ms-8 text-lg font-medium text-pretty body-text sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            </BlurFade>
            <BlurFade delay={1} inView>
            <ShimmerButton className="accent mt-8"><Link href="#">Book a Discovery Call</Link></ShimmerButton>
            </BlurFade>
        </div>
        </div>
    )
}
