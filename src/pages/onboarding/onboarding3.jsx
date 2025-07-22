import React from 'react';
import { useNavigate } from 'react-router-dom';
import resumeImg from '../../assets/onboarding3.png';

const OnboardingScreen3 = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/onboarding4');
  };

  const handleGetStarted = () => {
    navigate('/onboarding4');
  };

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Top Rectangle with Text */}
      <div
        className="absolute z-10 flex items-center justify-start text-left px-6"
        style={{
          top: '48px',
          left: '30px',
          width: '365px',
          height: '298px',
          backgroundColor: '#799EFF',
          border: '1px solid #CB9D73',
          borderRadius: '16px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          fontSize: '38px',
          lineHeight: '56px',
          color: '#111111',
        }}
      >
        <p>
          Build a graphic-<br />
          rich animated<br />
          resume to make<br />
          your profile stand<br />
          out.
        </p>
      </div>

      {/* Full-Width Image Container (overlaps till Get Started button) */}
      <div
        className="absolute z-20 w-full flex justify-center"
        style={{
          top: '228px',
        }}
      >
        <img
          src={resumeImg}
          alt="Resume Illustration"
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            maxHeight: '620px',
          }}
        />
      </div>

      {/* Bottom Rectangle */}
      <div
        className="absolute z-10"
        style={{
          top: '714px',
          left: '13px',
          width: '389px',
          height: '144px',
          backgroundColor: '#799EFF',
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
        <div className="w-6 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
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

      {/* Get Started Button */}
      <button
        onClick={handleGetStarted}
        className="absolute z-30 bg-white text-[#2563EB] border border-[#CB9D73] text-[18px] font-semibold font-poppins shadow-md"
        style={{
          top: '758px',
          left: '220px',
          width: '141px',
          height: '41px',
          borderRadius: '5px',
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default OnboardingScreen3;