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
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Top Rectangle with Text */}
      <div
        className="absolute z-10 px-6 top-16 left-5 w-[90vw] max-w-sm h-64 sm:h-72 bg-[#7551FF99] border border-[#CB9D73] rounded-2xl"
      >
        <h1
          className="font-montserrat font-medium text-3xl sm:text-4xl leading-tight text-black w-full max-w-xs"
        >
          Worried about<br />
          job feedback!<br />
          No hassle get it<br />
          here..
        </h1>

        {/* Question Bubble Icon */}
        <img
          src={questionIcon}
          alt="Question Bubble"
          className="absolute top-32 left-32 w-36 h-24 transform rotate-[9.65deg]"
        />
      </div>

      {/* Character Image */}
      <img
        src={sadBoyImage}
        alt="Sad Character"
        className="absolute z-20 w-full max-w-md h-auto top-48 left-2"
      />

      {/* Description */}
      <p
        className="absolute z-20 top-[34rem] left-5 w-72 font-poppins font-medium text-lg leading-6 text-black/80"
      >
        Secure your dream job<br />
        with our trusted<br />
        companies..<br />
      </p>

      {/* Bottom Rectangle */}
      <div
        className="absolute z-10 bottom-32 left-3 w-[95vw] max-w-sm h-36 bg-[#9E85FF] rounded-[32px] border border-[#CB9D73]"
      />

      {/* Dots */}
      <div
        className="absolute z-30 flex gap-2 bottom-20 left-9"
      >
        <div className="w-6 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute z-30 text-white text-lg font-semibold font-poppins bottom-16 left-9"
      >
        Skip
      </button>

      {/* Circular Next Button */}
      <div
        className="absolute z-30 bottom-24 right-16 w-[4.375rem] h-[4.375rem]"
      >
        {/* Outer Circle */}
        <div
          className="flex items-center justify-center rounded-full w-[4.375rem] h-[4.375rem] border-2 border-white bg-transparent"
        >
          {/* Inner Circle */}
          <button
            onClick={handleNext}
            className="flex items-center justify-center rounded-full shadow-md w-[3.25rem] h-[3.25rem] bg-white"
          >
            {/* Arrow Icon */}
            <svg
              width="24"
              height="24"
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
  );
};

export default OnboardingScreen1;
