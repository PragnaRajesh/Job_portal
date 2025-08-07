import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step4.png";
import { ArrowLeft } from "lucide-react";
import StepImage from "../../components/StepImage";

const jobRolesData = {
  "IT & Software": [
    "Software Developer",
    "Web Developer",
    "QA Tester",
    "DevOps Engineer"
  ],
  "Design & Creative": [
    "Graphic Designer",
    "UI/UX Designer",
    "Animator",
    "Video Editor"
  ],
  "Sales & Marketing": [
    "Sales Executive",
    "Marketing Manager",
    "Content Writer",
    "SEO Specialist"
  ]
};

const suggestedRoles = [
  "Finance",
  "Sales",
  "Human Resources",
  "Operations",
  "Accounting & Taxation"
];

const ExperienceDetails1 = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const navigate = useNavigate(); 

  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : prev.length < 10
        ? [...prev, role]
        : prev
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div className="w-full max-w-md bg-white rounded-t-2xl p-4 shadow-lg overflow-visible max-h-[90vh]">
        {/* Drag bar */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 mb-2" onClick={() => navigate(-1)} />
        <h2 className="text-center text-lg font-semibold mb-2">
          Experience Details
        </h2>
        {/* Step Image */}
              <div className="w-full flex justify-center -mt-0 mb-6">
                <StepImage
                  stepNumber={4}
                  src={stepIcon}
                  alt="Progress Step 4"
                  className="object-contain"
                  animationType="progressive"
                  threshold={0.2}
                  delay={100}
                />
              </div>

        <h3 className="text-md font-semibold mb-1">Choose your job role</h3>
        <p className="text-sm text-gray-500 mb-3">
          Select up to 10 roles for this job
        </p>

        <input
          type="text"
          placeholder="Search by department or role"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />

        <h4 className="text-sm font-semibold mb-2">Suggested job roles</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {suggestedRoles.map((role) => (
            <button
              key={role}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedRoles.includes(role)
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
              onClick={() => toggleRole(role)}
            >
              {role}
            </button>
          ))}
        </div>

        <h4 className="text-sm font-semibold mb-2">All job roles</h4>
        {Object.entries(jobRolesData).map(([category, roles]) => (
          <div key={category} className="mb-2">
            <button
              className="w-full border border-blue-700 rounded-lg px-4 py-2 text-left flex justify-between items-center font-medium"
              onClick={() => toggleCategory(category)}
            >
              <span>{category}</span>
              <span className="text-xl">⌄</span>
            </button>
            {expandedCategory === category && (
              <ul className="mt-2 pl-4 text-sm">
                {roles.map((role) => (
                  <li
                    key={role}
                    onClick={() => toggleRole(role)}
                    className={`py-2 cursor-pointer border-b border-gray-100 ${
                      selectedRoles.includes(role)
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {role}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <button
          className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
          onClick={() => {
            localStorage.setItem("jobRoles", JSON.stringify(selectedRoles));
            navigate("/profile/experiencedetails2");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExperienceDetails1;
