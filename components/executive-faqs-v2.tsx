"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const FAQS = [
  {
    q: "What are the exact timings and format of the Sunday sessions?",
    a: "Sessions are held exclusively on Sundays from 10:30 AM to 2:30 PM (4 hours of intensive live execution), ensuring zero disruption to your weekday job. In addition, weekday doubt-clearing sessions and 1-on-1 mentor syncs are scheduled flexibly during evenings to accommodate your schedule.",
  },
  {
    q: "What if I have to miss a live Sunday session due to work or travel?",
    a: "All sessions are recorded in high-definition and uploaded to your student portal within 2 hours of completion, complete with downloadable framework slides, spreadsheets, and prompts. You also have the freedom to re-attend that module live in the subsequent batch at zero extra charge.",
  },
  {
    q: "Can I bring my own company's live ad accounts or funnels for audits?",
    a: "Yes! A signature differentiator of the BMI Executive Program is confidential account teardowns. You can bring your active Meta Ad Managers, Google PMax campaigns, eCommerce landing pages, and CRM funnels into private 1-on-1 office hours with faculty for live optimization.",
  },
  {
    q: "Who is this Executive Program designed for?",
    a: "The program is engineered for: (1) Working digital marketers wanting to step into Head of Growth or Performance Lead roles; (2) Sales and BD executives looking to master digital revenue acquisition; (3) Startup founders and entrepreneurs wanting to scale ad spend profitably; and (4) Traditional brand managers needing deep expertise in AI & MarTech.",
  },
  {
    q: "How is this different from an Executive MBA or pre-recorded online courses?",
    a: "Unlike multi-year Executive MBAs costing ₹3L–₹6L with outdated textbook theory, our 3-month program focuses purely on high-leverage commercial skills: 7-figure ad budgets, conversion funnels, attribution, and AI automation. And unlike pre-recorded courses where completion rates are low, our live Sunday cohort and 1-on-1 office hours guarantee real execution.",
  },
  {
    q: "Is the ₹45,000 fee all-inclusive, and can my employer sponsor it?",
    a: "Yes, ₹45,000 is 100% all-inclusive. It covers all 12 live Sunday sessions, 50+ tool templates, confidential 1-on-1 teardowns, and certification. We offer 0% interest EMI options starting at ₹15,000/month. We also provide official GST invoices and syllabus documentation for corporate L&D reimbursement claims.",
  },
  {
    q: "What certificate is awarded upon completion?",
    a: "Graduates receive the verified BMI Executive Certificate in Advanced Performance Marketing & Growth Leadership. It features a unique credential ID that can be displayed directly on your LinkedIn profile and verified by employers.",
  },
  {
    q: "Will I get guidance for senior role interviews and compensation negotiation?",
    a: "Yes. Pillar 3 includes executive personal branding, LinkedIn thought leadership frameworks, boardroom presentation demeanor, and 1-on-1 salary negotiation coaching to ensure you capture the full market value of your new skill set.",
  },
  {
    q: "What tools and software templates are included?",
    a: "You get hands-on access and plug-and-play templates for Meta Ads Manager, Google Ads Editor, Google Analytics 4, Google Looker Studio, Hotjar, Microsoft Clarity, Zapier, Make.com, custom marketing GPTs, Claude 3.5, and proprietary Excel P&L financial models.",
  },
  {
    q: "What is the batch size, and how do I reserve a seat?",
    a: "To maintain the highest quality of 1-on-1 teardowns and discussion, each executive cohort is strictly capped at 25 participants. You can submit your application via the form on this page; our admissions team will review your profile and confirm seat availability.",
  },
];

export default function ExecutiveFaqsV2() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            Executive Program FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Everything you need to know about the Sunday schedule, confidential account audits, tools, and career outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="bg-[#FFFDF9] rounded-2xl border border-[#F1E5D8] overflow-hidden transition-all shadow-[0_2px_10px_rgba(31,42,92,0.03)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white transition-colors cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-[#1F2A5C]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F86104] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#1F2A5C]/80 leading-relaxed border-t border-[#F1E5D8]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Talk to Admissions Box (No Phone Link) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#182033] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F89520] mb-1 block">
              Still Have Questions?
            </span>
            <h3 className="font-extrabold text-lg sm:text-xl text-white">
              Talk to Our Executive Admissions Advisor
            </h3>
            <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-lg">
              Get detailed batch profiles, corporate invoice assistance, or syllabus questions answered before applying.
            </p>
          </div>
          <a
            href="#apply"
            onClick={handleApplyClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F86104] to-[#DA3A0A] hover:opacity-95 text-white text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer"
          >
            Talk to Admissions
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
