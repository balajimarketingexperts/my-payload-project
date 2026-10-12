"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Briefcase,
  Award,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileText,
} from "lucide-react";

interface WhyChooseBmiSectionProps {
  className?: string;
}

const PILLARS = [
  {
    icon: Rocket,
    badge: "Real Budgets",
    title: "Live Paid Marketing & Performance Campaigns",
    description:
      "No dummy accounts or textbook theory. Trainees run actual Meta Ads (Facebook and Instagram), Google Search Ads, and LinkedIn campaigns with real advertising budgets, mastering bidding strategy, media plans, insertion orders, and campaign optimization to maximize ROAS.",
    highlights: ["₹50,000+ live ad spends per batch", "Hands-on PPC & Search Engine Marketing (SEM)", "A/B testing, targeting & ad copy optimization"],
    accent: "#F86104",
  },
  {
    icon: Briefcase,
    badge: "Agency Model",
    title: "Agency Simulation & Brand Launch Strategy",
    description:
      "Train like you're already on the job. Work in squads on brand launch teardowns, client media strategy decks, go-to-market strategy, and full-funnel audits under senior agency directors.",
    highlights: ["12+ portfolio-grade live client briefs", "Consumer personas & marketing briefs", "Client Manager & Account Executive roleplay"],
    accent: "#DA3A0A",
  },
  {
    icon: Award,
    badge: "Placement Cell",
    title: "100% Placement Support & 70+ Hiring Partners",
    description:
      "From crafting recruiter-ready resumes to salary negotiation for 4.5 to 11.5 LPA CTC packages, our placement cell connects alumni directly with leading digital agencies and brands.",
    highlights: ["Internships with stipend after Month 4", "70+ agency & brand hiring partners", "Mock interviews with industry alumni"],
    accent: "#F89520",
  },
  {
    icon: Zap,
    badge: "AI & Tools",
    title: "Next-Gen AI, GEO & Programmatic Stack",
    description:
      "Master modern capabilities high-paying teams demand: AI Prompt Engineering, Generative AI for Content, LLM Optimization, Generative Engine Optimization (GEO), Answer Engine Optimization, DV360, CM360, and Excel reporting.",
    highlights: ["ChatGPT & AI creative & ad generation", "Google Analytics & Looker Studio Dashboards", "Shopify, WordPress & Amazon Ads workflows"],
    accent: "#EA580C",
  },
];

const TRUST_STATS = [
  { value: "4.9★", label: "Student Rating", sub: "from 200+ reviews" },
  { value: "70+", label: "Hiring Partners", sub: "top agencies & brands" },
  { value: "99%", label: "Placement Assistance", sub: "dedicated career team" },
  { value: "12+", label: "Live Client Projects", sub: "industry-grade portfolio" },
];

const COMPARISONS = [
  {
    feature: "Live Ad Budgets",
    bmi: "₹50,000+ real advertising budget per batch on Meta & Google Ads",
    other: "Dummy mock campaigns & zero real advertising budget exposure",
  },
  {
    feature: "Training Model",
    bmi: "Agency-simulated squads working on live client brand briefs",
    other: "Generic textbook theory and outdated theoretical slide decks",
  },
  {
    feature: "Mentorship",
    bmi: "1-on-1 portfolio reviews & senior agency director feedback",
    other: "Crowded mass batches with zero individualized feedback",
  },
  {
    feature: "Placement Support",
    bmi: "100% placement support with 70+ hiring partners & mock interviews",
    other: "Unverified job forwardings with zero placement accountability",
  },
  {
    feature: "AI & Modern Stack",
    bmi: "Generative AI, GEO, Looker Studio dashboards, custom GPTs",
    other: "Legacy 2018-era tools with zero AI automation integration",
  },
  {
    feature: "Investment / Fee",
    bmi: "Transparent fee with 0% interest EMI options & zero hidden fees",
    other: "Inflated fees with hidden certification and exam charges",
  },
];

