import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  const languages = [
    "English",
    "Hindi - हिंदी",
    "Kannada - ಕನ್ನಡ",
    "Bengali - বাংলা",
    "Telugu - తెలుగు",
    "Tamil - தமிழ்",
    "Gujarati - ગુજરાતી",
  ];

  const handleSubmit = () => {
    // Save to localStorage or context if needed
    navigate("/profile-setup-1");
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col justify-between">
      <div>
        <img
          src="/illustration.png"
          alt="illustration"
          className="w-full h-48 object-contain mb-4"
        />

        <div className="mb-4">
          <h2 className="font-semibold text-md mb-2">Find relevant jobs for your profile</h2>
          <p className="text-sm text-gray-500">Discover opportunities that match your skills and experience.</p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold text-md mb-2">Get noticed by HRs/ recruiters</h2>
          <p className="text-sm text-gray-500">Increase your visibility to potential employers.</p>
        </div>

        <h3 className="font-semibold text-sm mb-2 mt-4">Choose your app language</h3>
        <div className="space-y-3 mb-4">
          {languages.map((lang, idx) => (
            <label
              key={idx}
              className="flex items-center justify-between border p-2 rounded-lg cursor-pointer"
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

        <label className="text-xs flex items-center gap-2 mt-3">
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
