import React from 'react';

const OnboardingStyleTemplate = ({ data, onEditSection }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-blue-50 relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 px-4 sm:px-8 py-8 sm:py-12 relative group">
        {onEditSection && (
          <button
            onClick={() => onEditSection('personalInfo')}
            className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 text-purple-600 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
            title="Edit Personal Info"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
            </svg>
          </button>
        )}

        <div className="text-center text-white">
          {/* Creative Profile Circle */}
          <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white bg-opacity-20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center border-4 border-white border-opacity-30">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-lg sm:text-xl font-bold">
                {personalInfo.name.charAt(0)}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl sm:text-2xl font-light mb-4 text-purple-100">{personalInfo.title}</p>
          
          {/* Contact Info with Creative Layout */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-purple-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 py-8 sm:py-12">
        {/* Professional Summary */}
        <div className="mb-8 sm:mb-12 relative group">
          {onEditSection && (
            <button
              onClick={() => onEditSection('summary')}
              className="absolute -top-2 -right-2 p-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              title="Edit Summary"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
              </svg>
            </button>
          )}
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h2 className="text-lg sm:text-xl font-semibold">About Me</h2>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-center text-base sm:text-lg">{summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('experience')}
                  className="absolute -top-2 -right-2 p-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Experience"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Experience Journey</h2>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <div className="ml-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-gray-800 text-lg">{exp.title}</h3>
                        <p className="text-purple-600 font-medium">{exp.company}</p>
                        <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start">
                              <span className="text-purple-400 mr-2 mt-1">•</span>
                              <span>{resp}</span>
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

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('skills')}
                  className="absolute -top-2 -right-2 p-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Skills"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Skills & Expertise</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium hover:from-purple-200 hover:to-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            {education.length > 0 && (
              <div className="relative group">
                {onEditSection && (
                  <button
                    onClick={() => onEditSection('education')}
                    className="absolute -top-2 -right-2 p-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    title="Edit Education"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                    </svg>
                  </button>
                )}
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Education</h2>
                </div>
                
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id} className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                      <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Creative Footer */}
      <div className="h-2 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"></div>
    </div>
  );
};

export default OnboardingStyleTemplate;
