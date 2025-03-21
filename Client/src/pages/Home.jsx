
import React from "react";
import heroimg from "../assets/hero.jpg";
import homeReal from "../assets/homeReal.jpg";
import google from "../assets/logo/google.png";
import meetLogo from "../assets/logo/meet.png";
import zoomLogo from "../assets/logo/zoom.png";
import microsoftLogo from "../assets/logo/microsoft.png";
import facebook from "../assets/logo/facebook.png";
import nvidia from "../assets/logo/nvidia.png";
import oracal from "../assets/logo/oracal.png";
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
    <div className="overflow-x-hidden">
      {/* Top Banner */}
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-green-400 h-10 text-white text-sm md:text-base font-medium">
        All-in-One Placement Hub – Everything you need to land your dream job.
      </div>

      {/* Hero Section */}
      <div className="my-24 ml-4">
        <h2 className="text-3xl text-center md:text-left md:text-6xl">
          <span className=" text-outline font-extrabold md:text-8xl">
            Welcome Back
          </span>
          <span className="text-gray-500 font-extrabold">
            - A better way to
          </span>
          <br />
          Upgrade yourself with us.
        </h2>

        <p className="mt-4 text-muted-foreground text-md">
          Boost your interview skills and increase your success rate with <br />
          AI-driven insights. Discover a smarter way to prepare, practice, and
          stand out.
        </p>
      </div>

      <div className="flex w-full items-center justify-evenly md:px-12 md:items-center md:justify-end gap-12">
        <p className="text-3xl font-semibold text-gray-900 text-center">
          250k+
          <span className="block text-xl text-muted-foreground font-normal">
            Offers Recieved
          </span>
        </p>
        <p className="text-3xl font-semibold text-gray-900 text-center">
          1.2M+
          <span className="block text-xl text-muted-foreground font-normal">
            Interview Aced
          </span>
        </p>
      </div>

      {/* First image section */}
      <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative ml-1">
        <img src={heroimg} alt="" className="w-full h-full object-cover" />

        <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
          Inteviews Copilot&copy;
        </div>

        <div className="md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
          <h2 className="text-black-500 font-semibold">Test Yourself</h2>
          <p className="text-sm text-black-500">
            Pick the position you are interviewing for, take an AI-powered
            practice interview, and get feedback on your performance. 100% free.
          </p>

          {/* Redirect Button */}
          <button
            onClick={handleNavigate}
            className="mt-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Take Practice Interview <Sparkles />
          </button>
        </div>
      </div>
      {/* marquee section */}
      <hr
  class="mt-12  h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="w-full my-4 md:my-8">
        <Marquee>
          <img src={google} alt="google" className="h-16 mx-8" />
          <img src={meetLogo} alt="Google Meet" className="h-16 mx-8" />
          <img src={zoomLogo} alt="Zoom" className="h-16 mx-8" />
          <img src={microsoftLogo} alt="Microsoft" className="h-16 mx-8" />
          <img src={facebook} alt="Facebook" className="h-16 mx-8" />
          <img src={nvidia} alt="Nvidia" className="h-16 mx-8" />
          <img src={oracal} alt="Oracal" className="h-16 mx-8" />
        </Marquee>
      </div>
      <hr
  class=" mb-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {/* Image Section */}
        <div className="col-span-1 md:col-span-3">
          <img
            src={homeReal}
            alt="Transform your preparation"
            className="ml-2 w-full max-h-110 rounded-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-1 md:col-span-2 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center gap-8">
          <p className="text-center text-muted-foreground">
            Transform the way you prepare, gain confidence, and boost your
            chances of landing your dream job. Let AI be your edge in
            todays competitive job market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
