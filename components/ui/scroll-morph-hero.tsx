"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle";

type Target = { x: number; y: number; rotation: number; scale: number; opacity: number };

export interface ScrollMorphHeroProps {
    headline?: string;
    subheadline?: string;
    /** Heading shown once the cards have morphed into the bottom arc */
    arcTitle?: string;
    arcText?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    images?: string[];
}

// --- Defaults ---
const DEFAULT_IMAGES = [
    // Real BMI moments
    "/bmi_students_classroom.jpg",
    "/bmi_marketing_presentation.jpg",
    "/bmi_digital_marketing_dashboard.jpg",
    "/bmi_mba_students.jpg",
    "/bmi_faculty_mentorship.jpg",
    "/bmi_social_media_marketing.jpg",
    "/bmi_placement_success.jpg",
    "/bmi_seo_analytics.jpg",
    "/bmi_content_creation.jpg",
    "/bmi_campus_life.jpg",
    // Dark / cinematic / tech
    "/bmi_dark_laptop_glow.jpg",
    "/bmi_growth_chart_3d.jpg",
    "/bmi_neon_office.jpg",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&q=80",
];

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;
const MAX_SCROLL = 850; // virtual scroll range - fast and seamless transition
const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

// --- FlipCard ---
function FlipCard({ src, index, target }: { src: string; index: number; target: Target }) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#E8E6E2]"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`Student project ${index + 1}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#23272E] flex flex-col items-center justify-center p-4 border border-[#F86104]/30"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-[#EC8524] uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Hero ---
export default function ScrollMorphHero({
    headline = "Learn Build Grow",
    subheadline = "Expert faculty. Practical training. 100% placement assistance.",
    arcTitle = "Our Programs",
    arcText = "MBA (Marketing) · Diploma in Digital Marketing · Executive Programs",
    primaryCta = { label: "Enroll Now", href: "#programs" },
    secondaryCta = { label: "Call Us", href: "tel:+918368121032" },
    images = DEFAULT_IMAGES,
}: ScrollMorphHeroProps) {
    const TOTAL_IMAGES = Math.min(images.length, 20);

    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Container size ---
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });
        observer.observe(el);
        setContainerSize({ width: el.offsetWidth, height: el.offsetHeight });
        return () => observer.disconnect();
    }, []);

    // --- Virtual scroll ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Consume the gesture only while the virtual scroll can still move,
        // so the page scrolls normally once the hero is at either end.
        const apply = (deltaY: number, e: Event) => {
            const cur = scrollRef.current;
            if ((deltaY < 0 && cur <= 0) || (deltaY > 0 && cur >= MAX_SCROLL)) return;
            e.preventDefault();
            const next = clamp(cur + deltaY, 0, MAX_SCROLL);
            scrollRef.current = next;
            virtualScroll.set(next);
        };

        const onWheel = (e: WheelEvent) => apply(e.deltaY, e);

        let touchStartY = 0;
        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const onTouchMove = (e: TouchEvent) => {
            const y = e.touches[0].clientY;
            const deltaY = touchStartY - y;
            touchStartY = y;
            apply(deltaY * 1.5, e);
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchmove", onTouchMove, { passive: false });
        return () => {
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
        };
    }, [virtualScroll]);

    // Morph: circle -> bottom arc (scroll 0-380), then arc shuffles (380-850)
    const morphProgress = useTransform(virtualScroll, [0, 380], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 60, damping: 25 });
    const scrollRotate = useTransform(virtualScroll, [380, 850], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 60, damping: 25 });

    // --- Mouse parallax (applied directly to container motion style for 0 React re-renders) ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 60);
        };
        el.addEventListener("mousemove", onMove);
        return () => el.removeEventListener("mousemove", onMove);
    }, [mouseX]);

    // --- Intro sequence ---
    useEffect(() => {
        const t1 = setTimeout(() => setIntroPhase("line"), 500);
        const t2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    // --- Random scatter positions (client only) ---
    const scatterPositions = useMemo(
        () =>
            Array.from({ length: TOTAL_IMAGES }, () => ({
                x: (Math.random() - 0.5) * 1500,
                y: (Math.random() - 0.5) * 1000,
                rotation: (Math.random() - 0.5) * 180,
                scale: 0.6,
                opacity: 0,
            })),
        [TOTAL_IMAGES]
    );

    // --- Mirror motion values into state for per-card math ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);

    useEffect(() => {
        const a = smoothMorph.on("change", setMorphValue);
        const b = smoothScrollRotate.on("change", setRotateValue);
        return () => {
            a();
            b();
        };
    }, [smoothMorph, smoothScrollRotate]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    const introVisible = introPhase === "circle" && morphValue < 0.5;
    const ready = containerSize.width > 0;
    const scrollToPrograms = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        const el = document.getElementById("programs") || document.getElementById("courses");
        if (el) {
            const headerOffset = 96;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            window.history.pushState(null, "", "#programs");
        }
    };

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#F6F1E6] overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center">
                {/* Intro text (fades out as you scroll) */}
                <div className="absolute inset-x-0 z-20 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-none px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={
                            introVisible
                                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                                : { opacity: 0, filter: "blur(10px)" }
                        }
                        transition={{ duration: 1 }}
                        className="max-w-md text-2xl font-semibold tracking-tight text-[#23272E] md:text-3xl"
                    >
                        {headline}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introVisible ? { opacity: 1 - morphValue * 2 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 max-w-sm text-xs leading-relaxed text-[#6B6B6B] md:text-sm"
                    >
                        {subheadline}
                    </motion.p>

                    {/* Prominent CTA in Intro State */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={
                            introVisible
                                ? { opacity: 1 - morphValue * 2, y: 0 }
                                : { opacity: 0, y: 15 }
                        }
                        transition={{ duration: 1, delay: 0.3 }}
                        className={cn(
                            "mt-6 flex flex-wrap items-center justify-center gap-3 transition-opacity",
                            introVisible ? "pointer-events-auto" : "pointer-events-none"
                        )}
                    >
                        <ShinyButton
                            href="#programs"
                            onClick={scrollToPrograms}
                        >
                            Enroll Now
                        </ShinyButton>
                        <a
                            href={secondaryCta.href}
                            className="rounded-full border border-[#23272E]/20 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#23272E] backdrop-blur transition-all hover:bg-white hover:border-[#23272E]/40 shadow-sm"
                        >
                            {secondaryCta.label}
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introVisible ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.45 }}
                        className="mt-6 text-xs font-bold tracking-[0.2em] text-[#6B6B6B]"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                {/* Arc state content (fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[8%] z-20 flex flex-col items-center text-center px-4 pointer-events-none"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#23272E] tracking-tight mb-4">
                        {arcTitle}
                    </h2>
                    <p className="text-sm md:text-base text-[#6B6B6B] max-w-lg leading-relaxed">{arcText}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
                        <ShinyButton href={primaryCta.href} onClick={scrollToPrograms}>
                            {primaryCta.label}
                        </ShinyButton>
                        <a
                            href={secondaryCta.href}
                            className="rounded-full border border-[#E8E6E2] px-5 py-2.5 text-sm font-medium text-[#23272E] transition-colors hover:bg-[#E8E6E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23272E]"
                        >
                            {secondaryCta.label}
                        </a>
                    </div>
                </motion.div>

                {/* Cards */}
                <motion.div
                    style={{ x: smoothMouseX }}
                    className="relative flex items-center justify-center w-full h-full"
                >
                    {ready &&
                        images.slice(0, TOTAL_IMAGES).map((src, i) => {
                            let target: Target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                            if (introPhase === "scatter") {
                                target = scatterPositions[i];
                            } else if (introPhase === "line") {
                                const spacing = 70;
                                target = { x: i * spacing - (TOTAL_IMAGES * spacing) / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
                            } else {
                                const isMobile = containerSize.width < 768;
                                const minDim = Math.min(containerSize.width, containerSize.height);

                                // A. Circle
                                const circleRadius = Math.min(minDim * 0.35, 350);
                                const circleAngle = (i / TOTAL_IMAGES) * 360;
                                const circleRad = (circleAngle * Math.PI) / 180;
                                const circlePos = {
                                    x: Math.cos(circleRad) * circleRadius,
                                    y: Math.sin(circleRad) * circleRadius,
                                    rotation: circleAngle + 90,
                                };

                                // B. Bottom arc
                                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                                const arcCenterY = arcApexY + arcRadius;

                                const spreadAngle = isMobile ? 100 : 130;
                                const startAngle = -90 - spreadAngle / 2;
                                const step = spreadAngle / (TOTAL_IMAGES - 1);

                                // Scroll shifts the arc left, stopping with the last card in view
                                const scrollProgress = clamp(rotateValue / 360, 0, 1);
                                const boundedRotation = -scrollProgress * spreadAngle * 0.8;

                                const currentArcAngle = startAngle + i * step + boundedRotation;
                                const arcRad = (currentArcAngle * Math.PI) / 180;
                                const arcPos = {
                                    x: Math.cos(arcRad) * arcRadius,
                                    y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                    rotation: currentArcAngle + 90,
                                    scale: isMobile ? 1.4 : 1.8,
                                };

                                // C. Morph
                                target = {
                                    x: lerp(circlePos.x, arcPos.x, morphValue),
                                    y: lerp(circlePos.y, arcPos.y, morphValue),
                                    rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                    scale: lerp(1, arcPos.scale, morphValue),
                                    opacity: 1,
                                };
                            }

                            return <FlipCard key={i} src={src} index={i} target={target} />;
                        })}
                </motion.div>
            </div>
        </div>
    );
}
