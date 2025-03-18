import React from "react";
import mock1 from "../assets/AIMOCK/mock1.jpg";
const AIMockInterview = () => {
  return (

    <div className="relative flex items-center justify-center min-h-screen">
      <img src={mock1} alt="" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold">
        Get Ready for Your Next Interview <br/>
        <div className="text-white">
        Pick the position you are interviewing for, take an AI-powered practice 
      interview, and get feedback on your performance. 100% free.
      </div>
      </div>
    </div>
    
  );
};

export default AIMockInterview;
