import React, { useState, useEffect } from "react";
import stepIcon from "../../assets/step1.png";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StepImage from "../../components/StepImage";
import { useUser } from "../../contexts/UserContext";
import EnhancedProgressBar from "../../components/EnhancedProgressBar";

const ProfileSetup2 = () => {
  const navigate = useNavigate();
  const { user, updateBasicInfo } = useUser();

  const [fullName, setFullName] = useState(user.fullName || "");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState(user.email || "");

  const handleContinue = () => {
    if (!dob || !gender || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Save details to UserContext
    updateBasicInfo({
      fullName: fullName.trim(),
      email: email.trim(),
      // You can add dob and gender to the user state if needed
    });

    navigate("/profile/educationdetails");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex flex-col justify-between p-4 pt-safe pb-safe">
      <div>
        <div className="flex items-center mt-6 mb-4">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-gray-600 transition-colors" onClick={() => navigate(-1)} />
          <h2 className="text-base font-semibold text-center flex-1">Basic Details</h2>
        </div>

        {/* Enhanced Progress Bar */}
        <EnhancedProgressBar currentStep={2} totalSteps={7} />

        {/* Step Image */}
              <div className="w-full flex justify-center -mt-0 mb-6">
                <StepImage
                  stepNumber={1}
                  src={stepIcon}
                  alt="Progress Step 1"
                  className="object-contain"
                  animationType="progressive"
                  threshold={0.2}
                  delay={200}
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
