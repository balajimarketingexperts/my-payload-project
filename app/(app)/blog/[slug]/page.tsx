import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import RichText from '@/components/rich-text'
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  Share2,
  Tag,
  CheckCircle,
  Phone,
  Sparkles,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = (await payload.find({
      collection: 'articles' as any,
      where: {
        slug: { equals: slug },
        status: { equals: 'published' },
      },
      limit: 1,
    })) as any

    const article: any = docs[0]
    if (!article) {
      return { title: 'Article Not Found | Balaji Marketing Institute' }
    }

    const title = article.seo?.metaTitle || article.title
    const description = article.seo?.metaDescription || article.excerpt || ''
    const canonical = `https://balajimarketinginstitute.in/blog/${slug}`

    return {
      title: `${title} | Balaji Marketing Institute`,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'article',
        publishedTime: article.publishedAt || undefined,
        images:
          typeof article.featuredImage === 'object' && article.featuredImage?.url
            ? [{ url: article.featuredImage.url }]
            : undefined,
      },
    }
  } catch {
    return { title: 'Blog | Balaji Marketing Institute' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const { docs } = (await payload.find({
    collection: 'articles' as any,
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })) as any

  const article: any = docs[0]
  if (!article) {
    notFound()
  }

  const imageUrl =
    typeof article.featuredImage === 'object' && article.featuredImage?.url
      ? article.featuredImage.url
      : null

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  const authorName =
    typeof article.author === 'object' && article.author?.name
      ? article.author.name
      : typeof article.author === 'object' && article.author?.email
      ? article.author.email
      : 'BMI Faculty Team'

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#1F2A5C]">
      <SiteHeader />

      <main className="flex-1 pt-32 pb-20 md:pt-40 md:pb-28">
        <article className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-[#F86104] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-[#F86104] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F86104] truncate max-w-[200px] sm:max-w-xs">
              {article.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            {article.category && (
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#DA3A0A] mb-4">
                {article.category}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2A5C] leading-tight tracking-tight mb-6">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-8">
                {article.excerpt}
              </p>
            )}

            {/* Author and Date Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F86104] to-[#1F2A5C] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {authorName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-[#1F2A5C]">{authorName}</p>
                  <p className="text-xs text-slate-500">Balaji Marketing Institute, Rohini</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-500">
                {formattedDate && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {formattedDate}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  5 min read
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {imageUrl && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}

          {/* Article Main Content */}
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
            <RichText content={article.content} />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Tags:
                </span>
                {article.tags.map((t: any, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    #{t.tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Author Bio & Institute CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#FFF4EB] to-[#FFFDF9] border border-orange-200/80 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DA3A0A]">
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Marketing Journey</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F2A5C]">
                  Learn Agency-Grade Digital Marketing in Delhi
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Join Balaji Marketing Institute in Rohini. Live ad spends, 15+ industry tools, Meta & Google certificates, and 100% placement support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  href="/courses/digital-marketing#apply"
                  className="px-6 py-3.5 rounded-full bg-[#F86104] hover:bg-[#DA3A0A] text-white font-bold text-sm text-center shadow-lg shadow-[#F86104]/25 transition-all"
                >
                  Book Free Demo
                </Link>
                <Link
                  href="/blog"
                  className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm text-center border border-slate-200 transition-all"
                >
                  ← More Articles
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
