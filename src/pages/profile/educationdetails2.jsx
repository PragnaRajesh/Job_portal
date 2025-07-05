import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EducationDetails2 = () => {
  const navigate = useNavigate();
  const [educationLevel, setEducationLevel] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [college, setCollege] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [medium, setMedium] = useState("");

  const educationOptions = [
    "10th or Below 10th",
    "12th Pass",
    "Diploma",
    "ITI",
    "Graduate",
    "Post Graduate",
  ];

  const handleNext = () => {
    if (!educationLevel || !degree || !specialization || !college || !month || !year || !medium) {
      alert("Please fill in all fields");
      return;
    }

    // Save or process data here
    navigate("/experiencedecision");
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col justify-between">
      <div>
        {/* 🔹 Heading */}
        <h2 className="text-base font-semibold mb-4">Education Details</h2>

        {/* 🔹 Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div className="h-2 bg-blue-700 rounded-full w-[65%]"></div>
        </div>

        {/* 🔹 Highest Education Level */}
        <h3 className="font-semibold mb-2">Select your highest education level</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {educationOptions.map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-md border text-sm ${
                educationLevel === option
                  ? "bg-white border-blue-700 text-blue-700"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setEducationLevel(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* 🔹 Degree Dropdown */}
        <label className="text-sm font-medium block mb-1">Degree</label>
        <select
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        >
          <option value="">Select an option</option>
          <option value="B.E">B.E</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BA">BA</option>
          <option value="BSc">BSc</option>
        </select>

        {/* 🔹 Specialization Dropdown */}
        <label className="text-sm font-medium block mb-1">Specialization</label>
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        >
          <option value="">Select an option</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electronics">Electronics</option>
          <option value="Commerce">Commerce</option>
        </select>

        {/* 🔹 College Name Input */}
        <label className="text-sm font-medium block mb-1">College Name</label>
        <input
          type="text"
          placeholder="e.g. St. Stephens"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        />

        {/* 🔹 Month & Year Dropdowns */}
        <div className="flex gap-3 mb-4">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="">Month</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="">Year</option>
            {Array.from({ length: 20 }, (_, i) => 2025 - i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* 🔹 School Medium Dropdown */}
        <label className="text-sm font-medium block mb-1">School Medium</label>
        <select
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        >
          <option value="">Select option</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Kannada">Kannada</option>
          <option value="Telugu">Telugu</option>
        </select>
      </div>

      {/* 🔹 Next Button */}
      <button
        onClick={handleNext}
        className="bg-blue-700 text-white py-3 rounded-full text-sm font-semibold"
      >
        Next
      </button>
    </div>
  );
};

export default EducationDetails2;
