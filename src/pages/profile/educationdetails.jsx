import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EducationDetails = () => {
  const navigate = useNavigate();

  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [college, setCollege] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleSubmit = () => {
    if (!degree || !specialization || !college || !startYear || !endYear) {
      alert("Please fill all fields");
      return;
    }

    // Save to localStorage (optional)
    localStorage.setItem("education", JSON.stringify({
      degree,
      specialization,
      college,
      startYear,
      endYear,
    }));

    // Navigate to experience
    navigate('/experience-decision');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      <div>
        <h2 className="text-base font-semibold mb-4">Education Details</h2>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div className="h-2 bg-blue-700 rounded-full w-5/5"></div>
        </div>

        <label className="block text-sm font-medium mb-1">Degree</label>
        <input
          type="text"
          placeholder="e.g., B.Tech, B.Sc, M.Com"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-4"
        />

        <label className="block text-sm font-medium mb-1">Specialization</label>
        <input
          type="text"
          placeholder="e.g., Computer Science, Finance"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-4"
        />

        <label className="block text-sm font-medium mb-1">College / University</label>
        <input
          type="text"
          placeholder="Your college name"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-4"
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Start Year</label>
            <input
              type="number"
              placeholder="YYYY"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">End Year</label>
            <input
              type="number"
              placeholder="YYYY"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Submit & Continue
      </button>
    </div>
  );
};

export default EducationDetails;
