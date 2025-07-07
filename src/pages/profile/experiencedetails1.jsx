import React, { useState } from "react";

const jobRolesData = {
  "IT & Software": [
    "Software Developer",
    "Web Developer",
    "Mobile App Developer",
    "QA Tester",
    "DevOps Engineer"
  ],
  "Design & Creative": [
    "Graphic Designer",
    "UI/UX Designer",
    "Animator",
    "Video Editor",
    "Creative Director"
  ],
  "Sales & Marketing": [
    "Sales Executive",
    "Marketing Manager",
    "Digital Marketing Executive",
    "Content Writer",
    "SEO Specialist"
  ],
  "Finance & Accounts": [
    "Accountant",
    "Finance Analyst",
    "Tax Consultant",
    "Auditor",
    "Payroll Executive"
  ],
  "Operations & Support": [
    "Back Office Executive",
    "Customer Support",
    "HR Executive",
    "Administrative Assistant",
    "Data Entry Operator"
  ],
  "Architecture & Design": [
    "Architect",
    "Interior Designer",
    "Urban Planner",
    "Landscape Architect",
    "3D Visualizer"
  ]
};

const JobRoleDropdown = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">All job roles</h2>
      {Object.entries(jobRolesData).map(([category, roles]) => (
        <div key={category} className="mb-2">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full border border-blue-700 rounded-lg px-4 py-2 text-left flex justify-between items-center"
          >
            <span>{category}</span>
            <span>{expandedCategory === category ? "▲" : "▼"}</span>
          </button>
          {expandedCategory === category && (
            <ul className="mt-2 pl-4 text-sm text-gray-700">
              {roles.map((role) => (
                <li key={role} className="py-1 border-b border-gray-100">
                  {role}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetails1;