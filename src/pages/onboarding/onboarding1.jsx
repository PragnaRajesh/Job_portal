import React from 'react';
import { useNavigate } from 'react-router-dom';
import sadBoyImage from '../../assets/onboarding1.png';
import questionIcon from '../../assets/question-bubble.png';

const OnboardingScreen1 = ({ onNext, onSkip }) => {
  const navigate = useNavigate();

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      navigate('/signup1');
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      navigate('/onboarding2');
    }
  };

  return (
    <div className="h-screen w-full max-w-sm mx-auto flex flex-col bg-white relative overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-2">
        <span className="text-lg font-semibold text-black">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
          <svg className="w-6 h-4 ml-2" viewBox="0 0 24 16" fill="none">
            <rect x="1" y="4" width="22" height="8" rx="2" stroke="black" strokeWidth="1" fill="none"/>
            <rect x="2" y="5" width="18" height="6" rx="1" fill="black"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Top Purple Rectangle with Text */}
        <div className="absolute top-6 left-4 right-4 h-72 bg-gradient-to-br from-[#A855F7] to-[#9333EA] rounded-3xl p-6 z-10">
          <h1 className="font-bold text-3xl leading-tight text-white mt-2 max-w-xs">
            Worried about<br />
            job feedback!<br />
            No hassle get it<br />
            here..
          </h1>

          {/* Question Bubble Icon */}
          <img
            src={questionIcon}
            alt="Question Bubble"
            className="absolute top-28 right-6 w-16 h-12 object-contain"
          />
        </div>

        {/* Character Image */}
        <div className="absolute top-52 left-0 right-0 z-20 flex justify-center">
          <img
            src={sadBoyImage}
            alt="Character with backpack"
            className="w-72 h-auto object-contain"
          />
        </div>

        {/* Description Text */}
        <div className="absolute bottom-44 left-0 right-0 z-20 px-6">
          <p className="text-center text-lg font-medium text-gray-700 leading-relaxed">
            Secure your dream job<br />
            with our trusted<br />
            companies..
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-30 pb-6">
        {/* Bottom Purple Rectangle */}
        <div className="absolute bottom-0 left-4 right-4 h-28 bg-gradient-to-br from-[#A855F7] to-[#9333EA] rounded-t-3xl"></div>

        {/* Navigation Dots */}
        <div className="absolute bottom-16 left-8 flex gap-2">
          <div className="w-6 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute bottom-8 left-8 text-white text-lg font-semibold"
        >
          Skip
        </button>

        {/* Next Button */}
        <div className="absolute bottom-6 right-8">
          <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#A855F7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 4l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen1;
