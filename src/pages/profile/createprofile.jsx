import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate("/profilesetup1"); // ✅ corrected
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold text-center mb-4">Create Profile</h1>

        <img
          src="src/assets/Create profile.jpeg"
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
  );
};

export default CreateProfile;
