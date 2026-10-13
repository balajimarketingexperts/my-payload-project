"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ExternalLink, Phone, Globe } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/balajimarketinginstitute",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/balajimarketinginstitute",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/balajimarketinginstitute",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@balajimarketinginstitute",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918368121032?text=Hi%2C%20I%20am%20interested%20in%20digital%20marketing%20course",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToHero = () => {
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#1a1f26] text-white overflow-hidden border-t border-white/10 pt-12 md:pt-16 pb-8 select-none">
      {/* Ambient background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F86104]/8 blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-cyan-500/8 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand & About Column (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col">
            <a href="/" aria-label="Balaji Marketing Institute" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Balaji Marketing Institute Logo"
                className="h-14 w-auto rounded-lg object-contain bg-white/5 p-1 border border-white/10"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-black tracking-tight text-[#F86104]">
                  Balaji Marketing Institute
                </span>
                <span className="text-[10px] font-medium text-white/50 tracking-widest uppercase">
                  Learn · Grow · Lead · Succeed
                </span>
              </div>
            </a>

            {/* Small neutral & positive institute info with brand keywords */}
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-sm">
              Established in 2022 in Rohini, Delhi, Balaji Marketing Institute (BMI) provides job-linked education designed to bridge classroom learning and live industry execution. Through hands-on programs in MBA Marketing, Executive management, and Digital Marketing, we help learners build practical skills that lead to real career growth.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-white/60 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F86104]" />
                <span>Rohini, Delhi — India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#F86104]" />
                <a
                  href="https://balajimarketinginstitute.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  balajimarketinginstitute.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+918368121032" className="hover:text-white transition-colors font-medium">
                  Contact: +91 83681 21032
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Rated 4.9 ★ by 200+ students on Google Reviews</span>
              </div>
            </div>

            {/* Social Media Links Integration */}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Balaji Marketing Institute on ${s.name}`}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#F86104] hover:border-[#F86104] transition-all duration-200 shadow-sm"
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Pages for Three Courses (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#F86104]" />
              Our Courses
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>
                <a href="/courses/mba-marketing" className="hover:text-[#F86104] transition-colors group flex flex-col">
                  <span className="font-semibold text-white/85 group-hover:text-[#F86104]">MBA in Marketing</span>
                  <span className="text-xs text-white/40">2-Year Postgraduate Program</span>
                </a>
              </li>
              <li>
                <a href="/courses/digital-marketing" className="hover:text-[#F86104] transition-colors group flex flex-col">
                  <span className="font-semibold text-white/85 group-hover:text-[#F86104]">Digital Marketing Course</span>
                  <span className="text-xs text-white/40">6-Month Comprehensive Training</span>
                </a>
              </li>
              <li>
                <a href="/courses/executive" className="hover:text-[#F86104] transition-colors group flex flex-col">
                  <span className="font-semibold text-white/85 group-hover:text-[#F86104]">Executive Marketing Program</span>
                  <span className="text-xs text-white/40">Weekend Batch for Working Professionals</span>
                </a>
              </li>
              <li className="pt-1">
                <a href="/#programs" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F86104] hover:underline underline-offset-4">
                  View All Programs →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Navigation (Headers in footer) (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#F86104]" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><a href="/hire-from-us" className="text-[#F86104] font-semibold hover:underline">Hire From Us (Recruiters) →</a></li>
              <li><a href="/#programs" className="hover:text-[#F86104] transition-colors">Programs</a></li>
              <li><a href="/#outcomes" className="hover:text-[#F86104] transition-colors">Outcomes</a></li>
              <li><a href="/#brands" className="hover:text-[#F86104] transition-colors">Brands We Work With</a></li>
              <li><a href="/#reviews" className="hover:text-[#F86104] transition-colors">Student Reviews</a></li>
              <li><a href="/#about" className="hover:text-[#F86104] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Column 4: Student Connect & Reviews (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#F86104]" />
              Connect & Support
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li>
                <a
                  href="https://balaji-marketing-experts.localo.site/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F5A623] hover:underline font-medium"
                >
                  <span>Google Reviews (4.9 ★)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+918368121032"
                  className="inline-flex items-center gap-2 text-white hover:text-[#F86104] transition-colors font-medium group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F86104] group-hover:scale-110 transition-transform" />
                  <span>+91 83681 21032</span>
                </a>
              </li>
              <li>
                <a
                  href="https://balajimarketinginstitute.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F86104] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-white/40" />
                  <span>balajimarketinginstitute.in</span>
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-[#F86104] transition-colors">
                  Apply for Admission
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 3D Massive Sliding Background Text ("BALAJI MARKETING INSTITUTE") ── */}
      <div className="relative w-full overflow-hidden py-6 mt-6 [perspective:1200px]">
        {/* Glow backdrop layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F86104]/5 via-transparent to-transparent pointer-events-none" />

        <div
          className="w-full flex will-change-transform"
          style={{
            transform: "rotateX(14deg) rotateZ(-0.5deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Marquee sliding towards the right */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 22,
            }}
            className="flex whitespace-nowrap will-change-transform gap-8"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8">
                <span
                  className="font-black text-6xl sm:text-8xl md:text-9xl lg:text-[140px] tracking-tight uppercase select-none text-transparent transition-all duration-500 cursor-default"
                  style={{
                    WebkitTextStroke: "1.5px rgba(245, 166, 35, 0.35)",
                    textShadow:
                      "0 0 25px rgba(245, 166, 35, 0.25), 0 0 60px rgba(245, 166, 35, 0.12)",
                    filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.8))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.webkitTextStroke = "2px rgba(245, 166, 35, 0.85)";
                    e.currentTarget.style.textShadow =
                      "0 0 35px rgba(245, 166, 35, 0.6), 0 0 80px rgba(245, 166, 35, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.webkitTextStroke = "1.5px rgba(245, 166, 35, 0.35)";
                    e.currentTarget.style.textShadow =
                      "0 0 25px rgba(245, 166, 35, 0.25), 0 0 60px rgba(245, 166, 35, 0.12)";
                  }}
                >
                  BALAJI MARKETING INSTITUTE
                </span>
                <span className="text-3xl sm:text-5xl text-[#F86104]/40 font-light">★</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Copyright Row ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <p>© 2022 – 2026 Balaji Marketing Institute. All Rights Reserved.</p>
        
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-emerald-400 font-medium">Campus: Rohini, Delhi</span>
          </span>
          <span className="text-white/20">|</span>
          <span>Pehchaan Kamyaabi Ki</span>
        </div>

        {/* 1st Batch Credit */}
        <p className="w-full text-center text-[11px] text-white/30 mt-1 tracking-wide">
          🎓 Proudly developed by our{" "}
          <span className="text-[#F86104]/70 font-semibold">1st Batch Students</span>{" "}
          of Balaji Marketing Institute
        </p>

        <motion.button
          onClick={scrollToHero}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group overflow-hidden rounded-full p-[2px] transition-shadow duration-500 shadow-[0_0_15px_rgba(245,166,35,0.2)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] cursor-pointer"
        >
          <div
            className="absolute inset-0 rounded-full animate-spin [animation-duration:3s]"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, #F86104 0deg, #ffd175 120deg, #06b6d4 240deg, #F86104 360deg)",
            }}
          />
          <div className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1f26] transition-colors group-hover:bg-[#1f2531]">
            <span className="relative z-10 text-xs font-bold text-white tracking-wide">
              Top
            </span>
            <div className="relative z-10 w-5 h-5 rounded-full bg-[#F86104] flex items-center justify-center text-slate-950 font-extrabold shadow-sm">
              <ArrowUp className="w-3 h-3 stroke-[2.5]" />
            </div>
          </div>
        </motion.button>
      </div>
    </footer>
  );
}
