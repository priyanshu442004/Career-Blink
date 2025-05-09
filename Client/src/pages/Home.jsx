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
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  // Animation variants for the hero section
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", damping: 12, stiffness: 100 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Function to handle navigation
  const handleNavigate = () => {
    navigate("/AIMockInterview");
  };

  const handleNavigateR = () => {
    navigate("/ATSChecker");
  };
  return (
    <motion.div
      className="pb-20 overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      {/* Top Banner */}
      <motion.div
        className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-green-400 h-10 text-white text-sm md:text-base font-medium"
        variants={textVariants}
      >
        All-in-One Placement Hub – Everything you need to land your dream job.
      </motion.div>

      {/* Hero Section */}
      <motion.div className="my-24 ml-4" variants={textVariants}>
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

        <motion.p className="mt-4 text-muted-foreground text-md" variants={textVariants}>
          Boost your interview skills and increase your success rate with <br />
          AI-driven insights. Discover a smarter way to prepare, practice, and
          stand out.
        </motion.p>
      </motion.div>

      <motion.div className="flex w-full items-center justify-evenly md:px-12 md:items-center md:justify-end gap-12" variants={statsVariants}>
        <div className="text-center">
          <p className="text-3xl font-semibold text-blue-600">
            250k+
          </p>
          <p className="block text-xl text-muted-foreground font-normal">
            Offers Received
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold text-green-500">
            1.2M+
          </p>
          <p className="block text-xl text-muted-foreground font-normal">
            Interviews Aced
          </p>
        </div>
      </motion.div>

      {/* First image section */}
      <motion.div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative ml-1" variants={imageVariants}>
        <img src={heroimg} alt="" className="w-full h-full object-cover" />

        <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md text-sm md:text-base">
          Interviews Copilot&copy;
        </div>

        <div className="md:block absolute w-80 bottom-4 right-4 px-6 py-4 rounded-md bg-white/70 backdrop-blur-md">
          <h2 className="text-gray-800 font-semibold mb-2">Test Yourself</h2>
          <p className="text-sm text-gray-600">
            Pick the position you are interviewing for, take an AI-powered
            practice interview, and get feedback on your performance. 100% free.
          </p>

          {/* Redirect Button */}
          <motion.button
            onClick={handleNavigate}
            className="mt-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Take Practice Interview <Sparkles className="animate-pulse" />
          </motion.button>
        </div>
      </motion.div>
      {/* marquee section */}
<div className="py-8 bg-gray-100 relative">
  <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:via-neutral-700 mb-4" />
  <div className="w-full overflow-hidden">
    <Marquee pauseOnHover speed={60} className="py-4 flex items-center justify-around">
      <img src={google} alt="google" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={meetLogo} alt="Google Meet" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={zoomLogo} alt="Zoom" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={microsoftLogo} alt="Microsoft" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        className="bg-white/80 backdrop-blur-md py-2 px-6 rounded-full shadow-md text-sm md:text-base font-semibold text-blue-600"
      >
        Our Students <span className="text-green-500">Work Here</span>
      </motion.div>

      <img src={facebook} alt="Facebook" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={nvidia} alt="Nvidia" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={oracal} alt="Oracal" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      {/* Duplicate logos for smoother flow */}
      <img src={google} alt="google" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={meetLogo} alt="Google Meet" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={zoomLogo} alt="Zoom" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={microsoftLogo} alt="Microsoft" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={facebook} alt="Facebook" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={nvidia} alt="Nvidia" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
      <img src={oracal} alt="Oracal" className="h-12 md:h-16 mx-6 hover:grayscale-0 transition-all duration-300" />
    </Marquee>
  </div>
  <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:via-neutral-700 mt-4" />
</div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 items-center px-4 md:px-12">
        {/* Image Section */}
        <motion.div
          className="col-span-1 md:col-span-3 relative group overflow-hidden rounded-2xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={homeReal}
            alt="Transform your preparation"
            className="w-full h-120 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold drop-shadow">Unlock Your Potential</h2>
            <p className="text-sm mt-1 drop-shadow-sm">Upgrade your preparation journey today.</p>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="col-span-1 md:col-span-2 flex flex-col items-center justify-center gap-8 text-center p-10 rounded-3xl bg-gradient-to-br from-blue-400 to-indigo-500 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div className="animate-bounce" style={{ scale: 1.2 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </motion.div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            Unlock Your Interview Potential ✨
          </h2>
          <p className="text-lg text-indigo-100 font-semibold drop-shadow-sm">
            Stop stressing, start succeeding! Our AI-powered platform crafts your perfect interview prep journey.
          </p>
          <div className="flex gap-4 mt-6">
            <motion.a
              href="/dsa"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 ease-in-out"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="mr-2">🚀</span> Ace Your DSA!
            </motion.a>
            <motion.a
              href="/mock-interviews"
              className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-300 transition-all duration-300 ease-in-out"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              HandWritten Notes <span className="ml-1">🎯</span>
            </motion.a>
          </div>
          <motion.div className="absolute bottom-4 right-4 animate-spin-slow">
            <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1m-9 0h-1m-2 9c0 .552-.448 1-1 1-5.523 0-10-4.477-10-10 0-.552.448-1 1-1m10 0c.552 0 1 .448 1 1 0 5.523 4.477 10 10 10 0 .552-.448 1-1 1m-2-9h1m1-9H8m-5 5h1m5-5H5m5 5v-1m-5 5v-1m9-9v1m-9 9v1"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <section className="mt-20 px-4 md:px-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          variants={textVariants}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">AI-Driven Practice</h3>
            <p className="text-muted-foreground">
              Get access to AI-powered mock interviews that simulate real-world experiences. Practice anytime, get instant feedback, and improve your responses.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Personalized Feedback</h3>
            <p className="text-muted-foreground">
              Receive customized insights on your strengths and areas of improvement, helping you become interview-ready with targeted advice.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Real-time Performance Analysis</h3>
            <p className="text-muted-foreground">
              Understand your interview habits through performance analytics and track your growth over time to stay ahead of the competition.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">24/7 Access</h3>
            <p className="text-muted-foreground">
              Whether it's early morning or late night, our platform is available round-the-clock to help you prepare whenever it suits you best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="mt-24 px-4 md:px-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          variants={textVariants}
        >
          Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="p-6 bg-gradient-to-r from-green-200 to-green-100 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-lg italic text-gray-700">
              "Thanks to Interview Copilot, I aced my dream job interview at Google! The AI mock sessions made me so confident and ready."
            </p>
            <div className="mt-4 font-semibold text-right text-green-700">— Ananya Sharma</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-lg italic text-gray-700">
              "Practicing with this platform helped me fix my common mistakes and boosted my communication skills. I got 3 job offers!"
            </p>
            <div className="mt-4 font-semibold text-right text-blue-700">— Rahul Verma</div>
          </motion.div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <div className="mt-20 flex flex-col items-center justify-center">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Ready to Take the First Step Towards Your Dream Job?
        </h3>
        <button
          onClick={handleNavigateR}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition"
        >
          Start Your Journey Today
        </button>
      </div>
    </motion.div>
  );
};

export default Home;