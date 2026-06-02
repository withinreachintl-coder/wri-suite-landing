import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

const ink = '#1C1917'
const ink2 = '#44403C'
const amber = '#D97706'
const hairline = '#E7E2D9'

export const metadata: Metadata = {
  title: 'Restaurant operations playbook | WRI Blog',
  description:
    'Practical, operator-tested guides on running an independent restaurant — tip pools, par levels, scheduling, daily ops and more.',
  alternates: { canonical: 'https://wireach.tools/blog' },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main style={{ background: '#FAFAF9', minHeight: '100vh', color: ink }}>
      <header style={{ borderBottom: `1px solid ${hairline}`, padding: '20px 24px' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: ink, textDecoration: 'none', fontWeight: 700 }}>
            WRI
          </Link>
          <Link href="/" style={{ color: amber, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            ← Back to site
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: 768, margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ color: amber, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
          The playbook
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 44, lineHeight: 1.1, margin: '0 0 16px', color: ink }}>
          Running a restaurant, one fixable problem at a time
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: ink2, margin: '0 0 48px' }}>
          Operator-tested guides on the daily mechanics — tips, par levels, scheduling, shift handoffs — and the tools that take the manual work off your plate.
        </p>

        {posts.length === 0 ? (
          <p style={{ color: ink2 }}>No articles yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {posts.map((p) => {
              const dateLabel = p.date
                ? new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                : ''
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  style={{ display: 'block', textDecoration: 'none', border: `1px solid ${hairline}`, borderRadius: 12, overflow: 'hidden', background: '#fff' }}
                >
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.imageAlt} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', borderBottom: `1px solid ${hairline}` }} />
                  )}
                  <div style={{ padding: '20px 24px 24px' }}>
                    <div style={{ color: amber, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
                      {(p.tags[0] || 'Article')}{dateLabel ? ` · ${dateLabel}` : ''}
                    </div>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, lineHeight: 1.2, margin: '0 0 8px', color: ink }}>
                      {p.title}
                    </h2>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: ink2 }}>{p.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
