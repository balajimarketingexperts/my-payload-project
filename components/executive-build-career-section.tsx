"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  Clock,
  ArrowRight,
  Download,
  Building2,
  Users,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  MapPin,
  CreditCard,
  Award,
} from "lucide-react";

const STATS = [
  { icon: Calendar, label: "Duration", value: "3 Months", sub: "Sundays Only Cohort" },
  { icon: MapPin, label: "Mode & Campus", value: "Hybrid / Campus", sub: "Delhi NCR & Live" },
  { icon: CreditCard, label: "Standard Fee", value: "₹45,000", sub: "0% EMI from ₹15,000/mo" },
  { icon: TrendingUp, label: "Average CTC", value: "14L+", sub: "Senior Growth Roles" },
  { icon: Award, label: "Highest CTC", value: "₹28L+", sub: "Leadership / CXO" },
  { icon: Building2, label: "Recruiters", value: "150+", sub: "Hiring Partners" },
  { icon: Users, label: "Marketer Network", value: "2,500+", sub: "Alumni & CXOs" },
];

const TRUST_PILLS = [
  "Zero Disruption to Your Day Job",
  "Live Ad Account Teardowns",
  "High-Spend Media Frameworks",
  "Attribution & GA4 Dashboards",
  "Generative AI & MarTech Workflows",
  "Executive Salary Negotiation Coaching",
];

export default function ExecutiveBuildCareerSection() {
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
    handleApplyClick(e);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            Executive Marketing Program · Weekend Batches in Delhi NCR
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2A5C] tracking-tight leading-[1.18]">
            Advance Your Marketing Career Without Leaving Your Job
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#1F2A5C]/80 max-w-3xl mx-auto leading-relaxed">
            A high-intensity, practical 3-month executive program designed for marketing professionals, sales managers, and founders. Master 7-figure performance media, full-funnel conversion rate science, Looker Studio analytics, and cutting-edge Generative AI workflows with Sunday batches.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              onClick={handleApplyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F86104] to-[#DA3A0A] text-white font-extrabold text-base shadow-[0_6px_24px_rgba(248,97,4,0.35)] hover:shadow-[0_8px_32px_rgba(248,97,4,0.45)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Apply for Sunday Batch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#apply"
              onClick={handleSyllabusClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#1F2A5C] font-bold text-base border-2 border-[#1F2A5C]/20 hover:border-[#F86104] hover:text-[#F86104] transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Weekend Syllabus
            </a>
          </div>

          {/* Value Props Strip */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-2.5">
            {TRUST_PILLS.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#475569] shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats & Fee Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E5D8] shadow-[0_8px_30px_rgba(31,42,92,0.05)] mb-14">
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

        {/* Executive Batch Structure Strip */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-9 border border-[#E8E6E2] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F86104] shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#1F2A5C] text-base sm:text-lg">
                  Sundays 10:30 AM – 2:30 PM
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                  4 hours of live, interactive campaign execution. Designed strictly for busy working professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#1F2A5C] text-base sm:text-lg">
                  Weekday Office Hours & Syncs
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                  Flexible evening doubt clearing, account reviews, and 1-on-1 private audit sessions with faculty.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#1F2A5C] text-base sm:text-lg">
                  Verified Executive Credential
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                  Receive the BMI Executive Certificate in Advanced Growth & Performance Leadership to share on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
