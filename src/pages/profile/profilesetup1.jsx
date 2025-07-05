import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetup1 = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  const handleContinue = () => {
    if (!fullName.trim()) return alert("Please enter your name");
    localStorage.setItem("fullName", fullName);
    navigate("/profile-setup-2");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      {/* Header */}
      <div>
        <h2 className="text-base font-semibold mb-4">Basic Details</h2>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div className="h-2 bg-blue-700 rounded-full w-1/5"></div>
        </div>

        <label className="text-sm font-semibold block mb-2">
          Tell us your full name
        </label>
        <input
          type="text"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleContinue}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Continue
      </button>
    </div>
  );
};

export default ProfileSetup1;
