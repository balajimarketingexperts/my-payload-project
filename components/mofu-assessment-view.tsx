"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Play,
  CheckCircle2,
  HelpCircle,
  Clock,
  Video,
  Send,
  Lightbulb,
  Check,
  ChevronRight,
  ShieldCheck,
  User,
} from "lucide-react";
import confetti from "canvas-confetti";
import GatewayFlow from "@/components/ui/gateway-flow";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION TYPES (SIMPLE OPEN-ENDED QUESTIONS, NO OPTIONS)
// ─────────────────────────────────────────────────────────────────────────────

export interface MofuSimpleQuestion {
  id: string;
  question: string;
  helper?: string;
  placeholder?: string;
  rows?: number;
}

export interface MofuCourseConfig {
  courseId: string;
  courseName: string;
  badge: string;
  tagline: string;
  estimatedMinutes?: string;
  backToCourseHref?: string;

  // SECTION 1: CANDIDATE GOALS & WHAT THEY KNOW (Simple text answers)
  section1: {
    title: string;
    subtitle: string;
    whyQuestion: {
      title: string;
      helper?: string;
      placeholder: string;
    };
    knowledgeQuestion: {
      title: string;
      helper?: string;
      placeholder: string;
    };
  };

  // SECTION 2: VIDEO CASE STUDY (Simple text answers)
  section2: {
    title: string;
    subtitle: string;
    videoTitle: string;
    videoDuration?: string;
    youtubeUrlOrId: string;
    videoPrompt: string;
    questions: MofuSimpleQuestion[];
  };

  // SECTION 3: SIMPLE QUESTIONS (Simple text answers, NO OPTIONS)
  section3: {
    title: string;
    subtitle: string;
    questions: MofuSimpleQuestion[];
  };
}

interface MofuAssessmentViewProps {
  config: MofuCourseConfig;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Extract YouTube ID
// ─────────────────────────────────────────────────────────────────────────────
function extractYouTubeId(urlOrId: string): string | null {
  if (!urlOrId || typeof urlOrId !== "string") return null;
  const trimmed = urlOrId.trim();

  // If already an 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Handle youtube.com/watch?v=ID or youtu.be/ID or youtube.com/embed/ID
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : null;
}

// ─────────────────────────────────────────────────────────────────────────────
// INNER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function MofuAssessmentInner({ config }: MofuAssessmentViewProps) {
  const searchParams = useSearchParams();

  // Candidate basic info (preloaded from sessionStorage or query params)
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");

  // Section 1 State (Simple open text)
  const [whyAnswer, setWhyAnswer] = useState<string>("");
  const [knowledgeAnswer, setKnowledgeAnswer] = useState<string>("");

  // Section 2 State (Video analysis text answers)
  const [videoAnswers, setVideoAnswers] = useState<Record<string, string>>({});

  // Section 3 State (Simple text answers, no options)
  const [section3Answers, setSection3Answers] = useState<Record<string, string>>({});

