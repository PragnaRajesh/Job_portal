import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Bot, User, Download, FileText, Eye, Sparkles, MessageCircle, Edit3, Save, X } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('chat');
  const [editingSection, setEditingSection] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState('ai');
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced template options with more creative designs
  const templateOptions = [
    {
      id: 'ai',
      name: 'AI Modern',
      description: 'Futuristic design with gradient colors',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 'professional',
      name: 'Executive Pro',
      description: 'Sophisticated business layout',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'creative',
      name: 'Creative Burst',
      description: 'Vibrant design for creative professionals',
      color: 'from-pink-500 via-red-500 to-orange-500'
    },
    {
      id: 'minimal',
      name: 'Clean Minimal',
      description: 'Elegant simplicity',
      color: 'from-slate-600 to-slate-800'
    },
    {
      id: 'tech',
      name: 'Tech Innovator',
      description: 'Modern tech-inspired design',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'nature',
      name: 'Natural Flow',
      description: 'Earth-toned organic design',
      color: 'from-green-600 to-emerald-700'
    },
    {
      id: 'sunset',
      name: 'Sunset Glow',
      description: 'Warm sunset-inspired palette',
      color: 'from-orange-400 via-pink-500 to-purple-600'
    },
    {
      id: 'ocean',
      name: 'Ocean Depths',
      description: 'Deep blue oceanic theme',
      color: 'from-blue-800 via-blue-600 to-cyan-400'
    }
  ];

  // Extract user inputs from conversation
  const extractUserInputs = () => {
    const userMessages = messages.filter(msg => msg.type === 'user').map(msg => msg.content);
    const conversationText = userMessages.join(' ');
    
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
    const standardizedText = standardizeUserInput(text);

    // Generate creative company names based on industry
    const generateCompanyName = (industry) => {
      const techCompanies = ['InnovaTech Solutions', 'Digital Dynamics Corp', 'NextGen Technologies', 'CodeCraft Industries', 'TechVision Labs'];
      const marketingCompanies = ['BrandSphere Agency', 'Creative Catalyst Group', 'MarketMind Solutions', 'Engagement Edge', 'BrandVision Collective'];
      const designCompanies = ['DesignForge Studio', 'Creative Canvas Co.', 'Visual Impact Design', 'Artisan Creative Group', 'Design Nexus'];
      const generalCompanies = ['Excellence Enterprises', 'Innovation Hub', 'Strategic Solutions Inc.', 'Growth Partners', 'Visionary Corp'];

      if (industry === 'tech') return techCompanies[Math.floor(Math.random() * techCompanies.length)];
      if (industry === 'marketing') return marketingCompanies[Math.floor(Math.random() * marketingCompanies.length)];
      if (industry === 'design') return designCompanies[Math.floor(Math.random() * designCompanies.length)];
      return generalCompanies[Math.floor(Math.random() * generalCompanies.length)];
    };

    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      const techResponsibilities = [
        [
          'Architected and developed scalable web applications using React, Node.js, and cloud technologies',
          'Led cross-functional teams in agile development cycles, delivering projects 30% ahead of schedule',
          'Implemented automated testing and CI/CD pipelines, reducing deployment errors by 85%',
          'Mentored junior developers and conducted code reviews to maintain high-quality standards'
        ],
        [
          'Designed and built microservices architecture serving over 1 million active users',
          'Optimized database performance and queries, improving application response time by 60%',
          'Collaborated with UX/UI teams to create intuitive user interfaces and seamless user experiences',
          'Integrated third-party APIs and payment systems, enhancing platform functionality'
        ],
        [
          'Developed innovative mobile and web applications using cutting-edge technologies',
          'Implemented machine learning algorithms to enhance user personalization and engagement',
          'Established coding standards and best practices across development teams',
          'Participated in technical architecture decisions and technology stack evaluations'
        ]
      ];

      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Senior Software Engineer',
        company: generateCompanyName('tech'),
        location: extractLocation(text) || 'San Francisco, CA',
        duration: '2021 - Present',
        responsibilities: techResponsibilities[Math.floor(Math.random() * techResponsibilities.length)]
      });
    } else if (text.toLowerCase().includes('marketing')) {
      const marketingResponsibilities = [
        [
          'Developed and executed integrated marketing campaigns that increased brand awareness by 45%',
          'Managed multi-platform social media strategies, growing follower engagement by 200%',
          'Analyzed consumer behavior data to optimize marketing funnels and improve conversion rates',
          'Collaborated with creative teams to produce compelling content across digital channels'
        ],
        [
          'Led digital marketing initiatives resulting in 60% increase in qualified leads',
          'Orchestrated influencer partnerships and brand collaborations to expand market reach',
          'Implemented marketing automation workflows that improved customer retention by 35%',
          'Conducted A/B testing on campaigns to maximize ROI and optimize performance metrics'
        ],
        [
          'Crafted compelling brand narratives and messaging strategies for diverse target audiences',
          'Managed PPC campaigns across Google Ads and social platforms with $500K+ budget',
          'Developed content marketing strategies that drove 80% increase in organic website traffic',
          'Built and maintained relationships with media contacts and industry influencers'
        ]
      ];

      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Digital Marketing Manager',
        company: generateCompanyName('marketing'),
        location: extractLocation(text) || 'New York, NY',
        duration: '2021 - Present',
        responsibilities: marketingResponsibilities[Math.floor(Math.random() * marketingResponsibilities.length)]
      });
    } else if (text.toLowerCase().includes('design')) {
      const designResponsibilities = [
        [
          'Created visually stunning user interfaces and experiences for web and mobile applications',
          'Conducted user research and usability testing to inform design decisions and improve UX',
          'Collaborated with development teams to ensure design feasibility and pixel-perfect implementation',
          'Developed comprehensive design systems and style guides for brand consistency'
        ],
        [
          'Designed innovative marketing materials and brand assets that increased customer engagement',
          'Led creative brainstorming sessions and presented design concepts to stakeholders',
          'Utilized Adobe Creative Suite and Figma to create high-fidelity prototypes and mockups',
          'Maintained brand guidelines while adapting designs for various platforms and mediums'
        ]
      ];

      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'UX/UI Designer',
        company: generateCompanyName('design'),
        location: extractLocation(text) || 'Los Angeles, CA',
        duration: '2021 - Present',
        responsibilities: designResponsibilities[Math.floor(Math.random() * designResponsibilities.length)]
      });
    } else {
      const genericResponsibilities = [
        [
          'Managed strategic initiatives and cross-departmental projects with measurable impact',
          'Developed and implemented process improvements that increased efficiency by 25%',
          'Led team collaboration efforts and facilitated effective communication across departments',
          'Analyzed performance metrics and provided actionable insights for continuous improvement'
        ],
        [
          'Coordinated complex projects from conception to completion within budget and timeline',
          'Built and maintained relationships with key stakeholders and business partners',
          'Implemented innovative solutions to address operational challenges and drive growth',
          'Provided mentorship and guidance to team members for professional development'
        ]
      ];

      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Project Manager',
        company: generateCompanyName('general'),
        location: extractLocation(text) || 'Chicago, IL',
        duration: '2021 - Present',
        responsibilities: genericResponsibilities[Math.floor(Math.random() * genericResponsibilities.length)]
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
    const standardizedText = standardizeUserInput(text);

    // Comprehensive skill sets by category
    const techSkillSets = [
      ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'MongoDB', 'REST APIs', 'GraphQL', 'Git', 'Agile/Scrum'],
      ['React', 'Vue.js', 'Angular', 'Express.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'CI/CD', 'Jest', 'Webpack', 'Redux', 'Material-UI'],
      ['Python', 'Django', 'Flask', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'AWS', 'TensorFlow', 'Machine Learning', 'Data Analysis', 'API Development'],
      ['JavaScript', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'MongoDB', 'Socket.io', 'Push Notifications', 'App Store Optimization', 'Mobile UX/UI']
    ];

    const marketingSkillSets = [
      ['Digital Marketing', 'Google Analytics', 'SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Email Marketing', 'PPC Advertising', 'Marketing Automation', 'A/B Testing', 'Conversion Optimization'],
      ['Brand Management', 'Influencer Marketing', 'Community Management', 'Content Creation', 'Adobe Creative Suite', 'Video Marketing', 'Podcast Marketing', 'Growth Hacking', 'Customer Segmentation'],
      ['Performance Marketing', 'Facebook Ads', 'Google Ads', 'LinkedIn Marketing', 'Marketing Analytics', 'CRM Management', 'Lead Generation', 'Attribution Modeling', 'ROI Analysis', 'Market Research'],
      ['Content Marketing', 'Copywriting', 'Blog Writing', 'Social Media Content', 'Video Production', 'Graphic Design', 'Brand Storytelling', 'Editorial Calendar', 'Content Distribution']
    ];

    const designSkillSets = [
      ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems', 'Accessibility Design', 'Mobile Design'],
      ['Graphic Design', 'Brand Identity', 'Typography', 'Color Theory', 'Layout Design', 'Print Design', 'Packaging Design', 'Logo Design', 'Adobe Illustrator', 'Adobe Photoshop'],
      ['Web Design', 'Responsive Design', 'HTML/CSS', 'JavaScript', 'WordPress', 'User Experience', 'Information Architecture', 'Interaction Design', 'Visual Design', 'Design Thinking']
    ];

    const projectManagementSkillSets = [
      ['Project Management', 'Agile/Scrum', 'Stakeholder Management', 'Risk Management', 'Budget Planning', 'Team Leadership', 'Process Improvement', 'Quality Assurance', 'Strategic Planning'],
      ['Business Analysis', 'Requirements Gathering', 'Data Analysis', 'Process Optimization', 'Change Management', 'Cross-functional Collaboration', 'Vendor Management', 'Performance Metrics'],
      ['Operations Management', 'Supply Chain', 'Logistics', 'Inventory Management', 'Cost Optimization', 'Quality Control', 'Team Development', 'Training & Development', 'Safety Management']
    ];

    const salesSkillSets = [
      ['Sales Strategy', 'Lead Generation', 'Customer Relationship Management', 'Negotiation', 'B2B Sales', 'B2C Sales', 'CRM Software', 'Sales Analytics', 'Pipeline Management', 'Closing Techniques'],
      ['Account Management', 'Business Development', 'Prospecting', 'Cold Calling', 'Proposal Writing', 'Contract Negotiation', 'Territory Management', 'Customer Retention', 'Upselling/Cross-selling']
    ];

    // Detect industry and return appropriate skill set
    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer') || text.toLowerCase().includes('engineer')) {
      return techSkillSets[Math.floor(Math.random() * techSkillSets.length)];
    } else if (text.toLowerCase().includes('marketing') || text.toLowerCase().includes('digital marketing')) {
      return marketingSkillSets[Math.floor(Math.random() * marketingSkillSets.length)];
    } else if (text.toLowerCase().includes('design') || text.toLowerCase().includes('ui') || text.toLowerCase().includes('ux')) {
      return designSkillSets[Math.floor(Math.random() * designSkillSets.length)];
    } else if (text.toLowerCase().includes('project') || text.toLowerCase().includes('manager') || text.toLowerCase().includes('management')) {
      return projectManagementSkillSets[Math.floor(Math.random() * projectManagementSkillSets.length)];
    } else if (text.toLowerCase().includes('sales') || text.toLowerCase().includes('business development')) {
      return salesSkillSets[Math.floor(Math.random() * salesSkillSets.length)];
    }

    // Default professional skills
    return ['Strategic Planning', 'Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Project Management', 'Data Analysis', 'Process Improvement'];
  };

  // AI function to standardize and professionalize user input
  const standardizeUserInput = (userText) => {
    // Clean and standardize common phrases
    let text = userText.toLowerCase();

    // Replace casual phrases with professional ones
    const replacements = {
      'i work at': 'currently employed at',
      'i worked at': 'previously worked at',
      'i do': 'responsible for',
      'i did': 'successfully completed',
      'my job is': 'my role involves',
      'i help': 'assist in',
      'i make': 'develop and create',
      'i build': 'architect and develop',
      'i fix': 'troubleshoot and resolve',
      'i manage': 'oversee and coordinate',
      'im good at': 'proficient in',
      'i know': 'experienced with',
      'i can': 'capable of',
      'i have experience': 'experienced in'
    };

    Object.entries(replacements).forEach(([casual, professional]) => {
      text = text.replace(new RegExp(casual, 'g'), professional);
    });

    return text;
  };

  const generateProfessionalSummary = (text) => {
    const standardizedText = standardizeUserInput(text);
    const years = text.match(/(\d+)\s*years?/i);
    const yearText = years ? `${years[1]}+ years of` : 'Results-driven professional with';

    // More creative and varied summaries based on role
    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      const techSummaries = [
        `${yearText} expertise in cutting-edge software development, specializing in innovative solutions and scalable architectures. Passionate about leveraging emerging technologies to solve complex business challenges while maintaining exceptional code quality and user experience.`,
        `${yearText} experience as a versatile software engineer with a proven ability to transform ideas into robust, high-performance applications. Expert in full-stack development with a keen eye for optimizing system performance and enhancing user engagement.`,
        `${yearText} dedicated software development experience, combining technical excellence with creative problem-solving. Skilled in building intuitive applications that bridge the gap between complex technology and seamless user experiences.`
      ];
      return techSummaries[Math.floor(Math.random() * techSummaries.length)];
    } else if (text.toLowerCase().includes('marketing')) {
      const marketingSummaries = [
        `${yearText} dynamic marketing expertise with a talent for crafting compelling brand narratives that resonate with target audiences. Proven track record of driving engagement through innovative campaigns and data-driven strategies that deliver measurable ROI.`,
        `${yearText} creative marketing professional specializing in multi-channel campaign development and brand positioning. Expert in leveraging digital platforms to amplify brand presence and create authentic connections with diverse customer segments.`,
        `${yearText} strategic marketing experience focused on transforming consumer insights into powerful marketing initiatives. Skilled in building integrated campaigns that drive brand awareness, customer acquisition, and long-term loyalty.`
      ];
      return marketingSummaries[Math.floor(Math.random() * marketingSummaries.length)];
    } else if (text.toLowerCase().includes('design')) {
      const designSummaries = [
        `${yearText} innovative design experience with a passion for creating visually stunning and functionally superior user experiences. Expert in translating complex concepts into intuitive designs that captivate audiences and drive engagement.`,
        `${yearText} creative design professional specializing in user-centered design principles and aesthetic innovation. Proven ability to blend artistic vision with strategic thinking to deliver designs that not only look exceptional but also achieve business objectives.`
      ];
      return designSummaries[Math.floor(Math.random() * designSummaries.length)];
    }

    // Generic professional summaries
    const genericSummaries = [
      `${yearText} comprehensive professional experience with exceptional analytical capabilities and innovative problem-solving skills. Committed to delivering outstanding results while fostering collaborative relationships and driving organizational success.`,
      `${yearText} versatile professional background with a strong foundation in strategic thinking and operational excellence. Proven ability to adapt to dynamic environments while maintaining high standards of quality and performance.`
    ];
    return genericSummaries[Math.floor(Math.random() * genericSummaries.length)];
  };

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

  const generateResume = () => {
    const extractedInputs = extractUserInputs();
    setActiveTab('resume');
    
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

  const handleTemplateChange = (templateId) => {
    setCurrentTemplate(templateId);
    setShowTemplateSelector(false);
  };

  // Edit Modal Component
  const EditModal = () => {
    if (!editingSection) return null;

    const { section, index } = editingSection;
    const [editData, setEditData] = useState(() => {
      if (index !== null && Array.isArray(generatedResume[section])) {
        return generatedResume[section][index];
      }
      return generatedResume[section];
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                Edit {section === 'personalInfo' ? 'Personal Information' : section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
              <button
                onClick={() => setEditingSection(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto">
            {section === 'personalInfo' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={editData.name || ''}
                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={editData.title || ''}
                    onChange={(e) => setEditData({...editData, title: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={editData.email || ''}
                    onChange={(e) => setEditData({...editData, email: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    value={editData.phone || ''}
                    onChange={(e) => setEditData({...editData, phone: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={editData.location || ''}
                    onChange={(e) => setEditData({...editData, location: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {section === 'summary' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                <textarea
                  value={editData || ''}
                  onChange={(e) => setEditData(e.target.value)}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {section === 'experience' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={editData.title || ''}
                    onChange={(e) => setEditData({...editData, title: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    value={editData.company || ''}
                    onChange={(e) => setEditData({...editData, company: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={editData.duration || ''}
                    onChange={(e) => setEditData({...editData, duration: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities</label>
                  {editData.responsibilities?.map((resp, idx) => (
                    <div key={idx} className="mb-2">
                      <input
                        type="text"
                        value={resp}
                        onChange={(e) => {
                          const newResp = [...editData.responsibilities];
                          newResp[idx] = e.target.value;
                          setEditData({...editData, responsibilities: newResp});
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
            <button
              onClick={() => setEditingSection(null)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSaveEdit(section, editData, index)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Template Selector Modal
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
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
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
        </div>
      </div>
    );
  };

  // Resume Preview Component
  const ResumePreview = ({ data }) => {
    const template = templateOptions.find(t => t.id === currentTemplate);
    const templateColor = template?.color || 'from-blue-500 to-indigo-500';
    
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className={`bg-gradient-to-r ${templateColor} text-white p-6`}>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">{data.personalInfo.name}</h1>
            <button
              onClick={() => handleEditSection('personalInfo')}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
            >
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-lg opacity-90 mb-3">{data.personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm opacity-80">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Summary Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-800">Professional Summary</h2>
              <button
                onClick={() => handleEditSection('summary')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Edit3 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-4 last:mb-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                  </div>
                  <button
                    onClick={() => handleEditSection('experience', index)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Edit3 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Section */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          )}
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
          
          {/* Tab Navigation */}
          {generatedResume && (
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'chat'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Chat
              </button>
              <button
                onClick={() => setActiveTab('resume')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'resume'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Resume
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full h-full">
        {/* Chat Tab */}
        {activeTab === 'chat' && (
          <div className="h-full flex flex-col bg-white min-h-screen">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
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
                            const userMessage = {
                              id: messages.length + 1,
                              type: 'user',
                              content: "Yes, please generate my resume now!"
                            };
                            setMessages(prev => [...prev, userMessage]);
                            
                            setTimeout(() => {
                              const generatingMessage = {
                                id: messages.length + 2,
                                type: 'bot',
                                content: "🎉 Excellent! I'm now generating your personalized resume based on our conversation. This will take just a moment...",
                                isGenerating: true
                              };
                              setMessages(prev => [...prev, generatingMessage]);
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

          </div>
        )}

        {/* Resume Tab */}
        {activeTab === 'resume' && generatedResume && (
          <div className="h-full bg-gray-50 p-6 overflow-y-auto pb-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Your Resume</h2>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowTemplateSelector(true)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Change Template</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
              <ResumePreview data={generatedResume} />
            </div>
          </div>
        )}
      </div>

      {/* Fixed Input Section at Bottom */}
      {activeTab === 'chat' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Tell me about your experience, skills, or ask questions..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
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
      )}

      {/* Modals */}
      <EditModal />
      <TemplateSelector />
    </div>
  );
};

export default AIResumeChat;
