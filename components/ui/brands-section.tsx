"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import {
  Sparkles,
  Briefcase,
  Phone,
  ArrowRight,
  CheckCircle2,
  X,
  MessageCircle,
  Building2,
  Users,
  Send,
} from "lucide-react";

// ─── Brand Data with categories & unique styling ──────────────────────────────
export interface BrandItem {
  name: string;
  category: string;
  color: string;
  symbol: string;
  icon?: string;
}

// Row 1: 8 Brands (moving left)
export const brandsRow1: BrandItem[] = [
  {
    name: "Dainik Jagran",
    category: "News & Media",
    color: "#E13B2A",
    symbol: "DJ",
  },
  {
    name: "Americanz Muscles",
    category: "Fitness & Sports Nutrition",
    color: "#F86104",
    symbol: "AM",
  },
  {
    name: "Thaagam Foundation",
    category: "NGO & Social Impact",
    color: "#10B981",
    symbol: "TF",
  },
  {
    name: "Balaji Marketing Experts",
    category: "Marketing Services",
    color: "#1F2A5C",
    symbol: "BME",
  },
  {
    name: "The Archoline Architects",
    category: "Architecture",
    color: "#0284C7",
    symbol: "TAA",
  },
  {
    name: "Globe decorez",
    category: "Decor & Interiors",
    color: "#8B5CF6",
    symbol: "GD",
  },
  {
    name: "Applied Education Services",
    category: "Education",
    color: "#2563EB",
    symbol: "AES",
  },
  {
    name: "Shambhhavi Travels",
    category: "Travel & Tourism",
    color: "#0D9488",
    symbol: "ST",
  },
];

// Row 2: 8 Brands (moving right)
export const brandsRow2: BrandItem[] = [
  {
    name: "Punjab Kesari",
    category: "News & Media",
    color: "#EA580C",
    symbol: "PK",
  },
  {
    name: "Prabhat Khabar",
    category: "News & Media",
    color: "#DC2626",
    symbol: "PK",
  },
  {
    name: "RAHAT NGO & Therapies",
    category: "NGO & Therapy Services",
    color: "#059669",
    symbol: "RNT",
  },
  {
    name: "Ad2Lead Hub",
    category: "Advertising & Lead Generation",
    color: "#FBB034",
    symbol: "A2L",
  },
  {
    name: "Perfect Interiors And Decorators",
    category: "Interior Design",
    color: "#D97706",
    symbol: "PID",
  },
  {
    name: "Property Dekho",
    category: "Real Estate",
    color: "#0891B2",
    symbol: "PD",
  },
  {
    name: "Saisha Eduversity",
    category: "Education",
    color: "#6366F1",
    symbol: "SE",
  },
  {
    name: "Dr. Sheikh Ayurveda",
    category: "Ayurveda & Wellness",
    color: "#16A34A",
    symbol: "DSA",
  },
];

