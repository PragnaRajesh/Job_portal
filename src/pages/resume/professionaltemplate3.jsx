import React from 'react';

const ProfessionalTemplate3 = ({ data }) => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg min-h-screen font-serif max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-left mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-2 sm:mb-3 break-words">{data.personalInfo.name}</h1>
        <div className="w-20 h-0.5 bg-green-600 mb-3"></div>
        <p className="text-lg sm:text-xl lg:text-2xl text-green-600 mb-3 sm:mb-4 font-light">{data.personalInfo.title}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm sm:text-base text-gray-600">
          <div className="flex items-center">
            <div className="w-1 h-4 bg-green-600 mr-2"></div>
            <span className="break-all">{data.personalInfo.email}</span>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-4 bg-green-600 mr-2"></div>
            <span>{data.personalInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-4 bg-green-600 mr-2"></div>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-5 relative">
          Professional Profile
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-600"></div>
        </h2>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 sm:p-6">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg italic">{data.summary}</p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-6 sm:mb-8 relative">
          Professional Experience
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-600"></div>
        </h2>
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== 0 && <div className="absolute -top-3 left-0 w-full h-px bg-gray-200"></div>}
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="lg:w-1/4 mb-3 lg:mb-0">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded text-sm font-medium text-center lg:text-left">
                    {exp.duration}
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
                  <p className="text-green-600 font-medium text-base sm:text-lg mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{exp.location}</p>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-2 w-2 h-2 bg-green-400 rounded-full"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* Education */}
        <div className="min-h-0">
          <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6 relative">
            Education
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-600"></div>
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {data.education.map((edu) => (
              <div key={edu.id} className="border border-gray-200 p-4 sm:p-5 rounded-lg">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg mb-2">{edu.degree}</h3>
                <p className="text-green-600 font-medium text-sm sm:text-base mb-1">{edu.school}</p>
                <p className="text-gray-500 text-xs sm:text-sm flex items-center">
                  <span className="w-1 h-3 bg-green-400 mr-2"></span>
                  {edu.location} • {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="min-h-0">
          <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-4 sm:mb-6 relative">
            Core Expertise
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-600"></div>
          </h2>
          <div className="space-y-3">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm sm:text-base font-medium">{skill}</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div key={dot} className="w-2 h-2 bg-green-600 rounded-full"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate3;