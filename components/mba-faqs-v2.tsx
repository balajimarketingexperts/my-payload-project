"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Who is eligible for MBA Marketing?",
    a: "Candidates must hold a Bachelor’s degree in any discipline (B.Com, BBA, B.Tech, BA, B.Sc, etc.) from a recognized university with a minimum of 50% aggregate marks. Final-year undergraduate students can also apply provisionally. There is no mandatory CAT/MAT cut-off barrier; admissions are granted based on our online marketing aptitude assessment and a personal interview with the faculty panel.",
  },
  {
    q: "What is the fee and what does it include?",
    a: "The standard tuition fee is ₹1,80,000 for the full 2-year program, payable across flexible semester installments. Applicable statutory taxes (GST) are extra. The standard fee covers all 4 semesters of coursework, live client ad budgets, CXO case teardowns, and campus placement drives. Hostel accommodation and personal living expenses are separate. 0% interest monthly EMI from ₹7,500/month and merit scholarships up to 35% are available.",
  },
  {
    q: "What is the duration and mode of the program?",
    a: "The program is a 2-year full-time, on-campus MBA conducted at our flagship campus in the Rohini / Pitampura educational corridor in New Delhi. The campus is well-connected via the Delhi Metro network (Red and Yellow Lines).",
  },
  {
    q: "What is the average and highest package?",
    a: "For the Batch 2024-25 placed cohort, the average starting compensation is 8L+ CTC, with the highest package reaching ₹12L+ CTC for Brand Management, Category Growth, and Senior Media Lead roles across leading brands and media networks.",
  },
  {
    q: "Which companies visit for campus placements?",
    a: "Over 150+ corporate hiring partners and clients collaborate with our placement cell. Active campus recruiters and brand partners include Dainik Jagran, Punjab Kesari, Prabhat Khabar, Americanz Muscles, Ad2Lead Hub, Balaji Marketing Experts, Saisha Eduversity, The Archoline Architects, Property Dekho, Globe decorez, Applied Education Services, and leading digital and media agencies.",
  },
  {
    q: "Do you offer scholarships or education loans?",
    a: "Yes. We offer merit-based scholarships providing up to a 35% tuition fee waiver based on performance in our aptitude assessment and personal interview. We also provide zero-cost 0% interest monthly EMI schemes across 12, 18, and 24 months through leading education financing NBFC partners.",
  },
  {
    q: "What do “CXO-led case studies” mean?",
    a: "These are live interactive teardown sessions where practicing Chief Marketing Officers, Brand Directors, and Startup Founders present real, active commercial business problems. Students work in squads to formulate brand, channel, and pricing strategies with actual budget constraints and present solutions directly to the visiting executive.",
  },
  {
    q: "Will I get a recognized degree?",
    a: "Yes. Graduates receive a UGC-recognized 2-Year Post-Graduate MBA Degree in Marketing with full academic accreditation. The degree qualifies graduates for national and international corporate employment, MNC leadership ladders, and further postgraduate research.",
  },
  {
    q: "Is there a corporate internship included?",
    a: "Yes. In the 4th semester, all MBA students undertake a mandatory 12-week full-time corporate internship with a monthly stipend at our partner FMCG brands, D2C startups, or media agencies. Over 70% of students convert their internships into Pre-Placement Offers (PPOs).",
  },
  {
    q: "Why is this program considered a modern B-school alternative with better ROI than MBA?",
    a: "Traditional private B-schools in Delhi NCR charge upwards of ₹15 to ₹25 Lakhs for legacy theoretical lectures. At BMI, our standard fee is just ₹1,80,000 for the entire 2-year post graduate program (PGP) in sales and marketing. With an 8L+ average CTC and up to ₹12L+ highest CTC, students recover their full educational investment within 3 to 4 months of employment. Our model delivers better ROI than MBA programs by focusing 100% on job-ready skills, practical CXO cases, career support and mock interviews, and verified placement accountability.",
  },
  {
    q: "What sales, B2B, and management roles does this program prepare me for?",
    a: "Our AI-led sales and marketing program trains you for high-velocity commercial careers: Sales Development Representative (SDR), Business Development Representative (BDR), Area Sales Executive, Account Manager, Category Manager, Partnerships Manager, Lead Generation Manager, Client Relationship Manager, as well as inbound, outbound, B2B and account-based marketing roles (ABM), Brand Management, and Marketing Analytics.",
  },
  {
    q: "What is the admission process and important dates?",
    a: "The admission process involves 4 clear steps: 1. Submit the Online Application Form (#apply), 2. Take our online Marketing Aptitude Assessment, 3. Attend a personal interview with the faculty panel, 4. Receive your Offer Letter and merit scholarship evaluation. Admissions for Cohort 2026-28 are currently operating on rolling application rounds.",
  },
];

export default function MbaFaqsV2() {
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
    <section id="faqs" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            Clear & Transparent Admissions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1F2A5C] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#1F2A5C]/75">
            Everything you need to know about eligibility, fee breakdown, placement packages, degree accreditation, and admissions.
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
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#1F2A5C]/80 leading-relaxed border-t border-[#F8FAFC]">
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
            <p className="text-xs sm:text-sm text-white/75 mt-0.5">
              Speak with our senior admissions team or submit an application online.
            </p>
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
