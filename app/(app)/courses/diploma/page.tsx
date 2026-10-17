import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import ShaderShowcase from "@/components/ui/hero";
import DiplomaBuildCareerSection from "@/components/diploma-build-career-section";
import DiplomaLifeCarousel from "@/components/diploma-life-carousel";
import WhyChooseBmiSection from "@/components/why-choose-bmi-section";
import DiplomaCurriculumSection from "@/components/diploma-curriculum-section";
import DiplomaCareerRolesSection from "@/components/diploma-career-roles-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import DiplomaFaqSection from "@/components/diploma-faq-section";
import SiteFooter from "@/components/site-footer";
import FloatingContactPopup from "@/components/ui/floating-contact-popup";

export const metadata: Metadata = {
  title:
    "Best Digital Marketing Course in Delhi with Placement | Rohini, Pitampura, Budh Vihar | Balaji Marketing Institute",
  description:
    "Looking for a digital marketing course in Delhi or near you? Balaji Marketing Institute is the top digital marketing institute in Rohini, Pitampura, Budh Vihar, and North West Delhi. Join full-time or part-time classroom training & online digital marketing courses with live Meta Ads, Google Ads, SEO, Generative AI & 100% placement support.",
  keywords: [
    "Digital marketing course in Delhi",
    "Digital marketing course in Rohini",
    "Digital marketing course in Pitampura",
    "Digital marketing course in Budh Vihar",
    "Digital marketing course in North West Delhi",
    "Digital marketing course near me",
    "Digital marketing institute in Rohini / Pitampura / Budh Vihar / Delhi",
    "Digital marketing training in Rohini / Pitampura / Budh Vihar / Delhi",
    "Digital marketing classes in Rohini / Pitampura / Budh Vihar / Delhi",
    "Best digital marketing course in Delhi",
    "Digital marketing course",
    "Digital marketing course with placement",
    "Online digital marketing course",
    "Digital marketing certification",
    "Digital marketing certificate",
    "Digital marketing training",
    "Digital marketing course syllabus",
    "Digital marketing course curriculum",
    "Digital marketing course fees",
    "Learn digital marketing",
    "Full-time digital marketing course",
    "Part-time digital marketing course",
    "Performance Marketing",
    "Search Engine Marketing",
    "Programmatic Advertising",
    "Search Engine Optimization",
    "Google Ads",
    "Meta Ads",
    "Google Analytics",
    "AI Prompt Engineering",
    "Generative AI for Content",
  ],
  alternates: {
    canonical: "https://balajimarketinginstitute.in/courses/diploma",
  },
  openGraph: {
    title:
      "Best Digital Marketing Course in Delhi with Placement | Balaji Marketing Institute",
    description:
      "Master Meta Ads, Google Ads, SEO, Generative AI, and performance analytics with live ad spend projects in Rohini, Pitampura, Budh Vihar & Delhi.",
    url: "https://balajimarketinginstitute.in/courses/diploma",
    type: "website",
    locale: "en_IN",
  },
};

// ─── JSON-LD Schema for Course & Local Business ──────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://balajimarketinginstitute.in/#organization",
      name: "Balaji Marketing Institute",
      alternateName: [
        "BMI",
        "Balaji Marketing Institute Rohini",
        "Balaji Marketing Institute Delhi",
      ],
      description:
        "Top-rated digital marketing institute in Delhi offering agency-simulated digital marketing courses with placement in Rohini, Pitampura, Budh Vihar, and North West Delhi.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rohini West / Budh Vihar Corridor",
        addressLocality: "North West Delhi",
        addressRegion: "Delhi",
        postalCode: "110085",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.7159",
        longitude: "77.1084",
      },
      telephone: "+91-8368121032",
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
      "@id": "https://balajimarketinginstitute.in/courses/diploma/#course",
      name: "Diploma in Digital Marketing with Placement",
      description:
        "Comprehensive 6-month digital marketing course covering Brand Strategy, Meta Ads (Facebook and Instagram), Google Search Ads, Advanced Google Ads, Search Engine Optimization (SEO), LLM Optimization, Programmatic Advertising (DV360, CM360), Ecommerce & Quick Commerce, Content Marketing, and Generative AI.",
      provider: {
        "@id": "https://balajimarketinginstitute.in/#organization",
      },
      educationalCredentialAwarded:
        "BMI Diploma in Digital Marketing Certification",
      timeRequired: "P6M",
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: "onsite",
          courseWorkload: "P6M",
          description:
            "Full-time and part-time classroom digital marketing classes in Rohini, Pitampura, Budh Vihar, North West Delhi.",
        },
        {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "P6M",
          description:
            "Interactive live online digital marketing course accessible across Delhi and pan-India.",
        },
      ],
      occupationalCategory: [
        "Digital Marketing Analyst",
        "Performance Marketing Executive",
        "Ecommerce Marketing Specialist",
        "Programmatic Executive",
        "SEO Analyst",
        "SEO Executive",
        "SEM Analyst",
        "PPC Specialist",
        "Client Manager",
        "Account Manager",
        "Account Executive",
        "Marketing Analyst",
        "Content Manager",
        "Social Media Manager",
        "Media Planner",
        "Content Writer",
      ],
    },
  ],
};

const ROHINI_SECTORS = Array.from({ length: 24 }, (_, i) => i + 1);

export default function DiplomaCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[#FFFDF9]">
        <ShaderShowcase
          showNav={false}
          showRegistrationForm={true}
          badge="🎓 Diploma in Digital Marketing · 6 Months · Rohini / Delhi NCR"
          headline="#1 DIGITAL MARKETING COURSE FOR CAREER GROWTH"
          subheadline="Learn in-demand marketing skills with practical projects, expert mentors and placement assistance in Rohini, Pitampura, Budh Vihar & Delhi."
          primaryCtaText="Apply for Diploma"
          primaryCtaHref="#apply"
          secondaryCtaText="Download Syllabus"
          secondaryCtaHref="#apply"
        />
        <DiplomaBuildCareerSection />
        <DiplomaLifeCarousel />
        <WhyChooseBmiSection />
        <DiplomaCurriculumSection />
        <DiplomaCareerRolesSection />
        <TestimonialsSection />
        <DiplomaFaqSection />
      </main>
      <SiteFooter />
      <FloatingContactPopup />

      {/* ── Semantic SEO Block for Location & Catchment Areas ── */}
      <section aria-label="Campus Location & Regional Catchment Areas" className="sr-only">
        <h2>Diploma in Digital Marketing Campus & Catchment Areas in Delhi NCR</h2>
        <p>
          Balaji Marketing Institute provides classroom training with guaranteed placement support across New Delhi, Pitampura, Budh Vihar, North Delhi, and Delhi NCR.
        </p>
        <h3>Rohini Sectors Coverage</h3>
        <ul>
          {ROHINI_SECTORS.map((sec) => (
            <li key={sec}>
              Digital marketing course in Rohini Sector {sec} | Digital marketing training near Rohini Sector {sec}
            </li>
          ))}
        </ul>
        <p>
          Centrally located for students commuting across Rohini Sectors 1 to 24, Pitampura, Budh Vihar, North West Delhi, North Delhi, and New Delhi.
        </p>
      </section>
    </>
  );
}
