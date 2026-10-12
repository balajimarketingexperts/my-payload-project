"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  CheckCircle2,
} from "lucide-react";

// ─── 16 High-Demand Job Roles ────────────────────────────────────────────────
const JOB_ROLES = [
  {
    role: "Performance Marketing Executive",
    track: "Paid Media",
    ctc: "₹4.5 - 9 LPA",
    skills: ["Meta Ads", "Google Ads", "A/B Testing", "ROAS Optimization"],
    desc: "Manage high-budget paid acquisition campaigns, build data-driven media plans, and optimize conversion funnels.",
  },
  {
    role: "Digital Marketing Analyst",
    track: "Analytics & Strategy",
    ctc: "₹5.0 - 10 LPA",
    skills: ["Google Analytics", "Dashboards", "Excel Reporting", "CAC/LTV"],
    desc: "Extract actionable marketing insights from GA4 and Looker Studio to guide multichannel growth decisions.",
  },
  {
    role: "SEO Analyst",
    track: "Organic Search",
    ctc: "₹4.2 - 8.5 LPA",
    skills: ["On-Page SEO", "Technical SEO", "Backlink Audit", "Semrush"],
    desc: "Audit websites, resolve crawl issues, and optimize high-intent keyword rankings on Google Search.",
  },
  {
    role: "SEO Executive",
    track: "Organic Search",
    ctc: "₹3.8 - 7 LPA",
    skills: ["Keyword Research", "Featured Snippets", "Listing Optimization"],
    desc: "Execute daily search optimization tasks, write content briefs, and build high-authority backlink profiles.",
  },
  {
    role: "SEM Analyst",
    track: "Paid Media",
    ctc: "₹4.5 - 9.2 LPA",
    skills: ["Google Search Ads", "Negative Keywords", "Search Term Analysis"],
    desc: "Scale intent-based pay-per-click campaigns, streamline bidding strategy, and maximize search impression share.",
  },
  {
    role: "PPC Specialist",
    track: "Paid Media",
    ctc: "₹4.8 - 9.5 LPA",
    skills: ["Advanced Google Ads", "Ad Groups", "Quality Score", "PPC Strategy"],
    desc: "Craft high-converting ad copy, structure granular ad groups, and monitor spend efficiency across channels.",
  },
  {
    role: "Programmatic Executive",
    track: "Paid Media",
    ctc: "₹5.5 - 11 LPA",
    skills: ["Programmatic Advertising", "DV360", "CM360", "Insertion Orders"],
    desc: "Deploy automated display and video media buying using enterprise DSPs and ad-server platforms.",
  },
  {
    role: "Ecommerce Marketing Specialist",
    track: "E-Commerce",
    ctc: "₹4.5 - 9.5 LPA",
    skills: ["Ecommerce & Quick Commerce", "Amazon Ads", "Shopify", "Listing Optimization"],
    desc: "Drive direct-to-consumer and marketplace sales across Amazon, Flipkart, and quick-commerce channels.",
  },
  {
    role: "Social Media Manager",
    track: "Brand & Social",
    ctc: "₹4.0 - 8 LPA",
    skills: ["Organic Social Strategy", "Instagram Reels", "YouTube Shorts", "Community"],
    desc: "Grow viral social followings, direct short-form video production, and curate high-engagement brand voice.",
  },
  {
    role: "Content Manager",
    track: "Content & Copy",
    ctc: "₹4.5 - 9 LPA",
    skills: ["Content Marketing", "Content Strategy", "Editorial Calendars", "GEO"],
    desc: "Lead full-funnel content distribution, brand storytelling, and multi-channel organic acquisition.",
  },
  {
    role: "Content Writer",
    track: "Content & Copy",
    ctc: "₹3.6 - 6.5 LPA",
    skills: ["Content Writing", "Copywriting", "SEO Blogs", "Generative AI"],
    desc: "Write compelling long-form SEO articles, landing page copy, and high-conversion ad creative briefs.",
  },
  {
    role: "Media Planner",
    track: "Paid Media",
    ctc: "₹5.0 - 10.5 LPA",
    skills: ["Media Plan", "Media Strategy", "Audience Targeting", "Budget Allocation"],
    desc: "Design omnichannel budget frameworks, evaluate channel mix, and build client-ready marketing briefs.",
  },
  {
    role: "Marketing Analyst",
    track: "Analytics & Strategy",
    ctc: "₹4.8 - 9.8 LPA",
    skills: ["Excel & Data Analysis", "Predictive Analytics", "Consumer Personas"],
    desc: "Model customer acquisition costs, forecast seasonal demand, and build executive reporting dashboards.",
  },
  {
    role: "Client Manager",
    track: "Client Servicing",
    ctc: "₹5.2 - 11 LPA",
    skills: ["Account Management", "Client Pitches", "Campaign Reviews", "KPI Tracking"],
    desc: "Manage high-value brand accounts, steer agency deliverables, and lead quarterly campaign reviews.",
  },
  {
    role: "Account Manager",
    track: "Client Servicing",
    ctc: "₹5.5 - 11.5 LPA",
    skills: ["Client Retention", "Cross-Selling", "Scope Management", "P&L Support"],
    desc: "Nurture long-term agency client relationships, ensure SLA compliance, and expand project scope.",
  },
  {
    role: "Account Executive",
    track: "Client Servicing",
    ctc: "₹3.8 - 7 LPA",
    skills: ["Day-to-Day Client Ops", "Status Reports", "Creative Briefs", "Agile Sprints"],
    desc: "Coordinate between creative, media, and tech teams to deliver campaign assets on schedule.",
  },
];

