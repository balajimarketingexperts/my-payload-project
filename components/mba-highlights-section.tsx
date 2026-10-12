"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  TrendingUp,
  Building2,
  CheckCircle2,
  Award,
  Sparkles,
  XCircle,
  ArrowRight,
} from "lucide-react";

const STATS = [
  { value: "₹14.5L", label: "Highest CTC Package", sub: "Top 10% placements" },
  { value: "₹8.2L", label: "Average Starting CTC", sub: "Across all graduates" },
  { value: "150+", label: "Hiring Partners", sub: "FMCG, D2C, Tech & Agencies" },
  { value: "2 Years", label: "Program Duration", sub: "Full-Time On-Campus Delhi" },
];

const PILLARS = [
  {
    icon: Trophy,
    title: "Strategic Brand Leadership",
    desc: "Master brand equity, positioning frameworks, consumer psychology, and cross-channel storytelling from senior CMO mentors.",
    tags: ["Brand Architecture", "Consumer Insights", "Brand P&L"],
  },
  {
    icon: TrendingUp,
    title: "Omnichannel Growth & Performance",
    desc: "Drive measurable ROI with paid acquisition, full-funnel media planning, conversion rate optimization, and retention loops.",
    tags: ["Omnichannel GTM", "Performance Media", "Attribution"],
  },
  {
    icon: Building2,
    title: "Product & Category Management",
    desc: "Learn FMCG, e-commerce, and quick-commerce category economics, pricing strategies, and go-to-market execution.",
    tags: ["Category Strategy", "E-Commerce", "Channel Sales"],
  },
  {
    icon: Sparkles,
    title: "AI-Integrated Marketing Leadership",
    desc: "Lead teams with modern generative AI tools, predictive analytics, automated marketing funnels, and data dashboards.",
    tags: ["GenAI for Marketing", "MarTech Stacks", "Predictive Analytics"],
  },
];

const COMPARISON = [
  {
    factor: "Practical Ad Spend & Live Projects",
    traditional: "Theoretical textbook exams and generic paper submissions",
    bmi: "Live ad spend budgets across Meta & Google with measurable ROI targets",
  },
  {
    factor: "Faculty & Mentorship",
    traditional: "Academic professors without live digital or agency exposure",
    bmi: "Practicing CMOs, Brand Directors, and senior agency leaders in Delhi NCR",
  },
  {
    factor: "Curriculum Modernization",
    traditional: "Outdated legacy syllabus unchanged for 5+ years",
    bmi: "Generative AI, MarTech automation, GA4 analytics, and Quick-Commerce",
  },
  {
    factor: "Corporate Internship",
    traditional: "Self-searched unpaid summer projects with little guidance",
    bmi: "12-Week full-time corporate internship with monthly stipend and 70%+ PPOs",
  },
  {
    factor: "Placement & Starting CTC",
    traditional: "Generic mass hiring drives averaging ₹3.5 - 5.5 LPA",
    bmi: "150+ brand partners specifically hiring for marketing at ₹8.2L Avg / ₹14.5L Max",
  },
];

export default function MbaHighlightsSection() {
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
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Postgraduate Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Why BMI&apos;s MBA Marketing Outperforms Traditional Programs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Bridging academic rigor with live agency execution, live client ad budgets, and direct CXO mentorship in Delhi NCR.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] text-center hover:border-[#F47B20]/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F47B20] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#1F2A5C] mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-[#1F2A5C]/60 mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:shadow-[0_8px_30px_rgba(244,123,32,0.1)] hover:border-[#F47B20]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2A5C] mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#1F2A5C]/75 leading-relaxed mb-5">
                    {pillar.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F8FAFC]">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#1F2A5C] border border-[#E2E8F0]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#10B981] mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F1E5D8] shadow-[0_8px_30px_rgba(31,42,92,0.04)]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20] bg-[#FFF4EB] px-3 py-1 rounded-full border border-[#FED7AA]">
              Direct Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1F2A5C] mt-2">
              Traditional College MBA vs. BMI Job-Linked MBA
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#F1E5D8]">
                  <th className="py-4 px-4 text-xs font-bold text-[#1F2A5C]/60 uppercase tracking-wider w-1/3">
                    Parameter
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">
                    Traditional College MBA
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-[#F47B20] uppercase tracking-wider w-1/3 bg-[#FFF4EB]/50 rounded-t-xl">
                    BMI Job-Linked MBA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1E5D8]/70 text-sm">
                {COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FFFDF9] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#1F2A5C]">
                      {row.factor}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#1F2A5C] font-semibold bg-[#FFF4EB]/30">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{row.bmi}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#apply"
              onClick={handleApplyClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#F47B20]/25 cursor-pointer"
            >
              Enroll in BMI&apos;s MBA Marketing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
