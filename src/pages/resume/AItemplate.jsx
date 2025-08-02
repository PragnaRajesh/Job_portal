import React from 'react';

const AITemplate = ({ data }) => {
  return (
    <div className="bg-white p-6 font-sans" style={{ width: '595px', height: '842px', minHeight: '842px' }}>
      {/* Mobile Header - Only visible on small screens */}
      <div className="lg:hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-4 sm:p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold">{data.personalInfo.name.charAt(0)}</span>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold mb-1 break-words">{data.personalInfo.name}</h1>
            <p className="text-indigo-200 text-base sm:text-lg break-words">{data.personalInfo.title}</p>
          </div>
        </div>
        
        {/* Mobile Contact */}
        <div className="mt-4 pt-4 border-t border-indigo-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <p className="break-all">{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p className="sm:col-span-2">{data.personalInfo.location}</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Side Panel - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block lg:w-1/3 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-6 lg:p-8">
          <div className="mb-6 lg:mb-8">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2 break-words">{data.personalInfo.name}</h1>
            <p className="text-indigo-200 text-lg lg:text-xl break-words">{data.personalInfo.title}</p>
          </div>

          {/* Contact */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-lg font-semibold mb-3 text-indigo-200">CONTACT</h2>
            <div className="space-y-2 text-sm lg:text-base">
              <p className="break-all">{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-lg font-semibold mb-3 text-indigo-200">SKILLS</h2>
            <div className="space-y-2 lg:space-y-3">
              {data.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></div>
                  <span className="text-sm lg:text-base break-words">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-indigo-200">EDUCATION</h2>
            <div className="space-y-3 lg:space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-semibold text-sm lg:text-base break-words">{edu.degree}</h3>
                  <p className="text-indigo-200 text-sm lg:text-base break-words">{edu.school}</p>
                  <p className="text-indigo-300 text-xs lg:text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Mobile Skills and Education - Only visible on small screens */}
          <div className="lg:hidden mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mobile Skills */}
              <div>
                <h2 className="text-lg font-semibold text-indigo-600 mb-3 flex items-center">
                  <div className="w-1 h-5 bg-indigo-600 mr-2"></div>
                  SKILLS
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Education */}
              <div>
                <h2 className="text-lg font-semibold text-indigo-600 mb-3 flex items-center">
                  <div className="w-1 h-5 bg-indigo-600 mr-2"></div>
                  EDUCATION
                </h2>
                <div className="space-y-2">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-semibold text-sm">{edu.degree}</h3>
                      <p className="text-indigo-600 text-sm">{edu.school}</p>
                      <p className="text-gray-500 text-xs">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
              <div className="w-1 h-5 sm:h-6 bg-indigo-600 mr-2 sm:mr-3"></div>
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">{data.summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
              <div className="w-1 h-5 sm:h-6 bg-indigo-600 mr-2 sm:mr-3"></div>
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {index !== data.experience.length - 1 && (
                    <div className="hidden sm:block absolute left-0 top-8 w-px h-full bg-indigo-200"></div>
                  )}
                  <div className="flex items-start">
                    <div className="hidden sm:block w-3 h-3 bg-indigo-600 rounded-full mr-4 mt-2 relative z-10 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 break-words">{exp.title}</h3>
                          <p className="text-indigo-600 font-medium text-sm sm:text-base break-words">{exp.company}</p>
                          <p className="text-gray-500 text-sm break-words">{exp.location}</p>
                        </div>
                        <span className="bg-indigo-100 text-indigo-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-0 self-start flex-shrink-0">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base sm:ml-4">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index} className="leading-relaxed break-words">{resp}</li>
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
  );
};

export default AITemplate;
