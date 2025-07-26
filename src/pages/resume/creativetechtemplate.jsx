import React from 'react';

const CreativeTechTemplate = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-screen font-sans max-w-4xl mx-auto overflow-hidden" style={{ aspectRatio: '210/297', minHeight: '297mm', width: '210mm' }}>
      {/* Header with Tech Gradient */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white p-6 lg:p-8 relative overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-1 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className={`bg-white ${i % 3 === 0 ? 'animate-pulse' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-6 mb-4">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2 break-words">{data.personalInfo.name}</h1>
              <p className="text-xl lg:text-2xl text-cyan-100 font-medium">{data.personalInfo.title}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
              <span className="break-all">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
              <span>{data.personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
              <span>Tech Professional</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skills and Education */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-3"></div>
                TECH STACK
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-3 hover:from-cyan-200 hover:to-blue-200 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-medium text-sm">{skill}</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-cyan-500' : 'bg-gray-300'}`}></div>
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
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></div>
                EDUCATION
              </h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{edu.degree}</h3>
                    <p className="text-purple-700 font-medium text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.location} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary and Experience */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                PROFESSIONAL SUMMARY
              </h2>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
                WORK EXPERIENCE
              </h2>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {/* Timeline */}
                    {index !== data.experience.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-orange-300 to-red-300"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      
                      <div className="flex-1 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{exp.title}</h3>
                            <p className="text-orange-700 font-medium text-sm">{exp.company}</p>
                            <p className="text-gray-500 text-sm">{exp.location}</p>
                          </div>
                          <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-medium mt-2 lg:mt-0 self-start">
                            {exp.duration}
                          </span>
                        </div>
                        
                        <ul className="space-y-2 text-gray-700 text-sm">
                          {exp.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
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

export default CreativeTechTemplate;