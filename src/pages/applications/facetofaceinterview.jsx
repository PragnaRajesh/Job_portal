import React, { useState, useEffect } from "react";
import { ChevronLeft, Bell, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Geolocation } from '@capacitor/geolocation';
import placeholderImage from "../../assets/company-placeholder.png";
import googleIcon from "../../assets/google.png";
import uberIcon from "../../assets/uber.png";
import rapidoIcon from "../../assets/rapido.png";
import shareIcon from "../../assets/share.png";


const FaceToFaceInterview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job || {
    title: "Tech Innovations Inc.",
    role: "Customer Support",
    location: "Mahatma Gandhi Rd, Bengaluru",
    time: "12:00pm to 12:30pm",
  };

  const [showReasonDropdown, setShowReasonDropdown] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [showMapSection, setShowMapSection] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const rescheduleReasons = [
    "Medical Emergency",
    "Work Commitments",
    "Personal Emergency",
    "Change of Mind",
    "Lack of Preparation",
  ];

  const isWeb = () => typeof window !== "undefined" && window.navigator;

  const handleComingForInterview = async () => {
    try {
      let latitude, longitude;

      if (isWeb()) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            await fetchRouteAndShowMap(latitude, longitude);
          },
          (error) => {
            console.error("Geolocation error (Web)", error);
            alert("Please enable location access from your browser settings.");
          }
        );
      } else {
        await Geolocation.requestPermissions();
        const position = await Geolocation.getCurrentPosition();
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        await fetchRouteAndShowMap(latitude, longitude);
      }
    } catch (err) {
      console.error("Geolocation error", err);
      alert("Unable to access location. Please enable permissions from your phone settings.");
    }
  };

  const fetchRouteAndShowMap = async (latitude, longitude) => {
    const origin = `${latitude},${longitude}`;
    setCurrentLocation(origin);
    setShowMapSection(true);

    const destination = encodeURIComponent(job.location);
    const apiKey = "AIzaSyB2NP7lSemQeJ0fPfFnfyCxs_X0kg137F4";

    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`
      );
      const data = await res.json();
      if (data.routes?.[0]) {
        const leg = data.routes[0].legs[0];
        setDistance(leg.distance.text);
        setDuration(leg.duration.text);
      }
    } catch (error) {
      console.error("Failed to fetch directions", error);
    }
  };

  const handleNavigationClick = (app) => {
    const destination = encodeURIComponent(job.location);
    const origin = currentLocation ? encodeURIComponent(currentLocation) : "";

    const urls = {
      google: `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`,
      uber: "https://m.uber.com/ul/",
      rapido: "https://www.rapido.bike/",
      share: `https://maps.google.com/?q=${destination}`,
    };

    if (app === "share") {
      const text = `I'm heading to an interview at ${job.location}. Track me: ${urls.share}`;
      navigator.share
        ? navigator.share({ title: "Track Me", text })
        : alert("Sharing not supported");
    } else {
      window.open(urls[app], "_blank");
    }
  };

  // ✅ Auto-call location logic on mount
  useEffect(() => {
    handleComingForInterview();
  }, []);

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
          <img
            src={placeholderImage}
            alt="Company"
            className="w-16 h-16 rounded-xl bg-gray-100 object-contain"
          />
        </div>

        <div className="text-xs text-gray-500 mt-2">Time: {job.time}</div>
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <button className="bg-blue-500 text-white text-[11px] px-2.5 py-1 rounded-[5px]" onClick={handleComingForInterview}>
            Coming for interview
          </button>
          <button className="bg-yellow-400 text-white text-[11px] px-2.5 py-1 rounded-[5px]" onClick={() => handleNavigationClick("google")}>
            Route
          </button>
          <button className="bg-sky-400 text-white text-[11px] px-2.5 py-1 rounded-[5px]" onClick={() => setShowReasonDropdown(!showReasonDropdown)}>
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

      {/* Map Section */}
      {showMapSection && currentLocation && (
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-3">Face to Face Interview</h2>
          <div className="rounded-xl border shadow p-4">
            <div className="flex justify-between items-center mb-3 text-sm font-medium">
              <button className="text-blue-600 border-b-2 border-blue-600 px-2 pb-1">Track Application</button>
              <a href="tel:+919901057170" className="bg-white border px-3 py-1 rounded-full text-sm flex items-center gap-1">
                Call HR <Phone size={14} color="#229C36" />
              </a>
            </div>

            <iframe
              title="Map"
              className="w-full h-64 rounded-lg mb-2"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyB2NP7lSemQeJ0fPfFnfyCxs_X0kg137F4&origin=${currentLocation}&destination=${encodeURIComponent(
                job.location
              )}&mode=driving`}
              allowFullScreen
            ></iframe>

            {distance && duration && (
              <p className="text-sm text-gray-700 mt-1 mb-3">
                Estimated time: <strong>{duration}</strong> • Distance: <strong>{distance}</strong>
              </p>
            )}

            <h3 className="font-semibold text-base mb-2">Choose a Navigation App</h3>
<div className="space-y-2">
  <button
    onClick={() => handleNavigationClick("google")}
    className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left"
  >
    <img src={googleIcon} alt="Google Maps" className="w-6 h-6" />
    Google Maps
  </button>
  <button
    onClick={() => handleNavigationClick("rapido")}
    className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left"
  >
    <img src={rapidoIcon} alt="Rapido" className="w-6 h-6" />
    Rapido
  </button>
  <button
    onClick={() => handleNavigationClick("uber")}
    className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left"
  >
    <img src={uberIcon} alt="Uber" className="w-6 h-6" />
    Uber
  </button>
  <button
    onClick={() => handleNavigationClick("share")}
    className="flex items-center gap-3 w-full border px-4 py-2 rounded-lg text-left"
  >
    <img src={shareIcon} alt="Share" className="w-6 h-6" />
    Share to Family & Friends
  </button>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default FaceToFaceInterview;
