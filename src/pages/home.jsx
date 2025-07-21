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

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "User",
    role: "Job Seeker",
    location: "Koramangala",
  });
  const popupRef = useRef(); 
  const [showPopup, setShowPopup] = useState(false);
  const jobCategories = ["Chef", "Marketing", "Technology", "Finance", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("Chef");

  const specializations = [
    { name: "Finance", icon: financeIcon },
    { name: "Technology", icon: techIcon },
    { name: "Marketing", icon: marketingIcon },
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
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.role}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-full">
            <Bell size={20} />
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm mb-2">
          <Search size={18} className="text-gray-500" />
          <input
            placeholder="Search Job"
            className="flex-1 outline-none text-sm"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-4 px-1">

        {/* Find Your Job */}
        <h3 className="font-bold text-lg mb-3">Find Your Job</h3>
          <span>Most Relevant</span>
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {user.location}
          </span>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-xl p-4 mb-6 shadow-md">
          <p className="text-sm font-semibold mb-2">
            Reply quickly to get the job!
          </p>
          <button className="text-sm underline">View Response</button>
        </div>

        {/* Find Your Job */}
        <h3 className="font-bold text-lg mb-3">Find Your Job</h3>
        <div className="flex overflow-x-auto gap-3 no-scrollbar mb-6 px-1">
          {jobCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap shadow-sm transition ${
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
        <div className="flex overflow-x-auto gap-4 no-scrollbar mb-8 px-1">
          {recommendedJobs.map((job, idx) => (
            <div
              key={idx}
              className="min-w-[270px] bg-white rounded-2xl shadow-md p-4 relative"
            >
              <Bookmark
                size={18}
                className="absolute top-4 right-4 text-blue-700"
              />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 mb-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <p className="text-xs font-semibold text-gray-600 mb-1">
                {job.company}
              </p>
              <h4 className="text-base font-bold text-gray-900 mb-1">
                {job.role}
              </h4>
              <p className="text-xs text-gray-500 mb-2">{job.location}</p>
              <div className="flex gap-2 mb-3 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs border border-gray-300 px-2 py-1 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-[11px] text-gray-400">
                <span>3 days ago</span>
                <button className="text-blue-600 font-medium text-xs">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specialization */}
        <h3 className="font-bold text-lg mb-3">Specialization</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-6 px-1">
          {specializations.map((spec, idx) => (
            <div
              key={idx}
              className="min-w-[120px] flex flex-col items-center bg-white rounded-2xl shadow-md py-5"
              style={{
                backgroundColor:
                  spec.name === "Finance"
                    ? "#FFF8F1"
                    : spec.name === "Technology"
                    ? "#FAF5FF"
                    : "#FFF2F2",
              }}
            >
              <img src={spec.icon} alt={spec.name} className="w-6 h-6 mb-2" />
              <p className="text-sm font-medium text-gray-700">{spec.name}</p>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <h3 className="font-semibold text-base mb-2 px-1">Recommendation</h3>
        <div className="space-y-4 px-1">
          {recommendedJobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 relative"
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900">
                  {job.role}
                </h4>
                <p className="text-xs text-gray-500">
                  {job.company} • {job.location}
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-[10px] text-gray-400">3 days ago</p>
                  <button className="text-blue-600 text-xs font-semibold">
                    View Details
                  </button>
                </div>
              </div>
              <Bookmark
                size={16}
                className="text-gray-400 absolute top-4 right-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-4 border-t border-gray-100 bg-white">
        <HomeIcon
          className="w-6 h-6 text-blue-400"
          onClick={() => navigate('/home')}
        />

        <Briefcase
          className="w-6 h-6 text-gray-400"
          onClick={() => navigate('/jobs/joblist')}
        />

        {/* Plus Icon with Popup */}
        <div className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="p-2 relative z-20"
          >
            <Plus className="w-7 h-7 text-white" />
          </button>
          {showPopup && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-40" />
              <div className="fixed inset-0 flex justify-center items-center z-50">
                <div
                  ref={popupRef}
                  className="bg-white w-full max-w-xs mx-4 rounded-2xl border border-gray-200 shadow-xl p-5 animate-slideUp"
                >
                  <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
                    Quick Actions
                  </h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        navigate("/messages");
                      }}
                      className="w-full bg-blue-100 text-blue-800 py-2 rounded-lg font-medium hover:bg-blue-200"
                    >
                      📩 Messages
                    </button>
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        navigate("/resume/resumebuilder");
                      }}
                      className="w-full bg-green-100 text-green-800 py-2 rounded-lg font-medium hover:bg-green-200"
                    >
                      📝 Resume Builder
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}


          {showPopup && (
            <div
              className="hidden"
              style={{ transformOrigin: 'bottom right' }}
            >
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate('/messages');
                }}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 rounded-t-xl"
              >
                📩 Messages
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate('/resume-builder');
                }}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 rounded-b-xl"
              >
                📝 Resume Builder
              </button>
            </div>
          )}
        </div>

        <FileText
          className="w-6 h-6 text-gray-400"
          onClick={() => navigate('/applications/application')}
        />

        <User
          className="w-6 h-6 text-gray-400"
          onClick={() => navigate('/myprofilesection/myprofile')}
        />
      </div>

    </div>
  );
};

export default Home;
