import { BlurFade } from "../ui/blur-fade";

const stats = [
    {
        name: "Years of Experience",
        value: "5+",
        transition_speed: 0.4,
    },
    {
        name: "Successful Projects",
        value: "20+",
        transition_speed: 0.6,
    },
    {
        name: "Client Satisfaction",
        value: "100%",
        transition_speed: 0.8,
    }
]

export function StatsSection() {
    return (
        <div className="mx-auto max-w-5xl px-2 lg:px-2">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map(stat => (
                    <BlurFade key={stat.name} delay={stat.transition_speed} inView>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{stat.value}</dd>
                    </div>
                    </BlurFade>
                ))}
        </dl>
    </div>
    )
}