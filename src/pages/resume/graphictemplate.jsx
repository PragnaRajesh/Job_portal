import React from 'react';

const GraphicsTemplate = ({ data }) => {
  return (
    <div className="bg-white p-8 shadow-lg min-h-[800px] font-sans">
      {/* Header with colored background */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-t-lg -mx-8 -mt-8 mb-6">
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.name}</h1>
        <p className="text-xl opacity-90 mb-3">{data.personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          {/* Skills */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 mb-3 border-b-2 border-purple-200 pb-1">
              SKILLS
            </h2>
            <div className="space-y-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-purple-50 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 mb-3 border-b-2 border-purple-200 pb-1">
              EDUCATION
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-semibold text-gray-800 text-sm">{edu.degree}</h3>
                <p className="text-blue-600 text-sm">{edu.school}</p>
                <p className="text-gray-500 text-xs">{edu.location} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">
          {/* Summary */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 mb-3 border-b-2 border-purple-200 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 mb-3 border-b-2 border-purple-200 pb-1">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-purple-300 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      {exp.duration}
                    </span>
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
        </div>
      </div>
    </div>
  );
};

export default GraphicsTemplate;