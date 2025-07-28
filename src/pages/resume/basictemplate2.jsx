import React from 'react';

const BasicTemplate2 = ({ data }) => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg min-h-screen font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 bg-blue-50 p-4 sm:p-6 rounded-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-1 sm:mb-2 break-words">{data.personalInfo.name}</h1>
        <p className="text-base sm:text-lg lg:text-xl text-blue-700 mb-2 sm:mb-3 font-medium">{data.personalInfo.title}</p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
          <span className="break-all">{data.personalInfo.email}</span>
          <span className="hidden sm:inline">|</span>
          <span>{data.personalInfo.phone}</span>
          <span className="hidden sm:inline">|</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-light text-gray-800 mb-3 sm:mb-4 text-center">
          <span className="bg-blue-100 px-4 py-2 rounded-full">Professional Summary</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center italic">{data.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-light text-gray-800 mb-3 sm:mb-4 text-center">
          <span className="bg-blue-100 px-4 py-2 rounded-full">Experience</span>
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="font-medium text-gray-800 text-base sm:text-lg mb-1">{exp.title}</h3>
                <p className="text-blue-700 text-sm sm:text-base font-medium">{exp.company} • {exp.location}</p>
                <span className="text-gray-500 text-sm sm:text-base">{exp.duration}</span>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="leading-relaxed text-center">• {resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Education */}
        <div className="min-h-0">
          <h2 className="text-lg sm:text-xl font-light text-gray-800 mb-3 sm:mb-4 text-center">
            <span className="bg-blue-100 px-4 py-2 rounded-full">Education</span>
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="bg-blue-50 p-4 rounded-lg text-center">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base mb-1">{edu.degree}</h3>
                <p className="text-blue-700 text-sm sm:text-base">{edu.school}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{edu.location} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="min-h-0">
          <h2 className="text-lg sm:text-xl font-light text-gray-800 mb-3 sm:mb-4 text-center">
            <span className="bg-blue-100 px-4 py-2 rounded-full">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {data.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-blue-200 hover:bg-blue-300 text-blue-800 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200"
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

export default BasicTemplate2;