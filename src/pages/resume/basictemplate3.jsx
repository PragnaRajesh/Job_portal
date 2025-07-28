import React from 'react';

const BasicTemplate3 = ({ data }) => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg min-h-screen font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-gray-900">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 break-words">{data.personalInfo.name}</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-2 sm:mb-3">{data.personalInfo.title}</p>
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
        <div className="bg-gray-900 text-white px-4 py-2 mb-4">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide">Summary</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base pl-4">{data.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6 sm:mb-8">
        <div className="bg-gray-900 text-white px-4 py-2 mb-4">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide">Experience</h2>
        </div>
        <div className="space-y-4 sm:space-y-6 pl-4">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1">{exp.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{exp.company} | {exp.location}</p>
                </div>
                <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0 sm:ml-4 flex-shrink-0 font-medium">{exp.duration}</span>
              </div>
              <ul className="list-none space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="leading-relaxed flex items-start">
                    <span className="text-gray-400 mr-2">▸</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Education */}
        <div className="min-h-0">
          <div className="bg-gray-900 text-white px-4 py-2 mb-4">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide">Education</h2>
          </div>
          <div className="space-y-3 sm:space-y-4 pl-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{edu.degree}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{edu.school}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{edu.location} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="min-h-0">
          <div className="bg-gray-900 text-white px-4 py-2 mb-4">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide">Skills</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 pl-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="text-gray-700 text-sm sm:text-base flex items-center"
              >
                <div className="w-2 h-2 bg-gray-900 mr-3 flex-shrink-0"></div>
                <span className="break-words">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTemplate3;