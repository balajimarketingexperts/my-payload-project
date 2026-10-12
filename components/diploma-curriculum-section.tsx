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
} from "lucide-react";

// ─── All 24 BMI Modules — Enriched with industry skills & marketing terms ───
const MODULES = [
  {
    number: 1,
    title: "Marketing Foundation & Brand Strategy",
    duration: "8 Hours",
    phase: 1,
    phaseName: "Foundations",
    description:
      "Build your marketing bedrock. Understand what marketing truly means, traditional vs digital marketing, brand strategy, brand positioning, and consumer personas to craft winning marketing briefs.",
    topics: [
      "What is Marketing & 4Ps",
      "Traditional vs Digital Marketing",
      "Brand Strategy & Brand Positioning",
      "Consumer Personas & Marketing Brief",
    ],
  },
  {
    number: 2,
    title: "Digital Marketing Ecosystem & Media Planning",
    duration: "10 Hours",
    phase: 1,
    phaseName: "Foundations",
    description:
      "Map the entire digital landscape—paid, organic and earned media. Learn how to build an omnichannel media plan, channel strategy, and full-funnel media strategy aligned with your go-to-market strategy.",
    topics: [
      "Types of Digital Channels",
      "Paid vs Organic vs Earned Media",
      "Digital Marketing Funnel (Top, Middle, Bottom)",
      "Media Plan & Go-To-Market Strategy",
    ],
  },
  {
    number: 3,
    title: "Digital Consumer Behaviour",
    duration: "8 Hours",
    phase: 1,
    phaseName: "Foundations",
    description:
      "Decode how modern consumers think, search and buy online. Create detailed consumer personas and buyer journeys to craft targeting and ad copy that resonates across touchpoints.",
    topics: [
      "Buyer Persona & Consumer Personas",
      "Customer Journey Mapping",
      "Psychology of Online Buying",
      "Consumer Decision Process",
    ],
  },
  {
    number: 4,
    title: "Digital Visibility Strategy & Brand Launch",
    duration: "10 Hours",
    phase: 1,
    phaseName: "Foundations",
    description:
      "Learn how to make your brand discoverable across platforms. Analyse competitor visibility, build brand launch plans, multi-platform brand marketing, and establish organic social presence.",
    topics: [
      "Building Online Presence",
      "Brand Marketing & Brand Positioning",
      "Competitor Visibility Analysis",
      "Brand Launch & Multi-Platform Strategy",
    ],
  },
  {
    number: 5,
    title: "Online Lead Strategy & Funnel Optimization",
    duration: "10 Hours",
    phase: 1,
    phaseName: "Foundations",
    description:
      "Go beyond awareness. Design lead magnets, funnels, granular ad groups, and scoring systems that turn strangers into qualified leads with campaign optimization and CRM tracking.",
    topics: [
      "Lead Generation Fundamentals",
      "Lead Magnets & Ad Groups Targeting",
      "Lead Scoring & Campaign Optimization",
      "CRM & Lead Tracking Tools",
    ],
  },
  {
    number: 6,
    title: "Data Visualization, Dashboards & Excel Analysis",
    duration: "8 Hours",
    phase: 1,
    phaseName: "Foundations",
    description:
      "Turn raw numbers into strategic insights. Build live marketing dashboards in Google Looker Studio, master Excel & data analysis, and build Excel reporting models for executive decision making.",
    topics: [
      "Marketing Dashboards in Looker Studio",
      "Excel & Data Analysis",
      "Excel Reporting & Performance Reports",
      "Analytics & Data Interpretation",
    ],
  },
  {
    number: 7,
    title: "Video Marketing for Business",
    duration: "10 Hours",
    phase: 2,
    phaseName: "Content & Web",
    description:
      "Video is the #1 content format. Learn how to script short-form video for Instagram Reels and YouTube Shorts, write scriptwriting briefs for ads, and distribute video content to scale brand reach.",
    topics: [
      "Video Content Strategy",
      "Instagram Reels & YouTube Shorts",
      "Scriptwriting for Ads & Short-Form Video",
      "Video SEO & Distribution",
    ],
  },
  {
    number: 8,
    title: "Building Your Business Website (WordPress & Shopify)",
    duration: "12 Hours",
    phase: 2,
    phaseName: "Content & Web",
    description:
      "Your website is your 24/7 salesperson. Plan its structure, build on WordPress and Shopify for Ecommerce & Quick Commerce, apply UX fundamentals and optimize for conversion rate optimization.",
    topics: [
      "Website Planning & Structure",
      "WordPress & Shopify Stores",
      "Ecommerce & Quick Commerce Setup",
      "Speed & Conversion Rate Optimization",
    ],
  },
  {
    number: 9,
    title: "Social Media Marketing & Organic Strategy",
    duration: "10 Hours",
    phase: 2,
    phaseName: "Content & Web",
    description:
      "Optimize profiles and execute an organic social strategy that grows followers. Master Social Media Marketing across LinkedIn, Facebook, Instagram, and YouTube.",
    topics: [
      "Social Media Marketing Strategy",
      "Organic Social Strategy on LinkedIn",
      "Facebook & Instagram Optimization",
      "Content Calendars & Engagement",
    ],
  },
  {
    number: 10,
    title: "Landing Page & Conversion Rate Optimization (CRO)",
    duration: "8 Hours",
    phase: 2,
    phaseName: "Content & Web",
    description:
      "A great ad means nothing without a landing page that converts. Run A/B testing on creatives and ad copy, write high-impact CTAs, and apply Conversion Rate Optimization (CRO) frameworks.",
    topics: [
      "Conversion Rate Optimization (CRO)",
      "A/B Testing & Ad Copy Experiments",
      "Creatives, Copywriting & CTAs",
      "High-Converting Landing Pages",
    ],
  },
  {
    number: 11,
    title: "Meta Ads (Facebook and Instagram)",
    duration: "15 Hours (& 15 Days Live Campaign)",
    phase: 2,
    phaseName: "Content & Web",
    isLive: true,
    description:
      "Run live paid marketing on Meta with real budgets. From AI-powered audience targeting, insertion orders, and creative writing to bidding strategy, ad groups, and retargeting.",
    topics: [
      "Meta Ads Manager & Bidding Strategy",
      "AI-Powered Audience Targeting",
      "Ad Groups, Creatives & Ad Copy",
      "Insertion Orders & Campaign Optimization",
    ],
  },
  {
    number: 12,
    title: "Search Engine Optimization — SEO",
    duration: "15 Hours",
    phase: 2,
    phaseName: "Content & Web",
    description:
      "Master on-page SEO, technical SEO, and backlink audit to rank #1 on Google. Target featured snippets, optimize SEO blogs, and dominate local search with Google Business Profile.",
    topics: [
      "On-Page SEO & Technical SEO",
      "Backlink Audit & Semrush Tools",
      "Featured Snippets & SEO Blogs",
      "Local SEO & Google Business Profile",
    ],
  },
  {
    number: 13,
    title: "Web Analytics & Google Analytics 4",
    duration: "10 Hours",
    phase: 3,
    phaseName: "Ads & Analytics",
    description:
      "Set up GA4 from scratch, master Google Analytics traffic reporting, configure conversion tracking, and build monthly Excel reporting dashboards for performance attribution.",
    topics: [
      "Google Analytics 4 (GA4) Setup",
      "Traffic Source & Attribution Analysis",
      "Goal & Conversion Tracking",
      "Excel Reporting & Dashboards",
    ],
  },
  {
    number: 14,
    title: "Google Search Ads & Advanced Google Ads (SEM)",
    duration: "15 Hours (& 15 Days Live Campaign)",
    phase: 3,
    phaseName: "Ads & Analytics",
    isLive: true,
    description:
      "Run live Search Engine Marketing (SEM) and PPC campaigns. Master Google Search Ads, Advanced Google Ads, negative keywords, search term analysis, quality score, and bidding strategy.",
    topics: [
      "Google Search Ads & SEM",
      "Advanced Google Ads Campaigns",
      "Negative Keywords & Search Term Analysis",
      "Bidding Strategy & Quality Score",
    ],
  },
  {
    number: 15,
    title: "Display & Programmatic Advertising (DV360 & CM360)",
    duration: "8 Hours",
    phase: 3,
    phaseName: "Ads & Analytics",
    description:
      "Design banner creatives and deploy programmatic display media across Google Display Network and enterprise DSPs like DV360 and CM360 with advanced audience targeting.",
    topics: [
      "Programmatic Advertising Overview",
      "DV360 & CM360 Ad Servers",
      "Display Ad Targeting & Retargeting",
      "Banner Creatives & Media Buying",
    ],
  },
  {
    number: 16,
    title: "Video Advertising (YouTube Ads & Shorts)",
    duration: "10 Hours",
    phase: 3,
    phaseName: "Ads & Analytics",
    description:
      "Launch YouTube video ad campaigns across skippable, bumper, and YouTube Shorts formats. Learn audience targeting, bidding strategy, and campaign optimization for high ROAS.",
    topics: [
      "YouTube Ads & Shorts Setup",
      "Skippable & Bumper Ad Formats",
      "Video Targeting & Bidding Strategy",
      "Performance Metrics & Optimization",
    ],
  },
  {
    number: 17,
    title: "Remarketing, Retargeting & Brand Recall",
    duration: "8 Hours",
    phase: 3,
    phaseName: "Ads & Analytics",
    description:
      "Set up pixels, custom audiences, and dynamic retargeting ads to re-engage middle- and bottom-of-funnel users who didn't convert, boosting brand recall and ROAS.",
    topics: [
      "Pixel & Audience Setup",
      "Dynamic Remarketing Ads",
      "Funnel Retargeting Strategy",
      "Brand Recall & Retention",
    ],
  },
  {
    number: 18,
    title: "Email Marketing & Automation Funnels",
    duration: "10 Hours",
    phase: 3,
    phaseName: "Ads & Analytics",
    description:
      "Build an active subscriber list, set up automated drip campaigns, and write high-open ad copy and subject lines. Optimize click rates and nurture customer lifecycles.",
    topics: [
      "Email List Building",
      "Automation & Drip Campaigns",
      "Subject Lines, Ad Copy & Copywriting",
      "Open & Click Rate Optimization",
    ],
  },
  {
    number: 19,
    title: "Inbound Marketing & Lead Nurturing",
    duration: "8 Hours",
    phase: 4,
    phaseName: "Growth & AI",
    description:
      "Shift from interruption to attraction. Synergise SEO with content strategy, map the buyer funnel (top, middle, bottom), and build automated lead nurturing engines.",
    topics: [
      "Attract-Engage-Delight Framework",
      "Content Strategy for Inbound",
      "SEO + Content Synergy",
      "Lead Nurturing Techniques",
    ],
  },
  {
    number: 20,
    title: "Content Marketing, Writing & Copywriting",
    duration: "8 Hours",
    phase: 4,
    phaseName: "Growth & AI",
    description:
      "Master Content Marketing, Content Writing, and Copywriting. Learn to produce data-backed content briefs, write high-ranking SEO blogs, and leverage generative AI for content production.",
    topics: [
      "Content Marketing & Strategy",
      "Content Writing & Copywriting",
      "Content Briefs & SEO Blogs",
      "Generative AI for Content",
    ],
  },
  {
    number: 21,
    title: "Blogging, Adsense & Affiliate Marketing",
    duration: "10 Hours",
    phase: 4,
    phaseName: "Growth & AI",
    description:
      "Start and monetize an affiliate blog from scratch. Earn through Google Adsense and affiliate networks, applying SEO blogs and listing optimization to scale organic traffic.",
    topics: [
      "Starting & Growing a Blog",
      "Monetization via Google Adsense",
      "Affiliate Marketing Basics",
      "Content Promotion & SEO Blogs",
    ],
  },
  {
    number: 22,
    title: "Selling on Amazon & Ecommerce Marketplaces",
    duration: "8 Hours",
    phase: 4,
    phaseName: "Growth & AI",
    description:
      "Set up and scale storefronts for Ecommerce & Quick Commerce. Master Amazon Ads, listing optimization, product ad groups, and order inventory management.",
    topics: [
      "Ecommerce & Quick Commerce Accounts",
      "Product Listing Optimization",
      "Amazon Ads & Sponsored Brands",
      "Inventory & Order Management",
    ],
  },
  {
    number: 23,
    title: "Freelancing, Client Servicing & Agency Building",
    duration: "10 Hours",
    phase: 4,
    phaseName: "Growth & AI",
    description:
      "Graduate career-ready as a Media Planner, Account Executive, or agency founder. Learn client pitching, pricing, marketing briefs, and scaling from solo freelancer to agency team.",
    topics: [
      "Freelance Platforms & Pricing",
      "Client Pitches & Marketing Briefs",
      "Building Your Agency Portfolio",
      "Client Servicing & Account Management",
    ],
  },
  {
    number: 24,
    title: "AI-Powered Marketing, LLM & Generative Engine Optimization",
    duration: "12 Hours",
    phase: 4,
    phaseName: "Growth & AI",
    description:
      "Stay ahead with modern AI. Master LLM Optimization, Generative Engine Optimization (GEO), Answer Engine Optimization, AI Prompt Engineering, ChatGPT, and Google AI Overviews.",
    topics: [
      "LLM Optimization & AI Overviews",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "AI Prompt Engineering & ChatGPT",
    ],
  },
];

