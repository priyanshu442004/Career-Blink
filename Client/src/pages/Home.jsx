import React from "react";
import heroimg from "../assets/hero.jpg";
import homeReal from "../assets/homeReal.jpg";
import firebaseLogo from "../assets/logo/firebase.png";
import meetLogo from "../assets/logo/meet.png";
import zoomLogo from "../assets/logo/zoom.png";
import microsoftLogo from "../assets/logo/microsoft.png";
import tailwindLogo from "../assets/logo/tailwindcss.png";
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigate = () => {
    navigate("/AIMockInterview");
  };

  return (
   <div>
         <div className='flex flex-col justify-center items-center  bg-gradient-to-r from-blue-600 to-green-400 h-8 text-white'>      
           <h1>All-in-One Placement Hub – Everything you need to land your dream job.</h1>
          </div>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
    </div>  
    </div>
  );
};

export default Home;
