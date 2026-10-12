"use client";

import React from "react";
import {
  Rocket,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const SKILLS = [
  {
    icon: Rocket,
    title: "High-Budget Performance Scaling",
    desc: "Move beyond ₹10K daily spends. Architect enterprise ad accounts on Meta & Google managing 7-figure budgets with cost caps and ROAS stability.",
    bullets: [
      "Meta Advantage+ Shopping & bid cap strategy",
      "Google Performance Max & intent clustering",
      "Dynamic creative testing (DCT) pipelines",
      "Creative fatigue mitigation frameworks",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Funnel & CRO Science",
    desc: "Diagnose and fix friction across landing pages and checkout flows using rigorous quantitative and qualitative analytics.",
    bullets: [
      "Heuristic audits & message matching",
      "Heatmaps, click tracking & session replays",
      "Multivariate A/B testing & statistical math",
      "Checkout flow streamlining & cart recovery",
    ],
  },
  {
    icon: BarChart3,
    title: "Attribution & Executive Dashboards",
    desc: "Translate complex campaign metrics into boardroom-ready marketing P&L dashboards and clear commercial ROI reports.",
    bullets: [
      "GA4 custom events & exploratory funnels",
      "Server-side GTM tagging in cookieless era",
      "Multi-touch attribution models & MMM",
      "Automated Looker Studio KPI dashboards",
    ],
  },
  {
    icon: Cpu,
    title: "Generative AI & MarTech Automation",
    desc: "Integrate cutting-edge AI workflows into daily marketing execution, cutting operational turnaround time by 70%.",
    bullets: [
      "Domain-specific custom GPTs for copy & research",
      "Automated lead enrichment via Zapier / Make",
      "AI creative variation & rapid localization",
      "MarTech stack audit & vendor ROI evaluation",
    ],
  },
  {
    icon: Layers,
    title: "Customer Retention & LTV Economics",
    desc: "Engineer sustainable organic profitability through cohort retention analysis, repeat purchase loops, and automated lifecycle stacks.",
    bullets: [
      "RFM customer segmentation & cohort charts",
      "Automated WhatsApp & email drip engines",
      "VIP customer loyalty & referral loops",
      "Net revenue retention (NRR) & churn defense",
    ],
  },
  {
    icon: Award,
    title: "Boardroom Poise & C-Suite Storytelling",
    desc: "Communicate with authority. Present compelling growth strategies to CEOs and investors and command premium executive compensation.",
    bullets: [
      "Executive boardroom slide deck craft",
      "LinkedIn thought leadership content engine",
      "Cross-functional stakeholder alignment",
      "High-stakes executive salary negotiation",
    ],
  },
];

export default function ExecutiveSkillsGainSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Competencies Gained
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            High-Leverage Skills That Command Authority
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Move from tactical execution to strategic leadership. These are the modern commercial skills high-growth companies actively search and pay top dollar for.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="bg-white rounded-2xl p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:shadow-lg hover:border-[#F86104]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F86104] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1F2A5C] mb-2 leading-snug">
                    {skill.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1F2A5C]/75 leading-relaxed mb-5">
                    {skill.desc}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-[#F8FAFC]">
                    {skill.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-[#1F2A5C]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{b}</span>
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
