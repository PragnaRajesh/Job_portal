import React from 'react';

const GraphicsTemplate2 = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-screen font-sans max-w-4xl mx-auto overflow-hidden">
      {/* Header with orange gradient */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 sm:p-6 lg:p-8 mb-0 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 break-words">{data.personalInfo.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-3 sm:mb-4">{data.personalInfo.title}</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base">
            <span className="break-all">{data.personalInfo.email}</span>
            <span className="hidden sm:inline">•</span>
            <span>{data.personalInfo.phone}</span>
            <span className="hidden sm:inline">•</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 -mt-4">
        <div className="bg-white rounded-t-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Left Sidebar - Skills and Education */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-8">
              {/* Skills */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4 flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                  SKILLS
                </h2>
                <div className="space-y-3">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-400 to-pink-400 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 mt-1 block">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4 flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                  EDUCATION
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="bg-orange-50 p-3 sm:p-4 rounded-lg border-l-4 border-orange-400">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{edu.degree}</h3>
                      <p className="text-orange-600 text-sm sm:text-base font-medium">{edu.school}</p>
                      <p className="text-gray-500 text-xs sm:text-sm">{edu.location} • {edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Summary and Experience */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              {/* Summary */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4 flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                  ABOUT ME
                </h2>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-4 sm:p-6 rounded-xl border border-orange-200">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">{data.summary}</p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4 flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                  EXPERIENCE
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {data.experience.map((exp, index) => (
                    <div key={exp.id} className="relative">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                              <div className="flex-1">
                                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1">{exp.title}</h3>
                                <p className="text-orange-600 font-medium text-sm sm:text-base">{exp.company}</p>
                                <p className="text-gray-500 text-sm">{exp.location}</p>
                              </div>
                              <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-0 self-start">
                                {exp.duration}
                              </span>
                            </div>
                            <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                              {exp.responsibilities.map((resp, index) => (
                                <li key={index} className="leading-relaxed flex items-start">
                                  <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">●</span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsTemplate2;