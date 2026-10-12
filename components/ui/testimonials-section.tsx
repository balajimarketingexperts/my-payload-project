"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, ShieldCheck } from "lucide-react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full min-h-[calc(100svh-6rem)] bg-[#23272E] overflow-hidden py-10 md:py-16 flex flex-col justify-center scroll-mt-24 snap-start border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full bg-[#F86104]/10 blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] rounded-full bg-[#1F2A5C]/40 blur-[130px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
        {/* Verified Google Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-lg"
        >
          {/* Google G icon */}
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.25 21.36 7.35 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.42l4.02-3.13z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.25 2.64 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
            />
          </svg>
          <div className="flex items-center gap-1 text-[#FBB034]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FBB034]" />
            ))}
          </div>
          <span className="text-white text-xs font-semibold">4.9 / 5.0</span>
          <span className="text-white/40 text-xs">·</span>
          <span className="text-white/70 text-xs font-medium">54+ Google Reviews</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center text-center gap-2 mb-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            What Our Students &amp; Clients Say
          </h2>
          <div className="h-[2.5px] w-16 bg-gradient-to-r from-[#F86104] to-[#FBB034] rounded-full" />
          <p className="text-white/60 text-xs sm:text-sm max-w-xl">
            Direct, unfiltered reviews from our students, digital marketing trainees, and business clients in Rohini, Delhi.
          </p>
        </motion.div>

        {/* Trust pill highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Verified Google Feedback
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-[#FBB034]">
            ⭐ Mentored by Prabhat Sir
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-[#F86104]">
            🚀 Agency &amp; Career Growth
          </span>
        </motion.div>
      </div>

      {/* Staggered 3D Testimonials Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <StaggerTestimonials />
      </motion.div>

      {/* Bottom CTA to View Google Profile */}
      <div className="relative max-w-6xl mx-auto px-4 text-center mt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
        <span className="text-white/40 text-xs">
          Balaji Marketing Experts · Rohini, Delhi
        </span>
        <a
          href="https://balaji-marketing-experts.localo.site/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#F86104] text-white text-xs font-semibold border border-white/15 hover:border-[#F86104] transition-all group"
        >
          <span>View all 54+ Reviews on Google</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
