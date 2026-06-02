import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type FaqItem = { q: string; a: string }

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  tool: string
  suite: string
  targetUrl: string
  image: string
  imageAlt: string
  faq: FaqItem[]
  content: string
}

function parseFile(file: string): Post {
  const slug = file.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
  const { data, content } = matter(raw)
  const fm = data as Partial<Post>
  return {
    slug: fm.slug || slug,
    title: fm.title || slug,
    description: fm.description || '',
    date: fm.date || '',
    tags: fm.tags || [],
    tool: fm.tool || '',
    suite: fm.suite || '',
    targetUrl: fm.targetUrl || '',
    image: fm.image || '',
    imageAlt: fm.imageAlt || '',
    faq: fm.faq || [],
    content,
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | null {
  const file = ['.mdx', '.md'].map((ext) => `${slug}${ext}`).find((f) => fs.existsSync(path.join(BLOG_DIR, f)))
  return file ? parseFile(file) : null
}
