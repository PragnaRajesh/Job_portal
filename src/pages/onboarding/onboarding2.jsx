import React from 'react';
import { useNavigate } from 'react-router-dom';
import rocketImage from '../../assets/onboarding2.png'; // use your local image

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
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Main Rectangle */}
      <div
        className="absolute z-10 px-6 top-16 left-4 w-[92vw] max-w-sm h-[39rem] bg-[#94E082] border border-[#CB9D73] rounded-[30px]"
      >
        {/* Heading */}
        <h1
          className="font-montserrat font-medium text-3xl sm:text-4xl leading-tight text-[#111111] mt-1 w-full max-w-xs"
        >
          Track your<br />
          application on<br />
          real time!
        </h1>

        {/* Description */}
        <p
          className="font-poppins font-normal text-lg leading-7 text-gray-600 mt-4 w-full max-w-xs"
        >
          Our team of professionals will guide you through the process and find
          the best career for your unique situation. Get started on your path
          to jobownership today...
        </p>

        {/* Image */}
        <div
          className="absolute top-80 left-9 w-[30rem] h-80 z-20"
        >
          {/* Image (accurate to Figma specs) */}
<img
  src={rocketImage}
  alt="Rocket Illustration"
  className="absolute z-20 w-[22.5rem] h-[21.25rem] -top-[4.375rem] left-0 opacity-100 transform rotate-0"
/>

        </div>
      </div>

      {/* Bottom Rectangle */}
      <div
        className="absolute z-10 bottom-32 left-3 w-[95vw] max-w-sm h-36 bg-[#94E082] rounded-[32px] border border-[#CB9D73]"
      />

      {/* Dots */}
      <div
        className="absolute z-30 flex gap-2 bottom-20 left-9 w-[4.5rem] h-2"
      >
        <div className="w-6 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute z-30 text-white text-lg font-semibold font-poppins bottom-16 left-9"
      >
        Skip
      </button>

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
  );
};

export default OnboardingScreen2;
