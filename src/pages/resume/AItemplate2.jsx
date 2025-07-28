import React from 'react';

const AITemplate2 = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg min-h-screen font-sans overflow-hidden max-w-4xl mx-auto">
      {/* Futuristic Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-3 h-3 bg-white bg-opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-white bg-opacity-40 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-6 left-12 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 break-words">{data.personalInfo.name}</h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-200 break-words">{data.personalInfo.title}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-base">
            <div className="flex items-center bg-white bg-opacity-10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
              <span className="break-all truncate">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-300 rounded-full mr-2"></div>
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-indigo-300 rounded-full mr-2"></div>
              <span>{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar - Skills and Education */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Skills */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-100">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                AI SKILLS
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700 text-sm font-medium">{skill}</span>
                      <span className="text-xs text-blue-600 font-bold">{90 + Math.floor(Math.random() * 10)}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:scale-105"
                        style={{width: `${85 + Math.random() * 15}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-purple-100">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                EDUCATION
              </h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-xl border-l-4 border-purple-400">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{edu.degree}</h3>
                    <p className="text-purple-600 text-sm font-medium">{edu.school}</p>
                    <p className="text-gray-500 text-xs">{edu.location} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Summary */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-indigo-100">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                AI PROFESSIONAL PROFILE
              </h2>
              <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 rounded-xl border border-indigo-200">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{data.summary}</p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-100">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                NEURAL EXPERIENCE PATH
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        {index !== data.experience.length - 1 && (
                          <div className="w-px h-16 bg-gradient-to-b from-blue-300 to-purple-300 ml-6 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1">{exp.title}</h3>
                              <p className="text-blue-600 font-medium text-sm sm:text-base">{exp.company}</p>
                              <p className="text-gray-500 text-sm">{exp.location}</p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-2 rounded-full text-xs font-medium mt-2 sm:mt-0 self-start border border-blue-200">
                              {exp.duration}
                            </div>
                          </div>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            {exp.responsibilities.map((resp, index) => (
                              <li key={index} className="leading-relaxed flex items-start">
                                <span className="text-purple-500 mr-2 mt-1 flex-shrink-0">◆</span>
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
  );
};

export default AITemplate2;