import React, { useEffect, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [active, setActive] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Fetched token:", token); // Debug
    setUser(token); // direct value, not just true/false
  }, []);
  

  const menuItems = [
    { name: "Scan Resume", subItems: ["ATS Checker", "Formatting Tips"] },
    { name: "Mock Interview", subItems: ["AI Mock Interview", "Interview Practice", "Interview Tips"] },
    { name: "Prep Material", subItems: ["DSA", "Notes"] },
    { name: "English Communication", path: "/EnglishCommunication" },
  ];

  return (
    <div className="w-full justify-center items-center p-auto">
      <nav className="bg-gray-100 md:bg-transparent fixed w-full md:top-[25px] z-50 flex items-center">
        <div className="container mx-auto flex justify-between items-center w-full h-full">
          <div
            onMouseLeave={() => setDropdownOpen(null)}
            className="flex items-center md:bg-gray-100 md:shadow-md h-16 px-6 rounded-xl m-2 md:w-[75%]"
          >
            <a href="/" className="text-2xl font-bold text-gray-900 flex items-center leading-none">
              𝕮𝖆𝖗𝖊𝖊𝖗𝕭𝖑𝖎𝖓🅺
            </a>
            <ul className="hidden md:flex space-x-6 text-lg text-gray-800 font-medium items-center ml-[50px] pl-4">
              {menuItems.map(({ name, path, subItems }, index) => (
                <li key={name} className="relative group">
                  <div
                    className="flex items-center cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      if (path) {
                        navigate(path);
                        setDropdownOpen(null);
                      }
                    }}
                    onMouseEnter={() => subItems && setDropdownOpen(index)}
                  >
                    <p>{name}</p>
                    {subItems && <FaChevronDown className="ml-1 text-sm transition-transform duration-300 group-hover:rotate-180" />}
                  </div>
                  {dropdownOpen === index && subItems && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute left-0 mt-4 bg-white shadow-md rounded-md w-48 z-50"
                    >
                      {subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => navigate(`/${subItem.replace(/\s+/g, "")}`)}
                        >
                          {subItem}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {!user?(<div className="hidden md:flex space-x-4 items-center bg-gray-100 shadow-md h-16 p-6 rounded-xl w-[20%] justify-between">
         <NavLink
           to="/login"
            className="border border-gray-00 text-gray-800 font-semibold px-5 py-2 text-lg rounded-lg hover:border-blue-600 transition leading-none hover:border-2"
         >
          Login
         </NavLink>
         <NavLink
            to="/Signup"
             className="bg-blue-600 text-white font-semibold px-5 py-2 text-lg rounded-lg hover:bg-blue-700 transition leading-none"
          >
           Signup
         </NavLink>
         
          
         </div>):( <div className="hidden md:flex items-center bg-gray-100 shadow-md h-16 px-3 rounded-xl w-[10%] justify-center"
         onClick={() => navigate("/Profile")}
         >
    <div
      className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg cursor-pointer hover:bg-blue-700"
      title="Go to Profile"
      
    >
      {user.charAt(0).toUpperCase()}
    </div>
    <div className="ml-4 text-gray-800 font-semibold text-lg cursor-pointer hover:text-blue-600" onClick={() => navigate("/Profile")}>
      Profile
    </div>
  </div>)
}
          <button
            className="md:hidden text-gray-900 text-3xl leading-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-gray-100 shadow-lg rounded-xl"
          >
            <ul className="flex flex-col text-gray-800 space-y-5 py-6">
              {menuItems.map(({ name, path, subItems }) => (
                <li key={name}>
                  <div
                    to={path || "#"}
                    onClick={() => setIsOpen(false)}
                    className={
                      `px-6 text-black leading-none font-bold text-xl`
                    }
                  >
                    {name}
                  </div>
                  {subItems && (
                    <ul className="pl-8 space-y-2 font-semibold">
                      {subItems.map((subItem) => (
                        <li
                        key={subItem} onClick={() =>{
                          setActive(subItem)
                          setIsOpen(false)}}>
                          <NavLink
                            to={`/${subItem.replace(/\s+/g, "")}`}
                            className={`block hover:text-blue-600 ${active === subItem ? "text-blue-600" : ""}`} 
                          >
                            {subItem}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
             {!user?( <div>

              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="font-semibold border-t pt-3 leading-none ml-[10px]"
                >
                Login
              </NavLink>
              <NavLink
                to="/Signup"
                onClick={() => setIsOpen(false)}
                className="font-semibold bg-blue-600 text-white py-3 rounded-lg w-[20%] text-center leading-none"
                >
                Signup
              </NavLink>
                </div>):(
                <div className="flex items-center justify-center mt-4">
                  <div
                    className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg cursor-pointer hover:bg-blue-700"
                    title="Go to Profile"
                    onClick={() => navigate("/Profile")}
                  >
                    {user.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-4 text-gray-800 font-semibold text-lg cursor-pointer hover:text-blue-600" onClick={() => navigate("/Profile")}>
                    Profile
                  </div>

                </div>
                )}
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
