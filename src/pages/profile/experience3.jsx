import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Experience3 = () => {
  const navigate = useNavigate();
  const [years, setYears] = useState("");

  const handleNext = () => {
    if (years) {
      localStorage.setItem("yearsOfExperience", years);
      navigate("/experience4");
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <button onClick={() => navigate(-1)} className="mb-4 text-gray-600">
        <ArrowLeft />
      </button>
      <h2 className="text-lg font-semibold mb-4">Years of Experience</h2>

      <input
        type="number"
        placeholder="Enter number of years"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 outline-none"
      />

      <button
        onClick={handleNext}
        disabled={!years}
        className={`w-full py-3 rounded-lg font-medium text-white ${
          years ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Experience3;
