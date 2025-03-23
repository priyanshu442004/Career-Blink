import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-8">

        {/* Logo and Address Section */}
        <div>
          <Link to="/" className="text-5xl font-extrabold text-black">
            Career<span className="text-blue-600">Blink</span>
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-gray-700">
            All-in-one Placement Hub for Students and Professionals. <br />
            We provide the best resources to help you succeed in placements.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-xl">Don't Run</span>
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-5 py-2 rounded-full shadow-xl">You are on the Right Path</span>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-black">Useful Links</h2>
          <Link to="/ATSChecker" className="block hover:text-blue-600 mb-2">Scan Resume</Link>
          <Link to="/Talent" className="block hover:text-blue-600 mb-2">AI Mock Interview</Link>
          <Link to="/Talent" className="block hover:text-blue-600 mb-2">Interview Prepration</Link>
          <Link to="/AIRecruiter" className="block hover:text-blue-600 mb-2">English Communication</Link>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-black">Resources</h2>
          <Link to="/ApplyNow" className="block hover:text-blue-600 mb-2">Resume Formatting Tips</Link>
          <Link to="/InterviewPrep" className="block hover:text-blue-600 mb-2">Notes</Link>
          <Link to="/InterviewPrep" className="block hover:text-blue-600 mb-2">Interview Tips</Link>
          <Link to="/InterviewPrep" className="block hover:text-blue-600 mb-4">DSA</Link>
          <h3 className="text-lg font-medium mb-2 text-black">Skills To Upgrade</h3>
          <Link to="/AIAutomation" className="block hover:text-blue-600 mb-2">English Communication</Link>
          <Link to="/SourcingVetting" className="block hover:text-blue-600">Body Language</Link>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-black">Company</h2>
          <Link to="/AboutUs" className="block hover:text-blue-600 mb-2">About Us</Link>
          <Link to="/Blog" className="block hover:text-blue-600 mb-2">Why Choose Us</Link>
          <Link to="/CaseStudies" className="block hover:text-blue-600 mb-4">Case Studies</Link>
        </div>
      </div>

       
      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-12 border-t border-gray-300 pt-6">
        &copy; 2025 CareerBlink. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
