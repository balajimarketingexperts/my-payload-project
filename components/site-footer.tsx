"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ExternalLink, Phone, Globe } from "lucide-react";

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

            <div className="flex flex-col gap-2.5 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F86104]" />
                <span>Rohini, Delhi — India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#F86104]" />
                <a
                  href="https://www.balajimarketinginstitute.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.balajimarketinginstitute.com
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
                  href="https://www.balajimarketinginstitute.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F86104] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-white/40" />
                  <span>balajimarketinginstitute.com</span>
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
