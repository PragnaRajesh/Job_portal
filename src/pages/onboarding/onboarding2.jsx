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
    <div className="min-h-screen w-full bg-white relative overflow-y-auto pb-safe">
      {/* Main Rectangle */}
      <div
        className="absolute z-10 px-6 top-16 left-4 w-[95%] max-w-sm h-[39rem] bg-[#94E082] border border-[#CB9D73] rounded-[1.875rem]"
      >
        {/* Heading */}
        <h1
          className="font-montserrat font-medium text-3xl md:text-4xl leading-tight text-gray-900 mt-1 w-full max-w-xs"
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
          className="absolute top-[23rem] left-9 w-full max-w-md h-80 z-20"
        >
          {/* Image (accurate to Figma specs) */}
<img
  src={rocketImage}
  alt="Rocket Illustration"
  className="absolute z-20 w-90 h-85 -top-16 left-0 opacity-100 transform rotate-0"
/>

        </div>
      </div>

      {/* Bottom Rectangle */}
      <div
        className="absolute z-10 bottom-16 left-3 w-[95%] max-w-sm h-36 bg-[#94E082] rounded-[2rem] border border-[#CB9D73]"
      />

      {/* Dots */}
      <div
        className="absolute z-30 flex gap-2 bottom-[6.5rem] left-9 w-18 h-2"
      >
        <div className="w-6 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute z-30 text-white text-lg font-semibold font-poppins bottom-20 left-9"
      >
        Skip
      </button>

      <div
  className="absolute z-30 bottom-[4.25rem] right-20 w-[4.5rem] h-[4.5rem]"
>
  {/* Outer Circle */}
  <div
    className="flex items-center justify-center rounded-full w-[4.5rem] h-[4.5rem] border-2 border-white bg-transparent"
  >
    {/* Inner Circle */}
    <button
      onClick={handleNext}
      className="flex items-center justify-center rounded-full shadow-md w-14 h-14 bg-white"
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
