import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/onboarding4.jpeg';

const Onboarding4 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-sm text-center text-white relative bg-black bg-opacity-40 rounded-3xl p-6">
        {/* Language Selector */}
        <div className="absolute top-4 right-4">
          <select className="border border-white bg-white/20 text-sm text-white rounded-full px-3 py-1 outline-none">
            <option className="text-black">Kannada</option>
            <option className="text-black">English</option>
            <option className="text-black">Hindi</option>
          </select>
        </div>

        {/* Spacer for visual balance */}
        <div className="mt-32"></div>

        {/* Heading */}
        <h1 className="text-xl font-semibold mb-2">Find Your Job</h1>

        {/* Description */}
        <p className="text-sm text-white mb-8">
          Finding the right job can feel like a daunting task, but it’s also an exciting
          opportunity for personal.
        </p>

        {/* Buttons */}
        <button
          onClick={() => navigate('/signup')}
          className="w-full bg-blue-400 text-white font-semibold py-3 rounded-full mb-4"
        >
          Sign up
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full border border-blue-400 text-white font-semibold py-3 rounded-full"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Onboarding4;
