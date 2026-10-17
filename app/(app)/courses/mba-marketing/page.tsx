import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import ShaderShowcase from "@/components/ui/hero";
import MbaBuildCareerSection from "@/components/mba-build-career-section";
import MbaLifeCarousel from "@/components/mba-life-carousel";
import MbaModulesProjectsSection from "@/components/mba-modules-projects-section";
import MbaCareerRolesV2 from "@/components/mba-career-roles-v2";
import MbaSkillsGainSection from "@/components/mba-skills-gain-section";
import MbaWhyStudySection from "@/components/mba-why-study-section";
import MbaStudentsSaySection from "@/components/mba-students-say-section";
import MbaFaqsV2 from "@/components/mba-faqs-v2";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title:
    "Build Your Career in Marketing with an MBA in New Delhi | Balaji Marketing Institute",
  description:
    "AI-led sales and marketing program with placements in New Delhi. A placement-focused post graduate program (PGP) in sales and marketing offering better ROI than MBA, placement accountability, job-ready skills, 8L+ average CTC, and 150+ hiring partners.",
  keywords: [
    "MBA in Marketing New Delhi",
    "MBA in Marketing Delhi NCR",
    "MBA in Marketing Rohini",
    "MBA marketing Pitampura",
    "MBA marketing Budh Vihar",
    "MBA marketing North West Delhi",
    "MBA marketing North Delhi",
    "sales and marketing course Rohini Sector 1 to 24",
    "marketing institute near me",
    "learn sales and marketing",
    "post graduate program (PGP) in sales and marketing",
    "AI-led sales and marketing program",
    "sales and marketing program with placements",
    "sales and marketing course",
    "B-school / alternative to MBA",
    "better ROI than MBA",
    "placement-focused program",
    "placement support",
    "placement accountability",
    "career support and mock interviews",
    "job-ready skills",
    "sales development representative (SDR)",
    "business development representative (BDR)",
    "area sales executive",
    "account manager",
    "category manager",
    "partnerships manager",
    "lead generation manager",
    "client relationship manager",
    "inbound, outbound, B2B and account-based marketing roles",
  ],
  alternates: {
    canonical: "https://balajimarketinginstitute.in/courses/mba-marketing",
  },
  openGraph: {
    title:
      "AI-Led Sales and Marketing Program with Placements | Balaji Marketing Institute New Delhi",
    description:
      "Placement-focused post graduate program (PGP) in sales and marketing. Better ROI than MBA, placement accountability, job-ready skills, and 150+ hiring partners in Delhi NCR.",
    url: "https://balajimarketinginstitute.in/courses/mba-marketing",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://balajimarketinginstitute.in/#organization",
      name: "Balaji Marketing Institute",
      alternateName: ["BMI", "Balaji Marketing Institute Delhi"],
      description:
        "Premier B-school alternative offering an AI-led sales and marketing program with placements and placement accountability in New Delhi.",
      telephone: "+91-8368121032",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rohini",
        addressRegion: "New Delhi",
        addressCountry: "IN",
      },
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
      "@id": "https://balajimarketinginstitute.in/courses/mba-marketing/#course",
      name: "MBA in Marketing / Post Graduate Program (PGP) in Sales and Marketing",
      description:
        "AI-led sales and marketing program with placements, combining brand strategy, channel sales, B2B pipelines, and placement support with 150+ partners.",
      provider: {
        "@id": "https://balajimarketinginstitute.in/#organization",
      },
      timeRequired: "P2Y",
      offers: {
        "@type": "Offer",
        price: "180000",
        priceCurrency: "INR",
        category: "Standard Tuition Fee",
      },
    },
  ],
};

const ROHINI_SECTORS = Array.from({ length: 24 }, (_, i) => i + 1);

export default function MbaMarketingPage() {
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
          backgroundVariant="honey-ember"
          showNav={false}
          showRegistrationForm={true}
          badge="🏆 AI-Led Sales and Marketing Program · 2 Years · Better ROI than MBA"
          headline="BUILD YOUR CAREER IN MARKETING WITH AN MBA IN NEW DELHI"
          subheadline="A placement-focused program designed as a modern B-school alternative to MBA. Learn sales and marketing, brand strategy, B2B pipelines, and AI tools with dedicated placement support, placement accountability, and job-ready skills."
          primaryCtaText="Apply Now"
          primaryCtaHref="#apply"
          secondaryCtaText="Download Brochure"
          secondaryCtaHref="#apply"
          formTitle="Apply for MBA in Marketing"
          formSubtitle="Admissions Open for 2026-28 Batch · 150+ Hiring Partners"
          formBadge="Cohort 2026-28"
        />

        {/* 1. Build Your Career Section (Heading, Intro, Stats Strip, Buttons) */}
        <MbaBuildCareerSection />

        {/* Life & Immersion Polaroid Carousel */}
        <MbaLifeCarousel />

        {/* 2. Our Modules and Projects (What You’ll Study and Build) */}
        <MbaModulesProjectsSection />

        {/* 3. Roles You Can Get After the MBA (Career Roles After MBA Marketing + CTC Strip & Recruiters) */}
        <MbaCareerRolesV2 />

        {/* 4. What You Will Learn (Skills You’ll Gain) */}
        <MbaSkillsGainSection />

        {/* 5. Why It’s the Best Choice (Why Study MBA Marketing With Us + Fee Note & EMI) */}
        <MbaWhyStudySection />

        {/* 6. What Our Students Say (Hear From Our Students and Alumni) */}
        <MbaStudentsSaySection />

        {/* 7. FAQs (Clear, compliant answers to the 10 questions) */}
        <MbaFaqsV2 />
      </main>
      <SiteFooter />

      {/* ── Semantic SEO Block for Location & Catchment Areas ── */}
      <section aria-label="Campus Location & Regional Catchment Areas" className="sr-only">
        <h2>MBA in Marketing Campus & Catchment Areas in Delhi NCR</h2>
        <p>
          Balaji Marketing Institute&apos;s 2-year on-campus MBA marketing program is located in Rohini, accessible for students across New Delhi, Pitampura, Budh Vihar, North West Delhi, North Delhi, and Delhi NCR.
        </p>
        <h3>Rohini Sectors Coverage</h3>
        <ul>
          {ROHINI_SECTORS.map((sec) => (
            <li key={sec}>
              MBA in Marketing Rohini Sector {sec} | Sales and marketing program near Rohini Sector {sec}
            </li>
          ))}
        </ul>
        <p>
          Convenient transit access for candidates commuting from Pitampura, Budh Vihar, North Delhi, Rohini Sectors 1 to 24, and the wider Delhi NCR capital region.
        </p>
      </section>
    </>
  );
}
