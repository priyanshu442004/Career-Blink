import React from "react";

const JavaInterview = () => {
  return (
    <div className="overflow-x-hidden bg-[url('../src/assets/AIMOCK/mock1.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center w-full">
      {/* Main Heading */}
      <div className="text-black text-7xl font-extrabold text-center w-full mt-1 leading-tight">
        Java Developer interview <br />
        questions
        <div className="flex flex-wrap gap-2 mt-3 mb-6 items-center justify-center w-full">
          <span className="px-3 py-1 text-sm bg-white border rounded-md">
            Core Java
          </span>
          <span className="px-3 py-1 text-sm bg-white border rounded-md">
            Spring FrameWork
          </span>
        </div>
        <div className="text-black-800 mt-5 text-lg font-medium max-w-3xl mx-auto">
          Check out 10 of the most common Java Developer interview questions and
          take an AI-powered practice interview.
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 
        text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-900 
        transition-transform transform hover:scale-105 active:scale-95 font-semibold text-lg">
          Take Practice Interview
        </button>
      </div>
    </div>
  );
};
export default JavaInterview;
