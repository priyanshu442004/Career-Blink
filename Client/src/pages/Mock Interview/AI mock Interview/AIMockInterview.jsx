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
  ];

  const handleNavigate1 = (path) => {
    goToPage(path);
  };
  return (
    <div className="overflow-x-hidden bg-[url('../src/assets/AIMOCK/mock1.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center w-full">
      {/* Main Heading */}
      <div className="text-black text-6xl font-extrabold text-center w-full mt-80 leading-tight">
        Prepare for your next interview
        <div className="text-black-800 mt-5 text-lg font-medium max-w-3xl mx-auto">
          Pick the position you are interviewing for, take an AI-powered
          practice interview, and get feedback on your performance. 100% free.
        </div>
      </div>

      {
        interview.map(({ language, time, skills, path }, index) => (
          <div key={index} className="mt-16 w-full max-w-xl px-4">
            <div className="border rounded-lg p-6 shadow-sm bg-blue-100 hover:shadow-md transition-all">
              <p className="text-sm text-black-500 mb-2">{time}</p>

              <h2 className="text-xl font-semibold mb-4">{language}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-white border rounded-md">
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={()=>{handleNavigate1(path)}}
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Take practice interview
              </button>
            </div>
          </div>
        ))
      }
      
      
    </div>
  );
};

export default AIMockInterview;
