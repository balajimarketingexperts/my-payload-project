"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, ChevronRight, Sparkles } from "lucide-react";

export default function FloatingContactPopup() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          const heroEl = document.getElementById("hero");
          const shouldShow = heroEl
            ? heroEl.getBoundingClientRect().bottom < 150
            : window.scrollY > 450;
          setIsVisible((prev) => {
            if (prev !== shouldShow) {
              if (!shouldShow) setIsExpanded(false);
              return shouldShow;
            }
            return prev;
          });
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed bottom-6 right-5 md:right-8 z-50 pointer-events-none select-none"
      style={{ perspective: "1200px" }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.2,
              rotateX: 65,
              rotateY: -45,
              rotateZ: 20,
              y: 90,
              z: -180,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              y: 0,
              z: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.25,
              rotateX: -45,
              rotateY: 40,
              rotateZ: -10,
              y: 80,
              z: -150,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 22,
              mass: 0.85,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="pointer-events-auto flex flex-col items-end gap-3"
          >
            {/* 3D Expanded Pop-up Card (When user clicks for more details) */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 25 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 15, scale: 0.92, rotateX: 20 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="w-72 sm:w-80 rounded-2xl bg-[#141820]/95 border border-white/15 backdrop-blur-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white relative overflow-hidden"
                >
                  {/* Subtle top teal glow */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#00D29E]/20 blur-2xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D29E] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D29E]"></span>
                      </span>
                      <span className="text-xs font-bold text-white/90 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#00D29E]" />
                        Admissions Helpline
                      </span>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-white/70 mb-4 leading-relaxed">
                    Have questions about MBA, Diploma, or Executive programs? Connect directly with our admissions desk.
                  </p>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="tel:+918368121032"
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00D29E] to-[#00b386] hover:from-[#05E5A5] hover:to-[#00D29E] text-slate-950 font-bold text-sm shadow-lg shadow-[#00D29E]/25 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 fill-slate-950" />
                        <span>Call +91 83681 21032</span>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href="https://wa.me/918368121032?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20BMI%20courses"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp Chat</span>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white/40" />
                    </a>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-white/10 text-center">
                    <span className="text-[11px] text-white/40">
                      www.balajimarketinginstitute.com
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Trigger Widget */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: -6,
                rotateX: 4,
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              {/* Phone Number & CTA Pill Badge */}
              <a
                href="tel:+918368121032"
                className="flex items-center gap-2.5 bg-[#12151B]/95 hover:bg-[#181d26] border border-white/20 hover:border-[#00D29E]/60 backdrop-blur-xl px-3.5 py-2 md:px-4 md:py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Live pulsing dot */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D29E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D29E]"></span>
                </span>

                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D29E]">
                    Call Admissions
                  </span>
                  <span className="text-xs md:text-sm font-black text-white tracking-tight whitespace-nowrap">
                    +91 83681 21032
                  </span>
                </div>
              </a>

              {/* Exact Circular Button from Reference Image */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded((v) => !v);
                }}
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#05E5A5] via-[#00D29E] to-[#00B989] p-2.5 flex items-center justify-center shadow-[0_8px_25px_rgba(0,210,158,0.55),0_0_15px_rgba(0,210,158,0.35)] border-2 border-white/50 hover:shadow-[0_10px_35px_rgba(0,210,158,0.7)] transition-all duration-300"
                title="Contact / Admissions Helpline"
              >
                {/* Concentric pulsing radar wave */}
                <div className="absolute -inset-1 rounded-full bg-[#00D29E]/30 animate-ping pointer-events-none" />

                {/* Exact Icon matching user's image (Phone Handset + Envelope) */}
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-sm select-none"
                >
                  {/* Black outline mail envelope on right */}
                  <rect
                    x="32"
                    y="30"
                    width="54"
                    height="38"
                    rx="4"
                    stroke="#000000"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Mail fold line */}
                  <path
                    d="M34 32L59 51L84 32"
                    stroke="#000000"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* Solid black telephone handset on left overlapping envelope */}
                  <path
                    d="M29 32C26.5 30 22.5 30.5 20.5 33L17 37C15.8 38.5 15.2 40.5 16 42.5C18.5 50 25 61 35 70C44.5 78.5 54.5 83 58 83.5C60 83.8 62 82.8 63.5 81.2L67.5 77C69.5 74.8 69.5 71 67 69L59 62.5C57 61 54 61.2 52.5 63.2L50.5 66C49.5 67.2 48 67.5 46.5 66.8C41 64 35.5 58.5 32.5 53C31.8 51.5 32 50 33.2 49L36 47C38 45.5 38.2 42.5 36.8 40.5L29 32Z"
                    fill="#000000"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
