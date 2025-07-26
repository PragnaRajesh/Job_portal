import React from 'react';

const AITemplate3 = ({ data }) => {
  return (
    <div className="bg-black shadow-lg min-h-screen font-mono overflow-hidden max-w-4xl mx-auto text-green-400">
      {/* Matrix-style Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4 sm:p-6 lg:p-8 border-b-2 border-green-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-2 left-2 text-green-600 text-xs opacity-30">01101000 01100101 01101100 01101100 01101111</div>
          <div className="absolute top-4 right-4 text-green-600 text-xs opacity-30">11000001 10101010</div>
          <div className="absolute bottom-2 left-8 text-green-600 text-xs opacity-30">10110011 01010101</div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-green-400 bg-black flex items-center justify-center mr-4 font-bold text-xl sm:text-2xl">
              &gt;{data.personalInfo.name.charAt(0)}_
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 break-words text-green-300">
                {data.personalInfo.name.toUpperCase()}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-green-500 break-words">&gt; {data.personalInfo.title}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-base">
            <div className="flex items-center border border-green-600 bg-gray-900 px-3 py-2">
              <span className="text-green-600 mr-2">[EMAIL]</span>
              <span className="break-all truncate text-green-400">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center border border-green-600 bg-gray-900 px-3 py-2">
              <span className="text-green-600 mr-2">[PHONE]</span>
              <span className="text-green-400">{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center border border-green-600 bg-gray-900 px-3 py-2">
              <span className="text-green-600 mr-2">[LOCATION]</span>
              <span className="text-green-400">{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Skills */}
            <div className="border-2 border-green-600 bg-gray-900 p-4 sm:p-6">
              <h2 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                <span className="mr-2">[SKILLS.EXE]</span>
                <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="border border-green-700 bg-black p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-green-400 text-sm">&gt; {skill}</span>
                      <span className="text-green-600 text-xs">[OK]</span>
                    </div>
                    <div className="bg-gray-800 h-1">
                      <div 
                        className="bg-green-400 h-1 transition-all duration-1000"
                        style={{width: `${85 + Math.random() * 15}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="border-2 border-green-600 bg-gray-900 p-4 sm:p-6">
              <h2 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                <span className="mr-2">[EDUCATION.DB]</span>
                <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={edu.id} className="border border-green-700 bg-black p-3">
                    <div className="text-green-600 text-xs mb-1">RECORD_{index + 1}</div>
                    <h3 className="text-green-400 text-sm font-bold mb-1">&gt; {edu.degree}</h3>
                    <p className="text-green-500 text-sm">&gt; {edu.school}</p>
                    <p className="text-green-600 text-xs">&gt; {edu.location} | {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Summary */}
            <div className="border-2 border-green-600 bg-gray-900 p-4 sm:p-6">
              <h2 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                <span className="mr-2">[PROFILE.TXT]</span>
                <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
              </h2>
              <div className="border border-green-700 bg-black p-4 sm:p-6">
                <div className="text-green-600 text-xs mb-2">$ cat profile.txt</div>
                <p className="text-green-400 leading-relaxed text-sm sm:text-base font-mono">
                  {data.summary}
                </p>
                <div className="text-green-600 text-xs mt-2">$ _</div>
              </div>
            </div>

            {/* Experience */}
            <div className="border-2 border-green-600 bg-gray-900 p-4 sm:p-6">
              <h2 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                <span className="mr-2">[EXPERIENCE.LOG]</span>
                <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="border border-green-700 bg-black p-4 sm:p-6">
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 border border-green-600 bg-gray-900 flex items-center justify-center text-green-400 font-bold text-sm">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                          <div className="flex-1">
                            <div className="text-green-600 text-xs mb-1">PROCESS_ID: {exp.id}</div>
                            <h3 className="text-green-300 font-bold text-base sm:text-lg mb-1">
                              &gt; {exp.title}
                            </h3>
                            <p className="text-green-400 text-sm sm:text-base">&gt; {exp.company}</p>
                            <p className="text-green-500 text-sm">&gt; {exp.location}</p>
                          </div>
                          <div className="border border-green-600 bg-gray-900 px-3 py-1 text-green-400 text-xs mt-2 sm:mt-0 self-start">
                            [ACTIVE: {exp.duration}]
                          </div>
                        </div>
                        <div className="text-green-600 text-xs mb-2">$ cat responsibilities.log</div>
                        <ul className="space-y-1 text-green-400 text-sm">
                          {exp.responsibilities.map((resp, index) => (
                            <li key={index} className="leading-relaxed flex items-start">
                              <span className="text-green-600 mr-2 flex-shrink-0">&gt;</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                        <div className="text-green-600 text-xs mt-2">$ process_complete</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-green-400 bg-black p-2 text-center">
        <div className="text-green-600 text-xs">
          [SYSTEM STATUS: ONLINE] | [CONNECTIONS: SECURE] | [AI_RESUME_v3.0]
        </div>
      </div>
    </div>
  );
};

export default AITemplate3;