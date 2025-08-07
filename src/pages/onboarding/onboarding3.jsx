import React from 'react';
import { useNavigate } from 'react-router-dom';
// import resumeImg from '../../assets/onboarding3.png';
import '../../styles/onboarding-animations.css';
import onboarding33Img from '../../assets/onboarding33.png';

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
      <div className="px-4 pt-12 pb-8 relative z-20">
        <div className="bg-gradient-to-br from-[#7B9EFF] to-[#A8C5FF] rounded-3xl p-6 shadow-lg border border-[#CB9D73]/20">
          <h1 className="font-bold text-[1.375rem] leading-[1.6] text-black tracking-tight">
            Build a graphic-<br />
            rich animated<br />
            resume to make<br />
            your profile stand<br />
            out.
          </h1>
        </div>
      </div>

      {/* Large Resume Illustration - Overlapping */}
      <div className="absolute top-32 left-0 right-0 bottom-20 flex items-center justify-center z-40">
        <img
          src={onboarding33Img}
          alt="Resume Building Illustration"
          className="w-[95vw] h-auto max-h-[75vh] object-contain"
        />
      </div>

      {/* Bottom Navigation Card - Pinned to bottom */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="bg-gradient-to-r from-[#7B9EFF] to-[#A8C5FF] rounded-3xl px-6 py-6 m-2 shadow-xl">
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-8 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
          </div>

          {/* Skip and Get Started Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleSkip}
              className="text-white text-lg font-semibold hover:text-white/80 transition-all duration-300"
            >
              Skip
            </button>

            <button
              onClick={handleGetStarted}
              className="bg-white text-[#7B9EFF] text-base font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
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
