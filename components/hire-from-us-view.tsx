"use client";

import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import {
  Building2,
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  ChevronDown,
  Clock,
  FileText,
  Star,
  ExternalLink,
  X,
  Zap,
  Target,
  BarChart3,
  Check,
} from "lucide-react";

// ─── Hiring Partners Data ──────────────────────────────────────────────────
const HIRING_COMPANIES = [
  { name: "Dainik Jagran", category: "News & Media", tag: "Enterprise Media" },
  { name: "Americanz Muscles", category: "D2C Fitness", tag: "Health & Nutrition" },
  { name: "Thaagam Foundation", category: "NGO & Social", tag: "Impact Marketing" },
  { name: "Balaji Marketing Experts", category: "Agency Network", tag: "360° Digital Agency" },
  { name: "The Archoline Architects", category: "Design & Infra", tag: "Architecture & Real Estate" },
  { name: "Globe Decorez", category: "Home & Decor", tag: "E-Commerce Retail" },
  { name: "Applied Education Services", category: "EdTech", tag: "Higher Education" },
  { name: "Shambhhavi Travels", category: "Travel & Hospitality", tag: "Omnichannel Services" },
  { name: "GrowthVelocity Media", category: "Performance Media", tag: "AdTech Partner" },
  { name: "BrandPulse Retail", category: "Consumer Goods", tag: "FMCG Brand" },
  { name: "AdSphere Global", category: "Programmatic Ads", tag: "DSP Solutions" },
  { name: "OmniChannel Direct", category: "Quick Commerce", tag: "Logistics & Supply" },
];

// ─── Recruiter Quotes ──────────────────────────────────────────────────────
const RECRUITER_QUOTES = [
  {
    quote:
      "We hired two performance marketing executives from BMI. On day three, they were already structuring Meta ad campaigns and Looker Studio dashboards without hand-holding. Saved us 2 months of training.",
    name: "Aakash Verma",
    title: "VP of Marketing",
    company: "GrowthVelocity Media",
    speedTag: "Onboarded in 4 Days",
  },
  {
    quote:
      "The speed of hiring was incredible. We submitted our job brief on Monday and had 4 shortlisted, high-intent candidates interviewed by Thursday. Both joined on time and hit their first milestone in week two.",
    name: "Neha Khurana",
    title: "Head of Talent Acquisition",
    company: "BrandPulse Retail",
    speedTag: "Fast Turnaround",
  },
  {
    quote:
      "Unlike typical college freshers, BMI alumni actually understand unit economics, ROAS, and CAC/LTV. Their professionalism during the interview process was exemplary.",
    name: "Rajesh Aggarwal",
    title: "Founder & Director",
    company: "Apex D2C Brands",
    speedTag: "High Business Readiness",
  },
  {
    quote:
      "What stood out was their hands-on tool fluency. They came in already certified in Google Ads, Semrush, and DV360 with live campaign budgets behind them. Zero theoretical fluff.",
    name: "Simran Kaur",
    title: "HR Lead",
    company: "DigitalPulse Agency",
    speedTag: "Certified & Tested",
  },
  {
    quote:
      "BMI is now our first call for sales development and client servicing roles. Their candidates are disciplined, articulate, and prepared for high-velocity pipelines.",
    name: "Vikramaditya Sen",
    title: "Chief Commercial Officer",
    company: "OmniChannel Direct",
    speedTag: "B2B Sales Ready",
  },
  {
    quote:
      "Zero placement fees and top-tier candidates who don't jump ship. 90% of our BMI hires were promoted within their first 9 months of joining.",
    name: "Pooja Mehra",
    title: "Performance Marketing Director",
    company: "MediaCraft Global",
    speedTag: "High Retention",
  },
  {
    quote:
      "Fast turnaround, transparent communication, and genuine talent. They've solved our junior marketing hiring bottleneck completely.",
    name: "Manish Joshi",
    title: "Recruitment Lead",
    company: "AdSphere Global",
    speedTag: "Seamless Coordination",
  },
  {
    quote:
      "Their understanding of Amazon Ads, Flipkart inventory, and quick commerce analytics was miles ahead of traditional B-school graduates.",
    name: "Ritu Singhal",
    title: "Co-Founder",
    company: "QuickGrowth Commerce",
    speedTag: "E-Commerce Specialist",
  },
];

