"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CreditCard,
  TrendingUp,
  Award,
  Building2,
  Users,
  ArrowRight,
  Download,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const STATS = [
  { icon: Calendar, label: "Duration", value: "2 Years", sub: "Full-Time Cohort" },
  { icon: MapPin, label: "Mode & Campus", value: "On Campus", sub: "New Delhi" },
  { icon: CreditCard, label: "Standard Fee", value: "₹1,80,000", sub: "0% EMI Available" },
  { icon: TrendingUp, label: "Average CTC", value: "8L+", sub: "Batch 2024-25" },
  { icon: Award, label: "Highest CTC", value: "₹12L+", sub: "Top Placements" },
  { icon: Building2, label: "Recruiters", value: "150+", sub: "Hiring Partners" },
  { icon: Users, label: "Marketer Network", value: "2,500+", sub: "Alumni Base" },
];

export default function MbaBuildCareerSection() {
  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("apply") || document.getElementById("registration-form");
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#apply");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
      const inp = el.querySelector<HTMLInputElement>("input");
      if (inp) {
        setTimeout(() => inp.focus({ preventScroll: true }), 350);
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#F47B20]" />
            Post Graduate Program (PGP) in Sales and Marketing · B-School Alternative to MBA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-[1.15]">
            Build Your Career in Marketing with an MBA in New Delhi
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#1F2A5C]/80 leading-relaxed max-w-3xl mx-auto">
            A placement-focused 2-year on-campus sales and marketing program with placements that combines brand strategy, sales and distribution, and AI-integrated marketing. Engineered as a modern B-school alternative with better ROI than MBA, you learn sales and marketing through live case studies led by CXOs, gain job-ready skills, and move into campus placements with 150+ hiring partners backed by placement accountability and dedicated placement support.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#apply"
              onClick={handleApplyClick}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-sm font-bold transition-all shadow-lg shadow-[#F47B20]/25 cursor-pointer active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#apply"
              onClick={handleApplyClick}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-[#FFFDF9] text-[#1F2A5C] border-2 border-[#1F2A5C] hover:border-[#F47B20] hover:text-[#F47B20] text-sm font-bold transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </a>
          </div>

          {/* Keyword Trust Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#1F2A5C]/75">
            <span className="bg-white px-3 py-1 rounded-full border border-[#F1E5D8] shadow-2xs">
              ✓ Placement-Focused Program
            </span>
            <span className="bg-white px-3 py-1 rounded-full border border-[#F1E5D8] shadow-2xs">
              ✓ Better ROI than MBA
            </span>
            <span className="bg-white px-3 py-1 rounded-full border border-[#F1E5D8] shadow-2xs">
              ✓ Placement Accountability
            </span>
            <span className="bg-white px-3 py-1 rounded-full border border-[#F1E5D8] shadow-2xs">
              ✓ Career Support and Mock Interviews
            </span>
            <span className="bg-white px-3 py-1 rounded-full border border-[#F1E5D8] shadow-2xs">
              ✓ Job-Ready Skills
            </span>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E5D8] shadow-[0_8px_30px_rgba(31,42,92,0.05)]">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#1F2A5C]/60 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
              Program Overview & Verified Career Highlights
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F1E5D8]/70">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center p-3 ${
                    i > 0 ? "pt-4 sm:pt-3" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20] mb-2.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F2A5C] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#F47B20] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#1F2A5C]/60 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
