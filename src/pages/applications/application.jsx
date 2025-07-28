import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Bell,
  ChevronLeft,
  Home as HomeIcon,
  Briefcase,
  Plus,
  FileText,
  Search,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import hrScoreIcon from "../../assets/HR Score.png";
import hrReviewIcon from "../../assets/HR review.png";
import placeholderImage from "../../assets/company-placeholder.png";

const Application = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(3.5);
  const [hovered, setHovered] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const appliedJobs = [
    {
      title: "Tech Innovators Inc.",
      role: "Customer Support",
      location: "Richmond Rd, Bengaluru",
      time: "12:00pm to 1230pm",
      type: "Virtual Interview",
    },
    {
      title: "Future Systems Ltd.",
      role: "Sales Executive",
      location: "MG Road, Bengaluru",
      time: "3:00pm to 4:00pm",
      type: "Face 2 Face Interview",
    },
  ];

  const handleCardClick = (job) => {
    if (job.type === "Virtual Interview") {
      navigate("/virtualinterview", { state: { job } });
    } else {
      navigate("/facetofaceinterview", { state: { job } });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-32 font-sans text-[15px]">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ChevronLeft onClick={() => navigate(-1)} className="cursor-pointer" />
          <h1 className="text-xl font-semibold">Application</h1>
        </div>
        <Bell size={22} className="text-blue-600" />
      </div>

      {/* Search Input */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search Applications...."
          className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none"
        />
      </div>

      {/* Job Cards */}
      {appliedJobs.map((job, i) => (
        <div
          key={i}
          onClick={() => handleCardClick(job)}
          className="bg-white rounded-2xl p-5 mb-6 shadow-[0_8px_20px_rgba(0,123,255,0.15)] border cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{job.title}</h2>
              <p className="text-sm text-gray-600">{job.role}</p>
              <p className="text-sm text-gray-500 mt-1">Applied 2 days ago</p>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="mt-2 inline-block px-3 py-1 text-green-600 border border-green-600 rounded-full text-xs">
                Pending
              </div>
            </div>
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
              <img src={placeholderImage} alt="company logo" className="w-16 h-16 rounded-xl" />
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-2">Time: {job.time}</div>

          {/* Updated Buttons - Full Width in Single Row */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {job.type === "Virtual Interview" ? (
              <>
                <button className="w-full bg-blue-500 text-white text-[13px] py-2 rounded-[5px]">Ready to join</button>
                <button className="w-full bg-yellow-400 text-white text-[13px] py-2 rounded-[5px]">Link to join</button>
                <button className="w-full bg-sky-400 text-white text-[13px] py-2 rounded-[5px]">Reschedule</button>
              </>
            ) : (
              <>
                <button className="w-full bg-blue-500 text-white text-[13px] py-2 rounded-[5px]">Attend Interview</button>
                <button className="w-full bg-yellow-400 text-white text-[13px] py-2 rounded-[5px]">Route</button>
                <button className="w-full bg-sky-400 text-white text-[13px] py-2 rounded-[5px]">Reschedule</button>
              </>
            )}
          </div>
        </div>
      ))}

      {/* HR Score Box */}
      <div className="rounded-xl shadow-[0_8px_20px_rgba(0,123,255,0.15)] p-4 mb-4 text-black" style={{ backgroundImage: "linear-gradient(to right, #FF8A8A, #4B99FF)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 p-1 rounded-xl" style={{ backgroundImage: "linear-gradient(to right, #407BFFB3, #1C1A1AE6)" }}>
            <img src={hrScoreIcon} alt="HR Score" className="object-contain w-full h-full rounded-lg" />
          </div>
          <h3 className="text-sm font-semibold">
            HR Score: <span className="font-bold ml-1 text-white">781/900</span>
          </h3>
        </div>
        <p className="text-xs text-black mt-2">
          Rescheduling 2+ interviews reduces your HR score
        </p>
      </div>

      {/* HR Review Box */}
      <div className="rounded-xl shadow-[0_8px_20px_rgba(0,123,255,0.15)] p-4 text-black" style={{ backgroundImage: "linear-gradient(to right, #4B99FF, #38E0C5)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 p-1 rounded-xl" style={{ backgroundImage: "linear-gradient(to right, #407BFFB3, #1C1A1AE6)" }}>
            <img src={hrReviewIcon} alt="HR Review" className="object-contain w-full h-full rounded-lg" />
          </div>
          <h3 className="text-sm font-semibold">HR Review Pending</h3>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-black text-sm font-medium">HR Rates</span>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHovered(i + 1)}
              onMouseLeave={() => setHovered(null)}
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="40"
              viewBox="0 0 48 40"
              fill={
                hovered !== null
                  ? i + 1 <= hovered
                    ? "#FFD700"
                    : "lightgray"
                  : i + 1 <= Math.floor(rating)
                  ? "#FFD700"
                  : i + 0.5 === rating
                  ? "url(#halfGradient)"
                  : "lightgray"
              }
              className="cursor-pointer"
            >
              <defs>
                <linearGradient id="halfGradient">
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="lightgray" />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.425 17.1209C34.2393 16.5486 33.7296 16.1427 33.1303 16.0897L27.5625 15.6097L25.38 10.4197C25.1476 9.86283 24.6034 9.50019 24 9.50019C23.3966 9.50019 22.8524 9.86283 22.62 10.4197L20.4441 15.6097L14.8697 16.0925C14.2679 16.1431 13.7551 16.5496 13.5686 17.124C13.3821 17.6985 13.5583 18.3287 14.0156 18.7231L18.2447 22.4187L16.9772 27.9069C16.8402 28.494 17.068 29.1062 17.5556 29.4608C18.0432 29.8155 18.6958 29.8437 19.2122 29.5325L23.9934 26.6262L28.785 29.5325C29.3014 29.8437 29.954 29.8155 30.4416 29.4608C30.9292 29.1062 31.157 28.494 31.02 27.9069L29.7534 22.4131L33.9816 18.7231C34.4389 18.3273 34.6137 17.6956 34.425 17.1209Z"
              />
            </svg>
          ))}
        </div>
      </div>

     {/* ✅ Fixed Bottom Navigation */}
           <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
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
               navigate("/InterviewPrep");;
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
               <FileText className="w-6 h-6 text-blue-600" />
             </button>
             <button onClick={() => navigate("/myprofilesection/myprofile")}>
               <User className="w-6 h-6 text-gray-400" />
             </button>
           </div>
     
         </div>
       );
     };
     

export default Application;
