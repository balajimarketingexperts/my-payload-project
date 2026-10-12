import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import MofuAssessmentView, {
  type MofuCourseConfig,
} from "@/components/mofu-assessment-view";

export const metadata: Metadata = {
  title:
    "Your Introduction | Diploma in Digital Marketing | Balaji Marketing Institute",
  description:
    "Answer a few simple questions about your career goals, what you know about digital marketing, and watch a video to share what audience is watching.",
};

export const diplomaIntroductionConfig: MofuCourseConfig = {
  courseId: "diploma",
  courseName: "Diploma in Digital Marketing (6 Months)",
  badge: "Admissions Step 2 · Your Introduction",
  tagline:
    "Answer these simple questions in your own words so our mentors can understand your learning goals before your 1-on-1 counseling call.",
  estimatedMinutes: "4–6 Mins",
  backToCourseHref: "/courses/diploma",

  section1: {
    title: "About You & Your Goals",
    subtitle: "Tell us why you want to do the Diploma program and what you know so far.",
    whyQuestion: {
      title: "Why do you want to do this Diploma course?",
      helper: "Tell us what job or career outcome you are aiming for after 6 months.",
      placeholder: "e.g. I want to secure a full-time marketing job with 100% placement / I want to build a career in agency ads...",
    },
    knowledgeQuestion: {
      title: "What do you know about digital marketing?",
      helper: "Write whatever you know — beginners are welcome!",
      placeholder: "e.g. I know about social media ads and Google search / I have tried creating content / I am starting completely fresh...",
    },
  },

  section2: {
    title: "Watch This Video & Tell Us What You See",
    subtitle: "Watch the short video below and answer what audience is watching and what is being shown.",
    videoTitle: "Campaign Video Case",
    videoDuration: "60-90 seconds",
    youtubeUrlOrId: "u2FLSmVsFs0",
    videoPrompt: "Watch the video above and answer these simple questions:",
    questions: [
      {
        id: "dip_video_audience",
        question: "What audience is watching this video?",
        helper: "Who was this video made for?",
        placeholder: "e.g. Students, young working people, families, or business buyers...",
      },
      {
        id: "dip_video_shown",
        question: "What are they showing in the video?",
        helper: "What is happening in the video?",
        placeholder: "Write what you noticed in the video...",
      },
      {
        id: "dip_video_offer",
        question: "What is the main message or offer in the video?",
        helper: "What is the video asking the viewer to do or think?",
        placeholder: "e.g. Sign up for a program, try a service, or learn more...",
      },
      {
        id: "dip_video_thought",
        question: "What is one thing that caught your attention in this video?",
        helper: "Could be the sound, dialogue, visual, or story.",
        placeholder: "Write your honest thoughts...",
      },
    ],
  },

  section3: {
    title: "Simple Practical Questions",
    subtitle: "Write short answers based on your practical thinking:",
    questions: [
      {
        id: "dip_q1",
        question: "If a friend opened a new clothing brand, how would you advise them to get their first 50 customers?",
        helper: "Think about simple, practical ways to get sales.",
        placeholder: "Write your ideas here...",
      },
      {
        id: "dip_q2",
        question: "What kind of online ads do you personally stop and watch when browsing your phone?",
        helper: "Think about what makes you stop scrolling.",
        placeholder: "e.g. Funny reels, before-after videos, discount announcements...",
      },
      {
        id: "dip_q3",
        question: "Are you interested in full-time jobs, freelancing, or starting an agency after graduation?",
        helper: "Tell us your preference so we can customize your training path.",
        placeholder: "Write your goal here...",
      },
    ],
  },
};

export default function DiplomaIntroductionPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <MofuAssessmentView config={diplomaIntroductionConfig} />
      </main>
      <SiteFooter />
    </>
  );
}
