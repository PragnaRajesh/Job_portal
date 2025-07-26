import React from 'react';

const GraphicsTemplate3 = ({ data }) => {
  return (
    <div className="bg-gray-900 shadow-lg min-h-screen font-sans max-w-4xl mx-auto overflow-hidden text-white">
      {/* Header with dark theme and cyan accents */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400 bg-opacity-10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400 bg-opacity-10 rounded-full -ml-16 -mb-16"></div>
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 break-words text-cyan-400">{data.personalInfo.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 font-light">{data.personalInfo.title}</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-400">
            <span className="break-all flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              {data.personalInfo.email}
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              {data.personalInfo.phone}
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              {data.personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Skills and Education */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Skills */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700">
              <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
                <div className="w-1 h-6 bg-cyan-400 mr-3"></div>
                SKILLS
              </h2>
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-200 text-sm font-medium">{skill}</span>
                      <span className="text-cyan-400 text-xs">Expert</span>
                    </div>
                    <div className="bg-gray-600 rounded-full h-1">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full" style={{width: `${80 + Math.random() * 20}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700">
              <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
                <div className="w-1 h-6 bg-cyan-400 mr-3"></div>
                EDUCATION
              </h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-gray-700 p-4 rounded-lg border-l-4 border-cyan-400">
                    <h3 className="font-semibold text-gray-200 text-sm mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 text-sm font-medium mb-1">{edu.school}</p>
                    <p className="text-gray-400 text-xs">{edu.location} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary and Experience */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Summary */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700">
              <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
                <div className="w-1 h-6 bg-cyan-400 mr-3"></div>
                ABOUT ME
              </h2>
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 sm:p-6 rounded-xl">
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{data.summary}</p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700">
              <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
                <div className="w-1 h-6 bg-cyan-400 mr-3"></div>
                EXPERIENCE
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="bg-gray-700 rounded-xl p-4 sm:p-6 hover:bg-gray-600 transition-colors duration-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400 bg-opacity-5 rounded-full -mr-10 -mt-10"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm mr-3">
                              {index + 1}
                            </div>
                            <h3 className="font-bold text-cyan-400 text-base sm:text-lg">{exp.title}</h3>
                          </div>
                          <p className="text-gray-200 font-medium text-sm sm:text-base mb-1">{exp.company}</p>
                          <p className="text-gray-400 text-sm">{exp.location}</p>
                        </div>
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium mt-2 sm:mt-0 self-start">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index} className="leading-relaxed flex items-start">
                            <span className="text-cyan-400 mr-2 mt-1 flex-shrink-0">▶</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
    </div>
  );
};

export default GraphicsTemplate3;