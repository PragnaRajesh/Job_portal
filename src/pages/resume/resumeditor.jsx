import React, { useState } from 'react';
import { ArrowLeft, Download, Save, Edit3, Plus, Trash2 } from 'lucide-react';
import GraphicsTemplate from './templates/GraphicsTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import BasicTemplate from './templates/BasicTemplate';
import AITemplate from './templates/AITemplate';

const ResumeEditor = ({ template, onBack, onSave, onDownload }) => {
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

  const getTemplateComponent = () => {
    const templateMap = {
      'graphic-1': GraphicsTemplate,
      'graphic-2': GraphicsTemplate,
      'graphic-3': GraphicsTemplate,
      'ai-1': AITemplate,
      'ai-2': AITemplate,
      'ai-3': AITemplate,
      'prof-1': ProfessionalTemplate,
      'prof-2': ProfessionalTemplate,
      'prof-3': ProfessionalTemplate,
      'basic-1': BasicTemplate,
      'basic-2': BasicTemplate,
      'basic-3': BasicTemplate,
    };
    
    const TemplateComponent = templateMap[template?.id] || BasicTemplate;
    return <TemplateComponent data={resumeData} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Templates
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-800">
                {template?.name || 'Resume Editor'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          {isEditing && (
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
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
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Resume Preview</h2>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
                {getTemplateComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;