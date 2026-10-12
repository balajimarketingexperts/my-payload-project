import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import ShaderShowcase from "@/components/ui/hero";
import ExecutiveBuildCareerSection from "@/components/executive-build-career-section";
import ExecutiveLifeCarousel from "@/components/executive-life-carousel";
import ExecutiveModulesStackingSection from "@/components/executive-modules-stacking-section";
import ExecutiveCareerRolesSection from "@/components/executive-career-roles-section";
import ExecutiveSkillsGainSection from "@/components/executive-skills-gain-section";
import ExecutiveWhyStudySection from "@/components/executive-why-study-section";
import ExecutiveStudentsSaySection from "@/components/executive-students-say-section";
import ExecutiveFaqsV2 from "@/components/executive-faqs-v2";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title:
    "Executive Program in Marketing & Growth for Working Professionals | Weekend Batches Delhi NCR | Balaji Marketing Institute",
  description:
    "Advance your career with the 3-Month Executive Marketing & Growth Program at Balaji Marketing Institute, Delhi. Live Sunday batches for working professionals covering 7-figure performance media, CRO science, GA4 attribution, Generative AI & boardroom leadership.",
  keywords: [
    "Executive marketing course Delhi",
    "Executive marketing course New Delhi",
    "Executive digital marketing for working professionals",
    "Weekend marketing course Delhi",
    "Weekend marketing course Rohini",
    "Executive marketing course Pitampura",
    "Executive marketing course Budh Vihar",
    "Executive marketing course North West Delhi",
    "Executive marketing course North Delhi",
    "Performance marketing executive certification",
    "Growth marketing course Delhi NCR",
    "Executive marketing course Rohini Sector 1 to 24",
    "MarTech certification",
    "Marketing leadership course for working professionals",
    "Sunday marketing batch Delhi",
    "Advanced digital marketing course for executives",
    "Head of Growth executive training",
  ],
  openGraph: {
    title:
      "Executive Marketing & Growth Program for Working Professionals | Balaji Marketing Institute",
    description:
      "Intensive 3-month Sunday program in 7-figure performance media, CRO, GA4 attribution, Generative AI automation, and boardroom leadership in Delhi NCR.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://balajimarketinginstitute.com/#organization",
      name: "Balaji Marketing Institute",
      alternateName: ["BMI", "Balaji Marketing Institute Delhi"],
      description:
        "Premier marketing institute in Delhi offering agency-simulated digital marketing courses, MBA programs, and executive marketing training for working professionals.",
      areaServed: [
        "New Delhi",
        "Rohini",
        "Pitampura",
        "Budh Vihar",
        "North West Delhi",
        "North Delhi",
        "Delhi NCR",
      ],
    },
    {
      "@type": "Course",
      "@id": "https://balajimarketinginstitute.com/courses/executive/#course",
      name: "Executive Program in Marketing & Growth",
      description:
        "Fast-track 3-month weekend program designed exclusively for working professionals covering high-budget paid media, conversion funnels, attribution, and AI automation.",
      provider: {
        "@id": "https://balajimarketinginstitute.com/#organization",
      },
      timeRequired: "P3M",
      courseMode: "blended",
      offers: {
        "@type": "Offer",
        price: "45000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const ROHINI_SECTORS = Array.from({ length: 24 }, (_, i) => i + 1);

export default function ExecutiveCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[#FFFDF9]">
        {/* Top Hero with Admissions Form (#apply) */}
        <ShaderShowcase
          backgroundVariant="dotted-trail"
          showNav={false}
          showRegistrationForm={true}
          badge="💼 Executive Marketing & Growth Program · 3 Months · Sundays Only"
          headline="EXECUTIVE PROGRAM IN MARKETING & GROWTH FOR WORKING PROFESSIONALS"
          subheadline="Advance into Senior Strategist, Growth Head, and Marketing Leadership roles without leaving your job. Intensive Sunday batches covering 7-figure Performance Media, Conversion Funnels, AI Automation & Boardroom Leadership."
          primaryCtaText="Apply for Executive Cohort"
          primaryCtaHref="#apply"
          secondaryCtaText="Download Weekend Syllabus"
          secondaryCtaHref="#curriculum"
          formTitle="Apply for Executive Batch"
          formSubtitle="Sundays Only (10:30 AM – 2:30 PM) · Limited to 25 Working Professionals"
          formBadge="Sunday Cohort 2026"
        />

        {/* 1. Build Your Career Section (Heading, Stats Strip, Batch Format) */}
        <ExecutiveBuildCareerSection />

        {/* 2. Executive Immersion Polaroid Clothesline Carousel */}
        <ExecutiveLifeCarousel />

        {/* 3. Stacking Scrollable Modules & Live Brand Audits Section */}
        <ExecutiveModulesStackingSection />

        {/* 4. Career Roles & Senior Compensation Section */}
        <ExecutiveCareerRolesSection />

        {/* 5. What You Will Learn (High-Leverage Skills Gained) */}
        <ExecutiveSkillsGainSection />

        {/* 6. Why Study With Us (Comparison Table & Fee/EMI Breakdown) */}
        <ExecutiveWhyStudySection />

        {/* 7. What Our Students Say (Alumni Transformations & Salary Growth) */}
        <ExecutiveStudentsSaySection />

        {/* 8. FAQs (10 Comprehensive, Compliant Answers) */}
        <ExecutiveFaqsV2 />
      </main>
      <SiteFooter />

      {/* ── Semantic SEO Block for Location & Catchment Areas ── */}
      <section aria-label="Campus Location & Regional Catchment Areas" className="sr-only">
        <h2>Executive Marketing Program Campus & Weekend Batch Catchment in Delhi NCR</h2>
        <p>
          Balaji Marketing Institute conducts Sunday executive cohorts in Rohini, tailored for working professionals commuting from New Delhi, Pitampura, Budh Vihar, North West Delhi, North Delhi, and Delhi NCR.
        </p>
        <h3>Rohini Sectors Coverage</h3>
        <ul>
          {ROHINI_SECTORS.map((sec) => (
            <li key={sec}>
              Executive marketing course in Rohini Sector {sec} | Weekend growth marketing classes near Rohini Sector {sec}
            </li>
          ))}
        </ul>
        <p>
          Direct connectivity from metro corridors for leaders commuting across Pitampura, Budh Vihar, Rohini Sectors 1 to 24, North Delhi, and the entire National Capital Region.
        </p>
      </section>
    </>
  );
}
