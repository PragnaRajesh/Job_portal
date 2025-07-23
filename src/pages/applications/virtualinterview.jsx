import React, { useState } from "react";
import { ChevronLeft, Bell, Check } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import placeholderImage from "../../assets/company-placeholder.png";

const VirtualInterview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job || {
    title: "Tech Innovations Inc.",
    role: "Customer Support",
    location: "Richmond Rd, Bengaluru",
    time: "12:00pm to 12:30pm",
  };

  const [activeTab, setActiveTab] = useState("track");
  const [showReasonDropdown, setShowReasonDropdown] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const rescheduleReasons = [
    "Medical Emergency",
    "Work Commitments",
    "Personal Emergency",
    "Change of Mind",
    "Lack of Preparation",
  ];

  const interviewStages = [
    "Interview Started",
    "1st Round",
    "2nd Round",
    "3rd Round",
  ];

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-32 font-sans">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ChevronLeft onClick={() => navigate(-1)} className="cursor-pointer" />
          <h1 className="text-xl font-semibold">Application</h1>
        </div>
        <Bell size={22} className="text-blue-600" />
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Applications...."
            className="w-full px-4 py-2 border rounded-full text-sm pl-10 focus:outline-none"
          />
          <svg
            className="absolute left-4 top-2.5 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 mb-4 shadow border">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.role}</p>
            <p className="text-sm text-gray-500 mt-1">Applied 2 days ago</p>
            <div className="text-sm text-gray-600 mt-1">📍 {job.location}</div>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="inline-block px-3 py-1 text-green-600 border border-green-600 rounded-full text-xs">
                Pending
              </span>
              {selectedReason && (
                <span className="inline-block px-3 py-1 text-blue-600 bg-blue-50 rounded-full text-xs">
                  Reschedule: {selectedReason}
                </span>
              )}
            </div>
          </div>
          <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
            <img
              src={placeholderImage}
              alt="company logo"
              className="w-16 h-16 rounded-xl"
            />
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-2">Time: {job.time}</div>

        <div className="flex items-center gap-2 mt-4 ml-[-6px]">
          <button className="bg-blue-500 text-white text-[11px] px-2.5 py-1 rounded-[5px]">
            Ready to join
          </button>
          <button className="bg-yellow-400 text-white text-[11px] px-2.5 py-1 rounded-[5px]">
            Link to join
          </button>
          <button
            onClick={() => setShowReasonDropdown(!showReasonDropdown)}
            className="bg-sky-400 text-white text-[11px] px-2.5 py-1 rounded-[5px]"
          >
            Reschedule
          </button>
        </div>

        {showReasonDropdown && (
          <div className="mt-4 bg-white border rounded-xl p-4 shadow-sm">
            <h4 className="text-base font-semibold mb-3">Why are you rescheduling?</h4>
            {rescheduleReasons.map((reason, idx) => (
              <div
                key={idx}
                className={`border rounded-xl px-4 py-2 flex items-center justify-between mb-2 cursor-pointer ${
                  selectedReason === reason ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedReason(reason)}
              >
                <span>{reason}</span>
                <span
                  className={`w-5 h-5 rounded-full border ${
                    selectedReason === reason ? "border-blue-600 bg-blue-100" : "border-gray-400"
                  } flex items-center justify-center`}
                >
                  {selectedReason === reason && (
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                  )}
                </span>
              </div>
            ))}
            {selectedReason && (
              <button
                onClick={() => setShowReasonDropdown(false)}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
              >
                Submit
              </button>
            )}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex justify-between items-center border-b border-gray-300 mb-2 text-sm">
        <button
          onClick={() => setActiveTab("track")}
          className={`px-4 py-2 font-semibold focus:outline-none ${
            activeTab === "track" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
          }`}
        >
          Track Application
        </button>
        <button
          onClick={() => setActiveTab("notes")}
          className={`px-4 py-2 font-semibold focus:outline-none ${
            activeTab === "notes" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
          }`}
        >
          Notes
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white border rounded-xl p-4 shadow-md">
        {activeTab === "track" && (
          <>
            <div className="flex flex-col items-start gap-0 mt-2">
              {interviewStages.map((stage, index) => (
                <React.Fragment key={index}>
                  <div className="relative flex flex-row items-start gap-4 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-4 border-green-500 bg-white flex items-center justify-center z-10">
                        {index === 0 ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="text-white w-4 h-4" />
                          </div>
                        )}
                      </div>
                      {index !== interviewStages.length - 1 && (
                        <div className="h-20 w-px bg-green-500 border-l-2 border-dashed -mt-0.5"></div>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 pt-3">
                      {stage}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600 text-center px-4">
              Interview will be completed in approx 30–45 mins based on client.
            </p>
          </>
        )}

        {activeTab === "notes" && (
          <div className="text-sm text-gray-700">
            <p className="mb-2">1. Interview Mode: Virtual (Google Meet)</p>
            <p className="mb-2">2. Duration: 30 minutes | Date: 25th July 2025</p>
            <p className="mb-2">3. Panel: 2 members including the Hiring Manager</p>
            <p className="mb-2">4. Candidate submitted resume and cover letter successfully</p>
            <p className="mb-2">5. Status: Confirmed and pending final review</p>
            <p className="mb-2">6. No red flags noted during screening process</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualInterview;
