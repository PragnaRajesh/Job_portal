import React, { useState } from "react";
import { ChevronLeft, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FaceToFaceInterview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job || {};

  const [showReasonDropdown, setShowReasonDropdown] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const rescheduleReasons = [
    "Medical Emergency",
    "Work Commitments",
    "Personal Emergency",
    "Change of Mind",
    "Lack of Preparation",
    "Dependent on Relatives",
  ];

  const handleNavigationClick = (app) => {
    const destination = encodeURIComponent("67, Ar road, Nagpur");
    const currentLocation = encodeURIComponent("123, any street, Nagpur");

    if (app === "google") {
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${currentLocation}&destination=${destination}`);
    } else if (app === "uber") {
      window.open("https://m.uber.com/ul/");
    } else if (app === "rapido") {
      window.open("https://www.rapido.bike/");
    }
  };

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
          <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">🏢</div>
        </div>

        <div className="text-xs text-gray-500 mt-2">Time: {job.time}</div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm">
            Coming for Interview
          </button>
          <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm">
            Route
          </button>
          <button
            className="bg-sky-400 text-white px-4 py-1.5 rounded-full text-sm"
            onClick={() => setShowReasonDropdown(!showReasonDropdown)}
          >
            {job.attended ? "Reached" : "Reschedule"}
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
          </div>
        )}
      </div>

      {/* Face to Face Interview Card */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-3">Face to Face Interview</h2>

        <div className="rounded-xl border shadow p-4">
          {/* Tabs + Call HR */}
          <div className="flex justify-between items-center mb-3 text-sm font-medium">
            <button className="text-blue-600 border-b-2 border-blue-600 px-2 pb-1">
              Track Application
            </button>
            <a
              href="tel:+919876543210"
              className="bg-white border px-3 py-1 rounded-full text-sm text-green-600"
            >
              Call HR
            </a>
          </div>

          {/* Google Map Embed */}
          <iframe
            title="Map"
            className="w-full h-64 rounded-lg mb-4"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_API_KEY&origin=123,any street,Nagpur&destination=67,Ar road,Nagpur"
            allowFullScreen
          ></iframe>

          {/* Choose Navigation App */}
          <h3 className="font-semibold text-base mb-2">Choose a Navigation App</h3>
          <div className="space-y-2">
            <button onClick={() => handleNavigationClick("google")} className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left">
              <span className="text-blue-500">📍</span> Google Maps
            </button>
            <button onClick={() => handleNavigationClick("rapido")} className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left">
              <span className="text-blue-500">🛵</span> Rapido
            </button>
            <button onClick={() => handleNavigationClick("uber")} className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left">
              <span className="text-blue-500">🚗</span> Uber
            </button>
            <button className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left">
              <span className="text-blue-500">📤</span> Share to Family & Friends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceToFaceInterview;
