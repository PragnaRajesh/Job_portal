import React from 'react';

const BusinessExecutiveTemplate = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-screen font-serif max-w-4xl mx-auto overflow-hidden" style={{ aspectRatio: '210/297', minHeight: '297mm', width: '210mm' }}>
      {/* Executive Header */}
      <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-white p-6 lg:p-8 relative overflow-hidden">
        {/* Professional Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-1 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-white"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-8 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-slate-800">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 break-words text-white">{data.personalInfo.name}</h1>
              <p className="text-xl lg:text-2xl text-blue-200 font-light">{data.personalInfo.title}</p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mt-3 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="break-all">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>{data.personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>Executive Leader</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {/* Executive Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 mr-4 rounded-full"></div>
            EXECUTIVE SUMMARY
          </h2>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-lg font-medium">{data.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Core Competencies & Education */}
          <div className="lg:col-span-1 space-y-8">
            {/* Core Competencies */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 mr-3 rounded-full"></div>
                CORE COMPETENCIES
              </h2>
              
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-800 font-semibold text-sm">{skill}</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 ${
                                i < 4 ? 'bg-gradient-to-r from-indigo-600 to-blue-600' : 'bg-gray-300'
                              } transform transition-all duration-300 group-hover:scale-125`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-teal-600 mr-3 rounded-full"></div>
                EDUCATION
              </h2>
              
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-600 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-sm mb-2">{edu.degree}</h3>
                    <p className="text-green-700 font-semibold text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-xs mt-1 font-medium">{edu.location} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Experience */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-slate-600 to-gray-700 mr-3 rounded-full"></div>
              EXECUTIVE EXPERIENCE
            </h2>
            
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Professional Timeline */}
                  {index !== data.experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-slate-300 to-gray-400"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {String(2024 - index).slice(-2)}
                      </div>
                      {/* Executive indicators */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex-1 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                          <p className="text-slate-700 font-semibold text-lg">{exp.company}</p>
                          <p className="text-gray-500 text-sm font-medium">{exp.location}</p>
                        </div>
                        <div className="mt-3 lg:mt-0">
                          <span className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm font-medium">{resp}</p>
                          </div>
                        ))}
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

export default BusinessExecutiveTemplate;