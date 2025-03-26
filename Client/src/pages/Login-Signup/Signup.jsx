import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", formData);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account 🚀
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-3 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-3 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full pl-3 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-3 outline-none bg-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <span
            onClick={() => navigate("/login")}
            className="text-purple-500 hover:underline cursor-pointer">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
