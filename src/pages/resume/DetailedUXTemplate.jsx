import React from 'react';

const DetailedUXTemplate = ({ data, onEditSection }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-screen">
        {/* Left Sidebar */}
        <div className="bg-gray-100 p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="relative group">
            {onEditSection && (
              <button
                onClick={() => onEditSection('personalInfo')}
                className="absolute -top-2 -right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                title="Edit Personal Info"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                </svg>
              </button>
            )}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{personalInfo.name}</h1>
            <p className="text-blue-600 font-medium mb-4 text-sm sm:text-base">{personalInfo.title}</p>
            
            {/* Contact */}
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></span>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></span>
                <span className="text-blue-600">linkedin.com/in/design-league</span>
              </div>
            </div>
          </div>

          {/* Portfolio Link */}
          <div className="relative group">
            {onEditSection && (
              <button
                onClick={() => onEditSection('portfolio')}
                className="absolute -top-2 -right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                title="Edit Portfolio"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                </svg>
              </button>
            )}
            <h3 className="font-bold text-gray-900 text-sm mb-2">PORTFOLIO LINK</h3>
            <a href="#" className="text-blue-600 text-sm underline">Portfolio</a>
          </div>

          {/* Skills */}
          <div className="relative group">
            {onEditSection && (
              <button
                onClick={() => onEditSection('skills')}
                className="absolute -top-2 -right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                title="Edit Skills"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                </svg>
              </button>
            )}
            <h3 className="font-bold text-gray-900 text-sm mb-3">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={`detailed-skill-${index}-${skill}`} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Competencies */}
          <div className="relative group">
            {onEditSection && (
              <button
                onClick={() => onEditSection('competencies')}
                className="absolute -top-2 -right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                title="Edit Competencies"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                </svg>
              </button>
            )}
            <h3 className="font-bold text-gray-900 text-sm mb-3">COMPETENCIES</h3>
            <div className="space-y-1 text-xs text-gray-700">
              <p>Cross-functional Collaboration</p>
              <p>Product Development</p>
              <p>Design Thinking</p>
              <p>Agile Methodologies</p>
              <p>Accessibility Design</p>
              <p>Information Architecture</p>
              <p>Design Sprints</p>
              <p>User-centered Design</p>
              <p>Mobile App Design</p>
              <p>Web Design</p>
              <p>Branding and Identity Design</p>
            </div>
          </div>

          {/* Education */}
          <div className="relative group">
            {onEditSection && (
              <button
                onClick={() => onEditSection('education')}
                className="absolute -top-2 -right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                title="Edit Education"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                </svg>
              </button>
            )}
            <h3 className="font-bold text-gray-900 text-sm mb-3">EDUCATION</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900 text-sm">Post Graduation - Design School, Web & Graphic Design</p>
                <p className="text-xs text-gray-600">2013 - 2014 · Design School, Web & Graphic Design · United Kingdom</p>
              </div>
              
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold text-gray-900 text-sm">{edu.degree}</p>
                  <p className="text-xs text-gray-600">{edu.year} · {edu.school}</p>
                </div>
              ))}
              
              <div>
                <p className="font-semibold text-gray-900 text-sm">Graduation - Bachelor's, Engineering</p>
                <p className="text-xs text-gray-600">2009 - 2013 · Technical University of United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 p-4 sm:p-6">
          {/* Work Experience Header */}
          <div className="mb-6 relative group">
            {onEditSection && (
              <button
                onClick={() => onEditSection('experience', 0)}
                className="absolute -top-2 -right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                title="Edit Work Experience"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                </svg>
              </button>
            )}
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">WORK EXPERIENCE</h2>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>

          {/* Experience Items */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">UX/UI Designer · Apple Inc</h3>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">FinTech</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">April 2021 - Present · 3 years, London</p>
              
              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>www.designleague.com</span>
                </div>
                
                <p>Led the design efforts to create the <strong>DESIGN LEAGUE Members Area Portal</strong>, serving a community of over 600,000 members with personalised content and help tools to make better money choices.</p>
                
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Designed Apple Inc - B2B, B2C, Vidoe, webstites interfaces. Designed DESIGN LEAGUE members area portal that offers users access to courses and independent expert help, manage subscriptions, access surveys like the Design League personal discussion participation in learning and skill development.</li>
                  <li>Through sprint planning approach, I have been able to contribute to user stories content, inter-dependencies and planning of in sprints. Ensured that tests are executed and day in sprint feedback to third party when relevant.</li>
                  <li>Tests evidenced through QA test results documentation.</li>
                  <li>Constructed and AB testing to improve UI functionality, resulting in a 50% increase in user retention rates after sign-up.</li>
                  <li>Skilled in user experience design working in cross-functional, collaborative environment, with a dedication to delivering impactful design solutions, wireframes, interactive prototypes, and high-fidelity mockups through the entire design process for web and mobile experience including research and strategy that drive organizational planning the design of high-end, functional digital products.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">Senior UX/UI Designer · Google Inc</h3>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">FinTech</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Jun 2020 - Oct 2019 · 1 year, London</p>
              
              <div className="text-sm text-gray-700 space-y-2">
                <p>Collaborated with cross-functional teams to launch successfully Google Inc's next-generation website, catering to millions visitors. Redesigned the checkout process of the website resulting in increase in conversion rates and a 10% increase in average order value.</p>
                
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Developed a cohesive design system across macOS, Windows, desktop web, mobile platforms, establishing a robust foundation for the efficient rollout of future features.</li>
                  <li>Experience in managing other designers</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">UX/UI Designer · Oracle Inc</h3>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">FinTech</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Nov 2015 - May 2016 · 2 years, London</p>
              
              <div className="text-sm text-gray-700 space-y-2">
                <p>Developed and applied design strategies for branding and product design, refining directions and finalising details.</p>
                
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Collaborated with marketing team to create concepts and assets for Oracle</li>
                  <li>Worked alongside the designers and engineers to develop and launch a new product for external clients, achieving a 20% increase in revenue within first 6 months.</li>
                  <li>Designed digital strategy strategy application for Oracle interface products.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">Junior UX/UI Designer · Design League Inc</h3>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Software Development</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">May 2016 - Apr 2014 · 2 years, United Kingdom</p>
              
              <div className="text-sm text-gray-700 space-y-2">
                <p>Over the course of this contract, I worked on 10 projects. During this role, I contributed to 10 projects, focusing on user-centred design and streamlined processes.</p>
                
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Created wireframes and conducted user interviews to simplify the setup flow for software applications and websites.</li>
                  <li>Designed wireframes and contributed to the visual design of the Design League website for an internal project.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8 relative group">
            {onEditSection && (
              <button
                onClick={() => onEditSection('languages')}
                className="absolute -top-2 -right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                title="Edit Languages"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
                </svg>
              </button>
            )}
            <h3 className="font-bold text-gray-900 text-sm mb-2">LANGUAGES</h3>
            <div className="flex space-x-6 text-sm text-gray-700">
              <span><strong>English</strong> (Fluent)</span>
              <span><strong>Romanian</strong> (Native)</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">Created by Headsup HR Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedUXTemplate;
