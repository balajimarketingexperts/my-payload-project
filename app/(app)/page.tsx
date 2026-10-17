import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import StatsSection from "@/components/ui/stats-section";
import PickACourseSection from "@/components/ui/pick-a-course-section";
import HowItWorksSection from "@/components/ui/how-it-works-section";
import BrandsSection from "@/components/ui/brands-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import AboutUsSection from "@/components/ui/about-us-section";
import SiteFooter from "@/components/site-footer";
import FloatingContactPopup from "@/components/ui/floating-contact-popup";

export const metadata: Metadata = {
  title: "Best Digital Marketing Institute in Rohini | Balaji Marketing Institute",
  description:
    "Join Balaji Marketing Institute in Rohini, Delhi. Master SEO, Performance Marketing, Social Media & AI Tools with 100% practical training & placement assistance.",
  alternates: {
    canonical: "https://balajimarketinginstitute.in",
  },
  openGraph: {
    title: "Best Digital Marketing Institute in Rohini | Balaji Marketing Institute",
    description:
      "Join Balaji Marketing Institute in Rohini, Delhi. Master SEO, Performance Marketing, Social Media & AI Tools with 100% practical training & placement assistance.",
    url: "https://balajimarketinginstitute.in",
  },
};

/* ── JSON-LD: EducationalOrganization schema ─────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Balaji Marketing Institute",
  alternateName: "BMI",
  url: "https://balajimarketinginstitute.in",
  logo: "https://balajimarketinginstitute.in/logo.png",
  telephone: "+918368121032",
  description:
    "India's top B school for marketing, sales and business leadership. Job-linked programs in digital marketing, performance marketing, and MBA marketing. Graduate with a job, not just a degree.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rohini",
    addressLocality: "Rohini, Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  foundingDate: "2022",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Programs",
    itemListElement: [
      {
        "@type": "Course",
        name: "The Marketing Launchpad",
        description:
          "Foundational job-linked program in digital marketing with hands-on learning, practical training, live projects, and real-world business challenges.",
        provider: { "@type": "Organization", name: "Balaji Marketing Institute" },
      },
      {
        "@type": "Course",
        name: "PGP in AI-Led Marketing",
        description:
          "9 months postgraduate-equivalent PG program featuring an AI-first industry-relevant curriculum covering performance marketing, performance media, SEO, paid search, and search ads.",
        provider: { "@type": "Organization", name: "Balaji Marketing Institute" },
      },
      {
        "@type": "Course",
        name: "PGP in AI-Led Sales, Marketing and Business",
        description:
          "Comprehensive PG program preparing candidates for sales leadership, business leadership, omni-channel, quick commerce, FMCG, and e-commerce GTM execution.",
        provider: { "@type": "Organization", name: "Balaji Marketing Institute" },
      },
      {
        "@type": "Course",
        name: "Diploma in Digital Marketing",
        description:
          "6 months digital marketing course (full-time, part-time/weekend, in Hindi) available online, offline, and online & offline for graduates only and open for all.",
        provider: { "@type": "Organization", name: "Balaji Marketing Institute" },
      },
      {
        "@type": "Course",
        name: "MBA in Marketing",
        description:
          "2-year postgraduate-equivalent program in marketing, sales and business leadership. Job-linked with 70+ recruiting partners.",
        provider: { "@type": "Organization", name: "Balaji Marketing Institute" },
      },
      {
        "@type": "Course",
        name: "Executive Marketing Program",
        description:
          "Weekend batch for working professionals focusing on AI tools, automation, programmatic display, content, and career growth.",
        provider: { "@type": "Organization", name: "Balaji Marketing Institute" },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "54",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data — invisible, parsed by Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />
      <main>
        {/* 6rem = header height (h-24) */}
        <section id="hero" className="h-[calc(100svh-6rem)] min-h-[640px] w-full snap-start scroll-mt-24">
          <ScrollMorphHero />
        </section>
        <StatsSection />
        <PickACourseSection />
        <HowItWorksSection />
        <BrandsSection />
        <TestimonialsSection />
        <AboutUsSection />
      </main>
      <SiteFooter />
      <FloatingContactPopup />

      {/* ── Semantic SEO block — visually hidden, screen-reader & crawler accessible ── */}
      <section aria-label="Institute Overview and Career Tracks" className="sr-only">
        <h1>Balaji Marketing Institute — India&apos;s Top B School for Marketing, Sales, and Business</h1>
        
        <p>
          Balaji Marketing Institute (BMI) offers specialized job-linked programs designed to prepare students and professionals for high-growth careers in marketing, sales, and business leadership. Whether you are looking for a digital marketing course (full-time, part-time/weekend, in Hindi), an intensive 6 months diploma, or an immersive 9 months PG program, our courses are tailored for graduates only as well as flexible tracks open for all learners. Study online, offline, or through our blended online &amp; offline mode.
        </p>

        <h2>Flagship Programs &amp; Curriculum</h2>
        <p>
          Aspiring marketers can explore programs including The Marketing Launchpad, the advanced PGP in AI-Led Marketing, and the high-impact PGP in AI-Led Sales, Marketing and Business. Designed as a postgraduate-equivalent qualification, each course features an AI-first industry-relevant curriculum. Students master modern AI tools, marketing automation, performance media, SEO, paid search, search ads, programmatic display, and compelling content creation. Our AI-led and AI-first methodology equips learners for digital-first businesses, e-commerce, quick commerce, and FMCG sectors.
        </p>

        <h2>Strategic Domains &amp; Business Leadership</h2>
        <p>
          Our pedagogy builds deep command over sales leadership, omni-channel distribution, GTM strategies, product marketing, customer marketing, and recruitment marketing. Through hands-on learning, practical training, live projects, and real-world business challenges, candidates develop the professionalism and preparedness required to hit the ground running from day one of employment.
        </p>

        <h2>Career Momentum, Recruiters &amp; Career Outcomes</h2>
        <p>
          BMI focuses relentlessly on employability, career growth, and career momentum. By bridging the gap between classroom theory and industry needs, our graduates get hired across 70+ recruiting partners and premier recruiters. Leading employers trust BMI as a reliable partner providing fast turnaround and swift support during talent acquisition. Our curated talent pool delivers market-ready quality talent and quality candidates who excel during onboarding. As a result, every hiring partner continues to hire again season after season.
        </p>

        <h2>Career Tracks, Internships &amp; Entry-Level Roles</h2>
        <p>
          From high-impact internship opportunities to full-time trainee and entry-level placements, our interns and trainees step directly into sought-after industry roles, including:
        </p>
        <ul>
          <li>Performance marketing executive</li>
          <li>Performance marketing specialist</li>
          <li>Performance marketeer</li>
          <li>Sales development representative</li>
          <li>Area sales executive</li>
          <li>Sales executive trainee</li>
          <li>Senior marketing analyst</li>
          <li>Trainee analyst (search ads)</li>
          <li>Trainee analyst (performance media)</li>
          <li>Paid search analyst</li>
          <li>Analyst (programmatic display)</li>
          <li>SEO executive</li>
          <li>Content writer</li>
          <li>Digital marketing trainee</li>
        </ul>

        <p>
          Accelerate your career outcomes, land your dream job among top jobs, build lifelong careers, and join the thriving network of placed professionals at Balaji Marketing Institute, Rohini, Delhi.
        </p>
      </section>
    </>
  );
}
