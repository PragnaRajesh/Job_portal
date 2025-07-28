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
        className="absolute z-10 px-6"
        style={{
          top: '64px',
          left: '16px',
          width: '381px',
          height: '630px',
          backgroundColor: '#94E082',
          border: '1px solid #CB9D73',
          borderRadius: '30px',
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '38px',
            lineHeight: '56px',
            color: '#111111',
            marginTop: '5px',
            width: '317px',
          }}
        >
          Track your<br />
          application on<br />
          real time!
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            color: '#4B5563',
            marginTop: '16px',
            width: '317px',
          }}
        >
          Our team of professionals will guide you through the process and find
          the best career for your unique situation. Get started on your path
          to jobownership today...
        </p>

        {/* Image */}
        <div
          style={{
            position: 'absolute',
            top: '369px',
            left: '36px',
            width: '483px',
            height: '322px',
            zIndex: 20,
          }}
        >
          {/* Image (accurate to Figma specs) */}
<img
  src={rocketImage}
  alt="Rocket Illustration"
  className="absolute z-20"
  style={{
    width: '360px',
    height: '340px',
    top: '-70px',
    left: '0px',
    opacity: 1,
    transform: 'rotate(0deg)',
    position: 'absolute',
  }}
/>

        </div>
      </div>

      {/* Bottom Rectangle */}
      <div
        className="absolute z-10"
        style={{
          top: '714px',
          left: '13px',
          width: '389px',
          height: '144px',
          backgroundColor: '#94E082',
          borderRadius: '32px',
          border: '1px solid #CB9D73',
        }}
      />

      {/* Dots */}
      <div
        className="absolute z-30 flex gap-2"
        style={{
          top: '762px',
          left: '37px',
          width: '72px',
          height: '8px',
        }}
      >
        <div className="w-6 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute z-30 text-white text-[18px] font-semibold font-poppins"
        style={{
          top: '780px',
          left: '37px',
        }}
      >
        Skip
      </button>

      <div
  className="absolute z-30"
  style={{
    top: '750px',
    left: '298px',
    width: '70px',
    height: '70px',
  }}
>
  {/* Outer Circle */}
  <div
    className="flex items-center justify-center rounded-full"
    style={{
      width: '70px',
      height: '70px',
      border: '2px solid white',
      backgroundColor: 'transparent',
    }}
  >
    {/* Inner Circle */}
    <button
      onClick={handleNext}
      className="flex items-center justify-center rounded-full shadow-md"
      style={{
        width: '52px',
        height: '52px',
        backgroundColor: 'white',
      }}
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
