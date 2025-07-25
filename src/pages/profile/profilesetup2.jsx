import React, { useState, useEffect } from "react";
import stepIcon from "../../assets/step1.png";

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

    // Save details to localStorage
    localStorage.setItem("dob", dob);
    localStorage.setItem("gender", gender);
    localStorage.setItem("email", email);
    localStorage.setItem("userName", fullName);
    navigate("/profile/educationdetails");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4 pt-safe pb-safe">
      <div>
        <h2 className="text-base font-semibold text-center mt-6 mb-4">
          Basic Details
        </h2>

        {/* Step Image */}
              <div className="w-full flex justify-center -mt-0 mb-6">
                <img
                  src={stepIcon}
                  alt="Progress Step 1"
                  className="object-contain"
                />
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

        {/* Gender */}
        <label className="text-sm font-semibold block mb-2">Gender</label>
        <div className="w-full bg-blue-100 p-1 rounded-lg flex items-center justify-between mb-4">
          <button
            onClick={() => setGender("Male")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              gender === "Male" ? "bg-white text-black shadow-sm" : "text-blue-700"
            }`}
          >
            Male
          </button>
          <button
            onClick={() => setGender("Female")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              gender === "Female" ? "bg-white text-black shadow-sm" : "text-blue-700"
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
