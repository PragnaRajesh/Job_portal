import React, { useEffect, useState } from "react";
import {
  MapPin,
  Bell,
  ChevronLeft,
  Clock,
  Star,
  HomeIcon,
  Briefcase,
  PlusCircle,
  FileBarChart,
  Search,
  User2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import hrScoreIcon from '../../assets/HR Score.jpeg';
import hrReviewIcon from '../../assets/HR review.jpeg';

const Application = () => {
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(jobs);
  }, []);

  const handleCardClick = (job) => {
    if (job.type === "Virtual Interview") {
      navigate("/virtualinterview", { state: { job } });
    } else if (job.type === "Face 2 Face Interview") {
      navigate("/facetofaceinterview", { state: { job } });
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-32 font-sans text-[15px]">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ChevronLeft onClick={() => navigate(-1)} className="cursor-pointer" />
          <h1 className="text-xl font-semibold">Application</h1>
        </div>
        <Bell />
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
              🏢
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-2">Time: {job.time}</div>

          <div className="flex gap-2 mt-4 flex-wrap">
            {job.type === "Virtual Interview" ? (
              <>
                <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm">Ready to Join</button>
                <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm">Link to Join</button>
                <button className="bg-sky-400 text-white px-4 py-1.5 rounded-full text-sm">
                  {job.attended ? "Attended" : "Reschedule"}
                </button>
              </>
            ) : (
              <>
                <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm">Coming for Interview</button>
                <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm">Route</button>
                <button className="bg-sky-400 text-white px-4 py-1.5 rounded-full text-sm">
                  {job.attended ? "Reached" : "Reschedule"}
                </button>
              </>
            )}
          </div>
        </div>
      ))}

      {/* HR Score Gradient Box */}
      <div className="rounded-xl shadow-[0_8px_20px_rgba(0,123,255,0.15)] p-4 mb-4 text-black"
        style={{ backgroundImage: "linear-gradient(to right, #FF8A8A, #4B99FF)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 p-1 rounded-xl"
              style={{
                backgroundImage: "linear-gradient(to right, #407BFFB3, #1C1A1AE6)",
              }}
            >
              <img src={hrScoreIcon} alt="HR Score" className="object-contain w-full h-full rounded-lg" />
            </div>
            <h3 className="text-sm font-semibold">
              HR Score: <span className="font-bold ml-1 text-white">781/900</span>
            </h3>
          </div>
        </div>
        <p className="text-xs text-black mt-2">
          Rescheduling 2+ interviews reduces your HR score
        </p>
      </div>

      {/* HR Review Gradient Box */}
      <div className="rounded-xl shadow-[0_8px_20px_rgba(0,123,255,0.15)] p-4 text-black"
        style={{ backgroundImage: "linear-gradient(to right, #4B99FF, #38E0C5)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 p-1 rounded-xl"
            style={{
              backgroundImage: "linear-gradient(to right, #407BFFB3, #1C1A1AE6)",
            }}
          >
            <img src={hrReviewIcon} alt="HR Review" className="object-contain w-full h-full rounded-lg" />
          </div>
          <h3 className="text-sm font-semibold">HR Review Pending</h3>
        </div>
        <div className="mt-4 text-yellow-300 flex items-center gap-1 text-sm">
          <span className="text-black mr-2">HR Rates</span>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.539 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.95a1 1 0 00-.364-1.119l-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.951z"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 z-50">
        <HomeIcon
          size={22}
          className="text-gray-600 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <Briefcase
          size={22}
          className="text-gray-600 cursor-pointer"
          onClick={() => navigate("/jobs/joblist")}
        />
        <div className="-mt-5 bg-white rounded-full shadow-md p-1">
          <PlusCircle size={32} className="text-blue-500" />
        </div>
        <FileBarChart
          size={22}
          className="text-blue-600 cursor-pointer"
          onClick={() => navigate("/applications")}
        />
        <User2
          size={22}
          className="text-gray-600 cursor-pointer"
          onClick={() => navigate("/myprofilesection/myprofile")}
        />
      </div>
    </div>
  );
};

export default Application;
