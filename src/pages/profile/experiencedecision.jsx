// src/pages/profile/experiencedecision.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExperienceDecision = () => {
  const navigate = useNavigate();
  const [hasExperience, setHasExperience] = useState(null);

  const handleNext = () => {
    if (hasExperience === null) {
      alert("Please select an option.");
      return;
    }

    localStorage.setItem("hasWorkExperience", hasExperience);
    navigate(hasExperience ? "/companydetails" : "/jobrole");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      <div>
        {/* Heading */}
        <h2 className="text-center text-base font-semibold mb-3">
          Experience Details
        </h2>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-4">
          <div className="h-1 bg-blue-700 rounded-full w-[75%]"></div>
        </div>

        {/* Illustration */}
        <img
          src="/assets/experience.jpeg" // place this image in public/assets/
          alt="Experience"
          className="w-full h-[200px] object-contain mb-6"
        />

        {/* Question */}
        <h3 className="text-sm font-semibold mb-1">
          Do you have work experience?
        </h3>
        <p className="text-xs text-gray-600 mb-4">
          Share your professional background to help us find the best opportunities for you.
        </p>

        {/* Toggle Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium border ${
              hasExperience === true
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            }`}
            onClick={() => setHasExperience(true)}
          >
            Yes
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium border ${
              hasExperience === false
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            }`}
            onClick={() => setHasExperience(false)}
          >
            No
          </button>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Next
      </button>
    </div>
  );
};

export default ExperienceDecision;
