import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleGenerativeAI } from "@google/generative-ai";

const StartInterview = () => {
  const [params] = useSearchParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const tech = params.get("tech");
  const experience = params.get("experience");
  const numQuestions = parseInt(params.get("numQuestions"));

  const navigate = useNavigate();

  const GEMINI_API_KEY = "AIzaSyC4kZKYfxLI7vJF2tNTX91blLmzjqlgYUk"; 
  const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const prompt = `
Generate exactly ${numQuestions} ${experience}-level ${tech} interview questions.
Only output a numbered list of questions, with no introduction, no explanation, and no extra text.
Format strictly like this:
1. Question one?
2. Question two?
3. Question three?
...
Do not include anything else. Each question should be concise and technical.
`;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
        

        
        const fullText = result.response.candidates[0].content.parts[0].text;

      const extractedQuestions = fullText
        .split(/\n(?=\d+\.\s)/)
        .map((q) => q.replace(/^\d+\.\s*/, "").trim())
        .filter(Boolean)
        .slice(0, numQuestions);

        setQuestions(extractedQuestions);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching questions");
        console.error(error);
        navigate("/AIMockInterview");
      }
    };

    fetchQuestions();
  }, []);

  const handleNext = () => {
    if (!userAnswer.trim()) {
      toast.error("Please write your answer.");
      return;
    }

    const updatedAnswers = [
    ...answers,
    { question: questions[currentIndex], answer: userAnswer },
  ];

    setAnswers((prev) => [
      ...prev,
      { question: questions[currentIndex], answer: userAnswer },
    ]);
    setUserAnswer("");

    if (currentIndex + 1 < questions.length) {
      setAnswers(updatedAnswers)
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
    } else {
      navigate("/interviewResults", { state: { answers:updatedAnswers } });
    }
  };

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200">
      <div className="text-xl font-semibold text-blue-700 animate-pulse">
        Loading questions...
      </div>
    </div>
  );
}


 return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 flex items-center justify-center px-4 py-12">
    <div className="backdrop-blur-md bg-white/70 shadow-2xl rounded-3xl p-10 w-full max-w-3xl relative animate-fade-in border border-white/40">
      
      
      <div className="mb-6">
        <div className="flex justify-between items-center text-sm text-gray-600 font-semibold mb-1">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{tech} ({experience})</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`
            }}
          />
        </div>
      </div>

     
      <div className="bg-white rounded-2xl border border-blue-200 p-6 mb-6 shadow-sm">
        <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
          {questions[currentIndex]}
        </p>
      </div>

     
      <textarea
        rows={6}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="w-full bg-blue-50 border border-blue-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 text-base shadow-inner resize-none transition"
      />

    
      <button
        onClick={handleNext}
        className="mt-6 w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
      >
        {currentIndex + 1 === questions.length ? "Submit Interview" : "Next Question"}
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Answer sincerely to boost your confidence and readiness.
      </p>
    </div>
  </div>
);


};

export default StartInterview;
