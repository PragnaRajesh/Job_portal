import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetup3 = () => {
  const navigate = useNavigate();
  const [pursuing, setPursuing] = useState("");

  const handleContinue = () => {
    if (!pursuing) return alert("Please select an option");

    localStorage.setItem("isPursuing", pursuing);
    navigate("/educationdetails");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      <div>
        <h2 className="text-base font-semibold mb-4">Education</h2>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div className="h-2 bg-blue-700 rounded-full w-3/5"></div>
        </div>

        <p className="text-sm font-medium mb-4">
          Are you currently pursuing your education?
        </p>

        <div className="flex flex-col gap-3">
          <label
            className={`border rounded-lg p-3 cursor-pointer ${
              pursuing === "Yes" ? "border-blue-600" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="pursuing"
              value="Yes"
              checked={pursuing === "Yes"}
              onChange={(e) => setPursuing(e.target.value)}
              className="mr-2"
            />
            Yes
          </label>

          <label
            className={`border rounded-lg p-3 cursor-pointer ${
              pursuing === "No" ? "border-blue-600" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="pursuing"
              value="No"
              checked={pursuing === "No"}
              onChange={(e) => setPursuing(e.target.value)}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <button
        onClick={handleContinue}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Continue
      </button>
    </div>
  );
};

export default ProfileSetup3;
