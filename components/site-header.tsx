"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Laptop,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";

const COURSES = [
  {
    title: "Digital Marketing",
    href: "/courses/digital-marketing",
    badge: "6 Months · Placement Assistance",
    desc: "Agency-simulated training with Meta Ads, Google Ads, SEO, and AI Tools.",
    icon: Laptop,
    accentBg: "bg-[#FFF4EB]",
    accentBorder: "border-[#FED7AA]",
    iconColor: "text-[#F47B20]",
    tag: "Most Popular",
  },
  {
    title: "MBA Marketing",
    href: "/courses/mba-marketing",
    badge: "2 Years · Avg ₹8.2L CTC",
    desc: "Postgraduate brand leadership, growth strategy & 150+ placement partners.",
    icon: GraduationCap,
    accentBg: "bg-[#EEF2FF]",
    accentBorder: "border-[#C7D2FE]",
    iconColor: "text-[#1F2A5C]",
    tag: "Postgraduate",
  },
  {
    title: "Executive",
    href: "/courses/executive",
    badge: "3 Months · Weekend Batches",
    desc: "Performance marketing & data analytics upskilling for working professionals.",
    icon: Briefcase,
    accentBg: "bg-[#FEF3C7]",
    accentBorder: "border-[#FDE68A]",
    iconColor: "text-[#D97706]",
    tag: "Working Pros",
  },
];

