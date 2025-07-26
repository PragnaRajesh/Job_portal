import React from 'react';

const AITemplate = ({ data }) => {
  return (
    <div className="bg-white shadow-lg min-h-[800px] font-sans overflow-hidden">
      {/* Side Panel */}
      <div className="flex">
        <div className="w-1/3 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-6">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{data.personalInfo.name}</h1>
            <p className="text-indigo-200 text-lg">{data.personalInfo.title}</p>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-indigo-200">CONTACT</h2>
            <div className="space-y-2 text-sm">
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-indigo-200">SKILLS</h2>
            <div className="space-y-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-indigo-200">EDUCATION</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-semibold text-sm">{edu.degree}</h3>
                <p className="text-indigo-200 text-sm">{edu.school}</p>
                <p className="text-indigo-300 text-xs">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-8">
          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-1 h-6 bg-indigo-600 mr-3"></div>
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-1 h-6 bg-indigo-600 mr-3"></div>
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {index !== data.experience.length - 1 && (
                    <div className="absolute left-0 top-8 w-px h-full bg-indigo-200"></div>
                  )}
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-4 mt-2 relative z-10"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                          <p className="text-indigo-600 font-medium">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                        </div>
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
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