// ─── 4 BMI Live Projects — Enriched with industry skills ──────────────────────
const LIVE_PROJECTS = [
  {
    number: 1,
    title: "Meta Ads (Facebook and Instagram)",
    duration: "15 Hours (& 15 Days of Live Campaign)",
    accentColor: "#0284C7", // Cyan / Sky Blue
    accentLight: "#E0F2FE",
    accentBorder: "#BAE6FD",
    description:
      "Execute an end-to-end paid marketing campaign on Meta with actual budgets. Build complete media plans, define AI-powered audience targeting, design ad creatives and ad copy, manage insertion orders, and optimize bidding strategy to hit target ROAS.",
    steps: [
      "Marketing Brief & Target Audience Research",
      "Media Plan & Ad Creative Strategy",
      "Live Campaign Launch with Real Ad Spend",
      "A/B Testing & Campaign Optimization",
    ],
    highlight: "Presentations and Mock Interviews",
  },
  {
    number: 2,
    title: "Google Search Ads & Advanced Google Ads (SEM)",
    duration: "15 Hours (& 15 Days of Live Campaign)",
    accentColor: "#EA580C", // Orange
    accentLight: "#FFEDD5",
    accentBorder: "#FED7AA",
    description:
      "Set up, run, and optimize live PPC search campaigns on Google Ads. Conduct search term analysis, build negative keywords lists, structure high-performing ad groups, write responsive ad copy, and maximize quality score on real client catalogues.",
    steps: [
      "Keyword Research & Search Term Analysis",
      "Negative Keywords & Bidding Strategy Setup",
      "Live PPC Campaign Launch with Real Budget",
      "Conversion Rate Optimization & Quality Score",
    ],
    highlight: "Presentations and Mock Interviews",
  },
  {
    number: 3,
    title: "SEO Live Audit, Technical SEO & Rankings",
    duration: "12 Hours",
    accentColor: "#059669", // Emerald
    accentLight: "#D1FAE5",
    accentBorder: "#A7F3D0",
    description:
      "Conduct a comprehensive on-page SEO, technical SEO, and backlink audit for an active website. Uncover high-intent keyword gaps with Semrush, optimize for featured snippets and Google AI Overviews, and deliver measurable organic visibility gains.",
    steps: [
      "On-Page SEO & Technical SEO Audit",
      "Backlink Audit & Competitive Gap Analysis",
      "Featured Snippets & Content Brief Optimization",
      "Google Business Profile & Local SEO Setup",
    ],
    highlight: "Rankings Report & Mentor Review",
  },
  {
    number: 4,
    title: "Email Drip Campaign & Marketing Automation",
    duration: "10 Hours",
    accentColor: "#7C3AED", // Violet
    accentLight: "#EDE9FE",
    accentBorder: "#DDD6FE",
    description:
      "Architect a multi-stage automation drip sequence for an active brand. Craft high-converting ad copy and subject lines, map lead nurturing through the full funnel (top, middle, bottom), execute A/B testing, and analyze open, click, and conversion metrics.",
    steps: [
      "Brand Briefing & Consumer Personas Segmentation",
      "Subject Lines & High-Converting Ad Copy",
      "Automation Drip Sequence Setup in Mailchimp",
      "A/B Testing & Campaign Optimization Review",
    ],
    highlight: "Campaign Performance Report & Presentation",
  },
];

