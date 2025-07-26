import React from 'react';

const BasicTemplate = ({ data }) => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg min-h-screen font-sans max-w-4xl mx-auto" style={{ aspectRatio: '210/297', minHeight: '297mm', width: '210mm' }}>
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 break-words">{data.personalInfo.name}</h1>
        <p className="text-base sm:text-lg lg:text-xl text-blue-600 mb-2 sm:mb-3">{data.personalInfo.title}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
          <span className="break-all">{data.personalInfo.email}</span>
          <span className="hidden sm:inline">•</span>
          <span>{data.personalInfo.phone}</span>
          <span className="hidden sm:inline">•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b border-gray-300 pb-1 sm:pb-2">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{data.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b border-gray-300 pb-1 sm:pb-2">
          Experience
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className="border-l-2 border-blue-200 pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-1">{exp.title}</h3>
                  <p className="text-blue-600 text-sm sm:text-base">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0 sm:ml-4 flex-shrink-0">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
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
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b border-gray-300 pb-1 sm:pb-2">
            Education
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-green-200 pl-4">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{edu.degree}</h3>
                <p className="text-blue-600 text-sm sm:text-base">{edu.school}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{edu.location} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="min-h-0">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b border-gray-300 pb-1 sm:pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {data.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200"
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
