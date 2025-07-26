import React from 'react';
import { X, Download, Save, Edit3, ArrowLeft } from 'lucide-react';
import GraphicsTemplate from './graphictemplate';
import ProfessionalTemplate from './professionaltemplate';
import BasicTemplate from './basictemplate';
import AITemplate from './AItemplate';

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
        description: 'Eye-catching design with color accents and visual hierarchy',
        category: 'graphics',
        component: GraphicsTemplate
      },
      {
        id: 'graphic-3',
        name: 'Design Focus',
        description: 'Portfolio-style layout emphasizing visual design skills',
        category: 'graphics',
        component: GraphicsTemplate
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
        name: 'AI Optimized',
        description: 'Data-driven layout with visual elements and smart sections',
        category: 'ai',
        component: AITemplate
      },
      {
        id: 'ai-3',
        name: 'Future Ready',
        description: 'Next-gen design with interactive elements and modern styling',
        category: 'ai',
        component: AITemplate
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
        name: 'Corporate Standard',
        description: 'Traditional format preferred by HR departments and recruiters',
        category: 'professional',
        component: ProfessionalTemplate
      },
      {
        id: 'prof-3',
        name: 'Business Elite',
        description: 'Sophisticated design for senior management positions',
        category: 'professional',
        component: ProfessionalTemplate
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
        name: 'Modern Minimal',
        description: 'Contemporary clean layout with subtle design elements',
        category: 'basic',
        component: BasicTemplate
      },
      {
        id: 'basic-3',
        name: 'Essential',
        description: 'Straightforward design perfect for any industry',
        category: 'basic',
        component: BasicTemplate
      }
    ]
  };

  const getCategoryTitle = (category) => {
    const titles = {
      graphics: 'Graphics Resume Templates',
      ai: 'AI Resume Builder Templates',
      professional: 'Professional Resume Templates',
      basic: 'Basic/Modern Resume Templates'
    };
    return titles[category] || 'Resume Templates';
  };

  const currentTemplates = templates[templateCategory] || [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg sm:rounded-2xl w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
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
        <div className="p-3 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentTemplates.map((template) => (
              <div key={template.id} className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="bg-white rounded-md sm:rounded-lg mb-3 sm:mb-4 min-h-[300px] sm:min-h-[400px] border-2 border-gray-200 group-hover:border-blue-300 transition-colors overflow-hidden">
                  <div className="transform scale-[0.15] sm:scale-[0.25] origin-top-left w-[666%] sm:w-[400%] h-[666%] sm:h-[400%]">
                    {template.component && (
                      <template.component data={sampleData} />
                    )}
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{template.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{template.description}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button 
                      onClick={() => onSelectTemplate(template)}
                      className="flex-1 bg-blue-600 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-md sm:rounded-lg font-medium hover:bg-blue-700 transition-colors text-xs sm:text-sm shadow-md hover:shadow-lg"
                    >
                      Choose Template
                    </button>
                    <button 
                      onClick={() => onPreviewTemplate(template)}
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-gray-300 text-gray-700 rounded-md sm:rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-xs sm:text-sm"
                    >
                      Preview
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
