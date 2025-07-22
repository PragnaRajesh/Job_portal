import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen2 = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/onboarding3');
  };

  const handleNext = () => {
    navigate('/onboarding3');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-green-400 to-green-500 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex-1 flex flex-col justify-center">
          {/* Title */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-4 sm:mb-6">
              Track your application on real time!
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Our team of professionals will guide you through the process and find the best career for your unique situation. Get started on your path to jobownership today...
            </p>
          </div>

          {/* Isometric Illustration */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2F05e15b8dfa73490e8765f1b7d9685edc?format=webp&width=800"
              alt="Application tracking illustration"
              className="w-full max-w-xs sm:max-w-sm h-40 sm:h-52 md:h-64 object-contain"
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto">
          <div className="flex justify-between items-center px-2 sm:px-4">
            {/* Page Indicators */}
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
              <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-white rounded-full"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="text-white font-medium text-sm sm:text-base"
            >
              Skip
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen2;
