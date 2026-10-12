"use client";

import React from "react";
import PolaroidLineCarousel, { Slide } from "@/components/ui/polaroid-line-carousel";

const DIPLOMA_STUDENT_STORIES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    title: "Meta Ads War Room",
    caption: "Students executing live ₹50,000+ budget ad campaigns with real ROI targets.",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    title: "Agency Pitch Day",
    caption: "Presenting comprehensive 360° growth marketing strategies to industry CMOs.",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    title: "Performance & GA4 Lab",
    caption: "Deep dive into attribution modeling, conversion rate audit, and Google Analytics 4.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    title: "Live D2C Brand Teardowns",
    caption: "Collaborative sprints optimizing creative hooks and funnel retention metrics.",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    title: "1-on-1 Mentor Clinics",
    caption: "Personalized portfolio reviews, mock agency interviews, and placement prep.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    title: "Placement Day Celebrations",
    caption: "Graduates joining top performance agencies and leading consumer brands.",
  },
];

export default function DiplomaLifeCarousel() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#F6F1E6] overflow-hidden border-t border-[#E8DFC8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#F86104]/30 text-[#F86104] text-xs font-bold uppercase tracking-wider shadow-[0_2px_12px_rgba(248,97,4,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F86104] animate-pulse" />
          Real Agency Training · Live Industry Simulation
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182033] tracking-tight mt-3">
          Experience Life Inside the Marketing Launchpad
        </h2>
        <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-2xl mx-auto leading-relaxed">
          From live media budgets to creative pitch presentations — see how our diploma trainees build real portfolios and secure top agency placements.
        </p>
      </div>

      <div className="w-full">
        <PolaroidLineCarousel
          slides={DIPLOMA_STUDENT_STORIES}
          height="540px"
          cardWidth={280}
          sag={38}
          swing={1.2}
          autoplay={2800}
          string="#A88B69"
          background="#F6F1E6"
          ink="#182033"
          ariaLabel="Diploma Student Journey Carousel"
        />
      </div>
    </section>
  );
}
