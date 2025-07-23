import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step0.png";
import profileImg from "../../assets/Create Profile.jpeg";

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
    <div className="h-screen bg-white px-4 pt-6 pb-24 flex flex-col justify-between overflow-hidden">
      {/* Step Image */}
      <div class="w-full flex justify-center -mt-2 mb-3"><img alt="Progress Step 0" src="/src/assets/step0.png?t=1753261694330" class=" object-contain"/></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start">
        <h1 className="text-xl font-bold text-center mb-2">Create Profile</h1>

        <img
          src={profileImg}
          alt="Create Profile"
          className="w-full h-[200px] object-contain mb-3"
        />

        <div className="mb-3 flex items-start justify-between">
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

        <div className="mb-4 flex items-start justify-between">
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

        <h3 className="font-bold text-md mb-2">Choose your app language</h3>
        <div className="space-y-2 mb-2">
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

        <label className="text-sm flex items-center gap-2">
          <input
            type="checkbox"
            checked={whatsappUpdates}
            onChange={() => setWhatsappUpdates(!whatsappUpdates)}
          />
          Send me important job updates on WhatsApp
        </label>
      </div>

      {/* CTA Button */}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-sm font-medium"
        >
          Create Profile
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
