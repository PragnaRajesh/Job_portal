import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetup2 = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("fullName");
    if (storedName) setFullName(storedName);
  }, []);

  const handleContinue = () => {
    if (!dob || !gender || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Save to localStorage
    localStorage.setItem("dob", dob);
    localStorage.setItem("gender", gender);
    localStorage.setItem("email", email);

    navigate("/profilesetup3");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      <div>
        <h2 className="text-base font-semibold text-center mb-4">
          Basic Details
        </h2>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div className="h-2 bg-blue-700 rounded-full w-2/5"></div>
        </div>

        {/* Full Name */}
        <label className="text-sm font-semibold block mb-1">Full Name</label>
        <input
          type="text"
          value={fullName}
          disabled
          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-sm mb-4"
        />

        {/* Date of Birth */}
        <label className="text-sm font-semibold block mb-1">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-4"
        />

        {/* Gender (Toggle Style) */}
        <label className="text-sm font-semibold block mb-2">Gender</label>
        <div className="w-full bg-blue-100 p-1 rounded-lg flex items-center justify-between mb-4">
          <button
            onClick={() => setGender("Male")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              gender === "Male"
                ? "bg-white text-black shadow-sm"
                : "text-blue-700"
            }`}
          >
            Male
          </button>
          <button
            onClick={() => setGender("Female")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              gender === "Female"
                ? "bg-white text-black shadow-sm"
                : "text-blue-700"
            }`}
          >
            Female
          </button>
        </div>

        {/* Email */}
        <label className="text-sm font-semibold block mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm"
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Continue
      </button>
    </div>
  );
};

export default ProfileSetup2;
