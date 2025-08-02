import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, FileText, Users, User, X, HomeIcon, Briefcase, Plus } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import ResumeTemplates from './resumetemplates';
import ResumeEditor from './resumeeditor';

// Import all template components for preview
import GraphicsTemplate from './graphictemplate';
import GraphicsTemplate2 from './graphictemplate2';
import GraphicsTemplate3 from './graphictemplate3';
import ProfessionalTemplate from './professionaltemplate';
import ProfessionalTemplate2 from './professionaltemplate2';
import ProfessionalTemplate3 from './professionaltemplate3';
import BasicTemplate from './basictemplate';
import BasicTemplate2 from './basictemplate2';
import BasicTemplate3 from './basictemplate3';
import AITemplate from './AItemplate';
import AITemplate2 from './AItemplate2';
import AITemplate3 from './AItemplate3';
import CreativeTechTemplate from './creativetechtemplate';
import MarketingCreativeTemplate from './marketingcreativetemplate';
import BusinessExecutiveTemplate from './businessexecutivetemplate';
import HealthcareTemplate from './healthcaretemplate';
import EducationTemplate from './educationtemplate';

function ResumeBuilder() {
  const navigate = useNavigate();
  const [showTemplates, setShowTemplates] = React.useState(false);
  const [templateCategory, setTemplateCategory] = React.useState('');
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const [showEditor, setShowEditor] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);
  const [previewTemplate, setPreviewTemplate] = React.useState(null);

  // CSS for full A4 resume preview
  const fullPreviewStyles = `
    .full-resume-preview .max-w-4xl {
      max-width: none !important;
    }
    
    .full-resume-preview .overflow-hidden {
      overflow: visible !important;
    }
    
    .full-resume-preview {
      width: 49.625rem !important;
      height: 70.1875rem !important;
      overflow: visible !important;
    }
  `;

  // Sample data for template previews
  const sampleData = {
    personalInfo: {
      name: 'Alex Johnson',
      title: 'Senior Software Engineer',
      email: 'alex.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/alexjohnson',
      website: 'alexjohnson.dev'
    },
    summary: 'Innovative software engineer with 8+ years of experience in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of leading cross-functional teams and delivering scalable solutions.',
    experience: [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        duration: '2021 - Present',
        responsibilities: [
          'Led development of microservices architecture serving 1M+ users',
          'Mentored team of 5 junior developers and conducted technical interviews',
          'Implemented CI/CD pipelines reducing deployment time by 70%'
        ]
      },
      {
        id: 2,
        title: 'Software Engineer',
        company: 'StartupXYZ',
        location: 'San Francisco, CA',
        duration: '2019 - 2021',
        responsibilities: [
          'Built responsive web applications using React and TypeScript',
          'Optimized database performance improving query speed by 50%',
          'Collaborated with design team to implement pixel-perfect UIs'
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'Stanford University',
        location: 'Stanford, CA',
        year: '2019'
      }
    ],
    skills: [
      'JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'
    ]
  };

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
    setPreviewTemplate(template);
    setShowPreview(true);
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

  const handleDownloadResume = async (resumeData) => {
    try {
      // Create a temporary container for PDF generation
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '0';
      tempDiv.style.width = '794px';
      tempDiv.style.height = '1123px';
      tempDiv.style.background = 'white';
      tempDiv.style.padding = '24px';
      tempDiv.style.boxSizing = 'border-box';
      tempDiv.style.fontFamily = 'system-ui, -apple-system, sans-serif';

      // Get the selected template component
      const TemplateComponent = getTemplateComponent(selectedTemplate?.id);

      // Create a React element and render it
      const React = require('react');
      const ReactDOMServer = require('react-dom/server');

      // For now, use sample data since we don't have full resume data here
      const templateHTML = `
        <div style="width: 794px; height: 1123px; background: white; padding: 24px; box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 8px;">${sampleData.personalInfo.name}</h1>
            <p style="font-size: 18px; color: #6B7280; margin-bottom: 16px;">${sampleData.personalInfo.title}</p>
            <p style="font-size: 14px; color: #6B7280;">${sampleData.personalInfo.email} • ${sampleData.personalInfo.phone} • ${sampleData.personalInfo.location}</p>
          </div>
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #374151;">PROFESSIONAL SUMMARY</h2>
            <p style="font-size: 14px; line-height: 1.5; color: #6B7280;">${sampleData.summary}</p>
          </div>
        </div>
      `;

      tempDiv.innerHTML = templateHTML;
      document.body.appendChild(tempDiv);

      // PDF options
      const opt = {
        margin: 0,
        filename: `${sampleData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          allowTaint: false
        },
        jsPDF: {
          unit: 'px',
          format: [794, 1123],
          orientation: 'portrait',
          compress: true
        }
      };

      // Generate and download PDF
      await html2pdf().set(opt).from(tempDiv).save();

      // Clean up
      document.body.removeChild(tempDiv);

      alert('Resume downloaded successfully!');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  // Template component mapping
  const getTemplateComponent = (templateId) => {
    const templateMap = {
      'graphic-1': GraphicsTemplate,
      'graphic-2': GraphicsTemplate2,
      'graphic-3': GraphicsTemplate3,
      'ai-1': AITemplate,
      'ai-2': AITemplate2,
      'ai-3': AITemplate3,
      'prof-1': ProfessionalTemplate,
      'prof-2': ProfessionalTemplate2,
      'prof-3': ProfessionalTemplate3,
      'basic-1': BasicTemplate,
      'basic-2': BasicTemplate2,
      'basic-3': BasicTemplate3,
      'tech-1': CreativeTechTemplate,
      'tech-2': AITemplate,
      'tech-3': AITemplate2,
      'marketing-1': MarketingCreativeTemplate,
      'marketing-2': GraphicsTemplate,
      'marketing-3': GraphicsTemplate2,
      'business-1': BusinessExecutiveTemplate,
      'business-2': ProfessionalTemplate,
      'business-3': ProfessionalTemplate2,
      'healthcare-1': HealthcareTemplate,
      'healthcare-2': ProfessionalTemplate3,
      'healthcare-3': BasicTemplate2,
      'edu-1': EducationTemplate
    };
    return templateMap[templateId] || BasicTemplate;
  };

  // Preview Modal Component
  const PreviewModal = () => {
    if (!showPreview || !previewTemplate) return null;

    const TemplateComponent = getTemplateComponent(previewTemplate.id);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <style dangerouslySetInnerHTML={{ __html: fullPreviewStyles }} />
        <div className="bg-white rounded-lg max-w-6xl max-h-[95vh] w-full overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{previewTemplate.name}</h3>
              <p className="text-sm text-gray-600">{previewTemplate.description}</p>
            </div>
            <button 
              onClick={() => setShowPreview(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Preview Content */}
          <div className="flex-1 overflow-auto bg-gray-100 p-4">
            <div className="mx-auto bg-white shadow-lg flex items-center justify-center overflow-hidden" 
                 style={{ 
                   width: '100%',
                   minHeight: '31.25rem',
                   maxWidth: '31.25rem'
                 }}>
              <div 
                className="bg-white shadow-xl full-resume-preview"
                style={{ 
                  width: '49.625rem',
                  height: '70.1875rem',
                  transform: 'scale(0.6)',
                  transformOrigin: 'top center'
                }}
              >
                <TemplateComponent data={sampleData} />
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-200 flex justify-between">
            <button 
              onClick={() => setShowPreview(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button 
              onClick={() => {
                handleSelectTemplate(previewTemplate);
                setShowPreview(false);
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Use This Template
            </button>
          </div>
        </div>
      </div>
    );
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
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6">
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" onClick={() => navigate(-1)}/>
          </button>
        </div>

        {/* Main Content */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 lg:max-w-4xl lg:mx-auto pb-8">
          {/* Title Section */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-3 sm:mb-4 text-center">
              Job-Winning<br />Resume Template!
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
              Get the job 2x as fast. Use recruiter-approved templates and step by step content recommendations to create a new resume.
            </p>
            
            <div className="flex flex-col lg:flex-row justify-center lg:justify-end space-y-3 lg:space-y-0 lg:space-x-4">
              <button
                onClick={() => window.location.href = '/resume/ai-chat'}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full font-medium text-sm sm:text-base md:text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group shadow-lg"
              >
                <span>✨ AI Resume Chat</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-600 py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Traditional Builder</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Feature Cards */}
          <div className="mb-6 sm:mb-8">
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide py-6 sm:py-8 -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 px-6 sm:px-8 md:px-12 lg:px-16 md:grid md:grid-cols-3 md:overflow-visible md:space-x-0 md:gap-6" style={{backgroundColor: '#FFF2EB'}}>
              {/* Card 1 - Recruiter-Approved Resume */}
              <div className="flex-shrink-0 w-52 sm:w-60 md:w-full bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <div className="bg-white p-2 sm:p-3 rounded-lg w-fit shadow-sm">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg mb-1">Recruiter-Approved Resume</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-tight">
                      We work with recruiters to design resume templates that format automatically.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Land an Interview */}
              <div className="flex-shrink-0 w-52 sm:w-60 md:w-full bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <div className="bg-white p-2 sm:p-3 rounded-lg w-fit shadow-sm">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg mb-1">Land an Interview</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-tight">
                      We suggest the skills you should add. It helped over a million get interviews.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Finish Your Resume in 15 Minutes */}
              <div className="flex-shrink-0 w-52 sm:w-60 md:w-full bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <div className="bg-purple-50 p-2 sm:p-3 rounded-lg w-fit shadow-sm">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg mb-1">Finish Your Resume in 15 Minutes</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-tight">
                      Resume Now helps you tackle your work experience by reminding you what you did at your job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-8 sm:mb-12">
            <div className="w-6 h-2 sm:w-8 sm:h-3 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
          </div>

          {/* Template Categories */}
          <div className="space-y-4 sm:space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            <div 
              className="bg-green-100 p-5 sm:p-6 md:p-8 rounded-2xl hover:bg-green-200 transition-colors cursor-pointer group border border-green-200"
              onClick={() => handleCategoryClick('graphics')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">Graphics Resume Templates</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Classic colorful templates with gradient designs</p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-purple-100 to-blue-100 p-5 sm:p-6 md:p-8 rounded-2xl hover:from-purple-200 hover:to-blue-200 transition-all cursor-pointer group border border-purple-200 relative overflow-hidden"
              onClick={() => window.location.href = '/resume/ai-chat'}
            >
              <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                ✨ NEW
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">AI Resume Builder Chat</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Create resumes with AI assistance through chat</p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-orange-100 p-5 sm:p-6 md:p-8 rounded-2xl hover:bg-orange-200 transition-colors cursor-pointer group border border-orange-200"
              onClick={() => handleCategoryClick('professional')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">Professional Resume Templates</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Traditional professional layouts with clean design</p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </div>
              </div>
            </div>

            <div 
              className="bg-blue-100 p-5 sm:p-6 md:p-8 rounded-2xl hover:bg-blue-200 transition-colors cursor-pointer group border border-blue-200"
              onClick={() => handleCategoryClick('basic')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">Basic/Modern Resume Templates</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Simple and clean templates for any profession</p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-full group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
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

      {/* Preview Modal */}
      <PreviewModal />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-4 sm:py-5 border-t border-gray-100 bg-white">
        <HomeIcon size={22} className="text-gray-600 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer hover:text-blue-600 transition-colors" 
        onClick={() => console.log('Navigate to home')}/>
        <Briefcase
          size={22}
          className="text-gray-600 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => console.log('Navigate to jobs')}
        />
         <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Plus className="w-6 h-6 sm:w-7 sm:h-7 text-white" onClick={() => console.log('Navigate to chats')} />
                </div>
        <FileText
          size={22}
          className="text-gray-600 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => console.log('Navigate to applications')}
        />
        <User
          size={22}
          className="text-gray-600 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => console.log('Navigate to profile')}
        />
      </div>
    </div>
  );
}

export default ResumeBuilder;
