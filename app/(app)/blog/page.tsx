import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Sparkles, ChevronRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog & Digital Marketing Insights | Balaji Marketing Institute Rohini',
  description:
    'Read actionable guides, SEO strategies, Meta Ads blueprints, and career roadmaps written by agency practitioners at Balaji Marketing Institute.',
  alternates: {
    canonical: 'https://balajimarketinginstitute.in/blog',
  },
  openGraph: {
    title: 'Blog & Digital Marketing Insights | Balaji Marketing Institute Rohini',
    description:
      'Read actionable guides, SEO strategies, Meta Ads blueprints, and career roadmaps written by agency practitioners at Balaji Marketing Institute.',
    url: 'https://balajimarketinginstitute.in/blog',
    type: 'website',
    locale: 'en_IN',
  },
}

export default async function BlogPage() {
  let articles: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const res = (await payload.find({
      collection: 'articles' as any,
      where: {
        status: { equals: 'published' },
      },
      sort: '-publishedAt',
      limit: 30,
    })) as any
    articles = res.docs || []
  } catch (err) {
    console.error('Error fetching articles for /blog:', err)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#1F2A5C]">
      <SiteHeader />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FFF4EB]/60 via-[#FFFDF9] to-white border-b border-orange-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F86104]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1F2A5C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#F86104] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F86104]">Blog & Insights</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-[#DA3A0A] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agency Insights & Marketing Blueprints</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F2A5C] max-w-4xl leading-tight">
            Digital Marketing Trends, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F86104] to-[#DA3A0A]">
              Ad Strategies & Career Guides
            </span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Practical strategies on Meta Ads, Google Ads, SEO, and Generative AI from mentors training Delhi’s top performance marketers.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-6xl mx-auto px-6">
          {articles.length === 0 ? (
            <div className="text-center py-20 px-6 max-w-xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F86104]">
                <BookOpen className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2A5C] mb-2">New Articles Coming Soon!</h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Our agency practitioners are curating detailed blueprints on 2026 performance ads, AI prompts, and SEO algorithms. Check back soon or visit our admin panel to publish articles!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/admin"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F86104] hover:bg-[#DA3A0A] text-white font-bold text-sm shadow-md transition-all"
                >
                  Go to Payload Admin
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/courses/digital-marketing"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => {
                const imageUrl =
                  typeof article.featuredImage === 'object' && article.featuredImage?.url
                    ? article.featuredImage.url
                    : null
                const formattedDate = article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  : null

                return (
                  <article
                    key={article.id}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#F86104]/50 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <Link
                      href={`/blog/${article.slug}`}
                      className="relative h-52 w-full overflow-hidden bg-slate-100 block"
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-orange-400 via-[#F86104] to-[#1F2A5C] flex items-center justify-center p-6 text-white text-center">
                          <span className="font-bold text-lg opacity-90 drop-shadow">
                            Balaji Marketing Institute
                          </span>
                        </div>
                      )}
                      {article.category && (
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#1F2A5C] shadow-sm backdrop-blur-sm">
                          {article.category}
                        </span>
                      )}
                    </Link>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium">
                          {formattedDate && (
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              {formattedDate}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            5 min read
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-[#1F2A5C] group-hover:text-[#F86104] transition-colors leading-snug line-clamp-2 mb-3">
                          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                        </h2>

                        {/* Excerpt */}
                        {article.excerpt && (
                          <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
                            {article.excerpt}
                          </p>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                        <Link
                          href={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F86104] group-hover:gap-2.5 transition-all"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          {/* Bottom Lead Banner */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#1F2A5C] to-[#2B3978] text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F86104]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[#F89520] font-bold text-xs uppercase tracking-wider inline-block mb-3">
                100% Practical Training
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold mb-3">
                Want to Learn These Skills with Live Ad Budgets?
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed">
                Join Balaji Marketing Institute in Rohini. Experience agency-simulated projects, Google & Meta certifications, and 100% placement support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses/digital-marketing#apply"
                  className="px-6 py-3.5 rounded-full bg-[#F86104] hover:bg-[#DA3A0A] text-white font-bold text-sm transition-all shadow-lg shadow-[#F86104]/30"
                >
                  Book Free Demo Class
                </Link>
                <a
                  href="https://wa.me/918368121032?text=Hi%2C%20I%20am%20interested%20in%20digital%20marketing%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