  // Section 4 / Counseling Preference
  const [consultSlot, setConsultSlot] = useState<string>("Evening (5:00 PM - 8:00 PM)");

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Load applicant info on mount
  useEffect(() => {
    // 1. Try URL search params
    const nameFromUrl = searchParams.get("name");
    const emailFromUrl = searchParams.get("email");
    const phoneFromUrl = searchParams.get("phone");

    if (nameFromUrl) setCandidateName(nameFromUrl);
    if (emailFromUrl) setCandidateEmail(emailFromUrl);
    if (phoneFromUrl) setCandidatePhone(phoneFromUrl);

    // 2. Try sessionStorage fallback
    try {
      const stored = window.sessionStorage.getItem("bmi_applicant_data");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (!nameFromUrl && parsed.fullName) setCandidateName(parsed.fullName);
        if (!emailFromUrl && parsed.email) setCandidateEmail(parsed.email);
        if (!phoneFromUrl && parsed.phone) setCandidatePhone(parsed.phone);
      }
    } catch {
      // ignore
    }
  }, [searchParams]);

  // Video embed ID calculation
  const youtubeId = extractYouTubeId(config.section2.youtubeUrlOrId);

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Basic validation check
    if (!whyAnswer.trim()) {
      setValidationError("Please share a few words explaining why you want to do this course in Section 1.");
      window.scrollTo({ top: 300, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    // Simulate saving responses
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: "smooth" });

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#F86104", "#F47B20", "#38BDF8", "#FBB034"],
        });
      } catch {
        // ignore
      }
    }, 800);
  };

  // ───────────────────────────────────────────────────────────────────────────
  // SUCCESS / SUBMITTED SCREEN
  // ───────────────────────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-black text-white selection:bg-[#F86104]/30 selection:text-white">
        {/* Gateway Flow Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <GatewayFlow
            mode="dark"
            speed={0.7}
            density={0.85}
            opacity={0.4}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />
        </div>

        <div className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="bg-[#0B1120]/85 backdrop-blur-2xl rounded-3xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="h-2.5 bg-gradient-to-r from-[#F47B20] via-[#FBB034] to-[#38BDF8]" />

            <div className="p-6 sm:p-12 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto mb-6 shadow-xs">
                <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
              </div>

              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F86104]/15 text-[#F86104] border border-[#F86104]/30 mb-3">
                Your Introduction Submitted Successfully
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Thank You{candidateName ? `, ${candidateName}` : ""}! 🎉
              </h1>

              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                Your introduction for{" "}
                <strong className="text-white font-semibold">{config.courseName}</strong> has been
                recorded. Our admissions mentors will review your responses before your 1-on-1 counseling session.
              </p>

              <div className="max-w-md mx-auto bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 p-5 text-left mb-8 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Applicant:</span>
                  <span className="font-semibold text-white">{candidateName || "Candidate"}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Program:</span>
                  <span className="font-semibold text-white">{config.courseName}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Preferred Call Slot:</span>
                  <span className="font-semibold text-white">{consultSlot}</span>
                </div>
                <div className="pt-2 border-t border-white/10 text-[11px] text-[#10B981] font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Your introduction and video breakdown responses are saved.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/918368121032?text=Hello%20Balaji%20Marketing%20Institute%2C%20I%20have%20submitted%20my%20introduction.%20Please%20guide%20me%20with%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Chat on WhatsApp (+91 8368121032)</span>
                </a>

                <Link
                  href={config.backToCourseHref || "/courses/digital-marketing"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Back to Course Page</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ───────────────────────────────────────────────────────────────────────────
  // MAIN FORM (WITH GATEWAY FLOW BACKGROUND)
  // ───────────────────────────────────────────────────────────────────────────
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-slate-100 selection:bg-[#F86104]/30 selection:text-white">
      {/* ── GATEWAY FLOW BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <GatewayFlow
          mode="dark"
          speed={0.7}
          density={0.85}
          opacity={0.38}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 pointer-events-none" />
      </div>

      <div className="relative z-10 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* ── TOP HERO HEADER ── */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F86104]/15 border border-[#F86104]/30 text-[#F86104] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{config.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-3">
            {config.courseName}
            <span className="block text-lg sm:text-2xl font-bold text-[#F86104] mt-1">
              Your Introduction
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-4">
            {config.tagline}
          </p>

          {/* Status Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 py-2 px-4 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-xs text-xs text-slate-400">
            {candidateName && (
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <User className="w-3.5 h-3.5 text-[#F86104]" />
                Applicant: {candidateName}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F86104]" />
              {config.estimatedMinutes || "4–6 Minutes"}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              Answer in your own words
            </span>
          </div>
        </div>

        {/* Validation Alert */}
        {validationError && (
          <div className="mb-6 p-4 rounded-2xl bg-[#FEF2F2]/10 border border-[#FECACA]/30 text-[#F87171] text-xs sm:text-sm font-medium flex items-center gap-2 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* ── QUESTIONS FORM ── */}
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
          {/* ================================================================= */}
          {/* SECTION 1: WHY DO YOU WANT TO DO & WHAT DO YOU KNOW */}
          {/* ================================================================= */}
          <section className="bg-[#0B1120]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F47B20] to-[#FBB034]" />

            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-[#F86104]/15 text-[#F86104] font-bold text-xs flex items-center justify-center shrink-0 border border-[#F86104]/30">
                1
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {config.section1.title}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">{config.section1.subtitle}</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Question 1: Why do you want to do this course? */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-200">
                  {config.section1.whyQuestion.title}{" "}
                  <span className="text-[#F86104]">*</span>
                </label>
                {config.section1.whyQuestion.helper && (
                  <p className="text-[11px] text-slate-400">
                    {config.section1.whyQuestion.helper}
                  </p>
                )}
                <textarea
                  rows={3}
                  value={whyAnswer}
                  onChange={(e) => setWhyAnswer(e.target.value)}
                  placeholder={config.section1.whyQuestion.placeholder}
                  className="w-full p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 transition-all"
                />
              </div>

              <hr className="border-white/10" />

              {/* Question 2: What do you know about digital marketing? */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-200">
                  {config.section1.knowledgeQuestion.title}
                </label>
                {config.section1.knowledgeQuestion.helper && (
                  <p className="text-[11px] text-slate-400">
                    {config.section1.knowledgeQuestion.helper}
                  </p>
                )}
                <textarea
                  rows={3}
                  value={knowledgeAnswer}
                  onChange={(e) => setKnowledgeAnswer(e.target.value)}
                  placeholder={config.section1.knowledgeQuestion.placeholder}
                  className="w-full p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 transition-all"
                />
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 2: WATCH THIS VIDEO & ANSWER */}
          {/* ================================================================= */}
          <section className="bg-[#0B1120]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#38BDF8] to-[#F86104]" />

            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] font-bold text-xs flex items-center justify-center shrink-0 border border-[#38BDF8]/30">
                2
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {config.section2.title}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">{config.section2.subtitle}</p>
              </div>
            </div>

            {/* Video Player */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-white/15 bg-black/90 shadow-md">
              <div className="p-3 bg-white/[0.03] flex items-center justify-between text-xs text-slate-300 border-b border-white/10">
                <span className="flex items-center gap-2 font-semibold">
                  <Video className="w-4 h-4 text-[#F86104]" />
                  {config.section2.videoTitle}
                </span>
                <span className="text-[11px] text-slate-400 bg-white/10 px-2 py-0.5 rounded-full">
                  {config.section2.videoDuration || "Watch Video"}
                </span>
              </div>

              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                {youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                    title={config.section2.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="p-6 text-center text-white/90 max-w-md">
                    <div className="w-12 h-12 rounded-full bg-[#F86104]/20 border border-[#F86104]/40 text-[#F86104] flex items-center justify-center mx-auto mb-2">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold mb-1 text-white">
                      {config.section2.videoTitle}
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
                      {config.section2.videoPrompt}
                    </p>
                    <div className="inline-block px-2.5 py-1 rounded bg-white/10 border border-white/20 text-[10px] text-slate-400">
                      🛠️ Paste your YouTube video link or ID in this page&apos;s file!
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Simple Video Questions (No options) */}
            <div className="space-y-5">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-[#F86104] shrink-0 mt-0.5" />
                <span>
                  Watch the video above and answer these simple questions in your own words:
                </span>
              </div>

              {config.section2.questions.map((q, idx) => (
                <div key={q.id} className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold text-slate-200">
                    {idx + 1}. {q.question}
                  </label>
                  {q.helper && <p className="text-[11px] text-slate-400">{q.helper}</p>}
                  <textarea
                    rows={q.rows || 2}
                    value={videoAnswers[q.id] || ""}
                    onChange={(e) =>
                      setVideoAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                    placeholder={q.placeholder || "Type your answer here..."}
                    className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 transition-all"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 3: SIMPLE QUESTIONS (NO OPTIONS) */}
          {/* ================================================================= */}
          <section className="bg-[#0B1120]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FBB034] via-[#F86104] to-[#38BDF8]" />

            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-[#F86104]/15 text-[#F86104] font-bold text-xs flex items-center justify-center shrink-0 border border-[#F86104]/30">
                3
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {config.section3.title}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">{config.section3.subtitle}</p>
              </div>
            </div>

            <div className="space-y-5">
              {config.section3.questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2"
                >
                  <label className="block text-xs sm:text-sm font-bold text-slate-200">
                    Question {idx + 1}: {q.question}
                  </label>
                  {q.helper && <p className="text-[11px] text-slate-400">{q.helper}</p>}
                  <textarea
                    rows={q.rows || 2}
                    value={section3Answers[q.id] || ""}
                    onChange={(e) =>
                      setSection3Answers((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                    placeholder={q.placeholder || "Write your thoughts here..."}
                    className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 transition-all"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 4: SUBMIT YOUR INTRODUCTION */}
          {/* ================================================================= */}
          <section className="bg-gradient-to-br from-[#111827] to-[#0A0E1A] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#FBB034] border border-white/15 mb-3">
                Final Step
              </span>

              <h3 className="text-lg sm:text-2xl font-bold mb-2">Ready to Submit Your Introduction?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-xl leading-relaxed">
                Our admissions mentor will review what you wrote and discuss your goals during your 1-on-1 counseling call.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Preferred Call Time
                  </label>
                  <select
                    value={consultSlot}
                    onChange={(e) => setConsultSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F86104]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)" className="bg-[#111827] text-white">
                      Morning (10:00 AM - 1:00 PM)
                    </option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)" className="bg-[#111827] text-white">
                      Afternoon (2:00 PM - 5:00 PM)
                    </option>
                    <option value="Evening (5:00 PM - 8:00 PM)" className="bg-[#111827] text-white">
                      Evening (5:00 PM - 8:00 PM)
                    </option>
                    <option value="Weekend Saturday/Sunday" className="bg-[#111827] text-white">
                      Weekend Saturday/Sunday
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Applicant
                  </label>
                  <div className="text-xs bg-white/5 border border-white/15 rounded-xl p-2.5 text-white/80 flex items-center justify-between">
                    <span>{candidateName || "Candidate"}</span>
                    <span className="text-[#FBB034]">{candidatePhone || "+91 Contact"}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F86104] hover:bg-[#e05400] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Your Introduction...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Your Introduction</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <span className="text-[11px] text-slate-400">
                  🔒 Evaluated by Balaji Marketing Institute Admissions Team
                </span>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default function MofuAssessmentView({ config }: MofuAssessmentViewProps) {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 border-3 border-[#F86104] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-slate-400">Loading your introduction...</p>
        </div>
      }
    >
      <MofuAssessmentInner config={config} />
    </React.Suspense>
  );
}
