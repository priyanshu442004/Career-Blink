import React from "react";
import { motion } from "framer-motion";
import { FaUserEdit, FaKey, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("token") || "No data found";

  const initial = email.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-10 flex flex-col md:flex-row gap-10"
      >
        {/* Sidebar Profile Circle */}
        <div className="flex flex-col items-center md:w-1/3 space-y-4">
          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {initial}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Name</h2>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Your Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DashboardCard title="Resume ATS Score" onClick={() => navigate("/ATSChecker")} />
            <DashboardCard title="Resume Formatter (AI)" onClick={() => navigate("/ResumeFormatter")} />
            <DashboardCard title="AI Mock Interview" onClick={() => navigate("/AIMockInterview")} />
            <DashboardCard title="DSA Practice" onClick={() => navigate("/DSA")} />
            <DashboardCard title="Interview Notes" onClick={() => navigate("/Notes")} />
            <DashboardCard title="HR English Practice" onClick={() => navigate("/EnglishCommunication")} />
          </div>

          <div className="flex gap-4 mt-6">
            <ActionButton icon={<FaUserEdit />} label="Change Username" onClick={() => navigate("/change-username")} />
            <ActionButton icon={<FaKey />} label="Forgot Password" onClick={() => navigate("/forgot-password")} />
            <ActionButton icon={<FaSignOutAlt />} label="Logout" onClick={() => {
              localStorage.clear();
              navigate("/login");
            }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const DashboardCard = ({ title, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="cursor-pointer p-5 bg-gradient-to-tr from-white to-blue-50 border border-gray-200 shadow-md rounded-xl hover:shadow-xl transition"
  >
    <h4 className="text-md font-semibold text-blue-800">{title}</h4>
  </motion.div>
);

const ActionButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow"
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default ProfilePage;
