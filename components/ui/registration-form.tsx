"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface RegistrationFormProps {
  id?: string;
  className?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  deadline?: string;
  redirectUrl?: string;
  onSubmitSuccess?: () => void;
}

export default function RegistrationForm({
  id = "registration-form",
  className = "",
  badge = "ADMISSIONS OPEN 2026",
  title = "Apply for the Marketing Launchpad",
  subtitle = "Transform your career with Delhi's premier agency training",
  deadline = "5 Oct 2026",
  redirectUrl,
  onSubmitSuccess,
}: RegistrationFormProps) {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsappOptIn: "no",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const triggerFocusAndHighlight = () => {
      setIsHighlighted(true);
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
      setTimeout(() => setIsHighlighted(false), 2400);
    };

    const handleHash = () => {
      if (
        typeof window !== "undefined" &&
        (window.location.hash === "#apply" ||
          window.location.hash === "#registration-form" ||
          window.location.hash === "#register")
      ) {
        if (formRef.current) {
          const headerOffset = 110;
          const elementPosition = formRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
        triggerFocusAndHighlight();
      }
    };

    // On initial mount, if page loaded with #apply
    const initialTimer = setTimeout(handleHash, 300);
    window.addEventListener("hashchange", handleHash);

    // Global listener for on-page apply clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[href*='#apply'], a[href*='#registration-form'], a[href*='#register']"
      );
      if (target) {
        const rawHref = target.getAttribute("href") || "";
        const isCurrentPageAnchor =
          rawHref === "#apply" ||
          rawHref === "#registration-form" ||
          rawHref === "#register" ||
          (rawHref.includes("#apply") &&
            (rawHref.startsWith(window.location.pathname) || rawHref.startsWith("/#apply")));

        if (isCurrentPageAnchor && formRef.current) {
          e.preventDefault();
          const headerOffset = 110;
          const elementPosition = formRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          window.history.pushState(null, "", "#apply");
          triggerFocusAndHighlight();
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("hashchange", handleHash);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const getTargetIntroductionUrl = () => {
    if (redirectUrl) return redirectUrl;
    if (typeof window === "undefined") return "/courses/digital-marketing/your-introduction";
    const p = window.location.pathname.replace(/\/$/, "");
    if (p === "/courses/diploma") return "/courses/diploma/your-introduction";
    if (p === "/courses/digital-marketing") return "/courses/digital-marketing/your-introduction";
    if (p === "/courses/mba-marketing") return "/courses/mba-marketing/your-introduction";
    if (p === "/courses/mba" || p === "/mba") return "/courses/mba-marketing/your-introduction";
    if (p === "/courses/executive" || p === "/executive") return "/courses/executive/your-introduction";
    if (p.startsWith("/courses/")) return `${p}/your-introduction`;
    return "/courses/digital-marketing/your-introduction";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    // Save applicant details to sessionStorage
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "bmi_applicant_data",
          JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            courseName: title,
            submittedAt: new Date().toISOString(),
          })
        );
      }
    } catch {
      // ignore
    }

    const targetUrl = getTargetIntroductionUrl();
    const query = new URLSearchParams({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    }).toString();
    const destination = `${targetUrl}?${query}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSubmitSuccess?.();

      // Smoothly navigate to candidate introduction
      setTimeout(() => {
        router.push(destination);
      }, 700);
    }, 600);
  };

  return (
    <div
      ref={formRef}
      id={id}
      className={`w-full max-w-[390px] bg-white rounded-2xl p-4 sm:p-5 shadow-[0_16px_40px_rgba(248,97,4,0.08),0_4px_16px_rgba(0,0,0,0.04)] border transition-all duration-500 relative overflow-hidden ${
        isHighlighted
          ? "border-[#F86104] ring-4 ring-[#F86104]/30 shadow-[0_0_35px_rgba(248,97,4,0.35)] scale-[1.02]"
          : "border-[#F1E5D8]"
      } ${className}`}
    >
      {/* Top subtle brand accent bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F47B20] via-[#FBB034] to-[#1F2A5C]" />

      {isSubmitted ? (
        <div className="py-6 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mb-3 animate-pulse">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-[#1F2A5C] mb-1.5">Details Submitted!</h3>
          <p className="text-xs text-[#64748B] mb-3.5 max-w-xs leading-relaxed">
            Thank you, <span className="font-semibold text-[#1F2A5C]">{formData.fullName}</span>. Opening your introduction...
          </p>
          <a
            href={`${getTargetIntroductionUrl()}?name=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F86104] hover:bg-[#e05400] text-white text-xs font-semibold shadow-sm transition-all"
          >
            <span>Start Introduction Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5 text-left">
          {/* Badge & Headings */}
          <div className="text-center">
            <span className="inline-block bg-[#FFF4EB] text-[#F47B20] font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[#FED7AA]">
              {badge}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-[#1F2A5C] tracking-tight mt-1.5">
              {title}
            </h3>
            <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
              {subtitle}
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-[#1F2A5C] uppercase mb-1">
              FULL NAME *
            </label>
            <div className="relative flex items-center border border-[#E2E8F0] rounded-lg px-3 py-2 bg-white focus-within:border-[#F47B20] focus-within:ring-2 focus-within:ring-[#F47B20]/15 transition-all">
              <User className="w-3.5 h-3.5 text-[#94A3B8] mr-2 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full text-xs text-[#1F2A5C] placeholder-[#94A3B8] outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-[#1F2A5C] uppercase mb-1">
              EMAIL ADDRESS *
            </label>
            <div className="relative flex items-center border border-[#E2E8F0] rounded-lg px-3 py-2 bg-white focus-within:border-[#F47B20] focus-within:ring-2 focus-within:ring-[#F47B20]/15 transition-all">
              <Mail className="w-3.5 h-3.5 text-[#94A3B8] mr-2 flex-shrink-0" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs text-[#1F2A5C] placeholder-[#94A3B8] outline-none bg-transparent"
              />
            </div>
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-[#1F2A5C] uppercase mb-1">
              WHATSAPP NUMBER *
            </label>
            <div className="flex border border-[#E2E8F0] rounded-lg overflow-hidden bg-white focus-within:border-[#F47B20] focus-within:ring-2 focus-within:ring-[#F47B20]/15 transition-all">
              <div className="bg-[#F8FAFC] px-2.5 py-2 text-xs font-semibold text-[#1F2A5C] border-r border-[#E2E8F0] flex items-center justify-center select-none">
                +91
              </div>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                placeholder="8368121032"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                className="w-full px-2.5 py-2 text-xs text-[#1F2A5C] placeholder-[#94A3B8] outline-none bg-transparent"
              />
            </div>
          </div>

          {/* WhatsApp Opt-in Question Box */}
          <div className="bg-[#FFFDF9] border border-[#FED7AA]/80 rounded-lg p-2.5 text-[11px] text-[#1F2A5C]">
            <p className="font-medium text-[#1F2A5C] mb-1.5 flex items-center gap-1.5 flex-wrap leading-tight">
              Get screening test & curriculum details on{" "}
              <span className="inline-flex items-center gap-1 font-semibold text-[#16A34A]">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                WhatsApp?
              </span>
            </p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-medium text-[#1F2A5C]">
                <input
                  type="radio"
                  name="whatsappOptIn"
                  value="yes"
                  checked={formData.whatsappOptIn === "yes"}
                  onChange={() => setFormData({ ...formData, whatsappOptIn: "yes" })}
                  className="accent-[#F47B20] w-3 h-3"
                />
                Yes
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-medium text-[#1F2A5C]">
                <input
                  type="radio"
                  name="whatsappOptIn"
                  value="no"
                  checked={formData.whatsappOptIn === "no"}
                  onChange={() => setFormData({ ...formData, whatsappOptIn: "no" })}
                  className="accent-[#F47B20] w-3 h-3"
                />
                No
              </label>
            </div>
          </div>

          {/* Scholarship Deadline Banner */}
          <div className="bg-[#FFF7ED] border border-[#FED7AA]/80 rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#9A3412] flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#F47B20]" />
              Scholarship Deadline:
            </span>
            <span className="bg-[#F47B20] text-white font-bold px-2 py-0.5 rounded text-[10px] shadow-sm">
              {deadline}
            </span>
          </div>

          {/* Submit CTA Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#F47B20] via-[#F58634] to-[#E06509] hover:from-[#e06509] hover:to-[#c44f00] text-white font-bold text-xs tracking-wider uppercase py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(244,123,32,0.35)] hover:shadow-[0_8px_25px_rgba(244,123,32,0.45)] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75"
          >
            {isSubmitting ? "PROCESSING..." : "START YOUR MARKETING JOURNEY"}
            {!isSubmitting && <ArrowRight className="w-3.5 h-3.5" />}
          </button>

          {/* Privacy Disclaimer */}
          <div className="text-center pt-0.5">
            <p className="text-[10px] text-[#64748B] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#16A34A]" />
              100% Privacy Protected. No spam guaranteed.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
