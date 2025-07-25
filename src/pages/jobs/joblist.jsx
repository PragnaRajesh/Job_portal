import React, { useState, useRef, useEffect } from "react";
import {
  Bell,
  ChevronLeft,
  MapPin,
  Search,
  Sliders,
  Home as HomeIcon,
  Briefcase,
  FileText,
  Plus,
  User,
  Bookmark,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import verifiedIcon from "../../assets/verified.jpeg";
import videoIcon from "../../assets/job prep.jpeg";
import InterviewPrep from "../../components/InterviewPrep";

const JobList = () => {
  const navigate = useNavigate();
  const [showInterviewPrep, setShowInterviewPrep] = useState(false);
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

  const jobData = [
    {
      title: "UI/UX Designer",
      salary: "₹15,000",
      company: "Google Inc.",
      location: "HSR Layout, Bengaluru",
      tags: ["New Job", "3 Vacancy", "⚡ High Demand", "Face 2 Face Interview"],
      benefit: "PF provided",
      time: "25 minutes ago",
    },
    {
      title: "Frontend Developer",
      salary: "₹18,000",
      company: "Meta Inc.",
      location: "Koramangala, Bengaluru",
      tags: ["New Job", "2 Vacancy", "⚡ High Demand", "Virtual Interview"],
      benefit: "Insurance provided",
      time: "1 day ago",
    },
  ];

  const metroFilters = ["Within 10Km", "10–15 Km away", "10–15 Km away"];

  return (
    <div className="min-h-screen bg-gray-100 pb-24 pt-safe pb-safe">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2b2b76] to-[#412c84] text-white px-4 py-5 rounded-b-3xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
            <ChevronLeft />
            <h1 className="text-base font-semibold">50 Jobs near you....</h1>
          </div>
          <Bell />
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl">
            <Search className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search jobs here..."
              className="flex-1 text-sm text-black focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl">
            <MapPin className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="HSR Layout, Karnataka"
              className="flex-1 text-sm text-black focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 px-4 py-4">
        <button className="bg-white border px-3 py-1 text-sm rounded-full flex items-center gap-1">
          <Sliders className="w-4 h-4" />
        </button>
        <button className="bg-white border px-4 py-1 text-sm rounded-full">Senior designer</button>
        <button className="bg-white border px-4 py-1 text-sm rounded-full">Designer</button>
        <button className="bg-white border px-4 py-1 text-sm rounded-full">Full-time</button>
      </div>

      {/* Job Cards */}
      <div className="px-4 space-y-6">
        {jobData.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow border border-blue-100 transition relative"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="logo"
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h2
                        className="text-[15px] font-semibold cursor-pointer"
                        onClick={() => navigate("/jobs/jobdetails")}
                      >
                        {job.title}
                      </h2>
                      <img src={verifiedIcon} alt="verified" className="w-4 h-4" />
                    </div>
                    <p className="text-[14px] font-bold text-green-600">{job.salary}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-[10px] font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                    URGENT HIRING
                  </div>
                  <Bookmark className="text-blue-600 w-4 h-4" />
                </div>
              </div>

              <p className="text-sm mt-2 text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </p>

              <div className="flex justify-between items-start mt-3 flex-wrap gap-y-2">
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIndex) => {
                    const isInterview = tag.includes("Interview");
                    const isHighDemand = tag.includes("High Demand");
                    const isNewJob = tag.includes("New Job");
                    const isVacancy = tag.includes("Vacancy");
                    let bg = "bg-gray-100 text-gray-700";
                    let icon = null;
                    if (isInterview) {
                      bg = "bg-orange-200 text-black font-semibold";
                    } else if (isHighDemand) {
                      bg = "bg-yellow-100 text-blue-800 font-medium";
                      icon = <span className="text-yellow-500">⚡</span>;
                    } else if (isNewJob || isVacancy) {
                      bg = "bg-gray-100 text-blue-700 font-medium";
                    }
                    return (
                      <span
                        key={tagIndex}
                        className={`text-xs px-3 py-1 rounded-xl flex items-center gap-1 ${bg}`}
                      >
                        {icon}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div
                  className="flex flex-col items-center text-[10px] text-blue-600 ml-auto cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowInterviewPrep(true);
                  }}
                >
                  <img src={videoIcon} alt="prep" className="w-6 h-6" />
                  <span>Job Prep.</span>
                </div>
              </div>



              <div className="flex justify-between items-center mt-4 pt-2 border-t text-xs text-gray-600">
                <span className="text-green-600">{job.benefit}</span>
                <span>{job.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Metro Filter */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-gray-800 mb-2 text-[16px]">
          Jobs Near Metro Stations
        </h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {metroFilters.map((item, i) => (
            <div
              key={i}
              className="bg-white px-4 py-2 rounded-xl text-sm border shadow-sm min-w-fit flex flex-col items-center"
            >
              <span className="font-medium text-black">{item}</span>
              <span className="text-blue-600 text-xs">View 30 Jobs &gt;</span>
            </div>
          ))}
        </div>
      </div>
       {/* Job Cards */}
      <div className="px-4 space-y-6">
        {jobData.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow border border-blue-100 transition relative"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="logo"
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h2
                        className="text-[15px] font-semibold cursor-pointer"
                        onClick={() => navigate("/jobs/jobdetails")}
                      >
                        {job.title}
                      </h2>
                      <img src={verifiedIcon} alt="verified" className="w-4 h-4" />
                    </div>
                    <p className="text-[14px] font-bold text-green-600">{job.salary}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-[10px] font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                    URGENT HIRING
                  </div>
                  <Bookmark className="text-blue-600 w-4 h-4" />
                </div>
              </div>

              <p className="text-sm mt-2 text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </p>

              <div className="flex justify-between items-start mt-3 flex-wrap gap-y-2">
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIndex) => {
                    const isInterview = tag.includes("Interview");
                    const isHighDemand = tag.includes("High Demand");
                    const isNewJob = tag.includes("New Job");
                    const isVacancy = tag.includes("Vacancy");
                    let bg = "bg-gray-100 text-gray-700";
                    let icon = null;
                    if (isInterview) {
                      bg = "bg-orange-200 text-black font-semibold";
                    } else if (isHighDemand) {
                      bg = "bg-yellow-100 text-blue-800 font-medium";
                      icon = <span className="text-yellow-500">⚡</span>;
                    } else if (isNewJob || isVacancy) {
                      bg = "bg-gray-100 text-blue-700 font-medium";
                    }
                    return (
                      <span
                        key={tagIndex}
                        className={`text-xs px-3 py-1 rounded-xl flex items-center gap-1 ${bg}`}
                      >
                        {icon}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div
                  className="flex flex-col items-center text-[10px] text-blue-600 ml-auto cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowInterviewPrep(true);
                  }}
                >
                  <img src={videoIcon} alt="prep" className="w-6 h-6" />
                  <span>Job Prep.</span>
                </div>
              </div>



              <div className="flex justify-between items-center mt-4 pt-2 border-t text-xs text-gray-600">
                <span className="text-green-600">{job.benefit}</span>
                <span>{job.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* ✅ Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
        <button onClick={() => navigate("/home")}>
          <HomeIcon className="w-6 h-6 text-blue-600" />
        </button>
        <button onClick={() => navigate("/jobs/joblist")}>
          <Briefcase className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>

        {/* Plus Icon with Popup */}
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-6 h-6 text-white" />
          </button>

          {showPopup && (
            <div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white w-64 rounded-2xl border border-gray-200 shadow-xl p-5 z-50"
              ref={popupRef}
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
          )}
        </div>

        <button onClick={() => navigate("/applications/application")}>
          <FileText className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>
        <button onClick={() => navigate("/myprofilesection/myprofile")}>
          <User className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>
      </div>

      {/* Interview Prep Modal */}
      {showInterviewPrep && (
        <InterviewPrep onClose={() => setShowInterviewPrep(false)} />
      )}
    </div>
  );
};

export default JobList;
