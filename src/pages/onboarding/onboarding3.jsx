import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen3 = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/onboarding4');
  };

  const handleGetStarted = () => {
    navigate('/onboarding4');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex-1 flex flex-col justify-center">
          {/* Title */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-6 sm:mb-8">
              Build a graphic-rich animated resume to make your profile stand out.
            </h1>
          </div>

          {/* Resume Illustration */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2Fbf61b8556401478faddea8bc967b1244?format=webp&width=800"
              alt="Resume builder illustration"
              className="w-full max-w-xs sm:max-w-sm h-48 sm:h-60 md:h-72 object-contain"
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto">
          <div className="flex justify-between items-center px-2 sm:px-4">
            {/* Page Indicators */}
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
              <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-white rounded-full"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="text-white font-medium text-sm sm:text-base"
            >
              Skip
            </button>

            {/* Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 font-semibold py-1.5 px-4 sm:py-2 sm:px-6 rounded-full text-sm sm:text-base"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen3;
