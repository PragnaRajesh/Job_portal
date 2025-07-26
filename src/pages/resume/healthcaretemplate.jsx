import React from 'react';

const HealthcareTemplate = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-screen font-sans max-w-4xl mx-auto overflow-hidden" style={{ aspectRatio: '210/297', minHeight: '297mm', width: '210mm' }}>
      {/* Healthcare Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white p-6 lg:p-8 relative overflow-hidden">
        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-4 h-full w-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="bg-white transform rotate-45"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white border-opacity-30">
              <span className="text-3xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 break-words">{data.personalInfo.name}</h1>
              <p className="text-xl lg:text-2xl text-emerald-200 font-medium">{data.personalInfo.title}</p>
              <div className="flex items-center mt-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-1 bg-white"></div>
                  <div className="w-1 h-4 bg-white absolute"></div>
                </div>
                <span className="text-emerald-100 text-sm font-medium">Healthcare Professional</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="break-all">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {/* Professional Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <div className="w-6 h-6 bg-emerald-500 rounded-full mr-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            PROFESSIONAL SUMMARY
          </h2>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-500 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-lg">{data.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Clinical Skills & Education */}
          <div className="lg:col-span-1 space-y-8">
            {/* Clinical Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-6 h-6 bg-teal-500 rounded-full mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                CLINICAL SKILLS
              </h2>
              
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-200 hover:border-teal-400 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-semibold text-sm">{skill}</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i < 4 ? 'bg-gradient-to-r from-teal-500 to-cyan-500' : 'bg-gray-300'
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

            {/* Education & Certifications */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-6 h-6 bg-cyan-500 rounded-full mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                EDUCATION & CERTIFICATIONS
              </h2>
              
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-500 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-bold text-gray-800 text-sm mb-2">{edu.degree}</h3>
                    <p className="text-cyan-700 font-semibold text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.location} • {edu.year}</p>
                    <div className="mt-2 flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-green-700 text-xs font-medium">Certified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Clinical Experience */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-6 h-6 bg-emerald-600 rounded-full mr-3 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              CLINICAL EXPERIENCE
            </h2>
            
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Medical Timeline */}
                  {index !== data.experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-1 h-full bg-gradient-to-b from-emerald-300 to-teal-400 rounded-full"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-1 h-6 bg-white absolute"></div>
                      </div>
                      {/* Medical indicators */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex-1 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                          <p className="text-emerald-700 font-semibold text-lg">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                          
                          {/* Healthcare Department Badge */}
                          <div className="mt-2 inline-flex items-center">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Healthcare Department
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 lg:mt-0">
                          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                              <div className="w-2 h-0.5 bg-white"></div>
                              <div className="w-0.5 h-2 bg-white absolute"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">{resp}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Patient Care Metrics */}
                      <div className="mt-4 pt-4 border-t border-emerald-200">
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Patient Care Excellence</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-600">Quality Metrics Met</span>
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

export default HealthcareTemplate;