import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step0.png";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  const languages = [
    "English",
    "Kannada - ಕನ್ನಡ",
    "Hindi - हिंदी",
    "Telugu - తెలుగు",
    "Tamil - தமிழ்",
  ];

  const handleSubmit = () => {
    navigate("/profile/profilesetup1");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col justify-between">
      <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-12 px-4">
      {/* Progress Bar Section */}
      <div className="relative w-full max-w-md mb-12">
        {/* Icon */}
        <div className="absolute -top-8 left-3 z-10">
          <img src={stepIcon} alt="Step Icon" className="w-12 h-12 object-contain" />
        </div>

        {/* Progress Track */}
        <div className="w-full h-5 rounded-full bg-gradient-to-r from-[#4196E3] to-[#373598] shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-white bg-opacity-20 w-[20%] animate-pulse-pattern" />
        </div>
      </div>

      {/* Main Content */}
      <div>
        <h1 className="text-xl font-bold text-center mb-4">Create Profile</h1>

        <img
          src="./assets/Create Profile.jpeg"
          alt="Create Profile"
          className="w-full h-[250px] object-contain mb-6"
        />

        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="font-semibold text-md mb-1">Find relevant jobs for your profile</h2>
            <p className="text-sm text-gray-500">
              Discover opportunities that match your skills and experience.
            </p>
          </div>
          <div className="bg-gray-100 p-2 rounded-xl shadow-sm">
            <b className="text-xl">🎯</b>
          </div>
        </div>

        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-semibold text-md mb-1">Get noticed by HRs/ recruiters</h2>
            <p className="text-sm text-gray-500">
              Increase your visibility to potential employers.
            </p>
          </div>
          <div className="bg-gray-100 p-2 rounded-xl shadow-sm">
            <b className="text-xl">👀</b>
          </div>
        </div>

        <h3 className="font-bold text-md mb-3">Choose your app language</h3>
        <div className="space-y-3 mb-4">
          {languages.map((lang, idx) => (
            <label
              key={idx}
              className="flex items-center justify-between border p-3 rounded-lg cursor-pointer"
            >
              <span className="text-sm">{lang}</span>
              <input
                type="radio"
                name="language"
                checked={selectedLanguage === lang}
                onChange={() => setSelectedLanguage(lang)}
              />
            </label>
          ))}
        </div>

        <label className="text-sm flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            checked={whatsappUpdates}
            onChange={() => setWhatsappUpdates(!whatsappUpdates)}
          />
          Send me important job updates on WhatsApp
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-blue-700 text-white py-3 rounded-full text-sm font-medium"
      >
        Create Profile
      </button>
    </div>
    </div>
  );
};

export default CreateProfile;