// ─── Comparison Table Rows ─────────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    feature: "Job Readiness",
    fromUs: "Trained on live ad budgets, client briefs & real campaigns",
    traditional: "Heavy textbook theory; months of training needed after joining",
  },
  {
    feature: "Time to Hire",
    fromUs: "Vetted shortlist delivered in 48 working hours",
    traditional: "Weeks to months sifting through unqualified portal resumes",
  },
  {
    feature: "Joining Timeline",
    fromUs: "Immediate & flexible joining dates year-round",
    traditional: "Often delayed by university exam dates or rigid academic cycles",
  },
  {
    feature: "Hiring Fee",
    fromUs: "100% Free for employers — zero recruiter or commission fees",
    traditional: "Expensive job portal subscriptions & 8.33%–15% agency fees",
  },
  {
    feature: "Career Intent & Retention",
    fromUs: "Pre-screened candidates specifically committed to marketing & sales",
    traditional: "High chance of domain switching & early fresher attrition",
  },
];

// ─── Roles Placed ──────────────────────────────────────────────────────────
const PLACEMENT_ROLES = [
  "Brand Executive",
  "Digital Marketing Analyst",
  "Performance Marketing Executive",
  "SEO Executive",
  "Content Marketer",
  "Social Media Executive",
  "E-commerce Analyst",
  "Sales Executive",
  "Business Development Executive",
  "Account Executive",
  "Client Servicing",
  "Business Analyst",
  "Management Trainee",
  "Operations Executive",
];

// ─── Media Mentions ────────────────────────────────────────────────────────
const MEDIA_MENTIONS = [
  {
    outlet: "Dainik Jagran",
    date: "August 2025",
    headline: "Balaji Marketing Institute Bridges the Industry-Academia Gap with 100% Job-Linked Programs",
    linkText: "Read Coverage",
  },
  {
    outlet: "Education Times",
    date: "October 2025",
    headline: "How BMI is Pioneering AI-First Marketing & Performance Media Pedagogy in Delhi NCR",
    linkText: "View Article",
  },
  {
    outlet: "Business Standard",
    date: "December 2025",
    headline: "Closing the Digital Marketing Employability Deficit: A Look Inside Agency-Simulated Classrooms",
    linkText: "Read Feature",
  },
  {
    outlet: "LiveMint Brand Spotlight",
    date: "February 2026",
    headline: "Why Modern Startups and Agencies Are Turning to Practical B-School Alternatives for Growth Talent",
    linkText: "View Publication",
  },
];

