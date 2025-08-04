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
  FileText,
  ChevronDown,
  X,
  TrendingUp,
  Code,
  Megaphone
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
    profilePicture: null
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
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
    // Handle back button when popup is open
    const handlePopState = (e) => {
      if (showPopup) {
        e.preventDefault();
        setShowPopup(false);
        window.history.pushState(null, '', window.location.href);
      }
    };

    if (showPopup) {
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      if (showPopup) {
        window.removeEventListener('popstate', handlePopState);
      }
    };
  }, [showPopup]);

  const jobCategories = ["Chef", "Mechanic", "Marketing", "Technology"];
  const [selectedCategory, setSelectedCategory] = useState("Chef");

  const filterOptions = ["Most Relevant", "Newest", "Salary High to Low", "Salary Low to High"];
  const [selectedFilter, setSelectedFilter] = useState("Most Relevant");

  const specializations = [
    { name: "Finance", icon: TrendingUp, bg: "#FFF8F1", color: "#F59E0B" },
    { name: "Technology", icon: Code, bg: "#FAF5FF", color: "#8B5CF6" },
    { name: "Marketing", icon: Megaphone, bg: "#FFF2F2", color: "#EF4444" },
  ];

  const jobCardsByCategory = {
    Chef: [
      {
        company: "Hotel Marriott",
        role: "Head Chef",
        location: "Koramangala - Onsite",
        tags: ["Full-time", "Senior"],
        logo: invisionLogo,
      },
      {
        company: "Cafe Coffee Day",
        role: "Kitchen Chef",
        location: "HSR Layout - Onsite",
        tags: ["Part-time", "Junior"],
        logo: telegramLogo,
      },
    ],
    Mechanic: [
      {
        company: "Mahindra Service",
        role: "Auto Mechanic",
        location: "Whitefield - Onsite",
        tags: ["Full-time", "Experienced"],
        logo: netflixLogo,
      },
      {
        company: "Honda Service",
        role: "Bike Mechanic",
        location: "Koramangala - Onsite",
        tags: ["Full-time", "Junior"],
        logo: invisionLogo,
      },
    ],
    Marketing: [
      {
        company: "Invision",
        role: "Digital Marketing",
        location: "HSR Layout - Remote",
        tags: ["Remote", "Junior"],
        logo: invisionLogo,
      },
      {
        company: "Telegram",
        role: "Marketing Manager",
        location: "Koramangala - Onsite",
        tags: ["Full-time", "Senior"],
        logo: telegramLogo,
      },
    ],
    Technology: [
      {
        company: "Netflix",
        role: "Software Engineer",
        location: "HSR Layout - Remote",
        tags: ["Remote", "Junior"],
        logo: netflixLogo,
      },
      {
        company: "Telegram",
        role: "Frontend Developer",
        location: "Koramangala - Hybrid",
        tags: ["Hybrid", "Mid-level"],
        logo: telegramLogo,
      },
    ],
  };

  const getCurrentJobCards = () => {
    return jobCardsByCategory[selectedCategory] || [];
  };

  const recommendedJobs = [
    {
      company: "Netflix",
      role: "Accounting",
      location: "Koramangala - Onsite",
      tags: ["Remote", "Junior"],
      logo: netflixLogo,
    },
    {
      company: "Telegram",
      role: "UI designer",
      location: "HSR Layout - Onsite",
      tags: ["Remote", "Junior"],
      logo: telegramLogo,
    },
    {
      company: "Telegram",
      role: "Human Resources",
      location: "HSR Layout - Onsite",
      tags: ["Remote", "Junior"],
      logo: telegramLogo,
    },
  ];

  useEffect(() => {
    // Get user data from localStorage
    const userName = localStorage.getItem("userName") || localStorage.getItem("fullName") || "Sumona";
    const jobRoles = JSON.parse(localStorage.getItem("jobRoles") || "[]");
    const userRole = jobRoles.length > 0 ? jobRoles[0] : "UI/UX Designer";
    const userLocation = localStorage.getItem("location") || "Koramangala";
    
    setUser({
      name: userName,
      role: userRole,
      location: userLocation,
      profilePicture: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    });
  }, []);

  return (
    <div className="pb-[80px] pt-safe pb-safe">
      <div className="p-4 sm:p-6 md:p-8 lg:max-w-6xl lg:mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={user.profilePicture} 
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
              <p className="text-sm text-gray-600">{user.role}</p>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-full">
            <Bell size={20} className="text-gray-600" />
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl mb-3">
          <Search size={20} className="text-gray-500" />
          <input
            placeholder="Search Job"
            className="flex-1 outline-none bg-transparent text-sm"
          />
        </div>

        {/* Filter Row */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-1 text-blue-600 text-sm font-medium"
            >
              <span>{selectedFilter}</span>
              <ChevronDown size={16} />
            </button>
            {showDropdown && (
              <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-lg p-2 min-w-[150px] z-10">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilter(option);
                      setShowDropdown(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <MapPin size={16} className="text-blue-600" />
            <span className="text-blue-600 font-medium">{user.location}</span>
          </div>
        </div>

        {/* Banner */}
        {showBanner && (
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-4 mb-6 relative">
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute top-3 right-3 bg-white/20 rounded-full p-1"
            >
              <X size={16} />
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <Bell size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">
                  Reply quickly to get the job!
                </p>
                <p className="text-sm opacity-90">1 HR call</p>
              </div>
            </div>
            <button className="mt-3 bg-black/20 px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
              <span>View Response</span>
              <span>→</span>
            </button>
          </div>
        )}

        {/* Find Your Job */}
        <h3 className="font-bold text-lg mb-4">Find Your Job</h3>
        <div className="flex overflow-x-auto gap-3 no-scrollbar mb-6">
          {jobCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Cards Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-4 mb-8 no-scrollbar">
          {getCurrentJobCards().map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-lg relative min-w-[280px] flex-shrink-0"
            >
              <Bookmark
                size={16}
                className="absolute top-4 right-4 text-blue-600"
              />
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 mb-1">{job.company}</p>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                {job.role}
              </h4>
              <p className="text-xs text-gray-500 mb-3">{job.location}</p>
              <div className="flex gap-1 mb-3 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs border border-gray-200 px-2 py-1 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">3 days ago</span>
                <button className="text-blue-600 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specialization */}
        <h3 className="font-bold text-lg mb-4">Specialization</h3>
        <div className="flex justify-between gap-4 mb-8">
          {specializations.map((spec, idx) => {
            const IconComponent = spec.icon;
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center py-6 rounded-2xl"
                style={{ backgroundColor: spec.bg }}
              >
                <p className="text-sm font-medium text-gray-800 mb-3">{spec.name}</p>
                <IconComponent size={24} color={spec.color} />
              </div>
            );
          })}
        </div>

        {/* Recommendation */}
        <h3 className="font-bold text-lg mb-4">Recommendation</h3>
        <div className="space-y-4">
          {recommendedJobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4 relative"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900">
                  {job.role}
                </h4>
                <p className="text-xs text-gray-500 mb-2">
                  {job.location}
                </p>
                <div className="flex gap-2 mb-2 flex-wrap">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400">3 days ago</p>
                  <button className="text-blue-600 text-xs font-medium">
                    View Details
                  </button>
                </div>
              </div>
              <Bookmark
                size={16}
                className="text-blue-600 absolute top-4 right-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation - keeping existing implementation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-1 sm:py-1 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
        <button onClick={() => navigate("/home")}>
          <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-blue-600" />
        </button>
        <button onClick={() => navigate("/jobs/joblist")}>
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
        </button>

        {/* Plus Icon with Popup */}
                          <div className="relative">
                            <button
                              onClick={() => setShowPopup(!showPopup)}
                              className="w-8 h-8 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 mt-2"
                            >
                              <Plus className="w-4 h-4 sm:w-7 sm:h-7  text-white" />
                            </button>
                  
                            {showPopup && (
                    <div
                      ref={popupRef}
                      className="fixed bottom-16 sm:bottom-20 left-0 w-full bg-gradient-to-t from-blue-100 via-white to-white z-50 rounded-t-3xl shadow-2xl flex flex-col items-center pt-6 pb-4 animate-slideUp"
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
          <FileText className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
        </button>
        <button onClick={() => navigate("/myprofilesection/myprofile")}>
          <User className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Home;
