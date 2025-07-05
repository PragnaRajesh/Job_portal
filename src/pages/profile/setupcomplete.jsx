import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SetupComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-white text-center">
      <CheckCircle size={64} className="text-green-500 mb-4" />
      <h1 className="text-xl font-bold mb-2">Profile Setup Complete!</h1>
      <p className="text-gray-600 mb-6">You're all set to explore job opportunities.</p>
      <button
        onClick={() => navigate("/home")}
        className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SetupComplete;
