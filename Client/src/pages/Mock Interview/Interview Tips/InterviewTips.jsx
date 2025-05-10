import React from "react";
import { motion } from "framer-motion"; // Optional for animations (run `npm install framer-motion`)

const tips = [
  {
    title: "Research the Company",
    description:
      "Understand the company's mission, products, culture, and recent news. Tailor your answers accordingly.",
    icon: "🏢",
  },
  {
    title: "Practice Behavioral Questions",
    description:
      "Use the STAR method (Situation, Task, Action, Result) to answer behavioral questions clearly and concisely.",
    icon: "🧠",
  },
  {
    title: "Prepare Your Resume Pitch",
    description:
      "Be ready to talk through your resume confidently, highlighting key achievements and experiences.",
    icon: "📄",
  },
  {
    title: "Dress Appropriately",
    description:
      "Choose an outfit that reflects professionalism and fits the company culture.",
    icon: "👔",
  },
  {
    title: "Follow Up After the Interview",
    description:
      "Send a thank-you email within 24 hours to express appreciation and reiterate your interest.",
    icon: "📧",
  },
  {
    title: "Ask Smart Questions",
    description:
      "Prepare a few questions about the role, team, or company to show engagement.",
    icon: "❓",
  },
  {
    title: "Know Your Resume Inside-Out",
    description:
      "Be ready to explain every point on your resume, including technical details and project outcomes.",
    icon: "📘",
  },
  {
    title: "Understand the Job Description",
    description:
      "Match your experiences and answers to the specific responsibilities and requirements listed in the job post.",
    icon: "📌",
  },
  {
    title: "Master Common Technical Questions",
    description:
      "Prepare for frequently asked technical topics, algorithms, or tools relevant to the position.",
    icon: "💻",
  },
  {
    title: "Simulate Real Interviews",
    description:
      "Practice with mock interviews or peers to build confidence and fluency.",
    icon: "🎙️",
  },
  {
    title: "Use Clear and Structured Answers",
    description:
      "Avoid rambling. Use formats like STAR or PREP to keep your responses focused and concise.",
    icon: "📐",
  },
  {
    title: "Be Honest About Unknowns",
    description:
      "Admit when you don’t know something, but show how you'd approach or learn it.",
    icon: "🫣",
  },
  {
    title: "Speak About Failures Positively",
    description:
      "Talk about what you learned and how you grew when discussing past challenges.",
    icon: "📉",
  },
  {
    title: "Highlight Team Collaboration",
    description:
      "Share examples that showcase your teamwork, communication, and conflict resolution skills.",
    icon: "🤝",
  },
  {
    title: "Bring a Notepad and Pen",
    description:
      "Jotting down important points shows preparedness and professionalism.",
    icon: "📝",
  },
  {
    title: "Perfect Your Introduction",
    description:
      "Craft a short, impactful self-introduction that connects your background with your goals.",
    icon: "👋",
  },
  {
    title: "Deep-Dive into the STAR Method",
    description:
      "Prepare several STAR responses for different behavioral scenarios.",
    icon: "⭐",
  },
  {
    title: "Show Curiosity and Passion",
    description:
      "Talk about side projects, books, or tech trends you follow to demonstrate enthusiasm.",
    icon: "🔥",
  },
  {
    title: "Handle Curveballs Gracefully",
    description:
      "Take a breath, clarify the question, and think aloud to show your logical approach.",
    icon: "🎯",
  },
  {
    title: "Prepare Your Portfolio",
    description:
      "Have GitHub links, project demos, or personal websites ready to share.",
    icon: "🌐",
  },
  {
    title: "End with Impact",
    description:
      "Conclude by summarizing your strengths and thanking the interviewer for their time.",
    icon: "🎁",
  },  
];

const InterviewTips = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans mt-28">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Interview Success Tips</h1>
        <p className="text-lg italic">“The best preparation for tomorrow is doing your best today.”</p>
      </header>

      {/* Tip of the Day */}
      <section className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">💡 Tip of the Day</h2>
        <p className="text-gray-700 leading-relaxed">
          Speak confidently and maintain good posture. Your body language speaks volumes — show enthusiasm, nod when appropriate, and maintain eye contact.
        </p>
      </section>

      {/* Tips Grid */}
      <section className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-3">{tip.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600 text-sm">{tip.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4 mt-12">
        <p className="text-sm">&copy; 2025 CareerBlink | All rights reserved</p>
      </footer>
    </div>
  );
};

export default InterviewTips;
