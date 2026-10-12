import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import MofuAssessmentView, {
  type MofuCourseConfig,
} from "@/components/mofu-assessment-view";

export const metadata: Metadata = {
  title:
    "Your Introduction | MBA in Marketing | Balaji Marketing Institute",
  description:
    "Answer a few simple questions about your career goals, what you know about marketing strategy, and watch a video to share what audience is watching.",
};

export const mbaMarketingIntroductionConfig: MofuCourseConfig = {
  courseId: "mba-marketing",
  courseName: "MBA in Marketing & Brand Leadership (2 Years)",
  badge: "Admissions Step 2 · Your Introduction",
  tagline:
    "Answer these simple questions in your own words so our academic directors can understand your career goals before your counseling call.",
  estimatedMinutes: "4–6 Mins",
  backToCourseHref: "/courses/mba-marketing",

  section1: {
    title: "About You & Your MBA Goals",
    subtitle: "Tell us why you want to do an MBA in Marketing and what you know so far.",
    whyQuestion: {
      title: "Why do you want to do this MBA in Marketing?",
      helper: "Tell us about your career plans (Brand Manager role, ₹8L+ CTC, FMCG/E-commerce, or business leadership).",
      placeholder: "e.g. I want to become a Brand Manager at a top company, gain leadership skills, and target an 8L+ salary...",
    },
    knowledgeQuestion: {
      title: "What do you know about marketing and brands?",
      helper: "Share your perspective in your own words.",
      placeholder: "e.g. I know how companies build brand loyalty, use digital channels to get sales, and launch new products...",
    },
  },

  section2: {
    title: "Watch This Brand Video & Share Your Thoughts",
    subtitle: "Watch the video below and answer what audience is watching and what is being shown.",
    videoTitle: "Brand Commercial Case",
    videoDuration: "60-90 seconds",
    youtubeUrlOrId: "X0xbNUMZCvk",
    videoPrompt: "Watch the brand commercial above and answer these simple questions:",
    questions: [
      {
        id: "mba_video_audience",
        question: "What audience is watching this video?",
        helper: "Who is the primary buyer or consumer this brand wants to reach?",
        placeholder: "e.g. Urban professionals, young families, college students...",
      },
      {
        id: "mba_video_shown",
        question: "What are they showing in the video?",
        helper: "What is the story or situation shown in the video?",
        placeholder: "Write what you saw in the video...",
      },
      {
        id: "mba_video_offer",
        question: "What is the main message or promise made by the brand?",
        helper: "What does the brand want people to remember?",
        placeholder: "Write the core message of the brand...",
      },
      {
        id: "mba_video_opinion",
        question: "If you were the brand manager, what would you add to make this ad even better?",
        helper: "Share your creative marketing advice.",
        placeholder: "Write your ideas here...",
      },
    ],
  },

  section3: {
    title: "Simple Marketing & Business Questions",
    subtitle: "Write simple answers based on your practical thinking:",
    questions: [
      {
        id: "mba_q1",
        question: "Which Indian or global brand do you find most interesting in its marketing, and why?",
        helper: "e.g. Zomato, Apple, Nike, Tata, Swiggy, etc.",
        placeholder: "Name the brand and tell us what you like about their ads or social media...",
      },
      {
        id: "mba_q2",
        question: "If a company spends ₹10,000 on ads and gets ₹40,000 in sales, why do you think that happened?",
        helper: "Share your understanding in simple words.",
        placeholder: "Write your answer here...",
      },
      {
        id: "mba_q3",
        question: "Where do you see yourself working 2 years after completing your MBA?",
        helper: "Tell us the kind of company, role, or city you prefer.",
        placeholder: "Write your target role or company...",
      },
    ],
  },
};

export default function MbaMarketingIntroductionPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <MofuAssessmentView config={mbaMarketingIntroductionConfig} />
      </main>
      <SiteFooter />
    </>
  );
}
