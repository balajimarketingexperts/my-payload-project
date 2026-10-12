"use client";

import React from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";

const COMPARISONS = [
  {
    feature: "Class Schedule",
    bmi: "Sundays Only (10:30 AM – 2:30 PM) · Zero weekday clash",
    other: "Exhausting weekday night classes or rigid multi-year timelines",
  },
  {
    feature: "Practical Focus",
    bmi: "Live account teardowns, real ad spends & AI automation",
    other: "Outdated academic case studies from decade-old textbooks",
  },
  {
    feature: "Mentorship",
    bmi: "1-on-1 confidential office hours with practicing CMOs",
    other: "Generic mass lectures with zero individualized feedback",
  },
  {
    feature: "Investment / Fee",
    bmi: "₹45,000 all-inclusive with 0% EMI from ₹15,000/mo",
    other: "₹3,00,000 – ₹6,00,000 with heavy upfront lock-in",
  },
  {
    feature: "Immediate ROI",
    bmi: "Apply frameworks in your day job the very next Monday",
    other: "Pure theoretical knowledge with delayed career impact",
  },
];

export default function ExecutiveWhyStudySection() {
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
    <section className="py-16 sm:py-24 bg-white border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Unmatched Return on Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Why Working Professionals Choose BMI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Engineered specifically to solve the constraints of working marketers: zero weekday interference, immediate practical payoff, and transparent pricing.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-[#E8E6E2] shadow-sm bg-white">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1.8fr] bg-[#182033] text-white p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div>Program Feature</div>
            <div className="text-[#F89520] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              BMI Executive Program (Sundays)
            </div>
            <div className="text-white/60">Traditional Executive Courses</div>
          </div>

          <div className="divide-y divide-[#F1F5F9]">
            {COMPARISONS.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1.8fr] p-4 sm:p-5 gap-2 md:gap-4 items-center text-xs sm:text-sm hover:bg-[#FFFDF9] transition-colors"
              >
                <div className="font-bold text-[#182033]">{row.feature}</div>
                <div className="font-semibold text-[#182033] flex items-start gap-2 bg-[#FFF7ED] md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{row.bmi}</span>
                </div>
                <div className="text-[#64748B] pl-6 md:pl-0 text-xs sm:text-[13px]">
                  {row.other}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee & EMI Breakdown Card */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8E6E2]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F86104] bg-[#FFF4EB] px-3 py-1 rounded-full border border-[#FED7AA] inline-block mb-3">
                Transparent Fee Structure
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#182033] leading-snug">
                ₹45,000 All-Inclusive · Flexible 0% Interest EMI
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
                Everything is included: 12 Sunday live execution sessions, 50+ tool licenses & templates, private 1-on-1 office hours, HD recordings with lifetime access, and verified executive certification. Zero hidden charges.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-[#E2E8F0]">
                  <p className="text-xs font-bold text-[#64748B]">One-Time Fee</p>
                  <p className="text-lg font-black text-[#182033] mt-0.5">₹45,000</p>
                  <p className="text-[11px] text-[#10B981] font-semibold">Special cohort saving</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E2E8F0]">
                  <p className="text-xs font-bold text-[#64748B]">3-Month EMI</p>
                  <p className="text-lg font-black text-[#182033] mt-0.5">₹15,000 / mo</p>
                  <p className="text-[11px] text-[#64748B]">Zero interest charged</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E2E8F0]">
                  <p className="text-xs font-bold text-[#64748B]">Corporate Invoice</p>
                  <p className="text-lg font-black text-[#182033] mt-0.5">GST Invoicing</p>
                  <p className="text-[11px] text-[#0284C7] font-semibold">Claim L&D budget</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm text-center">
              <CreditCard className="w-8 h-8 text-[#F86104] mx-auto mb-3" />
              <h4 className="font-bold text-base text-[#182033]">
                Company Sponsorship / L&D Claims
              </h4>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                Many of our participants get 100% of the program fee reimbursed through their company&apos;s learning and development allowance. We provide official GST invoices and course syllabus documentation for easy approval.
              </p>
              <a
                href="#apply"
                onClick={handleApplyClick}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F86104] to-[#DA3A0A] text-white font-bold text-sm shadow-[0_6px_20px_rgba(248,97,4,0.35)] hover:shadow-[0_8px_28px_rgba(248,97,4,0.45)] transition-all cursor-pointer"
              >
                Apply for Next Sunday Batch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
