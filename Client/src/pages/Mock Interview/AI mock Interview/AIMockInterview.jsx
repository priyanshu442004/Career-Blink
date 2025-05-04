import React from "react";
import { useNavigate } from "react-router-dom";

const AIMockInterview = () => {
  const goToPage = useNavigate();
  const interview = [
    {
      language: "Java",
      time: "12 mins interview",
      path:"JavaInterview",
      skills: ["Core JAVA", "Spring Framework"]
    },
    {
      language: "C++",
      time: "12 mins interview",
      path:"C++Interview",
      skills: ["Core JAVA", "Spring Framework"]
    },
    {
      language: "JavaScript",
      time: "15 mins interview",
      path: "JavaScript",
      skills: ["JavaScript","React.js"]
    },
    {
      language: "API Integration",
      time: "15 mins interview",
      path: "APIIntegration",
      skills: ["API Integration"]
    }
  ];

  const handleNavigate1 = (path) => {
    goToPage(path);
  };
  return (
  <div className="pb-20 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center w-full">
    {/* Main Heading */}
    <div className="text-black text-6xl font-extrabold text-center w-full mt-32 leading-tight">
      Prepare for your next interview
      <div className="text-black-800 mt-5 text-lg font-medium max-w-3xl mx-auto">
        Pick the position you are interviewing for, take an AI-powered
        practice interview, and get feedback on your performance. 100% free.
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-8 mt-16 max-w-6xl px-4 w-full">
      {interview.map(({ language, time, skills, path }, index) => (
        <div key={index} className="w-full md:w-[45%] lg:w-[40%]">
          <div className="rounded-3xl p-6 shadow-lg bg-white hover:shadow-xl hover:scale-[1.02] transition-all">
            <p className="text-sm text-black mb-2">{time}</p>
            <h2 className="text-2xl text-blue-600 font-bold mb-4">{language}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, i) => (
                <span key={i} className="text-black px-3 py-1 text-sm bg-white border rounded-md">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleNavigate1(path)}
                className="self-start mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white py-2 px-6 rounded-full font-semibold transition-all duration-300"
              >
                Take practice interview
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default AIMockInterview;
