import React from 'react';

const CreativeGeometricTemplate = ({ data, onEditSection }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  // Categorize skills
  const categorizeSkills = (skillsArray) => {
    const frontEndSkills = ['React', 'Vue', 'Angular', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'NextJS', 'VueJS', 'ReactJS', 'JS'];
    const backEndSkills = ['Node', 'Python', 'Java', 'PHP', 'Ruby', 'C#', 'Go', 'Express', 'Django', 'Spring', 'NodeJS'];
    const databaseSkills = ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'SQL', 'NoSQL'];
    
    const categorized = {
      frontend: [],
      backend: [],
      database: [],
      other: []
    };
    
    skillsArray.forEach(skill => {
      const skillLower = skill.toLowerCase();
      if (frontEndSkills.some(fe => skillLower.includes(fe.toLowerCase()))) {
        categorized.frontend.push(skill);
      } else if (backEndSkills.some(be => skillLower.includes(be.toLowerCase()))) {
        categorized.backend.push(skill);
      } else if (databaseSkills.some(db => skillLower.includes(db.toLowerCase()))) {
        categorized.database.push(skill);
      } else {
        categorized.other.push(skill);
      }
    });
    
    return categorized;
  };

  const categorizedSkills = categorizeSkills(skills);

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue gradient circle top right */}
        <div className="absolute -top-10 -right-10 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60"></div>

        {/* Orange rectangle */}
        <div className="absolute top-12 sm:top-24 right-8 sm:right-16 w-3 sm:w-4 h-8 sm:h-12 bg-orange-400 rounded-sm transform rotate-12"></div>

        {/* Blue square */}
        <div className="absolute top-4 sm:top-8 right-16 sm:right-32 w-4 sm:w-6 h-4 sm:h-6 bg-blue-500 rounded-sm"></div>

        {/* Orange circle */}
        <div className="absolute top-2 sm:top-4 left-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-orange-300 rounded-full"></div>

        {/* Bottom geometric elements */}
        <div className="absolute bottom-16 sm:bottom-32 right-4 sm:right-8 w-4 sm:w-6 h-4 sm:h-6 bg-blue-500 rounded-sm"></div>
        <div className="absolute bottom-8 sm:bottom-16 right-8 sm:right-16 w-3 sm:w-4 h-3 sm:h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-8 sm:left-16 w-4 sm:w-5 h-4 sm:h-5 bg-blue-200 rounded-full"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Left side - Name and intro */}
            <div className="flex-1 relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('personalInfo')}
                  className="absolute -top-2 -right-2 p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Personal Info"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ fontWeight: 800 }}>
                {personalInfo.name}
              </h1>
              <div className="w-12 sm:w-16 h-1 bg-blue-400 mb-4"></div>

              <div className="text-gray-700 mb-6">
                <p className="text-base sm:text-lg text-blue-500 mb-1">Hello there, I'm a</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{personalInfo.title}</p>
                <p className="text-gray-600 text-sm sm:text-base">Based in {personalInfo.location}</p>
              </div>
            </div>
            
            {/* Right side - Profile photo and contact */}
            <div className="flex flex-row lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-4 mt-4 lg:mt-0">
              {/* Profile photo placeholder */}
              <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                <div className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-white text-xs">Photo</span>
                </div>
              </div>

              {/* Contact info bubbles */}
              <div className="flex flex-col lg:space-y-2 space-y-1 flex-1 lg:flex-initial">
                <div className="bg-blue-300 text-gray-800 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium">
                  {personalInfo.email}
                </div>
                <div className="bg-orange-300 text-gray-800 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium">
                  {personalInfo.phone}
                </div>
                <div className="bg-blue-200 text-gray-800 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium">
                  www.portfolio.dev
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Work Experience */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('experience', 0)}
                  className="absolute -top-2 -right-2 p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Experience"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Work Experiences</h2>
              <div className="space-y-4 sm:space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full"></div>
                    <div className="ml-4 sm:ml-6 border-l-2 border-gray-200 pl-3 sm:pl-4 pb-4 sm:pb-6">
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">{exp.duration}</div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">{exp.company}</h3>
                      <p className="text-gray-700 font-medium text-sm sm:text-base">{exp.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('languages')}
                  className="absolute -top-2 -right-2 p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Languages"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Languages</h2>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">ENGLISH</span>
                  <span className="text-gray-600 text-xs sm:text-sm">- Advanced level</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">HINDI</span>
                  <span className="text-gray-600 text-xs sm:text-sm">- Mother Tongue</span>
                </div>
              </div>
            </div>

            {/* Hobby */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('hobby')}
                  className="absolute -top-2 -right-2 p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Hobby"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Hobby</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🧗</span>
                  <span className="text-gray-700">Climbing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">✍️</span>
                  <span className="text-gray-700">Writing Articles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">📚</span>
                  <span className="text-gray-700">Reading</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">💻</span>
                  <span className="text-gray-700">Open Source Contributor</span>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-700 leading-relaxed">
                <p>A Blockchain, a CMS, a VanillaJS web app</p>
                <p className="font-bold">"#3 Product of the day"</p>
                <p>on ProductHunt</p>
              </div>
              
              <div className="mt-3 text-sm text-gray-700">
                <p>🌟 Want to discover them? Go to my website</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('education')}
                  className="absolute -top-2 -right-2 p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Education"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">2020</div>
                  <h3 className="font-bold text-gray-900">O'Clock</h3>
                  <p className="text-gray-700">Grande École du Numérique</p>
                  <p className="text-gray-700">FullStack web dev</p>
                </div>
                {education.length > 0 && education.map((edu) => (
                  <div key={edu.id}>
                    <div className="text-sm text-gray-500">{edu.year}</div>
                    <h3 className="font-bold text-gray-900">{edu.school}</h3>
                    <p className="text-gray-700">{edu.degree}</p>
                  </div>
                ))}
                <div>
                  <div className="text-sm text-gray-500">2012</div>
                  <h3 className="font-bold text-gray-900">ESG Aix</h3>
                  <p className="text-gray-700">BTS Negociation & Relation Client</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="relative group">
              {onEditSection && (
                <button
                  onClick={() => onEditSection('skills')}
                  className="absolute -top-2 -right-2 p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Edit Skills"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                  </svg>
                </button>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Skills</h2>
              
              {/* Frontend Skills */}
              {categorizedSkills.frontend.length > 0 && (
                <div className="mb-4">
                  <div className="bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    FRONT
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedSkills.frontend.map((skill, index) => (
                      <span key={`frontend-${index}`} className="text-gray-700 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Backend Skills */}
              {categorizedSkills.backend.length > 0 && (
                <div className="mb-4">
                  <div className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    BACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedSkills.backend.map((skill, index) => (
                      <span key={`backend-${index}`} className="text-gray-700 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Database Skills */}
              {categorizedSkills.database.length > 0 && (
                <div className="mb-4">
                  <div className="bg-blue-300 text-gray-800 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    DATABASE
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedSkills.database.map((skill, index) => (
                      <span key={`database-${index}`} className="text-gray-700 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Other Skills */}
              {categorizedSkills.other.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedSkills.other.map((skill, index) => (
                      <span key={`other-${index}`} className="text-gray-700 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
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

export default CreativeGeometricTemplate;
