"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle2, ArrowRight, Clock, Award, ShieldCheck } from "lucide-react";

const WEEKS = [
  {
    week: "Weeks 1 - 2",
    title: "Performance Marketing Architecture & Advanced Media Buying",
    desc: "Master high-scale acquisition setups on Meta Ads and Google Search/Shopping.",
    topics: [
      "Account architecture for 7-figure ad budgets",
      "Advantage+ Shopping Campaigns & bid strategies",
      "Google Performance Max and Search intent clustering",
      "Creative fatigue mitigation & dynamic creative testing (DCT)",
    ],
  },
  {
    week: "Weeks 3 - 4",
    title: "Conversion Funnel Optimization & CRO Sprints",
    desc: "Turn traffic into paying customers with conversion rate science.",
    topics: [
      "Landing page heuristic audits and teardowns",
      "Heatmaps, session replays (Hotjar/Clarity), and friction points",
      "Multivariate A/B testing frameworks and sample size math",
      "Checkout flow streamlining and abandonment recapture",
    ],
  },
  {
    week: "Weeks 5 - 6",
    title: "Marketing Analytics, Attribution & GA4 Dashboards",
    desc: "Make confident data-backed decisions with modern reporting infrastructure.",
    topics: [
      "GA4 custom events, exploratory reports and funnel visualization",
      "First-party data strategy in a cookieless world",
      "Multi-touch attribution models vs Marketing Mix Modeling (MMM)",
      "Building executive Looker Studio dashboards for stakeholder reporting",
    ],
  },
  {
    week: "Weeks 7 - 8",
    title: "Generative AI, Automation & MarTech Stacks",
    desc: "Multiply your team output 10x with modern AI tools and automated pipelines.",
    topics: [
      "Building custom GPTs for ad copywriting and customer research",
      "Automating lead routing and CRM sync via Zapier / Make",
      "AI tools for video repurposing, ad variation and scriptwriting",
      "MarTech stack evaluation and vendor ROI scoring",
    ],
  },
  {
    week: "Weeks 9 - 10",
    title: "Customer Retention, LTV Maximization & Retention Loops",
    desc: "Scale profitability by turning one-time buyers into lifetime brand advocates.",
    topics: [
      "RFM segmentation and cohort analysis",
      "Email and WhatsApp automated lifecycle flows",
      "Loyalty programs, referral mechanics and viral coefficient",
      "Subscription economics and churn prevention playbooks",
    ],
  },
  {
    week: "Weeks 11 - 12",
    title: "Executive Capstone Pitch & Leadership Brand Acceleration",
    desc: "Present your comprehensive growth strategy and unlock career momentum.",
    topics: [
      "Executive growth audit presentation to faculty panel",
      "LinkedIn thought leadership framework & profile makeover",
      "C-suite communication, boardroom decks & stakeholder buy-in",
      "Senior role interview prep & executive compensation negotiation",
    ],
  },
];

export default function ExecutiveCurriculumSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            12-Week Weekend Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight">
            Curriculum Engineered for Fast Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Every session focuses on frameworks and tools you can apply immediately in your day job on Monday morning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEEKS.map((item, idx) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-[#F1E5D8] shadow-[0_4px_16px_rgba(31,42,92,0.03)] hover:border-[#F47B20]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFF4EB] text-[#F47B20] border border-[#FED7AA]">
                    {item.week}
                  </span>
                  <span className="text-[11px] font-semibold text-[#1F2A5C]/60 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F47B20]" />
                    Sundays
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2A5C] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#1F2A5C]/70 mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <div className="space-y-2 border-t border-[#F8FAFC] pt-3">
                  {item.topics.map((topic) => (
                    <div key={topic} className="flex items-start gap-2 text-xs text-[#1F2A5C]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1F2A5C] hover:bg-[#151D42] text-white text-sm font-bold shadow-lg shadow-[#1F2A5C]/25 transition-all"
          >
            Apply for the Upcoming Sunday Batch
            <ArrowRight className="w-4 h-4 text-[#F47B20]" />
          </a>
        </div>
      </div>
    </section>
  );
}
