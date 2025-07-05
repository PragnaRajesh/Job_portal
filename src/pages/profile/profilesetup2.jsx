import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetup2 = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("fullName");
    if (storedName) setFullName(storedName);
  }, []);

  const handleContinue = () => {
    if (!dob || !gender || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Save to localStorage
    localStorage.setItem("dob", dob);
    localStorage.setItem("gender", gender);
    localStorage.setItem("email", email);

    navigate("/profile-setup-3");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      <div>
        <h2 className="text-base font-semibold mb-4">Basic Details</h2>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div className="h-2 bg-blue-700 rounded-full w-2/5"></div>
        </div>

        <label className="text-sm font-semibold block mb-1">Full Name</label>
        <input
          type="text"
          value={fullName}
          disabled
          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-sm mb-4"
        />

        <label className="text-sm font-semibold block mb-1">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-4"
        />

        <label className="text-sm font-semibold block mb-1">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-4"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label className="text-sm font-semibold block mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm"
        />
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

export default ProfileSetup2;
