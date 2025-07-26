import React from 'react';
import { X, Download, Save, Edit3, ArrowLeft } from 'lucide-react';

// CSS for preview mode to override template dimensions
const previewStyles = `
  .resume-preview-wrapper > div {
    width: 794px !important;
    height: 1123px !important;
    min-height: 1123px !important;
    max-width: 794px !important;
    max-height: 1123px !important;
    aspect-ratio: 210/297 !important;
    overflow: hidden !important;
    position: relative !important;
    transform-origin: top left !important;
  }
  
  .resume-preview-wrapper > div * {
    box-sizing: border-box !important;
  }
  
  .resume-preview-scale {
    transform: scale(0.35);
  }
  
  .resume-preview-container {
    height: 420px;
  }
  
  @media (max-width: 640px) {
    .resume-preview-scale {
      transform: scale(0.25) !important;
    }
    .resume-preview-container {
      height: 350px !important;
    }
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    .resume-preview-scale {
      transform: scale(0.30) !important;
    }
    .resume-preview-container {
      height: 380px !important;
    }
  }
`;
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
// New Section-Based Colorful Templates
import CreativeTechTemplate from './creativetechtemplate';
import MarketingCreativeTemplate from './marketingcreativetemplate';
import BusinessExecutiveTemplate from './businessexecutivetemplate';
import HealthcareTemplate from './healthcaretemplate';
import EducationTemplate from './educationtemplate';

