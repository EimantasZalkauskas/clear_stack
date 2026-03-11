import Link from "next/link"
import { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col border border-gray-200">
        {/* Category & Read Time */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold heading-text mb-3 group-hover:text-[#3B82F6] transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author & Date */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
      </div>
    </Link>
  )
}
