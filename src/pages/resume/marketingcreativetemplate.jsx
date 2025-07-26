import React from 'react';

const MarketingCreativeTemplate = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-screen font-sans max-w-4xl mx-auto overflow-hidden" style={{ aspectRatio: '210/297', minHeight: '297mm', width: '210mm' }}>
      {/* Creative Header */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white p-6 lg:p-8 relative overflow-hidden">
        {/* Creative Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute top-12 right-8 w-16 h-16 bg-pink-300 rounded-full opacity-30"></div>
          <div className="absolute bottom-8 left-8 w-20 h-20 bg-purple-300 rounded-full opacity-25"></div>
          <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-indigo-400 rounded-full opacity-15"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
              <span className="text-4xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 break-words">{data.personalInfo.name}</h1>
            <p className="text-2xl lg:text-3xl text-pink-200 font-light mb-4">{data.personalInfo.title}</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <span className="break-all">{data.personalInfo.email}</span>
              </div>
              <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <span>{data.personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {/* Creative Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center relative">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              CREATIVE VISION
            </span>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
          </h2>
          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-pink-200">
            <p className="text-gray-700 leading-relaxed text-center text-lg font-medium">{data.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skills */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-6 relative">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                CREATIVE SKILLS
              </span>
              <div className="absolute -bottom-1 w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"></div>
            </h2>
            
            <div className="space-y-4">
              {data.skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 hover:from-yellow-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-semibold text-sm">{skill}</span>
                      <div className="flex space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              i < 4 ? 'bg-gradient-to-r from-yellow-500 to-orange-600' : 'bg-gray-300'
                            } group-hover:scale-110`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 relative">
                <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                  EDUCATION
                </span>
                <div className="absolute -bottom-1 w-16 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"></div>
              </h2>
              
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300">
                    <h3 className="font-bold text-gray-800 text-sm mb-2">{edu.degree}</h3>
                    <p className="text-green-700 font-semibold text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.location} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-6 relative">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                CREATIVE JOURNEY
              </span>
              <div className="absolute -bottom-1 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </h2>
            
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Creative Timeline */}
                  {index !== data.experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-1 h-full bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 rounded-full"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg transform hover:scale-110 transition-all duration-300">
                        {index + 1}
                      </div>
                      {/* Creative dots */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
                    </div>
                    
                    <div className="flex-1 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                          <p className="text-blue-700 font-semibold text-lg">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                        </div>
                        <div className="mt-3 lg:mt-0">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed text-sm">{resp}</p>
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

export default MarketingCreativeTemplate;