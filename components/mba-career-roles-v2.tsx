"use client";

import React from "react";
import {
  Briefcase,
  TrendingUp,
  Award,
  Building2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const CAREER_ROLES = [
  {
    role: "Brand Manager / Assistant Brand Manager",
    department: "Brand Strategy & Equity",
    desc: "Oversee brand positioning, multi-channel product launches, 360° communication campaigns, and overall brand P&L.",
    skills: ["Brand Architecture", "Positioning", "Consumer Insights", "Campaign P&L"],
    typicalCtc: "₹8.5L - ₹14.0L",
  },
  {
    role: "Category Manager",
    department: "Category & E-Commerce",
    desc: "Own complete category revenue, pricing models, quick-commerce assortment planning, and marketplace trade economics.",
    skills: ["Category P&L", "Pricing Strategy", "Quick-Commerce Ops", "Inventory Turns"],
    typicalCtc: "₹9.0L - ₹15.0L",
  },
  {
    role: "Sales Development Representative (SDR) / BDR",
    department: "B2B Sales & Pipeline",
    desc: "Drive high-velocity business development representative (BDR) and SDR pipelines using consultative outbound prospecting and inbound qualification.",
    skills: ["Inbound & Outbound Prospecting", "CRM Workflows", "Cold Outreach", "Pipeline Qualification"],
    typicalCtc: "₹6.5L - ₹11.0L",
  },
  {
    role: "Area Sales Executive",
    department: "Channel Sales & Distribution",
    desc: "Manage regional dealer networks, secondary sales targets, retail store penetration, and territory distributor growth.",
    skills: ["Territory Management", "Distributor Margins", "Retail Execution", "Field Sales Leadership"],
    typicalCtc: "₹7.5L - ₹12.5L",
  },
  {
    role: "Account Manager & Client Relationship Manager",
    department: "Key Accounts & Retention",
    desc: "Nurture strategic corporate client relationships, drive contract renewals, upsell opportunities, and ensure long-term account health.",
    skills: ["Account Management", "Client Relationship Manager Skills", "Retention & Upselling", "Executive Communications"],
    typicalCtc: "₹8.0L - ₹13.5L",
  },
  {
    role: "Partnerships Manager",
    department: "Strategic Alliances",
    desc: "Source and negotiate high-impact brand partnerships, channel co-marketing agreements, and corporate business alliances.",
    skills: ["Partnership Development", "B2B Negotiations", "Co-Marketing Deals", "Contract Structuring"],
    typicalCtc: "₹8.5L - ₹14.0L",
  },
  {
    role: "Lead Generation Manager",
    department: "Growth & Inbound/Outbound",
    desc: "Build scalable multi-channel lead generation engines combining paid media, outbound email sequences, and high-converting landing pages.",
    skills: ["Lead Generation Manager Ops", "Paid Funnels", "Landing Page CRO", "Marketing Automation"],
    typicalCtc: "₹8.0L - ₹13.5L",
  },
  {
    role: "Inbound, Outbound, B2B and Account-Based Marketing Roles",
    department: "B2B & Enterprise ABM",
    desc: "Lead targeted account-based marketing (ABM) campaigns for high-value enterprise logos using personalized content and omni-touch outreach.",
    skills: ["Inbound, Outbound, B2B Marketing", "Account-Based Marketing (ABM)", "Lead Nurturing", "MarTech Stacks"],
    typicalCtc: "₹8.5L - ₹14.5L",
  },
  {
    role: "Product Marketing Manager",
    department: "Product & Commercial GTM",
    desc: "Bridge engineering and commercial distribution, defining target personas, launch playbooks, and competitive differentiation.",
    skills: ["GTM Playbooks", "Value Proposition", "User Journey Mapping", "Sales Collateral"],
    typicalCtc: "₹9.0L - ₹15.0L",
  },
  {
    role: "Trade Marketing Manager",
    department: "Retail & Shopper Marketing",
    desc: "Design in-store brand visibility, visual merchandising, scheme discounts, and joint business plans with retail chains.",
    skills: ["Shopper Psychology", "In-Store Schemes", "Modern Trade", "Planogram Execution"],
    typicalCtc: "₹7.5L - ₹12.5L",
  },
  {
    role: "Digital Marketing Manager",
    department: "Performance & Media",
    desc: "Manage high-scale paid acquisition across Meta, Google Ads, programmatic DSPs, and conversion rate optimization.",
    skills: ["Meta Ads", "Google Ads", "Full-Funnel Media", "ROAS Scaling"],
    typicalCtc: "₹8.5L - ₹14.5L",
  },
  {
    role: "Marketing Analytics Manager",
    department: "Marketing Science & BI",
    desc: "Build executive revenue dashboards in Looker Studio and GA4, measuring marketing mix models (MMM) and customer lifetime value.",
    skills: ["GA4 & Looker", "Excel Modeling", "CAC/LTV Analysis", "Attribution Modeling"],
    typicalCtc: "₹8.5L - ₹14.0L",
  },
];

const RECRUITER_LOGOS = [
  { name: "Dainik Jagran", type: "News & Media", symbol: "DJ", color: "#E13B2A" },
  { name: "Americanz Muscles", type: "Fitness & Nutrition", symbol: "AM", color: "#F86104" },
  { name: "Punjab Kesari", type: "News & Media", symbol: "PK", color: "#EA580C" },
  { name: "Prabhat Khabar", type: "News & Media", symbol: "PK", color: "#DC2626" },
  { name: "Ad2Lead Hub", type: "Advertising & Leads", symbol: "A2L", color: "#FBB034" },
  { name: "Balaji Marketing Experts", type: "Marketing Services", symbol: "BME", color: "#1F2A5C" },
  { name: "Saisha Eduversity", type: "Education", symbol: "SE", color: "#6366F1" },
  { name: "The Archoline Architects", type: "Architecture", symbol: "TAA", color: "#0284C7" },
  { name: "Globe decorez", type: "Decor & Interiors", symbol: "GD", color: "#8B5CF6" },
  { name: "Property Dekho", type: "Real Estate", symbol: "PD", color: "#0891B2" },
  { name: "Applied Education Services", type: "Education", symbol: "AES", color: "#2563EB" },
  { name: "Dr. Sheikh Ayurveda", type: "Ayurveda & Wellness", symbol: "DSA", color: "#16A34A" },
  { name: "Thaagam Foundation", type: "Social Impact", symbol: "TF", color: "#10B981" },
  { name: "Shambhhavi Travels", type: "Travel & Tourism", symbol: "ST", color: "#0D9488" },
  { name: "Perfect Interiors", type: "Interior Design", symbol: "PID", color: "#D97706" },
  { name: "RAHAT NGO & Therapies", type: "Therapies & NGO", symbol: "RNT", color: "#059669" },
];

export default function MbaCareerRolesV2() {
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
    <section id="career-roles" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Placement Support & Career Trajectories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Career Roles After MBA Marketing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            BMI’s placement-focused curriculum provides dedicated placement support, placement accountability, and career support and mock interviews, equipping you with job-ready skills for inbound, outbound, B2B and account-based marketing roles, high-velocity sales development, and category leadership.
          </p>
        </div>

        {/* 9 Career Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CAREER_ROLES.map((role) => (
            <div
              key={role.role}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:border-[#F47B20]/40 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-[#F47B20] uppercase tracking-wider bg-[#FFF4EB] px-2.5 py-0.5 rounded-full border border-[#FED7AA]">
                    {role.department}
                  </span>
                  <span className="text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                    {role.typicalCtc}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1F2A5C] group-hover:text-[#F47B20] transition-colors leading-snug">
                  {role.role}
                </h3>

                <p className="text-xs sm:text-sm text-[#1F2A5C]/75 mt-2.5 mb-4 leading-relaxed">
                  {role.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-[#F8FAFC]">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F8FAFC] text-[#1F2A5C] border border-[#E2E8F0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyClick}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFFDF9] hover:bg-[#F47B20] text-[#1F2A5C] hover:text-white border border-[#E2E8F0] hover:border-[#F47B20] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                Apply for this Career Track
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Strip: Average CTC 8L+ | Highest CTC ₹12L+ | 150+ Campus Recruiters */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F1E5D8] shadow-[0_8px_30px_rgba(31,42,92,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-[#F1E5D8] text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-[#F47B20] tracking-tight">
                8L+ Average CTC
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1F2A5C] mt-1">
                Verified Across Placed Cohort
              </div>
              <div className="text-[11px] text-[#1F2A5C]/60 mt-0.5">
                Batch 2024-25 Placement Records
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-[#F47B20] tracking-tight">
                ₹12L+ Highest CTC
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1F2A5C] mt-1">
                Top Tier Leadership Placements
              </div>
              <div className="text-[11px] text-[#1F2A5C]/60 mt-0.5">
                Batch 2024-25 Placement Records
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-[#1F2A5C] tracking-tight">
                150+ Campus Recruiters
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1F2A5C] mt-1">
                FMCG, D2C, Media & Tech Brands
              </div>
              <div className="text-[11px] text-[#1F2A5C]/60 mt-0.5">
                Active Corporate Hiring Partners
              </div>
            </div>
          </div>

          {/* Recruiter Logos / Badges Grid */}
          <div className="pt-8">
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1F2A5C]/60">
                Key Campus Recruiters · Batch 2024-25 & 2025-26
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
              {RECRUITER_LOGOS.map((rec) => (
                <div
                  key={rec.name}
                  className="p-3 rounded-xl bg-[#FFFDF9] border border-[#F1E5D8] flex flex-col items-center text-center hover:border-[#F47B20]/40 hover:shadow-xs transition-all"
                >
                  <div
                    className="w-7 h-7 rounded-lg text-[10px] font-black text-white flex items-center justify-center mb-1.5 shadow-xs"
                    style={{
                      background: `linear-gradient(135deg, ${rec.color}, ${rec.color}dd)`,
                    }}
                  >
                    {rec.symbol}
                  </div>
                  <div className="font-extrabold text-xs text-[#1F2A5C] line-clamp-1 leading-snug">
                    {rec.name}
                  </div>
                  <div className="text-[9px] font-medium text-[#1F2A5C]/50 mt-0.5 uppercase line-clamp-1">
                    {rec.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
