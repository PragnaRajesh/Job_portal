import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step4.png";
import experienceImg from "../../assets/experience.jpeg";
import { ArrowLeft, X } from "lucide-react";
import ExperienceDetails1 from "./experiencedetails1";
import StepImage from "../../components/StepImage";

const ExperienceDecision = () => {
  const navigate = useNavigate();
  const [hasExperience, setHasExperience] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    if (hasExperience === null) {
      alert("Please select an option.");
      return;
    }

    localStorage.setItem("hasWorkExperience", hasExperience);

    if (hasExperience) {
      setShowPopup(true);
    } else {
      navigate("/profile/location");
    }
  };

  return (
    <div className="relative h-screen bg-white pt-6 pb-24 flex flex-col justify-start overflow-hidden pt-safe pb-safe">
      {/* Main Content */}
      <div className={`relative z-0 px-4 pb-32 ${showPopup ? "blur-sm" : ""}`}>
        <div className="w-full flex justify-center mb-6">
          <StepImage
            stepNumber={4}
            src={stepIcon}
            alt="Progress Step 4"
            className="object-contain"
            animationType="progressive"
            threshold={0.2}
            delay={100}
          />
        </div>

        <div className="flex flex-col justify-start">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 mb-2" onClick={() => navigate(-1)} />
          <h2 className="text-xl font-bold text-center mb-4">Experience Details</h2>

          <img
            src={experienceImg}
            alt="Experience"
            className="w-full h-44 object-contain mb-4"
          />

          <h3 className="text-sm font-semibold mb-1">Do you have work experience?</h3>
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
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-4 left-4 right-4 z-30">
        <button
          onClick={handleNext}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-sm font-medium"
        >
          Next
        </button>
      </div>

      {/* Modal Overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center"
          onClick={() => setShowPopup(false)} // ✅ Close on background click
        >
          <div
            className="relative w-[95%] max-w-md bg-white rounded-xl shadow-xl p-4 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // ✅ Prevent close on inner click
          >
            {/* Close Icon (Optional) */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Actual Popup Content */}
            <ExperienceDetails1 />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceDecision;
