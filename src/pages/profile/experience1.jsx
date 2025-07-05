import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Experience1 = () => {
  const navigate = useNavigate();

  const handleChoice = (hasExperience) => {
    if (hasExperience === "yes") {
      navigate("/experience2");
    } else {
      navigate("/location");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col justify-between">
      <div>
        <button
          className="mb-6 text-gray-600"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </button>
        <h2 className="text-lg font-semibold mb-2">Experience Details</h2>
        <p className="text-sm text-gray-600 mb-6">
          Do you have work experience?
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => handleChoice("yes")}
            className="flex-1 bg-blue-600 text-white py-2 rounded-full"
          >
            Yes
          </button>
          <button
            onClick={() => handleChoice("no")}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience1;
