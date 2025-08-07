import React from "react";
// import "../onboarding-animations.css"; // Ensure this file exists or remove the import if not used

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
      <div className="relative flex flex-col items-center h-24">
        {/* Floating tracker box with emoji */}
        <div
          className="absolute top-0 w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center transition-all duration-700 ease-in-out"
          style={{ left: `calc(${progressPercentage}% - 24px)` }}
        >
          <div className="text-2xl animate-emoji-3d">{currentStepData.emoji}</div>
        </div>

        {/* Animated Progress Bar */}
        <div className="relative w-full h-3 bg-gray-200 rounded-full mt-10 overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Helpful tip below */}
        <div className="mt-4 text-sm text-gray-600 animate-text-pulse text-center">
          {currentStepData.tip}
        </div>
      </div>
    </div>
  );
};

export default EnhancedProgressBar;
