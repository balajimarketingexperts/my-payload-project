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
  Award,
  Layers,
  Briefcase,
  Users,
  TrendingUp,
  Cpu,
  BarChart3,
  Building,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

// ─── Phase Definitions for 2-Year MBA / PGP Progression ──────────────────────
const PHASES = [
  { id: "all", label: "All 7 Modules", count: 7 },
  { id: 1, label: "Semester 1: Brand & Insights", count: 2 },
  { id: 2, label: "Semester 2: Sales, B2B & GTM", count: 2 },
  { id: 3, label: "Semester 3: AI & Analytics", count: 2 },
  { id: 4, label: "Semester 4: Capstone & Placements", count: 1 },
];

const PHASE_THEMES: Record<number, { text: string; bg: string; border: string }> = {
  1: { text: "#F86104", bg: "#FFF7ED", border: "#FED7AA" },
  2: { text: "#0284C7", bg: "#F0F9FF", border: "#BAE6FD" },
  3: { text: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  4: { text: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
};

// ─── 7 Core MBA Marketing Modules ─────────────────────────────────────────────
const MBA_MODULES = [
  {
    number: 1,
    title: "Strategic Marketing and Brand Management",
    duration: "180 Hours · Semester 1",
    phase: 1,
    phaseName: "Semester 1 · Core Strategy",
    badge: "Core Foundation",
    description:
      "Build enduring brand equity from the ground up using Kotler frameworks, competitive white space mapping, and consumer psychology. Master brand architecture and strategic brand positioning.",
    topics: [
      "Market Segmentation, Targeting & Positioning (STP Framework)",
      "Brand Architecture & Brand Portfolio Management",
      "Brand Identity, Positioning Statements & Equity Measurement",
      "Competitive Moats & Category Manager Market Share Analysis",
    ],
    tools: ["Brand Audit Matrix", "Nielsen Reports", "Miro", "Kotler Case Packs"],
    milestone: "Full Brand Audit & Positioning Blueprint for a Live Brand",
    targetRoles: ["Brand Manager", "Category Manager", "Product Marketing Specialist"],
  },
  {
    number: 2,
    title: "Sales, Distribution and Channel Strategy",
    duration: "200 Hours · Semester 1",
    phase: 1,
    phaseName: "Semester 1 · Commercial Sales",
    badge: "Commercial Execution",
    description:
      "Master physical retail distribution, modern trade, quick-commerce fulfillment, and high-velocity B2B sales pipelines with distributor economics and channel margins.",
    topics: [
      "Omnichannel Distribution Models & FMCG Channel Partner Economics",
      "Trade Marketing, Retail Shelf-Share & Point-of-Sale (POS) Strategy",
      "Sales Development Representative (SDR) & Business Development Representative (BDR) Outreach",
      "Area Sales Executive Territory Mapping, Quota Planning & Pipeline Review",
    ],
    tools: ["Salesforce CRM", "HubSpot Sales", "Apollo.io", "Excel Territory Models"],
    milestone: "Regional Route-To-Market & Distributor Margin Architecture",
    targetRoles: [
      "Sales Development Representative (SDR)",
      "Business Development Representative (BDR)",
      "Area Sales Executive",
    ],
  },
  {
    number: 3,
    title: "Consumer Behaviour and Market Research",
    duration: "160 Hours · Semester 2",
    phase: 2,
    phaseName: "Semester 2 · Insights & Research",
    badge: "Consumer Insights",
    description:
      "Decode consumer purchase decisions, psychographic personas, and behavioral economics. Conduct qualitative ethnographic studies and quantitative survey analyses for commercial go-to-market strategies.",
    topics: [
      "Consumer Decision Journeys, Cognitive Biases & Purchase Triggers",
      "Quantitative & Qualitative Market Research Methodologies",
      "Focus Groups, In-Depth CXO Interviews & Nielsen Data Teardowns",
      "Customer Persona Blueprinting & Value Proposition Design",
    ],
    tools: ["Qualtrics", "Typeform Pro", "SPSS / Excel Data", "UserTesting"],
    milestone: "Primary Market Research Survey & Consumer Persona Deck",
    targetRoles: ["Consumer Insights Lead", "Market Research Analyst", "Category Manager"],
  },
  {
    number: 4,
    title: "Digital and Performance Marketing",
    duration: "220 Hours · Semester 2",
    phase: 2,
    phaseName: "Semester 2 · Performance & Media",
    badge: "Live Paid Ad Spend",
    isLive: true,
    description:
      "Manage high-converting paid acquisition and organic search funnels with live ad budgets. Architect full-funnel customer acquisition systems across Meta, Google, and enterprise B2B channels.",
    topics: [
      "Meta Ads (Facebook & Instagram) Scaling with Live Budgets",
      "Google Search, Shopping & Performance Max PPC Campaigns",
      "Inbound, Outbound, B2B and Account-Based Marketing Roles",
      "Full-Funnel Lead Generation Manager Funnels & Conversion Rate Optimization",
    ],
    tools: ["Meta Ads Manager", "Google Ads", "Semrush", "Mailchimp", "GA4"],
    milestone: "Live Campaign Execution with Real Ad Budget & Measured ROAS",
    targetRoles: [
      "Lead Generation Manager",
      "Performance Marketer",
      "Account-Based Marketing Specialist",
    ],
  },
  {
    number: 5,
    title: "AI-Integrated Marketing",
    duration: "180 Hours · Semester 3",
    phase: 3,
    phaseName: "Semester 3 · Generative AI Stack",
    badge: "Next-Gen AI Leadership",
    description:
      "Embed cutting-edge generative AI directly into market research, creative production, ad copywriting, and predictive media optimization to scale campaign velocity.",
    topics: [
      "AI for Rapid Consumer & Competitor Intelligence Gathering",
      "Generative Copy, High-Converting Visuals & Video Ad Pipelines",
      "Automated Campaign Optimization Loops & Real-Time Bid Tuning",
      "Customer Sentiment Analysis & Predictive Churn Modeling",
    ],
    tools: ["ChatGPT Plus", "Midjourney v6", "Claude 3.5 Sonnet", "Perplexity Pro", "Jasper AI", "AdCopy AI"],
    milestone: "End-to-End AI-Generated Multi-Platform Ad Campaign Suite",
    targetRoles: ["AI Marketing Strategist", "Growth Marketing Lead", "Digital Campaign Manager"],
  },
  {
    number: 6,
    title: "Marketing Analytics (Excel, Dashboards & P&L)",
    duration: "190 Hours · Semester 3",
    phase: 3,
    phaseName: "Semester 3 · Growth Analytics",
    badge: "Boardroom Analytics",
    description:
      "Turn raw campaign metrics into executive-ready growth playbooks and marketing P&L dashboards. Master customer acquisition cost (CAC), customer lifetime value (LTV), and multi-touch attribution.",
    topics: [
      "Advanced Excel Financial Modeling & Marketing Budget Sensitivity",
      "Google Analytics 4 (GA4) Custom Funnels & Server-Side Tagging",
      "Looker Studio Real-Time Executive KPI & Revenue Dashboards",
      "Customer Acquisition Cost (CAC), LTV Modeling & Media Attribution",
    ],
    tools: ["Microsoft Excel", "Google Looker Studio", "GA4", "Power BI", "SQL Basics"],
    milestone: "Boardroom-Ready Executive KPI & Revenue P&L Dashboard",
    targetRoles: ["Marketing Analytics Manager", "Revenue Operations Lead", "Growth Analyst"],
  },
  {
    number: 7,
    title: "Core Management: Finance, Operations, HR & Capstone",
    duration: "240 Hours · Semester 4",
    phase: 4,
    phaseName: "Semester 4 · Leadership & Capstone",
    badge: "Executive Leadership",
    description:
      "Develop holistic enterprise leadership acumen expected of business heads. Covers corporate finance, supply chain, and organizational leadership for client-facing account teams, capped by a CXO boardroom defense.",
    topics: [
      "Corporate Finance & Strategic Marketing Budget Allocation",
      "Supply Chain, Quick-Commerce Fulfilment & Operations Strategy",
      "Account Manager & Client Relationship Manager Enterprise Retention",
      "Partnerships Manager Ecosystems, Co-Marketing & Strategic Alliances",
    ],
    tools: ["Boardroom Pitch Decks", "P&L Projections", "Contract Modeling", "CRM Workflows"],
    milestone: "12-Week CXO Capstone Project Defense & Placement Drives",
    targetRoles: [
      "Account Manager",
      "Client Relationship Manager",
      "Partnerships Manager",
      "Category Manager",
    ],
  },
];

// ─── 4 MBA Live Projects & CXO Cases ─────────────────────────────────────────
const MBA_LIVE_PROJECTS = [
  {
    number: 1,
    title: "Regional Brand Strategy & Media Penetration Project",
    partner: "Dainik Jagran & Regional Media Group",
    duration: "6 Weeks · Live Brand Case",
    accentColor: "#0284C7", // Cyan / Sky Blue
    accentLight: "#E0F2FE",
    accentBorder: "#BAE6FD",
    description:
      "Conduct a comprehensive brand positioning audit and audience expansion strategy for regional North India markets. Evaluate circulation growth, advertising rate cards, and multi-edition digital content syndication.",
    steps: [
      "Regional Market Audit & Competitive Positioning Gap Analysis",
      "Audience Persona Segmentation & Brand Architecture Blueprint",
      "Multi-Channel Media Plan & Localized Content Strategy",
      "Final Strategic Presentation to Senior Regional Media Directors",
    ],
    highlight: "Presentations to Senior Brand Directors & CXOs",
  },
  {
    number: 2,
    title: "Retail Distribution & B2B Go-To-Market Plan",
    partner: "Americanz Muscles (Sports & Nutrition)",
    duration: "6 Weeks · Distribution Case",
    accentColor: "#EA580C", // Orange
    accentLight: "#FFEDD5",
    accentBorder: "#FED7AA",
    description:
      "Build a scalable national distribution blueprint for sports nutrition. Formulate distributor margin structures, retail shelf-share tactics, territory mapping for Area Sales Executives, and quick-commerce slotting.",
    steps: [
      "Retail Shelf-Space Audit & Distributor Economics Model",
      "Area Sales Executive Territory Mapping & Pipeline Cadence",
      "B2B Sales Development Representative (SDR) Outreach Strategy",
      "Modern Trade & Quick-Commerce Channel Expansion Blueprint",
    ],
    highlight: "Real Route-to-Market Margin Deck Evaluation",
  },
  {
    number: 3,
    title: "AI-Driven High-Ticket Lead Generation & ROAS Optimization",
    partner: "Ad2Lead Hub & Balaji Marketing Experts",
    duration: "8 Weeks · Real Ad Spend",
    accentColor: "#7C3AED", // Violet
    accentLight: "#EDE9FE",
    accentBorder: "#DDD6FE",
    description:
      "Deploy generative AI tools (ChatGPT, Midjourney, Claude) to script, design, and run live A/B tested ad campaigns for B2B client acquisition with measured return on ad spend (ROAS).",
    steps: [
      "AI Creative Workflow Setup & High-Converting Copy Generation",
      "Meta Ads & Google Search Campaign Launch with Real Budgets",
      "Inbound, Outbound, B2B and Account-Based Marketing Roles Alignment",
      "Conversion Rate Optimization & Executive CAC Reporting",
    ],
    highlight: "Live Campaign Spend with Measured Conversion ROAS",
  },
  {
    number: 4,
    title: "Comprehensive CXO Capstone & Boardroom Thesis Defense",
    partner: "150+ Corporate Placement Partners",
    duration: "12 Weeks · Boardroom Defense",
    accentColor: "#059669", // Emerald
    accentLight: "#D1FAE5",
    accentBorder: "#A7F3D0",
    description:
      "Term-culminating boardroom thesis defense presenting a 360° commercial marketing and sales P&L plan backed by live campaign proofs, channel economics, and financial modeling to campus recruitment CXOs.",
    steps: [
      "360° Business Model & Go-to-Market Strategy Formulation",
      "Financial P&L Modeling, CAC/LTV Projections & Risk Analysis",
      "Career Support and Mock Interviews with Placement Accountability",
      "Campus Placement Recruitment Drives with 150+ Hiring Partners",
    ],
    highlight: "Boardroom Defense with CXO Jury & Placement Offers",
  },
];

// ─── Bonus & Placement Support Highlights ────────────────────────────────────
const BONUS_CAREER_HIGHLIGHTS = [
  "12-Week Mandatory Corporate Internship with Stipend",
  "1-on-1 Career Support and Mock Interviews with CXOs",
  "Placement Accountability with 150+ Hiring Partners",
  "Job-Ready Skills Portfolio & Verified Campaign Proofs",
  "Post Graduate Program (PGP) in Sales and Marketing Credentials",
  "B-School / Alternative to MBA with 4x Better ROI than MBA",
  "Dedicated Sales and Marketing Program with Placements Guarantee",
  "High-Impact Sales and Marketing Course Curriculum",
];

export default function MbaModulesProjectsSection() {
  const [selectedPhase, setSelectedPhase] = useState<string | number>("all");
  const [activeModuleNumber, setActiveModuleNumber] = useState<number>(1);

  // Filter modules according to the selected phase
  const displayedModules =
    selectedPhase === "all"
      ? MBA_MODULES
      : MBA_MODULES.filter((m) => m.phase === selectedPhase);

  // Track active visible module when scrolling (RAF throttled)
  useEffect(() => {
    let ticking = false;
    let cardElements: (HTMLElement | null)[] = [];

    const updateCards = () => {
      cardElements = displayedModules.map((m) =>
        document.getElementById(`mba-module-card-${m.number}`)
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
    const el = document.getElementById(`mba-module-card-${num}`);
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
          PART 1: MBA LIVE PROJECTS & CXO CASES (Stacking Cards)
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F86104]" />
              CXO Live Cases & Hands-On Projects
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#182033] tracking-tight leading-[1.25] mb-4">
              Gain Real Experience with Live Projects Led by CXOs
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
              Work on authentic business briefs alongside verified commercial partners like Dainik Jagran, Americanz Muscles, Ad2Lead Hub, and Balaji Marketing Experts. Scroll to experience each project stack into view.
            </p>
          </div>

          {/* Stacking Cards Container for Live Projects */}
          <div className="relative max-w-4xl mx-auto pb-16">
            {MBA_LIVE_PROJECTS.map((proj, idx) => (
              <div
                key={proj.number}
                id={`mba-live-project-${proj.number}`}
                className="sticky mb-12 sm:mb-20 last:mb-0 transition-shadow duration-300"
                style={{
                  top: `calc(110px + ${idx * 16}px)`,
                  zIndex: 10 + idx,
                }}
              >
                {/* White card container with rounded-3xl and soft elevated drop shadow */}
                <div className="bg-white rounded-[26px] sm:rounded-[30px] border border-[#E2E8F0] shadow-[0_-8px_30px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_-8px_35px_rgba(0,0,0,0.08),0_20px_50px_rgba(0,0,0,0.1)] transition-shadow p-6 sm:p-9 md:p-11">
                  <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
                    {/* Left Column: Project Details */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1.5">
                        <p
                          className="text-xs sm:text-sm font-extrabold uppercase tracking-widest"
                          style={{ color: proj.accentColor }}
                        >
                          PROJECT {proj.number}:
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
                        <strong className="text-[#182033] font-bold">Duration:</strong>{" "}
                        {proj.duration}
                      </p>

                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#182033] mb-1.5">
                          Project Brief & Scope:
                        </p>
                        <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Execution Steps + Milestone */}
                    <div className="flex flex-col justify-between h-full pt-1">
                      <div className="space-y-3.5 sm:space-y-4">
                        <p className="text-xs sm:text-sm font-bold text-[#182033] uppercase tracking-wider mb-2">
                          Execution Milestones:
                        </p>
                        {proj.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-[#94A3B8] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="text-sm sm:text-[15px] text-[#334155] leading-snug">
                              {step}
                            </span>
                          </div>
                        ))}

                        {/* Highlighted item with target icon */}
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

                      {/* Disclaimer at bottom right */}
                      <p className="text-xs text-[#94A3B8] italic text-left md:text-right mt-6 md:mt-8">
                        *Live corporate case studies evaluated with executive mentors
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
          PART 2: MBA 7-MODULE STACKING SECTION (Scrollable Stacking Deck)
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-16 sm:py-24 border-t border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-[0.2em] mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              MBA & PGP IN SALES & MARKETING · CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#182033] tracking-tight leading-[1.25] mb-4">
              What You’ll Study and Build
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
              An industry-accredited AI-led sales and marketing program designed for ambitious learners to learn sales and marketing, master Kotler brand fundamentals, execute retail sales and B2B pipelines, and deploy cutting-edge AI tools.
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
                          const firstModInPhase = MBA_MODULES.find((m) => m.phase === p.id);
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
                  Module <strong className="text-[#182033]">{String(activeModuleNumber).padStart(2, "0")}</strong> / {String(MBA_MODULES.length).padStart(2, "0")}
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

          {/* Stacking Cards Container for MBA Modules */}
          <div className="relative max-w-4xl mx-auto pb-16">
            {displayedModules.map((mod) => {
              const theme = PHASE_THEMES[mod.phase] || PHASE_THEMES[1];

              return (
                <div
                  key={mod.number}
                  id={`mba-module-card-${mod.number}`}
                  className="sticky mb-10 sm:mb-16 last:mb-0 transition-shadow duration-300"
                  style={{
                    top: "154px",
                    zIndex: 10 + mod.number,
                  }}
                >
                  {/* White card container with rounded-3xl and elevated shadow */}
                  <div className="bg-white rounded-[26px] sm:rounded-[30px] border border-[#E2E8F0] shadow-[0_-6px_25px_rgba(0,0,0,0.06),0_14px_36px_rgba(0,0,0,0.08)] hover:shadow-[0_-6px_30px_rgba(0,0,0,0.08),0_18px_44px_rgba(0,0,0,0.1)] transition-shadow p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
                      {/* Left Column: Module Details */}
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
                            <strong className="text-[#182033] font-bold">Duration:</strong>{" "}
                            {mod.duration}
                          </span>
                        </p>

                        <div className="mb-4">
                          <p className="text-xs sm:text-sm font-bold text-[#182033] mb-1.5">
                            Module Focus:
                          </p>
                          <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                            {mod.description}
                          </p>
                        </div>

                        {/* Tools Pill Strip */}
                        {mod.tools && mod.tools.length > 0 && (
                          <div className="pt-3 border-t border-[#F1F5F9] mt-2">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-[#182033] mb-2">
                              Hands-On Tools & Frameworks:
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

                        {/* Target Roles Strip */}
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

                      {/* Right Column: Topics Checklist & Milestones */}
                      <div className="flex flex-col justify-between h-full pt-1">
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-[#182033] uppercase tracking-wider mb-4">
                            What You'll Learn & Master:
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

                        {/* Highlight Milestone / Practical Deliverable */}
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
                                  Practical Output
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

                        {/* Phase/Semester Tag indicator */}
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
                            Module {mod.number} of {MBA_MODULES.length}
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
          PART 3: BONUS CAREER SUPPORT & SYLLABUS DOWNLOAD CTA
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#EBE3D5] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Bonus Career Support Card */}
          <div className="bg-gradient-to-r from-[#182033] to-[#23272E] rounded-3xl p-6 sm:p-9 text-white relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 bottom-0 w-56 bg-[#F86104]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F89520] mb-2 inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#F89520]" />
                Placement Support & Career Launchpad
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Career Support and Mock Interviews with Placement Accountability
              </h3>
              <p className="text-sm text-white/80 max-w-2xl mb-6">
                Designed as a premier B-school / alternative to MBA offering 4x better ROI than MBA. Graduate with verifiable job-ready skills, corporate internships, and executive recruitment access across 150+ hiring partners.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                {BONUS_CAREER_HIGHLIGHTS.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#F89520] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Full Syllabus CTA Strip */}
          <div className="bg-[#FFF7F0] border border-[#FED7AA] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#182033] text-base">
                Want the detailed 2-year MBA curriculum syllabus?
              </p>
              <p className="text-sm text-[#64748B] mt-0.5">
                Download the complete brochure with weekly schedules, case studies, mentor list, and fee structure.
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
                Apply for Cohort
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
