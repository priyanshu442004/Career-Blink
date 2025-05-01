import React, { useEffect, useState } from "react";

const hrQuestions = [
  {
    core: "Beginner",
    question: "Tell me something about yourself in brief?",
    answer: "I’m a recent graduate with a strong academic background and a passion for learning. I’ve completed projects in [Your Field] and developed skills like teamwork, problem-solving, and communication. I'm now excited to apply my knowledge in a professional environment like yours.",
  },
  {
    core: "Beginner",
    question: "Why should we hire you? or Why should I hire you?",
    answer: "You should hire me because I’m a quick learner, dedicated, and adaptable. I bring a fresh perspective, strong work ethic, and I’m eager to grow and contribute positively to your team.",
  },
  {
    core: "Beginner",
    question: "Why do you want to work for us or our company? or Why do you want this job?",
    answer: "I’ve researched your company and admire your culture, values, and achievements. I believe this role aligns well with my career goals and offers the right environment for growth, learning, and contributing meaningfully.",
  },
  {
    core: "Beginner",
    question: "Tell me something about our company.",
    answer: "Your company is known for its innovation and commitment to quality. You’ve made significant contributions to [industry or service], and your work culture promotes growth and learning, which is something I truly value.",
  },
  {
    core: "Beginner",
    question: "What are your outside interests?",
    answer: "Outside of academics, I enjoy reading, learning new technologies, and working on personal development. I also like participating in group activities like volunteering and sports, which help me stay balanced and improve teamwork.",
  },
  {
    core: "Intermediate",
    question: "Explain the difference between group and team. Are you a team player?",
    answer: "A group is a collection of individuals working independently, while a team works together towards a common goal. Yes, I am a team player—I enjoy collaborating with others, sharing ideas, and achieving success together.",
  },
  {
    core: "Intermediate",
    question: "Where do you see yourself 3 years from now? or Where do you see yourself in years?",
    answer: "In three years, I see myself growing within the organization, having taken on more responsibilities, and continuously improving my skills to contribute more effectively to the company’s success.",
  },
  {
    core: "Intermediate",
    question: "What has been your greatest failure?",
    answer: "During college, I once underestimated a project’s complexity and missed an early deadline. I learned to plan better, ask for help when needed, and break tasks into manageable steps. That experience made me more organized and resilient.",
  },
  {
    core: "Intermediate",
    question: "How do you feel about working nights and weekends?",
    answer: "I’m flexible and understand that some situations may require extra hours. I’m committed to fulfilling my responsibilities and contributing to the team’s success, even if it means occasional night or weekend work.",
  },
  {
    core: "Intermediate",
    question: "What are your goals?",
    answer: "My short-term goal is to start my career in a reputable company where I can apply my skills. My long-term goal is to grow into a position of leadership while continuing to learn and make meaningful contributions.",
  },
  {
    core: "Intermediate",
    question: "What motivates you to do good job?",
    answer: "I’m motivated by the opportunity to learn, grow, and be recognized for my work. Setting goals and achieving them gives me a sense of satisfaction, and I enjoy contributing to a team’s success.",
  },
  {
    core: "Intermediate",
    question: "Do you have any questions for me?",
    answer: "Yes, I’d love to know more about the team I’ll be working with and the opportunities for learning and development within the company. What qualities do you value most in your employees?",
  },
];




export default function HRFlashcardApp() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const [stats, setStats] = useState({ knew: 0, learnt: 0, skipped: 0 });
  const total = hrQuestions.length;
  
  const [progressPercent, setProgress] = useState(0);
  

  useEffect(() => {
    const newProgress = ((stats.knew + stats.learnt + stats.skipped) / total) * 100;
    setProgress(newProgress);
    if (newProgress >= 100) {
      setShowCongrats(true);
    }
  }, [stats, total]);
  

  const handleAction = (type) => {
    if(stats.knew + stats.learnt + stats.skipped < total){
    setStats((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    }
    setIndex((prev) => (prev + 1 < hrQuestions.length ? prev + 1 : prev));
    setShowAnswer(false);
    if(progressPercent < 100){
    setProgress(((stats.knew + stats.learnt + stats.skipped) / total) * 100);
    }
  };

  const resetProgress = () => {
    setStats({ knew: 0, learnt: 0, skipped: 0 });
    setIndex(0);
    setShowAnswer(false);
  };

  const current = hrQuestions[index];

  return (
    <div className=" mx-auto p-6 flex flex-col items-center space-y-4 text-center bg-gradient-to-b from-blue-50 to-blue-100 pb-20">
      <div className="">
      <h1 className="text-4xl font-extrabold text-indigo-600 animate-bounce mt-35">
        Master HR Interview Question
      </h1>

      <h2 className="text-lg text-gray-1000 max-w-xl">
        🚀 Level Up Your <span className="font-semibold text-black">HR</span> Game with Curated, Proven Questions!
      </h2>

      {/* Progress Tracker */}
      <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-white shadow-md w-full max-w-xl">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Progress Info */}
        <div className="flex flex-wrap justify-between text-sm text-gray-700">
          <span>✓ Knew <span className="font-semibold">{stats.knew} Items</span></span>
          <span>📘 Learnt <span className="font-semibold">{stats.learnt} Items</span></span>
          <span>⏭️ Skipped <span className="font-semibold">{stats.skipped} Items</span></span>
          <button
            onClick={resetProgress}
            className="text-red-600 font-semibold hover:underline"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
    
      

      <div className="bg-white shadow-lg rounded-xl p-8 mb-4 border w-[50%]">
        <div className="text-xs text-gray-400 mb-2">Core · {current.core}</div>
        <div className="text-2xl font-semibold mb-4">
          {showAnswer ? current.answer : current.question}
        </div>
        
          <button
            className="text-blue-500 underline"
            onClick={() => setShowAnswer(!showAnswer)}
          >
          {!showAnswer?"Click to Reveal the Answer":"Hide answer"}  
          </button>
        
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleAction("knew")}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          ✅ Already Know that
        </button>
        <button
          onClick={() => handleAction("learnt")}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          ✨ Didn't Know that
        </button>
        <button
          onClick={() => handleAction("skipped")}
          className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200"
        >
          ⏭️ Skip Question
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        {index + 1} / {hrQuestions.length}
      </div>

      {showCongrats && (
  <div className="fixed inset-0 background-blur-sm bg-black/30 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">🎉 Congratulations!</h2>
      <p className="text-gray-700 mb-4">You've completed all the HR interview questions.</p>
      <button
        onClick={() => {
          setShowCongrats(false);
          resetProgress(); 
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Restart Practice
      </button>
    </div>
  </div>
      )}
    </div>
  );
}