const ResumeTemplates = ({ 
  isOpen, 
  onClose, 
  templateCategory, 
  onSelectTemplate,
  onPreviewTemplate 
}) => {
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

  const templates = {
    graphics: [
      {
        id: 'graphic-1',
        name: 'Creative Pro',
        description: 'Bold gradient design with modern layout for creative professionals',
        category: 'graphics',
        component: GraphicsTemplate
      },
      {
        id: 'graphic-2',
        name: 'Visual Impact',
        description: 'Eye-catching orange and pink theme with numbered timeline',
        category: 'graphics',
        component: GraphicsTemplate2
      },
      {
        id: 'graphic-3',
        name: 'Dark Matrix',
        description: 'Futuristic dark theme with cyan accents and modern cards',
        category: 'graphics',
        component: GraphicsTemplate3
      }
    ],
    ai: [
      {
        id: 'ai-1',
        name: 'Tech Innovator',
        description: 'Modern tech-focused design with timeline and smart layout',
        category: 'ai',
        component: AITemplate
      },
      {
        id: 'ai-2',
        name: 'Neural Network',
        description: 'Futuristic blue-purple gradient with AI-inspired elements',
        category: 'ai',
        component: AITemplate2
      },
      {
        id: 'ai-3',
        name: 'Matrix Code',
        description: 'Terminal-style green matrix theme with binary effects',
        category: 'ai',
        component: AITemplate3
      }
    ],
    professional: [
      {
        id: 'prof-1',
        name: 'Executive Elite',
        description: 'Classic professional layout perfect for corporate leadership roles',
        category: 'professional',
        component: ProfessionalTemplate
      },
      {
        id: 'prof-2',
        name: 'Corporate Blue',
        description: 'Modern corporate design with blue theme and timeline layout',
        category: 'professional',
        component: ProfessionalTemplate2
      },
      {
        id: 'prof-3',
        name: 'Business Green',
        description: 'Elegant minimalist design with green accents and skill ratings',
        category: 'professional',
        component: ProfessionalTemplate3
      }
    ],
    basic: [
      {
        id: 'basic-1',
        name: 'Clean & Simple',
        description: 'Minimalist design focusing on content and readability',
        category: 'basic',
        component: BasicTemplate
      },
      {
        id: 'basic-2',
        name: 'Modern Blue',
        description: 'Contemporary clean layout with blue accents and center alignment',
        category: 'basic',
        component: BasicTemplate2
      },
      {
        id: 'basic-3',
        name: 'Dark Headers',
        description: 'Clean design with bold dark headers and professional styling',
        category: 'basic',
        component: BasicTemplate3
      }
    ],
    technology: [
      {
        id: 'tech-1',
        name: 'Tech Innovator Pro',
        description: 'Vibrant tech-focused design with colorful gradients and A4 sizing',
        category: 'technology',
        component: CreativeTechTemplate
      },
      {
        id: 'tech-2',
        name: 'Silicon Valley',
        description: 'Modern tech gradient with timeline and skill ratings',
        category: 'technology',
        component: AITemplate
      },
      {
        id: 'tech-3',
        name: 'Code Master',
        description: 'Developer-focused template with syntax highlighting elements',
        category: 'technology',
        component: AITemplate2
      }
    ],
    marketing: [
      {
        id: 'marketing-1',
        name: 'Creative Vision',
        description: 'Bold creative template with vibrant gradients and artistic elements',
        category: 'marketing',
        component: MarketingCreativeTemplate
      },
      {
        id: 'marketing-2',
        name: 'Brand Storyteller',
        description: 'Dynamic layout perfect for marketing and creative professionals',
        category: 'marketing',
        component: GraphicsTemplate
      },
      {
        id: 'marketing-3',
        name: 'Visual Impact Pro',
        description: 'Eye-catching design with colorful timeline and modern aesthetics',
        category: 'marketing',
        component: GraphicsTemplate2
      }
    ],
    business: [
      {
        id: 'business-1',
        name: 'Executive Leader',
        description: 'Sophisticated business template with professional color scheme',
        category: 'business',
        component: BusinessExecutiveTemplate
      },
      {
        id: 'business-2',
        name: 'Corporate Excellence',
        description: 'Classic business design with elegant typography and layout',
        category: 'business',
        component: ProfessionalTemplate
      },
      {
        id: 'business-3',
        name: 'Finance Pro',
        description: 'Professional template ideal for finance and consulting roles',
        category: 'business',
        component: ProfessionalTemplate2
      }
    ],
    healthcare: [
      {
        id: 'healthcare-1',
        name: 'Medical Professional',
        description: 'Healthcare-focused template with medical color scheme and symbols',
        category: 'healthcare',
        component: HealthcareTemplate
      },
      {
        id: 'healthcare-2',
        name: 'Clinical Excellence',
        description: 'Clean medical template with professional healthcare aesthetics',
        category: 'healthcare',
        component: ProfessionalTemplate3
      },
      {
        id: 'healthcare-3',
        name: 'Nursing Care',
        description: 'Compassionate design perfect for nursing and patient care roles',
        category: 'healthcare',
        component: BasicTemplate2
      }
    ],
    education: [
      {
        id: 'edu-1',
        name: 'Academic Excellence',
        description: 'Modern education-focused template with timeline and skill ratings',
        category: 'education',
        component: EducationTemplate
      }
    ]
  };

  const getCategoryTitle = (category) => {
    const titles = {
      graphics: 'Graphics Resume Templates',
      ai: 'AI Resume Builder Templates',
      professional: 'Professional Resume Templates',
      basic: 'Basic/Modern Resume Templates',
      technology: 'Technology & Engineering Templates',
      marketing: 'Marketing & Creative Templates',
      business: 'Business & Executive Templates',
      healthcare: 'Healthcare & Medical Templates',
      education: 'Education & Academic Templates'
    };
    return titles[category] || 'Resume Templates';
  };

  const currentTemplates = templates[templateCategory] || [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <style>{previewStyles}</style>
      <div className="bg-white rounded-lg sm:rounded-2xl w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg sm:rounded-t-2xl z-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate mr-4">
            {getCategoryTitle(templateCategory)}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
        
        {/* Template Grid */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {currentTemplates.map((template) => (
              <div key={template.id} className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col items-center">
                <div className="bg-white rounded-md sm:rounded-lg mb-3 sm:mb-4 border-2 border-gray-200 group-hover:border-blue-300 transition-colors overflow-hidden w-full relative resume-preview-container shadow-sm">
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <div 
                      className="transform origin-center shadow-lg resume-preview-scale bg-white"
                      style={{ 
                        width: '794px',
                        height: '1123px',
                        aspectRatio: '210/297'
                      }}
                    >
                      {template.component && (
                        <div className="resume-preview-wrapper">
                          <template.component data={sampleData} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Template overlay for better interaction */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2 transform scale-90 group-hover:scale-100 transition-transform">
                      <span className="text-xs font-medium text-gray-700">Click to select</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 w-full">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{template.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{template.description}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => onSelectTemplate(template)}
                      className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm shadow-md hover:shadow-lg"
                    >
                      Choose Template
                    </button>
                    <button 
                      onClick={() => onPreviewTemplate(template)}
                      className="w-full px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-sm"
                    >
                      Full Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button 
              onClick={onClose}
              className="border-2 border-gray-300 text-gray-700 py-2 sm:py-3 px-6 sm:px-8 rounded-full font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-md text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;
