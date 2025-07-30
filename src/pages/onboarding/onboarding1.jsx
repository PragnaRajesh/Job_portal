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
    <div className="w-full h-screen flex justify-center items-center bg-white overflow-hidden">
      <div className="w-[390px] h-[844px] relative overflow-hidden bg-white">
        {/* Top Rectangle with Text */}
        <div
          className="absolute z-2 px-6 sm:px-8 top-6 sm:top-20 md:top-24 left-5 sm:left-8 md:left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-[93%] sm:w-[85%] md:w-[75%] lg:w-[60%] max-w-sm sm:max-w-md md:max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 bg-[#7551FF99] border border-[#CB9D73] rounded-2xl"
        >
          <h1 className="font-montserrat font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black w-full max-w-xs sm:max-w-sm md:max-w-md pt-2 sm:pt-4">
            Worried about<br />
            job feedback!<br />
            No hassle get it<br />
            here..
          </h1>

          {/* Question Bubble Icon */}
          <img
            src={questionIcon}
            alt="Question Bubble"
            className="absolute top-32 sm:top-36 md:top-40 left-32 sm:left-36 md:left-40 w-36 sm:w-40 md:w-44 lg:w-48 h-24 sm:h-28 md:h-32 lg:h-36 transform rotate-[9.65deg]"
          />
        </div>

        {/* Sad Character Image (slimmed) */}
        <img
          src={sadBoyImage}
          alt="Sad Character"
          className="absolute z-5 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto  sm:top-60 md:top-60 lg:top-80 left-2 sm:left-4 md:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 scale-x-90"/>


        {/* Description (left aligned) */}
        <p className="absolute z-20 top-[34rem] sm:top-[38rem] md:top-[42rem] lg:top-[46rem] left-5 sm:left-8 md:left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-72 sm:w-80 md:w-96 lg:w-auto font-poppins font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-black/80 text-left lg:text-left">
          Secure your dream job<br />
          with our trusted<br />
          companies..<br />
        </p>

        {/* Bottom Rectangle */}
        <div className="absolute z-10 bottom-14 sm:bottom-20 md:bottom-24 lg:bottom-28 left-3 sm:left-6 md:left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] max-w-sm sm:max-w-md md:max-w-lg h-36 sm:h-40 md:h-44 lg:h-48 bg-[#9E85FF] rounded-[2rem] border border-[#CB9D73]" >
          
        </div>

        {/* Dots (moved up) */}
        <div className="absolute z-30 flex gap-2 sm:gap-3 bottom-28 sm:bottom-32 md:bottom-36 lg:bottom-40 left-9 sm:left-12 md:left-16 lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div className="w-6 h-2 sm:w-8 sm:h-3 bg-white rounded-full" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/50 rounded-full" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/50 rounded-full" />
        </div>

        {/* Skip Button (moved up) */}
        <button
          onClick={handleSkip}
          className="absolute z-30 text-white text-lg sm:text-xl md:text-2xl font-semibold font-poppins bottom-32 sm:bottom-36 md:bottom-40 lg:bottom-44 left-9 sm:left-12 md:left-16 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-x-16"
        >
          Skip
        </button>

        {/* Circular Next Button (moved up) */}
        <div className="absolute z-30 bottom-[6.5rem] sm:bottom-[7.5rem] md:bottom-[8.5rem] lg:bottom-[9.5rem] right-10 sm:right-14 md:right-20 lg:right-24 w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 md:w-24 md:h-24">
          {/* Outer Circle */}
          <div className="flex items-center justify-center rounded-full w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-white bg-transparent">
            {/* Inner Circle */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center rounded-full shadow-md w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white hover:bg-gray-100 transition-colors"
            >
              {/* Arrow Icon */}
              <svg
                width="24"
                height="24"
                className="sm:w-7 sm:h-7 md:w-8 md:h-8"
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
  );
};

export default OnboardingScreen1;
