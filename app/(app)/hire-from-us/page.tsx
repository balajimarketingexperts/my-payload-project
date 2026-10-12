import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import FloatingContactPopup from "@/components/ui/floating-contact-popup";
import HireFromUsView from "@/components/hire-from-us-view";

export const metadata: Metadata = {
  title:
    "Hire Job-Ready Marketing Graduates | 150+ Hiring Partners | Balaji Marketing Institute",
  description:
    "Hire job-ready performance marketers, SEO analysts, content managers, and sales leaders from Balaji Marketing Institute. Vetted shortlists delivered in 48 hours, 0 recruiter placement fees, and candidates trained on live client ad budgets.",
  keywords: [
    "hire digital marketers",
    "hire digital marketers India",
    "hire digital marketing freshers",
    "digital marketing talent hiring",
    "digital marketing recruitment partner",
    "campus hiring digital marketing",
    "hire job-ready digital marketers",
    "free recruitment for digital marketers",
    "hire trained marketing freshers",
    "entry-level digital marketing hiring",
    "hire digital marketers in New Delhi",
    "digital marketing recruitment New Delhi",
    "hire digital marketing freshers New Delhi",
    "hire SEO executive in New Delhi",
    "hire performance marketer in New Delhi",
    "hire Google Ads executive in New Delhi",
    "hire social media manager in New Delhi",
    "hire digital marketing interns in New Delhi",
    "digital marketing talent hiring New Delhi",
    "hire digital marketers near me",
    "hire digital marketers in Pitampura",
    "digital marketing recruitment Pitampura",
    "hire digital marketing freshers Pitampura",
    "hire SEO executive in Pitampura",
    "hire social media executive in Pitampura",
    "digital marketing interns Pitampura",
    "hire content marketer in Pitampura",
    "hire digital marketers in Budh Vihar",
    "digital marketing recruitment Budh Vihar",
    "hire digital marketing freshers Budh Vihar",
    "hire performance marketer in Budh Vihar",
    "digital marketing interns Budh Vihar",
    "hire digital marketers in Rohini",
    "digital marketing recruitment Rohini",
    "hire digital marketing freshers Rohini",
    "hire SEO executive in Rohini",
    "hire Google Ads executive in Rohini",
    "hire social media manager in Rohini",
    "hire digital marketing interns in Rohini",
    "hire e-commerce analyst in Rohini",
    "digital marketing talent hiring Rohini Delhi",
    "hire digital marketers in North West Delhi",
    "hire digital marketers in North Delhi",
    "hire digital marketers in Delhi NCR",
    "hire digital marketers Delhi",
    "campus hiring vs job portals",
    "recruitment agency vs direct hiring",
    "cost of hiring a digital marketer",
    "average salary of a digital marketing fresher in India",
    "digital marketing intern vs full-time hire",
    "what skills to look for in a digital marketer",
    "how long does it take to hire a digital marketer",
  ],
  openGraph: {
    title:
      "Hire Job-Ready Marketing Graduates, Ready from Week One | Balaji Marketing Institute",
    description:
      "Skip months of training. Our graduates have managed live ad budgets, GA4 dashboards, and real campaigns. Shortlists delivered within 48 hours with 0 recruiter fees.",
    type: "website",
    locale: "en_IN",
  },
};

// ─── JSON-LD Schema for Recruiter & Placement Services ───────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.balajimarketinginstitute.com/#organization",
      name: "Balaji Marketing Institute",
      alternateName: "BMI",
      url: "https://www.balajimarketinginstitute.com",
      logo: "https://www.balajimarketinginstitute.com/logo.jpg",
      telephone: "+91-8368121032",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rohini",
        addressLocality: "Rohini, Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      areaServed: [
        "New Delhi",
        "Pitampura",
        "Budh Vihar",
        "Rohini",
        "North West Delhi",
        "North Delhi",
        "Delhi NCR",
        "India",
      ],
    },
    {
      "@type": "Service",
      name: "Corporate Marketing Recruitment & Placement Service",
      provider: {
        "@id": "https://www.balajimarketinginstitute.com/#organization",
      },
      serviceType: "Campus Hiring & Talent Placement",
      description:
        "Fast-turnaround talent acquisition connecting employers with job-ready graduates trained on live campaigns, paid media, SEO, data analytics, and sales.",
      areaServed: [
        "New Delhi",
        "Pitampura",
        "Budh Vihar",
        "Rohini",
        "North West Delhi",
        "North Delhi",
        "Delhi NCR",
        "India",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "Zero recruiter fees for corporate hiring partners.",
      },
    },
  ],
};

const SECTORS = Array.from({ length: 24 }, (_, i) => i + 1);

export default function HireFromUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <HireFromUsView />
      <SiteFooter />
      <FloatingContactPopup />

      {/* ── Semantic SEO Block for Recruiter & Placement Keywords ── */}
      <section aria-label="Digital Marketing Recruitment & Talent Hiring Hubs" className="sr-only">
        <h2>Digital Marketing Talent Hiring & Campus Recruitment Across Delhi NCR & India</h2>
        <p>
          Balaji Marketing Institute provides free recruitment for digital marketers, connecting startups, agencies, and enterprise brands with job-ready digital marketing freshers, interns, and experienced marketers across New Delhi, North Delhi, North West Delhi, and Delhi NCR.
        </p>

        <h3>Key Roles You Can Hire</h3>
        <ul>
          <li>hire digital marketers and hire performance marketer in New Delhi, Pitampura, Budh Vihar, and Rohini</li>
          <li>hire SEO executive in New Delhi, Pitampura, and Rohini</li>
          <li>hire Google Ads executive in New Delhi and Rohini</li>
          <li>hire social media manager in New Delhi, Pitampura, and Rohini</li>
          <li>hire digital marketing interns in New Delhi, Pitampura, Budh Vihar, and Rohini</li>
          <li>hire content marketer in Pitampura and hire e-commerce analyst in Rohini</li>
          <li>hire job-ready digital marketers, entry-level digital marketing hiring, and hire trained marketing freshers</li>
        </ul>

        <h3>Recruiter Intelligence & Hiring Guides</h3>
        <p>
          Learn why leading brands choose campus hiring vs job portals: direct campus hiring eliminates agency markups (recruitment agency vs direct hiring) and dramatically lowers the cost of hiring a digital marketer. The average salary of a digital marketing fresher in India ranges between ₹4.5 LPA and ₹8.5 LPA. Whether evaluating a digital marketing intern vs full-time hire, our talent advisors guide you on what skills to look for in a digital marketer and explain how long does it take to hire a digital marketer with our fast 48-hour shortlist turnaround.
        </p>

        <h3>Local Hiring Hubs Across Rohini Sectors 1 to 24</h3>
        <ul>
          {SECTORS.map((sector) => (
            <li key={sector}>
              hire digital marketers in Rohini Sector {sector} | digital marketing recruitment Rohini Sector {sector} | digital marketing freshers Rohini Sector {sector}
            </li>
          ))}
        </ul>

        <h3>Regional Hiring Coverage</h3>
        <p>
          hire digital marketers in North West Delhi, hire digital marketers in North Delhi, hire digital marketers in Delhi NCR, hire digital marketers Delhi, and hire digital marketers near me.
        </p>
      </section>
    </>
  );
}
