'use client'
import { BlurFade } from "../ui/blur-fade";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { MagicCard } from "../ui/magic-card";

const services = [
    {
        title: "Website Design & Development",
        slug: "website-design-development",
        description: "Custom websites built with modern technologies. From landing pages to complex web applications, I create fast, responsive, and user-friendly digital experiences that convert visitors into customers."
    },
    {
        title: "Backend Solutions",
        slug: "backend-solutions",
        description: "Scalable backend systems designed for performance. I build robust APIs, databases, and server infrastructure that power your applications and handle growth seamlessly."
    },
    {
        title: "Cloud Implementation",
        slug: "cloud-implementation",
        description: "Enterprise-grade cloud solutions on AWS, Azure, or GCP. I help you migrate to the cloud, optimize costs, and leverage modern cloud-native architectures for reliability and scale."
    },
    {
        title: "System Modernisation",
        slug: "system-modernisation",
        description: "Transform legacy systems into modern digital solutions. I help businesses transition from outdated processes to efficient, online-first operations that improve productivity and customer experience."
    }
];
export function ServicesSection() {

    function redirectToService(index: number) {
        const service = services[index];
        window.location.href = `/services/${service.slug}`;
    }

    return (
        <div className="flex justify-center text-center flex-col items-center gap-12">
            <BlurFade delay={0.4} inView>
            <h2 className=" text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-balance heading-text">Make Your Business Work For You</h2>
            </BlurFade>
            <div className="flex flex-row pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8">
                    {services.map((service, index) => (
                        <BlurFade key={index} delay={0.5 + index * 0.1} inView>
                            <MagicCard gradientColor="#e0e7ff" gradientOpacity={0.3} gradientFrom="#9E7AFF" gradientTo="#FE8BBB"
                            className="bg-white p-8 rounded-lg shadow-md w-full min-h-[280px]">
                                    <h3 className="text-xl font-semibold mb-5">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                    <InteractiveHoverButton className="mt-10" onClick={() => redirectToService(index)}>Learn More</InteractiveHoverButton>
                            </MagicCard>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </div>
    )
}