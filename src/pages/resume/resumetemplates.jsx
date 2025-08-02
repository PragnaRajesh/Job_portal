import React from 'react';
import { X, Download, Save, Edit3, ArrowLeft } from 'lucide-react';
import html2pdf from 'html2pdf.js';

// CSS for preview mode to override template dimensions - Full A4 size display
const previewStyles = `
  /* Resume preview container - fills completely */
  .resume-preview-container {
    height: 25rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9fafb;
    position: relative;
    border-radius: 8px;
  }

  /* Main preview wrapper - fills container */
  .resume-preview-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* Scaled resume content - fits container exactly */
  .resume-preview-scale {
    width: 100%;
    height: 100%;
    transform: none;
    transform-origin: center center;
    background: white;
    box-shadow: none;
    border-radius: 0;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  /* Template content styling - fills completely */
  .resume-preview-scale > div {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 12px !important;
    overflow: hidden !important;
    position: relative !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
  }

  /* Override template constraints */
  .resume-preview-wrapper .max-w-4xl {
    max-width: none !important;
    width: 100% !important;
  }

  .resume-preview-wrapper .overflow-hidden {
    overflow: visible !important;
  }

  .resume-preview-wrapper .min-h-screen {
    min-height: 100% !important;
    height: 100% !important;
  }

  .resume-preview-wrapper .mx-auto {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .resume-preview-wrapper .shadow-lg {
    box-shadow: none !important;
  }

  /* Ensure content is visible and not cut off */
  .resume-preview-wrapper * {
    box-sizing: border-box !important;
  }

  /* Ensure proper text sizing in preview */
  .resume-preview-wrapper h1 {
    font-size: 1.875rem !important;
    line-height: 2.25rem !important;
  }

  .resume-preview-wrapper h2 {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }

  .resume-preview-wrapper h3 {
    font-size: 1.125rem !important;
    line-height: 1.625rem !important;
  }

  .resume-preview-wrapper p,
  .resume-preview-wrapper span,
  .resume-preview-wrapper div {
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }

  /* Responsive container heights */
  @media (max-width: 640px) {
    .resume-preview-container {
      height: 20rem !important;
    }
    .resume-preview-scale > div {
      padding: 8px !important;
      font-size: 0.7rem !important;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .resume-preview-container {
      height: 22rem !important;
    }
    .resume-preview-scale > div {
      padding: 10px !important;
      font-size: 0.8rem !important;
    }
  }

  @media (min-width: 1025px) {
    .resume-preview-container {
      height: 25rem !important;
    }
    .resume-preview-scale > div {
      padding: 12px !important;
      font-size: 0.875rem !important;
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

  // PDF Download function
  const downloadTemplateAsPDF = async (template) => {
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

      // Create template HTML with sample data
      const templateHTML = `
        <div style="width: 794px; height: 1123px; background: white; padding: 24px; box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 8px; color: #1F2937;">${sampleData.personalInfo.name}</h1>
            <p style="font-size: 18px; color: #6B7280; margin-bottom: 16px;">${sampleData.personalInfo.title}</p>
            <p style="font-size: 14px; color: #6B7280;">${sampleData.personalInfo.email} • ${sampleData.personalInfo.phone} • ${sampleData.personalInfo.location}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #374151; border-bottom: 2px solid #E5E7EB; padding-bottom: 4px;">PROFESSIONAL SUMMARY</h2>
            <p style="font-size: 14px; line-height: 1.6; color: #4B5563;">${sampleData.summary}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #374151; border-bottom: 2px solid #E5E7EB; padding-bottom: 4px;">WORK EXPERIENCE</h2>
            <div style="margin-bottom: 16px;">
              <h3 style="font-size: 14px; font-weight: bold; color: #1F2937; margin-bottom: 4px;">${sampleData.experience[0].title}</h3>
              <p style="font-size: 14px; color: #2563EB; font-weight: 500; margin-bottom: 2px;">${sampleData.experience[0].company}</p>
              <p style="font-size: 12px; color: #6B7280; margin-bottom: 8px;">${sampleData.experience[0].location} • ${sampleData.experience[0].duration}</p>
            </div>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #374151; border-bottom: 2px solid #E5E7EB; padding-bottom: 4px;">EDUCATION</h2>
            <div>
              <h3 style="font-size: 14px; font-weight: bold; color: #1F2937; margin-bottom: 4px;">${sampleData.education[0].degree}</h3>
              <p style="font-size: 14px; color: #2563EB; font-weight: 500; margin-bottom: 2px;">${sampleData.education[0].school}</p>
              <p style="font-size: 12px; color: #6B7280;">${sampleData.education[0].location} • ${sampleData.education[0].year}</p>
            </div>
          </div>

          <div>
            <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #374151; border-bottom: 2px solid #E5E7EB; padding-bottom: 4px;">SKILLS</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${sampleData.skills.map(skill => `<span style="background: #F3F4F6; color: #374151; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500;">${skill}</span>`).join('')}
            </div>
          </div>
        </div>
      `;

      tempDiv.innerHTML = templateHTML;
      document.body.appendChild(tempDiv);

      // PDF options
      const opt = {
        margin: 0,
        filename: `${template.name.replace(/\s+/g, '_')}_Template.pdf`,
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

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };
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
                <div className="bg-white rounded-md sm:rounded-lg mb-3 sm:mb-4 border-2 border-gray-200 group-hover:border-blue-300 transition-colors w-full relative resume-preview-container shadow-sm">
                  {template.component && (
                    <div className="resume-preview-wrapper">
                      <div className="resume-preview-scale">
                        <template.component data={sampleData} />
                      </div>
                    </div>
                  )}

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
                    <button
                      onClick={() => downloadTemplateAsPDF(template)}
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
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
