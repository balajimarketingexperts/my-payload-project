"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Phone,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import RegistrationForm from "@/components/ui/registration-form";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "100% Placement Support",
    desc: "Over 70+ top recruiting partners & performance agencies in Delhi NCR.",
  },
  {
    icon: Sparkles,
    title: "Live Budget Spends",
    desc: "Run real Meta Ads and Google Ads campaigns with actual media budgets.",
  },
  {
    icon: Users,
    title: "Offline & Hybrid Batches",
    desc: "Air-conditioned labs in Rohini & Pitampura plus flexible weekend tracks.",
  },
  {
    icon: Calendar,
    title: "Scholarship Grants",
    desc: "Up to 30% fee assistance available for early admissions & merit holders.",
  },
];

export default function AdmissionsSection() {
  return (
    <section
      id="apply"
      className="relative py-16 sm:py-24 bg-[#F6F1E6] border-t border-[#E8DFC8]/70 overflow-hidden scroll-mt-24"
    >
      {/* Anchor alias for hash deep linking */}
      <span id="registration" className="sr-only" />

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F86104]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[#FBB034]/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Admissions Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#F86104]/30 text-[#F86104] text-xs font-bold uppercase tracking-wider shadow-sm mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F86104] animate-pulse" />
              Admissions Open 2026 · Delhi NCR
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#182033] tracking-tight leading-[1.2]">
              Take the First Step Toward Your High-Growth Marketing Career
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl">
              Fill out the registration form to secure your admission seat.
              Our senior academic mentors will walk you through program tracks, syllabus details, live agency projects, and batch timings.
            </p>

            {/* 4 Feature highlight blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
              {HIGHLIGHTS.map((h, i) => {
                const IconComponent = h.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 sm:p-4 rounded-xl bg-white/80 border border-[#E8DFC8] shadow-sm hover:shadow-md hover:border-[#F86104]/40 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] text-[#F86104] flex items-center justify-center mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#182033]">
                      {h.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B] mt-1 leading-snug">
                      {h.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Immediate helpline callout */}
            <div className="mt-6 flex items-center gap-3 p-3.5 rounded-xl bg-white/60 border border-[#E8DFC8] w-fit">
              <div className="w-8 h-8 rounded-full bg-[#F86104] text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-[#64748B] block">Need instant guidance?</span>
                <a
                  href="tel:+918368121032"
                  className="font-bold text-[#182033] hover:text-[#F86104] transition-colors"
                >
                  Call +91 83681 21032
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <RegistrationForm
              id="registration-form"
              title="Apply for Admission"
              badge="Fast-Track Registration"
              subtitle="Admissions team responds within 2 business hours"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
