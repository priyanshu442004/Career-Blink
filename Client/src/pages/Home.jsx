
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
    <div className="pb-20 overflow-x-hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 items-center px-4 md:px-12">
  {/* Image Section */}
  <div className="col-span-1 md:col-span-3 relative group overflow-hidden rounded-2xl shadow-lg">
    <img
      src={homeReal}
      alt="Transform your preparation"
      className="w-full h-100 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
    <div className="absolute bottom-4 left-4 text-white">
      <h2 className="text-2xl font-bold">Unlock Your Potential</h2>
      <p className="text-sm mt-1">Upgrade your preparation journey today.</p>
    </div>
  </div>

  {/* Text Section */}
  <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-6 text-center  p-8 rounded-2xl ">
    <h2 className="text-3xl font-extrabold text-gray-800">
      Prepare Smarter, Not Harder
    </h2>
    <p className="text-gray-600 text-md">
      Transform the way you prepare for interviews with AI-driven insights and tailored practice sessions. 
      Build your confidence, sharpen your skills, and ace your dream job interviews with ease.
    </p>
    
  </div>
</div>


      <section className="mt-20 px-4 md:px-12">
  <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800">
    Why Choose Us?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">AI-Driven Practice</h3>
      <p className="text-muted-foreground">
        Get access to AI-powered mock interviews that simulate real-world experiences. Practice anytime, get instant feedback, and improve your responses.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">Personalized Feedback</h3>
      <p className="text-muted-foreground">
        Receive customized insights on your strengths and areas of improvement, helping you become interview-ready with targeted advice.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">Real-time Performance Analysis</h3>
      <p className="text-muted-foreground">
        Understand your interview habits through performance analytics and track your growth over time to stay ahead of the competition.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">24/7 Access</h3>
      <p className="text-muted-foreground">
        Whether it's early morning or late night, our platform is available round-the-clock to help you prepare whenever it suits you best.
      </p>
    </div>
  </div>
</section>

{/* Success Stories Section */}
<section className="mt-24 px-4 md:px-12">
  <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800">
    Success Stories
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="p-6 bg-gradient-to-r from-green-200 to-green-100 rounded-lg shadow-md">
      <p className="text-lg italic text-gray-700">
        "Thanks to Interview Copilot, I aced my dream job interview at Google! The AI mock sessions made me so confident and ready."
      </p>
      <div className="mt-4 font-semibold text-right text-green-700">— Ananya Sharma</div>
    </div>
    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg shadow-md">
      <p className="text-lg italic text-gray-700">
        "Practicing with this platform helped me fix my common mistakes and boosted my communication skills. I got 3 job offers!"
      </p>
      <div className="mt-4 font-semibold text-right text-blue-700">— Rahul Verma</div>
    </div>
  </div>
</section>

{/* Final Call-to-Action */}
<div className="mt-20 flex flex-col items-center justify-center">
  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
    Ready to Take the First Step Towards Your Dream Job?
  </h3>
  <button
    onClick={handleNavigate}
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition"
  >
    Start Your Journey Today
  </button>
</div>
    </div>
  );
};

export default Home;
