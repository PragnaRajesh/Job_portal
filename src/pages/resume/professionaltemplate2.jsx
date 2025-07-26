import React from 'react';

const ProfessionalTemplate2 = ({ data }) => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg min-h-screen font-sans max-w-4xl mx-auto">
      {/* Header with blue theme */}
      <div className="bg-blue-600 text-white p-4 sm:p-6 -m-4 sm:-m-6 lg:-m-8 mb-6 sm:mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 break-words">{data.personalInfo.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-3 sm:mb-4">{data.personalInfo.title}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-base">
            <span className="break-all">{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Summary */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-8 h-1 bg-blue-600 mr-3"></div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 uppercase tracking-wide">
              Executive Summary
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg bg-gray-50 p-4 rounded">{data.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-8 h-1 bg-blue-600 mr-3"></div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 uppercase tracking-wide">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {data.experience.map((exp) => (
              <div key={exp.id} className="relative pl-6">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="absolute left-2 top-4 w-px h-full bg-blue-200"></div>
                <div className="bg-white border border-gray-200 p-4 sm:p-5 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">{exp.duration}</span>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="leading-relaxed flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Education */}
          <div className="min-h-0">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-8 h-1 bg-blue-600 mr-3"></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 uppercase tracking-wide">
                Education
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">{edu.degree}</h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">{edu.school}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{edu.location} • {edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="min-h-0">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-8 h-1 bg-blue-600 mr-3"></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 uppercase tracking-wide">
                Key Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate2;