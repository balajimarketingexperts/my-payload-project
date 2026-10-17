import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import MofuAssessmentView, {
  type MofuCourseConfig,
} from "@/components/mofu-assessment-view";

export const metadata: Metadata = {
  title:
    "Your Introduction | Digital Marketing Course | Balaji Marketing Institute",
  description:
    "Tell us about your goals, share what you know about digital marketing, and watch a video to share what audience is watching.",
  alternates: {
    canonical:
      "https://balajimarketinginstitute.in/courses/digital-marketing/your-introduction",
  },
};

const digitalMarketingIntroductionConfig: MofuCourseConfig = {
  courseId: "digital-marketing",
  courseName: "Digital Marketing Course",
  badge: "Admissions Step 2 · Your Introduction",
  tagline:
    "Answer these quick questions in your own words. There are no right or wrong answers — we want to understand your goals and thinking.",
  estimatedMinutes: "4–6 Mins",
  backToCourseHref: "/courses/digital-marketing",

  section1: {
    title: "About You & Your Goals",
    subtitle: "Tell us why you want to learn digital marketing and what you know so far.",
    whyQuestion: {
      title: "Why do you want to do this digital marketing course?",
      helper: "Tell us about your goal (job, freelancing, business growth, or career switch).",
      placeholder: "e.g. I want to get a high-paying job in digital marketing / I want to grow my family business / I want to start freelancing...",
    },
    knowledgeQuestion: {
      title: "What do you know about digital marketing?",
      helper: "Share anything you know in your own words — even if you are a complete beginner.",
      placeholder: "e.g. I know basics of social media and reels / I have heard of Google Ads and SEO / I am a complete beginner and want to learn from scratch...",
    },
  },

  section2: {
    title: "Watch This Video & Share Your Thoughts",
    subtitle: "Watch the video below and answer a few simple questions about what is shown.",
    videoTitle: "Sample Video Ad",
    videoDuration: "60-90 seconds",
    youtubeUrlOrId: "X0xbNUMZCvk",
    videoPrompt: "Watch the video above and answer the questions below in your own words.",
    questions: [
      {
        id: "dm_video_audience",
        question: "What audience is watching this video?",
        helper: "Who do you think this video or advertisement was made for?",
        placeholder: "e.g. College students, young professionals, shoppers, business owners...",
      },
      {
        id: "dm_video_shown",
        question: "What are they showing in the video?",
        helper: "Briefly describe what happened or what product/service was shown.",
        placeholder: "Write what you saw in the video...",
      },
      {
        id: "dm_video_offer",
        question: "What is the main message or offer in the video?",
        helper: "What is the brand trying to tell the viewer?",
        placeholder: "e.g. Learn a new skill, buy a product, register for a discount...",
      },
      {
        id: "dm_video_opinion",
        question: "What did you like about this ad, or what would you change?",
        helper: "Give your honest opinion as a viewer.",
        placeholder: "Write your thoughts here...",
      },
    ],
  },

  section3: {
    title: "Simple Practical Questions",
    subtitle: "Answer these in your own words based on your personal thinking.",
    questions: [
      {
        id: "dm_q1",
        question: "If you had to promote a local shop or cafe in Delhi, what would you do first?",
        helper: "Think about where local customers spend their time.",
        placeholder: "e.g. I would create Instagram Reels showing the food, run local Google Maps ads, or make a discount offer...",
      },
      {
        id: "dm_q2",
        question: "Which social media app do you think is best for advertising products today, and why?",
        helper: "e.g. Instagram, YouTube, LinkedIn, Facebook, etc.",
        placeholder: "e.g. Instagram because most people watch reels, or YouTube because...",
      },
      {
        id: "dm_q3",
        question: "How many hours per week can you give for learning and practical projects?",
        helper: "Help us know your weekly availability.",
        placeholder: "e.g. 5 to 10 hours per week / 2 hours daily / weekends only...",
      },
    ],
  },
};

export default function DigitalMarketingIntroductionPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <MofuAssessmentView config={digitalMarketingIntroductionConfig} />
      </main>
      <SiteFooter />
    </>
  );
}
