import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Experience2 = () => {
  const navigate = useNavigate();
  const [jobRole, setJobRole] = useState("");

  const handleNext = () => {
    if (jobRole) {
      localStorage.setItem("jobRole", jobRole);
      navigate("/experience3");
    }
  };

  const jobRoles = [
    "Chef",
    "Housekeeping",
    "Construction",
    "Beautician",
    "Driver",
    "Sales",
    "Security",
    "Other",
  ];

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <button onClick={() => navigate(-1)} className="mb-4 text-gray-600">
        <ArrowLeft />
      </button>
      <h2 className="text-lg font-semibold mb-4">What was your job role?</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {jobRoles.map((role, idx) => (
          <button
            key={idx}
            onClick={() => setJobRole(role)}
            className={`py-2 px-4 rounded-full text-sm border ${
              jobRole === role
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!jobRole}
        className={`w-full py-3 rounded-lg font-medium text-white ${
          jobRole ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Experience2;
