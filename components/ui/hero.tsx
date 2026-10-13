"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RegistrationForm from "./registration-form";
import { ShaderBackground } from "@/components/ui/waves-shader";
import { HoneyEmberBackground } from "@/components/ui/honey-ember-background";
import DottedTrailCursor from "@/components/ui/dotted-trail-cursor";
export { HeroSection } from "./hero-section";

export interface ShaderShowcaseProps {
  badge?: string;
  headline?: string;
  titleLight?: string;
  titleBold?: string;
  titleItalic?: string;
  description?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showNav?: boolean;
  showRegistrationForm?: boolean;
  formTitle?: string;
  formSubtitle?: string;
  formBadge?: string;
  redirectUrl?: string;
  backgroundVariant?: "shader" | "honey-ember" | "dotted-trail";
}

export default function ShaderShowcase({
  badge = "✨ New Paper Shaders Experience",
  headline,
  titleLight = "Beautiful",
  titleBold = "Shader",
  titleItalic = "Experiences",
  description,
  subheadline,
  primaryCtaText = "Get Started",
  primaryCtaHref = "#",
  secondaryCtaText = "View Pricing",
  secondaryCtaHref = "#",
  showRegistrationForm = false,
  formTitle = "Apply for Next Batch",
  formSubtitle = "Join Delhi's #1 Digital Marketing Course",
  formBadge = "Next Cohort Starts Monday",
  redirectUrl,
  backgroundVariant = "shader",
}: ShaderShowcaseProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-[calc(100vh-5rem)] ${
        backgroundVariant === "honey-ember" || backgroundVariant === "dotted-trail" ? "bg-[#FFFDF7]" : "bg-[#FFFDF9]"
      } overflow-hidden flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 selection:bg-[#F47B20]/20 selection:text-[#1F2A5C] ${
        showRegistrationForm ? "py-6 sm:py-8 lg:py-6" : "py-16 md:py-24"
      }`}
    >
      {backgroundVariant === "honey-ember" ? (
        <HoneyEmberBackground className="absolute inset-0 w-full h-full pointer-events-none" />
      ) : backgroundVariant === "dotted-trail" ? (
        <DottedTrailCursor
          colorA="#F86104"
          colorB="#D97706"
          backgroundColor="#FFFDF7"
          dotColor="#E2D9CC"
          activeDotColor="#FFFFFF"
          dotSpacing={32}
          dotRadius={1.3}
          headRadius={85}
          glowRadius={320}
          className="absolute inset-0 h-full w-full pointer-events-none"
        />
      ) : (
        <>
          {/* Background WebGL Waves Shader with hardware acceleration */}
          <ShaderBackground
            key="vibrant-orange-silk-waves"
            className="absolute inset-0 w-full h-full will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/20 via-transparent to-[#F47B20]/10 pointer-events-none" />
        </>
      )}

      <div
        className={`relative z-20 w-full ${
          showRegistrationForm ? "max-w-6xl mx-auto" : "max-w-3xl"
        }`}
      >
        {showRegistrationForm ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left side: Hero Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                className="mb-4 flex items-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/logo.png"
                  alt="Balaji Marketing Institute"
                  width={200}
                  height={90}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-sm"
                  priority
                />
              </motion.div>

              <motion.p
                className="mb-2 text-xs font-semibold tracking-widest text-[#1F2A5C] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                LEARN · GROW · LEAD · SUCCEED
              </motion.p>

              <motion.div
                className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-md mb-3 sm:mb-4 relative border border-[#F47B20]/40 shadow-[0_2px_12px_rgba(244,123,32,0.12)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="text-[#1F2A5C] text-xs font-semibold relative z-10 tracking-wide flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F47B20] animate-pulse" />
                  {badge}
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] font-bold mb-3 sm:mb-4 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {headline ? (
                  <span className="block font-black text-[#1F2A5C] tracking-tight">
                    {headline.includes("FOR CAREER GROWTH") ? (
                      <>
                        <span className="text-[#F47B20]">#1 </span>
                        <span>DIGITAL MARKETING COURSE </span>
                        <span className="block italic text-[#F47B20] font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] mt-1 tracking-wide">
                          FOR CAREER GROWTH
                        </span>
                      </>
                    ) : headline.startsWith("#1") ? (
                      <>
                        <span className="text-[#F47B20]">#1 </span>
                        <span>{headline.replace(/^#1\s*/i, "")}</span>
                      </>
                    ) : (
                      headline
                    )}
                  </span>
                ) : (
                  <>
                    {titleLight && (
                      <span className="block font-light text-[#1F2A5C] text-3xl md:text-4xl lg:text-5xl mb-1.5 tracking-wider">
                        {titleLight}
                      </span>
                    )}
                    <span className="block font-black text-[#1F2A5C] tracking-tight">
                      {titleBold}
                    </span>
                    <span className="block font-light italic text-[#F47B20] tracking-wide">
                      {titleItalic}
                    </span>
                  </>
                )}
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base font-normal text-[#1F2A5C]/85 mb-5 sm:mb-6 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                {subheadline ||
                  description ||
                  "Master performance marketing, Google & Meta Ads, SEO, and AI automation with live projects and 100% placement support in Delhi."}
              </motion.p>

              <motion.div
                className="flex items-center gap-3 sm:gap-4 flex-wrap"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25 }}
              >
                <a
                  href={primaryCtaHref}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#1F2A5C] text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-[#151d42] cursor-pointer shadow-[0_6px_25px_rgba(31,42,92,0.35)] hover:shadow-[0_8px_35px_rgba(31,42,92,0.5)] active:scale-95"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={secondaryCtaHref}
                  className="px-6 sm:px-8 py-3 rounded-full bg-white/90 border-2 border-[#1F2A5C] text-[#1F2A5C] font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-white hover:text-[#F47B20] hover:border-[#F47B20] cursor-pointer backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] active:scale-95"
                >
                  {secondaryCtaText}
                </a>
              </motion.div>
            </div>

            {/* Right side: Registration Form */}
            <div id="apply" className="lg:col-span-5 flex justify-center scroll-mt-28">
              <RegistrationForm
                id="registration-form"
                title={formTitle}
                badge={formBadge}
                subtitle={formSubtitle}
                redirectUrl={redirectUrl}
              />
            </div>
          </div>
        ) : (
          <div className="text-left">
            <motion.div
              className="mb-4 flex items-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/logo.png"
                alt="Balaji Marketing Institute"
                width={200}
                height={90}
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
                priority
              />
            </motion.div>

            <motion.p
              className="mb-2 text-sm font-semibold tracking-widest text-[#1F2A5C] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              LEARN · GROW · LEAD · SUCCEED
            </motion.p>

            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/85 backdrop-blur-md mb-6 relative border border-[#F47B20]/40 shadow-[0_2px_15px_rgba(244,123,32,0.12)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="text-[#1F2A5C] text-sm font-semibold relative z-10 tracking-wide flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#F47B20] animate-pulse" />
                {badge}
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.12] tracking-tight"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {headline ? (
                <span className="block font-black text-[#1F2A5C] tracking-tight">
                  {headline.includes("FOR CAREER GROWTH") ? (
                    <>
                      <span className="text-[#F47B20]">#1 </span>
                      <span>DIGITAL MARKETING COURSE </span>
                      <span className="block italic text-[#F47B20] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 tracking-wide">
                        FOR CAREER GROWTH
                      </span>
                    </>
                  ) : headline.startsWith("#1") ? (
                    <>
                      <span className="text-[#F47B20]">#1 </span>
                      <span>{headline.replace(/^#1\s*/i, "")}</span>
                    </>
                  ) : (
                    headline
                  )}
                </span>
              ) : (
                <>
                  {titleLight && (
                    <span className="block font-light text-[#1F2A5C] text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider">
                      {titleLight}
                    </span>
                  )}
                  <span className="block font-black text-[#1F2A5C] tracking-tight">
                    {titleBold}
                  </span>
                  <span className="block font-light italic text-[#F47B20] tracking-wide">
                    {titleItalic}
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg font-normal text-[#1F2A5C]/85 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              {subheadline ||
                description ||
                "Build a job-ready career in digital marketing and sales."}
            </motion.p>

            <motion.div
              className="flex items-center gap-4 md:gap-6 flex-wrap"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              <a
                href={primaryCtaHref}
                className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-[#1F2A5C] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#151d42] cursor-pointer shadow-[0_6px_25px_rgba(31,42,92,0.35)] hover:shadow-[0_8px_35px_rgba(31,42,92,0.5)] active:scale-95"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryCtaHref}
                className="px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-white/90 border-2 border-[#1F2A5C] text-[#1F2A5C] font-semibold text-sm transition-all duration-300 hover:bg-white hover:text-[#F47B20] hover:border-[#F47B20] cursor-pointer backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] active:scale-95"
              >
                {secondaryCtaText}
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
