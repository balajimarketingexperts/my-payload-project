"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// --- Animated Counter ---
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 40, damping: 18 });
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, motionVal, target]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

// --- Stat Card ---
interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function StatCard({ icon, value, suffix, label, delay }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -25, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d", perspective: "800px" }}
      className="flex flex-col items-start gap-3 px-8 md:px-12"
    >
      <div className="text-[#F86104] w-10 h-10 md:w-12 md:h-12">{icon}</div>
      <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F86104] leading-none tracking-tight">
        <AnimatedNumber target={value} suffix={suffix} />
      </p>
      <p className="text-white text-base md:text-lg font-medium leading-snug opacity-90">
        {label}
      </p>
    </motion.div>
  );
}

function VerticalDivider() {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="hidden md:block w-px bg-white/20 self-stretch origin-top"
    />
  );
}

const IconPlacement = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="28" rx="4" />
    <path d="M16 10V6M32 10V6" />
    <path d="M6 20h36" />
    <path d="M17 30l4 4 10-10" />
  </svg>
);

const IconStudents = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="14" r="6" />
    <path d="M36 14a6 6 0 11-12 0" />
    <path d="M12 14a6 6 0 1112 0" />
    <path d="M6 40c0-8.837 8.059-16 18-16s18 7.163 18 16" />
  </svg>
);

const IconPartners = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 26c0-4.418 3.582-8 8-8s8 3.582 8 8" />
    <path d="M10 42c0-7.732 6.268-14 14-14s14 6.268 14 14" />
    <circle cx="24" cy="14" r="6" />
  </svg>
);

export default function StatsSection() {
  return (
    <section id="outcomes" className="relative w-full min-h-[calc(100svh-6rem)] bg-[#23272E] overflow-hidden flex flex-col justify-center py-10 md:py-14 scroll-mt-24 snap-start">
      {/* Background glow shaders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#F86104]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[200px] h-[200px] rounded-full bg-[#F86104]/5 blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The numbers, raw and real
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-4 mb-4 h-[3px] w-20 bg-[#F86104] origin-center rounded-full"
          />
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Outcomes from a marketing school built around placements, not just curriculum.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          <StatCard icon={<IconPlacement />} value={99} suffix="%" label="Placement Assistance" delay={0.1} />
          <VerticalDivider />
          <StatCard icon={<IconStudents />} value={200} suffix="+" label="Students Enrolled" delay={0.25} />
          <VerticalDivider />
          <StatCard icon={<IconPartners />} value={70} suffix="+" label="Recruiting Partners" delay={0.4} />
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 md:mt-12 flex items-center justify-center gap-2 text-white/50 text-sm"
        >
          <svg className="w-5 h-5 text-[#F86104]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          Every batch. Every outcome. Publicly available.
        </motion.div>
      </div>
    </section>
  );
}
