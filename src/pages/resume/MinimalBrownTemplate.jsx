import React from 'react';

const MinimalBrownTemplate = ({ data, onEditSection }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header Section */}
      <div className="bg-amber-200 px-4 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between relative group">
        {onEditSection && (
          <button
            onClick={() => onEditSection('personalInfo')}
            className="absolute top-2 right-2 p-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
            title="Edit Personal Info"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
            </svg>
          </button>
        )}

        {/* Profile Photo */}
        <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-0">
          <span className="text-gray-500 text-xs">Photo</span>
        </div>

        {/* Name and Contact */}
        <div className="flex-1 sm:ml-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{personalInfo.name}</h1>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-right text-gray-800">
          <p className="text-xs sm:text-sm font-medium">{personalInfo.phone}</p>
          <p className="text-xs sm:text-sm">{personalInfo.email}</p>
          <p className="text-xs sm:text-sm">{personalInfo.email}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Education */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('education')}
                  className="absolute -top-2 -right-2 p-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Education"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wider">EDUCATION</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900">Qualification 1</h3>
                  <p className="text-gray-700 mt-1">University</p>
                  <p className="text-gray-700">2017-2020</p>
                </div>
                
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700 mt-1">{edu.school}</p>
                    <p className="text-gray-700">{edu.year}</p>
                  </div>
                ))}
                
                <div>
                  <h3 className="font-bold text-gray-900">Qualification 3</h3>
                  <p className="text-gray-700 mt-1">University</p>
                  <p className="text-gray-700">2017-2020</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('skills')}
                  className="absolute -top-2 -right-2 p-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Skills"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wider">SKILLS</h2>
              <div className="space-y-2">
                {skills.slice(0, 3).map((skill, index) => (
                  <p key={`brown-skill-${index}-${skill}`} className="text-gray-700">{skill}</p>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('languages')}
                  className="absolute -top-2 -right-2 p-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Languages"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wider">LANGUAGES</h2>
              <div className="space-y-2">
                <p className="text-gray-700">English</p>
                <p className="text-gray-700">Spanish</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('experience', 0)}
                  className="absolute -top-2 -right-2 p-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Experience"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wider">EXPERIENCE</h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={exp.id}>
                    <h3 className="font-bold text-gray-900 mb-2">Work experience {index + 1}</h3>
                    <div className="mb-2">
                      <p className="font-semibold text-gray-800">{exp.company}</p>
                      <p className="text-gray-600 text-sm">{exp.duration}</p>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {exp.responsibilities.join(' ')}
                    </p>
                  </div>
                ))}
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Work experience 2</h3>
                  <div className="mb-2">
                    <p className="font-semibold text-gray-800">Company</p>
                    <p className="text-gray-600 text-sm">2017-2020</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Aut aliquid nisl sed voluptas consequatur ad earum galisum sit voluptate repellat non molestiae possimus. Eum ratione assumenda vel numquam internos est veniam dignissimos. Et deletili mollitia qui adipisci maxime hic facilis rerum ex quam nulla.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Work experience 3</h3>
                  <div className="mb-2">
                    <p className="font-semibold text-gray-800">Company</p>
                    <p className="text-gray-600 text-sm">2017-2020</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Aut aliquid nisl sed voluptas consequatur ad earum galisum sit voluptate repellat non molestiae possimus. Eum ratione assumenda vel numquam internos est veniam dignissimos. Et deletili mollitia qui adipisci maxime hic facilis rerum ex quam nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Created by Headsup HR Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default MinimalBrownTemplate;
