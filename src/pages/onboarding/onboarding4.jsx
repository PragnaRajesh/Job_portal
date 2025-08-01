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
    <div className="h-screen w-full bg-white flex flex-col items-center overflow-hidden relative">
      
      {/* Text Content */}
      <div className="text-center px-6 z-10 w-full mt-16">
        <h1
          className="text-4xl font-semibold leading-tight text-black"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.5px'
          }}
        >
          Find Your Job
        </h1>

        <p
          className="mt-6 text-lg text-[#A7A7A7] font-medium max-w-sm mx-auto leading-relaxed"
          style={{
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Finding the right job can feel like a daunting task, but it's also an exciting opportunity for personal.
        </p>
      </div>

      {/* Character Illustration */}
      <div className="flex-1 w-full flex justify-center items-center z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2F1fce1cfe00ad43b39d0f0e156be3f338?format=webp&width=800"
          alt="Professional character"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col items-center gap-4 px-6 pb-12 z-10">
        <button
          onClick={handleSignUp}
          className="w-full max-w-sm text-white font-semibold rounded-2xl text-lg border shadow-md py-4"
          style={{
            backgroundColor: '#2563EB',
            borderColor: '#CB9D73'
          }}
        >
          Sign up
        </button>

        <button
          onClick={handleLogIn}
          className="w-full max-w-sm text-black font-semibold rounded-2xl text-lg border py-4"
          style={{ borderColor: '#2563EB' }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen4;