// ─── Brand Card Component ─────────────────────────────────────────────────────
function BrandCard({ brand }: { brand: BrandItem }) {
  return (
    <div className="mx-3 sm:mx-4 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-5 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-[#FBB034]/50 hover:shadow-[0_8px_28px_rgba(251,176,52,0.15)] group cursor-default select-none shrink-0">
      {/* Brand Emblem / Monogram */}
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-black tracking-wider text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${brand.color}, ${brand.color}bb)`,
          boxShadow: `0 4px 16px ${brand.color}40`,
        }}
      >
        {brand.symbol}
      </div>

      {/* Brand Text Details */}
      <div className="flex flex-col text-left">
        <span className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#FBB034] whitespace-nowrap">
          {brand.name}
        </span>
        <span className="text-[11px] font-medium text-white/50 group-hover:text-white/70 transition-colors whitespace-nowrap">
          {brand.category}
        </span>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function BrandsSection() {
  const [showRecruiterModal, setShowRecruiterModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("Performance Marketer");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: companyName,
          phone: phone,
          email: "",
          course: `Hiring: ${role}`,
          message: `Recruiter enquiry from ${companyName} looking for ${role}`,
        }),
      }).catch((err) => console.error("Lead submission error:", err));
    } catch (err) {
      console.error("Lead submission error:", err);
    }
  };

  return (
    <section
      id="brands"
      className="relative w-full min-h-[calc(100svh-6rem)] bg-[#070D1F] py-12 md:py-16 overflow-hidden flex flex-col justify-center scroll-mt-24 snap-start border-t border-white/5"
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[300px] rounded-full bg-[#F86104]/10 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[350px] rounded-full bg-[#1F2A5C]/40 blur-[130px]" />
      </div>

      {/* Subtle top & bottom divider lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-2 mb-8 md:mb-12 px-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FBB034]">
            <Sparkles className="w-3 h-3 text-[#F86104]" />
            Brand Collaborations &amp; Clients
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Brands We Work With
          </h2>

          <div className="h-[2.5px] w-14 bg-gradient-to-r from-[#F86104] to-[#FBB034] rounded-full" />

          <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-xl">
            From national media publications and fast-growing fitness brands to NGOs, architecture firms, real estate platforms and wellness enterprises.
          </p>
        </motion.div>

        {/* Row 1 — Moving Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 sm:mb-5"
        >
          <Marquee duration={32} pauseOnHover fade fadeAmount={10}>
            {brandsRow1.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </Marquee>
        </motion.div>

        {/* Row 2 — Moving Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Marquee duration={28} pauseOnHover direction="right" fade fadeAmount={10}>
            {brandsRow2.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </Marquee>
        </motion.div>

        {/* Recruiter "Hire From Us" CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 sm:mt-14 max-w-5xl mx-auto px-4 sm:px-6"
        >
          <div className="relative rounded-3xl border border-[#F86104]/30 bg-gradient-to-br from-[#121c38]/95 via-[#0d162d]/90 to-[#070D1F] p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_50px_rgba(248,97,4,0.14)] overflow-hidden">
            {/* Ambient inner orange glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#F86104]/12 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Left Column: Heading & Value Prop */}
              <div className="flex flex-col text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 self-center lg:self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#FBB034] mb-2.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#F86104]" />
                  Recruiters &amp; Agency Leaders
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  Looking to hire top marketing &amp; sales talent?
                </h3>

                <p className="text-xs sm:text-sm text-white/70 mt-2 max-w-xl leading-relaxed">
                  Hire pre-trained, day-1 ready digital marketers and performance executives from Balaji Marketing Institute at{" "}
                  <span className="text-[#FBB034] font-bold">₹0 recruitment fee</span>. Fast 48-hour shortlists with verified practical campaign skills.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4 text-[11px] font-medium text-white/60">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Zero Placement Charges
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Meta &amp; Google Ads Certified
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Immediate Joiners
                  </span>
                </div>
              </div>

              {/* Right Column: CTA Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setShowRecruiterModal(true);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F86104] via-[#F47B20] to-[#FBB034] text-white text-sm font-extrabold shadow-[0_8px_25px_rgba(248,97,4,0.35)] hover:shadow-[0_12px_35px_rgba(248,97,4,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Hire From Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918368121032"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FBB034]" />
                  <span>Recruiter Desk: 8368121032</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recruiter Hiring Modal */}
      <AnimatePresence>
        {showRecruiterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRecruiterModal(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-3xl bg-[#0E1528] border border-white/15 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.6)] text-white z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowRecruiterModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F86104] to-[#FBB034] flex items-center justify-center text-white shadow-md">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    Hire Talent from BMI
                  </h3>
                  <p className="text-[11px] text-[#FBB034] font-semibold">
                    Balaji Marketing Institute · Placement Cell
                  </p>
                </div>
              </div>

              {!isSubmitted ? (
                <>
                  <p className="text-xs text-white/60 mb-5 leading-relaxed">
                    Connect directly with our placement team or submit your role requirements to get candidate profiles within 24 hours.
                  </p>

                  {/* Quick Connect Buttons */}
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    <a
                      href="https://wa.me/918368121032?text=Hello%20Balaji%20Marketing%20Institute%2C%20we%20want%20to%20hire%20talent%20from%20your%20institute"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-300 text-xs font-semibold transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp Desk</span>
                    </a>

                    <a
                      href="tel:+918368121032"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FBB034]" />
                      <span>Call 8368121032</span>
                    </a>
                  </div>

                  {/* Hiring Enquiry Form */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-1">
                        Company / Agency Name
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Acme Media or Growth Labs"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F86104]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-1">
                        Role Needed
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#141D34] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F86104]"
                      >
                        <option value="Performance Marketer (Meta & Google Ads)">
                          Performance Marketer (Meta &amp; Google Ads)
                        </option>
                        <option value="SEO & Content Strategist">
                          SEO &amp; Content Strategist
                        </option>
                        <option value="Social Media & Creative Strategist">
                          Social Media &amp; Creative Strategist
                        </option>
                        <option value="Sales & Business Development Executive">
                          Sales &amp; Business Development Executive
                        </option>
                        <option value="Full 360° Digital Marketing Specialist">
                          Full 360° Digital Marketing Specialist
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-1">
                        Contact Person &amp; Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F86104]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#F86104] to-[#FBB034] text-white text-xs sm:text-sm font-bold shadow-lg hover:opacity-95 transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Requirement</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Hiring Request Received!
                  </h4>
                  <p className="text-xs text-white/70 mt-1.5 max-w-xs leading-relaxed">
                    Our Corporate Placement Cell has received your details for{" "}
                    <span className="text-[#FBB034] font-semibold">{companyName || "your company"}</span>. We will share shortlists within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowRecruiterModal(false)}
                    className="mt-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
