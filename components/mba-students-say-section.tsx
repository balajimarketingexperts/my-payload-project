"use client";

import React from "react";
import { Star, MessageSquareQuote, GraduationCap, Building2 } from "lucide-react";

interface StudentTestimonial {
  name: string;
  role: string;
  company: string;
  batch: string;
  category: "Brand Management" | "Sales & Distribution" | "Performance & Growth" | "Analytics & Insights";
  quote: string;
  image: string;
}

const TESTIMONIALS: StudentTestimonial[] = [
  {
    name: "Priya Sharma",
    role: "Assistant Brand Manager",
    company: "Dainik Jagran",
    batch: "Batch 2023-25",
    category: "Brand Management",
    quote: "The live CXO case studies gave me boardroom-ready confidence. Pitching real readership expansion and multi-channel campaigns directly to media directors prepared me for the actual brand responsibilities I handle today at Dainik Jagran.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Aditya Verma",
    role: "Area Sales & Channel Manager",
    company: "Americanz Muscles",
    batch: "Batch 2022-24",
    category: "Sales & Distribution",
    quote: "Understanding distributor margins, secondary sales pipelines, and fitness retail channel negotiation helped me crack the campus selection process and scale physical and online distribution for Americanz Muscles.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Sneha Nair",
    role: "Growth Marketing Lead",
    company: "Ad2Lead Hub",
    batch: "Batch 2023-25",
    category: "Performance & Growth",
    quote: "Managing live ad campaigns with real budgets instead of dummy spreadsheets completely shifted my career. Building full-funnel Meta and Google Ads gave me proven ROAS numbers to showcase at Ad2Lead Hub.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Rohan Gupta",
    role: "Marketing Analytics Manager",
    company: "Balaji Marketing Experts",
    batch: "Batch 2022-24",
    category: "Analytics & Insights",
    quote: "Learning GA4, Looker Studio dashboards, and CAC/LTV econometric modeling helped me connect creative strategy directly with business ROI for high-value enterprise client accounts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Ananya Bose",
    role: "Product Marketing Manager",
    company: "Saisha Eduversity",
    batch: "Batch 2023-25",
    category: "Brand Management",
    quote: "The emphasis on consumer persona teardowns and go-to-market playbooks was spot on. Transitioning into product marketing was seamless thanks to the practical hands-on projects and mentoring at BMI.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Manav Malhotra",
    role: "Regional Distribution Specialist",
    company: "Punjab Kesari",
    batch: "Batch 2022-24",
    category: "Sales & Distribution",
    quote: "Understanding regional distribution networks, vendor schemes, and circulation logistics made all the difference. BMI is one of the rare institutes that respects the power of distribution alongside brand building.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Kritika Sen",
    role: "Consumer Insights Analyst",
    company: "Applied Education Services",
    batch: "Batch 2023-25",
    category: "Analytics & Insights",
    quote: "Conducting actual qualitative focus groups and synthesizing student demographic data gave me hands-on market research rigor that traditional textbook MBA programs simply don't teach.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Aman Khurana",
    role: "D2C Brand Strategist",
    company: "Globe decorez",
    batch: "Batch 2022-24",
    category: "Performance & Growth",
    quote: "Integrating generative AI tools into creative copy generation and rapid A/B testing transformed my workflow. Managing real marketing funnels helped me accelerate e-commerce growth for home decor.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
  },
];

export default function MbaStudentsSaySection() {
  return (
    <section id="student-stories" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Alumni & Student Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Hear From Our Students and Alumni
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            From brand management to retail distribution and analytics — discover how our MBA graduates transformed their careers across leading organizations.
          </p>
        </div>

        {/* 8 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:border-[#F47B20]/40 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header row: Category & Rating */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-[#F47B20] uppercase tracking-wider bg-[#FFF4EB] px-2 py-0.5 rounded-full border border-[#FED7AA]">
                    {t.category}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-[13px] text-[#1F2A5C]/80 leading-relaxed italic mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#F8FAFC] flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#FED7AA] bg-[#FFF4EB]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F2A5C] leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#F47B20] leading-tight mt-0.5">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-[#1F2A5C]/60 leading-tight">
                    {t.company} · {t.batch}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
