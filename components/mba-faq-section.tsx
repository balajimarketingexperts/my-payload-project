"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Phone, ArrowRight } from "lucide-react";

const FAQS = [
  {
    q: "What is the eligibility criteria for the MBA in Marketing program?",
    a: "Candidates must hold a Bachelor’s degree in any discipline from a recognized university with a minimum of 50% aggregate marks. Final-year undergraduate students are also eligible to apply provisionally. Admissions are granted based on our aptitude assessment and a personal interview with the faculty panel.",
  },
  {
    q: "How does BMI's MBA in Marketing differ from traditional college MBA programs?",
    a: "Traditional college MBAs focus heavily on outdated theoretical textbooks. At BMI, 65% of your learning happens through live client campaigns, actual Meta and Google advertising budgets, agency case studies, and mentorship by practicing CMOs and agency directors. You graduate with a portfolio of real campaign proofs and measurable business outcomes.",
  },
  {
    q: "What are the average and highest placement packages (CTC) for MBA graduates?",
    a: "Our graduates receive an average starting package of ₹8.2 LPA, with the highest CTC reaching ₹14.5 LPA in recent recruitment cycles. Over 150+ brand partners, D2C startups, MNCs, and media agencies participate in our campus placement drives.",
  },
  {
    q: "Are corporate internships included during the 2-year program?",
    a: "Yes. In the 4th semester, all MBA students undertake an intensive 12-week full-time corporate internship with monthly stipend at partnering agencies, FMCG brands, or tech companies. Over 70% of our students receive Pre-Placement Offers (PPOs) directly from their internship employers.",
  },
  {
    q: "What is the fee structure and do you offer EMI or scholarships?",
    a: "We offer completely transparent fee schedules with 0% interest monthly EMI options across 12, 18, and 24 months. Merit-based scholarships of up to 35% fee waivers are available for high-achieving candidates and early-round applicants based on performance in our aptitude assessment.",
  },
  {
    q: "Where is the classroom campus located?",
    a: "Classroom lectures, CXO masterclasses, and agency simulations take place at our flagship campus in the Rohini / Pitampura educational corridor in North West Delhi, with seamless connectivity via Delhi Metro (Red and Yellow Lines).",
  },
];

export default function MbaFaqSection() {
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
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            Admissions & Program FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1F2A5C] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#1F2A5C]/75">
            Everything you need to know about BMI&apos;s 2-Year MBA in Marketing.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-[#F1E5D8] overflow-hidden transition-all shadow-[0_2px_10px_rgba(31,42,92,0.03)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#FFFDF9] transition-colors cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-[#1F2A5C]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F47B20] shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#1F2A5C]/80 leading-relaxed border-t border-[#F8FAFC]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-[#1F2A5C] text-white flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xl shadow-[#1F2A5C]/15">
          <div>
            <h4 className="font-bold text-lg">Have more questions about admissions?</h4>
            <p className="text-xs sm:text-sm text-white/75 mt-0.5">Reach our admissions desk or apply online for the next batch.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#apply"
              onClick={handleApplyClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Apply for Next Batch
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="tel:+918368121032"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F47B20]" />
              +91 83681 21032
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
