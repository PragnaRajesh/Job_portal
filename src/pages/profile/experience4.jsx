import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Experience4 = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");

  const handleSubmit = () => {
    if (company) {
      localStorage.setItem("companyName", company);
      navigate("/location");
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <button onClick={() => navigate(-1)} className="mb-4 text-gray-600">
        <ArrowLeft />
      </button>
      <h2 className="text-lg font-semibold mb-4">
        Where did you work previously?
      </h2>

      <input
        type="text"
        placeholder="Enter company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 outline-none"
      />

      <button
        onClick={handleSubmit}
        disabled={!company}
        className={`w-full py-3 rounded-lg font-medium text-white ${
          company ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Experience4;
