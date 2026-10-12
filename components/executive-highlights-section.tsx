"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Rocket, Users, Target, CheckCircle2, TrendingUp, Zap } from "lucide-react";

const STATS = [
  { value: "3 Months", label: "Fast-Track Duration", sub: "Designed for working professionals" },
  { value: "Sundays", label: "Weekend Only Batches", sub: "Zero disruption to your weekday job" },
  { value: "50+", label: "MarTech & AI Tools", sub: "Hands-on execution frameworks" },
  { value: "1-on-1", label: "Executive Mentorship", sub: "Personalized career roadmap" },
];

const MODULE_CARDS = [
  {
    icon: Rocket,
    title: "High-Budget Performance Media & Scaling",
    desc: "Master media buying economics, high-spend Meta and Google campaign structures, creative testing velocity, and ROAS enhancement.",
    features: ["Advantage+ Campaigns", "Performance Max", "Attribution Models"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Funnels & Growth Hacking",
    desc: "Analyze customer drop-offs, design high-converting landing pages, deploy heatmaps, and run multivariate A/B experiments.",
    features: ["CRO Frameworks", "Landing Page Teardowns", "Retention Loops"],
  },
  {
    icon: Zap,
    title: "AI Workflows & Marketing Automation",
    desc: "Automate reporting, ad copy ideation, customer lead routing, and predictive churn modeling using cutting-edge Generative AI.",
    features: ["Custom GPTs for Marketing", "Zapier/Make Workflows", "MarTech Stack Audit"],
  },
  {
    icon: Briefcase,
    title: "Executive Leadership & Personal Brand",
    desc: "Position yourself as an in-demand marketing leader. Build an influential LinkedIn voice, master agency pitch presentations, and command higher executive pay.",
    features: ["LinkedIn Thought Leadership", "C-Suite Stakeholder Comms", "Salary Negotiation"],
  },
];

export default function ExecutiveHighlightsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Designed For Working Professionals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight">
            Level Up Your Marketing Career Without Leaving Your Job
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            A high-intensity, practical weekend program built for marketers, entrepreneurs, and team leaders ready to break into high-growth leadership roles.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] text-center hover:border-[#F47B20]/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F47B20] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#1F2A5C] mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-[#1F2A5C]/60 mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MODULE_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:shadow-[0_8px_30px_rgba(244,123,32,0.1)] hover:border-[#F47B20]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2A5C] mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#1F2A5C]/75 leading-relaxed mb-5">
                    {card.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F8FAFC]">
                  {card.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#1F2A5C] border border-[#E2E8F0]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#10B981] mr-1" />
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
