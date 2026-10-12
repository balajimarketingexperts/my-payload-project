"use client";

import React from "react";
import {
  Target,
  TrendingUp,
  Cpu,
  BarChart3,
  Users2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const SKILLS = [
  {
    icon: Target,
    title: "Marketing Strategy",
    headline: "Positioning, Branding & Go-To-Market",
    desc: "Master classical Kotler frameworks alongside modern consumer segmentation, value proposition mapping, and full-scale brand architecture.",
    keyPoints: [
      "Brand positioning & narrative frameworks",
      "Go-to-market (GTM) launch playbooks",
      "Competitive differentiation & white space analysis",
      "Full-funnel brand equity building",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales and Distribution",
    headline: "Channel Strategy & Partner Management",
    desc: "Understand retail channel economics, distributor margin negotiations, primary/secondary sales pipelines, and quick-commerce distribution.",
    keyPoints: [
      "Omnichannel retail & general trade models",
      "Area sales executive & territory pipelines",
      "Account manager & client relationship manager skills",
      "Quick-commerce channel distribution",
    ],
  },
  {
    icon: Cpu,
    title: "AI in Marketing",
    headline: "Research, Content & Campaign Optimisation",
    desc: "Seamlessly deploy generative AI tools (ChatGPT, Midjourney, Claude, Perplexity) directly into market research, creative ideation, and ad copywriting.",
    keyPoints: [
      "Prompt engineering for consumer research",
      "AI-driven creative and copy generation",
      "Inbound, outbound, B2B and account-based marketing roles",
      "Lead generation manager automation",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    headline: "Reading Data & Making Business Decisions",
    desc: "Go beyond vanity metrics to evaluate marketing ROI, customer acquisition cost (CAC), lifetime value (LTV), and multi-touch attribution.",
    keyPoints: [
      "Advanced Excel modeling & cohort analysis",
      "Google Analytics 4 (GA4) & Looker dashboards",
      "CAC, LTV, ROAS & marketing mix attribution",
      "Data-backed boardroom decision making",
    ],
  },
  {
    icon: Users2,
    title: "Leadership",
    headline: "Communication, Negotiation & Teamwork",
    desc: "Develop executive poise, persuasive presentation storytelling, high-stakes commercial negotiation skills, and cross-functional leadership.",
    keyPoints: [
      "Executive boardroom presentations",
      "Commercial contract & vendor negotiations",
      "Cross-functional squad management",
      "High-impact leadership storytelling",
    ],
  },
];

export default function MbaSkillsGainSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Job-Ready Skills & Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Skills You’ll Gain
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            The modern marketing leader needs more than just theory. We cultivate job-ready skills across five essential competencies that top recruiters demand.
          </p>
        </div>

        {/* 5 Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:border-[#F47B20]/40 hover:shadow-lg transition-all flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-bold text-[#F47B20] uppercase tracking-wider block mb-1">
                    {skill.title}
                  </span>
                  <h3 className="text-lg font-bold text-[#1F2A5C] mb-2 leading-snug">
                    {skill.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F2A5C]/75 mb-4 leading-relaxed">
                    {skill.desc}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-[#F8FAFC]">
                    {skill.keyPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-[#1F2A5C]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
