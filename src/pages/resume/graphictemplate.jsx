import React from 'react';

const GraphicsTemplate = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-screen font-sans max-w-4xl mx-auto overflow-hidden">
      {/* Header with colored background */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
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

      <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Skills and Education */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Skills */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                SKILLS
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="bg-purple-50 hover:bg-purple-100 text-purple-800 px-2 sm:px-3 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 text-center sm:text-left">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                EDUCATION
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{edu.degree}</h3>
                    <p className="text-blue-600 text-sm sm:text-base font-medium">{edu.school}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{edu.location} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary and Experience */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Summary */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">{data.summary}</p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-1 sm:pb-2">
                WORK EXPERIENCE
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-purple-300 pl-4 sm:pl-6 hover:border-purple-400 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-medium text-sm sm:text-base">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                      <span className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-0 self-start transition-colors duration-200">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index} className="leading-relaxed">{resp}</li>
                      ))}
                    </ul>
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

export default GraphicsTemplate;