export default function WhyChooseBmiSection({ className = "" }: WhyChooseBmiSectionProps) {
  return (
    <section className={`relative py-16 sm:py-24 bg-[#F6F1E6] overflow-hidden border-t border-[#E8DFC8]/60 ${className}`}>
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F86104]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#F89520]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#F86104]/30 shadow-[0_2px_12px_rgba(248,97,4,0.1)] mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#F86104] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F86104]">
              WHY CHOOSE BMI?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#182033] tracking-tight leading-[1.15]"
          >
            Learn Digital Marketing.{" "}
            <span className="block sm:inline italic text-[#F86104]">
              Build Your Career.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#55524E] mt-4 leading-relaxed font-normal"
          >
            Get practical skills, real-world learning and career support to help you take the next step in digital marketing.
          </motion.p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-16">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-[#EBE3D5] hover:border-[#F86104]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(248,97,4,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top card accent highlight */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F86104]/20 to-transparent group-hover:via-[#F86104] transition-all duration-500" />

                <div>
                  {/* Top line with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#FFF6EE] border border-[#FED7AA] flex items-center justify-center text-[#F86104] shadow-sm group-hover:scale-105 group-hover:bg-[#F86104] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A3412] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FED7AA]/70">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#182033] tracking-tight mb-3 group-hover:text-[#F86104] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#55524E] leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlights Bullet List */}
                <div className="pt-4 border-t border-[#F1E9DC] space-y-2.5">
                  {pillar.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#23272E] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F86104] bg-[#FFF4EB] px-3.5 py-1 rounded-full border border-[#FED7AA]">
              Side-By-Side Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#182033] mt-2.5 tracking-tight">
              How BMI Compares to Traditional Institutes
            </h3>
            <p className="text-xs sm:text-sm text-[#55524E] mt-2">
              See why ambitious learners choose our agency-simulated training over outdated textbook courses.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#E8DFC8] shadow-sm bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1.8fr] bg-[#182033] text-white p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div>PROGRAM FEATURE</div>
              <div className="text-[#F89520] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                BMI DIGITAL MARKETING COURSE
              </div>
              <div className="text-white/60">TRADITIONAL MARKETING COURSES</div>
            </div>

            <div className="divide-y divide-[#F1E9DC]">
              {COMPARISONS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1.8fr] p-4 sm:p-5 gap-2 md:gap-4 items-center text-xs sm:text-sm hover:bg-[#FFFDF9] transition-colors"
                >
                  <div className="font-bold text-[#182033]">{row.feature}</div>
                  <div className="font-semibold text-[#182033] flex items-start gap-2 bg-[#FFF7ED] md:bg-transparent p-2.5 md:p-0 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>{row.bmi}</span>
                  </div>
                  <div className="text-[#64748B] pl-6 md:pl-0 text-xs sm:text-[13px]">
                    {row.other}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Proof & Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE3D5] shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#F1E9DC]">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className={`text-center ${i > 0 && i < 2 ? "pt-4 sm:pt-0" : ""} ${i >= 2 ? "pt-4 lg:pt-0" : ""}`}>
                <div className="text-3xl sm:text-4xl font-black text-[#F86104] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#182033] mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#182033] via-[#23272E] to-[#182033] text-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(24,32,51,0.18)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Decorative orange background radial glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#F86104]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center md:text-left relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F89520] tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F89520]" />
              Limited Seats · Batch Starting Soon
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to Accelerate Your Career at BMI?
            </h3>
            <p className="text-xs sm:text-sm text-[#A0AAB8] mt-2 leading-relaxed">
              Apply online to reserve your seat and receive your personalized digital marketing curriculum roadmap.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#apply"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F86104] via-[#F89520] to-[#DA3A0A] hover:from-[#ea5500] hover:to-[#c23300] text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center shadow-[0_8px_25px_rgba(248,97,4,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Apply for Diploma
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#syllabus"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-white/80" />
              Download Syllabus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
