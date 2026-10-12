"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlareCard } from "@/components/ui/glare-card";
import { BookOpen, Wrench, Briefcase, Award, ChevronRight } from "lucide-react";

// ─── Step Data ────────────────────────────────────────────────────────────────
const steps = [
  {
    id: 0,
    step: "01",
    phase: "Learn",
    title: "Master the Theory",
    tagline: "Build a strong foundation before touching any tool.",
    description:
      "We start with the why — not the how. You learn marketing frameworks, consumer psychology, brand strategy, and funnel thinking from industry professionals who have done it at scale.",
    bullets: [
      "Marketing frameworks used at top MNCs",
      "Consumer behaviour & brand psychology",
      "Digital ecosystem: SEO, paid, social, email",
      "Live lectures + recorded sessions on demand",
    ],
    icon: BookOpen,
    accent: "#6366F1",
    cardBg: "from-[#1e1b4b] to-[#0f0c29]",
    visual: {
      emoji: "📚",
      items: ["Brand Strategy", "Consumer Psychology", "Marketing Funnels", "SEO Fundamentals", "Paid Media 101"],
    },
  },
  {
    id: 1,
    step: "02",
    phase: "Practice",
    title: "Apply on Real Tools",
    tagline: "Hands-on from week one — no passive watching.",
    description:
      "Theory means nothing without execution. You run live Google Ads, build Meta campaigns, set up dashboards in GA4, write and publish real content — on actual accounts, with real budgets.",
    bullets: [
      "Run live Google & Meta ad campaigns",
      "GA4, Search Console & Semrush hands-on",
      "Email automation with Mailchimp / Klaviyo",
      "Content calendars & publishing workflows",
    ],
    icon: Wrench,
    accent: "#F5A623",
    cardBg: "from-[#2a1a00] to-[#1a0f00]",
    visual: {
      emoji: "🛠️",
      items: ["Google Ads", "Meta Business Suite", "GA4 Analytics", "Semrush", "Canva Pro"],
    },
  },
  {
    id: 2,
    step: "03",
    phase: "Build",
    title: "Work on Real Projects",
    tagline: "Your work appears on real brands — not case studies.",
    description:
      "You get assigned live brand briefs from companies in our network. You pitch strategies, execute campaigns and present results to actual marketing teams — building a portfolio that speaks for itself.",
    bullets: [
      "Live brand briefs from real companies",
      "Full campaign execution: strategy to results",
      "Present to actual marketing professionals",
      "Build 3–5 documented case studies",
    ],
    icon: Briefcase,
    accent: "#10B981",
    cardBg: "from-[#022c22] to-[#011a14]",
    visual: {
      emoji: "🚀",
      items: ["Live Brand Brief", "Campaign Execution", "A/B Testing", "Performance Report", "Client Pitch"],
    },
  },
  {
    id: 3,
    step: "04",
    phase: "Portfolio",
    title: "Your Portfolio & Placement",
    tagline: "Graduate with proof — not just a certificate.",
    description:
      "By the time you finish, you have a portfolio of real campaigns, a polished resume, an optimized LinkedIn, and our placement team actively connecting you with 70+ hiring partners.",
    bullets: [
      "Portfolio of 3–5 real brand campaigns",
      "Placement-ready resume & LinkedIn profile",
      "Mock interviews with industry leaders",
      "Direct referrals to 70+ hiring partners",
    ],
    icon: Award,
    accent: "#EC4899",
    cardBg: "from-[#2d0a1e] to-[#1a0612]",
    visual: {
      emoji: "🏆",
      items: ["Portfolio Ready", "Resume Polished", "LinkedIn Optimised", "Mock Interviews", "Placed 🎉"],
    },
  },
];

