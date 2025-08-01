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
    <div className="h-screen w-full bg-white flex flex-col relative overflow-hidden">
      {/* Main Content - Takes up most space */}
      <div className="flex-1 flex flex-col px-4 pt-4">
        
        {/* Top Text Box - Fixed height */}
        <div className="bg-gradient-to-br from-[#799EFF] to-[#6B8AFF] rounded-3xl p-4 border-2 border-[#CB9D73] shadow-lg h-[25vh] flex items-center">
          <h1 className="font-montserrat font-bold text-[clamp(1.1rem,4.8vw,1.7rem)] leading-tight text-white">
            Build a graphic-<br />
            rich animated<br />
            resume to make<br />
            your profile stand<br />
            out.
          </h1>
        </div>

        {/* Resume Illustration - Flexible space */}
        <div className="flex-1 flex items-center justify-center min-h-0 py-2">
          <div className="w-[clamp(280px,75vw,380px)] h-full max-h-[40vh] flex items-center justify-center">
            <img
              src={resumeImg}
              alt="Resume Building Illustration"
              className="w-full h-auto object-contain max-h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section - Fixed height */}
      <div className="bg-gradient-to-r from-[#799EFF] to-[#6B8AFF] rounded-t-[2rem] p-4 border-t-2 border-[#CB9D73] h-[18vh] flex flex-col justify-center">
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-3">
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full" />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full" />
          <div className="w-6 h-2.5 bg-white rounded-full shadow-sm" />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full" />
        </div>

        {/* Skip and Get Started Button Container */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="text-white text-[clamp(0.9rem,3.5vw,1.1rem)] font-semibold font-poppins hover:text-white/80 transition-colors"
          >
            Skip
          </button>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="bg-white text-[#799EFF] border-2 border-white text-[clamp(0.9rem,3.5vw,1rem)] font-bold font-poppins shadow-lg px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen3;
