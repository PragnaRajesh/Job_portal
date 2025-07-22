import React from 'react';
import { useNavigate } from 'react-router-dom';
import sadBoyImage from '../../assets/onboarding1.png';
import questionIcon from '../../assets/question-bubble.png';

const OnboardingScreen1 = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/onboarding2');
  };

  const handleNext = () => {
    navigate('/onboarding2');
  };

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Top Rectangle with Text */}
      <div
        className="absolute z-10 px-6"
        style={{
          top: '68px',
          left: '21px',
          width: '372px',
          height: '269px',
          backgroundColor: '#7551FF99',
          border: '1px solid #CB9D73',
          borderRadius: '16px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '38px',
            lineHeight: '56px',
            color: '#000000',
            width: '317px',
          }}
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
          className="absolute"
          style={{
            top: '150px',
            left: '135px',
            width: '158px',
            height: '105px',
            transform: 'rotate(9.65deg)',
          }}
        />
      </div>

      {/* Character Image */}
      <img
        src={sadBoyImage}
        alt="Sad Character"
        className="absolute z-20"
        style={{
          width: '460px',
          height: '498px',
          top: '216px',
          left: '10px',
        }}
      />

      {/* Description */}
      <p
        className="absolute z-20"
        style={{
          top: '542px',
          left: '21px',
          width: '281px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '24px',
          color: 'rgba(0, 0, 0, 0.78)',
        }}
      >
        Secure your dream job<br />
        with our trusted<br />
        companies..<br />
      </p>

      {/* Bottom Rectangle */}
      <div
        className="absolute z-10"
        style={{
          top: '714px',
          left: '12px',
          width: '389px',
          height: '144px',
          backgroundColor: '#9E85FF',
          borderRadius: '32px',
          border: '1px solid #CB9D73',
        }}
      />

      {/* Dots */}
      <div
        className="absolute z-30 flex gap-2"
        style={{
          top: '775px',
          left: '37px',
        }}
      >
        <div className="w-6 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute z-30 text-white text-[18px] font-semibold font-poppins"
        style={{
          top: '795px',
          left: '37px',
        }}
      >
        Skip
      </button>

      {/* Circular Next Button */}
      <div
        className="absolute z-30"
        style={{
          top: '758px',
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
