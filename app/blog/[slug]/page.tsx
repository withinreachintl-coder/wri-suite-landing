import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPost, type Post } from '@/lib/blog'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `https://wireach.tools/blog/${post.slug}`
  return {
    title: `${post.title} | WRI`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

const ink = '#1C1917'
const ink2 = '#44403C'
const amber = '#D97706'
const hairline = '#E7E2D9'

const mdComponents = {
  h2: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, lineHeight: 1.2, margin: '44px 0 12px', color: ink }} {...p} />
  ),
  h3: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 21, lineHeight: 1.25, margin: '28px 0 8px', color: ink }} {...p} />
  ),
  p: (p: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ margin: '0 0 16px', lineHeight: 1.75, fontSize: 17, color: ink }} {...p} />
  ),
  ul: (p: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ margin: '0 0 16px', paddingLeft: 24, lineHeight: 1.7, fontSize: 17, color: ink }} {...p} />
  ),
  ol: (p: React.HTMLAttributes<HTMLOListElement>) => (
    <ol style={{ margin: '0 0 16px', paddingLeft: 24, lineHeight: 1.7, fontSize: 17, color: ink }} {...p} />
  ),
  li: (p: React.HTMLAttributes<HTMLLIElement>) => <li style={{ margin: '6px 0' }} {...p} />,
  a: (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a style={{ color: amber, textDecoration: 'underline', fontWeight: 500 }} {...p} />
  ),
  strong: (p: React.HTMLAttributes<HTMLElement>) => <strong style={{ fontWeight: 700 }} {...p} />,
  img: (p: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img style={{ width: '100%', height: 'auto', borderRadius: 12, border: `1px solid ${hairline}`, margin: '24px 0' }} alt={p.alt || ''} {...p} />
  ),
  blockquote: (p: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote style={{ borderLeft: `3px solid ${amber}`, paddingLeft: 16, margin: '0 0 16px', color: ink2, fontStyle: 'italic' }} {...p} />
  ),
  code: (p: React.HTMLAttributes<HTMLElement>) => (
    <code style={{ background: '#F0EDE8', padding: '2px 6px', borderRadius: 4, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 14 }} {...p} />
  ),
  pre: (p: React.HTMLAttributes<HTMLPreElement>) => (
    <pre style={{ background: '#1C1917', color: '#F5F0E8', padding: 20, borderRadius: 8, overflowX: 'auto', margin: '0 0 24px', fontSize: 13.5, lineHeight: 1.6 }} {...p} />
  ),
}

function FaqJsonLd({ post }: { post: Post }) {
  if (!post.faq?.length) return null
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  // Title is rendered once below; strip a duplicate leading H1 from the body.
  const body = post.content.replace(/^\s*#\s+.*(\r?\n)+/, '')
  const dateLabel = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <main style={{ background: '#FAFAF9', minHeight: '100vh', color: ink }}>
      <FaqJsonLd post={post} />

      <header style={{ borderBottom: `1px solid ${hairline}`, padding: '20px 24px' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: ink, textDecoration: 'none', fontWeight: 700 }}>
            WRI
          </Link>
          <Link href="/blog" style={{ color: amber, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            ← All articles
          </Link>
        </div>
      </header>

      <article style={{ maxWidth: 768, margin: '0 auto', padding: '48px 24px 96px' }}>
        <div style={{ color: amber, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
          {(post.tags[0] || 'Article')}{dateLabel ? ` · ${dateLabel}` : ''}
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 42, lineHeight: 1.1, margin: '0 0 20px', color: ink }}>
          {post.title}
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: ink2, margin: '0 0 32px' }}>{post.description}</p>

        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.imageAlt}
            style={{ width: '100%', height: 'auto', borderRadius: 12, border: `1px solid ${hairline}`, marginBottom: 40, display: 'block' }}
          />
        )}

        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {body}
        </ReactMarkdown>

        {post.faq?.length > 0 && (
          <section style={{ marginTop: 56, borderTop: `1px solid ${hairline}`, paddingTop: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, margin: '0 0 24px', color: ink }}>
              Frequently asked questions
            </h2>
            {post.faq.map((f, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 19, margin: '0 0 6px', color: ink }}>{f.q}</h3>
                <p style={{ margin: 0, lineHeight: 1.7, fontSize: 16, color: ink2 }}>{f.a}</p>
              </div>
            ))}
          </section>
        )}
      </article>
    </main>
  )
}
