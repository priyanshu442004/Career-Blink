import React from "react";

const EnglishCommunication = () => {
  const knew = 0;
  const learnt = 0;
  const skipped = 0;
  const total = 75;

  const progressPercent = ((knew + learnt + skipped) / total) * 100;

  const resetProgress = () => {
    console.log("Resetting progress...");
    // Add logic to reset state in the future
  };

  return (
    <div className="flex flex-col items-center space-y-4 text-center bg-gradient-to-b from-blue-50 to-blue-100 pb-20">
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
          <span>✓ Knew <span className="font-semibold">{knew} Items</span></span>
          <span>📘 Learnt <span className="font-semibold">{learnt} Items</span></span>
          <span>⏭️ Skipped <span className="font-semibold">{skipped} Items</span></span>
          <button
            onClick={resetProgress}
            className="text-red-600 font-semibold hover:underline"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnglishCommunication;
