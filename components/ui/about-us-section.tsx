"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Award, Users, TrendingUp, Sparkles, Building2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Liquid Flashing Text Component ───────────────────────────────────────────
function LiquidFlashingHeading({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className="relative cursor-pointer select-none inline-block max-w-4xl"
    >
      {/* Background Liquid Flare tracking mouse */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-300"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(248,97,4,0.45) 0%, rgba(236,133,36,0.2) 45%, transparent 70%)",
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Base Text Layer */}
      <h2
        className={cn(
          "relative z-10 text-center font-extrabold tracking-tight leading-[1.14]",
          "text-2xl sm:text-4xl md:text-5xl lg:text-5xl",
          "bg-gradient-to-br from-white via-orange-100 to-orange-300 bg-clip-text text-transparent",
          className
        )}
      >
        Empowering India&apos;s Next Generation <br />
        <span className="bg-gradient-to-r from-[#EC8524] via-white to-[#F86104] bg-clip-text text-transparent">
          of Growth Marketers
        </span>
      </h2>

      {/* Liquid Flash Layer: Shines & flashes intensely where mouse moves */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        <h2
          className={cn(
            "text-center font-extrabold tracking-tight leading-[1.14]",
            "text-2xl sm:text-4xl md:text-5xl lg:text-5xl",
            "bg-clip-text text-transparent"
          )}
          style={{
            backgroundImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, #ffffff 0%, #F86104 25%, #EC8524 55%, transparent 100%)`,
            WebkitBackgroundClip: "text",
            filter: "drop-shadow(0 0 18px rgba(248,97,4,0.95)) drop-shadow(0 0 35px rgba(236,133,36,0.6))",
          }}
        >
          Empowering India&apos;s Next Generation <br />
          <span className="text-white">
            of Growth Marketers
          </span>
        </h2>
      </motion.div>

      {/* Liquid Wave Ripple Flashing Animation on Hover */}
      {isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-15 mix-blend-overlay opacity-80"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "liquidWave 2s ease-in-out infinite",
            WebkitMaskImage: "linear-gradient(to bottom, black, black)",
          }}
        />
      )}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function AboutUsSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#23272E] scroll-mt-24 snap-start">
      <LampContainer className="py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full"
        >
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F86104]/80 bg-[#12151B] text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-3.5 shadow-[0_2px_15px_rgba(248,97,4,0.35)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F86104] fill-[#F86104]" />
            <span className="text-white font-bold tracking-[0.2em]">
              About Us
            </span>
          </div>

          {/* Liquid Flashing Interactive Heading */}
          <LiquidFlashingHeading />

          {/* Subheading text */}
          <p className="mt-3.5 text-white/70 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Founded in 2022 in Rohini, Delhi, <span className="text-[#EC8524] font-semibold underline decoration-[#F86104]/40 underline-offset-4">Balaji Marketing Institute (BMI)</span> bridges academic theory and real-world execution. We empower learners with industry-relevant knowledge in MBA, Executive programs, and digital marketing.
          </p>

          {/* Quick Badges & Key Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-3.5 text-xs text-white/75">
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full shadow-sm">
              <Building2 className="w-3 h-3 text-[#F86104]" /> Est. 2022
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full shadow-sm">
              <MapPin className="w-3 h-3 text-[#F86104]" /> Rohini, Delhi
            </span>
            <span className="flex items-center gap-1.5 bg-[#F86104]/10 border border-[#F86104]/30 px-3 py-1 rounded-full text-[#EC8524] font-semibold">
              200+ Students Guided
            </span>
            <span className="flex items-center gap-1.5 bg-[#F86104]/10 border border-[#F86104]/30 px-3 py-1 rounded-full text-[#EC8524] font-semibold">
              99% Placement Assistance
            </span>
          </div>

          {/* Core Philosophy / Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full mt-4 sm:mt-5 text-left">
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F86104]/40 hover:bg-white/8 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#F86104]/15 text-[#F86104] flex items-center justify-center mb-2.5">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">Practical Campaign Experience</h4>
              <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed">
                Hands-on training with real campaign workflows, audience targeting, ad metrics, and conversion optimization.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F86104]/40 hover:bg-white/8 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#F86104]/15 text-[#F86104] flex items-center justify-center mb-2.5">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">Industry Mentorship</h4>
              <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed">
                Constructive guidance and regular feedback sessions from experienced marketing practitioners.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F86104]/40 hover:bg-white/8 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#F86104]/15 text-[#F86104] flex items-center justify-center mb-2.5">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">Career & Placement Support</h4>
              <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed">
                Structured interview prep, resume polishing, and placement assistance across 70+ partner organizations.
              </p>
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
