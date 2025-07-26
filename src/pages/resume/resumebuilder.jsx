import React from 'react';
import { ArrowLeft, ArrowRight, FileText, Users, User, X, HomeIcon, Briefcase, Plus } from 'lucide-react';
import ResumeTemplates from './resumetemplates';
import ResumeEditor from './resumeeditor';


function ResumeBuilder() {
  const [showTemplates, setShowTemplates] = React.useState(false);
  const [templateCategory, setTemplateCategory] = React.useState('');
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const [showEditor, setShowEditor] = React.useState(false);

  const handleCategoryClick = (category) => {
    setTemplateCategory(category);
    setShowTemplates(true);
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setShowTemplates(false);
    setShowEditor(true);
  };

  const handlePreviewTemplate = (template) => {
    // Handle template preview
    console.log('Preview template:', template);
  };

  const handleBackToTemplates = () => {
    setShowEditor(false);
    setSelectedTemplate(null);
    setShowTemplates(true);
  };

  const handleSaveResume = (resumeData) => {
    // Handle saving resume data
    console.log('Save resume:', resumeData);
    alert('Resume saved successfully!');
  };

  const handleDownloadResume = (resumeData) => {
    // Handle downloading resume as PDF
    console.log('Download resume:', resumeData);
    alert('Resume download started!');
  };

  // If editor is open, show editor
  if (showEditor && selectedTemplate) {
    return (
      <ResumeEditor
        template={selectedTemplate}
        onBack={handleBackToTemplates}
        onSave={handleSaveResume}
        onDownload={handleDownloadResume}
      />
    );
  }

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

          {/* Feature Cards - Fixed Layout */}
          <div className="mb-6">
            <div className="py-6 px-4 rounded-2xl" style={{backgroundColor: '#FFF2EB'}}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {/* Card 1 - Recruiter-Approved Resume */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex flex-col space-y-3">
                    <div className="bg-white p-2 rounded-lg w-fit shadow-sm">
                      <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm mb-2">Recruiter-Approved Resume</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        We work with recruiters to design resume templates that format automatically.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Land an Interview */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex flex-col space-y-3">
                    <div className="bg-white p-2 rounded-lg w-fit shadow-sm">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm mb-2">Land an Interview</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        We suggest the skills you should add. It helped over a million get interviews.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Finish Your Resume in 15 Minutes */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 sm:col-span-2 lg:col-span-1">
                  <div className="flex flex-col space-y-3">
                    <div className="bg-purple-50 p-2 rounded-lg w-fit shadow-sm">
                      <User className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm mb-2">Finish Your Resume in 15 Minutes</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Resume Now helps you tackle your work experience by reminding you what you did at your job.
                      </p>
                    </div>
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
              className="bg-cyan-100 p-5 rounded-2xl hover:bg-cyan-200 transition-colors cursor-pointer group border border-cyan-200"
              onClick={() => handleCategoryClick('technology')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Technology & Engineering</h3>
                  <p className="text-gray-600 text-xs mt-1">Colorful tech-focused templates with modern gradients</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-pink-100 p-5 rounded-2xl hover:bg-pink-200 transition-colors cursor-pointer group border border-pink-200"
              onClick={() => handleCategoryClick('marketing')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Marketing & Creative</h3>
                  <p className="text-gray-600 text-xs mt-1">Vibrant creative templates with artistic elements</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-slate-100 p-5 rounded-2xl hover:bg-slate-200 transition-colors cursor-pointer group border border-slate-200"
              onClick={() => handleCategoryClick('business')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Business & Executive</h3>
                  <p className="text-gray-600 text-xs mt-1">Sophisticated templates for leadership roles</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-emerald-100 p-5 rounded-2xl hover:bg-emerald-200 transition-colors cursor-pointer group border border-emerald-200"
              onClick={() => handleCategoryClick('healthcare')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Healthcare & Medical</h3>
                  <p className="text-gray-600 text-xs mt-1">Professional medical templates with healthcare themes</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-violet-100 p-5 rounded-2xl hover:bg-violet-200 transition-colors cursor-pointer group border border-violet-200"
              onClick={() => handleCategoryClick('education')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Education & Academic</h3>
                  <p className="text-gray-600 text-xs mt-1">Academic templates perfect for educators and researchers</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-green-100 p-5 rounded-2xl hover:bg-green-200 transition-colors cursor-pointer group border border-green-200"
              onClick={() => handleCategoryClick('graphics')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Graphics Resume Templates</h3>
                  <p className="text-gray-600 text-xs mt-1">Classic colorful templates with gradient designs</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-purple-100 p-5 rounded-2xl hover:bg-purple-200 transition-colors cursor-pointer group border border-purple-200"
              onClick={() => handleCategoryClick('ai')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">AI Resume Builder Templates</h3>
                  <p className="text-gray-600 text-xs mt-1">Futuristic AI-inspired designs with tech elements</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-orange-100 p-5 rounded-2xl hover:bg-orange-200 transition-colors cursor-pointer group border border-orange-200"
              onClick={() => handleCategoryClick('professional')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Professional Resume Templates</h3>
                  <p className="text-gray-600 text-xs mt-1">Traditional professional layouts with clean design</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-blue-100 p-5 rounded-2xl hover:bg-blue-200 transition-colors cursor-pointer group border border-blue-200"
              onClick={() => handleCategoryClick('basic')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Basic/Modern Resume Templates</h3>
                  <p className="text-gray-600 text-xs mt-1">Simple and clean templates for any profession</p>
                </div>
                <div className="bg-white p-2 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Gallery */}
      <ResumeTemplates
        isOpen={showTemplates}
        onClose={() => setShowTemplates(false)}
        templateCategory={templateCategory}
        onSelectTemplate={handleSelectTemplate}
        onPreviewTemplate={handlePreviewTemplate}
      />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-4 border-t border-gray-100 bg-white">
        <HomeIcon size={22} className="text-gray-600" 
        onClick={() => console.log('Navigate to home')}/>
        <Briefcase
          size={22}
          className="text-gray-600"
          onClick={() => console.log('Navigate to jobs')}
        />
         <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" onClick={() => console.log('Navigate to chats')} />
                </div>
        <FileText
          size={22}
          className="text-gray-600"
          onClick={() => console.log('Navigate to applications')}
        />
        <User
          size={22}
          className="text-gray-600 cursor-pointer"
          onClick={() => console.log('Navigate to profile')}
        />
      </div>
    </div>
  );
}

export default ResumeBuilder;