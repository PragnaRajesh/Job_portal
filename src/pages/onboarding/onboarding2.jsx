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
    <div className="min-h-screen w-full bg-white flex flex-col relative overflow-hidden pt-safe pb-safe">
      {/* Main Content - Takes up most space */}
      <div className="flex-1 flex flex-col px-4 pt-4">
        
        {/* Top Content Box - Fixed height */}
        <div className="relative bg-gradient-to-br from-[#94E082] to-[#7BC96B] rounded-3xl p-4 border-2 border-[#CB9D73] shadow-lg h-[65vh] flex flex-col justify-start overflow-hidden">
          {/* Text Content */}
          <div className="relative z-10 mb-4">
            <h1 className="font-montserrat font-bold text-[clamp(1.3rem,5.5vw,2rem)] leading-tight text-gray-900 mb-3">
              Track your<br />
              application on<br />
              real time!
            </h1>

            <p className="font-poppins text-[clamp(0.8rem,3.2vw,1rem)] leading-relaxed text-gray-700 max-w-[250px]">
              Our team of professionals will guide you through the process and help
              you find the best career for your goals. Get started today...
            </p>
          </div>

          {/* Rocket Image - positioned according to design */}
          <div className="absolute bottom-0 right-0 w-[clamp(120px,35vw,180px)] h-[clamp(120px,35vw,180px)] translate-x-4 translate-y-4">
            <img
              src={rocketImage}
              alt="Rocket Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section - Fixed height */}
      <div className="bg-gradient-to-r from-[#94E082] to-[#7BC96B] rounded-3xl p-4 border-2 border-[#CB9D73] h-[18vh] flex flex-col justify-center mx-4 mb-4">
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-3">
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full" />
          <div className="w-6 h-2.5 bg-white rounded-full shadow-sm" />
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
                  stroke="#94E082"
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

export default OnboardingScreen2;
