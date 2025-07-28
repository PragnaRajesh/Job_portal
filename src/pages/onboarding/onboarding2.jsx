import React from 'react';
import { useNavigate } from 'react-router-dom';
import rocketImage from '../../assets/onboarding2.png';

const OnboardingScreen2 = ({ onNext, onSkip }) => {
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
      navigate('/onboarding3');
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
        {/* Top Green Rectangle with Text */}
        <div className="absolute top-6 left-4 right-4 h-80 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-3xl p-6 z-10">
          <h1 className="font-bold text-3xl leading-tight text-white mt-2 max-w-xs">
            Track your<br />
            application on<br />
            real time!
          </h1>

          <p className="font-normal text-sm leading-relaxed text-white/90 mt-4 max-w-sm">
            Our team of professionals will guide you through the process and find the best career for your unique situation. Get started on your path to jobownership today...
          </p>
        </div>

        {/* Isometric Illustration */}
        <div className="absolute top-64 left-0 right-0 z-20 flex justify-center">
          <img
            src={rocketImage}
            alt="Isometric application tracking illustration"
            className="w-80 h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-30 pb-6">
        {/* Bottom Green Rectangle */}
        <div className="absolute bottom-0 left-4 right-4 h-28 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-t-3xl"></div>

        {/* Navigation Dots */}
        <div className="absolute bottom-16 left-8 flex gap-2">
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-6 h-2 bg-white rounded-full"></div>
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
                stroke="#22C55E"
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

export default OnboardingScreen2;
