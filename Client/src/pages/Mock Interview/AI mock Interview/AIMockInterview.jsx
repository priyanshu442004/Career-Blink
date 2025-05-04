import React from "react";
import { useNavigate } from "react-router-dom";

const AIMockInterview = () => {
  const goToPage = useNavigate();
  const interview = [
    {
      technology: "Spring boot",
      skills: ["Core JAVA", "Hibernate", "Spring Boot",]
    },
    {
      technology: "Cloud",
      skills: ["Cloud Platforms", "Cloud Security"]
    },
    {
      technology: "Node.js Developer",
      skills: ["Node.js", "Express.js", "MongoDB", "JavaScript"]
    },
    {
      technology: "React.js Developer",
      skills: ["JavaScript","React.js","Redux", "HTML", "CSS"]
    },
    {
      technology: "SQL Developer",
      skills: ["SQL", "Database Design", "Data Modeling"]
    },
  ];

  const handleNavigate1 = (technology) => {
    localStorage.setItem("allowSetup", true);
    goToPage(`/Setup-Your_Intervew?tech=${technology}`);
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
      {interview.map(({ technology, skills}, index) => (
        <div key={index} className="w-full md:w-[45%] lg:w-[40%] hover:cursor-pointer"
        onClick={() => handleNavigate1(technology)}
        >
          <div className="rounded-3xl p-6 shadow-lg bg-white hover:shadow-xl hover:scale-[1.02] transition-all">
            <p className="text-sm text-black mb-2">Self-paced • Unlimited Retakes</p>
            <h2 className="text-2xl text-blue-600 font-bold mb-4">{technology}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, i) => (
                <span key={i} className="text-black px-3 py-1 text-sm bg-white border rounded-md">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <button
                
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
