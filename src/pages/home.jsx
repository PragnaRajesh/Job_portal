import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Search,
  MapPin,
  Bookmark,
  HomeIcon,
  Plus,
  User,
  Briefcase,
  FileText
} from "lucide-react";

import telegramLogo from "../assets/telegram.png";
import netflixLogo from "../assets/netflix.jpeg";
import invisionLogo from "../assets/invision.png";
import financeIcon from "../assets/finance.png";
import techIcon from "../assets/technology.png";
import marketingIcon from "../assets/marketing.png";
import resumeImg from "../assets/resume-builder.png";
import chatImg from "../assets/chat.png";
import robotImg from "../assets/mock-interview.png";

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "User",
    role: "Job Seeker",
    location: "Koramangala",
  });
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  
  useEffect(() => {
      const handleClickOutside = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
          setShowPopup(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  useEffect(() => {
    // Handle hardware back button for mobile browsers
    const handlePopState = (e) => {
      e.preventDefault();
      if (showPopup) {
        setShowPopup(false); // Close popup if open
      } else {
        // Prevent app closure by staying on home
        window.history.pushState(null, '', window.location.href);
      }
    };

    // Add history entry to prevent app closure
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [showPopup]);

  const jobCategories = ["Chef", "Marketing", "Technology", "Finance", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("Chef");

  const specializations = [
    { name: "Finance", icon: financeIcon, bg: "#FFF8F1" },
    { name: "Technology", icon: techIcon, bg: "#FAF5FF" },
    { name: "Marketing", icon: marketingIcon, bg: "#FFF2F2" },
  ];

  const recommendedJobs = [
    {
      company: "Invision",
      role: "UI Designer",
      location: "HSR Layout - Onsite",
      tags: ["Remote", "Junior"],
      logo: invisionLogo,
    },
    {
      company: "Telegram",
      role: "Digital Marketing",
      location: "HSR Layout - Onsite",
      tags: ["Remote", "Junior"],
      logo: telegramLogo,
    },
    {
      company: "Netflix",
      role: "Accounting",
      location: "Koramangala - Onsite",
      tags: ["Remote", "Junior"],
      logo: netflixLogo,
    },
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen pb-24 pt-safe pb-safe">
      <div className="p-4 sm:p-6 md:p-8 lg:max-w-6xl lg:mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">{user.name}</h2>
            <p className="text-sm sm:text-base text-gray-600">{user.role}</p>
          </div>
          <div className="bg-gray-200 p-2 sm:p-3 rounded-full">
            <Bell size={20} className="sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-sm mb-2">
          <Search size={18} className="text-gray-500 sm:w-5 sm:h-5" />
          <input
            placeholder="Search Job"
            className="flex-1 outline-none text-sm sm:text-base"
          />
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 px-1">
          <span>Most Relevant</span>
          <span className="flex items-center gap-1">
            <MapPin size={14} className="sm:w-4 sm:h-4" /> {user.location}
          </span>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-md">
          <p className="text-sm sm:text-base font-semibold mb-2">
            Reply quickly to get the job!
          </p>
          <button className="text-sm sm:text-base underline">View Response</button>
        </div>

        {/* Find Your Job */}
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Find Your Job</h3>
        <div className="flex overflow-x-auto gap-3 sm:gap-4 no-scrollbar mb-6 sm:mb-8 px-1 md:flex-wrap md:overflow-visible">
          {jobCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border text-sm sm:text-base whitespace-nowrap shadow-sm transition ${
                selectedCategory === cat
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Job Cards */}
        <div className="flex overflow-x-auto space-x-4 sm:space-x-6 no-scrollbar mb-8 sm:mb-12 px-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-x-0 md:overflow-visible">
          {recommendedJobs.map((job, idx) => (
            <div
              key={idx}
              className="min-w-[17rem] sm:min-w-[20rem] md:min-w-0 rounded-2xl p-4 sm:p-6 relative border border-gray-200 shadow-xl"
            >
              <Bookmark
                size={18}
                className="absolute top-4 right-4 text-blue-700 sm:w-5 sm:h-5"
              />
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gray-100 mb-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                {job.role}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">{job.location}</p>
              <div className="flex gap-2 mb-3 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm border border-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400">
                <span>3 days ago</span>
                <button className="text-blue-600 font-medium text-xs sm:text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specialization */}
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">Specialization</h3>
        <div className="flex justify-between items-center gap-4 sm:gap-6 md:justify-center md:gap-8">
          {specializations.map((spec, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col items-center py-6 sm:py-8 md:py-10 rounded-3xl shadow-md md:max-w-xs"
              style={{ backgroundColor: spec.bg }}
            >
              <p className="text-md sm:text-lg md:text-xl font-normal text-gray-800 mb-3 sm:mb-4">{spec.name}</p>
              <img src={spec.icon} alt={spec.name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <h3 className="font-semibold text-base sm:text-lg md:text-xl my-4 sm:my-6 px-1">Recommendation</h3>
        <div className="space-y-4 sm:space-y-6 px-1 md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-6 md:space-y-0">
          {recommendedJobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 sm:gap-6 relative"
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {job.role}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {job.company} • {job.location}
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm px-2 py-1 sm:px-3 bg-blue-100 text-blue-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-xs sm:text-sm text-gray-400">3 days ago</p>
                  <button className="text-blue-600 text-xs sm:text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
              <Bookmark
                size={16}
                className="text-gray-400 absolute top-4 right-4 sm:w-5 sm:h-5"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 sm:py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
        <button onClick={() => navigate("/home")}>
          <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
        </button>
        <button onClick={() => navigate("/jobs/joblist")}>
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
        </button>

        {/* Plus Icon with Popup */}
                          <div className="relative">
                            <button
                              onClick={() => setShowPopup(!showPopup)}
                              className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                            >
                              <Plus className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </button>
                  
                            {showPopup && (
                    <div
                      ref={popupRef}
                      className="fixed bottom-16 sm:bottom-20 left-0 w-full h-[50vh] sm:h-[45vh] md:h-[40vh] bg-gradient-to-t from-blue-100 via-white to-white z-50 rounded-t-3xl shadow-2xl flex flex-col items-center pt-6 pb-4 animate-slideUp"
                    >
                      <div className="w-16 h-1 bg-blue-200 rounded-full mb-6 mt-2" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">Quick Actions</h3>
                  
                      <div className="flex flex-col gap-4 w-4/5 sm:w-3/5 md:w-2/5">
                  
                    {/* Resume Button */}
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        navigate("/resume/resumebuilder");
                      }}
                      className="w-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all flex items-center justify-center gap-3 relative overflow-hidden"
                    >
                     <span className="absolute top-1 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                       ✨ AI
                     </span>
                     <img src={resumeImg} alt="Resume" className="w-6 h-6 sm:w-8 sm:h-8" />
                  Resume Builder
                    </button>
                    
                  
                    {/* Chats Button */}
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        navigate("/messages");
                      }}
                      className="w-full bg-[#E8F9ED] text-[#2E7D32] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#BEE7C9] hover:bg-[#d3f3db] transition-all flex items-center justify-center gap-3"
                    ><img src={chatImg} alt="Chat" className="w-6 h-6 sm:w-8 sm:h-8" />
                  Chats
                    </button>
                  
                    {/* AI Job Prep Button */}
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        navigate("/InterviewPrep");
                      }}
                      className="w-full bg-[#F3E9FF] text-[#6A1B9A] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#D8C5ED] hover:bg-[#ebdbff] transition-all flex items-center justify-center gap-3"
                    >
                      <img src={robotImg} alt="AI Prep" className="w-6 h-6 sm:w-8 sm:h-8" />
                  AI Job Prep
                    </button>
                  
                  </div>
                  
                    </div>
                  )}
                  
                          </div>

        <button onClick={() => navigate("/applications/application")}>
          <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
        </button>
        <button onClick={() => navigate("/myprofilesection/myprofile")}>
          <User className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
        </button>
      </div>

    </div>
  );
};

export default Home;
