"use client";

import React, { useState, useEffect } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronLeft,
  Download,
  Target,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  Briefcase,
  TrendingUp,
  Cpu,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

// ─── 3 Executive Pillars / Phases ─────────────────────────────────────────────
const PHASES = [
  { id: "all", label: "All 6 Modules", count: 6 },
  { id: 1, label: "Pillar 1: Performance Media & CRO", count: 2 },
  { id: 2, label: "Pillar 2: Data Analytics & AI Stacks", count: 2 },
  { id: 3, label: "Pillar 3: Retention & C-Suite Leadership", count: 2 },
];

const PHASE_THEMES: Record<number, { text: string; bg: string; border: string }> = {
  1: { text: "#F86104", bg: "#FFF7ED", border: "#FED7AA" },
  2: { text: "#0284C7", bg: "#F0F9FF", border: "#BAE6FD" },
  3: { text: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
};

// ─── 6 Executive Modules (12-Week Intensive Curriculum) ───────────────────────
const EXECUTIVE_MODULES = [
  {
    number: 1,
    title: "Performance Marketing Architecture & 7-Figure Budget Scaling",
    duration: "Weeks 1 - 2 · 16 Hours Live",
    phase: 1,
    phaseName: "Pillar 1 · Paid Acquisition",
    badge: "High-Budget Scaling",
    description:
      "Master enterprise media buying economics, high-spend account architecture on Meta Ads and Google Ads, creative fatigue mitigation, and ROAS enhancement frameworks.",
    topics: [
      "Enterprise account architecture for 7-figure monthly ad budgets",
      "Advantage+ Shopping Campaigns, bid caps & cost control strategies",
      "Google Performance Max, search intent clustering & negative sculpting",
      "Dynamic creative testing (DCT) workflows & creative fatigue mitigation",
    ],
    tools: ["Meta Ads Manager", "Google Ads Editor", "Motion App", "TikTok/YouTube Ads"],
    milestone: "Audit & restructure an active corporate paid media account",
    targetRoles: ["Performance Marketing Lead", "Head of Growth", "Media Director"],
  },
  {
    number: 2,
    title: "Conversion Funnel Optimization & CRO Sprints",
    duration: "Weeks 3 - 4 · 16 Hours Live",
    phase: 1,
    phaseName: "Pillar 1 · Funnel Science",
    badge: "Conversion Science",
    description:
      "Turn paid and organic traffic into paying customers with conversion rate science. Analyze customer drop-offs, design high-converting landing pages, and run multivariate experiments.",
    topics: [
      "Landing page heuristic audits, message matching & friction teardowns",
      "Heatmaps, click maps, and session replays with Hotjar and Microsoft Clarity",
      "Multivariate A/B testing frameworks, statistical significance & sample size math",
      "Checkout flow streamlining, order bumps & cart abandonment recapture",
    ],
    tools: ["Hotjar", "Microsoft Clarity", "VWO / Google Optimize", "Unbounce"],
    milestone: "Deliver a live CRO heuristic audit with 5 prioritized test hypotheses",
    targetRoles: ["Growth Marketer", "CRO Specialist", "Product Marketing Lead"],
  },
  {
    number: 3,
    title: "Marketing Analytics, Attribution & GA4 Dashboards",
    duration: "Weeks 5 - 6 · 16 Hours Live",
    phase: 2,
    phaseName: "Pillar 2 · Analytics Infrastructure",
    badge: "Boardroom Data",
    description:
      "Make confident data-backed decisions with modern reporting infrastructure. Master GA4 custom events, first-party cookie tracking, multi-touch attribution, and executive Looker Studio dashboards.",
    topics: [
      "GA4 custom events, exploratory funnel reports & server-side GTM tagging",
      "First-party data strategy, cookie deprecation & privacy-first measurement",
      "Multi-touch attribution models vs Marketing Mix Modeling (MMM)",
      "Building automated executive Looker Studio dashboards for stakeholder reporting",
    ],
    tools: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "BigQuery Basics"],
    milestone: "Build a live, automated executive marketing P&L dashboard",
    targetRoles: ["Marketing Analytics Manager", "Revenue Operations Lead", "Growth Analyst"],
  },
  {
    number: 4,
    title: "Generative AI, Automation & MarTech Stacks",
    duration: "Weeks 7 - 8 · 16 Hours Live",
    phase: 2,
    phaseName: "Pillar 2 · AI Automation",
    badge: "Next-Gen AI Stack",
    description:
      "Multiply your team output 10x with modern AI tools and automated pipelines. Build custom GPTs for ad copywriting, automate lead routing in Zapier/Make, and evaluate MarTech vendor ROI.",
    topics: [
      "Building domain-specific custom GPTs for ad copywriting and competitive research",
      "Automating lead enrichment, CRM sync & alerts via Zapier and Make.com",
      "AI video repurposing, multi-lingual voiceovers & creative variation workflows",
      "Enterprise MarTech stack evaluation, consolidation & software vendor ROI scoring",
    ],
    tools: ["ChatGPT Plus / Custom GPTs", "Claude 3.5 Sonnet", "Zapier", "Make.com", "Midjourney"],
    milestone: "Deploy an automated AI lead qualification & enrichment pipeline",
    targetRoles: ["MarTech Lead", "AI Marketing Strategist", "Operations Director"],
  },
  {
    number: 5,
    title: "Customer Retention, LTV Maximization & Retention Loops",
    duration: "Weeks 9 - 10 · 16 Hours Live",
    phase: 3,
    phaseName: "Pillar 3 · Retention & LTV",
    badge: "Customer Economics",
    description:
      "Scale profitability by turning one-time buyers into lifetime brand advocates. Master RFM customer segmentation, automated lifecycle email/WhatsApp sequences, and cohort retention metrics.",
    topics: [
      "Recency, Frequency, Monetary (RFM) segmentation & customer cohort analysis",
      "Email & WhatsApp automated lifecycle sequences (welcome, win-back, nurture)",
      "Customer loyalty architectures, referral mechanics & viral coefficient math",
      "Subscription unit economics, net revenue retention (NRR) & churn playbooks",
    ],
    tools: ["Klaviyo", "CleverTap / MoEngage", "WhatsApp Business API", "Excel Cohort Sheets"],
    milestone: "Design an end-to-end multi-stage customer retention & upsell blueprint",
    targetRoles: ["Retention Marketing Manager", "CRM Director", "Lifecycle Strategist"],
  },
  {
    number: 6,
    title: "Executive Capstone Pitch & Leadership Brand Acceleration",
    duration: "Weeks 11 - 12 · 16 Hours Live",
    phase: 3,
    phaseName: "Pillar 3 · Leadership & C-Suite",
    badge: "C-Suite Presentation",
    description:
      "Present your comprehensive corporate growth audit and unlock leadership career momentum. Master boardroom storytelling, executive LinkedIn personal branding, and high-stakes salary negotiation.",
    topics: [
      "360° Executive growth audit presentation before a visiting CMO panel",
      "LinkedIn thought leadership framework & executive profile makeover",
      "C-suite communication, boardroom slide craft & cross-functional alignment",
      "Executive interview frameworks, leadership case teardowns & compensation negotiation",
    ],
    tools: ["Boardroom Pitch Decks", "Executive Bio Blueprint", "Negotiation Frameworks"],
    milestone: "Boardroom defense of a 360° growth strategy with faculty & CMO jury",
    targetRoles: ["Chief Marketing Officer (CMO)", "VP of Marketing", "Growth Director"],
  },
];

