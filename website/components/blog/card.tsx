
interface props {
    title: string;
    description: string;
    date: string;
    author: string;
    readTime: string;
    image: string;
    slug: string;
    tags?: string[];
}

export function blogCard(props: props) {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={props.image}
                    alt={props.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                {props.tags && props.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                        {props.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold heading-text line-clamp-2 group-hover:text-[#3B82F6] transition-colors">
                    {props.title}
                </h3>

                {/* Description */}
                <p className="mb-4 body-text line-clamp-3">
                    {props.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm body-text">
                    <div className="flex items-center gap-2">
                        <span>{props.author}</span>
                        <span>•</span>
                        <span>{props.date}</span>
                    </div>
                    <span>{props.readTime}</span>
                </div>
            </div>

            {/* Link Overlay */}
            <a
                href={`/blog/${props.slug}`}
                className="absolute inset-0"
                aria-label={`Read more about ${props.title}`}
            >
                <span className="sr-only">Read more</span>
            </a>
        </div>
    );

}
