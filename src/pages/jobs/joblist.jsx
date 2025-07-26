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
import verifiedIcon from "../../assets/verified.jpeg";
import videoIcon from "../../assets/job prep.jpeg";
import jobPrepVideo from "../../assets/job prep vedio.mp4";
import InterviewPrep from "../../components/InterviewPrep";

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
    <div className="h-screen overflow-y-auto bg-gray-100 pb-24 pt-safe pb-safe">
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
            className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(59,130,246,0.2)] transition duration-300"


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

              <div className="flex flex-wrap gap-2 mt-3">
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
                        className={`text-xs px-2 py-0.5 rounded-xl flex items-center gap-1 ${bg}`}
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
                      className={`text-xs px-3 py-1 rounded-xl flex items-center gap-1 ${bg}`}
                    >
                      {icon}
                      {tag}
                    </span>
                  );
                })}
              </div>
              
              <div className="flex justify-end mt-2 pr-2">
                <div
                  className="flex flex-col items-center text-[10px] text-blue-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideoIndex(activeVideoIndex === i ? null : i);
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
              
              {/* Video Section - Card Extension */}
              {activeVideoIndex === i && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Job Preparation Video</h3>
                    <button
                      onClick={() => setActiveVideoIndex(null)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <video
                    controls
                    className="w-full h-auto max-h-[300px] rounded-lg"
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
                        className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(59,130,246,0.2)] transition duration-300"
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

              <div className="flex flex-wrap gap-2 mt-3">
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
                        className={`text-xs px-2 py-0.5 rounded-xl flex items-center gap-1 ${bg}`}
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
                      className={`text-xs px-3 py-1 rounded-xl flex items-center gap-1 ${bg}`}
                    >
                      {icon}
                      {tag}
                    </span>
                  );
                })}
              </div>
              
              <div className="flex justify-end mt-2 pr-2">
                <div
                  className="flex flex-col items-center text-[10px] text-blue-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideoIndex(activeVideoIndex === i ? null : i);
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
              
              {/* Video Section - Card Extension */}
              {activeVideoIndex === i && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Job Preparation Video</h3>
                    <button
                      onClick={() => setActiveVideoIndex(null)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <video
                    controls
                    className="w-full h-auto max-h-[300px] rounded-lg"
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




     {/* ✅ Fixed Bottom Navigation */}
           <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
             <button onClick={() => navigate("/home")}>
               <HomeIcon className="w-6 h-6 text-gray-400" />
             </button>
             <button onClick={() => navigate("/jobs/joblist")}>
               <Briefcase className="w-6 h-6 text-blue-600" />
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
         ref={popupRef}
         className="fixed bottom-16 left-0 w-full h-[50vh] bg-gradient-to-t from-blue-100 via-white to-white z-50 rounded-t-3xl shadow-2xl flex flex-col items-center pt-6 pb-4 animate-slideUp"
       >
         <div className="w-16 h-1 bg-blue-200 rounded-full mb-6 mt-2" />
         <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Actions</h3>
     
         <div className="flex flex-col gap-4 w-4/5">
           <button
             onClick={() => {
               setShowPopup(false);
               navigate("/resume/resumebuilder");
             }}
             className="w-full bg-[#EAF3FF] text-[#074799] py-3 rounded-xl font-medium text-base shadow-sm border border-[#BFDFFF] hover:bg-[#dbeeff] transition"
           >
             📝 Resume Builder
           </button>
           <button
             onClick={() => {
               setShowPopup(false);
               navigate("/messages");
             }}
             className="w-full bg-[#E8F9ED] text-[#2E7D32] py-3 rounded-xl font-medium text-base shadow-sm border border-[#BEE7C9] hover:bg-[#d3f3db] transition"
           >
             💬 Chats
           </button>
           <button
             onClick={() => {
               setShowPopup(false);
               navigate("/InterviewPrep");
             }}
             className="w-full bg-[#F3E9FF] text-[#6A1B9A] py-3 rounded-xl font-medium text-base shadow-sm border border-[#D8C5ED] hover:bg-[#ebdbff] transition"
           >
             🤖 AI Job Prep
           </button>
         </div>
       </div>
     )}
     
             </div>
     
             <button onClick={() => navigate("/applications/application")}>
               <FileText className="w-6 h-6 text-gray-400" />
             </button>
             <button onClick={() => navigate("/myprofilesection/myprofile")}>
               <User className="w-6 h-6 text-gray-400 " />
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
