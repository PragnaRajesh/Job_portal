import React from "react";
import {
  Bell,
  ChevronLeft,
  MapPin,
  Search,
  Sliders,
  HomeIcon,
  Briefcase,
  FileBarChart,
  PlusCircle,
  User2,
  Bookmark,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const navigate = useNavigate();

  const jobData = [
    {
      title: "UI/UX Designer",
      salary: "₹15,000",
      company: "Google inc .",
      location: "HSR Layout, Bengaluru",
      tags: ["New Job", "3 Vacancy", "⚡ High Demand", "Face 2 Face Interview"],
      benefit: "PF provided",
      time: "25 minute ago",
    },
    {
      title: "UI/UX Designer",
      salary: "₹15,000",
      company: "Google inc .",
      location: "HSR Layout, Bengaluru",
      tags: ["New Job", "3 Vacancy", "⚡ High Demand", "Virtual Interview"],
      benefit: "Insurance provided",
      time: "1 day ago",
    },
    {
      title: "UI/UX Designer",
      salary: "₹15,000",
      company: "Google inc .",
      location: "HSR Layout, Bengaluru",
      tags: ["New Job", "3 Vacancy", "⚡ High Demand", "Virtual Interview"],
      benefit: "PF provided",
      time: "30 minute ago",
    },
    {
      title: "UI/UX Designer",
      salary: "₹15,000",
      company: "Google inc .",
      location: "HSR Layout, Bengaluru",
      tags: ["New Job", "3 Vacancy", "⚡ High Demand", "Virtual Interview"],
      benefit: "PF provided",
      time: "30 minute ago",
    },
  ];

  const metroFilters = ["Within 10Km", "10–15 Km away", "10–15 Km away"];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2b2b76] to-[#412c84] text-white px-4 py-5 rounded-b-3xl">
        <div className="flex justify-between items-center">
          <ChevronLeft />
          <h1 className="text-base font-semibold">50 Jobs near you....</h1>
          <Bell />
        </div>

        {/* Search & Location */}
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
        <button className="bg-white border px-4 py-1 text-sm rounded-full">
          Senior designer
        </button>
        <button className="bg-white border px-4 py-1 text-sm rounded-full">
          Designer
        </button>
        <button className="bg-white border px-4 py-1 text-sm rounded-full">
          Full-time
        </button>
      </div>

      {/* Job Cards */}
      <div className="px-4 space-y-6">
        {jobData.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow border border-blue-100 cursor-pointer hover:shadow-md transition"
            onClick={() => navigate("/jobs/jobdetails")}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="logo"
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-[15px] font-semibold">{job.title}</h2>
                  <p className="text-[14px] font-bold text-green-600">
                    {job.salary}
                  </p>
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
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 pt-2 border-t text-xs text-gray-600">
              <span className="text-green-600">{job.benefit}</span>
              <span>{job.time}</span>
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
            className="bg-white rounded-2xl p-4 shadow border border-blue-100 cursor-pointer hover:shadow-md transition"
            onClick={() => navigate("/jobs/jobdetails")}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="logo"
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-[15px] font-semibold">{job.title}</h2>
                  <p className="text-[14px] font-bold text-green-600">
                    {job.salary}
                  </p>
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
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 pt-2 border-t text-xs text-gray-600">
              <span className="text-green-600">{job.benefit}</span>
              <span>{job.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 z-50">
        <HomeIcon size={22} className="text-blue-600" />
        <Briefcase
          size={22}
          className="text-gray-600"
          onClick={() => navigate("/jobs/joblist")}
        />
        <div className="-mt-5 bg-white rounded-full shadow-md p-1">
          <PlusCircle size={32} className="text-blue-500" />
        </div>
        <FileBarChart
          size={22}
          className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
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

export default JobList;
