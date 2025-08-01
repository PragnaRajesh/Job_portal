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
    <div className="h-screen w-full bg-white flex flex-col relative overflow-hidden">
      {/* Main Content - Takes up most space */}
      <div className="flex-1 flex flex-col px-4 pt-4">
        
        {/* Top Text Box - Fixed height */}
        <div className="relative bg-gradient-to-br from-[#7551FF] to-[#7551FF99] rounded-3xl p-4 border-2 border-[#CB9D73] shadow-lg h-[28vh] flex items-center">
          <div className="relative z-10">
            <h1 className="font-montserrat font-bold text-[clamp(1.2rem,5.5vw,2rem)] leading-tight text-white">
              Worried about<br />
              job feedback!<br />
              <span className="text-white/90">No hassle get it</span><br />
              <span className="text-white/90">here..</span>
            </h1>
          </div>

          {/* Question Bubble - positioned to match design */}
          <div className="absolute -top-1 -right-1 w-[clamp(60px,15vw,85px)] h-[clamp(40px,10vw,60px)] z-20">
            <img
              src={questionIcon}
              alt="Question Bubble"
              className="w-full h-full object-contain transform rotate-[15deg]"
            />
          </div>
        </div>

        {/* Character Image - Flexible space */}
        <div className="flex-1 flex items-center justify-center relative min-h-0">
          <div className="w-[clamp(250px,65vw,350px)] h-full max-h-[35vh] flex items-center justify-center">
            <img
              src={sadBoyImage}
              alt="Worried Character"
              className="w-full h-auto object-contain max-h-full"
            />
          </div>
        </div>

        {/* Description Text - Fixed space */}
        <div className="text-center px-2 h-[10vh] flex items-center justify-center">
          <p className="font-poppins font-medium text-[clamp(0.9rem,3.8vw,1.1rem)] leading-tight text-gray-800">
            Secure your dream job<br />
            with our trusted<br />
            companies..
          </p>
        </div>
      </div>

      {/* Bottom Navigation Section - Fixed height */}
      <div className="bg-gradient-to-r from-[#9E85FF] to-[#7551FF] rounded-t-[2rem] p-4 border-t-2 border-[#CB9D73] h-[18vh] flex flex-col justify-center">
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-3">
          <div className="w-6 h-2.5 bg-white rounded-full shadow-sm" />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full" />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full" />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full" />
        </div>

        {/* Skip and Next Button Container */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="text-white text-[clamp(0.9rem,3.5vw,1.1rem)] font-semibold font-poppins hover:text-white/80 transition-colors"
          >
            Skip
          </button>

          {/* Circular Next Button */}
          <div className="w-[clamp(55px,14vw,70px)] h-[clamp(55px,14vw,70px)]">
            <div className="flex items-center justify-center rounded-full w-full h-full border-2 border-white bg-white/10 backdrop-blur-sm">
              <button
                onClick={handleNext}
                className="flex items-center justify-center rounded-full shadow-lg w-[85%] h-[85%] bg-white hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  className="w-[clamp(18px,4.5vw,24px)] h-[clamp(18px,4.5vw,24px)]"
                  fill="none"
                  stroke="#9E85FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen1;