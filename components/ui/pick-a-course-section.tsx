"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface ProgramPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  duration: string;
  mode: string;
  stat: number;
  statSuffix: string;
  statLabel: string;
}

const programs: ProgramPlan[] = [
  {
    name: "DIGITAL MARKETING",
    price: "45000",
    yearlyPrice: "38000",
    period: "6 months",
    duration: "6 Months",
    mode: "Online + Classroom",
    features: [
      "Google & Meta Ads — live campaigns",
      "SEO, Content & Email Marketing",
      "Real brand projects with mentors",
      "Resume + interview prep",
      "INDUSTRYCreds certification",
      "Dedicated placement support",
    ],
    description: "Best for fresh graduates entering digital marketing",
    buttonText: "Apply Now",
    href: "/courses/digital-marketing#apply",
    isPopular: false,
    stat: 100,
    statSuffix: "%",
    statLabel: "Placement Assistance",
  },
  {
    name: "MBA MARKETING",
    price: "180000",
    yearlyPrice: "150000",
    period: "2 years",
    duration: "2 Years",
    mode: "On Campus · New Delhi",
    features: [
      "Strategic marketing & brand management",
      "Sales, distribution & channel strategy",
      "AI-integrated marketing modules",
      "CXO-led live case studies",
      "Campus placements with 150+ partners",
      "Alumni network of 2500+ marketers",
      "Highest CTC ₹12L+",
    ],
    description: "India's most job-focused MBA in Marketing",
    buttonText: "Apply Now",
    href: "/courses/mba-marketing#apply",
    isPopular: true,
    stat: 8,
    statSuffix: "L+",
    statLabel: "Average CTC",
  },
  {
    name: "EXECUTIVE",
    price: "25000",
    yearlyPrice: "20000",
    period: "3 months",
    duration: "3 Months",
    mode: "Weekend Batches",
    features: [
      "Performance marketing mastery",
      "Data analytics & dashboards",
      "LinkedIn personal branding",
      "Live sessions with industry leaders",
      "BMI certificate of completion",
      "Flexible Sunday batches",
    ],
    description: "Upskilling for working professionals",
    buttonText: "Apply Now",
    href: "/courses/executive#apply",
    isPopular: false,
    stat: 50,
    statSuffix: "+",
    statLabel: "Expert Mentors",
  },
];

