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
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-between overflow-hidden">
      {/* Text Content */}
      <div className="pt-[10vh] text-center px-6 z-10 w-full">
        <h1
          className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-4xl font-semibold leading-snug text-black"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.5px'
          }}
        >
          Find Your Job
        </h1>

        <p
          className="mt-4 text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-xl text-[#A7A7A7] font-medium max-w-[90%] mx-auto leading-relaxed"
          style={{
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Finding the right job can feel like a daunting task, but it’s also an exciting opportunity for personal.
        </p>
      </div>

      {/* Bigger Character Illustration */}
      <div className="relative w-full flex justify-center z-0 mt-[-5vh] mb-[-10vh]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2F1fce1cfe00ad43b39d0f0e156be3f338?format=webp&width=800"
          alt="Professional character"
          className="w-[105vw] max-w-lg object-contain"
        />
      </div>

      {/* Buttons */}
      <div className="relative z-10 w-full flex flex-col items-center gap-4 px-6 pb-[5vh]">
        <button
          onClick={handleSignUp}
          className="w-full max-w-sm h-[12vw] max-h-12 text-white font-semibold rounded-[1.25rem] text-[4vw] sm:text-base border shadow-md"
          style={{
            backgroundColor: '#2563EB',
            borderColor: '#CB9D73'}}>
          Sign up
        </button>

        <button
          onClick={handleLogIn}
          className="w-full max-w-sm h-[12vw] max-h-12 text-black font-semibold rounded-[1.25rem] text-[4vw] sm:text-base border"
          style={{ borderColor: '#2563EB' }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen4;
