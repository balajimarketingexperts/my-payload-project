"use client";

import React from "react";
import { Star, Quote, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

const REVIEWS = [
  {
    name: "Vikram Malhotra",
    prevRole: "Sr. Media Executive at Ad Agency",
    nowRole: "Head of Performance Marketing",
    company: "Ad2Lead Hub",
    hike: "+75% Salary Growth",
    story:
      "I was stuck running basic manual ad sets for 3 years. The Sunday program changed everything: I learned Advantage+ scaling, cost cap bid algorithms, and first-party GA4 attribution. Within 2 months of graduation, I transitioned to Performance Lead managing 7-figure spends.",
    batch: "Executive Batch 2024",
  },
  {
    name: "Pooja Sharma",
    prevRole: "Brand Marketing Associate",
    nowRole: "Growth & Retention Lead",
    company: "Americanz Muscles",
    hike: "+60% Compensation Jump",
    story:
      "The 1-on-1 confidential account teardowns with faculty were pure gold. I brought our real D2C store funnels to class and uncovered massive leakages on mobile checkout. We saw a 38% bump in repeat orders using RFM WhatsApp automation within 3 weeks.",
    batch: "Executive Batch 2025",
  },
  {
    name: "Rohit Bansal",
    prevRole: "Business Development Manager",
    nowRole: "MarTech & RevOps Consultant",
    company: "Balaji Marketing Experts",
    hike: "Expanded Enterprise Retainers",
    story:
      "As a sales and BD manager, I needed to master the technical side of marketing. BMI taught me Zapier lead automation, server-side tracking, and custom GPT workflows. Now I design end-to-end inbound and outbound pipelines for our enterprise corporate clients.",
    batch: "Executive Batch 2025",
  },
  {
    name: "Ananya Sen",
    prevRole: "Digital Marketing Specialist",
    nowRole: "Senior Growth Strategist",
    company: "Dainik Jagran Partner Group",
    hike: "+80% CTC Jump",
    story:
      "The Sunday-only format was a lifesaver with my busy work schedule. Zero weekday burnout, but 100% practical depth. Every single framework I learned on Sunday morning, I implemented at work on Monday. My leadership team took notice immediately.",
    batch: "Executive Batch 2024",
  },
];

export default function ExecutiveStudentsSaySection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#F1E5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EB] border border-[#FED7AA] text-xs font-bold text-[#F86104] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F86104]" />
            Executive Alumni Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2A5C] tracking-tight leading-tight">
            Hear From Working Professionals Who Leveled Up
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2A5C]/75 leading-relaxed">
            Real stories from marketers, sales leaders, and founders who completed the 3-month Sunday program and accelerated their career trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#F1E5D8] shadow-[0_4px_20px_rgba(31,42,92,0.04)] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#A7F3D0] inline-flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {r.hike}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#FED7AA] mb-3" />

                <p className="text-sm sm:text-[15px] text-[#1F2A5C]/85 leading-relaxed italic mb-6">
                  &ldquo;{r.story}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F8FAFC] flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-[#1F2A5C] text-base">
                    {r.name}
                  </h3>
                  <p className="text-xs text-[#F86104] font-semibold mt-0.5">
                    {r.nowRole} · {r.company}
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-0.5">
                    Was: {r.prevRole}
                  </p>
                </div>
                <span className="text-[11px] text-[#94A3B8] font-medium hidden sm:inline-block">
                  {r.batch}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
