import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Location = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (location) {
      localStorage.setItem("jobLocation", location);
      navigate("/setup-complete");
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <button onClick={() => navigate(-1)} className="mb-4 text-gray-600">
        <ArrowLeft />
      </button>
      <h2 className="text-lg font-semibold mb-4">Preferred Job Location</h2>

      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 outline-none"
      />

      <button
        onClick={handleSubmit}
        disabled={!location}
        className={`w-full py-3 rounded-lg font-medium text-white ${
          location ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        Submit
      </button>
    </div>
  );
};

export default Location;
