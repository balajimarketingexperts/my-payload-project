"use client";

import React from "react";
import {
  FileText,
  ClipboardCheck,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Calendar,
  CreditCard,
  Percent,
} from "lucide-react";
import { motion } from "framer-motion";

const ADMISSION_STEPS = [
  {
    step: "01",
    icon: FileText,
    title: "Submit Online Application",
    desc: "Fill the application form with your academic details, background, and career goals.",
    detail: "Takes under 3 minutes",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Aptitude & Marketing Evaluation",
    desc: "Take our online assessment evaluating logical reasoning, creative strategy, and marketing awareness.",
    detail: "Conducted online",
  },
  {
    step: "03",
    icon: Users,
    title: "Interview with CXO Faculty Panel",
    desc: "Have a 30-minute discussion with our senior faculty and practicing marketing directors.",
    detail: "Online or On-Campus",
  },
  {
    step: "04",
    icon: Award,
    title: "Offer Letter & Merit Scholarship",
    desc: "Receive your formal admission offer with scholarship evaluation and reserve your cohort seat.",
    detail: "Fast-track decision",
  },
];

export default function MbaAdmissionsProcessSection() {
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
    <section id="admissions" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <ClipboardCheck className="w-3.5 h-3.5" />
            Simple 4-Step Selection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            How to Join the MBA Marketing Cohort
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Our admissions process identifies creative aptitude, analytical mindset, and leadership ambition — not just test-taking scores.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ADMISSION_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:border-[#F47B20]/40 hover:shadow-lg transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#F47B20]/30">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2A5C] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F2A5C]/75 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F8FAFC]">
                  <span className="text-[11px] font-bold text-[#F47B20] bg-[#FFF4EB] px-2.5 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Eligibility & Scholarship Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Eligibility Criteria */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#F1E5D8] shadow-[0_6px_25px_rgba(31,42,92,0.05)]">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#10B981] border border-[#A7F3D0] text-xs font-bold uppercase tracking-wider">
                Eligibility Criteria
              </span>
            </div>
            <h3 className="text-2xl font-black text-[#1F2A5C] mb-4">
              Who Can Apply for MBA Marketing?
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-[#1F2A5C]/80">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong>Graduation in Any Stream:</strong> Minimum 50% aggregate marks in Bachelor&apos;s degree (B.Com, BBA, B.Tech, BA, B.Sc, etc.) from a recognized university.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#1F2A5C]/80">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong>Final-Year Undergraduates:</strong> Final-year bachelor students awaiting graduation results are eligible to apply provisionally.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#1F2A5C]/80">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong>No CAT/MAT Cut-Off Barrier:</strong> Admissions are based on candidate aptitude, creative reasoning, and personal interview with faculty.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#1F2A5C]/80">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong>Working Professionals Welcome:</strong> Early-career candidates with 0 to 3 years experience wishing to transition into marketing leadership.
                </span>
              </li>
            </ul>
          </div>

          {/* Fees & Scholarships */}
          <div className="bg-gradient-to-br from-[#1F2A5C] to-[#25336E] text-white rounded-3xl p-7 sm:p-9 shadow-[0_8px_30px_rgba(31,42,92,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[#F47B20] border border-white/20 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5" />
                  Merit Scholarships Available
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4">
                Transparent Fees & Financial Support
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                We believe financial constraints should never stand between ambitious talent and leadership education.
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-center gap-3 text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CreditCard className="w-4 h-4 text-[#F47B20] shrink-0" />
                  <span><strong>0% Interest EMI:</strong> Flexible monthly payment options across 12, 18, and 24 months.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Award className="w-4 h-4 text-[#F47B20] shrink-0" />
                  <span><strong>Up to 35% Merit Scholarship:</strong> Awarded for outstanding aptitude test scores & profile performance.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Calendar className="w-4 h-4 text-[#F47B20] shrink-0" />
                  <span><strong>Paid Corporate Internship:</strong> Earn a monthly stipend during the Semester 4 full-time corporate immersion.</span>
                </div>
              </div>
            </div>

            <a
              href="#apply"
              onClick={handleApplyClick}
              className="w-full py-3.5 px-6 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#F47B20]/30 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Apply for Admission & Scholarship
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
