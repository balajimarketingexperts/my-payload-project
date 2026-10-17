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

export const metadata: Metadata = {
  title:
    "Best Digital Marketing Course in Delhi with Placement | Rohini, Pitampura, Budh Vihar | Balaji Marketing Institute",
  description:
    "Join the #1 Digital Marketing Course in Delhi at Balaji Marketing Institute (Rohini, Pitampura, Budh Vihar). Agency-simulated training with Meta Ads, Google Ads, SEO, Generative AI & 100% placement support.",
  keywords: [
    "Digital marketing course in Delhi",
    "Digital marketing course in New Delhi",
    "Digital marketing course in Rohini",
    "Digital marketing course in Pitampura",
    "Digital marketing course in Budh Vihar",
    "Digital marketing course in North West Delhi",
    "Digital marketing course in North Delhi",
    "Digital marketing course in Delhi NCR",
    "Digital marketing course near me",
    "Best digital marketing course in Delhi",
    "Digital marketing course with placement",
    "Digital marketing course Rohini Sector 1 to 24",
    "Learn digital marketing",
    "Performance Marketing course",
    "Meta Ads training",
    "Google Ads certification",
    "SEO training Delhi",
  ],
  alternates: {
    canonical: "https://balajimarketinginstitute.in/courses/digital-marketing",
  },
  openGraph: {
    title:
      "Best Digital Marketing Course in Delhi with Placement | Balaji Marketing Institute",
    description:
      "Master Meta Ads, Google Ads, SEO, Generative AI, and performance analytics with live ad spend projects in Rohini, Pitampura, Budh Vihar & Delhi.",
    url: "https://balajimarketinginstitute.in/courses/digital-marketing",
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
        "Top-rated digital marketing institute in Delhi offering agency-simulated digital marketing courses with placement.",
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
      "@id": "https://balajimarketinginstitute.in/courses/digital-marketing/#course",
      name: "Digital Marketing Course with Placement",
      description:
        "Comprehensive 6-month digital marketing course covering Meta Ads, Google Ads, SEO, Content Marketing, and Generative AI with 100% placement assistance.",
      provider: {
        "@id": "https://balajimarketinginstitute.in/#organization",
      },
      timeRequired: "P6M",
    },
  ],
};

const ROHINI_SECTORS = Array.from({ length: 24 }, (_, i) => i + 1);

export default function DigitalMarketingCoursePage() {
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
          badge="🎓 Digital Marketing Course · 6 Months · Rohini / Delhi NCR"
          headline="#1 DIGITAL MARKETING COURSE FOR CAREER GROWTH"
          subheadline="Learn in-demand marketing skills with practical projects, expert mentors and placement assistance in Rohini, Pitampura, Budh Vihar & Delhi."
          primaryCtaText="Apply for Digital Marketing"
          primaryCtaHref="#apply"
          secondaryCtaText="Download Syllabus"
          secondaryCtaHref="#apply"
          formTitle="Apply for Marketing Launchpad"
          formSubtitle="Secure your seat in Delhi's top agency-led digital marketing training"
          formBadge="Admissions Open 2026"
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

      {/* ── Semantic SEO Block for Location & Catchment Areas ── */}
      <section aria-label="Campus Location & Regional Catchment Areas" className="sr-only">
        <h2>Digital Marketing Training Campus & Catchment Areas across Delhi NCR</h2>
        <p>
          Balaji Marketing Institute is headquartered in North West Delhi, offering offline classroom and hybrid digital marketing courses with live agency projects. We serve students across New Delhi, Pitampura, Budh Vihar, North Delhi, and Delhi NCR.
        </p>
        <h3>Rohini Sectors Coverage</h3>
        <ul>
          {ROHINI_SECTORS.map((sec) => (
            <li key={sec}>
              Digital marketing course in Rohini Sector {sec} | Digital marketing classes near Rohini Sector {sec}
            </li>
          ))}
        </ul>
        <p>
          Easy commute via Delhi Metro Red Line and Yellow Line for students looking for a digital marketing course in New Delhi, Pitampura, Budh Vihar, Rohini, North West Delhi, North Delhi, and Delhi NCR.
        </p>
      </section>
    </>
  );
}
