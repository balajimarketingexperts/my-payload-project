"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Who is this digital marketing course designed for?",
    a: "This 6-month digital marketing course is ideal for fresh graduates, final-year college students, career switchers, entrepreneurs, and working professionals who want to learn digital marketing with practical, job-ready skills. No prior coding or marketing experience is needed — we start from core marketing foundations and advance to agency-level campaign execution.",
  },
  {
    q: "Is there a digital marketing course near me in Rohini, Pitampura, Budh Vihar, or North West Delhi?",
    a: "Yes! Balaji Marketing Institute is rated the best digital marketing course in Delhi and a premier digital marketing institute in Rohini / Pitampura / Budh Vihar / Delhi. We provide state-of-the-art classroom digital marketing training and interactive digital marketing classes in Rohini, Pitampura, Budh Vihar, and North West Delhi with convenient metro connectivity. If you cannot attend in person, our interactive online digital marketing course provides live virtual sessions with full mentor support.",
  },
  {
    q: "Do you offer both full-time and part-time digital marketing course batches?",
    a: "Yes. You can enroll in our intensive weekday full-time digital marketing course or choose a flexible weekend / evening part-time digital marketing course. Both formats cover the identical 24-module digital marketing course syllabus / curriculum, live agency projects, and placement assistance.",
  },
  {
    q: "What are the digital marketing course fees, EMI options, and scholarship policies?",
    a: "Our digital marketing course fees are fully transparent with no hidden charges. We offer 0% interest EMI options across 3 to 12 months with leading financial partners. Meritorious candidates, early applicants, and alumni referrals can also receive scholarship fee waivers up to 40% based on their entrance assessment and profile review.",
  },
  {
    q: "How does the digital marketing course with placement work, and what CTC / LPA can graduates expect?",
    a: "Our dedicated placement cell collaborates with 70+ hiring partners and agency recruiters. Graduates receive guaranteed interview opportunities with starting CTC packages typically ranging between 4.5 LPA and 11.5 LPA. Support includes resume building, LinkedIn optimization, mock agency pitches, and salary negotiation coaching until you have a confirmed offer.",
  },
  {
    q: "What digital marketing certification and certificates will I receive?",
    a: "Upon completing the program, you receive the official Balaji Marketing Institute Digital Marketing Certification. In addition, our training prepares you to clear globally recognized credentials from Google Ads, Meta Blueprint, HubSpot, and Semrush—building an impressive portfolio to showcase to top recruiters.",
  },
  {
    q: "Will I run actual live ad campaigns with real budgets?",
    a: "Yes! In our Performance Marketing and Paid Marketing modules, students execute real live campaigns on Meta Ads (Facebook and Instagram) and Google Search Ads using actual advertising budgets. You learn hands-on media plan creation, campaign optimization, ad copy testing, bidding strategy, and conversion rate optimization (CRO) with real analytics data.",
  },
  {
    q: "Does BMI provide internships with stipend as part of the training?",
    a: "Yes. From Month 4 onwards, eligible trainees are placed in hands-on internships with stipend at partnering digital marketing agencies and e-commerce brands. This practical internship provides live portfolio proof, client management exposure, and direct references from senior industry mentors.",
  },
  {
    q: "What modern AI tools, LLM Optimization, and search platforms are taught?",
    a: "Our next-gen syllabus covers LLM Optimization, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), AI Prompt Engineering, Generative AI for Content, ChatGPT workflows, Google AI Overviews, and featured snippets. You will also master enterprise tools including DV360, CM360, Google Analytics 4, WordPress, Shopify, and Amazon Ads.",
  },
  {
    q: "What job roles can I apply for after graduating from this digital marketing training?",
    a: "Our alumni step into high-growth roles including Digital Marketing Analyst, Performance Marketing Executive, Ecommerce Marketing Specialist, Programmatic Executive, SEO Analyst, SEO Executive, SEM Analyst, PPC Specialist, Media Planner, Content Manager, Social Media Manager, and Content Writer.",
  },
  {
    q: "I run an e-commerce or local business — will this course help me grow sales?",
    a: "Absolutely. With dedicated modules on Ecommerce & Quick Commerce, Amazon Ads, Shopify, local SEO for Google Business Profile, and organic social strategy, entrepreneurs learn how to scale direct customer acquisition, lower ad spend waste, and run profitable brand campaigns in-house.",
  },
  {
    q: "What is your refund policy if the training doesn't suit me?",
    a: "We offer a 7-day no-questions-asked refund guarantee. If within the first week of starting classes you feel the program is not the right fit, we will refund your tuition fee in full. We believe in 100% accountability and student satisfaction.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ item, index }: { item: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.35) }}
      className={`rounded-2xl border transition-all duration-300 ${
        open
          ? "bg-white border-[#F86104]/35 shadow-[0_8px_30px_rgba(248,97,4,0.09)]"
          : "bg-white border-[#EBE3D5] hover:border-[#F86104]/25"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none group"
      >
        <p className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${open ? "text-[#F86104]" : "text-[#182033] group-hover:text-[#F86104]"}`}>
          {item.q}
        </p>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all mt-0.5 ${
            open ? "bg-[#F86104] border-[#F86104] text-white rotate-180" : "border-[#E2D8CC] text-[#94A3B8] group-hover:border-[#F86104]/50"
          }`}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm sm:text-base text-[#374151] leading-relaxed border-t border-[#F1E9DC] pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main FAQ Section ─────────────────────────────────────────────────────────
export default function DiplomaFaqSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#F6F1E6] border-t border-[#E8DFC8]/60 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 -right-40 w-80 h-80 bg-[#F86104]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-[#F89520]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-extrabold uppercase tracking-widest text-[#F86104] mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#182033] tracking-tight leading-[1.18]"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-4 origin-center"
            style={{ width: 100, height: 5 }}
          >
            <svg viewBox="0 0 100 8" fill="none" className="w-full h-full">
              <path d="M2 5 Q25 2 50 5 Q75 8 98 5" stroke="#F86104" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-[#55524E] mt-4 max-w-xl mx-auto leading-relaxed"
          >
            Everything you need to know before enrolling. Review eligibility criteria, batch schedules, syllabus details, and placement guidelines.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 mb-12">
          {FAQS.map((item, index) => (
            <FaqItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA — still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-[#EBE3D5] p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FFF6EE] border border-[#FED7AA] flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-[#F86104]" />
          </div>
          <h3 className="text-xl font-bold text-[#182033] mb-2">Still have questions?</h3>
          <p className="text-sm text-[#64748B] mb-6 max-w-sm mx-auto leading-relaxed">
            Reach our admissions desk for batch availability, syllabus questions, and upcoming scholarship deadlines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#F86104] to-[#DA3A0A] text-white font-bold text-sm shadow-[0_6px_20px_rgba(248,97,4,0.35)] hover:shadow-[0_10px_30px_rgba(248,97,4,0.45)] transition-all"
            >
              Apply for Next Batch
            </a>
            <a
              href="https://wa.me/918368121032"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#EBE3D5] text-[#182033] font-semibold text-sm hover:border-[#F86104]/50 hover:text-[#F86104] transition-all"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
