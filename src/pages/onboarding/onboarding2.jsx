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
    <div className="h-screen w-full bg-white overflow-hidden relative">

      {/* Main Rectangle */}
      <div className="absolute top-6 left-6 right-6 bg-[#94E082] border border-[#CB9D73] rounded-3xl p-6 z-10" style={{height: '32rem'}}>
        <h1 className="font-montserrat font-semibold text-3xl leading-tight text-gray-900">
          Track your<br />
          application on<br />
          real time!
        </h1>

        <p className="font-poppins text-sm leading-relaxed text-gray-700 mt-4 max-w-xs">
          Our team of professionals will guide you through the process and help
          you find the best career for your goals. Get started today...
        </p>

        {/* Rocket Image positioned within the main rectangle */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center h-64">
          <img
            src={rocketImage}
            alt="Rocket Illustration"
            className="w-full max-w-sm h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom Rectangle */}
      <div className="absolute bottom-6 left-6 right-6 bg-[#94E082] rounded-3xl border border-[#CB9D73] p-6 z-20">
        
        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="text-white text-lg font-semibold font-poppins mb-4"
        >
          Skip
        </button>

        {/* Bottom row with dots and next button */}
        <div className="flex justify-between items-center">
          {/* Dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-white/60 rounded-full" />
            <div className="w-6 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white/60 rounded-full" />
            <div className="w-3 h-3 bg-white/60 rounded-full" />
          </div>

          {/* Circular Next Button */}
          <div className="w-16 h-16">
            <div className="flex items-center justify-center rounded-full w-full h-full border-2 border-white bg-transparent">
              <button
                onClick={handleNext}
                className="flex items-center justify-center rounded-full shadow-md bg-white w-12 h-12"
              >
                <svg
                  width="24"
                  height="24"
                  className="w-6 h-6"
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
