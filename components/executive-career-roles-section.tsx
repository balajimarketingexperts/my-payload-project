"use client";

import React from "react";
import {
  TrendingUp,
  Award,
  Briefcase,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const EXECUTIVE_ROLES = [
  {
    role: "Head of Growth / Growth Marketing Lead",
    ctc: "₹18L – ₹28L+ CTC",
    type: "Leadership Role",
    desc: "Own the company's full-funnel customer acquisition, unit economics, conversion rate optimization, and rapid experimentation pipeline.",
    skills: ["Full-Funnel Growth", "Unit Economics & CAC/LTV", "Multivariate CRO", "Executive Reporting"],
    badge: "High Growth",
  },
  {
    role: "Performance Marketing Lead / Media Director",
    ctc: "₹14L – ₹22L+ CTC",
    type: "Scale Specialist",
    desc: "Manage high-spend media accounts across Meta Ads, Google Performance Max, and programmatic networks with rigorous ROAS accountability.",
    skills: ["7-Figure Media Scaling", "Advantage+ Shopping", "Attribution Models", "Creative Velocity"],
    badge: "High Demand",
  },
  {
    role: "Senior Brand & GTM Strategist",
    ctc: "₹12L – ₹20L+ CTC",
    type: "Strategy & GTM",
    desc: "Architect omnichannel brand positioning, retail and digital go-to-market roadmaps, and competitive category moats for scaling enterprises.",
    skills: ["Brand Positioning", "Omnichannel GTM", "Consumer Personas", "Category Strategy"],
    badge: "Strategic",
  },
  {
    role: "MarTech & Revenue Operations Manager",
    ctc: "₹15L – ₹24L+ CTC",
    type: "Tech & Ops",
    desc: "Bridge marketing and engineering. Implement server-side GA4, automated CRM pipelines, custom AI tools, and multi-touch attribution.",
    skills: ["GA4 & Server GTM", "Zapier/Make Automation", "Custom GPTs", "MarTech Stacks"],
    badge: "Next-Gen",
  },
  {
    role: "Retention & Customer Lifecycle Lead",
    ctc: "₹12L – ₹18L+ CTC",
    type: "LTV & CRM",
    desc: "Scale net revenue retention (NRR) and lifetime customer value through RFM segmentation, automated lifecycle journeys, and VIP loyalty programs.",
    skills: ["RFM Segmentation", "Cohort Analysis", "Email & WhatsApp API", "Churn Prevention"],
    badge: "High Impact",
  },
  {
    role: "Growth Consultant / Fractional CMO",
    ctc: "₹1.5L – ₹3L+/mo Retainers",
    type: "Consulting",
    desc: "Advise funded startups, D2C brands, and mid-market enterprises on growth diagnostics, paid media audits, and marketing team restructuring.",
    skills: ["Growth Diagnostics", "Boardroom Advisory", "P&L Financial Models", "Team Leadership"],
    badge: "Independent",
  },
];

const RECRUITERS = [
  "Dainik Jagran",
  "Americanz Muscles",
  "Punjab Kesari",
  "Ad2Lead Hub",
  "Balaji Marketing Experts",
  "Saisha Eduversity",
  "The Archoline Architects",
  "Globe decorez",
];

export default function ExecutiveCareerRolesSection() {
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
    <section className="py-16 sm:py-24 bg-white border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#F86104]" />
            Career Transitions & Senior Compensation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Roles You Can Step Into After the Executive Program
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Transition from day-to-day execution to high-impact growth leadership. Our curriculum and confidential mentorship are engineered to command senior compensation.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {EXECUTIVE_ROLES.map((role) => (
            <div
              key={role.role}
              className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:border-[#F86104]/40 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFF4EB] text-[#F86104] border border-[#FED7AA]">
                    {role.badge}
                  </span>
                  <span className="text-xs font-bold text-[#1F2A5C]/60 uppercase tracking-wider">
                    {role.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1F2A5C] mb-2 leading-snug">
                  {role.role}
                </h3>

                <div className="inline-block px-3 py-1 rounded-lg bg-[#1F2A5C] text-white text-xs font-bold mb-3">
                  {role.ctc}
                </div>

                <p className="text-xs sm:text-sm text-[#1F2A5C]/75 leading-relaxed mb-4">
                  {role.desc}
                </p>

                <div className="pt-3 border-t border-[#F1E5D8]">
                  <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2">
                    Key Competencies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-[#1F2A5C] border border-[#E2E8F0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F8FAFC]">
                <a
                  href="#apply"
                  onClick={handleApplyClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F86104] hover:text-[#DA3A0A] transition-colors cursor-pointer"
                >
                  Explore Transition Roadmap
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Hiring & Alumni Network Strip */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8E6E2]">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F86104] mb-1">
              Corporate Network & Partner Ecosystem
            </p>
            <h4 className="text-lg sm:text-xl font-bold text-[#1F2A5C]">
              Where Our Executive Alumni Lead and Scale
            </h4>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {RECRUITERS.map((rec) => (
              <span
                key={rec}
                className="px-4 py-2 rounded-xl bg-white text-[#1F2A5C] text-xs sm:text-sm font-bold border border-[#E2E8F0] shadow-2xs hover:border-[#F86104]/50 transition-all"
              >
                {rec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
