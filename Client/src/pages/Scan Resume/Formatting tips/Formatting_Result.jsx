import React from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const Formatting_Result = () => {
  const result = localStorage.getItem("formattingDetails");

  if (!result) return <p className="flex justify-center items-center w-full min-h-screen text-center text-black">No data available.</p>;

  const sections = result.split("\n\n").map((section) => section.trim()); 

  const headings = [
    "Weak Language & Impact:",
    "Keyword & Skill Gaps:",
    "Experience Section Issues:",
    "Length & Conciseness Issues:",
    "Grammar & Spelling Errors:"
  ].map((h) => h.toLowerCase().trim()); 

  return (
    <div className="overflow-x-hidden bg-[url('../src/assets/AIMOCK/mock1.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-center w-full">
      <h2 className="text-4xl underline text-center font-bold text-blue-400 mb-4 mt-[15vh]">Resume Review</h2>

      {sections.map((section, index) => {
        const lines = section.split("\n").map((line) => line.trim());
        let title = lines[0] || ""; 
        let normalizedTitle = title.toLowerCase().trim(); 

        console.log(`Title Extracted: "${title}" | Normalized: "${normalizedTitle}"`); 

        const content = lines.slice(1); 

        return (
          <div key={index} className="mb-6">
            <div
              className={`pb-6 px-16 mt-6 flex items-center text-lg text-gray-800 before:flex-1 before:border-t before:border-gray-500 before:me-6 after:flex-1 after:border-t after:border-gray-500 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600 
              ${headings.includes(normalizedTitle) ? "text-xl font-semibold text-blue-500" : "text-xl font-semibold text-blue-600"}`}
            >
              {title}
            </div>
            <ul className="space-y-2 flex flex-col pl-16 pr-4">
              {content.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  {point.includes("→") ? (
                    <FaCheckCircle className="text-green-400 mt-1" />
                  ) : (
                    <FaExclamationTriangle className="text-yellow-400 mt-1" />
                  )}
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Formatting_Result;
