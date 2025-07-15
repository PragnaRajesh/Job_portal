import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import appliedImage from "../../assets/Applied.png";


const Verified = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <img src={appliedImage} alt="applied" className="w-56 mb-6" />
      <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
      <h2 className="text-xl font-bold text-gray-800 mb-2">Congratulations!</h2>
      <p className="text-sm text-gray-600 mb-8">
        You have applied for this job successfully.
      </p>

      <button
        onClick={() => navigate("/applications")}
        className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-sm"
      >
        VIEW APPLICATION
      </button>

      <button
        onClick={() => navigate("../pages/home")}
        className="mt-3 text-sm text-blue-600 font-medium"
      >
        Go to home
      </button>
    </div>
  );
};

export default Verified;
