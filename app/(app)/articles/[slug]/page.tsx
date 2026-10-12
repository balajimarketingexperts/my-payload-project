import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

// ✅ SEO: Har article ka apna meta title/description
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const article = docs[0] as any
  if (!article) return { title: 'Article Not Found' }

  const metaTitle = article.seo?.metaTitle || article.title
  const metaDescription = article.seo?.metaDescription || article.excerpt || ''
  const ogImage = article.seo?.ogImage?.url || article.featuredImage?.url

  return {
    title: metaTitle,
    description: metaDescription,
    robots: article.seo?.noIndex ? 'noindex' : 'index,follow',
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: article.publishedAt,
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'articles',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const article = docs[0] as any
  if (!article) notFound()

  return (
    <main style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      {/* Back link */}
      <a href="/articles" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.9rem' }}>
        ← Sab articles
      </a>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
          {article.tags.map((t: any) => (
            <span key={t.tag} style={{ background: '#f0f0f0', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
              {t.tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 style={{ fontSize: '2.2rem', lineHeight: '1.3', margin: '16px 0 12px', color: '#1a1a1a' }}>
        {article.title}
      </h1>

      {/* Excerpt */}
      {article.excerpt && (
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px', lineHeight: '1.7' }}>
          {article.excerpt}
        </p>
      )}

      {/* Meta info */}
      <div style={{ display: 'flex', gap: '16px', color: '#888', fontSize: '0.85rem', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #eee' }}>
        {article.publishedAt && (
          <span>📅 {new Date(article.publishedAt).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        )}
      </div>

      {/* Featured Image */}
      {article.featuredImage?.url && (
        <img
          src={article.featuredImage.url}
          alt={article.title}
          style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', maxHeight: '400px' }}
        />
      )}

      {/* Article Content - Payload richText renders as HTML via lexical */}
      <div
        style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}
        dangerouslySetInnerHTML={{
          __html: article.content ? JSON.stringify(article.content) : '<p>Content loading...</p>',
        }}
      />
    </main>
  )
}
