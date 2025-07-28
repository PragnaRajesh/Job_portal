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
    <div className="w-screen h-screen flex justify-center items-center bg-white overflow-hidden">
      <div className="w-[390px] h-[844px] relative overflow-hidden bg-white scale-[0.98] md:scale-100">

        {/* Main Rectangle */}
        <div className="absolute z-10 px-6 top-16 left-4 w-[95%] max-w-sm h-[32rem] bg-[#94E082] border border-[#CB9D73] rounded-[1.875rem]">
          <h1 className="font-montserrat font-semibold text-2xl leading-snug text-gray-900 mt-4">
            Track your<br />
            application on<br />
            real time!
          </h1>

          <p className="font-poppins text-sm leading-snug text-gray-700 mt-3 max-w-xs">
            Our team of professionals will guide you through the process and help
            you find the best career for your goals. Get started today...
          </p>

          <div className="absolute top-[16rem] left-6 w-full max-w-md h-60 z-20">
            <img
              src={rocketImage}
              alt="Rocket Illustration"
              className="absolute z-20 w-140 h-140 -top-16 left-[-0.5rem] object-contain"
            />
          </div>
        </div>

        {/* Bottom Rectangle */}
        <div className="absolute z-10 bottom-12 left-3 w-[95%] max-w-sm h-32 bg-[#94E082] rounded-[2rem] border border-[#CB9D73]" />

        {/* Dots */}
        <div className="absolute z-30 flex gap-2 bottom-[5.8rem] left-9">
          <div className="w-6 h-2 bg-white/50 rounded-full" />
          <div className="w-2 h-2 bg-white/50 rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/50 rounded-full" />
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute z-30 text-white text-base font-semibold font-poppins bottom-[6.5rem] left-9"
        >
          Skip
        </button>

        {/* Circular Next Button */}
        <div className="absolute z-30 bottom-[4.5rem] right-10 w-[4.5rem] h-[4.5rem]">
          <div className="flex items-center justify-center rounded-full w-[4.5rem] h-[4.5rem] border-2 border-white bg-transparent">
            <button
              onClick={handleNext}
              className="flex items-center justify-center rounded-full shadow-md w-14 h-14 bg-white"
            >
              <svg
                width="24"
                height="24"
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
  );
};

export default OnboardingScreen2;
