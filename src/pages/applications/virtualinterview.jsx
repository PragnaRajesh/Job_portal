import React, { useState } from "react";
import { ChevronLeft, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const VirtualInterview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job || {};
  const [activeTab, setActiveTab] = useState("track");
  const [showReasonDropdown, setShowReasonDropdown] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const rescheduled = [
    "Medical Emergency",
    "Work Commitments",
    "Personal Emergency",
    "Change of Mind",
    "Lack of Preparation",
  ];

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-32 font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ChevronLeft onClick={() => navigate(-1)} className="cursor-pointer" />
          <h1 className="text-xl font-semibold">Application</h1>
        </div>
        <Bell size={22} className="text-blue-600" />
      </div>

      {/* Search Bar */}
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

      {/* Job Card */}
      <div className="bg-white rounded-2xl p-5 mb-4 shadow-[0_8px_20px_rgba(0,123,255,0.15)] border">
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
            🏢
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-2">Time: {job.time}</div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm">Ready to Join</button>
          <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm">Link to Join</button>
          <button
            className="bg-sky-400 text-white px-4 py-1.5 rounded-full text-sm"
            onClick={() => setShowReasonDropdown(!showReasonDropdown)}
          >
            {job.attended ? "Attended" : "Reschedule"}
          </button>
        </div>

        {/* Reschedule Dropdown */}
        {showReasonDropdown && (
          <div className="mt-4 bg-white border rounded-xl p-4 shadow-sm">
            <h4 className="text-base font-semibold mb-3">Why are you rescheduling?</h4>
            {rescheduled.map((reason, idx) => (
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
          </div>
        )}
      </div>

      {/* Virtual Interview Card */}
      <div className="mb-4">
        <h2 className="font-semibold text-lg mb-3">Virtual Interview</h2>
        <div className="rounded-xl border shadow p-4">
          {/* Tabs */}
          <div className="flex justify-between mb-3 text-sm font-medium">
            <button
              onClick={() => setActiveTab("track")}
              className={`border-b-2 px-2 pb-1 ${
                activeTab === "track"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Track Application
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`border-b-2 px-2 pb-1 ${
                activeTab === "notes"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Notes
            </button>
          </div>

          {activeTab === "track" ? (
            <div className="space-y-6">
              {["Interview Started", "1st Round", "2nd Round", "3rd Round"].map((stage, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full border-4 flex items-center justify-center ${
                        idx === 0
                          ? "bg-green-600 border-green-500"
                          : "border-green-500"
                      }`}
                    >
                      {idx > 0 && (
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    {idx < 3 && <div className="w-px h-8 bg-green-500 mt-1" />}
                  </div>
                  <p className="pt-1 text-sm font-medium">{stage}</p>
                </div>
              ))}
              <p className="text-sm text-gray-600 pt-2">
                Interview will be completed in approx 30–45 mins based on client.
              </p>
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No notes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualInterview;
