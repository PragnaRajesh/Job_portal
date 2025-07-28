import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import successIcon from "../../assets/success screen.jpeg";

const SuccessScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || localStorage.getItem("userName") || "User";

  useEffect(() => {
    partyPopper();
  }, []);

  const partyPopper = () => {
    confetti({
      particleCount: 300,
      spread: 160,
      startVelocity: 60,
      angle: 60,
      origin: { x: 0.2, y: 0.7 },
      scalar: 1.4,
    });
    confetti({
      particleCount: 300,
      spread: 160,
      startVelocity: 60,
      angle: 120,
      origin: { x: 0.8, y: 0.7 },
      scalar: 1.4,
    });
  };

  return (
    <div className="h-screen bg-[#F3FCFF] px-4 pt-4 pb-6 flex flex-col justify-between items-center text-center overflow-hidden">
      

     {/* Main Content */}
<div className="flex flex-col items-center justify-start w-full mt-2 mb-auto">
  <img
    src={successIcon}
    alt="Success"
    className="w-80 h-80 object-contain mb-4"
  />

  <h2 className="text-2xl font-extrabold text-gray-800 mb-1">Hi {name}</h2>
  <p className="text-md text-gray-600">Your profile is successfully created</p>
</div>


      {/* Button */}
      <div className="w-full">
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-base font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
