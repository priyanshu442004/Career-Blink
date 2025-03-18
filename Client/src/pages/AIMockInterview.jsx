import React from "react";
import mock1 from "../assets/AIMOCK/mock1.jpg";
const AIMockInterview = () => {
  return (

    <div className="overflow-x-hidden bg-[url('../src/assets/AIMOCK/mock1.jpg')] bg-cover bg-center h-screen flex justify-center w-full flex justify-center">
      
      <div className="text-black text-3xl font-bold text-center w-full mt-[15%]">
        Get Ready for Your Next Interview <br/>
        <div className="text-white mt-8">
        Pick the position you are interviewing for, take an AI-powered practice 
      interview, and get feedback on your performance. 100% free.
      </div>
      </div>
    </div>
    
  );
};

export default AIMockInterview;
