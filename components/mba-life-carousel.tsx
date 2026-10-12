"use client";

import React from "react";
import PolaroidLineCarousel, { Slide } from "@/components/ui/polaroid-line-carousel";
import { Sparkles } from "lucide-react";

const MBA_CAMPUS_STORIES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    title: "CXO Boardroom & Strategy Pitch",
    caption:
      "Defending real brand architecture, GTM models, and financial P&L projections before senior corporate directors.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title: "B2B Sales & SDR/BDR War Room",
    caption:
      "Executing high-velocity enterprise pipeline outreach, quota planning, and Area Sales Executive territory mapping.",
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    title: "FMCG Distribution & Channel Lab",
    caption:
      "Auditing distributor margins, modern trade shelf-space, and quick-commerce slotting for leading consumer brands.",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop",
    title: "AI Marketing & Campaign War Room",
    caption:
      "Deploying generative AI tools (ChatGPT Plus, Midjourney, Claude) to build, test, and scale live paid campaigns.",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    title: "1-on-1 CXO Mock Interviews",
    caption:
      "Rigorous boardroom interview simulations, case teardowns, and personal career mentorship with placement accountability.",
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    title: "Campus Placement Day",
    caption:
      "Graduates celebrating Brand Manager and Sales Lead offers with 8L+ average CTC and packages up to ₹12L+ highest CTC.",
  },
];

export default function MbaLifeCarousel() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#F6F1E6] overflow-hidden border-t border-[#E8DFC8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#F86104]/30 text-[#F86104] text-xs font-bold uppercase tracking-wider shadow-[0_2px_12px_rgba(248,97,4,0.12)]">
          <Sparkles className="w-3.5 h-3.5 text-[#F86104]" />
          Executive Immersion · B-School Alternative
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182033] tracking-tight mt-3">
          Inside the Sales & Marketing MBA Experience
        </h2>
        <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl mx-auto leading-relaxed">
          From high-stakes CXO boardroom pitches and B2B sales war rooms to FMCG distribution modeling and campus placement celebrations — see life inside New Delhi&apos;s premier placement-focused marketing program.
        </p>
      </div>

      <div className="w-full">
        <PolaroidLineCarousel
          slides={MBA_CAMPUS_STORIES}
          height="540px"
          cardWidth={285}
          sag={38}
          swing={1.2}
          autoplay={2800}
          string="#A88B69"
          background="#F6F1E6"
          ink="#182033"
          ariaLabel="MBA Student Experience Carousel"
        />
      </div>
    </section>
  );
}
