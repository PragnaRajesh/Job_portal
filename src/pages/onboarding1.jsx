import React from 'react';
import { useNavigate } from 'react-router-dom';
import onboardingImage from '../assets/onboarding1.jpeg'; 

const Onboarding1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-lg text-center relative">
        {/* Language Selector */}
        <div className="absolute top-4 right-4">
          <select className="border border-blue-400 text-sm rounded-full px-3 py-1 outline-none">
            <option>Kannada</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Illustration */}
        <img
          src={onboardingImage}
          alt="Illustration"
          className="w-full h-60 object-contain mb-6 mt-6"
        />

        {/* Heading */}
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Find Your Job</h1>

        {/* Subtext */}
        <p className="text-sm text-gray-500 mb-8">
          Finding the right job can feel like a daunting task, but it’s also an exciting
          opportunity for personal.
        </p>

        {/* Buttons */}
        <button
          onClick={() => navigate('/signup')}
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full mb-4"
        >
          Sign up
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full border border-blue-400 text-black font-semibold py-3 rounded-full"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Onboarding1;