const NAV: Array<{
  label: string;
  href: string;
  isDropdown?: boolean;
  highlight?: boolean;
}> = [
  { label: "Programs", href: "/#programs" },
  { label: "Courses", href: "/#courses", isDropdown: true },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Hire From Us", href: "/hire-from-us", highlight: true },
  { label: "About", href: "/#about" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll to hash anchor on initial page load or pathname change
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash === "programs" || hash === "courses" || hash === "program") {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const headerOffset = 96;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 150);
      }
    }
  }, [pathname]);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setCoursesOpen(false);
    }, 150);
  };

  const handleNavClick = (e?: React.MouseEvent, href: string = "/#programs") => {
    if (typeof window !== "undefined" && (href.startsWith("/#") || href.startsWith("#"))) {
      const id = href.replace(/^\/?#/, "");
      const el = document.getElementById(id);
      if (el) {
        if (e) e.preventDefault();
        const headerOffset = 96;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", `#${id}`);
        setOpen(false);
        setCoursesOpen(false);
      }
    }
  };

  const handleApplyClick = (e?: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      const isHomePage = pathname === "/" || pathname === "";
      const programsEl =
        document.getElementById("programs") ||
        document.getElementById("courses") ||
        document.getElementById("program");
      const applyEl =
        document.getElementById("apply") ||
        document.getElementById("registration-form");

      // On home page: always scroll directly to the programs section
      // On other pages: scroll to admissions form if present, else fallback to home programs
      const targetEl = isHomePage ? programsEl : (applyEl || programsEl);

      if (targetEl) {
        if (e) e.preventDefault();
        const headerOffset = 96;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        const targetId = targetEl.id || (isHomePage ? "programs" : "apply");
        window.history.pushState(null, "", `#${targetId}`);
        window.dispatchEvent(new HashChangeEvent("hashchange"));

        if (targetEl.id === "apply" || targetEl.id === "registration-form") {
          const inp = targetEl.querySelector<HTMLInputElement>("input");
          if (inp) {
            setTimeout(() => inp.focus({ preventScroll: true }), 350);
          }
        }
        setOpen(false);
        setCoursesOpen(false);
      } else {
        window.location.href = "/#programs";
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 h-24 border-b border-[#E8E6E2] bg-[#F6F1E6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Brand Logo */}
        <Link href="/" aria-label="Balaji Marketing Institute Home" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Balaji Marketing Institute"
            style={{ height: 72, width: "auto", mixBlendMode: "multiply" }}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tight text-[#F86104]">
              Balaji Marketing Institute
            </span>
            <span className="text-[11px] font-medium text-[#6B6B6B] tracking-widest uppercase">
              Learn · Grow · Lead · Succeed
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            if (item.isDropdown) {
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setCoursesOpen((v) => !v)}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors cursor-pointer py-2 ${
                      coursesOpen ? "text-[#F86104]" : "text-[#6B6B6B] hover:text-[#F86104]"
                    }`}
                    aria-expanded={coursesOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        coursesOpen ? "rotate-180 text-[#F86104]" : "text-[#6B6B6B]"
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown Card */}
                  <AnimatePresence>
                    {coursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[410px] rounded-2xl bg-white border border-[#F1E5D8] p-3 shadow-[0_16px_40px_rgba(31,42,92,0.14),0_4px_16px_rgba(248,97,4,0.06)] overflow-hidden z-50"
                      >
                        <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-[#F8FAFC]">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-[#F86104] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Explore Our 3 Courses
                          </span>
                          <span className="text-[10px] font-medium text-[#64748B]">
                            Admissions Open 2026
                          </span>
                        </div>

                        <div className="space-y-1.5 mt-2">
                          {COURSES.map((course) => {
                            const Icon = course.icon;
                            return (
                              <Link
                                key={course.title}
                                href={course.href}
                                onClick={() => setCoursesOpen(false)}
                                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#FFF8F0] transition-all border border-transparent hover:border-[#FED7AA]/60 cursor-pointer"
                              >
                                <div
                                  className={`w-10 h-10 rounded-xl ${course.accentBg} border ${course.accentBorder} flex items-center justify-center ${course.iconColor} shrink-0 group-hover:scale-105 transition-transform`}
                                >
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-sm font-bold text-[#1F2A5C] group-hover:text-[#F86104] transition-colors leading-tight">
                                      {course.title}
                                    </h4>
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FFF4EB] text-[#F86104] border border-[#FED7AA] shrink-0">
                                      {course.tag}
                                    </span>
                                  </div>
                                  <p className="text-[11px] font-semibold text-[#F86104] mt-0.5">
                                    {course.badge}
                                  </p>
                                  <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug line-clamp-2">
                                    {course.desc}
                                  </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#F86104] group-hover:translate-x-0.5 transition-all shrink-0 self-center opacity-0 group-hover:opacity-100" />
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-2 pt-2.5 border-t border-[#F8FAFC] px-3 pb-1 flex items-center justify-between text-[11px]">
                          <span className="text-[#64748B]">Need advice?</span>
                          <a
                            href="tel:+918368121032"
                            className="text-[#F86104] font-bold hover:underline inline-flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3" />
                            Direct Helpline: 8368121032
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm transition-all cursor-pointer ${
                  item.highlight
                    ? "font-bold text-[#F86104] hover:text-white px-3 py-1.5 rounded-full bg-[#FFF4EB] hover:bg-[#F86104] border border-[#FED7AA] shadow-sm flex items-center gap-1.5"
                    : "font-medium text-[#6B6B6B] hover:text-[#F86104]"
                }`}
              >
                {item.highlight && <Briefcase className="w-3.5 h-3.5" />}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+918368121032"
            className="flex items-center gap-2 rounded-full border border-[#E8E6E2] px-4 py-2 text-sm font-medium text-[#23272E] transition-colors hover:bg-[#E8E6E2]"
          >
            <Phone className="w-3.5 h-3.5 text-[#F86104]" />
            Talk to Us
          </a>
          <ShinyButton
            href={isHome ? "#programs" : "/#programs"}
            onClick={(e) => handleApplyClick(e)}
          >
            Apply Now
          </ShinyButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md p-2 text-[#23272E] md:hidden cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="absolute inset-x-0 top-24 border-b border-[#E8E6E2] bg-[#F6F1E6] px-4 pb-6 pt-3 md:hidden shadow-xl max-h-[calc(100vh-6rem)] overflow-y-auto">
          <nav aria-label="Mobile" className="flex flex-col space-y-1">
            {NAV.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="border-b border-[#E8E6E2]/60 py-2">
                    <button
                      type="button"
                      onClick={() => setMobileCoursesOpen((v) => !v)}
                      className="w-full flex items-center justify-between py-2 text-base font-bold text-[#1F2A5C] cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF4EB] text-[#F86104] border border-[#FED7AA]">
                          3 Programs
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#F86104] transition-transform ${
                          mobileCoursesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileCoursesOpen && (
                      <div className="mt-2 space-y-2 pl-2">
                        {COURSES.map((course) => {
                          const Icon = course.icon;
                          return (
                            <Link
                              key={course.title}
                              href={course.href}
                              onClick={() => {
                                setOpen(false);
                              }}
                              className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#F1E5D8] active:bg-[#FFF8F0]"
                            >
                              <div
                                className={`w-9 h-9 rounded-lg ${course.accentBg} ${course.iconColor} border ${course.accentBorder} flex items-center justify-center shrink-0`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-bold text-[#1F2A5C]">
                                    {course.title}
                                  </span>
                                  <span className="text-[10px] font-semibold text-[#F86104]">
                                    {course.tag}
                                  </span>
                                </div>
                                <span className="text-[11px] text-[#64748B] block truncate">
                                  {course.badge}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-2.5 text-base flex items-center justify-between border-b border-[#E8E6E2]/60 cursor-pointer ${
                    item.highlight
                      ? "text-[#F86104] font-bold"
                      : "font-medium text-[#23272E] hover:text-[#F86104]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.highlight && <Briefcase className="w-4 h-4 text-[#F86104]" />}
                    {item.label}
                  </span>
                  {item.highlight && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF4EB] text-[#F86104] border border-[#FED7AA]">
                      Recruiters
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 flex gap-3">
            <a
              href="tel:+918368121032"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-[#E8E6E2] bg-white py-2.5 text-center text-sm font-medium text-[#23272E]"
            >
              <Phone className="w-3.5 h-3.5 text-[#F86104]" />
              Talk to Us
            </a>
            <a
              href={isHome ? "#programs" : "/#programs"}
              onClick={(e) => handleApplyClick(e)}
              className="flex-1 rounded-full bg-[#F86104] py-2.5 text-center text-sm font-medium text-white cursor-pointer shadow-md shadow-[#F86104]/25"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
