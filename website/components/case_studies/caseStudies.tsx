"use client"

import { BlurFade } from "../ui/blur-fade";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Link from "next/link";

const case_studies = [
    {
        title: "ReciPick - Recipe Discovery App",
        slug: "recipick",
        description: "A Tinder-style recipe discovery platform with AI-powered recommendations, subscription features, and couple mode for shared meal planning.",
        metrics: "10K+ active users, 4.8★ rating"
    },
    {
        title: "OpenSearch Cost Optimization",
        slug: "opensearch-optimization",
        description: "Reduced infrastructure costs by 90% using Apache Flink for real-time data processing, optimizing OpenSearch cluster sizing and query patterns.",
        metrics: "90% cost reduction, 3x faster queries"
    },
    {
        title: "MacFit Gym Management App",
        slug: "macfit",
        description: "Custom mobile app for gym management featuring member check-ins, class scheduling, trainer booking, and real-time capacity tracking.",
        metrics: "5K+ members, 500+ daily check-ins"
    }
];
export function CaseStudiesSection() {

    return (
        <div className="flex justify-center text-center flex-col items-center gap-6 sm:gap-8 lg:gap-12 pt-4 sm:pt-6 lg:pt-8 px-4 w-full">
            <BlurFade delay={0.2} inView>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-balance heading-text">Case Studies</h1>
            </BlurFade>
            <div className="flex flex-col pb-12 sm:pb-16 lg:pb-20 w-full max-w-7xl">
                <Carousel className="w-full">
                <CarouselContent className="min-h-[400px] sm:min-h-[500px] lg:min-h-[700px]">
                    {case_studies.map((item) => (
                    <CarouselItem key={item.title} className="flex">
                        <Link href={`/case-studies/${item.slug}`} className="p-2 sm:p-4 rounded-lg flex-1 flex">
                        <Card className="flex-1 flex flex-col cursor-pointer hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 via-white to-purple-50">
                            <CardContent className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold heading-text mb-4">{item.title}</h3>
                            <p className="text-base sm:text-lg body-text mb-4">{item.description}</p>
                            <p className="text-sm sm:text-base font-semibold text-[#3B82F6]">{item.metrics}</p>
                            </CardContent>
                        </Card>
                        </Link>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="top-auto bottom-[-2.5rem] sm:bottom-[-3rem] left-[calc(50%-2.5rem)] sm:left-[calc(50%-3.5rem)] translate-y-0" />
                <CarouselNext className="top-auto bottom-[-2.5rem] sm:bottom-[-3rem] right-[calc(50%-2.5rem)] sm:right-[calc(50%-3.5rem)] translate-y-0" />
                </Carousel>
            </div>
        </div>
    )
}