"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle2, ChevronRight, Clock, Award, ArrowRight, Download } from "lucide-react";

const SEMESTERS = [
  {
    sem: "Semester 1",
    title: "Marketing Foundations & Strategic Management",
    focus: "Core Principles, Consumer Psychology & Business Economics",
    courses: [
      { name: "Strategic Marketing Management & Kotler 4Ps Frameworks", hours: "45 Hours" },
      { name: "Consumer Psychology & Advanced Buyer Personas", hours: "40 Hours" },
      { name: "Market Research, Qualitative Surveys & Nielsen Insights", hours: "35 Hours" },
      { name: "Business Economics & Financial Accounting for Marketers", hours: "40 Hours" },
      { name: "Executive Boardroom Presence & Leadership Communication", hours: "30 Hours" },
    ],
  },
  {
    sem: "Semester 2",
    title: "Digital Ecosystem, Performance Media & Analytics",
    focus: "Full-Funnel Acquisition, Paid Search & Programmatic Display",
    courses: [
      { name: "Full-Funnel Digital Media Strategy (Meta & Google Ads)", hours: "50 Hours" },
      { name: "Search Engine Optimization (SEO) & LLM / GEO Optimization", hours: "40 Hours" },
      { name: "Marketing Analytics, GA4 & Data Visualization (Looker)", hours: "45 Hours" },
      { name: "Content Marketing, Narrative Storytelling & Brand PR", hours: "35 Hours" },
      { name: "E-Commerce & Quick-Commerce Growth Strategies", hours: "40 Hours" },
    ],
  },
  {
    sem: "Semester 3",
    title: "Brand Leadership, Product Strategy & Omnichannel Sales",
    focus: "Brand Architecture, Channel Distribution & AI Automation",
    courses: [
      { name: "Brand Architecture, Positioning & Brand Valuation Metrics", hours: "45 Hours" },
      { name: "Product Marketing & Go-To-Market (GTM) Frameworks", hours: "40 Hours" },
      { name: "Sales Leadership, Channel Distribution & B2B Partnerships", hours: "45 Hours" },
      { name: "AI-Integrated MarTech Stacks & Marketing Automation", hours: "40 Hours" },
      { name: "Customer Lifecycle Marketing, CRM & Retention Loops", hours: "35 Hours" },
    ],
  },
  {
    sem: "Semester 4",
    title: "CXO Capstone Project, Corporate Internship & Placement",
    focus: "Live Agency Execution, Boardroom Pitching & Final Placements",
    courses: [
      { name: "12-Week Corporate Internship with Monthly Stipend", hours: "12 Weeks" },
      { name: "CXO Live Capstone Project with Real Ad Spend Budget", hours: "4 Weeks" },
      { name: "Boardroom Pitch Presentation & Strategic Thesis Defense", hours: "2 Weeks" },
      { name: "Campus Recruitment Drives with 150+ Hiring Partners", hours: "Ongoing" },
    ],
  },
];

export default function MbaCurriculumSection() {
  const [activeSem, setActiveSem] = useState(0);

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
    <section id="curriculum" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            2-Year Academic Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight">
            Comprehensive MBA Marketing Curriculum
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Engineered by industry CMOs and veteran faculty to give you unfair career momentum across all 4 semesters.
          </p>
        </div>

        {/* Semester Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {SEMESTERS.map((item, idx) => (
            <button
              key={item.sem}
              onClick={() => setActiveSem(idx)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSem === idx
                  ? "bg-[#1F2A5C] text-white shadow-md shadow-[#1F2A5C]/20"
                  : "bg-white text-[#1F2A5C] border border-[#E2E8F0] hover:border-[#F47B20]/40"
              }`}
            >
              {item.sem}
            </button>
          ))}
        </div>

        {/* Active Semester Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSem}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F1E5D8] shadow-[0_8px_30px_rgba(31,42,92,0.06)] max-w-4xl mx-auto"
          >
            <div className="border-b border-[#F1E5D8] pb-6 mb-6">
              <span className="text-xs font-bold text-[#F47B20] uppercase tracking-wider">
                {SEMESTERS[activeSem].sem} Focus
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1F2A5C] mt-1">
                {SEMESTERS[activeSem].title}
              </h3>
              <p className="text-sm text-[#1F2A5C]/70 mt-1">
                {SEMESTERS[activeSem].focus}
              </p>
            </div>

            <div className="space-y-3.5">
              {SEMESTERS[activeSem].courses.map((course, idx) => (
                <div
                  key={course.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#FFFDF9] border border-[#F1E5D8] hover:border-[#F47B20]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FFF4EB] text-[#F47B20] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-[#1F2A5C]">
                      {course.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#1F2A5C]/60 bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0] shrink-0 ml-3">
                    {course.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#F1E5D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#1F2A5C]/75">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Includes agency simulations, live case studies & placement prep
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#apply"
                  onClick={handleApplyClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-xs font-bold transition-all shadow-md shadow-[#F47B20]/25 cursor-pointer"
                >
                  Apply for MBA Program
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
