"use client";

import React, { useState } from "react";
import {
  Briefcase,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MbaJobRole {
  role: string;
  track: "Brand Leadership" | "Growth & Media" | "Product & GTM" | "Strategy & Analytics";
  ctc: string;
  topRecruiters: string;
  skills: string[];
  desc: string;
}

const MBA_ROLES: MbaJobRole[] = [
  {
    role: "Brand Manager",
    track: "Brand Leadership",
    ctc: "₹9.0 - 18.0 LPA",
    topRecruiters: "Unilever, Nestlé, ITC, Dabur, Marico",
    skills: ["Brand Architecture", "Consumer Psychology", "Campaign P&L", "Brand Positioning"],
    desc: "Own complete brand equity, lead 360° product launch campaigns, and drive multi-crore marketing budgets.",
  },
  {
    role: "Growth Marketing Director / Lead",
    track: "Growth & Media",
    ctc: "₹10.0 - 19.5 LPA",
    topRecruiters: "Zomato, Swiggy, Nykaa, Blinkit, Mamaearth",
    skills: ["Full-Funnel Acquisition", "CAC/LTV Optimization", "Attribution Models", "Retention Loops"],
    desc: "Scale customer acquisition engine across paid search, programmatic display, and organic viral growth funnels.",
  },
  {
    role: "Product Marketing Manager (PMM)",
    track: "Product & GTM",
    ctc: "₹9.5 - 17.5 LPA",
    topRecruiters: "Adobe, Info Edge, Razorpay, MakeMyTrip",
    skills: ["Go-To-Market (GTM)", "Feature Positioning", "Competitive Teardowns", "Sales Enablement"],
    desc: "Bridge product design and commercial market adoption, spearheading launch narratives and enterprise messaging.",
  },
  {
    role: "Omnichannel Category Manager",
    track: "Product & GTM",
    ctc: "₹11.0 - 20.0 LPA",
    topRecruiters: "Amazon, Flipkart, Blinkit, Zepto, PepsiCo",
    skills: ["Quick-Commerce Ops", "Channel Pricing Strategy", "Assortment Planning", "Category P&L"],
    desc: "Manage e-commerce and quick-commerce category revenue, promotional discounting, and supply-demand economics.",
  },
  {
    role: "Digital Media Strategy Director",
    track: "Growth & Media",
    ctc: "₹12.0 - 22.0 LPA",
    topRecruiters: "GroupM, Ogilvy, Dentsu, Publicis, Omnicom",
    skills: ["Multi-Crore Media Planning", "DV360 & Programmatic", "Agency Operations", "ROAS Optimization"],
    desc: "Direct high-stake agency accounts, orchestrate multi-platform programmatic buying, and deliver board-level ROI.",
  },
  {
    role: "Marketing Analytics & Insights Manager",
    track: "Strategy & Analytics",
    ctc: "₹9.0 - 16.5 LPA",
    topRecruiters: "Accenture, Nielsen, Kantar, GroupM",
    skills: ["Marketing Mix Modeling (MMM)", "GA4 & Looker", "Predictive Analytics", "Cohort Retention"],
    desc: "Uncover high-yield growth signals using enterprise analytics, econometric modeling, and executive KPI dashboards.",
  },
  {
    role: "Senior Account Director (Agency)",
    track: "Brand Leadership",
    ctc: "₹10.0 - 18.5 LPA",
    topRecruiters: "McCann, Leo Burnett, DDB Mudra, Ogilvy",
    skills: ["Client Relationship P&L", "Strategic Pitches", "Creative Briefings", "Account Growth"],
    desc: "Lead marquee client relationships for Fortune 500 accounts, winning multi-million agency retainer pitches.",
  },
  {
    role: "Customer Lifecycle & CRM Lead",
    track: "Strategy & Analytics",
    ctc: "₹8.5 - 16.0 LPA",
    topRecruiters: "Nykaa, Myntra, Tata CLiQ, Lenskart",
    skills: ["MoEngage / CleverTap", "Omnichannel Journey Builder", "Churn Prevention", "RFM Segmentation"],
    desc: "Design hyper-personalized customer journeys across WhatsApp, Push, and Email to maximize lifetime value.",
  },
  {
    role: "D2C E-Commerce Brand Head",
    track: "Growth & Media",
    ctc: "₹10.0 - 19.0 LPA",
    topRecruiters: "Boat, Sugar Cosmetics, Wakefit, Wow Skin",
    skills: ["Shopify Scale", "Meta Ads Scaling", "Creative Hooks", "Unit Economics & Contribution Margin"],
    desc: "Spearhead end-to-end direct-to-consumer brand operations, performance media spend, and brand profitability.",
  },
  {
    role: "AI MarTech & Innovation Lead",
    track: "Strategy & Analytics",
    ctc: "₹11.0 - 20.0 LPA",
    topRecruiters: "Tech Startups, Global Media Hubs, Consulting",
    skills: ["Generative AI Pipelines", "GEO / Answer Engines", "MarTech Stacks", "Workflow Automation"],
    desc: "Pioneer generative AI workflows for real-time creative generation, personalized copy engines, and next-gen search.",
  },
];

const TRACKS = [
  "All Strategic Roles",
  "Brand Leadership",
  "Growth & Media",
  "Product & GTM",
  "Strategy & Analytics",
] as const;

export default function MbaCareerRolesSection() {
  const [activeTrack, setActiveTrack] = useState<string>("All Strategic Roles");

  const filteredRoles =
    activeTrack === "All Strategic Roles"
      ? MBA_ROLES
      : MBA_ROLES.filter((role) => role.track === activeTrack);

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
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Executive Career Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            High-Impact MBA Marketing Career Trajectories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            BMI&apos;s MBA in Marketing prepares you directly for managerial, brand leadership, and growth-driving roles with top compensation packages in India and abroad.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {TRACKS.map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTrack === track
                  ? "bg-[#1F2A5C] text-white shadow-md shadow-[#1F2A5C]/20"
                  : "bg-white text-[#1F2A5C] border border-[#E2E8F0] hover:border-[#F47B20]/40"
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => (
              <motion.div
                key={role.role}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:shadow-[0_12px_36px_rgba(244,123,32,0.12)] hover:border-[#F47B20]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF4EB] text-[#F47B20] border border-[#FED7AA]">
                      {role.track}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#10B981] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                      {role.ctc}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#1F2A5C] group-hover:text-[#F47B20] transition-colors leading-snug">
                    {role.role}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1F2A5C]/75 mt-2.5 leading-relaxed mb-4">
                    {role.desc}
                  </p>

                  <div className="mb-4 pt-3 border-t border-[#F8FAFC]">
                    <span className="text-[11px] font-bold text-[#1F2A5C]/60 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                      <Building className="w-3 h-3 text-[#F47B20]" />
                      Hiring Ecosystem:
                    </span>
                    <p className="text-xs font-semibold text-[#1F2A5C]/90">
                      {role.topRecruiters}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
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
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FFFDF9] hover:bg-[#F47B20] text-[#1F2A5C] hover:text-white border border-[#E2E8F0] hover:border-[#F47B20] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group-hover:shadow"
                >
                  Apply for this Career Track
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1F2A5C] to-[#2D3A7A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#1F2A5C]/15">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black">
              Ready to accelerate your marketing leadership career?
            </h4>
            <p className="text-sm text-white/80 mt-1 max-w-xl">
              150+ corporate hiring partners recruit directly from our campus in Delhi NCR. Average CTC ₹8.2 LPA, with 100% placement support.
            </p>
          </div>
          <a
            href="#apply"
            onClick={handleApplyClick}
            className="px-7 py-3 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#F47B20]/30 shrink-0 inline-flex items-center gap-2 cursor-pointer"
          >
            Apply for MBA 2026 Batch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
