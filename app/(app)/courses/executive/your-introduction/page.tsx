import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import MofuAssessmentView, {
  type MofuCourseConfig,
} from "@/components/mofu-assessment-view";

export const metadata: Metadata = {
  title:
    "Your Introduction | Executive Marketing Program | Balaji Marketing Institute",
  description:
    "Answer a few simple questions about your career goals, what you know about performance marketing, and watch a video to share what audience is watching.",
};

export const executiveIntroductionConfig: MofuCourseConfig = {
  courseId: "executive",
  courseName: "Executive Program in Marketing & Growth (3 Months)",
  badge: "Admissions Step 2 · Your Introduction",
  tagline:
    "Answer these simple questions in your own words so our instructors can understand your background and goals for the Sunday executive cohort.",
  estimatedMinutes: "4–6 Mins",
  backToCourseHref: "/courses/executive",

  section1: {
    title: "About You & Your Professional Goals",
    subtitle: "Tell us about your current role and what you want to achieve through this weekend program.",
    whyQuestion: {
      title: "Why do you want to join this Executive Marketing & Growth Program?",
      helper: "Tell us about your current job and your promotion, revenue, or agency growth goals.",
      placeholder: "e.g. I want to advance to Head of Growth / CMO, manage larger ad budgets, and learn AI marketing automation...",
    },
    knowledgeQuestion: {
      title: "What is your current experience with marketing or ad campaigns?",
      helper: "Mention the tools, platforms, or roles you have worked with so far.",
      placeholder: "e.g. I run Facebook/Google ads at work / I lead a sales team / I have 3 years of marketing experience...",
    },
  },

  section2: {
    title: "Watch This Ad Video & Share Your Thoughts",
    subtitle: "Watch the video below and answer what audience is watching and what is being shown.",
    videoTitle: "Growth Marketing Ad Case",
    videoDuration: "60-90 seconds",
    youtubeUrlOrId: "GB6xh_sq22Q",
    videoPrompt: "Watch the growth ad above and answer these simple questions:",
    questions: [
      {
        id: "exec_video_audience",
        question: "What audience is watching this video?",
        helper: "Who is the target customer or decision maker in this ad?",
        placeholder: "e.g. Business founders, working professionals, mid-market managers...",
      },
      {
        id: "exec_video_shown",
        question: "What are they showing in the video?",
        helper: "What problem or solution is displayed in the video?",
        placeholder: "Write what you saw in the video...",
      },
      {
        id: "exec_video_offer",
        question: "What is the main offer or call to action in the video?",
        helper: "What does the video ask the audience to do?",
        placeholder: "e.g. Book a demo, start a free trial, download a case study...",
      },
      {
        id: "exec_video_opinion",
        question: "If you were managing this campaign, what is 1 thing you would change to get more leads?",
        helper: "Share your practical advice.",
        placeholder: "Write your thoughts here...",
      },
    ],
  },

  section3: {
    title: "Simple Growth Questions",
    subtitle: "Write simple answers based on your experience and practical thinking:",
    questions: [
      {
        id: "exec_q1",
        question: "What is the biggest challenge your company or business faces today in getting new customers online?",
        helper: "e.g. High ad costs, low lead quality, lack of creative video ideas...",
        placeholder: "Write the challenge here...",
      },
      {
        id: "exec_q2",
        question: "Which digital marketing channel (Meta Ads, Google Search, SEO, LinkedIn, etc.) is currently most important for your industry?",
        helper: "Tell us why you chose this channel.",
        placeholder: "Write your answer here...",
      },
      {
        id: "exec_q3",
        question: "Can you attend our Sunday classroom batches in Rohini / New Delhi (10:30 AM to 2:30 PM)?",
        helper: "Or let us know if you prefer the live online weekend hybrid option.",
        placeholder: "e.g. Yes, Sunday classroom works / Prefer online hybrid...",
      },
    ],
  },
};

export default function ExecutiveIntroductionPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <MofuAssessmentView config={executiveIntroductionConfig} />
      </main>
      <SiteFooter />
    </>
  );
}
