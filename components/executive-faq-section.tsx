"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Phone, Clock } from "lucide-react";

const FAQS = [
  {
    q: "What are the timings of the Executive Program batches?",
    a: "Sessions are held exclusively on Sundays from 10:30 AM to 2:30 PM (4 hours of intensive live execution), ensuring zero disruption to your regular work week. In addition, weekday doubt-clearing sessions and 1-on-1 mentor syncs are scheduled flexibly during evenings.",
  },
  {
    q: "What if I miss a live Sunday session?",
    a: "All sessions are recorded in high-definition and uploaded to your student portal within 2 hours of completion, complete with downloadable frameworks, spreadsheets, and transcripts. You can also re-attend missed topics in subsequent batches at zero extra cost.",
  },
  {
    q: "Who is this Executive Program best suited for?",
    a: "This program is designed for working marketing executives looking to transition to senior strategist roles, sales professionals looking to master digital acquisition, startup founders and entrepreneurs wanting to scale their brand profitably, and traditional agency executives looking to master modern AI & MarTech stacks.",
  },
  {
    q: "Will I get 1-on-1 mentorship for my own company or startup?",
    a: "Yes! A signature feature of the BMI Executive Program is custom teardowns. You can bring your own active ad accounts, landing pages, and business growth challenges into confidential 1-on-1 office hours with faculty for live optimization.",
  },
  {
    q: "What certificate is awarded upon completion?",
    a: "Graduates receive the prestigious BMI Executive Certificate in Advanced Performance Marketing & Growth Leadership, which can be linked directly to your LinkedIn profile and verified by employers.",
  },
];

export default function ExecutiveFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            Executive Program FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1F2A5C] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#1F2A5C]/75">
            Clear answers about batch schedules, curriculum depth, and professional outcomes.
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

        {/* Support box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1F2A5C] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-base">Need customized team or corporate training?</h4>
            <p className="text-xs text-white/75 mt-0.5">We provide corporate cohorts tailored to company goals.</p>
          </div>
          <a
            href="tel:+918368121032"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-xs font-bold transition-all shadow-md shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            Call +91 83681 21032
          </a>
        </div>
      </div>
    </section>
  );
}
