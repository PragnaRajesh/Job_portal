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
    <div className="min-h-screen w-full bg-white flex flex-col relative overflow-hidden">
      {/* Top Blue Speech Box */}
      <div className="px-4 pt-safe relative z-20 flex-shrink-0" style={{ paddingTop: 'max(env(safe-area-inset-top), 3rem)' }}>
        <div className="mt-4 mb-6">
          <div className="bg-gradient-to-br from-[#7B9EFF] to-[#A8C5FF] rounded-3xl p-4 sm:p-6 shadow-lg border border-[#CB9D73]/20">
            <h1 className="font-bold text-lg sm:text-xl md:text-[1.375rem] leading-[1.4] sm:leading-[1.6] text-black tracking-tight">
              Build a graphic-<br />
              rich animated<br />
              resume to make<br />
              your profile stand<br />
              out.
            </h1>
          </div>
        </div>
      </div>

      {/* Large Resume Illustration - Centered and Responsive */}
      <div className="flex-1 flex items-center justify-center px-4 py-4 relative z-10 min-h-0">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-full flex items-center justify-center">
          <img
            src={resumeImg}
            alt="Resume Building Illustration"
            className="w-full h-auto max-h-full object-contain"
            style={{
              maxHeight: 'calc(100vh - 280px)', // Account for header and footer space
              minHeight: '200px'
            }}
          />
        </div>
      </div>

      {/* Bottom Navigation Card - Fixed to bottom with safe area */}
      <div className="flex-shrink-0 pb-safe relative z-20" style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 1.5rem)' }}>
        <div className="bg-gradient-to-r from-[#7B9EFF] to-[#A8C5FF] rounded-3xl px-4 sm:px-6 py-4 sm:py-6 mx-4 shadow-xl">
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
          </div>

          {/* Skip and Get Started Buttons */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handleSkip}
              className="text-white text-base sm:text-lg font-semibold hover:text-white/80 transition-all duration-300 min-w-0 flex-shrink-0"
            >
              Skip
            </button>

            <button
              onClick={handleGetStarted}
              className="bg-white text-[#7B9EFF] text-sm sm:text-base font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg flex-shrink-0"
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
