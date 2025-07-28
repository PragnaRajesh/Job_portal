import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step4.png";
import experienceImg from "../../assets/experience.jpeg";

const ExperienceDecision = () => {
  const navigate = useNavigate();
  const [hasExperience, setHasExperience] = useState(null);

  const handleNext = () => {
    if (hasExperience === null) {
      alert("Please select an option.");
      return;
    }

    localStorage.setItem("hasWorkExperience", hasExperience);
    navigate(hasExperience ? "/profile/experiencedetails1" : "/profile/location");
  };

  return (
    <div className="h-screen bg-white px-4 pt-6 pb-24 flex flex-col justify-between overflow-hidden pt-safe pb-safe">
      
      {/* Step Image */}
      <div className="w-full flex justify-center -mt-0 mb-6">
        <img
          src={stepIcon}
          alt="Progress Step 4"
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start">
        <h2 className="text-xl font-bold text-center mb-4">Experience Details</h2>

        <img
          src={experienceImg}
          alt="Experience"
          className="w-full h-44 object-contain mb-4"
        />

        <h3 className="text-sm font-semibold mb-1">
          Do you have work experience?
        </h3>
        <p className="text-xs text-gray-600 mb-4">
          Share your professional background to help us find the best opportunities for you.
        </p>

        <div className="flex space-x-4 mb-4">
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

      {/* CTA Button */}
      <div className="mt-4">
        <button
          onClick={handleNext}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-sm font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExperienceDecision;
