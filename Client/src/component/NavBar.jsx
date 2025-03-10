import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full justify-center items-center p-auto">
    <nav className="fixed w-[95%] left-[2.5%] top-[25px] z-50 flex items-center">
      <div className="container mx-auto flex justify-between items-center w-full h-full">
        
        <div className="flex items-center space-x-4 md:bg-gray-100 md:shadow-md h-16 px-6 rounded-xl m-2 md:w-[70%]">
        <a href="/" className="text-3xl font-bold text-gray-900 flex items-center leading-none">
          LOGO
        </a>

        
        <ul className="hidden md:flex space-x-6 text-lg text-gray-800 font-medium items-center ml-[50px] pl-4">
  {[
    { name: "Scan Resume", path: "/ScanResume" },
    { name: "Mock Interview", path: "/MockInterview" },
    { name: "Prep Material", path: "/PrepMaterial" },
    { name: "English Communication", path: "/EnglishCommunication" }
  ].map(({ name, path }) => (
    <li key={name} className="flex items-center">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `cursor-pointer hover:text-black ${
            isActive ? "text-blue-600 font-semibold" : ""
          }`
        }
      >
        {name}
      </NavLink>
      <FaChevronDown className="ml-1 text-sm" />
    </li>
  ))}
</ul>
        </div>
        

        <div className="hidden flex md:flex space-x-4 items-center bg-gray-100 shadow-md h-16 p-6 rounded-xl w-[20%] justify-between">
          <a href="/login" className="border border-gray-400 px-5 py-2 text-lg rounded-lg hover:border-blue-600 transition leading-none hover:border-2 ">
            Login
          </a>
          <a href="/Signup" className="bg-blue-600 text-white px-5 py-2 text-lg rounded-lg hover:bg-blue-700 transition leading-none">
            Signup
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-gray-900 text-3xl leading-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile ke liye navbar */}
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden absolute top-20 left-0 w-full bg-gray-100 shadow-lg rounded-xl"
      >
          <ul className="flex flex-col text-lg text-gray-800 font-medium space-y-5 py-6">
  {[
    { name: "Scan Resume", path: "/ScanResume" },
    { name: "Mock Interview", path: "/MockInterview" },
    { name: "Prep Material", path: "/PrepMaterial" },
    { name: "English Communication", path: "/EnglishCommunication" }
  ].map(({ name, path }) => (
    <NavLink
      key={name}
      to={path}
      className={({ isActive }) =>
        `px-6 hover:text-black leading-none ${
          isActive ? "text-blue-600 font-semibold" : ""
        }`
      }
    >
      {name}
    </NavLink>
  ))}

  <NavLink
    to="/login"
    className="px-6 border-t pt-3 leading-none ml-2"
  >
    Login
  </NavLink>

  <NavLink
    to="/Signup"
    className="px-6 bg-blue-600 text-white py-3 rounded-lg w-[20%] text-center leading-none"
  >
    Signup
  </NavLink>
</ul>
</motion.div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
