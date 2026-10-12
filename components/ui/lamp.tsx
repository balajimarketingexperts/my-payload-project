"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[calc(100svh-6rem)] flex-col items-center justify-center overflow-hidden bg-[#23272E] w-full z-0 py-6 md:py-10",
        className
      )}
    >
      {/* Lamp visual effect positioned at top */}
      <div className="absolute top-0 inset-x-0 flex w-full h-[400px] scale-y-125 items-center justify-center isolate z-0 pointer-events-none">
        {/* Left conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "32rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, #F86104, transparent, transparent)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[32rem] text-white"
        >
          <div className="absolute w-[100%] left-0 bg-[#23272E] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-[#23272E] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "32rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, #F86104)`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[32rem] text-white"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#23272E] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-[#23272E] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Ambient glow & blurs */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#23272E] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#F86104] opacity-30 blur-3xl"></div>
        
        {/* Center glowing orb */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "18rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-72 -translate-y-20 rounded-full bg-[#EC8524] blur-2xl opacity-50"
        />

        {/* Center horizontal light line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "32rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[32rem] -translate-y-24 bg-[#F86104] shadow-[0_0_24px_#F86104]"
        />

        {/* Top cover bar */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#23272E]"></div>
      </div>

      {/* Children flow naturally with proper spacing and visibility */}
      <div className="relative z-30 flex flex-col items-center px-4 w-full mt-8 md:mt-10">
        {children}
      </div>
    </div>
  );
};
