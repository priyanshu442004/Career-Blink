import React from "react";

const InterviewTips = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans mt-30">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Interview Tips</h1>
        <p className="mt-2 text-lg">Ace your next interview with these helpful tips!</p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        {/* Tip of the Day */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tip of the Day</h2>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 4m-4 4h6m-6-4h-6m0 4H6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Stay Calm and Focused</h3>
              <p className="mt-2 text-gray-600">
                Interviews can be stressful, but staying calm and collected will help you think clearly. Take deep breaths, and
                focus on one question at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Interview Tips List */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Tip Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7m4-7H3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Research the Company</h3>
            <p className="text-gray-600">
              Before the interview, research the company and the role you're applying for. Understand the culture, the team, and the
              values they uphold.
            </p>
          </div>

          {/* Tip Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h-1v-4h-1v4h-1m4 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Prepare for Common Questions</h3>
            <p className="text-gray-600">
              Practice answering common interview questions such as "Tell me about yourself" or "Why should we hire you?".
            </p>
          </div>

          {/* Tip Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2l-2 2 2 2m4 4l2-2-2-2m-4 4l-2-2-2 2m-4 4l2 2 2-2m-4 4l2 2 2-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dress Professionally</h3>
            <p className="text-gray-600">
              Dressing appropriately for the interview shows your professionalism. Choose an outfit that suits the company’s culture.
            </p>
          </div>

          {/* Tip Item 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-6-6 6-6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ask Questions</h3>
            <p className="text-gray-600">
              Asking questions shows your interest in the role and the company. Prepare a few thoughtful questions to ask your interviewer.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-8">
        <p>&copy; 2025 InterviewTips. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InterviewTips;
