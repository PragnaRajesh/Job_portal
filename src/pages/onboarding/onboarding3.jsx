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
    <div className="h-screen w-full bg-white overflow-hidden relative">
      
      {/* Top Rectangle with Text */}
      <div className="absolute top-6 left-6 right-6 bg-[#799EFF] border border-[#CB9D73] rounded-3xl p-6 z-10 h-80">
        <h1 className="font-montserrat font-semibold text-3xl leading-tight text-gray-900">
          Build a graphic-<br />
          rich animated<br />
          resume to make<br />
          your profile stand<br />
          out.
        </h1>
      </div>

      {/* Resume Image positioned to overlap with text box */}
      <div className="absolute top-40 left-0 right-0 flex justify-center z-20 h-96">
        <img
          src={resumeImg}
          alt="Resume Illustration"
          className="w-full max-w-2xl h-full object-contain"
        />
      </div>

      {/* Bottom Rectangle */}
      <div className="absolute bottom-6 left-6 right-6 bg-[#799EFF] rounded-3xl border border-[#CB9D73] p-6 z-30">
        
        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="text-white text-lg font-semibold font-poppins mb-4"
        >
          Skip
        </button>

        {/* Bottom row with dots and Get Started button */}
        <div className="flex justify-between items-center">
          {/* Dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-white/60 rounded-full" />
            <div className="w-3 h-3 bg-white/60 rounded-full" />
            <div className="w-6 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white/60 rounded-full" />
          </div>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 border border-[#CB9D73] text-base font-semibold font-poppins shadow-md rounded-lg px-6 py-3"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen3;
