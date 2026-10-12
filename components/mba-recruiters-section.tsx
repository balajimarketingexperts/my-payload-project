"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, TrendingUp, Users, CheckCircle2, ShieldCheck } from "lucide-react";

const RECRUITER_BRANDS = [
  { name: "Unilever", category: "FMCG Global" },
  { name: "Nestlé", category: "FMCG Global" },
  { name: "ITC Limited", category: "Conglomerate" },
  { name: "Dabur", category: "Consumer Goods" },
  { name: "Marico", category: "FMCG" },
  { name: "PepsiCo", category: "Beverages & FMCG" },
  { name: "Ogilvy", category: "WPP Agency" },
  { name: "GroupM", category: "Media Network" },
  { name: "Dentsu", category: "Global Agency" },
  { name: "Publicis Groupe", category: "Advertising Network" },
  { name: "Zomato", category: "Consumer Tech" },
  { name: "Swiggy", category: "Quick Commerce" },
  { name: "Nykaa", category: "E-Commerce Beauty" },
  { name: "Blinkit", category: "Quick Commerce" },
  { name: "Boat", category: "Consumer Electronics" },
  { name: "Amazon", category: "Global E-Commerce" },
  { name: "Flipkart", category: "Retail & Tech" },
  { name: "Google", category: "Tech & Search" },
  { name: "Meta", category: "Digital Advertising" },
  { name: "Adobe", category: "Creative & MarTech" },
];

const PLACEMENT_STATS = [
  { value: "₹14.5L", label: "Highest CTC Package", detail: "Top 10% placement offers" },
  { value: "₹8.2L", label: "Average CTC Package", detail: "Across entire cohort" },
  { value: "150+", label: "Hiring Partners", detail: "FMCG, D2C, Tech & Top Agencies" },
  { value: "72%", label: "Pre-Placement Offers", detail: "Secured during 12-wk internship" },
];

export default function MbaRecruitersSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            150+ Corporate Placements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Where BMI MBA Graduates Lead & Build Brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Our graduates step into Brand Management, Omnichannel Growth, and Strategic Media buying at premier Fortune 500 enterprises, tech unicorns, and global agency networks.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PLACEMENT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] text-center hover:border-[#F47B20]/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F47B20] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#1F2A5C] mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-[#1F2A5C]/60 mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos / Badges Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F1E5D8] shadow-[0_8px_30px_rgba(31,42,92,0.04)]">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F2A5C]/60">
              Trusted By Top Recruiters Across Industries
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {RECRUITER_BRANDS.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.05, duration: 0.3 }}
                className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F1E5D8] text-center hover:border-[#F47B20]/50 hover:shadow-md hover:bg-white transition-all group"
              >
                <div className="font-extrabold text-sm sm:text-base text-[#1F2A5C] group-hover:text-[#F47B20] transition-colors">
                  {brand.name}
                </div>
                <div className="text-[10px] font-medium text-[#1F2A5C]/50 mt-1 uppercase tracking-wider">
                  {brand.category}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hiring Pillars */}
          <div className="mt-10 pt-8 border-t border-[#F1E5D8] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2A5C]">12-Week Paid Corporate Internship</h4>
                <p className="text-xs text-[#1F2A5C]/70 mt-0.5">Hands-on immersion before final placement drives.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2A5C]">Mock Boardroom Interviews</h4>
                <p className="text-xs text-[#1F2A5C]/70 mt-0.5">Preparation with practicing CMOs & HR directors.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2A5C]">Direct Recruiter Access</h4>
                <p className="text-xs text-[#1F2A5C]/70 mt-0.5">Continuous on-campus and virtual hiring rounds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
