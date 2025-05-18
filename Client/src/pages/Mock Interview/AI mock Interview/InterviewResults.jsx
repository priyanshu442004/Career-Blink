import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = "AIzaSyC4kZKYfxLI7vJF2tNTX91blLmzjqlgYUk";

const InterviewResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || {};

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!answers || !answers.length) {
      navigate("/AIMockInterview");
      return;
    }

    const evaluateAnswers = async () => {
      setLoading(true);
      try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const evaluated = await Promise.all(
          answers.map(async ({ question, answer }) => {
            const prompt = `
Evaluate the following interview answer.

Question: ${question}
Candidate's Answer: ${answer}

1. Give a score from 0 to 10 based on technical correctness and clarity.
2. Provide a short improvement tip.

Respond strictly in this JSON format:
{
  "score": number (0-10),
  "suggestion": "short improvement tip"
}
`;

            const result = await model.generateContent(prompt);
            const responseText = result.response.candidates?.[0]?.content?.parts?.[0]?.text;

            const safeJSON = JSON.parse(responseText.match(/\{[\s\S]*\}/)?.[0] || "{}");

            return {
              question,
              answer,
              score: safeJSON.score || 0,
              suggestion: safeJSON.suggestion || "No suggestion provided.",
            };
          })
        );

        setResults(evaluated);
      } catch (error) {
        toast.error("Failed to evaluate answers.");
        console.error(error);
        navigate("/AIMockInterview");
      } finally {
        setLoading(false);
      }
    };

    evaluateAnswers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-10 h-10 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-blue-700 text-lg font-semibold">Evaluating your responses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4 ">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 space-y-8 mt-20">
        <h1 className="text-3xl font-bold text-center text-blue-700">Interview Results</h1>

        {results.map((res, index) => (
          <div key={index} className="border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-blue-200 transition">
            <h2 className="font-bold text-lg text-blue-600">Q{index + 1}. {res.question}</h2>
            <p className="mt-2 text-gray-700"><span className="font-semibold text-gray-900">Your Answer:</span> {res.answer}</p>
            <p className="mt-2 text-green-600 font-semibold">Score: {res.score}/10</p>
            <p className="mt-1 text-yellow-600">Suggestion: {res.suggestion}</p>
          </div>
        ))}

        <button
          onClick={() => navigate("/AIMockInterview")}
          className="w-full mt-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Practice Again
        </button>
      </div>
    </div>
  );
};

export default InterviewResults;