// ─── 4 Executive Live Brand Audit Cases ────────────────────────────────────────
const EXECUTIVE_LIVE_CASES = [
  {
    number: 1,
    title: "Multi-Channel Media Scaling & CAC Reduction",
    partner: "Dainik Jagran & Regional Media Group",
    duration: "4 Weeks · Live Corporate Brief",
    accentColor: "#0284C7",
    accentLight: "#E0F2FE",
    accentBorder: "#BAE6FD",
    description:
      "Audit active regional digital campaigns and print-digital cross-monetization. Restructure ad account targeting, test high-intent vernacular creative hooks, and optimize customer acquisition costs.",
    steps: [
      "Current Account Heuristic Audit & Spend Leakage Analysis",
      "Vernacular Creative Matrix & Audience Cluster Testing",
      "Real-Time Attribution Calibration & GA4 Funnel Mapping",
      "Executive Boardroom Presentation to Regional Media Directors",
    ],
    highlight: "Presented Directly to Senior Media Directors",
  },
  {
    number: 2,
    title: "Omnichannel Funnel & Distributor Margin Model",
    partner: "Americanz Muscles (Sports Nutrition)",
    duration: "4 Weeks · D2C & Retail Expansion",
    accentColor: "#EA580C",
    accentLight: "#FFEDD5",
    accentBorder: "#FED7AA",
    description:
      "Build a scalable growth engine bridging D2C eCommerce and offline supplement distributor channels. Formulate margin structures, checkout conversion optimization, and retention repeat-order loops.",
    steps: [
      "E-Commerce Checkout Flow & Drop-Off Heuristic Audit",
      "Distributor Economics & Modern Trade Channel Margins",
      "Meta Ads Scaling for High-AOV Fitness Bundles",
      "Retention VIP Loyalty & WhatsApp Re-Order Engine Setup",
    ],
    highlight: "Direct Commercial Margin Deck Teardown",
  },
  {
    number: 3,
    title: "High-Ticket B2B Lead Engine & Automated MarTech Stack",
    partner: "Ad2Lead Hub & Balaji Marketing Experts",
    duration: "4 Weeks · B2B Pipeline Case",
    accentColor: "#7C3AED",
    accentLight: "#EDE9FE",
    accentBorder: "#DDD6FE",
    description:
      "Design an enterprise inbound and outbound demand generation system. Integrate Zapier/Make automations, configure CRM lead scoring, and run high-converting Google Search intent campaigns.",
    steps: [
      "B2B Account-Based Marketing ICP & Lead Magnet Architecture",
      "Google Search PPC High-Intent Keyword Sculpting",
      "Zapier / Make Automation Pipeline with CRM Lead Scoring",
      "Executive Revenue P&L and ROI Reporting Model",
    ],
    highlight: "End-to-End Automated Pipeline Deployment",
  },
  {
    number: 4,
    title: "Comprehensive Executive Capstone & Boardroom Defense",
    partner: "Visiting CMO Panel & Industry Leaders",
    duration: "4 Weeks · Boardroom Capstone",
    accentColor: "#059669",
    accentLight: "#D1FAE5",
    accentBorder: "#A7F3D0",
    description:
      "Cap the 3-month program by defending a comprehensive 360° growth strategy for your own company or a real enterprise brand before a panel of visiting CMOs and venture leaders.",
    steps: [
      "Full-Funnel Growth Diagnostic & Competitive Moat Teardown",
      "Unit Economics, Blended CAC/LTV & Media Mix Modeling",
      "1-on-1 Confidential Audit Preparation with Faculty",
      "Boardroom Defense & Executive Certification Conferral",
    ],
    highlight: "Confidential Defense with CMO Jury & Certificate",
  },
];

