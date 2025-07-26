import React from 'react';

const ProfessionalTemplate = ({ data }) => {
  return (
    <div className="bg-white p-8 shadow-lg min-h-[800px] font-serif">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">
          Professional Experience
        </h2>
        <div className="space-y-5">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600 font-medium">{exp.company} | {exp.location}</p>
                </div>
                <span className="text-gray-500 font-medium">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.location} • {edu.year}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-gray-700 text-sm">
                • {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;