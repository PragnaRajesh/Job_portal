import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step1.png";
import { ArrowLeft } from "lucide-react";

const ProfileSetup1 = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  const handleContinue = () => {
    if (!fullName.trim()) return alert("Please enter your name");
    localStorage.setItem("fullName", fullName);
    navigate("/profile/profilesetup2");
  };

  return (
    <div className="h-screen bg-white px-4 pt-6 pb-24 flex flex-col justify-between overflow-hidden pt-safe pb-safe">
       {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start">
                      <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" onClick={() => navigate(-1)}/>

        <h2 className="text-xl font-bold text-center mb-4">Basic Details</h2>
      {/* Step Image */}
      <div className="w-full flex justify-center -mt-0 mb-6">
        <img
          src={stepIcon}
          alt="Progress Step 1"
          className="object-contain"
        />
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

      {/* CTA Button */}
      <div className="mt-4">
        <button
          onClick={handleContinue}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-sm font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup1;
