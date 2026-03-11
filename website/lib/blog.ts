import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  readTime: string
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog')

  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })

    const blogPosts: BlogPost[] = []

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const postPath = path.join(blogDir, entry.name, 'page.tsx')

        if (fs.existsSync(postPath)) {
          const content = fs.readFileSync(postPath, 'utf-8')

          // Extract metadata from the file
          const metadata = extractMetadata(content, entry.name)
          if (metadata) {
            blogPosts.push(metadata)
          }
        }
      }
    }

    // Sort by date (newest first)
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    return []
  }
}

function extractMetadata(content: string, slug: string): BlogPost | null {
  try {
    // Extract the blogMetadata export
    const metadataMatch = content.match(/export const blogMetadata[^=]*=\s*({[\s\S]*?})\s*(?:export|$)/m)

    if (metadataMatch) {
      // This is a simple parser - in production you might want to use a proper AST parser
      const metadataStr = metadataMatch[1]

      const title = metadataStr.match(/title:\s*["']([^"']+)["']/)?.[1] || 'Untitled'
      const description = metadataStr.match(/description:\s*["']([^"']+)["']/)?.[1] || ''
      const date = metadataStr.match(/date:\s*["']([^"']+)["']/)?.[1] || new Date().toISOString()
      const author = metadataStr.match(/author:\s*["']([^"']+)["']/)?.[1] || 'ClearStack'
      const category = metadataStr.match(/category:\s*["']([^"']+)["']/)?.[1] || 'General'
      const readTime = metadataStr.match(/readTime:\s*["']([^"']+)["']/)?.[1] || '5 min read'

      // Extract tags array
      const tagsMatch = metadataStr.match(/tags:\s*\[([^\]]+)\]/)
      const tags = tagsMatch
        ? tagsMatch[1].split(',').map(t => t.trim().replace(/["']/g, ''))
        : []

      return {
        slug,
        title,
        description,
        date,
        author,
        category,
        tags,
        readTime,
      }
    }

    return null
  } catch (error) {
    return null
  }
}
