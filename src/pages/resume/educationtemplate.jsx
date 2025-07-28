import React from 'react';

const EducationTemplate = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-screen font-serif max-w-4xl mx-auto overflow-hidden" style={{ aspectRatio: '210/297', minHeight: '297mm', width: '210mm' }}>
      {/* Academic Header */}
      <div className="bg-gradient-to-r from-indigo-800 via-blue-700 to-purple-800 text-white p-6 lg:p-8 relative overflow-hidden">
        {/* Academic Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-2 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className={`bg-white rounded-full ${i % 4 === 0 ? 'animate-pulse' : ''}`} style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm border-4 border-white border-opacity-30">
              <span className="text-3xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 break-words">{data.personalInfo.name}</h1>
              <p className="text-xl lg:text-2xl text-indigo-200 font-light">{data.personalInfo.title}</p>
              <div className="flex items-center mt-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-indigo-800 rounded-sm"></div>
                </div>
                <span className="text-indigo-100 text-sm font-medium">Education Professional</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="break-all">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {/* Teaching Philosophy */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <div className="w-6 h-6 bg-indigo-600 rounded-lg mr-4 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            TEACHING PHILOSOPHY
          </h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-600 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-lg font-medium">{data.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Academic Skills & Qualifications */}
          <div className="lg:col-span-1 space-y-8">
            {/* Academic Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-lg mr-3 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                ACADEMIC SKILLS
              </h2>
              
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-semibold text-sm">{skill}</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 rounded-sm transition-all duration-300 ${
                                i < 4 ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gray-300'
                              } group-hover:scale-125`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Qualifications */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-6 h-6 bg-purple-600 rounded-lg mr-3 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                QUALIFICATIONS
              </h2>
              
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-600 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-bold text-gray-800 text-sm mb-2">{edu.degree}</h3>
                    <p className="text-purple-700 font-semibold text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.location} • {edu.year}</p>
                    <div className="mt-2 flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-lg flex items-center justify-center mr-2">
                        <div className="w-2 h-2 bg-purple-800 rounded-sm"></div>
                      </div>
                      <span className="text-purple-700 text-xs font-medium">Academic Excellence</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Teaching Experience */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-6 h-6 bg-indigo-700 rounded-lg mr-3 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              TEACHING EXPERIENCE
            </h2>
            
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Academic Timeline */}
                  {index !== data.experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-1 h-full bg-gradient-to-b from-indigo-300 to-purple-400 rounded-full"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        <div className="w-6 h-6 bg-white bg-opacity-30 rounded-sm flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* Academic indicators */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-lg"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-lg"></div>
                    </div>
                    
                    <div className="flex-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                          <p className="text-indigo-700 font-semibold text-lg">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                          
                          {/* Academic Department Badge */}
                          <div className="mt-2 inline-flex items-center">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-lg text-xs font-medium">
                              Academic Department
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 lg:mt-0">
                          <span className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                              <div className="w-2 h-2 bg-white rounded-sm"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">{resp}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Academic Achievements */}
                      <div className="mt-4 pt-4 border-t border-indigo-200">
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-yellow-500 rounded-lg"></div>
                            <span className="text-gray-600">Teaching Excellence</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-green-500 rounded-lg"></div>
                            <span className="text-gray-600">Student Success</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-blue-500 rounded-lg"></div>
                            <span className="text-gray-600">Research Impact</span>
                          </div>
                        </div>
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
  );
};

export default EducationTemplate;