// ─── Tools & Platforms ───────────────────────────────────────────────────────
const TOOLS = [
  { name: "Meta Ads", category: "Paid Social" },
  { name: "Facebook", category: "Social Platform" },
  { name: "Instagram", category: "Social Platform" },
  { name: "Instagram Reels", category: "Short-Form Video" },
  { name: "YouTube Shorts", category: "Short-Form Video" },
  { name: "LinkedIn", category: "B2B Social" },
  { name: "Google Ads", category: "Search & Display" },
  { name: "Google Analytics", category: "Web Analytics" },
  { name: "Amazon Ads", category: "E-Commerce Media" },
  { name: "DV360", category: "Programmatic DSP" },
  { name: "CM360", category: "Campaign Ad Server" },
  { name: "WordPress", category: "CMS & Web" },
  { name: "Shopify", category: "E-Commerce Store" },
  { name: "Excel", category: "Data & Reporting" },
  { name: "ChatGPT", category: "Generative AI" },
  { name: "AI Overviews", category: "Next-Gen Search" },
  { name: "Featured Snippets", category: "Zero-Click Search" },
];

// ─── Skill Categories ────────────────────────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    title: "Performance & Paid Marketing",
    skills: [
      "Performance Marketing",
      "Search Engine Marketing (SEM)",
      "Programmatic Advertising",
      "Conversion Rate Optimization (CRO)",
      "Paid Marketing",
      "PPC Management",
      "Bidding Strategy & Optimization",
    ],
  },
  {
    title: "Organic & Content Strategy",
    skills: [
      "Search Engine Optimization (SEO)",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Content Writing & Copywriting",
      "Social Media Marketing",
      "Backlink Audit & Technical SEO",
    ],
  },
  {
    title: "Next-Gen AI & Generative Workflows",
    skills: [
      "AI Prompt Engineering",
      "Generative AI for Content",
      "AI-Powered Audience Targeting",
      "AI Creative & Ad Generation",
      "LLM Optimization",
      "Predictive Analytics & Forecasting",
    ],
  },
  {
    title: "Brand Strategy & Analytics",
    skills: [
      "Brand Marketing & Brand Strategy",
      "Brand Positioning Online",
      "Analytics & Data Interpretation",
      "Excel & Data Analysis",
      "Dashboards & Excel Reporting",
      "Go-to-Market Strategy",
    ],
  },
];

// ─── Local Center Locations in Delhi NCR ─────────────────────────────────────
const CAMPUS_AREAS = [
  { name: "Rohini Center", address: "Sector 7 / 8 / 9 Corridor, Near Rohini West Metro, North West Delhi" },
  { name: "Pitampura Hub", address: "Netaji Subhash Place (NSP) & Kohat Enclave, Pitampura, North West Delhi" },
  { name: "Budh Vihar Campus", address: "Phase 1 & 2 Main Market, Budh Vihar, North West Delhi" },
  { name: "Delhi NCR Hybrid", address: "Full-Time, Part-Time & Online Digital Marketing Course Available Pan-Delhi" },
];

