import React from 'react';

const ProfessionalTemplate = ({ data }) => {
  return (
    <div className="bg-white p-6 font-serif" style={{ width: '595px', height: '842px', minHeight: '842px' }}>
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 sm:pb-6 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 break-words">{data.personalInfo.name}</h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4">{data.personalInfo.title}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-sm sm:text-base text-gray-600">
          <span className="break-all">{data.personalInfo.email}</span>
          <span className="hidden sm:inline">•</span>
          <span>{data.personalInfo.phone}</span>
          <span className="hidden sm:inline">•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">{data.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide">
          Professional Experience
        </h2>
        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          {data.experience.map((exp) => (
            <div key={exp.id} className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">{exp.company} | {exp.location}</p>
                </div>
                <span className="text-gray-500 font-medium text-sm sm:text-base mt-1 sm:mt-0 sm:ml-4 flex-shrink-0">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Education */}
        <div className="min-h-0">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
            Education
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-blue-300 pl-4">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">{edu.degree}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{edu.school}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{edu.location} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="min-h-0">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-gray-700 text-sm sm:text-base flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="break-words">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
