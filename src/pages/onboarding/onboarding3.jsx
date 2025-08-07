import React from 'react';
import { useNavigate } from 'react-router-dom';
import resumeImg from '../../assets/onboarding3.png';
import '../../styles/onboarding-animations.css';

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
    <div className="h-screen w-full bg-white flex flex-col relative overflow-hidden">
      {/* Top Blue Speech Box */}
      <div className="px-4 pt-8 pb-4 relative z-20 flex-shrink-0">
        <div className="bg-gradient-to-br from-[#7B9EFF] to-[#A8C5FF] rounded-3xl p-4 shadow-lg border border-[#CB9D73]/20">
          <h1 className="font-bold text-base sm:text-lg leading-[1.3] text-black tracking-tight">
            Build a graphic-<br />
            rich animated<br />
            resume to make<br />
            your profile stand<br />
            out.
          </h1>
        </div>
      </div>

      {/* Large Resume Illustration - Takes remaining space */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10 min-h-0">
        <img
          src={resumeImg}
          alt="Resume Building Illustration"
          className="w-full h-full max-w-xs sm:max-w-sm object-contain"
        />
      </div>

      {/* Bottom Navigation Card - Fixed height */}
      <div className="px-4 pb-6 relative z-20 flex-shrink-0">
        <div className="bg-gradient-to-r from-[#7B9EFF] to-[#A8C5FF] rounded-3xl px-4 py-4 shadow-xl">
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-6 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
          </div>

          {/* Skip and Get Started Buttons */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handleSkip}
              className="text-white text-base font-semibold hover:text-white/80 transition-all duration-300 flex-shrink-0"
            >
              Skip
            </button>

            <button
              onClick={handleGetStarted}
              className="bg-white text-[#7B9EFF] text-sm font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg flex-shrink-0"
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
