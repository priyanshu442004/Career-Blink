import React, { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    try{
      const response = await axios.post("http://localhost:8080/user/api/auth/login",{
        email,
        password,
      });
      // If successful
    alert("Login successful:" + response.data);   
    //alert(`Login successful: ${response.data}`); 
    navigate("/"); // Navigate to homepage
    } catch(error){
      if (error.response) {
        // Backend responded with a status other than 2xx
        alert(error.response.data); // Shows "Email not registered" or "Incorrect password"
    } else {
      // Network error or something else
      alert("An error occurred. Please try again.");
    }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back! 👋
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-3 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-3 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-300 transform hover:scale-105"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <span 
            onClick={() => navigate("/Signup")}
            className="text-blue-500 hover:underline cursor-pointer">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
