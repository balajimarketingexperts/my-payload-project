import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balaji Marketing Institute | Job-Linked Marketing & MBA Programs in India",
  description:
    "India's top B school for sales and marketing. Job-linked programs in Digital Marketing, Performance Marketing & MBA Marketing. 96% placement rate, 2,500+ students placed, 150+ recruiting partners. Graduate with a job, not just a degree. Live projects, real budgets, 1:1 mentorship from industry practitioners.",
  keywords: [
    "marketing",
    "sales",
    "business",
    "digital marketing",
    "performance marketing",
    "performance media",
    "SEO",
    "paid search",
    "search ads",
    "programmatic display",
    "content",
    "AI tools",
    "automation",
    "AI-led",
    "AI-first",
    "digital-first businesses",
    "business leadership",
    "sales leadership",
    "omni-channel",
    "quick commerce",
    "FMCG",
    "e-commerce",
    "GTM",
    "product marketing",
    "customer marketing",
    "recruitment marketing",
    "The Marketing Launchpad",
    "PGP in AI-Led Marketing",
    "PGP in AI-Led Sales, Marketing and Business",
    "PG program",
    "postgraduate-equivalent",
    "job-linked programs",
    "digital marketing course (full-time, part-time/weekend, in Hindi)",
    "online",
    "offline",
    "online & offline",
    "graduates only",
    "open for all",
    "6 months",
    "9 months",
    "AI-first industry-relevant curriculum",
    "explore programs",
    "job",
    "jobs",
    "hired",
    "hiring",
    "hiring partner",
    "career",
    "careers",
    "career outcomes",
    "career momentum",
    "career growth",
    "employability",
    "recruitment",
    "recruiters",
    "recruiting partners",
    "talent",
    "talent pool",
    "talent acquisition",
    "quality talent",
    "quality candidates",
    "candidates",
    "onboarding",
    "internship",
    "interns",
    "trainee",
    "entry-level",
    "hire again",
    "performance marketing executive",
    "performance marketing specialist",
    "performance marketeer",
    "sales development representative",
    "area sales executive",
    "sales executive trainee",
    "senior marketing analyst",
    "trainee analyst (search ads)",
    "trainee analyst (performance media)",
    "paid search analyst",
    "analyst (programmatic display)",
    "SEO executive",
    "content writer",
    "digital marketing trainee",
    "professionalism",
    "preparedness",
    "market-ready",
    "fast turnaround",
    "swift support",
    "reliable partner",
    "hands-on learning",
    "practical training",
    "live projects",
    "real-world business challenges",
    "hit the ground running",
    "Balaji Marketing Institute",
    "BMI Delhi",
  ],
  authors: [{ name: "Balaji Marketing Institute" }],
  creator: "Balaji Marketing Institute",
  publisher: "Balaji Marketing Institute",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.balajimarketinginstitute.com",
    siteName: "Balaji Marketing Institute",
    title: "Balaji Marketing Institute | Job-Linked Marketing Programs",
    description:
      "Graduate with a job, not just a certificate. India's top marketing B school with 96% placement rate, live projects on real brands, and 1:1 CMO mentorship.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Balaji Marketing Institute — Learn Build Grow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Marketing Institute | Job-Linked Marketing Programs",
    description:
      "India's top B school for marketing & sales. 96% placement rate. Live projects, real budgets, CMO mentors.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.balajimarketinginstitute.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
