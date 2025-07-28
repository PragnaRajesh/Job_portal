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
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Top Rectangle with Text */}
      <div
        className="absolute z-10 flex items-center justify-start text-left px-6 top-12 left-7 w-[88vw] max-w-sm h-72 sm:h-80 bg-[#799EFF] border border-[#CB9D73] rounded-2xl font-montserrat font-medium text-3xl sm:text-4xl leading-tight text-[#111111]"
      >
        <p>
          Build a graphic-<br />
          rich animated<br />
          resume to make<br />
          your profile stand<br />
          out.
        </p>
      </div>

      {/* Full-Width Image Container (overlaps till Get Started button) */}
      <div
        className="absolute z-20 w-full flex justify-center top-56"
      >
        <img
          src={resumeImg}
          alt="Resume Illustration"
          className="w-full max-w-2xl h-auto max-h-[38.75rem]"
        />
      </div>

      {/* Bottom Rectangle */}
      <div
        className="absolute z-10 bottom-32 left-3 w-[95vw] max-w-sm h-36 bg-[#799EFF] rounded-[32px] border border-[#CB9D73]"
      />

      {/* Dots */}
      <div
        className="absolute z-30 flex gap-2 bottom-20 left-9 w-[4.5rem] h-2"
      >
        <div className="w-6 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute z-30 text-white text-lg font-semibold font-poppins bottom-16 left-9"
      >
        Skip
      </button>

      {/* Get Started Button */}
      <button
        onClick={handleGetStarted}
        className="absolute z-30 bg-white text-[#2563EB] border border-[#CB9D73] text-lg font-semibold font-poppins shadow-md bottom-24 right-14 w-36 h-10 rounded-md"
      >
        Get Started
      </button>
    </div>
  );
};

export default OnboardingScreen3;
