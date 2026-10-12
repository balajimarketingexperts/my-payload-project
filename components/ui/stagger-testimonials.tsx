"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

// Real student and client reviews from https://balaji-marketing-experts.localo.site/
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Best future scope in Balaji Marketing Experts! Best youth concepts in future job and life set. Isliya padhlo chahe kahi, selection hoga yahi se Balaji Marketing Experts wala. Balaji Marketing Experts pehchaan kamyaabi ki!",
    by: "Kunal Y, Student & Learner",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 1,
    testimonial:
      "Best services Prabhat sir for digital marketing! Maine work karwaya inse Google Ads aur Meta Ads ka. Ye best services dete hai pure Rohini Delhi me. Thanks Prabhat sir for taking my business to the next level.",
    by: "Tripti J, Trainee & Business Growth",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 2,
    testimonial:
      "This is very best agency in Rohini Delhi for digital marketing work. Any kind of digital marketing work is done with perfection. It helps to grow your business and career, and helped me scale to the next level.",
    by: "Rohit Y, Digital Marketing Trainee",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 3,
    testimonial:
      "Nice place, good environment and very reasonable price. Supportive staff and the owner Prabhat Jha is a very humble person and a great mentor.",
    by: "Krishna D, Student",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 4,
    testimonial:
      "Best platform for business promotion and learning. Such a nice experience, very cooperative and supportive staff.",
    by: "Shalu P, Trainee & Marketing Learner",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 5,
    testimonial:
      "Best place for practical digital marketing learning and great services for marketing and business promotion 🙂 Highly recommended for anyone starting their digital career.",
    by: "FIT K, Digital Marketing Trainee",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 6,
    testimonial:
      "Great team for marketing and promotion. Complete value for money with high practical knowledge and career guidance.",
    by: "Yogesh K, Learner",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 7,
    testimonial:
      "Good environment for students and clients. Staff is very supportive & polite. Learned live campaign execution and ad targeting.",
    by: "Sourav, Student & Trainee",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 8,
    testimonial:
      "Very reasonable rates and top digital marketing work in Delhi. Good marketing strategy and helpful faculty throughout.",
    by: "Shiva P, Digital Marketing Trainee",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 9,
    testimonial:
      "Best place for practical agency learning and digital marketing training in Rohini Delhi. Great guidance from Prabhat sir.",
    by: "Gurez F, Student",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 10,
    testimonial:
      "Excellent work with good behaviour and complete professional guidance. Best institute to build a digital marketing career.",
    by: "Anish Y, Trainee",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face",
  },
  {
    tempId: 11,
    testimonial:
      "Nice experience and the staff is very cooperative. Hands-on learning with practical tools and mentorship.",
    by: "Priyam P, Student",
    source: "Verified Google Review",
    rating: 5,
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;
  const absPos = Math.abs(position);
  const isHidden = absPos > 2;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-5 sm:p-6 transition-all duration-500 ease-in-out select-none",
        isCenter
          ? "z-20 border-[#F5A623] bg-gradient-to-br from-[#121c38] via-[#0f2256] to-[#0a1740] shadow-[0_12px_40px_rgba(245,166,35,0.25)]"
          : absPos === 1
          ? "z-10 border-white/15 bg-[#1B2234]/85 hover:border-[#F5A623]/50"
          : "z-0 border-white/10 bg-[#161B2B]/60"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.55) * position}px)
          translateY(${isCenter ? -50 : absPos === 1 ? (position > 0 ? 10 : -10) : 25}px)
          rotate(${isCenter ? 0 : position * 2.8}deg)
          scale(${isCenter ? 1.02 : absPos === 1 ? 0.92 : 0.82})
        `,
        opacity: isHidden ? 0 : isCenter ? 1 : absPos === 1 ? 0.75 : 0.3,
        pointerEvents: isHidden ? "none" : "auto",
        visibility: isHidden ? "hidden" : "visible",
      }}
    >
      {/* Corner cut diagonal line */}
      <span
        className="absolute block origin-top-right rotate-45 bg-[#F5A623]/30"
        style={{ right: -2, top: 40, width: SQRT_5000, height: 2 }}
      />

      {/* Top Row: Avatar & Rating Stars */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <img
            src={testimonial.imgSrc}
            alt={testimonial.by.split(",")[0]}
            className="h-10 w-10 rounded-full object-cover border border-[#F5A623]/40"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                testimonial.by.split(",")[0]
              )}&background=0D1B3E&color=F5A623`;
            }}
          />
          <div className="text-left">
            <p className="text-xs font-bold text-white leading-tight">
              {testimonial.by.split(",")[0]}
            </p>
            <p className="text-[10px] text-[#FBB034] truncate max-w-[130px]">
              {testimonial.by.split(",")[1] || "Student"}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-0.5 text-[#F5A623]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623]" />
            ))}
          </div>
          <span className="text-[9px] font-semibold text-emerald-400 mt-0.5 tracking-wide">
            Verified Review
          </span>
        </div>
      </div>

      {/* Quote */}
      <p
        className={cn(
          "text-xs sm:text-sm leading-relaxed line-clamp-4 font-normal mt-1",
          isCenter ? "text-white/95" : "text-white/60"
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>

      {/* Footer info */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[10px] text-white/40 pt-2 border-t border-white/10">
        <span className="text-[#FBB034]/80 font-medium">Balaji Marketing Experts</span>
        <span>Rohini, Delhi</span>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(320);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [isPaused, setIsPaused] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(1);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
    setActiveReviewIndex((prev) => {
      const next = (prev + steps - 1 + testimonials.length) % testimonials.length;
      return next + 1;
    });
  };

  // Auto rotate every 6s unless user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleMove(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonialsList]);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 320 : 270);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden h-[460px] sm:h-[490px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Navigation buttons and counter */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 z-30">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#121c38]/80 text-white backdrop-blur transition-all hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-white cursor-pointer active:scale-95 shadow-lg"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-[11px] font-semibold text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur tabular-nums">
          {activeReviewIndex} / {testimonials.length}
        </span>

        <button
          onClick={() => handleMove(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#121c38]/80 text-white backdrop-blur transition-all hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-white cursor-pointer active:scale-95 shadow-lg"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