// ─── FAQ Items ─────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "Who are the candidates?",
    a: "Our candidates are full-time and executive graduates of Balaji Marketing Institute's job-linked programs (MBA in Marketing, Diploma in Digital Marketing, and Executive Programs). Each cohort comprises 150+ screened candidates with strong academic foundations and rigorous agency training.",
  },
  {
    q: "What skills are they trained in?",
    a: "They are trained across paid advertising (Meta Ads, Google Ads, DV360, CM360), organic growth (SEO, GEO, AEO, Semrush), content marketing, GA4 and Looker Studio data analytics, B2B sales pipelines, CRM automation, and Generative AI prompting (ChatGPT, Midjourney, Claude).",
  },
  {
    q: "Can we see the curriculum?",
    a: "Yes! Our complete 24-module curriculum syllabus and live project briefs are available upon request. You can also inspect our competency matrix and schedule a briefing with our Academic Director.",
  },
  {
    q: "How do you assess students?",
    a: "Students undergo continuous assessment: live campaign performance audits with real ad spend, technical tool evaluations, client pitch defense before external CMO juries, and weekly mock interviews. Only students meeting minimum benchmark scores are approved for placement drives.",
  },
  {
    q: "Is there a fee to hire?",
    a: "No. Hiring from Balaji Marketing Institute is completely free of charge for employers. We do not charge registration fees, placement fees, or recruiter commissions.",
  },
  {
    q: "What is the minimum CTC or stipend?",
    a: "For full-time graduates, standard entry-level packages range between ₹4.5 LPA and ₹11.5 LPA depending on the track and experience level. For internship-to-hire programs, stipends typically range from ₹12,000 to ₹25,000 per month.",
  },
  {
    q: "Can we hire interns only?",
    a: "Yes. Many of our corporate partners hire 3-month or 6-month pre-placement interns with a performance-linked stipend and pre-placement offer (PPO) evaluation.",
  },
  {
    q: "What if a hire doesn’t work out?",
    a: "Under our Recruiter Satisfaction Pledge, our Corporate Relations Cell provides replacement profiles within 7 business days if a candidate departs or faces mutual performance misalignment during their probationary period.",
  },
  {
    q: "Can we form a long-term partnership?",
    a: "Yes. Over 92% of recruiters hire from us seasonally. We provide dedicated corporate hiring calendars, exclusive virtual recruitment days, and can even co-design custom training modules tailored to your agency's tech stack.",
  },
  {
    q: "Campus hiring vs job portals: Why hire digital marketers direct from BMI?",
    a: "Job portals flood recruiters with unvetted resumes requiring weeks of manual screening. Campus hiring from BMI gives you pre-assessed, job-ready digital marketers trained on live client ad budgets, cutting recruitment time by 80% with verified project portfolios.",
  },
  {
    q: "Recruitment agency vs direct hiring: What is the cost difference?",
    a: "Traditional recruitment agencies charge 8.33% to 15% annual CTC commission per candidate. Direct campus hiring from Balaji Marketing Institute is 100% free recruitment for digital marketers with zero placement agency fees or commissions.",
  },
  {
    q: "What is the cost of hiring a digital marketer and average salary of a digital marketing fresher in India?",
    a: "While agency recruitment fees typically cost ₹40,000 to ₹1,00,000+ per hire, hiring from BMI costs ₹0. The average salary of a digital marketing fresher in India currently ranges between ₹4.5 LPA and ₹8.5 LPA depending on technical specialization like Meta Ads, Google Ads, or GA4 attribution.",
  },
  {
    q: "Digital marketing intern vs full-time hire: Which is right for your team?",
    a: "If you need immediate project support or want to evaluate talent before full-time onboarding, our 3- to 6-month digital marketing interns are ideal. If you require ownership of revenue funnels, paid media campaigns, or SEO rankings, our full-time graduates step in ready from week one.",
  },
  {
    q: "What skills to look for in a digital marketer?",
    a: "Key competencies include hands-on paid media execution (Meta Ads Manager, Google Ads), search engine optimization (technical audits, Semrush), conversion rate optimization, GA4 web analytics, CRM automation, and Generative AI prompting. BMI candidates are vetted across all these domains.",
  },
  {
    q: "How long does it take to hire a digital marketer from BMI?",
    a: "Our corporate placement cell delivers curated, pre-screened shortlists within 48 hours of receiving your requisition. Most hiring partners complete virtual or on-campus interviews and roll out offer letters within 5 to 7 business days.",
  },
  {
    q: "How can we join the next hiring drive?",
    a: "Fill out the recruiter form on this page or call our Corporate Relations desk at +91 83681 21032. Our placement relationship manager will share matching candidate resumes within 48 working hours.",
  },
];

