"use client";

import React from "react";
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
  CheckCircle2,
} from "lucide-react";

const STATS = [
  { icon: Calendar, label: "Duration", value: "6 Months", sub: "Diploma Cohort" },
  { icon: MapPin, label: "Mode & Campus", value: "On Campus", sub: "Rohini, New Delhi" },
  { icon: CreditCard, label: "Standard Fee", value: "₹45,000", sub: "0% EMI Available" },
  { icon: TrendingUp, label: "Average CTC", value: "5.5L+", sub: "Batch 2024-25" },
  { icon: Award, label: "Highest CTC", value: "₹10.5L+", sub: "Top Placements" },
  { icon: Building2, label: "Recruiters", value: "150+", sub: "Hiring Partners" },
  { icon: Users, label: "Marketer Network", value: "2,500+", sub: "Alumni Base" },
];

const TRUST_PILLS = [
  "100% Placement Support",
  "Live Meta & Google Ad Budgets",
  "Agency-Simulated Training Lab",
  "1-on-1 Mentorship & Portfolio Reviews",
  "Industry-Recognized Certifications",
  "Mock Interviews & Resume Engineering",
];

export default function DiplomaBuildCareerSection() {
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

  const handleSyllabusClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("syllabus") || document.getElementById("curriculum");
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#F86104]" />
            Diploma in Digital Marketing · 6 Months · Rohini / Delhi NCR
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-[1.15]">
            Build Your Career in Marketing with Delhi&apos;s #1 Practical Course
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#1F2A5C]/80 leading-relaxed max-w-3xl mx-auto">
            A placement-linked 6-month digital marketing diploma combining hands-on agency simulations, live ad budgets, SEO mastery, and AI-powered performance media. Learn directly from industry practitioners in Rohini, Pitampura, and Budh Vihar with guaranteed placement assistance.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              onClick={handleApplyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F86104] hover:bg-[#DA3A0A] text-white text-sm font-bold transition-all shadow-lg shadow-[#F86104]/25 cursor-pointer active:scale-95"
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#syllabus"
              onClick={handleSyllabusClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-[#FFFDF9] text-[#1F2A5C] border-2 border-[#1F2A5C]/20 hover:border-[#F86104] hover:text-[#F86104] text-sm font-bold transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Course Syllabus</span>
            </a>
          </div>

          {/* Trust Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#1F2A5C]/75">
            {TRUST_PILLS.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F1E5D8] shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats & Fee Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E5D8] shadow-[0_8px_30px_rgba(31,42,92,0.05)]">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#1F2A5C]/60 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F86104]" />
              Program Overview &amp; Verified Career Highlights
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
                  <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F86104] mb-2.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F2A5C] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#F86104] mt-0.5">
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
