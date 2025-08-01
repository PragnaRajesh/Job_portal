import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen4 = ({ onSignUp, onLogIn }) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp();
    } else {
      navigate('/signup1');
    }
  };

  const handleLogIn = () => {
    if (onLogIn) {
      onLogIn();
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-white to-gray-50 flex flex-col overflow-hidden">
      
      {/* Header Text Section - Fixed height */}
      <div className="px-6 py-4 text-center h-[22vh] flex flex-col justify-center">
        <h1 className="text-[clamp(1.8rem,7vw,2.5rem)] font-bold leading-tight text-gray-900 mb-3 font-montserrat">
          Find Your Job
        </h1>
        
        <p className="text-[clamp(0.9rem,3.8vw,1.1rem)] text-gray-600 font-medium max-w-[300px] mx-auto leading-relaxed font-poppins">
          Finding the right job can feel like a daunting task, but it's also an exciting opportunity for personal growth.
        </p>
      </div>

      {/* Character Illustration - Takes remaining flexible space */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-0">
        <div className="w-[clamp(250px,70vw,350px)] h-full max-h-[45vh] flex items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2F1fce1cfe00ad43b39d0f0e156be3f338?format=webp&width=800"
            alt="Professional Character"
            className="w-full h-auto object-contain max-h-full"
          />
        </div>
      </div>

      {/* Bottom Action Buttons - Fixed height */}
      <div className="px-6 py-4 space-y-3 h-[22vh] flex flex-col justify-center">
        <button
          onClick={handleSignUp}
          className="w-full h-[clamp(45px,11vw,55px)] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-bold rounded-2xl text-[clamp(1rem,4vw,1.15rem)] shadow-lg border-2 border-[#CB9D73] hover:shadow-xl transition-all duration-200 font-poppins"
        >
          Sign up
        </button>

        <button
          onClick={handleLogIn}
          className="w-full h-[clamp(45px,11vw,55px)] bg-white text-[#2563EB] font-bold rounded-2xl text-[clamp(1rem,4vw,1.15rem)] border-2 border-[#2563EB] hover:bg-gray-50 transition-all duration-200 font-poppins"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen4;