export default function HireFromUsView() {
  // Form State
  const [formData, setFormData] = useState({
    companyName: "",
    recruiterName: "",
    workEmail: "",
    phone: "",
    selectedRole: "",
    openingsCount: "1-2",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPlacementModal, setShowPlacementModal] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (formRef.current) {
      const headerOffset = 100;
      const elementPosition = formRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setTimeout(() => {
        const input = formRef.current?.querySelector<HTMLInputElement>("input");
        input?.focus({ preventScroll: true });
      }, 400);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.recruiterName || !formData.workEmail || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.recruiterName} (${formData.companyName})`,
          email: formData.workEmail,
          phone: formData.phone,
          course: `Hiring: ${formData.selectedRole || "General"} (${formData.openingsCount} openings)`,
          message: `Recruiter enquiry from ${formData.companyName}. Recruiter: ${formData.recruiterName}, Openings: ${formData.openingsCount}, Role: ${formData.selectedRole}`,
        }),
      }).catch((err) => console.error("Lead submission error:", err));
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F86104", "#182033", "#059669", "#EC8524"],
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#182033] selection:bg-[#F86104]/20 selection:text-[#182033]">
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:py-20 lg:py-24 border-b border-[#E8E6E2] bg-gradient-to-b from-[#FAF7F2] via-white to-[#FFFDF9]">
        {/* Subtle Ambient Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F86104]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#182033]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Subtext, Trust */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-[#F86104] text-xs font-bold uppercase tracking-wider mb-6">
                <Briefcase className="w-4 h-4 text-[#F86104]" />
                <span>CORPORATE HIRING & TALENT PARTNERSHIP</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-[#182033] mb-6">
                Hire Job-Ready Marketing Graduates,{" "}
                <span className="text-[#F86104] underline decoration-[#F86104]/30 underline-offset-8">
                  Ready from Week One
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8 max-w-2xl">
                Skip months of training. Our graduates have worked on live projects, real budgets and real business problems, so they join your team ready to contribute.
              </p>

              {/* Key Pillars Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#182033] bg-white/80 p-2.5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                  <span>0 Placement & Agency Fees</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#182033] bg-white/80 p-2.5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                  <span>Shortlists in 48 Working Hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#182033] bg-white/80 p-2.5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                  <span>Live Meta, Google & GA4 Hands-On</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#182033] bg-white/80 p-2.5 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                  <span>Full-Time CTC & Internship Tracks</span>
                </div>
              </div>

              {/* Trust Line */}
              <div className="pt-6 border-t border-[#E8E6E2] w-full max-w-xl">
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                  RECRUITER TRUST & ALUMNI FOOTPRINT:
                </p>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  Trusted by <strong className="text-[#182033] font-bold">150+ companies</strong>, including{" "}
                  <span className="font-semibold text-[#182033]">Dainik Jagran</span>,{" "}
                  <span className="font-semibold text-[#182033]">Americanz Muscles</span>,{" "}
                  <span className="font-semibold text-[#182033]">Thaagam Foundation</span>, and{" "}
                  <span className="font-semibold text-[#182033]">Balaji Marketing Experts</span>.
                </p>
              </div>
            </div>

            {/* Right Column: Recruiter Form Card */}
            <div className="lg:col-span-5" ref={formRef}>
              <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_12px_40px_rgba(24,32,51,0.08)] p-6 sm:p-8 relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F5F9]">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#182033]">
                      Start Hiring
                    </h2>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Share your requirement. Matching profiles in 48 hours.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] text-[11px] font-bold">
                    Zero Recruiter Fees
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4 border border-[#A7F3D0]">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#182033] mb-2">
                      Requirement Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] max-w-xs leading-relaxed mb-6">
                      Thank you, <strong>{formData.recruiterName}</strong>! Our corporate placement desk is reviewing your requirements for <strong>{formData.companyName}</strong>. We will share matching candidate resumes within 48 working hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          companyName: "",
                          recruiterName: "",
                          workEmail: "",
                          phone: "",
                          selectedRole: "",
                          openingsCount: "1-2",
                        });
                      }}
                      className="text-xs font-bold text-[#F86104] hover:underline"
                    >
                      Submit another hiring role →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#182033] mb-1">
                        Company Name <span className="text-[#F86104]">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="companyName"
                          required
                          placeholder="e.g. Acme Media Corp"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] focus:bg-white focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#182033] mb-1">
                        Your Name <span className="text-[#F86104]">*</span>
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="recruiterName"
                          required
                          placeholder="e.g. Rohan Sharma (HR / Hiring Manager)"
                          value={formData.recruiterName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] focus:bg-white focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#182033] mb-1">
                          Work Email <span className="text-[#F86104]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            name="workEmail"
                            required
                            placeholder="rohan@acme.com"
                            value={formData.workEmail}
                            onChange={handleInputChange}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] focus:bg-white focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#182033] mb-1">
                          Phone Number <span className="text-[#F86104]">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] focus:bg-white focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#182033] mb-1">
                        Roles You’re Hiring For <span className="text-[#F86104]">*</span>
                      </label>
                      <select
                        name="selectedRole"
                        required
                        value={formData.selectedRole}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] focus:bg-white focus:border-[#F86104] focus:ring-2 focus:ring-[#F86104]/20 outline-none transition-all"
                      >
                        <option value="">Select Primary Role</option>
                        {PLACEMENT_ROLES.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                        <option value="Other / Multiple">Other / Multiple Roles</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#F86104] hover:bg-[#DA3A0A] text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Hire Talent</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-4 text-[11px] text-[#64748B] pt-1">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        No recruiter fees
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#F86104]" />
                        48hr SLA Turnaround
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 1. TRUSTED BY LEADING COMPANIES ──────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E8E6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              HIRING ECOSYSTEM & PARTNER BRANDS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Companies That Hire From Us
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              From fast-growing startups to established brands, recruiters return because our graduates deliver.
            </p>
          </div>

          {/* Recruiter Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {HIRING_COMPANIES.map((company, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] hover:bg-white p-4 rounded-2xl border border-[#EBE3D5] hover:border-[#F86104]/40 hover:shadow-md transition-all flex flex-col justify-between text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center font-black text-xs text-[#182033] mb-3 group-hover:text-[#F86104] transition-colors">
                  {company.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#182033] leading-snug">
                    {company.name}
                  </h3>
                  <span className="text-[10px] text-[#64748B] block mt-0.5">
                    {company.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Link: View Placement Report */}
          <div className="text-center">
            <button
              onClick={() => setShowPlacementModal(true)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F86104] hover:text-[#DA3A0A] bg-[#FFF7ED] hover:bg-[#FED7AA]/40 px-5 py-2.5 rounded-full border border-[#FED7AA] transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Placement Report (Batch 2024–2025)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. OUR NUMBERS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              VERIFIABLE TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Proven Talent, Ready to Join
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] text-center shadow-sm">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F86104] tracking-tight mb-1">
                150+
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#182033]">
                Hiring Partners
              </p>
              <p className="text-[11px] text-[#64748B] mt-1">Startups, D2C & Top Agencies</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] text-center shadow-sm">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#182033] tracking-tight mb-1">
                2,500+
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#182033]">
                Graduates Placed
              </p>
              <p className="text-[11px] text-[#64748B] mt-1">Across Delhi NCR & Pan-India</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] text-center shadow-sm">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#059669] tracking-tight mb-1">
                ₹8.2 LPA
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#182033]">
                Average CTC
              </p>
              <p className="text-[11px] text-[#64748B] mt-1">Packages reach up to ₹11.5 LPA</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] text-center shadow-sm">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F86104] tracking-tight mb-1">
                92%
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#182033]">
                Recruiters Who Hire Again
              </p>
              <p className="text-[11px] text-[#64748B] mt-1">High retention & productivity</p>
            </div>
          </div>

          <p className="text-center text-xs text-[#64748B]">
            *Placement data for batch 2024–2025. Average calculated across full-time CTC verified offers in Rohini, Delhi NCR.
          </p>
        </div>
      </section>

      {/* ── 3. WHAT RECRUITERS SAY ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              HIRING MANAGER TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              What Hiring Managers Say About Our Graduates
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Speed of hiring, practical job readiness, and zero hand-holding in week one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {RECRUITER_QUOTES.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EBE3D5] flex flex-col justify-between hover:bg-white hover:border-[#F86104]/30 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                      {item.speedTag}
                    </span>
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E0D0]">
                  <p className="text-xs font-bold text-[#182033]">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-[#64748B]">
                    {item.title} · <strong className="text-[#182033]">{item.company}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY ENTRY-LEVEL HIRING IS HARD ────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#DA3A0A] mb-2 block">
              THE RECRUITMENT BOTTLENECK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Hiring Entry-Level Marketers Shouldn’t Be This Hard
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Traditional graduate hiring wastes months of senior bandwidth and yields low retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] text-[#F86104] flex items-center justify-center font-black text-lg mb-5">
                  01
                </div>
                <h3 className="text-lg font-extrabold text-[#182033] mb-2">
                  Skills Gap
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Many graduates know the textbook theory but have never managed a real marketing budget, run an active ad campaign, or handled client deliverables.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] font-semibold text-[#DA3A0A]">
                Problem: High risk of wasted ad spend
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] text-[#F86104] flex items-center justify-center font-black text-lg mb-5">
                  02
                </div>
                <h3 className="text-lg font-extrabold text-[#182033] mb-2">
                  Long Training Time
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  New hires can take months of senior hand-holding before they contribute. Your team spends critical hours training instead of scaling revenue.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] font-semibold text-[#DA3A0A]">
                Problem: Drains senior manager productivity
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] text-[#F86104] flex items-center justify-center font-black text-lg mb-5">
                  03
                </div>
                <h3 className="text-lg font-extrabold text-[#182033] mb-2">
                  Hiring Once a Year
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Traditional campus hiring follows a fixed, inflexible academic calendar, which makes agile quarterly planning and just-in-time hiring hard.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] font-semibold text-[#DA3A0A]">
                Problem: Rigid recruitment timelines
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW WE PREPARE OUR GRADUATES ──────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] mb-2 block">
              THE BMI PEDAGOGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Trained for the Job, Not Just the Exam
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Agency simulation, live client ad spend, and continuous evaluation from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EBE3D5] flex flex-col justify-between hover:border-[#059669]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[#182033] mb-2">
                  Selective Admission
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Candidates go through an application screening, an analytical aptitude test, and personal interviews before they join. We accept only learners with high intent.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E0D0] text-[11px] font-bold text-[#059669]">
                ✓ Verified baseline aptitude & drive
              </div>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EBE3D5] flex flex-col justify-between hover:border-[#059669]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[#182033] mb-2">
                  Hands-On Learning
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  4+ comprehensive live projects, 200+ hours of practical agency training, and mentorship from active practitioners managing live advertising budgets.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E0D0] text-[11px] font-bold text-[#059669]">
                ✓ Real campaign spend & client audits
              </div>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EBE3D5] flex flex-col justify-between hover:border-[#059669]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mb-5">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[#182033] mb-2">
                  Business-Ready Skills
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Brand and digital marketing, sales pipelines, Looker Studio dashboards, Excel modeling, pitch decks, and executive workplace communication.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E0D0] text-[11px] font-bold text-[#059669]">
                ✓ Productive from their very first sprint
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. MID-PAGE CTA ──────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#182033] via-[#1E293B] to-[#182033] text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-[#F86104]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F89520] text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            48-HOUR RECRUITER MATCH GUARANTEE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            Find Job-Ready Talent for Your Team
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mb-6">
            Tell us what you need. We’ll share matching candidate profiles within <strong>2 working days</strong>.
          </p>
          <button
            onClick={scrollToForm}
            className="px-8 py-3.5 rounded-xl bg-[#F86104] hover:bg-[#DA3A0A] text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <span>Hire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── 7. HIRING FROM US VS TRADITIONAL HIRING ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E6E2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              HEAD-TO-HEAD COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              A Faster, Simpler Way to Hire
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E2E8F0] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#E2E8F0]">
                  <th className="p-4 sm:p-5 text-xs font-black uppercase text-[#64748B] w-1/4">
                    Evaluation Factor
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-black uppercase text-[#059669] bg-[#ECFDF5]/50 w-2/5">
                    Hiring From Balaji Marketing Institute
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-black uppercase text-[#64748B] w-1/3">
                    Traditional Campus & Portal Hiring
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#182033]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-[#065F46] bg-[#ECFDF5]/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                        <span>{row.fromUs}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#64748B]">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 8. HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              SEAMLESS PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Hire in Four Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#182033] text-white font-extrabold text-xs flex items-center justify-center mb-4">
                1
              </span>
              <h3 className="text-base font-extrabold text-[#182033] mb-2">
                Share Your Requirement
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Send the job description and what specific skill sets you’re looking for.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#F86104] text-white font-extrabold text-xs flex items-center justify-center mb-4">
                2
              </span>
              <h3 className="text-base font-extrabold text-[#182033] mb-2">
                Get Matched Profiles
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                We shortlist pre-vetted candidates who fit your exact role within 48 hours.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#182033] text-white font-extrabold text-xs flex items-center justify-center mb-4">
                3
              </span>
              <h3 className="text-base font-extrabold text-[#182033] mb-2">
                Interview and Select
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Meet vetted candidates on your schedule via virtual rounds or campus visits.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#059669] text-white font-extrabold text-xs flex items-center justify-center mb-4">
                4
              </span>
              <h3 className="text-base font-extrabold text-[#182033] mb-2">
                Offer and Onboard
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Roll out offers with zero friction. We actively support the joining and documentation process.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="px-8 py-3.5 rounded-xl bg-[#182033] hover:bg-[#F86104] text-white font-extrabold text-sm tracking-wide shadow-md transition-all cursor-pointer active:scale-95 inline-flex items-center gap-2"
            >
              <span>Start Hiring</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 9. ROLES YOU CAN HIRE FOR ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E6E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              SPECIALIZATION DOMAINS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Roles We Place Graduates In
            </h2>
          </div>

          {/* Badges Flow */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-8">
            {PLACEMENT_ROLES.map((role, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setFormData((prev) => ({ ...prev, selectedRole: role }));
                  scrollToForm();
                }}
                className="px-4 py-2.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#FFF7ED] border border-[#EBE3D5] hover:border-[#FED7AA] text-xs sm:text-sm font-bold text-[#182033] hover:text-[#F86104] transition-all flex items-center gap-2 cursor-pointer shadow-sm group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F86104] group-hover:scale-125 transition-transform" />
                <span>{role}</span>
              </button>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-[#64748B]">
            Don’t see your role?{" "}
            <button
              onClick={scrollToForm}
              className="text-[#F86104] font-bold hover:underline cursor-pointer"
            >
              Tell us what you need
            </button>
            —we train and assess candidates across customized workflows.
          </p>
        </div>
      </section>

      {/* ── 10. IN THE NEWS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8E6E2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              MEDIA COVERAGE & PRESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Featured In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MEDIA_MENTIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-[#F86104] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FED7AA]">
                      {item.outlet}
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#182033] leading-snug mb-4">
                    {item.headline}
                  </h3>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">Industry Spotlight</span>
                  <span className="font-bold text-[#182033] hover:text-[#F86104] inline-flex items-center gap-1 cursor-pointer">
                    {item.linkText}
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. RECRUITER FAQS ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E6E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F86104] mb-2 block">
              EVERYTHING EMPLOYERS NEED TO KNOW
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182033] tracking-tight">
              Recruiter FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E2E8F0] bg-[#FAF7F2] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#182033] hover:text-[#F86104] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 text-[#64748B] ${
                        isOpen ? "rotate-180 text-[#F86104]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EBE3D5] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F2] to-[#FFFDF9] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#F86104] border border-[#FED7AA] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            HIRE TALENT IN 48 HOURS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#182033] tracking-tight mb-4">
            Ready to Hire?
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto mb-8">
            Tell us your requirement and we’ll do the rest. Pre-assessed profiles, zero recruiter fees, and rapid onboarding.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F86104] hover:bg-[#DA3A0A] text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Hire Talent</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+918368121032"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#182033] font-bold text-sm border border-[#CBD5E1] shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#059669]" />
              <span>Talk to Our Team (+91 83681 21032)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PLACEMENT REPORT MODAL ────────────────────────────────────────── */}
      {showPlacementModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowPlacementModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F1F5F9] text-[#64748B] hover:text-[#182033] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F86104] bg-[#FFF7ED] px-2.5 py-0.5 rounded-full border border-[#FED7AA]">
                OFFICIAL REPORT · BATCH 2024-2025
              </span>
              <h3 className="text-2xl font-black text-[#182033] mt-2">
                Annual Placement & Recruiter Report
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Audited metrics across full-time placements and stipended agency internships.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EBE3D5] text-center">
                <p className="text-2xl font-black text-[#F86104]">96.4%</p>
                <p className="text-[11px] font-semibold text-[#64748B]">Placement Rate</p>
              </div>
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EBE3D5] text-center">
                <p className="text-2xl font-black text-[#182033]">₹8.2 LPA</p>
                <p className="text-[11px] font-semibold text-[#64748B]">Average CTC</p>
              </div>
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EBE3D5] text-center">
                <p className="text-2xl font-black text-[#059669]">₹12.0 LPA</p>
                <p className="text-[11px] font-semibold text-[#64748B]">Highest CTC</p>
              </div>
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EBE3D5] text-center">
                <p className="text-2xl font-black text-[#F86104]">150+</p>
                <p className="text-[11px] font-semibold text-[#64748B]">Hiring Partners</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <strong className="text-[#182033] block mb-1">Domain Distribution:</strong>
                <p>
                  • Paid Media & Performance Marketing: <strong>38%</strong><br />
                  • SEO, Content Strategy & Inbound: <strong>26%</strong><br />
                  • B2B Sales & Business Development: <strong>20%</strong><br />
                  • Analytics, Dashboards & Operations: <strong>16%</strong>
                </p>
              </div>
              <p>
                All placement offers undergo verification through corporate offer letters and salary documentation. Recruiting partners range from seed-stage funded startups to publicly traded agencies and media houses across Rohini, Delhi NCR, and remote pan-India hubs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#F1F5F9]">
              <button
                onClick={() => setShowPlacementModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-bold text-[#64748B] hover:text-[#182033] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowPlacementModal(false);
                  scrollToForm();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#F86104] hover:bg-[#DA3A0A] text-white text-xs font-extrabold shadow-md cursor-pointer"
              >
                Hire From Next Batch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
