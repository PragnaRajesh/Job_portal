import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(['Figma', 'Illustrator', 'Adobe XD', 'Wireframing', 'Flow- map', 'HTML/CSS']);
  const [newSkill, setNewSkill] = useState('');

  const handleToggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills([...skills, trimmedSkill]);
    }
    setNewSkill('');
  };

  const allSkills = [
    'Figma',
    'Illustrator',
    'Adobe XD',
    'Wireframing',
    'Flow- map',
    'HTML/CSS',
    'None of these',
    ...skills.filter((s) =>
      !['Figma', 'Illustrator', 'Adobe XD', 'Wireframing', 'Flow- map', 'HTML/CSS', 'None of these'].includes(s)
    )
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 pt-safe pb-safe">
      <div className="bg-white rounded-xl w-full max-w-sm p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-center text-indigo-900 mb-4">Skills</h2>

        <p className="text-sm text-gray-700 mb-4">UI/UX Designer/ Web Designer</p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {allSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => handleToggleSkill(skill)}
              className={`px-3 py-1 rounded-full border text-sm ${
                skills.includes(skill)
                  ? 'bg-blue-100 border-blue-500 text-blue-700'
                  : 'bg-gray-100 border-gray-300 text-gray-700'
              }`}
            >
              {skill} {skills.includes(skill) ? '✓' : '+'}
            </button>
          ))}
        </div>

        {/* Add New Skill Field */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add custom skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm outline-none"
          />
          <button
            onClick={handleAddSkill}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Add
          </button>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => navigate('/myprofilesection/myprofile')}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => alert('Skills saved')}
            className="px-5 py-2 bg-blue-700 text-white rounded-full text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
