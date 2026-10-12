import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Articles | My Site',
  description: 'Hamare latest articles aur blog posts padho',
}

export default async function ArticlesPage() {
  const payload = await getPayload({ config: configPromise })

  const { docs: articles } = await payload.find({
    collection: 'articles',
    where: {
      status: { equals: 'published' },
    },
    sort: '-publishedAt',
    limit: 20,
  })

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📝 Articles</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>Latest articles aur blog posts</p>

      {articles.length === 0 ? (
        <p style={{ color: '#888' }}>Abhi koi article publish nahi hua. Admin se article add karo!</p>
      ) : (
        <div style={{ display: 'grid', gap: '24px' }}>
          {articles.map((article: any) => (
            <article
              key={article.id}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '24px',
                transition: 'box-shadow 0.2s',
              }}
            >
              <Link href={`/articles/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#1a1a1a' }}>
                  {article.title}
                </h2>
              </Link>
              {article.excerpt && (
                <p style={{ color: '#555', marginBottom: '12px', lineHeight: '1.6' }}>
                  {article.excerpt}
                </p>
              )}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: '#888', fontSize: '0.85rem' }}>
                {article.publishedAt && (
                  <span>📅 {new Date(article.publishedAt).toLocaleDateString('hi-IN')}</span>
                )}
                {article.tags && article.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {article.tags.map((t: any) => (
                      <span key={t.tag} style={{ background: '#f0f0f0', padding: '2px 10px', borderRadius: '20px' }}>
                        {t.tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/articles/${article.slug}`} style={{ color: '#0070f3', marginLeft: 'auto' }}>
                  Padho →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
