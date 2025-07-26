import React from 'react';

const BasicTemplate = ({ data }) => {
  return (
    <div className="bg-white p-8 shadow-lg min-h-[800px] font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{data.personalInfo.name}</h1>
        <p className="text-lg text-blue-600 mb-3">{data.personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
          Experience
        </h2>
        <div className="space-y-4">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-gray-500 text-sm">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-blue-600">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.location} • {edu.year}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTemplate;
