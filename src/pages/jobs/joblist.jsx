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
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButtonHandler from "../../components/BackButtonHandler";
import verifiedIcon from "../../assets/verified.png";
import videoIcon from "../../assets/job prep.png";
import jobPrepVideo from "../../assets/job prep vedio.mp4";
import InterviewPrep from "../../components/InterviewPrep";
import resumeImg from "../../assets/resume-builder.png";
import chatImg from "../../assets/chat.png";
import robotImg from "../../assets/mock-interview.png";

const JobList = () => {
  const navigate = useNavigate();
  const [showInterviewPrep, setShowInterviewPrep] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
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
    <div className="bg-gray-100 pb-[80px] pt-safe pb-safe">
      <BackButtonHandler
        onBackPress={() => {
          if (showInterviewPrep) {
            setShowInterviewPrep(false);
          } else if (showPopup) {
            setShowPopup(false);
          } else if (activeVideoIndex !== null) {
            setActiveVideoIndex(null);
          } else {
            navigate('/home');
          }
        }}
        preventAppClosure={false}
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2b2b76] to-[#412c84] text-white px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 rounded-b-3xl">
        <div className="flex justify-between items-center lg:max-w-6xl lg:mx-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            <h1 className="text-base sm:text-lg md:text-xl font-semibold">50 Jobs near you....</h1>
          </div>
          <Bell className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 lg:max-w-6xl lg:mx-auto">
          <div className="flex items-center gap-2 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl">
            <Search className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search jobs here..."
              className="flex-1 text-sm sm:text-base text-black focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl">
            <MapPin className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="HSR Layout, Karnataka"
              className="flex-1 text-sm sm:text-base text-black focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="lg:max-w-6xl lg:mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <button className="bg-white border px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full flex items-center gap-1">
            <Sliders className="w-4 h-4" />
          </button>
          <button className="bg-white border px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full">Senior designer</button>
          <button className="bg-white border px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full">Designer</button>
          <button className="bg-white border px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full">Full-time</button>
        </div>

        {/* Job Cards */}
        <div className="px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8 md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-6 md:space-y-0">
          {jobData.map((job, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_8px_20px_rgba(59,130,246,0.2)] transition duration-300"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                      alt="logo"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h2
                          className="text-base sm:text-lg md:text-xl font-semibold cursor-pointer truncate"
                          onClick={() => navigate("/jobs/jobdetails")}
                        >
                          {job.title}
                        </h2>
                        <img src={verifiedIcon} alt="verified" className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-green-600">{job.salary}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-xs sm:text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-1 sm:px-3 sm:py-1 rounded-full truncate">
                      URGENT HIRING
                    </div>
                    <Bookmark className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <p className="text-sm sm:text-base mt-2 text-gray-700">{job.company}</p>
                <p className="text-sm sm:text-base text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  {job.location}
                </p>

                <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 items-center">
                  {job.tags.map((tag, tagIndex) => {
                    const isInterview = tag.includes("Interview");
                    const isHighDemand = tag.includes("High Demand");
                    const isNewJob = tag.includes("New Job");
                    const isVacancy = tag.includes("Vacancy");
                    let bg = "bg-gray-100 text-gray-700";
                    let icon = null;
                    if (isInterview) {
                      bg = "bg-orange-200 text-black font-semibold";
                      return (
                        <span
                          key={tagIndex}
                          className={`text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-xl flex items-center gap-1 ${bg}`}
                        >
                          {tag}
                        </span>
                      );
                    } else if (isHighDemand) {
                      bg = "bg-yellow-100 text-blue-800 font-medium";
                      icon = <span className="text-yellow-500">⚡</span>;
                    } else if (isNewJob || isVacancy) {
                      bg = "bg-gray-100 text-blue-700 font-medium";
                    }
                    return (
                      <span
                        key={tagIndex}
                        className={`text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1 rounded-xl flex items-center gap-1 ${bg}`}
                      >
                        {icon}
                        {tag}
                      </span>
                    );
                  })}
                  <img
                    src={videoIcon}
                    alt="prep"
                    className="w-4 h-4 cursor-pointer ml-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideoIndex(activeVideoIndex === i ? null : i);
                    }}
                  />
                </div>

                <div className="flex justify-between items-center mt-4 pt-2 border-t text-xs sm:text-sm text-gray-600">
                  <span className="text-green-600">{job.benefit}</span>
                  <span>{job.time}</span>
                </div>
                
                {/* Video Section - Card Extension */}
                {activeVideoIndex === i && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Job Preparation Video</h3>
                      <button
                        onClick={() => setActiveVideoIndex(null)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <video
                      controls
                      className="w-full h-auto rounded-lg"
                      autoPlay
                    >
                      <source src={jobPrepVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Metro Filter */}
        <div className="px-4 sm:px-6 md:px-8 mt-6 sm:mt-8">
          <h2 className="font-semibold text-gray-800 mb-2 sm:mb-4 text-base sm:text-lg md:text-xl">
            Jobs Near Metro Stations
          </h2>
          <div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {metroFilters.map((item, i) => (
              <div
                key={i}
                className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base border shadow-sm min-w-fit flex flex-col items-center md:min-w-0"
              >
                <span className="font-medium text-black">{item}</span>
                <span className="text-blue-600 text-xs sm:text-sm">View 30 Jobs &gt;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Duplicate Job Cards Section */}
        <div className="px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8 mt-6 sm:mt-8 md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-6 md:space-y-0">
          {jobData.map((job, i) => (
            <div
              key={i + 'duplicate'}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_8px_20px_rgba(59,130,246,0.2)] transition duration-300"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                      alt="logo"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h2
                          className="text-base sm:text-lg md:text-xl font-semibold cursor-pointer truncate"
                          onClick={() => navigate("/jobs/jobdetails")}
                        >
                          {job.title}
                        </h2>
                        <img src={verifiedIcon} alt="verified" className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-green-600">{job.salary}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-xs sm:text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-1 sm:px-3 sm:py-1 rounded-full truncate">
                      URGENT HIRING
                    </div>
                    <Bookmark className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <p className="text-sm sm:text-base mt-2 text-gray-700">{job.company}</p>
                <p className="text-sm sm:text-base text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  {job.location}
                </p>

                <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 items-center">
                  {job.tags.map((tag, tagIndex) => {
                    const isInterview = tag.includes("Interview");
                    const isHighDemand = tag.includes("High Demand");
                    const isNewJob = tag.includes("New Job");
                    const isVacancy = tag.includes("Vacancy");
                    let bg = "bg-gray-100 text-gray-700";
                    let icon = null;
                    if (isInterview) {
                      bg = "bg-orange-200 text-black font-semibold";
                      return (
                        <span
                          key={tagIndex}
                          className={`text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-xl flex items-center gap-1 ${bg}`}
                        >
                          {tag}
                        </span>
                      );
                    } else if (isHighDemand) {
                      bg = "bg-yellow-100 text-blue-800 font-medium";
                      icon = <span className="text-yellow-500">⚡</span>;
                    } else if (isNewJob || isVacancy) {
                      bg = "bg-gray-100 text-blue-700 font-medium";
                    }
                    return (
                      <span
                        key={tagIndex}
                        className={`text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1 rounded-xl flex items-center gap-1 ${bg}`}
                      >
                        {icon}
                        {tag}
                      </span>
                    );
                  })}
                  <img
                    src={videoIcon}
                    alt="prep"
                    className="w-4 h-4 cursor-pointer ml-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideoIndex(activeVideoIndex === i ? null : i);
                    }}
                  />
                </div>

                <div className="flex justify-between items-center mt-4 pt-2 border-t text-xs sm:text-sm text-gray-600">
                  <span className="text-green-600">{job.benefit}</span>
                  <span>{job.time}</span>
                </div>
                
                {/* Video Section - Card Extension */}
                {activeVideoIndex === i && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Job Preparation Video</h3>
                      <button
                        onClick={() => setActiveVideoIndex(null)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <video
                      controls
                      className="w-full h-auto rounded-lg"
                      autoPlay
                    >
                      <source src={jobPrepVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* ✅ Fixed Bottom Navigation */}
          <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-1 sm:py-1 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
            <button onClick={() => navigate("/home")}>
              <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
            </button>
            <button onClick={() => navigate("/joblist")}>
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-blue-600" />
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
    
    

      {/* Interview Prep Modal */}
      {showInterviewPrep && (
        <InterviewPrep onClose={() => setShowInterviewPrep(false)} />
      )}
    </div>
  );
};

export default JobList;
