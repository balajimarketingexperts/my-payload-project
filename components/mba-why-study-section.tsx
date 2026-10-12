"use client";

import React from "react";
import {
  Users,
  TrendingUp,
  Cpu,
  Building2,
  Network,
  MapPin,
  CreditCard,
  Percent,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const TILES = [
  {
    icon: Users,
    title: "CXO-Led Live Cases",
    desc: "Learn directly from active CMOs, Brand Directors, and Founders who manage real business P&Ls, teardowns, and multi-crore campaigns.",
    highlight: "Real Business Problems",
  },
  {
    icon: TrendingUp,
    title: "Marketing Plus Sales",
    desc: "Gain a rare dual edge: brand strategy, creative equity, plus real-world channel distribution, distributor economics, and retail sales.",
    highlight: "End-to-End Commercial Acumen",
  },
  {
    icon: Cpu,
    title: "AI Built into the Curriculum",
    desc: "Generative AI (ChatGPT, Midjourney, Claude, Perplexity) is natively embedded across every module, not treated as a weekend afterthought.",
    highlight: "Native GenAI Workflows",
  },
  {
    icon: Building2,
    title: "Campus Placements",
    desc: "150+ corporate hiring partners across FMCG, D2C, technology, and global agency networks actively hire directly from our campus drives.",
    highlight: "150+ Active Recruiters",
  },
  {
    icon: Network,
    title: "2,500+ Alumni Marketers",
    desc: "Join a flourishing nationwide network of marketing professionals working across top agencies and brands for lifelong referrals and mentoring.",
    highlight: "Lifelong Professional Network",
  },
  {
    icon: MapPin,
    title: "Central Location in New Delhi",
    desc: "Modern campus situated in North West Delhi’s Rohini education corridor, well-connected by metro and close to major commercial and agency hubs.",
    highlight: "Capital City Advantage",
  },
];

export default function MbaWhyStudySection() {
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
    <section id="why-study" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F47B20] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Better ROI Than MBA · B-School Alternative
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Why Study MBA Marketing With Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            An agile sales and marketing program with placements that bridges academic rigor with live commercial execution, live ad budgets, direct senior industry mentorship, and verified placement accountability.
          </p>
        </div>

        {/* 6 Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {TILES.map((tile) => {
            const Icon = tile.icon;
            return (
              <div
                key={tile.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:border-[#F47B20]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] border border-[#FED7AA] flex items-center justify-center text-[#F47B20]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#F47B20] uppercase tracking-wider bg-[#FFF4EB] px-2.5 py-0.5 rounded-full border border-[#FED7AA]">
                      {tile.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F2A5C] mb-2 leading-snug">
                    {tile.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F2A5C]/75 leading-relaxed">
                    {tile.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fee Note Block */}
        <div className="bg-gradient-to-br from-[#1F2A5C] to-[#25336E] text-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-[#1F2A5C]/15">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F47B20] border border-white/20 text-xs font-bold uppercase tracking-wider mb-3">
                <CreditCard className="w-3.5 h-3.5" />
                Better ROI than MBA · Transparent Fee Structure
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                ₹1,80,000 for a 2-Year MBA in Marketing
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                Standard tuition fee covers all 4 semesters of classroom training, CXO mentorship sessions, and placement drives. Designed as an industry-focused B-school alternative to MBA, our sales and marketing course delivers job-ready skills, dedicated placement support, placement accountability, and career support and mock interviews. Flexible 0% interest EMI from ₹7,500/month across 24 months and merit scholarships up to 35% are available.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4 text-xs text-white/90">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  0% Interest EMI Available
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  Placement Accountability & Support
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  Career Support & Mock Interviews
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#apply"
                onClick={handleApplyClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F47B20] hover:bg-[#e06509] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#F47B20]/30 cursor-pointer whitespace-nowrap active:scale-95"
              >
                Apply for Admission & EMI Plans
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