export default function DiplomaCareerRolesSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>("All");

  const tracks = ["All", "Paid Media", "Organic Search", "Analytics & Strategy", "E-Commerce", "Brand & Social", "Content & Copy", "Client Servicing"];

  const filteredRoles =
    selectedTrack === "All"
      ? JOB_ROLES
      : JOB_ROLES.filter((r) => r.track === selectedTrack);

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-[#E8E6E2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FED7AA] mb-4">
            <Briefcase className="w-4 h-4 text-[#F86104]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104]">
              CAREER OUTCOMES & RECRUITER ROLES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182033] tracking-tight leading-tight mb-4">
            Roles Our Diploma Graduates Step Into
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
            Top recruiters and hiring partners hire our alumni across paid, organic, AI, and analytics domains.
            From internships with stipend to full-time CTC packages ranging between <strong>₹4.5 to 11.5 LPA</strong>.
          </p>
        </div>

        {/* Track Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none justify-start sm:justify-center">
          {tracks.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTrack(t)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedTrack === t
                  ? "bg-[#182033] text-white shadow-sm"
                  : "bg-[#F8FAFC] text-[#64748B] hover:text-[#182033] border border-[#E2E8F0]"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Job Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredRoles.map((item, i) => (
            <div
              key={i}
              className="group bg-[#FAF9F6] hover:bg-white rounded-2xl p-6 border border-[#EBE3D5] hover:border-[#F86104]/50 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(248,97,4,0.09)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9A3412] bg-[#FFF7ED] px-2.5 py-0.5 rounded-full border border-[#FED7AA]">
                    {item.track}
                  </span>
                  <span className="text-xs font-extrabold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#A7F3D0]">
                    {item.ctc}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#182033] group-hover:text-[#F86104] transition-colors mb-2">
                  {item.role}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-[#F1E9DC] flex flex-wrap gap-1.5">
                  {item.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-[#475569] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Skills & Domains Matrix ── */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#EBE3D5] mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2">
              COMPREHENSIVE PRACTICAL SKILLS
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#182033]">
              Modern Digital Marketing Competency Matrix
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Skills mapped to industry expectations—covering paid performance, content, AI prompting, and enterprise analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h4 className="text-sm font-bold text-[#182033] mb-4 pb-2 border-b border-[#F1E9DC]">
                  {cat.title}
                </h4>
                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#475569]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F86104] flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tools & Platforms Ticker ── */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#9A8C7A]">
              Master 17+ Enterprise Tools & Platforms:
            </p>
            <span className="text-xs font-semibold text-[#F86104]">
              Hands-on Live Platform Access
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {TOOLS.map((t, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm text-xs font-medium text-[#182033]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F86104]" />
                <strong>{t.name}</strong>
                <span className="text-[#94A3B8] text-[11px]">({t.category})</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Local Delhi NCR Training Centers Banner ── */}
        <div className="rounded-3xl bg-gradient-to-r from-[#182033] via-[#1E293B] to-[#182033] text-white p-8 sm:p-10 relative overflow-hidden border border-white/10">
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#F86104]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F89520] text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                CLASSROOM & ONLINE CENTRES · DELHI NCR
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Best Digital Marketing Institute in Rohini, Pitampura, Budh Vihar & Delhi
              </h3>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">
                Looking for a <strong>digital marketing course near me</strong>? Balaji Marketing Institute offers
                offline classroom training, live lab sessions, and flexible full-time / part-time digital marketing classes in
                Rohini, Pitampura, Budh Vihar, and North West Delhi—backed by guaranteed placement assistance and alumni mentoring.
              </p>

              {/* Campus Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {CAMPUS_AREAS.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/85 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#F89520] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">{c.name}</strong>
                      <span className="text-white/70 text-[11px]">{c.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <a
                href="#syllabus"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                Check Batch Fees & Syllabus
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