const BONUS_MODULES = [
  "Resume & Portfolio Building",
  "Interview Preparation",
  "Freelance Client Pitching",
  "Certification Exam Preparation",
  "Live Client Projects",
  "Internship Opportunity",
  "Placement Assistance",
  "Personal Branding on LinkedIn",
];

const PHASES = [
  { id: "all", label: "All 24 Modules", count: 24 },
  { id: 1, label: "Phase 1: Foundations", count: 6 },
  { id: 2, label: "Phase 2: Content & Web", count: 6 },
  { id: 3, label: "Phase 3: Ads & Analytics", count: 6 },
  { id: 4, label: "Phase 4: Growth & AI", count: 6 },
];

const PHASE_THEMES: Record<number, { text: string; bg: string; border: string }> = {
  1: { text: "#F86104", bg: "#FFF7ED", border: "#FED7AA" },
  2: { text: "#0284C7", bg: "#F0F9FF", border: "#BAE6FD" },
  3: { text: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  4: { text: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
};

// ─── Live Projects Stacking Section ──────────────────────────────────────────
function LiveProjectsStackingSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-[#E8E6E2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D97706] mb-3">
            DIGITAL MARKETING LIVE PROJECTS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#182033] tracking-tight leading-[1.25]">
            Gain real experience with LIVE projects for hands-on Digital Marketing Learning
          </h2>
        </div>

        {/* ── Stacking Cards Container ── */}
        <div className="relative max-w-4xl mx-auto pb-16">
          {LIVE_PROJECTS.map((proj, idx) => (
            <div
              key={proj.number}
              id={`live-project-${proj.number}`}
              className="sticky mb-12 sm:mb-20 last:mb-0 transition-shadow duration-300"
              style={{
                top: `calc(110px + ${idx * 16}px)`,
                zIndex: 10 + idx,
              }}
            >
              {/* White card container with rounded-3xl, subtle light border and soft elevated drop shadow */}
              <div className="bg-white rounded-[26px] sm:rounded-[30px] border border-[#E2E8F0] shadow-[0_-8px_30px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_-8px_35px_rgba(0,0,0,0.08),0_20px_50px_rgba(0,0,0,0.1)] transition-shadow p-6 sm:p-9 md:p-11">
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
                  {/* Left Column: Project Details */}
                  <div className="flex flex-col">
                    <p
                      className="text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-1"
                      style={{ color: proj.accentColor }}
                    >
                      PROJECT {proj.number}:
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#182033] tracking-tight leading-tight mb-4">
                      {proj.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#475569] mb-4">
                      <strong className="text-[#182033] font-bold">Duration:</strong>{" "}
                      {proj.duration}
                    </p>

                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#182033] mb-1.5">
                        Description:
                      </p>
                      <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Checklist + Milestone */}
                  <div className="flex flex-col justify-between h-full pt-1">
                    <div className="space-y-3.5 sm:space-y-4">
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
                      *Brands change every batch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Module Stacking Section ──────────────────────────────────────────────────
function ModuleStackingSection() {
  const [selectedPhase, setSelectedPhase] = useState<string | number>("all");
  const [activeModuleNumber, setActiveModuleNumber] = useState<number>(1);

  // Filter modules according to the selected phase
  const displayedModules =
    selectedPhase === "all"
      ? MODULES
      : MODULES.filter((m) => m.phase === selectedPhase);

  // Track active visible module when scrolling (RAF throttled to eliminate layout thrashing)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          const threshold = 180;
          for (let i = displayedModules.length - 1; i >= 0; i--) {
            const el = document.getElementById(`module-card-${displayedModules[i].number}`);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedModules]);

  const scrollToModule = (num: number) => {
    const el = document.getElementById(`module-card-${num}`);
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

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24 border-t border-[#E8E6E2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#F86104] mb-3">
            DIPLOMA COURSE CURRICULUM
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#182033] tracking-tight leading-[1.25] mb-4">
            Comprehensive 24-Module Digital Marketing Masterclass
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
            From core marketing strategy to running live paid ad campaigns and AI automation.
            Scroll to experience each module stack into view.
          </p>
        </div>

        {/* Phase Filter Tabs + Jumper Controls */}
        <div className="sticky top-24 z-40 bg-[#FAF7F2]/95 backdrop-blur-md py-3 mb-8 border-y border-[#E8E6E2]">
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
                        const firstModInPhase = MODULES.find((m) => m.phase === p.id);
                        if (firstModInPhase) {
                          setTimeout(() => scrollToModule(firstModInPhase.number), 50);
                        }
                      }
                    }}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
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
                Module <strong className="text-[#182033]">{String(activeModuleNumber).padStart(2, "0")}</strong> / 24
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  disabled={activeModuleNumber === displayedModules[0]?.number}
                  className="w-7 h-7 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#64748B] hover:text-[#182033] hover:border-[#182033] disabled:opacity-30 transition-all bg-white"
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
                  className="w-7 h-7 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#64748B] hover:text-[#182033] hover:border-[#182033] disabled:opacity-30 transition-all bg-white"
                  aria-label="Next module"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stacking Cards Container for Modules ── */}
        <div className="relative max-w-4xl mx-auto pb-16">
          {displayedModules.map((mod) => {
            const theme = PHASE_THEMES[mod.phase] || PHASE_THEMES[1];

            return (
              <div
                key={mod.number}
                id={`module-card-${mod.number}`}
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
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <p
                          className="text-xs sm:text-sm font-extrabold uppercase tracking-widest"
                          style={{ color: theme.text }}
                        >
                          MODULE {String(mod.number).padStart(2, "0")}:
                        </p>
                        {mod.isLive && (
                          <span className="text-[11px] font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0] inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                            Live Campaign
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

                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#182033] mb-1.5">
                          Description:
                        </p>
                        <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Topics Checklist */}
                    <div className="flex flex-col justify-between h-full pt-1">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#182033] uppercase tracking-wider mb-4">
                          What You'll Learn:
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

                      {/* Phase Tag indicator */}
                      <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                        <span
                          className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                          style={{
                            backgroundColor: theme.bg,
                            color: theme.text,
                          }}
                        >
                          Phase {mod.phase} · {mod.phaseName}
                        </span>
                        <span className="text-xs text-[#94A3B8]">
                          Step {mod.number} of 24
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
  );
}

// ─── Bonus & Syllabus Download CTA ───────────────────────────────────────────
function BonusSection() {
  return (
    <div className="bg-white border-t border-[#EBE3D5] py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Bonus modules */}
        <div className="bg-gradient-to-r from-[#182033] to-[#23272E] rounded-3xl p-6 sm:p-9 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-56 bg-[#F86104]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#F89520] mb-2">
              Bonus & Professional Modules
            </p>
            <h3 className="text-xl sm:text-2xl font-bold mb-5">
              Everything You Need to Land Your First Role
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              {BONUS_MODULES.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#F89520] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-[#FFF7F0] border border-[#FED7AA] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-[#182033] text-base">
              Want the full 24-module syllabus?
            </p>
            <p className="text-sm text-[#64748B] mt-0.5">
              Download the detailed 3-page PDF with all topics, durations and live project details.
            </p>
          </div>
          <a
            href="#apply"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F86104] to-[#DA3A0A] text-white font-bold text-sm shadow-[0_6px_20px_rgba(248,97,4,0.35)] hover:shadow-[0_8px_28px_rgba(248,97,4,0.45)] transition-all"
          >
            <Download className="w-4 h-4" />
            Download Full Syllabus
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main Curriculum Section Export ──────────────────────────────────────────
export default function DiplomaCurriculumSection() {
  return (
    <>
      <ModuleStackingSection />
      <LiveProjectsStackingSection />
      <BonusSection />
    </>
  );
}
