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
  metadataBase: new URL("https://balajimarketinginstitute.in"),
  title: {
    default: "Best Digital Marketing Institute in Rohini | Balaji Marketing Institute",
    template: "%s | Balaji Marketing Institute",
  },
  description:
    "Join Balaji Marketing Institute in Rohini, Delhi. Master SEO, Performance Marketing, Social Media & AI Tools with 100% practical training & placement assistance.",
  keywords: [
    "Digital Marketing Institute in Rohini",
    "Best Digital Marketing Course in Rohini",
    "Digital Marketing Course in Delhi",
    "SEO Training Institute in Rohini",
    "Performance Marketing Course Delhi",
    "Balaji Marketing Institute",
  ],
  alternates: {
    canonical: "https://balajimarketinginstitute.in",
  },
  openGraph: {
    title: "Best Digital Marketing Institute in Rohini | Balaji Marketing Institute",
    description:
      "Learn Digital Marketing with Live Projects, Expert Mentorship & 100% Placement Support in Rohini.",
    url: "https://balajimarketinginstitute.in",
    siteName: "Balaji Marketing Institute",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Balaji Marketing Institute - Best Digital Marketing Institute in Rohini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Institute in Rohini | Balaji Marketing Institute",
    description:
      "Learn Digital Marketing with Live Projects, Expert Mentorship & 100% Placement Support in Rohini.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "Balaji Marketing Institute",
    url: "https://balajimarketinginstitute.in",
    logo: "https://balajimarketinginstitute.in/logo.png",
    email: "balajimarketinginstitute@gmail.com",
    telephone: "+918368121032",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rohini",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.7041",
      longitude: "77.1025",
    },
    sameAs: [
      "https://www.facebook.com/balajimarketinginstitute",
      "https://www.instagram.com/balajimarketinginstitute",
      "https://www.linkedin.com/company/balajimarketinginstitute",
      "https://www.youtube.com/@balajimarketinginstitute",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
