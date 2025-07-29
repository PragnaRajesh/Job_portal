import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Bot, User, Download, FileText, Eye, Sparkles, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIResumeChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI Resume Assistant. I'll help you create a professional resume tailored to your needs. To get started, please tell me about:",
      suggestions: [
        "Your current job title or target position",
        "Your industry and years of experience", 
        "Key skills and achievements you want to highlight",
        "The type of job you're applying for"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [generatedResume, setGeneratedResume] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState('ai');
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'resume'
  const [editingSection, setEditingSection] = useState(null);
  const [userInputs, setUserInputs] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    skills: [],
    summary: ''
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage, messages.length);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput, messageCount) => {
    const responses = [
      {
        content: "Great! I understand you're looking to create a resume. Could you tell me more about your professional background? For example:",
        suggestions: [
          "What's your current or most recent job title?",
          "How many years of experience do you have?",
          "What industry do you work in?",
          "What are your key skills or specializations?"
        ]
      },
      {
        content: "Excellent! Now I'm getting a better picture. To create the most effective resume, I'd like to know:",
        suggestions: [
          "What type of positions are you targeting?",
          "What are your biggest professional achievements?",
          "What education background do you have?",
          "Any specific companies or roles you're interested in?"
        ]
      },
      {
        content: "Perfect! I have enough information to start building your resume. Based on our conversation, I'll create a professional resume that highlights your strengths. Ready to generate your personalized resume?",
        suggestions: [
          "Tell me about any specific skills to highlight",
          "What achievements should I emphasize?",
          "Any particular format preferences?",
          "Include volunteer work or certifications?"
        ],
        showGenerateButton: true
      }
    ];

    const responseIndex = Math.min(Math.floor(messageCount / 2), responses.length - 1);
    return {
      id: messages.length + 2,
      type: 'bot',
      ...responses[responseIndex]
    };
  };

  const extractUserInputs = () => {
    const userMessages = messages.filter(msg => msg.type === 'user').map(msg => msg.content);
    const conversationText = userMessages.join(' ');

    // Extract information using pattern matching and AI-like processing
    const extractedData = {
      personalInfo: {
        name: extractName(conversationText) || 'Your Name',
        title: extractJobTitle(conversationText) || 'Professional',
        email: 'your.email@example.com',
        phone: '+1 (555) 123-4567',
        location: extractLocation(conversationText) || 'Your City, State'
      },
      experience: extractExperience(conversationText),
      education: extractEducation(conversationText),
      skills: extractSkills(conversationText),
      summary: generateProfessionalSummary(conversationText)
    };

    setUserInputs(extractedData);
    return extractedData;
  };

  const extractName = (text) => {
    const namePatterns = [
      /my name is ([a-zA-Z\s]+)/i,
      /i'm ([a-zA-Z\s]+)/i,
      /i am ([a-zA-Z\s]+)/i
    ];
    for (const pattern of namePatterns) {
      const match = text.match(pattern);
      if (match) return match[1].trim();
    }
    return null;
  };

  const extractJobTitle = (text) => {
    const titlePatterns = [
      /i work as (?:a |an )?([^.]+)/i,
      /i'm (?:a |an )?([^.]+) at/i,
      /job title[:\s]+([^.]+)/i,
      /position[:\s]+([^.]+)/i,
      /(software engineer|developer|manager|analyst|designer|marketing|hr|sales)/i
    ];
    for (const pattern of titlePatterns) {
      const match = text.match(pattern);
      if (match) return match[1].trim();
    }
    return null;
  };

  const extractLocation = (text) => {
    const locationPatterns = [
      /(?:live in|from|located in|based in)\s+([^.]+)/i,
      /([A-Za-z\s]+,\s*[A-Z]{2})/
    ];
    for (const pattern of locationPatterns) {
      const match = text.match(pattern);
      if (match) return match[1].trim();
    }
    return null;
  };

  const extractExperience = (text) => {
    const experiences = [];
    const expPatterns = [
      /worked at ([^.]+) (?:as|for) ([^.]+)/i,
      /experience at ([^.]+)/i,
      /(\d+)\s*years?\s*(?:of\s*)?experience/i
    ];

    // Default experience based on conversation
    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Software Engineer',
        company: 'Tech Company',
        location: extractLocation(text) || 'City, State',
        duration: '2021 - Present',
        responsibilities: [
          'Developed and maintained web applications',
          'Collaborated with cross-functional teams',
          'Implemented best practices and coding standards'
        ]
      });
    } else if (text.toLowerCase().includes('marketing')) {
      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Marketing Specialist',
        company: 'Marketing Agency',
        location: extractLocation(text) || 'City, State',
        duration: '2021 - Present',
        responsibilities: [
          'Developed marketing campaigns and strategies',
          'Managed social media presence and content',
          'Analyzed campaign performance and metrics'
        ]
      });
    }

    return experiences;
  };

  const extractEducation = (text) => {
    const education = [];
    if (text.toLowerCase().includes('degree') || text.toLowerCase().includes('university') || text.toLowerCase().includes('college')) {
      education.push({
        id: 1,
        degree: 'Bachelor\'s Degree',
        school: 'University Name',
        location: 'City, State',
        year: '2020'
      });
    }
    return education;
  };

  const extractSkills = (text) => {
    const skillKeywords = [
      'javascript', 'react', 'node', 'python', 'java', 'html', 'css',
      'marketing', 'social media', 'analytics', 'seo', 'content',
      'management', 'leadership', 'communication', 'teamwork'
    ];

    const foundSkills = skillKeywords.filter(skill =>
      text.toLowerCase().includes(skill)
    );

    // Add default skills based on role
    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      return [...new Set([...foundSkills, 'JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'Problem Solving'])];
    } else if (text.toLowerCase().includes('marketing')) {
      return [...new Set([...foundSkills, 'Digital Marketing', 'Social Media', 'Analytics', 'Content Creation', 'SEO'])];
    }

    return foundSkills.length > 0 ? foundSkills : ['Communication', 'Teamwork', 'Problem Solving'];
  };

  const generateProfessionalSummary = (text) => {
    const years = text.match(/(\d+)\s*years?/i);
    const yearText = years ? `${years[1]}+ years of` : 'Experienced';

    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      return `${yearText} experience in software development with expertise in modern technologies and frameworks. Proven track record of delivering high-quality solutions and collaborating effectively with cross-functional teams.`;
    } else if (text.toLowerCase().includes('marketing')) {
      return `${yearText} experience in digital marketing with a focus on driving brand awareness and customer engagement. Skilled in developing comprehensive marketing strategies and analyzing campaign performance.`;
    }

    return `${yearText} professional experience with strong analytical and problem-solving skills. Dedicated to delivering excellent results and contributing to team success.`;
  };

  const generateResume = () => {
    const extractedInputs = extractUserInputs();
    setActiveTab('resume'); // Switch to resume tab

    // Simulate resume generation delay
    setTimeout(() => {
      setGeneratedResume(extractedInputs);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: `🎉 Your personalized resume has been generated! I've analyzed our conversation and created a professional resume tailored to your background. You can now edit any section, choose different templates, or download your resume.`,
        hasResume: true
      }]);
    }, 3000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  const templateOptions = [
    {
      id: 'ai',
      name: 'AI Modern',
      description: 'Futuristic design with gradient colors',
      preview: '/api/placeholder/150/200',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Clean, traditional business layout',
      preview: '/api/placeholder/150/200',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Colorful design for creative roles',
      preview: '/api/placeholder/150/200',
      color: 'from-pink-500 to-orange-500'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Simple, clean design',
      preview: '/api/placeholder/150/200',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const handleTemplateChange = (templateId) => {
    setCurrentTemplate(templateId);
    setShowTemplateSelector(false);

    // Add message to chat about template change
    const templateName = templateOptions.find(t => t.id === templateId)?.name;
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'bot',
      content: `✨ Great choice! I've updated your resume to use the ${templateName} template. Your content remains the same but with a fresh new look!`
    }]);
  };

  const handleEditSection = (section, index = null) => {
    setEditingSection({ section, index });
  };

  const handleSaveEdit = (section, data, index = null) => {
    setGeneratedResume(prev => {
      const newResume = { ...prev };
      if (index !== null && Array.isArray(newResume[section])) {
        newResume[section][index] = data;
      } else if (section === 'personalInfo') {
        newResume.personalInfo = { ...newResume.personalInfo, ...data };
      } else {
        newResume[section] = data;
      }
      return newResume;
    });
    setEditingSection(null);
  };

  const handleCancelEdit = () => {
    setEditingSection(null);
  };

  const TemplateSelector = () => {
    if (!showTemplateSelector) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Choose Resume Template</h2>
              <button
                onClick={() => setShowTemplateSelector(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600 mt-2">Select a template that best fits your style and industry</p>
          </div>

          <div className="p-6 grid grid-cols-2 gap-4 overflow-y-auto">
            {templateOptions.map((template) => (
              <div
                key={template.id}
                onClick={() => handleTemplateChange(template.id)}
                className={`relative cursor-pointer rounded-lg border-2 transition-all ${
                  currentTemplate === template.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="p-4">
                  <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${template.color} mb-3 flex items-center justify-center`}>
                    <div className="text-white text-xs font-medium">Preview</div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                  {currentTemplate === template.id && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-200">
            <button
              onClick={() => setShowTemplateSelector(false)}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ResumePreview = ({ data }) => {
    const template = templateOptions.find(t => t.id === currentTemplate);
    const templateColor = template?.color || 'from-blue-500 to-indigo-500';

    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden text-sm">
        <div className={`bg-gradient-to-r ${templateColor} text-white p-4`}>
          <h1 className="text-xl font-bold">{data.personalInfo.name}</h1>
          <p className="text-lg opacity-90 mb-2">{data.personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm opacity-80">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Experience</h2>
            {data.experience.slice(0, 1).map((exp) => (
              <div key={exp.id} className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {exp.responsibilities.slice(0, 2).map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.slice(0, 6).map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/resume/resumebuilder')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-800">AI Resume Builder</h1>
              </div>
            </div>
          </div>
          {generatedResume && (
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
              >
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex max-w-6xl mx-auto w-full">
        {/* Chat Section */}
        <div className={`${showPreview && generatedResume ? 'w-1/2' : 'w-full'} flex flex-col bg-white border-r border-gray-200`}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-gradient-to-r from-purple-500 to-blue-500'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-lg p-3 ${
                    message.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    
                    {message.suggestions && (
                      <div className="mt-3 space-y-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded text-xs transition-colors"
                          >
                            • {suggestion}
                          </button>
                        ))}
                      </div>
                    )}

                    {message.showGenerateButton && (
                      <button
                        onClick={() => {
                          // Add user message indicating they want to generate
                          const userMessage = {
                            id: messages.length + 1,
                            type: 'user',
                            content: "Yes, please generate my resume now!"
                          };
                          setMessages(prev => [...prev, userMessage]);

                          // Add generating message
                          setTimeout(() => {
                            const generatingMessage = {
                              id: messages.length + 2,
                              type: 'bot',
                              content: "🎉 Excellent! I'm now generating your personalized resume based on our conversation. This will take just a moment...",
                              isGenerating: true
                            };
                            setMessages(prev => [...prev, generatingMessage]);

                            // Generate the actual resume
                            generateResume();
                          }, 500);
                        }}
                        className="mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all text-sm font-medium shadow-lg transform hover:scale-105"
                      >
                        ✨ Generate My Resume Now
                      </button>
                    )}

                    {message.isGenerating && (
                      <div className="mt-3 flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                        <span className="text-xs text-gray-600">Generating your resume...</span>
                      </div>
                    )}

                    {message.hasResume && generatedResume && (
                      <div className="mt-3 space-y-2">
                        <button
                          onClick={() => setShowPreview(true)}
                          className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Resume</span>
                        </button>
                        <button
                          className="flex items-center space-x-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-md">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Tell me about your experience, skills, or ask questions..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <MessageCircle className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        {showPreview && generatedResume && (
          <div className="w-1/2 bg-gray-50 p-4 overflow-y-auto">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Resume Preview</h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <ResumePreview data={generatedResume} />
              <div className="mt-4 space-y-2">
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Edit Resume
                </button>
                <button
                  onClick={() => setShowTemplateSelector(true)}
                  className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Choose Different Template
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Template Selector Modal */}
      <TemplateSelector />
    </div>
  );
};

export default AIResumeChat;
