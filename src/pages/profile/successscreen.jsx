import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const SuccessScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "User";

  useEffect(() => {
    partyPopper();
  }, []);

  const partyPopper = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }, 
      colors: ['#bb0000', '#ffffff', '#0077ff', '#00ffcc'],
    });

    confetti({
      particleCount: 200,
      spread: 120,
      startVelocity: 45,
      angle: 90,
      origin: { x: 0.5, y: 1 },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 relative overflow-hidden">
      <div className="bg-blue-100 rounded-full p-6 mb-6">
        <CheckCircle className="text-blue-600 w-16 h-16" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">Hi {name}</h2>
      <p className="text-gray-600 mb-10">Your Registration Is Successful!!</p>
      <button
        className="bg-blue-700 text-white rounded-full px-8 py-3 font-medium shadow hover:bg-blue-800 transition"
        onClick={() => navigate("/home")}
      >
        Continue
      </button>
    </div>
  );
};

export default SuccessScreen;
