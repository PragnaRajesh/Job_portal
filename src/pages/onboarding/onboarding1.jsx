import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen1 = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/onboarding2');
  };

  const handleNext = () => {
    navigate('/onboarding2');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-400 to-purple-600 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex-1 flex flex-col justify-center">
          {/* Speech Bubble and Text */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-4">
              Worried about job feedback!
              <br />
              No hassle get it here..
            </h1>
            
            {/* Speech Bubble */}
            <div className="relative inline-block mb-3 sm:mb-4">
              <div className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black">
                <span className="text-black text-lg sm:text-xl font-bold">?</span>
              </div>
              <div className="absolute top-7 sm:top-8 left-5 sm:left-6 w-0 h-0 border-l-6 border-r-6 border-t-6 sm:border-l-8 sm:border-r-8 sm:border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>

          {/* Character Image */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2F89f35515350440af8d4ac139fc0f0e58?format=webp&width=800"
              alt="3D Character with backpack"
              className="w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-black text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            Secure your dream job with our trusted companies..
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto">
          <div className="flex justify-between items-center px-2 sm:px-4">
            {/* Page Indicators */}
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-white rounded-full"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
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
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen1;
