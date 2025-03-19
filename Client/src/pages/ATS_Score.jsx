import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ATS_Score = () => {
    const navigate = useNavigate();
    const ats = localStorage.getItem('ats');
    const atsDetails = localStorage.getItem('atsDetails');
    const lines = atsDetails ? atsDetails.split('\n') : [];

    useEffect(() => {
        const handlePopState = () => {
         
          navigate('/ATSChecker');
        };
    
     
        window.addEventListener('popstate', handlePopState);
    
     
        return () => {
          window.removeEventListener('popstate', handlePopState);
        };
      }, [navigate]);

  return (
    <div className="overflow-x-hidden bg-[url('../src/assets/AIMOCK/mock1.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center w-full">
      
      {/* Main Heading */}
      <div className="text-black text-6xl font-extrabold text-center w-full mt-80 leading-tight">
        Your ATS score is : <br /> 
        <span className='text-6xl font-extrabold text-blue-600'>
            
            {ats}
            </span>
        <div className="text-gray-800 mt-7 text-lg font-medium max-w-3xl mx-auto">
          You can improve it by adding more relevant keywords, matching skills, and aligning your experience with the job description. <br />Here is your summary :
        </div>
      </div>

      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          ATS Evaluation Result
        </h1>
        <div className="space-y-4">
          {lines.map((line, index) => {
            // Extract only the percentage value using regex
            const percentageMatch = line.match(/=\s*([\d.]+%)/);

            if (line.includes('Total ATS Score') && percentageMatch) {
              return (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-800 font-semibold p-4 rounded-md flex justify-between items-center"
                >
                  <span>💯 {line.split(':')[0]}:</span>
                  <span className="text-lg">{percentageMatch[1]}</span>
                </div>
              );
            } else if (percentageMatch) {
              const [key] = line.split(':');
              return (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 border-l-4 border-blue-500 p-3 rounded-md"
                >
                  <span className="font-medium text-gray-700">{key.trim()}</span>
                  <span className="font-semibold text-blue-600">
                    {percentageMatch[1]}
                  </span>
                </div>
              );
            } else if (line.trim()) {
              return (
                <p key={index} className="text-gray-600">
                  {line}
                </p>
              );
            }

            return null;
          })}
        </div>
      </div>
      <div className='mt-8 flex flex-col items-center text-center'>
        <p>

          <span className='text-gray-500 font-extrabold text-2xl'>

        Would you like to improve your ATS score? <br />
          </span>

          <span className='font-medium text-md text-2xl'>

        Get AI tips for your resume <br />
          </span>
        </p>
        <button
          onClick={() => navigate('/FormattingTips')}
          className="border hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-lg mt-6 hover:cursor-pointer"
        >
            Resume Formatting Tips
        </
        button>
      </div>
    </div>
  )
}

export default ATS_Score