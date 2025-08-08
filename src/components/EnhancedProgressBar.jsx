import React from "react";
import "../styles/signup-animations.css";
const steps = [
  { emoji: "👤", tip: "Start by creating your profile." },
  { emoji: "📝", tip: "Add basic personal details." },
  { emoji: "🎓", tip: "Provide your education background." },
  { emoji: "💼", tip: "Share your job preferences." },
  { emoji: "🧠", tip: "Describe your experience level." },
  { emoji: "📍", tip: "Tell us your preferred location." },
  { emoji: "📄", tip: "Upload your resume." },
];

const EnhancedProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  const currentStepData = steps[currentStep - 1];

  return (
    <div className="w-full px-4 py-6">
      <div
        className="relative flex flex-col items-center h-28"
        style={{ perspective: "1000px" }} // 3D depth
      >
        {/* Floating 3D tracker */}
        <div
          className="absolute top-0 w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center tracker-3d"
          style={{
            left: `calc(${progressPercentage}% - 28px)`,
            transform: `translateZ(30px) rotateY(${progressPercentage / 10}deg)`,
          }}
        >
          <div className="text-3xl">{currentStepData.emoji}</div>
        </div>

        {/* 3D Progress Bar Track */}
        <div className="relative w-full h-4 bg-gradient-to-b from-gray-300 to-gray-100 rounded-full mt-12 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 shadow-lg transition-all duration-700 ease-in-out"
            style={{
              width: `${progressPercentage}%`,
              transform: "translateZ(10px)",
            }}
          ></div>
        </div>

        {/* Helpful Tip */}
        <div className="mt-5 text-sm text-gray-600 animate-text-pulse text-center">
          {currentStepData.tip}
        </div>
      </div>
    </div>
  );
};

export default EnhancedProgressBar;
