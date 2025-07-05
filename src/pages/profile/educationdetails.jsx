import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EducationDetails = () => {
  const navigate = useNavigate();
  const [isPursuing, setIsPursuing] = useState(null); // Yes = true, No = false

  const handleNext = () => {
    if (isPursuing === null) {
      alert("Please select an option.");
      return;
    }

    localStorage.setItem("isPursuingEducation", isPursuing);
    navigate("/educationdetails2");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      <div>
        {/* 🔹 Top Heading */}
        <h2 className="text-center text-base font-semibold mb-3">
          Education Details
        </h2>

        {/* 🔹 Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-4">
          <div className="h-1 bg-blue-700 rounded-full w-2/5"></div>
        </div>

        {/* 🔹 Illustration */}
        <img
          src="src/assets/education.jpeg"
          alt="Graduation"
          className="w-full h-[200px] object-contain mb-6"
        />

        {/* 🔹 Question */}
        <h3 className="font-semibold text-sm mb-2">
          Are you currently pursuing your education?
        </h3>

        {/* 🔹 Toggle Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium border ${
              isPursuing === true
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            }`}
            onClick={() => setIsPursuing(true)}
          >
            Yes
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium border ${
              isPursuing === false
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            }`}
            onClick={() => setIsPursuing(false)}
          >
            No
          </button>
        </div>
      </div>

      {/* 🔹 Continue Button */}
      <button
        onClick={handleNext}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Next
      </button>
    </div>
  );
};

export default EducationDetails;
