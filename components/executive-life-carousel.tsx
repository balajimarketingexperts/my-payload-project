"use client";

import React from "react";
import PolaroidLineCarousel, { Slide } from "@/components/ui/polaroid-line-carousel";
import { Sparkles, Briefcase } from "lucide-react";

const EXECUTIVE_STORIES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    title: "Sunday Performance War Room",
    caption:
      "Working professionals dissecting 7-figure Meta Ads and Google Performance Max campaigns with live ad spends.",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop",
    title: "Confidential Account Teardowns",
    caption:
      "Bringing active corporate ad managers, funnels, and landing pages to class for live CRO and attribution audits.",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    title: "1-on-1 CXO Office Hours",
    caption:
      "Private career roadmapping, executive voice coaching, and high-stakes compensation negotiation mentorship.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title: "MarTech & GenAI Automation Lab",
    caption:
      "Building custom GPTs, automated lead routing in Zapier/Make, and server-side GA4 analytics pipelines.",
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    title: "Boardroom Capstone Pitch Day",
    caption:
      "Defending comprehensive 360° growth strategy blueprints and revenue P&L models before seasoned CMOs.",
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    title: "Executive Role Transitions",
    caption:
      "Alumni stepping into Head of Growth, Performance Marketing Lead, and Director roles with significant salary jumps.",
  },
];

export default function ExecutiveLifeCarousel() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#F6F1E6] overflow-hidden border-t border-[#E8DFC8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#F86104]/30 text-[#F86104] text-xs font-bold uppercase tracking-wider shadow-[0_2px_12px_rgba(248,97,4,0.12)]">
          <Briefcase className="w-3.5 h-3.5 text-[#F86104]" />
          Executive Immersion · Real Working Cohorts
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182033] tracking-tight mt-3">
          Inside the Sunday Executive Experience
        </h2>
        <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl mx-auto leading-relaxed">
          From Sunday morning performance war rooms to 1-on-1 confidential growth teardowns and boardroom defenses — see how working professionals level up their commercial leadership.
        </p>
      </div>

      <div className="w-full">
        <PolaroidLineCarousel
          slides={EXECUTIVE_STORIES}
          height="540px"
          cardWidth={285}
          sag={38}
          swing={1.2}
          autoplay={2800}
          string="#A88B69"
          background="#F6F1E6"
          ink="#182033"
          ariaLabel="Executive Student Experience Carousel"
        />
      </div>
    </section>
  );
}
