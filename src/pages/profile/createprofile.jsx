import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step0.png";
import profileImg from "../../assets/Create profile.jpeg";
import { ArrowLeft } from "lucide-react";

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
    <div className="h-screen bg-white px-4 sm:px-6 md:px-8 lg:max-w-md lg:mx-auto pt-6 pb-24 flex flex-col justify-between overflow-auto pt-safe pb-safe">

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start">
              <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" onClick={() => navigate(-1)}/>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4">Create Profile</h1>

      {/* Step Image */}
      <div className="w-full flex justify-center -mt-0 mb-6 sm:mb-8">
        <img alt="Progress Step 0" src="/src/assets/step0.png?t=1753261694330" className="object-contain w-auto h-8 sm:h-10 md:h-12"/>
      </div>

        <img
          src={profileImg}
          alt="Create Profile"
          className="w-full h-50 sm:h-60 md:h-72 object-contain mb-3 sm:mb-6"
        />

        <div className="mb-3 sm:mb-4 flex items-start justify-between">
          <div>
            <h2 className="font-semibold text-md sm:text-lg md:text-xl mb-1">Find relevant jobs for your profile</h2>
            <p className="text-sm sm:text-base text-gray-500">
              Discover opportunities that match your skills and experience.
            </p>
          </div>
          <div className="bg-gray-100 p-2 sm:p-3 rounded-xl shadow-sm">
            <b className="text-xl sm:text-2xl">🎯</b>
          </div>
        </div>

        <div className="mb-4 sm:mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-semibold text-md sm:text-lg md:text-xl mb-1">Get instant job alerts</h2>
            <p className="text-sm sm:text-base text-gray-500">
              Stay updated with the latest job openings in your field.
            </p>
          </div>
          <div className="bg-gray-100 p-2 sm:p-3 rounded-xl shadow-sm">
            <b className="text-xl sm:text-2xl">🔔</b>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <label className="block text-gray-700 font-medium text-sm sm:text-base mb-3">
            Select Language
          </label>
          <div className="space-y-2 sm:space-y-3">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value={lang}
                  checked={selectedLanguage === lang}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="mr-3 sm:mr-4 w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-sm sm:text-base text-gray-700">{lang}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center mb-6 sm:mb-8">
          <input
            type="checkbox"
            id="whatsapp"
            checked={whatsappUpdates}
            onChange={(e) => setWhatsappUpdates(e.target.checked)}
            className="mr-3 sm:mr-4 w-4 h-4 sm:w-5 sm:h-5"
          />
          <label htmlFor="whatsapp" className="text-sm sm:text-base text-gray-700">
            Get WhatsApp updates for job alerts
          </label>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-4 sm:py-5 bg-blue-800 text-white font-semibold text-base sm:text-lg rounded-full hover:bg-blue-900 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};

export default CreateProfile;
