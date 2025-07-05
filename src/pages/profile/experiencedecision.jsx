import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExperienceDecision = () => {
  const navigate = useNavigate();
  const [hasExperience, setHasExperience] = useState(null);

  const handleNext = () => {
    if (hasExperience === 'yes') {
      navigate('/experience1');
    } else if (hasExperience === 'no') {
      navigate('/location');
    }
  };

  return (
    <div className="p-6 min-h-screen bg-white">
      <h2 className="text-lg font-bold mb-6">Experience Details</h2>

      <p className="text-sm font-semibold mb-4">
        Do you have work experience?
      </p>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setHasExperience('yes')}
          className={`px-6 py-2 rounded-full border ${
            hasExperience === 'yes'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => setHasExperience('no')}
          className={`px-6 py-2 rounded-full border ${
            hasExperience === 'no'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          No
        </button>
      </div>

      <button
        onClick={handleNext}
        disabled={!hasExperience}
        className={`w-full py-3 rounded-lg font-medium text-white ${
          hasExperience ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default ExperienceDecision;