const EXECUTIVE_BONUS_HIGHLIGHTS = [
  "Confidential 1-on-1 office hours for your company's live ad accounts",
  "Downloadable executive spreadsheets, budget models & slide decks",
  "Zero weekday disruption: Sunday sessions (10:30 AM – 2:30 PM)",
  "HD session recordings & transcripts uploaded within 2 hours",
  "Employer-recognized BMI Executive Certification for LinkedIn",
  "Lifetime access to BMI executive alumni community & hiring network",
  "Personalized salary negotiation & senior role interview coaching",
  "Flexible no-cost EMI payment plans starting from ₹15,000/month",
];

export default function ExecutiveModulesStackingSection() {
  const [selectedPhase, setSelectedPhase] = useState<string | number>("all");
  const [activeModuleNumber, setActiveModuleNumber] = useState<number>(1);

  const displayedModules =
    selectedPhase === "all"
      ? EXECUTIVE_MODULES
      : EXECUTIVE_MODULES.filter((m) => m.phase === selectedPhase);

  // Throttled scroll observer
  useEffect(() => {
    let ticking = false;
    let cardElements: (HTMLElement | null)[] = [];

    const updateCards = () => {
      cardElements = displayedModules.map((m) =>
        document.getElementById(`exec-module-card-${m.number}`)
      );
    };
    updateCards();

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          const threshold = 175;
          for (let i = cardElements.length - 1; i >= 0; i--) {
            const el = cardElements[i];
            if (el) {
              const top = el.getBoundingClientRect().top;
              if (top <= threshold) {
                const newNum = displayedModules[i].number;
                setActiveModuleNumber((prev) => (prev === newNum ? prev : newNum));
                break;
              }
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedModules]);

  const scrollToModule = (num: number) => {
    const el = document.getElementById(`exec-module-card-${num}`);
    if (el) {
      const headerOffset = 160;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveModuleNumber(num);
    }
  };

  const handlePrev = () => {
    const currentIdx = displayedModules.findIndex((m) => m.number === activeModuleNumber);
    if (currentIdx > 0) {
      scrollToModule(displayedModules[currentIdx - 1].number);
    }
  };

  const handleNext = () => {
    const currentIdx = displayedModules.findIndex((m) => m.number === activeModuleNumber);
    if (currentIdx < displayedModules.length - 1) {
      scrollToModule(displayedModules[currentIdx + 1].number);
    }
  };

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
    <div id="curriculum" className="relative">
      {/* ──────────────────────────────────────────────────────────────────────────
          PART 1: EXECUTIVE LIVE BRAND AUDIT CASES (Stacking Cards)
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F86104]" />
              Executive Growth Audits & Real Client Cases
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#182033] tracking-tight leading-[1.25] mb-4">
              Real Account Teardowns with Practicing CMOs
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
              Work on authentic business briefs alongside verified commercial partners like Dainik Jagran, Americanz Muscles, Ad2Lead Hub, and Balaji Marketing Experts. Scroll to experience each project stack into view.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto pb-16">
            {EXECUTIVE_LIVE_CASES.map((proj, idx) => (
              <div
                key={proj.number}
                id={`exec-live-project-${proj.number}`}
                className="sticky mb-12 sm:mb-20 last:mb-0 transition-shadow duration-300"
                style={{
                  top: `calc(110px + ${idx * 16}px)`,
                  zIndex: 10 + idx,
                }}
              >
                <div className="bg-white rounded-[26px] sm:rounded-[30px] border border-[#E2E8F0] shadow-[0_-8px_30px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_-8px_35px_rgba(0,0,0,0.08),0_20px_50px_rgba(0,0,0,0.1)] transition-shadow p-6 sm:p-9 md:p-11">
                  <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1.5">
                        <p
                          className="text-xs sm:text-sm font-extrabold uppercase tracking-widest"
                          style={{ color: proj.accentColor }}
                        >
                          CASE STUDY {proj.number}:
                        </p>
                        <span
                          className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border inline-flex items-center"
                          style={{
                            backgroundColor: proj.accentLight,
                            color: proj.accentColor,
                            borderColor: proj.accentBorder,
                          }}
                        >
                          {proj.partner}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#182033] tracking-tight leading-tight mb-4">
                        {proj.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-[#475569] mb-4">
                        <strong className="text-[#182033] font-bold">Scope:</strong>{" "}
                        {proj.duration}
                      </p>

                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#182033] mb-1.5">
                          Audit Focus:
                        </p>
                        <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-between h-full pt-1">
                      <div className="space-y-3.5 sm:space-y-4">
                        <p className="text-xs sm:text-sm font-bold text-[#182033] uppercase tracking-wider mb-2">
                          Key Deliverables:
                        </p>
                        {proj.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-[#94A3B8] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="text-sm sm:text-[15px] text-[#334155] leading-snug">
                              {step}
                            </span>
                          </div>
                        ))}

                        <div className="pt-2 flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: proj.accentLight,
                              color: proj.accentColor,
                            }}
                          >
                            <Target className="w-4 h-4" />
                          </div>
                          <span
                            className="text-sm sm:text-[15px] font-bold tracking-tight"
                            style={{ color: proj.accentColor }}
                          >
                            {proj.highlight}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#94A3B8] italic text-left md:text-right mt-6 md:mt-8">
                        *Optionally bring your own company ad account for confidential 1-on-1 audit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          PART 2: EXECUTIVE 6-MODULE STACKING SECTION (Scrollable Stacking Deck)
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-16 sm:py-24 border-t border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-[0.2em] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              12-WEEK WEEKEND CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#182033] tracking-tight leading-[1.25] mb-4">
              Curriculum Engineered for Fast Impact
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
              Every Sunday session focuses on frameworks, ad budgets, and AI workflows you can apply directly to your day job on Monday morning. Scroll to explore each module.
            </p>
          </div>

          {/* Sticky Phase Filter Tabs + Jumper Controls */}
          <div className="sticky top-20 sm:top-24 z-40 bg-[#FAF7F2]/95 backdrop-blur-md py-3 mb-8 border-y border-[#E8E6E2]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Filter pills */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                {PHASES.map((p) => {
                  const isSelected = selectedPhase === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedPhase(p.id);
                        if (p.id !== "all") {
                          const firstModInPhase = EXECUTIVE_MODULES.find((m) => m.phase === p.id);
                          if (firstModInPhase) {
                            setTimeout(() => scrollToModule(firstModInPhase.number), 50);
                          }
                        }
                      }}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#182033] text-white shadow-sm"
                          : "bg-white text-[#64748B] hover:text-[#182033] border border-[#E2E8F0]"
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>

              {/* Quick module indicator + navigation */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-xs font-bold text-[#64748B]">
                  Module <strong className="text-[#182033]">{String(activeModuleNumber).padStart(2, "0")}</strong> / {String(EXECUTIVE_MODULES.length).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    disabled={activeModuleNumber === displayedModules[0]?.number}
                    className="w-7 h-7 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#64748B] hover:text-[#182033] hover:border-[#182033] disabled:opacity-30 transition-all bg-white cursor-pointer"
                    aria-label="Previous module"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={
                      activeModuleNumber ===
                      displayedModules[displayedModules.length - 1]?.number
                    }
                    className="w-7 h-7 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#64748B] hover:text-[#182033] hover:border-[#182033] disabled:opacity-30 transition-all bg-white cursor-pointer"
                    aria-label="Next module"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stacking Cards Container for Modules */}
          <div className="relative max-w-4xl mx-auto pb-16">
            {displayedModules.map((mod) => {
              const theme = PHASE_THEMES[mod.phase] || PHASE_THEMES[1];

              return (
                <div
                  key={mod.number}
                  id={`exec-module-card-${mod.number}`}
                  className="sticky mb-10 sm:mb-16 last:mb-0 transition-shadow duration-300"
                  style={{
                    top: "154px",
                    zIndex: 10 + mod.number,
                  }}
                >
                  <div className="bg-white rounded-[26px] sm:rounded-[30px] border border-[#E2E8F0] shadow-[0_-6px_25px_rgba(0,0,0,0.06),0_14px_36px_rgba(0,0,0,0.08)] hover:shadow-[0_-6px_30px_rgba(0,0,0,0.08),0_18px_44px_rgba(0,0,0,0.1)] transition-shadow p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
                      {/* Left Column */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2.5 mb-2">
                          <p
                            className="text-xs sm:text-sm font-extrabold uppercase tracking-widest"
                            style={{ color: theme.text }}
                          >
                            MODULE {String(mod.number).padStart(2, "0")}:
                          </p>
                          {mod.badge && (
                            <span
                              className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border inline-flex items-center gap-1.5"
                              style={{
                                backgroundColor: theme.bg,
                                color: theme.text,
                                borderColor: theme.border,
                              }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                style={{ backgroundColor: theme.text }}
                              />
                              {mod.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#182033] tracking-tight leading-tight mb-3">
                          {mod.title}
                        </h3>

                        <p className="text-sm sm:text-[15px] text-[#475569] flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-[#F86104] flex-shrink-0" />
                          <span>
                            <strong className="text-[#182033] font-bold">Schedule:</strong>{" "}
                            {mod.duration}
                          </span>
                        </p>

                        <div className="mb-4">
                          <p className="text-xs sm:text-sm font-bold text-[#182033] mb-1.5">
                            Executive Focus:
                          </p>
                          <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                            {mod.description}
                          </p>
                        </div>

                        {/* Tools Pill Strip */}
                        {mod.tools && mod.tools.length > 0 && (
                          <div className="pt-3 border-t border-[#F1F5F9] mt-2">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-[#182033] mb-2">
                              Hands-On Tool Stack:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {mod.tools.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Target Roles */}
                        {mod.targetRoles && mod.targetRoles.length > 0 && (
                          <div className="pt-3 border-t border-[#F1F5F9] mt-2">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                              Prepares You For:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {mod.targetRoles.map((role) => (
                                <span
                                  key={role}
                                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FAF7F2] text-[#182033] border border-[#E8E6E2]"
                                >
                                  {role}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col justify-between h-full pt-1">
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-[#182033] uppercase tracking-wider mb-4">
                            What You Master:
                          </p>
                          <div className="space-y-3 sm:space-y-3.5">
                            {mod.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-3">
                                <CheckCircle2
                                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                                  style={{ color: theme.text }}
                                />
                                <span className="text-sm sm:text-[15px] text-[#334155] leading-snug">
                                  {topic}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practical Output */}
                        {mod.milestone && (
                          <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                  backgroundColor: theme.bg,
                                  color: theme.text,
                                }}
                              >
                                <Target className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                                  Tangible Output
                                </p>
                                <p
                                  className="text-sm font-bold leading-tight"
                                  style={{ color: theme.text }}
                                >
                                  {mod.milestone}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Bottom Tag */}
                        <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                          <span
                            className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                            style={{
                              backgroundColor: theme.bg,
                              color: theme.text,
                            }}
                          >
                            {mod.phaseName}
                          </span>
                          <span className="text-xs text-[#94A3B8]">
                            Module {mod.number} of {EXECUTIVE_MODULES.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          PART 3: BONUS SUPPORT & SYLLABUS DOWNLOAD CTA
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#EBE3D5] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-gradient-to-r from-[#182033] to-[#23272E] rounded-3xl p-6 sm:p-9 text-white relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 bottom-0 w-56 bg-[#F86104]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F89520] mb-2 inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#F89520]" />
                Executive Transition & Career Acceleration
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Everything You Need to Command Senior Marketing Compensation
              </h3>
              <p className="text-sm text-white/80 max-w-2xl mb-6">
                Designed specifically for ambitious working professionals. Every weekend equips you with real assets, confidential audits, and C-suite positioning to accelerate your career trajectory.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                {EXECUTIVE_BONUS_HIGHLIGHTS.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#F89520] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#FFF7F0] border border-[#FED7AA] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#182033] text-base">
                Want the detailed 12-week weekend syllabus?
              </p>
              <p className="text-sm text-[#64748B] mt-0.5">
                Download the complete brochure with weekly schedule, live teardowns list, faculty profiles, and fee structure.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#apply"
                onClick={handleApplyClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F86104] to-[#DA3A0A] text-white font-bold text-sm shadow-[0_6px_20px_rgba(248,97,4,0.35)] hover:shadow-[0_8px_28px_rgba(248,97,4,0.45)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </a>
              <a
                href="#apply"
                onClick={handleApplyClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#182033] text-white font-bold text-sm hover:bg-[#23272E] transition-all cursor-pointer"
              >
                Apply for Batch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
