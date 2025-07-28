import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BasicDetails = () => {
  const navigate = useNavigate();
  const [alternatePhone, setAlternatePhone] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [gender, setGender] = useState('');

  const educationOptions = [
    'Below 10th', '10th Pass', '12th Pass', 'Diploma', 'Graduate', 'Post Graduate'
  ];
  const languageOptions = [
    'English', 'Hindi', 'Kannada', 'Bengali', 'Tamil', 'Telegu', 'Others'
  ];

  const toggleOption = (value, state, setter) => {
    setter(state.includes(value) ? state.filter(item => item !== value) : [...state, value]);
  };

  const handleSave = () => {
    // Save logic here
    console.log({ alternatePhone, age, education, languages, gender });
    navigate('/myprofilesection/myprofile');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white p-4">
      <h1 className="text-xl font-semibold text-center text-[#1B1443] mb-6">Basic Details</h1>

      <div className="w-full max-w-sm space-y-4">
        <div>
          <label className="text-sm font-medium">Add Alternate phone number</label>
          <input
            type="text"
            value={alternatePhone}
            onChange={(e) => setAlternatePhone(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            placeholder="e.g. 9876543210"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            placeholder="e.g. 25"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Education level</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {educationOptions.map((item) => (
              <button
                key={item}
                className={`border rounded-full px-3 py-1 text-sm ${education.includes(item) ? 'bg-blue-100 text-blue-600 border-blue-400' : 'text-gray-600'}`}
                onClick={() => toggleOption(item, education, setEducation)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">What all languages do you know?</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {languageOptions.map((item) => (
              <button
                key={item}
                className={`border rounded-full px-3 py-1 text-sm ${languages.includes(item) ? 'bg-blue-100 text-blue-600 border-blue-400' : 'text-gray-600'}`}
                onClick={() => toggleOption(item, languages, setLanguages)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Gender</label>
          <div className="flex gap-4 mt-2">
            {['Male', 'Female'].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`border rounded-full px-4 py-1 text-sm ${gender === g ? 'bg-blue-100 text-blue-600 border-blue-400' : 'text-gray-600'}`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-sm mt-6">
        <button
          className="px-6 py-2 border border-blue-600 rounded-full text-blue-600"
          onClick={() => navigate('/myprofilesection/myprofile')}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-full"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BasicDetails;