export default function PickACourseSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      confetti({
        particleCount: 60,
        spread: 70,
        origin: {
          x: rect.left / window.innerWidth + rect.width / window.innerWidth / 2,
          y: rect.top / window.innerHeight,
        },
        colors: ["#F86104", "#3B82F6", "#10B981", "#ffffff"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section id="programs" className="relative w-full min-h-[calc(100svh-6rem)] bg-[#23272E] overflow-hidden flex flex-col justify-center py-6 md:py-8 lg:py-10 scroll-mt-24 snap-start">
      {/* Anchor aliases for the Programs / Courses nav links */}
      <span id="courses" className="absolute -top-24" aria-hidden="true" />
      <span id="program" className="absolute -top-24" aria-hidden="true" />
      {/* Top gradient fade from stats section */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#23272E] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center">
        {/* Heading — fully centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-1.5 md:gap-2 mb-4 md:mb-5"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F86104]">Our Programs</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Pick a program that fits your goals
          </h2>
          <p className="text-white/50 text-xs sm:text-sm max-w-lg">
            From fresh graduates to working professionals — every path leads to placement.
          </p>
        </motion.div>

        {/* Toggle — centered */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center items-center gap-2.5 mb-5 md:mb-6"
        >
          <span className={cn("text-xs sm:text-sm font-semibold transition-colors", isMonthly ? "text-white" : "text-white/40")}>
            Full Fee
          </span>
          <Label>
            <Switch
              ref={switchRef as React.RefObject<HTMLButtonElement>}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="data-[state=checked]:bg-[#F86104] data-[state=unchecked]:bg-white/20 scale-90 sm:scale-100"
            />
          </Label>
          <span className={cn("text-xs sm:text-sm font-semibold transition-colors", !isMonthly ? "text-white" : "text-white/40")}>
            Early Bird <span className="text-[#F86104]">(Save 15%)</span>
          </span>
        </motion.div>

        {/* 3D perspective wrapper + centered card grid */}
        <div style={{ perspective: "1200px" }} className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-5xl mx-auto items-stretch">
          {programs.map((plan, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
                rotateX: index === 1 ? 20 : 14,
                rotateY: index === 0 ? 12 : index === 2 ? -12 : 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: plan.isPopular && isDesktop ? -12 : 0,
                rotateX: 0,
                rotateY: 0,
                scale: index === 1 ? 1.02 : isDesktop ? 0.97 : 1,
              }}
              whileHover={{
                y: plan.isPopular ? -18 : -6,
                scale: index === 1 ? 1.04 : 1.0,
                rotateY: index === 0 ? 2 : index === 2 ? -2 : 0,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 85,
                damping: 20,
                delay: 0.1 + index * 0.12,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className={cn(
                "rounded-2xl border p-4 sm:p-5 md:p-5 flex flex-col relative overflow-hidden cursor-pointer",
                plan.isPopular
                  ? "border-[#F86104]/60 bg-gradient-to-b from-[#1a1f26] to-[#15191f] shadow-xl shadow-[#F86104]/15"
                  : "border-white/10 bg-white/5 hover:border-white/25",
                !plan.isPopular && "mt-2 md:mt-2",
              )}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#F86104] py-0.5 px-2.5 rounded-bl-lg rounded-tr-xl flex items-center gap-1">
                  <Star className="h-3 w-3 text-white fill-white" />
                  <span className="text-white text-[10px] font-bold">Most Popular</span>
                </div>
              )}

              {/* Top accent bar */}
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F86104] rounded-t-2xl" />
              )}

              <div className="flex-1 flex flex-col items-center text-center">
                {/* Program name */}
                <p className={cn("text-[11px] font-bold uppercase tracking-widest mb-2 w-full text-center", plan.isPopular ? "text-[#F86104]" : "text-white/50")}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-end justify-center gap-1.5 mb-0.5">
                  <span className="text-3xl font-extrabold text-white">
                    ₹<NumberFlow
                      value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                      transformTiming={{ duration: 400, easing: "ease-out" }}
                      willChange
                    />
                  </span>
                </div>
                <p className="text-[11px] text-white/40 mb-2.5">
                  {isMonthly ? "standard fee" : "early bird fee"}
                </p>

                {/* Meta pills — centered */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                  <span className="flex items-center gap-1 text-[10px] text-white/60 bg-white/8 px-2 py-0.5 rounded-full">
                    <Clock className="w-2.5 h-2.5" /> {plan.duration}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-white/60 bg-white/8 px-2 py-0.5 rounded-full">
                    <MapPin className="w-2.5 h-2.5" /> {plan.mode}
                  </span>
                </div>

                {/* Stat — centered */}
                <div className={cn("flex items-center justify-center gap-2.5 rounded-lg p-2 mb-3 w-full", plan.isPopular ? "bg-[#F86104]/15" : "bg-white/5")}>
                  <p className={cn("text-xl font-extrabold", plan.isPopular ? "text-[#F86104]" : "text-white/80")}>
                    <NumberFlow value={plan.stat} willChange transformTiming={{ duration: 400, easing: "ease-out" }} />
                    {plan.statSuffix}
                  </p>
                  <p className="text-[11px] text-white/50">{plan.statLabel}</p>
                </div>

                {/* Features — left-aligned for readability */}
                <ul className="space-y-1.5 mb-4 flex-1 w-full text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-white/70">
                      <Check className={cn("h-3.5 w-3.5 mt-0.5 flex-shrink-0", plan.isPopular ? "text-[#F86104]" : "text-white/40")} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="border-white/10 mb-3.5 w-full" />

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={cn(
                    "w-full text-center text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200",
                    plan.isPopular
                      ? "bg-[#F86104] text-white hover:bg-[#F86104]/90 shadow-md shadow-[#F86104]/20"
                      : "border border-white/20 text-white hover:bg-white/10"
                  )}
                >
                  {plan.buttonText}
                </Link>

                <p className="mt-2.5 text-[11px] text-center text-white/30">{plan.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>{/* end perspective wrapper */}

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/30 text-xs mt-4 md:mt-5"
        >
          Not sure which program suits you?{" "}
          <a href="tel:+918368121032" className="text-[#F86104] underline underline-offset-2 hover:opacity-80 transition-opacity">
            Call Admissions: +91 83681 21032 →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
