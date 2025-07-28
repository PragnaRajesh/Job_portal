import React from 'react';
import { ArrowLeft, Edit3, Save, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumePreview = () => {
  const navigate = useNavigate();

  // Sample data matching the image
  const resumeData = {
    personalInfo: {
      name: 'ALEX JOHNSON',
      title: 'Full Stack Developer',
      email: 'alex.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA'
    },
    summary: 'Passionate developer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. I am passionate about creating efficient, scalable solutions.',
    skills: [
      'JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'Stanford University',
        year: '2019'
      }
    ]
  };

  const handleEdit = () => {
    navigate('/resume/editor');
  };

  const handleSave = () => {
    // Handle save logic
    console.log('Resume saved');
  };

  const handleDownload = () => {
    // Handle download logic
    console.log('Resume downloaded');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Creative Pro</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
          <span className="text-gray-500 text-lg">Creative Pro</span>
        </div>

        {/* Resume Preview Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {/* Creative Pro Template Preview */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-3">{resumeData.personalInfo.name}</h1>
            <p className="text-2xl opacity-90 mb-4">{resumeData.personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 text-base">
              <span>{resumeData.personalInfo.email}</span>
              <span>•</span>
              <span>{resumeData.personalInfo.phone}</span>
              <span>•</span>
              <span>{resumeData.personalInfo.location}</span>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Skills and Education */}
              <div className="lg:col-span-1 space-y-8">
                {/* Skills */}
                <div>
                  <h2 className="text-xl font-bold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
                    SKILLS
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {resumeData.skills.map((skill, index) => (
                      <div key={index} className="bg-purple-50 text-purple-800 px-3 py-3 rounded-lg text-sm font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
                    EDUCATION
                  </h2>
                  <div className="space-y-4">
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-purple-300 pl-4">
                        <h3 className="font-semibold text-gray-800 mb-1">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.school}</p>
                        <p className="text-gray-500 text-sm">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Summary */}
              <div className="lg:col-span-2 space-y-8">
                {/* Summary */}
                <div>
                  <h2 className="text-xl font-bold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
                    PROFESSIONAL SUMMARY
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{resumeData.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleEdit}
            className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Edit3 className="w-5 h-5" />
            <span>Edit</span>
          </button>
          
          <button 
            onClick={handleSave}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Save</span>
          </button>
          
          <button 
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;