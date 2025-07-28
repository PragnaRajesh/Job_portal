import React, { useState } from 'react';
import { ArrowLeft, Download, Save, Edit3, Plus, Trash2, ChevronDown, MoreVertical } from 'lucide-react';
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

const ResumeEditor = ({ template, onBack, onSave, onDownload }) => {
  // CSS for ensuring full A4 resume preview without cropping
  const editorPreviewStyles = `
    .resume-editor-preview .max-w-4xl {
      max-width: none !important;
    }
    
    .resume-editor-preview .overflow-hidden {
      overflow: visible !important;
    }
    
    .resume-editor-preview > div {
      width: 49.625rem !important;
      height: 70.1875rem !important;
      overflow: visible !important;
    }
  `;

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: 'John Doe',
      title: 'Software Developer',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      linkedin: 'linkedin.com/in/johndoe',
      website: 'johndoe.dev'
    },
    summary: 'Experienced software developer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating efficient, scalable solutions.',
    experience: [
      {
        id: 1,
        title: 'Senior Software Developer',
        company: 'Tech Solutions Inc.',
        location: 'New York, NY',
        duration: '2021 - Present',
        responsibilities: [
          'Led development of 3 major web applications serving 10k+ users',
          'Mentored junior developers and conducted code reviews',
          'Implemented CI/CD pipelines reducing deployment time by 60%'
        ]
      },
      {
        id: 2,
        title: 'Software Developer',
        company: 'StartupXYZ',
        location: 'San Francisco, CA',
        duration: '2019 - 2021',
        responsibilities: [
          'Developed responsive web applications using React and Node.js',
          'Collaborated with design team to implement pixel-perfect UIs',
          'Optimized database queries improving performance by 40%'
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        location: 'Boston, MA',
        year: '2019'
      }
    ],
    skills: [
      'JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateSummary = (value) => {
    setResumeData(prev => ({
      ...prev,
      summary: value
    }));
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      title: '',
      company: '',
      location: '',
      duration: '',
      responsibilities: ['']
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addResponsibility = (expId) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === expId 
          ? { ...exp, responsibilities: [...exp.responsibilities, ''] }
          : exp
      )
    }));
  };

  const updateResponsibility = (expId, index, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === expId 
          ? { 
              ...exp, 
              responsibilities: exp.responsibilities.map((resp, i) => 
                i === index ? value : resp
              )
            }
          : exp
      )
    }));
  };

  const removeResponsibility = (expId, index) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === expId 
          ? { 
              ...exp, 
              responsibilities: exp.responsibilities.filter((_, i) => i !== index)
            }
          : exp
      )
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const updateSkill = (index, value) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const removeSkill = (index) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now(),
      degree: '',
      school: '',
      location: '',
      year: ''
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const getTemplateComponent = () => {
    const templateMap = {
      // Graphics Templates
      'graphic-1': GraphicsTemplate,
      'graphic-2': GraphicsTemplate2,
      'graphic-3': GraphicsTemplate3,
      // AI Templates
      'ai-1': AITemplate,
      'ai-2': AITemplate2,
      'ai-3': AITemplate3,
      // Professional Templates
      'prof-1': ProfessionalTemplate,
      'prof-2': ProfessionalTemplate2,
      'prof-3': ProfessionalTemplate3,
      // Basic Templates
      'basic-1': BasicTemplate,
      'basic-2': BasicTemplate2,
      'basic-3': BasicTemplate3,
    };
    
    const TemplateComponent = templateMap[template?.id] || BasicTemplate;
    return <TemplateComponent data={resumeData} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <style dangerouslySetInnerHTML={{ __html: editorPreviewStyles }} />
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Back to Templates</span>
              </button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
                {template?.name || 'Resume Editor'}
              </h1>
            </div>
            
            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isEditing 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span>{isEditing ? 'Preview' : 'Edit'}</span>
              </button>
              
              <button
                onClick={() => onSave(resumeData)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              
              <button
                onClick={() => onDownload(resumeData)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Mobile Action Bar - Option 1: All buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-20 md:hidden">
        <div className="flex items-center justify-between space-x-3">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-colors ${
              isEditing 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span className="text-sm">{isEditing ? 'Preview' : 'Edit'}</span>
          </button>
          
          <button
            onClick={() => onSave(resumeData)}
            className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span className="text-sm">Save</span>
          </button>
          
          <button
            onClick={() => onDownload(resumeData)}
            className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>
        </div>
      </div>

      {/* Alternative Mobile Action Bar - Option 2: Dropdown style */}
      {/* Uncomment below and comment above for dropdown version */}
      {/*
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-20 md:hidden">
        <div className="flex items-center justify-between space-x-3">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-colors ${
              isEditing 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span className="text-sm">{isEditing ? 'Preview' : 'Edit'}</span>
          </button>
          
          <div className="relative">
            <button
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
              <span className="text-sm">Actions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {showMobileDropdown && (
              <div className="absolute bottom-full mb-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-40">
                <button
                  onClick={() => {
                    onSave(resumeData);
                    setShowMobileDropdown(false);
                  }}
                  className="w-full flex items-center space-x-2 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <Save className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Save Resume</span>
                </button>
                <button
                  onClick={() => {
                    onDownload(resumeData);
                    setShowMobileDropdown(false);
                  }}
                  className="w-full flex items-center space-x-2 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <Download className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Download PDF</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Editor Panel */}
          {isEditing && (
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 space-y-4 lg:space-y-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Edit Resume Content</h2>
              
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => updatePersonalInfo('name', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={resumeData.personalInfo.title}
                    onChange={(e) => updatePersonalInfo('title', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="LinkedIn Profile (optional)"
                    value={resumeData.personalInfo.linkedin}
                    onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Professional Summary</h3>
                <textarea
                  placeholder="Write a brief summary of your professional background..."
                  value={resumeData.summary}
                  onChange={(e) => updateSummary(e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-700">Work Experience</h3>
                  <button
                    onClick={addExperience}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Experience</span>
                  </button>
                </div>
                
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Job Title"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g., 2021 - Present)"
                        value={exp.duration}
                        onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-600">Responsibilities</label>
                        <button
                          onClick={() => addResponsibility(exp.id)}
                          className="text-blue-600 hover:text-blue-700 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-center space-x-2">
                          <input
                            type="text"
                            placeholder="Describe your responsibility or achievement..."
                            value={resp}
                            onChange={(e) => updateResponsibility(exp.id, respIndex, e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          />
                          {exp.responsibilities.length > 1 && (
                            <button
                              onClick={() => removeResponsibility(exp.id, respIndex)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {resumeData.experience.length > 1 && (
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-500 hover:text-red-700 text-sm flex items-center space-x-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove Experience</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-700">Education</h3>
                  <button
                    onClick={addEducation}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Education</span>
                  </button>
                </div>
                
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Degree/Certificate"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="School/Institution"
                        value={edu.school}
                        onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={edu.location}
                        onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Year (e.g., 2020)"
                        value={edu.year}
                        onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    {resumeData.education.length > 1 && (
                      <div className="flex justify-end">
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-500 hover:text-red-700 text-sm flex items-center space-x-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-700">Skills</h3>
                  <button
                    onClick={addSkill}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Skill</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Skill"
                        value={skill}
                        onChange={(e) => updateSkill(index, e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {resumeData.skills.length > 1 && (
                        <button
                          onClick={() => removeSkill(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Preview Panel */}
          <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${isEditing ? '' : 'lg:col-span-2'}`}>
            <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Resume Preview</h2>
              <div className="text-sm text-gray-500">
                {template?.name || 'Template'}
              </div>
            </div>
            <div className="p-2 sm:p-4 lg:p-6 bg-gray-50">
              <div className="bg-white rounded-lg shadow-xl mx-auto overflow-hidden" 
                   style={{ 
                     width: '100%', 
                     maxWidth: isEditing ? '25rem' : '31.25rem',
                     height: isEditing ? '31.25rem' : '37.5rem',
                     transformOrigin: 'top center'
                   }}>
                <div className="w-full h-full flex items-start justify-center p-2">
                  <div 
                    className="origin-top-center bg-white shadow-lg resume-editor-preview"
                    style={{
                      width: '49.625rem',
                      height: '70.1875rem',
                      transform: isEditing 
                        ? 'scale(0.45)' 
                        : window.innerWidth < 768 
                          ? 'scale(0.4)' 
                          : 'scale(0.5)',
                      transformOrigin: 'top center'
                    }}
                  >
                    {getTemplateComponent()}
                  </div>
                </div>
              </div>
              
              {/* Template Info */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  {template?.description || 'Professional resume template'}
                </p>
                <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-500">
                  <span>A4 Size</span>
                  <span>•</span>
                  <span>Print Ready</span>
                  <span>•</span>
                  <span>ATS Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;