// ─── Glare Card Visual ─────────────────────────────────────────────────────────
function StepVisual({ step, isActive }: { step: typeof steps[0]; isActive: boolean }) {
  const Icon = step.icon;
  return (
    <div className={`h-full w-full bg-gradient-to-br ${step.cardBg} p-8 flex flex-col justify-between`}>
      {/* Step number + icon */}
      <div className="flex items-center justify-between">
        <span className="text-6xl font-black opacity-10 text-white">{step.step}</span>
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: step.accent + "33" }}
        >
          <Icon className="w-6 h-6" style={{ color: step.accent }} />
        </div>
      </div>

      {/* Emoji + phase */}
      <div className="flex flex-col items-center justify-center flex-1 gap-4 py-6">
        <span className="text-6xl">{step.visual.emoji}</span>
        <p className="text-2xl font-bold text-white text-center">{step.phase}</p>
        <p className="text-sm text-white/50 text-center">{step.tagline}</p>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {step.visual.items.map((item) => (
          <span
            key={item}
            className="text-[11px] font-semibold px-3 py-1.5 rounded-full text-white/80"
            style={{ background: step.accent + "22", border: `1px solid ${step.accent}44` }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="journey" className="relative w-full min-h-[calc(100svh-6rem)] bg-[#060E24] py-6 md:py-8 lg:py-10 overflow-hidden flex flex-col justify-center scroll-mt-24 snap-start">
      {/* Anchor alias for Resources nav link */}
      <span id="resources" className="absolute -top-24" aria-hidden="true" />
      {/* Background glow — color shifts with active step */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: 1 }}
        key={active}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[160px] transition-colors duration-700"
          style={{ background: current.accent + "15" }}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-1.5 md:gap-2 mb-5 md:mb-6"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F5A623]">The Journey</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            How you&apos;ll learn at BMI
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2.5px] w-14 rounded-full origin-center"
            style={{ background: current.accent }}
          />
          <p className="text-white/50 text-xs sm:text-sm max-w-md">
            Click each phase to explore what happens — from theory to your first paycheck.
          </p>
        </motion.div>

        {/* Main layout: Steps tabs + Glare Card + Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* ── Left: Step tabs + Detail ── */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {steps.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === active;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative w-full text-left rounded-xl border p-3 sm:p-3.5 transition-all duration-300 overflow-hidden cursor-pointer ${
                    isActive
                      ? "border-transparent shadow-lg"
                      : "border-white/8 bg-white/3 hover:border-white/15"
                  }`}
                  style={isActive ? {
                    background: `linear-gradient(135deg, ${s.accent}18, ${s.accent}08)`,
                    borderColor: s.accent + "44",
                  } : {}}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                      style={{ background: s.accent }}
                    />
                  )}

                  <div className="flex items-start gap-3 pl-1">
                    {/* Step number */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300"
                      style={{
                        background: isActive ? s.accent : "rgba(255,255,255,0.05)",
                        color: isActive ? "white" : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {s.step}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p
                          className="text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: isActive ? s.accent : "rgba(255,255,255,0.3)" }}
                        >
                          {s.phase}
                        </p>
                      </div>
                      <p className={`text-sm sm:text-base font-semibold transition-colors ${isActive ? "text-white" : "text-white/40"}`}>
                        {s.title}
                      </p>

                      {/* Expanded detail */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="text-xs sm:text-sm text-white/60 mt-1.5 mb-2.5 leading-relaxed">
                              {s.description}
                            </p>
                            <ul className="space-y-1">
                              {s.bullets.map((b, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-center gap-2 text-xs sm:text-[13px] text-white/70"
                                >
                                  <ChevronRight
                                    className="w-3 h-3 flex-shrink-0"
                                    style={{ color: s.accent }}
                                  />
                                  <span>{b}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}

            {/* Progress dots */}
            <div className="flex items-center gap-1.5 pl-3 pt-1">
              {steps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: s.id === active ? 24 : 6,
                    background: s.id === active ? current.accent : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Glare Card ── */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, rotateY: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, rotateY: 10, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                  style={{ perspective: "1000px" }}
                >
                  <GlareCard className={`bg-gradient-to-br ${current.cardBg}`}>
                    <StepVisual step={current} isActive={true} />
                  </GlareCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-2 mt-5 md:mt-6 text-center"
        >
          <p className="text-white/40 text-xs">Ready to start your journey?</p>
          <a
            href="#programs"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl text-white transition-all hover:scale-105 hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${current.accent}, ${current.accent}cc)`,
              boxShadow: `0 6px 24px ${current.accent}35`,
            }}
          >
            Start Your Journey at BMI
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
