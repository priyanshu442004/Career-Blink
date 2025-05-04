import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const InterviewSetup = () => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState(5);
  const [error,setError] = useState(false);
  const [experience, setExperience] = useState("Fresher");
  const [params]=useSearchParams();
  const technology=params.get("tech")
  const allow=localStorage.getItem("allowSetup")
  useEffect(() => {
    if(allow===null || allow===undefined || !allow){
      navigate("/AIMockInterview")  
    }
    }, [])
  

  const questionQuantity = (value) => {
    if(value<=0){
        return;
    }
    if(value >= 3 && value <= 20) {
      setNumQuestions(value);
        setError(false);
    } else {
      setNumQuestions(value);

        setError(true);
    }
  };

  const handleStartInterview = () => {
    const queryParams = new URLSearchParams({
      tech: technology,
      numQuestions,
      experience,
    });
    if (error) {
        toast.error("Please enter correct details to continue");
        return;
    }
    navigate(`/startInterview?${queryParams.toString()}`);
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full transition-all duration-300 hover:shadow-blue-200">
        <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
          {technology} Interview Setup
        </h2>

        

        <h2 className="t ext-3xl font-bold text-gray-800 text-center mb-8">
          Customize Your Practice
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Number of Questions
          </label>
          <input
            type="number"
            value={numQuestions}
            onChange={(e) => questionQuantity(e.target.value)}
            className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
            <p className="text-gray-500">Max 20 Questions</p>

        </div>

        {/* Experience Level */}
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">
            Experience Level
          </label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          >
            <option>Fresher</option>
            <option>Experienced</option>
          </select>
        </div>

        <button
          onClick={handleStartInterview}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold rounded-full hover:from-indigo-500 hover:to-blue-600 transition-all duration-300"
        >
          Start Interview
        </button>
        
            {error && <p className="text-red-500">*Please select a valid number of questions (3-20)</p>}

       
        <div>
            <p className="text-center text-gray-500 mt-4">
                By clicking "Start Interview", you agree to our{" "}
                <a href="#" className="text-blue-500 underline">
                Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                Privacy Policy
                </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewSetup;
