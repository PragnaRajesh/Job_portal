import React from 'react';
import { useNavigate } from 'react-router-dom';
import resumeImg from '../../assets/onboarding3.png';

const OnboardingScreen3 = ({ onNext, onSkip }) => {
  const navigate = useNavigate();

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      navigate('/signup1');
    }
  };

  const handleGetStarted = () => {
    if (onNext) {
      onNext();
    } else {
      navigate('/onboarding4');
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
        {/* Top Blue Rectangle with Text */}
        <div className="absolute top-6 left-4 right-4 h-72 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-3xl p-6 z-10">
          <h1 className="font-bold text-3xl leading-tight text-white mt-2 max-w-xs">
            Build a graphic-<br />
            rich animated<br />
            resume to make<br />
            your profile stand<br />
            out.
          </h1>
        </div>

        {/* Resume Illustration */}
        <div className="absolute top-52 left-0 right-0 z-20 flex justify-center">
          <img
            src={resumeImg}
            alt="Resume building illustration with papers and checklist"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-30 pb-6">
        {/* Bottom Blue Rectangle */}
        <div className="absolute bottom-0 left-4 right-4 h-28 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-t-3xl"></div>

        {/* Navigation Dots */}
        <div className="absolute bottom-16 left-8 flex gap-2">
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-6 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute bottom-8 left-8 text-white text-lg font-semibold"
        >
          Skip
        </button>

        {/* Get Started Button */}
        <button
          onClick={handleGetStarted}
          className="absolute bottom-6 right-8 bg-white text-blue-600 px-4 py-2 rounded-lg text-base font-semibold shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen3;
