import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://balajimarketinginstitute.in'

  // Primary Canonical Pages for Balaji Marketing Institute
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses/diploma`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses/executive`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses/mba-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hire-from-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/your-introduction`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/courses/digital-marketing/your-introduction`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/courses/diploma/your-introduction`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/courses/executive/your-introduction`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/courses/mba-marketing/your-introduction`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Dynamic published blog posts from Payload CMS
  let articleRoutes: MetadataRoute.Sitemap = []
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs: articles } = (await payload.find({
      collection: 'articles' as any,
      where: {
        status: { equals: 'published' },
      },
      limit: 1000,
    })) as any

    articleRoutes = (articles || [])
      .filter((article: any) => !article.seo?.noIndex && article.slug)
      .map((article: any) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: article.updatedAt
          ? new Date(article.updatedAt)
          : new Date(article.publishedAt || Date.now()),
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error)
  }

  return [...staticRoutes, ...articleRoutes]
}
