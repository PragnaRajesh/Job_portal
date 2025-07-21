import React from 'react';
import { ArrowLeft, ArrowRight, FileText, Users, User, X, HomeIcon, Briefcase, Plus } from 'lucide-react';
import resume1 from "../../assets/resume1.png";
import resume2 from "../../assets/resume2.png";


function ResumeBuilder() {
  const [showTemplates, setShowTemplates] = React.useState(false);

  return (
    <div className="min-h-[100dvh] bg-gray-100 pb-28">
      {/* Full Width Container */}
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="px-6 py-4">
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-8">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-blue-600 mb-3 text-center">
              Job-Winning<br />Resume Template!
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Get the job 2x as fast. Use recruiter-approved templates and step by step content recommendations to create a new resume.
            </p>
            
            <div className="flex justify-end">
              <button className="bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-full font-medium hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 group">
                <span>Build Your Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Feature Cards */}
          <div className="mb-6">
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide py-6 -mx-6 px-6" style={{backgroundColor: '#FFF2EB'}}>
              {/* Card 1 - Recruiter-Approved Resume */}
              <div className="flex-shrink-0 w-52 bg-white p-3 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-2">
                  <div className="bg-white p-2 rounded-lg w-fit shadow-sm">
                    <FileText className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">Recruiter-Approved Resume</h3>
                    <p className="text-xs text-gray-500 leading-tight">
                      We work with recruiters to design resume templates that format automatically.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Land an Interview */}
              <div className="flex-shrink-0 w-52 bg-white p-3 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-2">
                  <div className="bg-white p-2 rounded-lg w-fit shadow-sm">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">Land an Interview</h3>
                    <p className="text-xs text-gray-500 leading-tight">
                      We suggest the skills you should add. It helped over a million get interviews.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Finish Your Resume in 15 Minutes */}
              <div className="flex-shrink-0 w-52 bg-white p-3 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-2">
                  <div className="bg-purple-50 p-2 rounded-lg w-fit shadow-sm">
                    <User className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">Finish Your Resume in 15 Minutes</h3>
                    <p className="text-xs text-gray-500 leading-tight">
                      Resume Now helps you tackle your work experience by reminding you what you did at your job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-6 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>

          {/* Template Categories */}
          <div className="space-y-4">
            <div 
              className="bg-green-100 p-5 rounded-2xl hover:bg-green-200 transition-colors cursor-pointer group border border-green-200"
              onClick={() => setShowTemplates(true)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800 text-sm">Graphics Resume Templates</h3>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div className="bg-purple-100 p-5 rounded-2xl hover:bg-purple-200 transition-colors cursor-pointer group border border-purple-200">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800 text-sm">AI Resume Builder Templates</h3>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div className="bg-orange-100 p-5 rounded-2xl hover:bg-orange-200 transition-colors cursor-pointer group border border-orange-200">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800 text-sm">Professional Resume Templates</h3>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-5 rounded-2xl hover:bg-blue-200 transition-colors cursor-pointer group border border-blue-200">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800 text-sm">Basic/Modern Resume Templates</h3>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Gallery Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Graphics Resume Templates</h2>
              <button 
                onClick={() => setShowTemplates(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Template Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                  <img 
                    src={resume1}
                    alt="Professional Resume Template 1"
                    className="w-full h-auto rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Modern Professional</h3>
                    <p className="text-sm text-gray-600">Clean and modern design perfect for corporate roles</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                  <img 
                    src={resume2}
                    alt="Professional Resume Template 2"
                    className="w-full h-auto rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Creative Professional</h3>
                    <p className="text-sm text-gray-600">Eye-catching design for creative industries</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Use This Template</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 py-3 px-8 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  Preview More Templates
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-4 border-t border-gray-100 bg-white">
        <HomeIcon size={22} className="text-gray-600" 
        onClick={() => navigate("/home")}/>
        <Briefcase
          size={22}
          className="text-gray-600"
          onClick={() => navigate("/jobs/joblist")}
        />
         <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" onClick={() => navigate("/chats/messages")} />
                </div>
        <FileText
          size={22}
          className="text-gray-600"
          onClick={() => navigate("/applications/application")}
        />
        <User
          size={22}
          className="text-gray-600 cursor-pointer"
          onClick={() => navigate("/myprofilesection/myprofile")}
        />
      </div>
    </div>
  );
}

export default ResumeBuilder;