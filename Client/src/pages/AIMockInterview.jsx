import React from "react";
import { useNavigate } from "react-router-dom";

const AIMockInterview = () => {
  const goToPage = useNavigate();
  // Function to handle navigation
  const handleNavigate1 = () => {
    goToPage("/AIMockInterview/JavaInterview");
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

      {/* JAVA Component */}
      <div className="mt-16 w-full max-w-xl px-4">
        <div className="border rounded-lg p-6 shadow-sm bg-blue-100 hover:shadow-md transition-all">
          <p className="text-sm text-black-500 mb-2">12 mins interview</p>

          <h2 className="text-xl font-semibold mb-4">JAVA</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-sm bg-white border rounded-md">
              Core JAVA
            </span>
            <span className="px-3 py-1 text-sm bg-white border rounded-md">
              Spring Framework
            </span>
          </div>

          <button  onClick={handleNavigate1}className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Take practice interview
          </button>
        </div>
      </div>
      {/* C++ Component */}
      <div className="mt-16 w-full max-w-xl px-4">
        <div className="border rounded-lg p-6 shadow-sm bg-blue-100 hover:shadow-md transition-all">
          <p className="text-sm text-black-500 mb-2">12 mins interview</p>

          <h2 className="text-xl font-semibold mb-4">C++</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-sm bg-white border rounded-md">
              Core JAVA
            </span>
            <span className="px-3 py-1 text-sm bg-white border rounded-md">
              Spring Framework
            </span>
          </div>

          <button
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Take practice interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIMockInterview;
