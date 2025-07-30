import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Bot, User, Download, FileText, Eye, Sparkles, MessageCircle, Edit3, Save, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIResumeChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI Resume Assistant powered by ChatGPT. I'll help you create a professional resume tailored to your needs. To get started, please tell me about:",
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
  const [conversationHistory, setConversationHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Intelligent fallback responses when API is unavailable
  const generateIntelligentFallback = (userMessage, history) => {
    const message = userMessage.toLowerCase();
    const messageCount = history.length;

    // Frontend Developer specific responses
    if (message.includes('frontend') || message.includes('front end') || message.includes('front-end')) {
      if (message.includes('skills')) {
        return `Excellent! Frontend developers need a strong skill set. Here are the key skills I'd recommend highlighting on your resume:

**Technical Skills:**
• JavaScript (ES6+), TypeScript
• React, Vue.js, or Angular
• HTML5, CSS3, SASS/SCSS
• Responsive Design & Mobile-First Development
• Git/Version Control
• REST APIs & GraphQL
• Build Tools (Webpack, Vite, etc.)

**Additional Valuable Skills:**
• UI/UX Design principles
• Testing (Jest, Cypress)
• Performance optimization
• Accessibility (WCAG compliance)

What's your experience level with these technologies? And tell me about any projects you've worked on!`;
      } else if (messageCount < 2) {
        return `Perfect! Frontend development is an exciting field. To create a standout resume for frontend developer positions, I'll need to know more about your background:

• How many years of frontend development experience do you have?
• What frameworks and technologies are you most comfortable with? (React, Vue, Angular, etc.)
• Have you worked on any notable projects or at any companies?
• Are you looking for junior, mid-level, or senior positions?

Let's start with your experience level - are you a beginner, or do you have professional experience?`;
      } else {
        return `Great choice focusing on frontend development! Based on what you've shared, I can help you create a compelling resume that showcases your technical skills and projects effectively.

For frontend roles, employers particularly look for:
• Strong portfolio of projects
• Clean, efficient code
• Understanding of user experience
• Problem-solving abilities

Tell me about a project you're most proud of - what technologies did you use and what challenges did you overcome?`;
      }
    }

    // React specific responses
    if (message.includes('react')) {
      return `React is definitely in high demand! For a React developer resume, you'll want to highlight:

**Core React Skills:**
• React Hooks (useState, useEffect, useContext, etc.)
• Component lifecycle and state management
• Redux or Context API for state management
• React Router for navigation
• JSX and component composition

**Related Technologies:**
• Next.js for full-stack React applications
• Testing with React Testing Library
• Styling (CSS-in-JS, Styled Components, Tailwind)

What type of React projects have you built? Any experience with Next.js or state management libraries?`;
    }

    // JavaScript specific responses
    if (message.includes('javascript') || message.includes('js')) {
      return `JavaScript is the foundation of frontend development! Here's what I'd recommend highlighting:

**Core JavaScript:**
• ES6+ features (arrow functions, destructuring, async/await)
• DOM manipulation and event handling
• Asynchronous programming (Promises, fetch API)
• Object-oriented and functional programming concepts

**Advanced Concepts:**
• Closures and scope
• Prototypes and inheritance
• Error handling
• Performance optimization

What's your comfort level with modern JavaScript? Have you worked with any specific frameworks or built any interesting projects?`;
    }

    // Experience related responses
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Excellent! Work experience is crucial for your resume. Let's structure this effectively:

**For each role, I'll help you highlight:**
• Specific technologies and frameworks used
• Quantifiable achievements (performance improvements, user engagement, etc.)
• Team collaboration and project leadership
• Problem-solving examples

Tell me about your most recent frontend development role:
• What was your job title?
• What company or projects did you work on?
• What technologies did you primarily use?
• What were your main achievements or contributions?`;
    }

    // Project related responses
    if (message.includes('project') || message.includes('portfolio')) {
      return `Projects are incredibly important for frontend developers! They demonstrate your practical skills better than anything else.

**For your resume, let's highlight projects that show:**
• Technical proficiency with modern frameworks
• User interface design skills
• Problem-solving abilities
• End-to-end development experience

Tell me about your best project:
• What does it do and who is it for?
• What technologies did you use to build it?
• What challenges did you face and how did you solve them?
• Is it deployed anywhere I could reference?

Even personal projects count - they show initiative and passion!`;
    }

    // Generic encouraging responses based on conversation stage
    if (messageCount < 2) {
      return `I'm here to help you create an outstanding frontend developer resume! Even though my AI service is temporarily at capacity, I have extensive knowledge about what makes frontend resumes stand out.

Let's start with the basics:
• What's your experience level with frontend development?
• Are you focusing on any specific technologies? (React, Vue, Angular, etc.)
• Are you looking for your first frontend role, or do you have some experience?

The more specific you can be, the better I can tailor your resume!`;
    } else if (messageCount < 4) {
      return `Great information! Let's dive deeper into your technical background. Frontend employers love to see:

• Specific projects you've built (even personal ones!)
• Technologies you're comfortable with
• Any challenges you've overcome
• Measurable impact of your work

What's a project or piece of work you're particularly proud of? Tell me about the technical details and what made it successful!`;
    } else {
      return `Perfect! I'm getting a comprehensive picture of your frontend development background. You're ready for me to create a professional resume that highlights your skills and experience effectively.

Your resume will showcase:
✓ Technical skills and frameworks
✓ Project experience and achievements
✓ Professional growth and capabilities
✓ Modern, clean formatting that stands out

Would you like me to generate your frontend developer resume now?`;
    }
  };

  // Enhanced template options with all available designs
  const templateOptions = [
    // AI Templates
    {
      id: 'ai-1',
      name: 'AI Modern',
      description: 'Futuristic design with gradient colors',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 'ai-2',
      name: 'AI Professional',
      description: 'Clean AI-inspired layout',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'ai-3',
      name: 'AI Creative',
      description: 'Advanced AI template design',
      color: 'from-violet-500 to-purple-700'
    },
    // Professional Templates
    {
      id: 'prof-1',
      name: 'Executive Pro',
      description: 'Sophisticated business layout',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'prof-2',
      name: 'Corporate Elite',
      description: 'Premium professional design',
      color: 'from-slate-600 to-blue-700'
    },
    {
      id: 'prof-3',
      name: 'Business Classic',
      description: 'Traditional executive style',
      color: 'from-gray-600 to-slate-700'
    },
    // Graphics Templates
    {
      id: 'graphic-1',
      name: 'Creative Burst',
      description: 'Vibrant design for creative professionals',
      color: 'from-pink-500 via-red-500 to-orange-500'
    },
    {
      id: 'graphic-2',
      name: 'Visual Impact',
      description: 'Bold graphic design template',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'graphic-3',
      name: 'Artistic Flow',
      description: 'Dynamic creative layout',
      color: 'from-orange-500 to-red-600'
    },
    // Basic/Modern Templates
    {
      id: 'basic-1',
      name: 'Clean Minimal',
      description: 'Elegant simplicity',
      color: 'from-slate-600 to-slate-800'
    },
    {
      id: 'basic-2',
      name: 'Modern Simple',
      description: 'Contemporary clean design',
      color: 'from-gray-500 to-slate-600'
    },
    {
      id: 'basic-3',
      name: 'Essential',
      description: 'Streamlined professional look',
      color: 'from-zinc-500 to-gray-600'
    },
    // Tech Templates
    {
      id: 'tech-1',
      name: 'Tech Innovator',
      description: 'Modern tech-inspired design',
      color: 'from-cyan-500 to-blue-600'
    },
    // Business Templates
    {
      id: 'business-1',
      name: 'Business Executive',
      description: 'Premium business professional',
      color: 'from-blue-700 to-indigo-800'
    },
    // Marketing Templates
    {
      id: 'marketing-1',
      name: 'Marketing Creative',
      description: 'Perfect for marketing professionals',
      color: 'from-emerald-500 to-teal-600'
    },
    // Healthcare Templates
    {
      id: 'healthcare-1',
      name: 'Healthcare Professional',
      description: 'Designed for medical professionals',
      color: 'from-teal-500 to-cyan-600'
    },
    // Education Templates
    {
      id: 'education-1',
      name: 'Education Specialist',
      description: 'Perfect for educators and academics',
      color: 'from-amber-500 to-orange-600'
    },
    // Additional Creative Templates
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
    },
    // New requested templates
    {
      id: 'minimalbrowntemplate',
      name: 'Minimal Brown',
      description: 'Elegant brown-toned minimalist design',
      color: 'from-amber-700 via-orange-800 to-yellow-700'
    },
    {
      id: 'greenillustratedtemplate',
      name: 'Green Illustrated',
      description: 'Nature-inspired green design with illustrations',
      color: 'from-emerald-600 via-green-500 to-lime-600'
    },
    {
      id: 'detaileduitemplate',
      name: 'Detailed UI',
      description: 'Modern UI-focused template with detailed sections',
      color: 'from-slate-700 via-gray-600 to-zinc-700'
    },
    {
      id: 'creativegeometrictemplate',
      name: 'Creative Geometric',
      description: 'Bold geometric patterns and creative layout',
      color: 'from-purple-600 via-pink-500 to-rose-600'
    }
  ];

  // Call OpenAI API for intelligent responses with error handling
  const callOpenAI = async (userMessage, conversationContext) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY || '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'}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an expert AI Resume Assistant. Your job is to help users create professional, compelling resumes by gathering information about their background, skills, and career goals.

Key guidelines:
- Ask follow-up questions to gather comprehensive information
- Provide specific, actionable advice for resume improvement
- Be encouraging and professional
- Help extract key achievements and quantifiable results
- Suggest relevant skills and experiences to highlight
- Keep responses conversational but focused on resume building
- When you have enough information (after 3-4 exchanges), offer to generate their resume

Current conversation context: ${conversationContext}

Respond as a helpful resume expert who genuinely cares about helping the user succeed.`
            },
            ...conversationHistory,
            { role: 'user', content: userMessage }
          ],
          max_tokens: 500,
          temperature: 0.7,
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        if (response.status === 429) {
          return generateIntelligentFallback(userMessage, conversationHistory);
        } else if (response.status === 401) {
          return "There's an authentication issue with the AI service. Don't worry - I can still help you build an excellent resume! Tell me about your work experience and I'll guide you through creating a professional resume.";
        } else if (response.status === 403) {
          return "The AI service is temporarily unavailable. Let's continue building your resume together! What's your current job title or the position you're targeting?";
        } else {
          throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API error:', error);

      // Use intelligent fallback that understands user context
      return generateIntelligentFallback(userMessage, conversationHistory);
    }
  };

  // Extract structured data from conversation for resume generation
  const extractUserInputs = async () => {
    const conversationText = conversationHistory.map(msg =>
      `${msg.role === 'user' ? 'User: ' : 'Assistant: '}${msg.content}`
    ).join('\n');

    // If no conversation history, use fallback immediately
    if (conversationHistory.length === 0) {
      return generateFallbackResume('No conversation data available');
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY || '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'}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are a resume data extraction expert. Based on the conversation below, extract structured resume information and return it as a JSON object with this exact format:

{
  "personalInfo": {
    "name": "extracted or 'John Doe'",
    "title": "extracted job title or 'Professional'",
    "email": "generated professional email",
    "phone": "+1 (555) 123-4567",
    "location": "extracted or 'City, State'"
  },
  "summary": "A professional 2-3 sentence summary highlighting key qualifications",
  "experience": [
    {
      "id": 1,
      "title": "Job Title",
      "company": "Company Name",
      "location": "City, State",
      "duration": "Year - Present",
      "responsibilities": [
        "Achievement-focused bullet point with metrics if possible",
        "Another responsibility with impact",
        "Third key responsibility"
      ]
    }
  ],
  "education": [
    {
      "id": 1,
      "degree": "Degree Type",
      "school": "School Name",
      "location": "City, State",
      "year": "Graduation Year"
    }
  ],
  "skills": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5", "Skill6"]
}

Make it professional, accurate, and based on the conversation. If information is missing, create reasonable professional examples based on what was discussed.`
            },
            {
              role: 'user',
              content: `Extract resume data from this conversation:\n\n${conversationText}`
            }
          ],
          max_tokens: 1000,
          temperature: 0.3,
        })
      });

      if (!response.ok) {
        console.log(`API error ${response.status}, using fallback extraction`);
        return generateFallbackResume(conversationText);
      }

      const data = await response.json();

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.log('Invalid API response structure, using fallback');
        return generateFallbackResume(conversationText);
      }

      try {
        const extractedData = JSON.parse(data.choices[0].message.content);
        return extractedData;
      } catch (parseError) {
        console.log('Failed to parse AI response as JSON, using fallback');
        return generateFallbackResume(conversationText);
      }
    } catch (error) {
      console.error('Error extracting resume data:', error);
      // Always fallback to basic extraction when API fails
      return generateFallbackResume(conversationText);
    }
  };

  // Fallback resume generation if API fails
  const generateFallbackResume = (conversationText) => {
    const text = conversationText.toLowerCase();
    
    return {
      personalInfo: {
        name: extractName(conversationText) || 'Professional Name',
        title: extractJobTitle(conversationText) || 'Professional',
        email: 'professional.email@example.com',
        phone: '+1 (555) 123-4567',
        location: extractLocation(conversationText) || 'City, State'
      },
      summary: generateProfessionalSummary(conversationText),
      experience: extractExperience(conversationText),
      education: extractEducation(conversationText),
      skills: extractSkills(conversationText)
    };
  };

  // Helper functions for fallback extraction
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
    
    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Software Engineer',
        company: 'Technology Company',
        location: extractLocation(text) || 'San Francisco, CA',
        duration: '2021 - Present',
        responsibilities: [
          'Developed and maintained scalable web applications using modern frameworks',
          'Collaborated with cross-functional teams to deliver high-quality software solutions',
          'Implemented best practices for code quality, testing, and deployment'
        ]
      });
    } else if (text.toLowerCase().includes('marketing')) {
      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Marketing Professional',
        company: 'Marketing Agency',
        location: extractLocation(text) || 'New York, NY',
        duration: '2021 - Present',
        responsibilities: [
          'Developed and executed integrated marketing campaigns across multiple channels',
          'Analyzed performance metrics to optimize campaign effectiveness and ROI',
          'Collaborated with creative teams to produce compelling marketing content'
        ]
      });
    } else {
      experiences.push({
        id: 1,
        title: extractJobTitle(text) || 'Professional',
        company: 'Professional Services Company',
        location: extractLocation(text) || 'Chicago, IL',
        duration: '2021 - Present',
        responsibilities: [
          'Managed key projects and initiatives to drive business objectives',
          'Collaborated effectively with stakeholders across multiple departments',
          'Delivered consistent results while maintaining high quality standards'
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
    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      return ['JavaScript', 'React', 'Node.js', 'Python', 'Git', 'Problem Solving', 'Team Collaboration', 'Agile Development'];
    } else if (text.toLowerCase().includes('marketing')) {
      return ['Digital Marketing', 'Social Media', 'Analytics', 'Content Creation', 'SEO', 'Campaign Management', 'Data Analysis', 'Brand Strategy'];
    }
    return ['Communication', 'Leadership', 'Problem Solving', 'Team Collaboration', 'Project Management', 'Critical Thinking'];
  };

  const generateProfessionalSummary = (text) => {
    const years = text.match(/(\d+)\s*years?/i);
    const yearText = years ? `${years[1]}+ years of` : 'Results-driven professional with';

    if (text.toLowerCase().includes('software') || text.toLowerCase().includes('developer')) {
      return `${yearText} experience in software development with expertise in modern technologies and frameworks. Proven track record of delivering high-quality solutions and collaborating effectively with cross-functional teams.`;
    } else if (text.toLowerCase().includes('marketing')) {
      return `${yearText} experience in digital marketing with a focus on driving brand awareness and customer engagement. Skilled in developing comprehensive marketing strategies and analyzing campaign performance.`;
    }

    return `${yearText} professional experience with strong analytical and problem-solving skills. Dedicated to delivering excellent results and contributing to team success.`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Update conversation history for OpenAI context
    const newConversationHistory = [...conversationHistory, { role: 'user', content: inputMessage }];
    setConversationHistory(newConversationHistory);
    
    setInputMessage('');
    setIsTyping(true);

    try {
      // Get AI response from OpenAI
      const conversationContext = messages.slice(-4).map(msg => 
        `${msg.type}: ${msg.content}`
      ).join('\n');
      
      const aiResponse = await callOpenAI(inputMessage, conversationContext);
      
      // Update conversation history with AI response
      setConversationHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);

      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: aiResponse
      };

      // Add generate button after sufficient conversation
      if (newConversationHistory.length >= 4) {
        botResponse.showGenerateButton = true;
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setIsTyping(false);

      // Provide contextual fallback based on conversation progress
      const messageCount = newConversationHistory.length;
      let fallbackContent = "I apologize for the technical issue. Let me help you continue building your resume.";

      if (messageCount < 2) {
        fallbackContent = "Let's start building your resume! What's your current job title or the position you're targeting?";
      } else if (messageCount < 4) {
        fallbackContent = "Tell me more about your work experience. What are your main responsibilities and achievements in your current or most recent role?";
      } else {
        fallbackContent = "Great! I have enough information to help create your resume. Would you like me to generate it now?";
      }

      const errorResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: fallbackContent,
        showGenerateButton: messageCount >= 4
      };

      setMessages(prev => [...prev, errorResponse]);
    }
  };

  const generateResume = async () => {
    setActiveTab('resume');
    
    const generatingMessage = {
      id: messages.length + 1,
      type: 'bot',
      content: "🎉 Excellent! I'm now generating your personalized resume based on our conversation. This will take just a moment...",
      isGenerating: true
    };
    
    setMessages(prev => [...prev, generatingMessage]);

    try {
      const extractedInputs = await extractUserInputs();
      
      setTimeout(() => {
        setGeneratedResume(extractedInputs);
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          type: 'bot',
          content: `🎉 Your personalized resume has been generated! I've analyzed our conversation and created a professional resume tailored to your background. You can now edit any section, choose different templates, or download your resume.`,
          hasResume: true
        }]);
      }, 2000);
    } catch (error) {
      console.error('Error generating resume:', error);
      
      setTimeout(() => {
        const fallbackData = generateFallbackResume(conversationHistory.map(msg => msg.content).join(' '));
        setGeneratedResume(fallbackData);
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          type: 'bot',
          content: `Your resume has been generated based on our conversation. You can edit any section or choose different templates.`,
          hasResume: true
        }]);
      }, 2000);
    }
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
          
          <div className="p-6">
            <div className="mb-4">
              <p className="text-gray-600 text-sm">Choose from {templateOptions.length} professional resume templates</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto">
              {templateOptions.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateChange(template.id)}
                  className={`relative cursor-pointer rounded-lg border-2 transition-all hover:scale-105 ${
                    currentTemplate === template.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="p-3">
                    <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${template.color} mb-2 flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-white text-xs font-medium">
                        {template.name}
                      </div>
                      {currentTemplate === template.id && (
                        <div className="absolute top-1 right-1 bg-white bg-opacity-90 text-blue-600 rounded-full p-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-xs mb-1 leading-tight">{template.name}</h3>
                    <p className="text-xs text-gray-600 leading-tight">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 text-center">
                ✨ All templates are ATS-friendly and professionally designed
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Template component mapping with unique layouts
  const getTemplateComponent = (templateId, data) => {
    // Custom template files
    const customTemplateMap = {
      'minimalbrowntemplate': MinimalBrownTemplate,
      'greenillustratedtemplate': GreenIllustratedTemplate,
      'detaileduitemplate': DetailedUITemplate,
      'creativegeometrictemplate': CreativeGeometricTemplate
    };

    const CustomTemplate = customTemplateMap[templateId];
    if (CustomTemplate) {
      return <CustomTemplate data={data} />;
    }

    // Unique layout patterns for each template
    return getUniqueTemplateLayout(templateId, data);
  };

  // Create unique layouts for all templates
  const getUniqueTemplateLayout = (templateId, data) => {
    const template = templateOptions.find(t => t.id === templateId);
    const templateColor = template?.color || 'from-blue-500 to-indigo-500';

    switch (templateId) {
      case 'ai-1':
        return getAIModernLayout(data, templateColor);
      case 'ai-2':
        return getAIProfessionalLayout(data, templateColor);
      case 'ai-3':
        return getAICreativeLayout(data, templateColor);
      case 'prof-1':
        return getExecutiveProLayout(data, templateColor);
      case 'prof-2':
        return getCorporateEliteLayout(data, templateColor);
      case 'prof-3':
        return getBusinessClassicLayout(data, templateColor);
      case 'graphic-1':
        return getCreativeBurstLayout(data, templateColor);
      case 'graphic-2':
        return getVisualImpactLayout(data, templateColor);
      case 'graphic-3':
        return getArtisticFlowLayout(data, templateColor);
      case 'basic-1':
        return getCleanMinimalLayout(data, templateColor);
      case 'basic-2':
        return getModernSimpleLayout(data, templateColor);
      case 'basic-3':
        return getEssentialLayout(data, templateColor);
      case 'tech-1':
        return getTechInnovatorLayout(data, templateColor);
      case 'business-1':
        return getBusinessExecutiveLayout(data, templateColor);
      case 'marketing-1':
        return getMarketingCreativeLayout(data, templateColor);
      case 'healthcare-1':
        return getHealthcareProfessionalLayout(data, templateColor);
      case 'education-1':
        return getEducationSpecialistLayout(data, templateColor);
      case 'nature':
        return getNaturalFlowLayout(data, templateColor);
      case 'sunset':
        return getSunsetGlowLayout(data, templateColor);
      case 'ocean':
        return getOceanDepthsLayout(data, templateColor);
      default:
        return getDefaultPreview(data);
    }
  };

  // AI Modern Layout - Futuristic card-based design
  const getAIModernLayout = (data, templateColor) => (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg overflow-hidden">
      <div className={`bg-gradient-to-r ${templateColor} p-6 relative`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="w-full h-full border-4 border-white rounded-full animate-pulse"></div>
        </div>
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.name}</h1>
        <p className="text-xl opacity-90">{data.personalInfo.title}</p>
        <div className="flex gap-4 mt-4 text-sm">
          <span>📧 {data.personalInfo.email}</span>
          <span>📱 {data.personalInfo.phone}</span>
        </div>
      </div>
      <div className="p-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold text-blue-400 mb-2">SUMMARY</h2>
            <p className="text-sm text-gray-300">{data.summary}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold text-blue-400 mb-2">EXPERIENCE</h2>
            {data.experience.slice(0, 1).map((exp) => (
              <div key={exp.id}>
                <h3 className="font-bold text-white">{exp.title}</h3>
                <p className="text-blue-300">{exp.company}</p>
                <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold text-green-400 mb-2">SKILLS</h2>
            <div className="space-y-2">
              {data.skills.slice(0, 6).map((skill, index) => (
                <div key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // AI Professional Layout - Clean tech-inspired design
  const getAIProfessionalLayout = (data, templateColor) => (
    <div className="bg-white border-l-8 border-indigo-500 shadow-lg">
      <div className="flex">
        <div className="w-1/3 bg-gray-50 p-6">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">{data.personalInfo.name.charAt(0)}</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">{data.personalInfo.name}</h1>
            <p className="text-indigo-600 font-medium">{data.personalInfo.title}</p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 border-b border-gray-300 pb-1">CONTACT</h3>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <p>📧 {data.personalInfo.email}</p>
                <p>📱 {data.personalInfo.phone}</p>
                <p>📍 {data.personalInfo.location}</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 border-b border-gray-300 pb-1">SKILLS</h3>
              <div className="mt-2 space-y-1">
                {data.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Experience</h2>
            {data.experience.slice(0, 1).map((exp) => (
              <div key={exp.id} className="border-l-4 border-indigo-500 pl-4 mb-4">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // AI Creative Layout - Dynamic asymmetric design
  const getAICreativeLayout = (data, templateColor) => (
    <div className="bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="relative z-10">
        <div className={`bg-gradient-to-r ${templateColor} text-white p-8 clip-path-polygon`}>
          <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl opacity-90">{data.personalInfo.title}</p>
        </div>
        <div className="p-8 grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="bg-purple-50 p-6 rounded-2xl mb-6 transform -rotate-1">
              <h2 className="text-2xl font-bold text-purple-800 mb-3">About Me</h2>
              <p className="text-gray-700">{data.summary}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl transform rotate-1">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">Experience</h2>
              {data.experience.slice(0, 1).map((exp) => (
                <div key={exp.id}>
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-green-50 p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-green-800 mb-4">Skills</h2>
              <div className="space-y-2">
                {data.skills.slice(0, 6).map((skill, index) => (
                  <div key={index} className="bg-white px-3 py-2 rounded-lg shadow-sm border-l-4 border-green-500">
                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Executive Pro Layout - Luxury business design
  const getExecutiveProLayout = (data, templateColor) => (
    <div className="bg-white shadow-2xl">
      <div className="flex">
        <div className="w-1/4 bg-gray-900 text-white p-6">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
            <h1 className="text-lg font-bold">{data.personalInfo.name}</h1>
            <p className="text-blue-300 text-sm">{data.personalInfo.title}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-blue-400 font-bold text-sm uppercase tracking-wide border-b border-gray-700 pb-2">Contact</h3>
              <div className="mt-3 space-y-2 text-xs">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.location}</p>
              </div>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold text-sm uppercase tracking-wide border-b border-gray-700 pb-2">Expertise</h3>
              <div className="mt-3 space-y-2">
                {data.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="text-xs bg-gray-800 px-2 py-1 rounded">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-8">
          <div className="border-b-4 border-blue-600 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Executive Summary</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">{data.summary}</p>
          <div>
            <div className="border-b-4 border-blue-600 pb-2 mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Professional Experience</h2>
            </div>
            {data.experience.slice(0, 1).map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                    <li key={idx} className="text-sm">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Corporate Elite Layout - Premium corporate design
  const getCorporateEliteLayout = (data, templateColor) => (
    <div className="bg-gradient-to-br from-gray-50 to-white shadow-xl">
      <div className={`bg-gradient-to-r ${templateColor} text-white p-6`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
            <p className="text-xl opacity-90">{data.personalInfo.title}</p>
          </div>
          <div className="text-right text-sm opacity-80">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">Professional Profile</h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">Career Highlights</h2>
              {data.experience.slice(0, 1).map((exp) => (
                <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Core Competencies</h2>
              <div className="space-y-3">
                {data.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{skill}</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-blue-400 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Business Classic Layout - Traditional formal design
  const getBusinessClassicLayout = (data, templateColor) => (
    <div className="bg-white border-2 border-gray-300">
      <div className="text-center border-b-2 border-gray-300 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</p>
        <div className="flex justify-center space-x-8 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center border-b border-gray-300 pb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed text-center">{data.summary}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center border-b border-gray-300 pb-2">EXPERIENCE</h2>
          {data.experience.slice(0, 1).map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                <p className="text-gray-600 font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 max-w-4xl mx-auto">
                {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                  <li key={idx} className="text-sm">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center border-b border-gray-300 pb-2">CORE SKILLS</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.slice(0, 8).map((skill, index) => (
              <span key={index} className="border border-gray-400 px-3 py-1 text-sm text-gray-700">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Creative Burst Layout - Vibrant artistic design
  const getCreativeBurstLayout = (data, templateColor) => (
    <div className="bg-gradient-to-br from-pink-50 to-orange-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-red-200 rounded-full opacity-30"></div>
      </div>
      <div className="relative z-10 p-8">
        <div className="text-center mb-8">
          <div className={`w-32 h-32 bg-gradient-to-r ${templateColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
            <span className="text-white text-3xl font-bold">{data.personalInfo.name.charAt(0)}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.personalInfo.name}</h1>
          <p className="text-2xl text-pink-600 font-semibold">{data.personalInfo.title}</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-1">
              <h2 className="text-2xl font-bold text-pink-600 mb-3">About Me</h2>
              <p className="text-gray-700">{data.summary}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg transform -rotate-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-3">Contact</h2>
              <div className="space-y-2 text-gray-700">
                <p>📧 {data.personalInfo.email}</p>
                <p>📱 {data.personalInfo.phone}</p>
                <p>📍 {data.personalInfo.location}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-3">Experience</h2>
              {data.experience.slice(0, 1).map((exp) => (
                <div key={exp.id}>
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-pink-600 font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-3">Skills</h2>
              <div className="grid grid-cols-2 gap-2">
                {data.skills.slice(0, 6).map((skill, index) => (
                  <span key={index} className="bg-gradient-to-r from-pink-400 to-red-400 text-white px-3 py-1 rounded-full text-xs font-semibold text-center">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Visual Impact Layout - Bold geometric design
  const getVisualImpactLayout = (data, templateColor) => (
    <div className="bg-white">
      <div className="flex h-96">
        <div className="w-1/3 bg-gray-900 text-white p-6 clip-path-diagonal">
          <div className="pt-8">
            <h1 className="text-2xl font-bold mb-1">{data.personalInfo.name}</h1>
            <p className="text-red-400 text-lg font-semibold mb-6">{data.personalInfo.title}</p>
            <div className="space-y-4 text-sm">
              <div className="border-l-4 border-red-500 pl-3">
                <h3 className="font-bold text-red-400 mb-2">CONTACT</h3>
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-8 flex items-center">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">PROFILE</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">EXPERIENCE</h2>
          </div>
          {data.experience.slice(0, 1).map((exp) => (
            <div key={exp.id} className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
              <p className="text-red-600 font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">SKILLS</h2>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {data.skills.slice(0, 8).map((skill, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span className="text-sm font-medium text-gray-800">{skill}</span>
                <div className="w-20 h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-red-500 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Artistic Flow Layout - Fluid creative design
  const getArtisticFlowLayout = (data, templateColor) => (
    <div className="bg-gradient-to-tr from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
          <path d="M0,200 Q200,100 400,200 L400,600 L0,600 Z" fill="rgba(239, 68, 68, 0.1)"/>
          <path d="M0,300 Q200,200 400,300 L400,600 L0,600 Z" fill="rgba(245, 101, 101, 0.1)"/>
        </svg>
      </div>
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">{data.personalInfo.name}</h1>
            <p className="text-2xl text-orange-600 font-semibold mb-6">{data.personalInfo.title}</p>
            <div className="flex justify-center space-x-8 text-gray-600">
              <span>📧 {data.personalInfo.email}</span>
              <span>📱 {data.personalInfo.phone}</span>
              <span>📍 {data.personalInfo.location}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="bg-white p-8 rounded-3xl shadow-xl mb-6 border-l-8 border-orange-500">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Creative Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{data.summary}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Portfolio Highlights</h2>
                {data.experience.slice(0, 1).map((exp) => (
                  <div key={exp.id}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-orange-600 text-xl font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-500 mb-4">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-pink-500">
                <h2 className="text-2xl font-bold text-pink-600 mb-6">Creative Skills</h2>
                <div className="space-y-4">
                  {data.skills.slice(0, 6).map((skill, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-3 rounded-2xl text-center font-semibold transform hover:scale-105 transition-transform">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Clean Minimal Layout - Ultra minimalist design
  const getCleanMinimalLayout = (data, templateColor) => (
    <div className="bg-white max-w-4xl mx-auto">
      <div className="p-12 space-y-12">
        <div className="text-center border-b pb-8">
          <h1 className="text-4xl font-light text-gray-800 mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 font-light">{data.personalInfo.title}</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-500">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h2 className="text-lg font-light text-gray-800 mb-4 uppercase tracking-widest">Summary</h2>
            <p className="text-gray-700 leading-relaxed font-light">{data.summary}</p>
          </div>
          <div>
            <h2 className="text-lg font-light text-gray-800 mb-4 uppercase tracking-widest">Experience</h2>
            {data.experience.slice(0, 1).map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-medium text-gray-800">{exp.title}</h3>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-gray-600 mb-3">{exp.company}</p>
                <ul className="space-y-1 text-gray-700 font-light">
                  {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                    <li key={idx}>• {resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-light text-gray-800 mb-4 uppercase tracking-widest">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {data.skills.slice(0, 8).map((skill, index) => (
                <span key={index} className="text-gray-700 font-light">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Modern Simple Layout - Contemporary clean design
  const getModernSimpleLayout = (data, templateColor) => (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg">
        <div className={`bg-gradient-to-r ${templateColor} text-white p-8`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
              <p className="text-xl opacity-90">{data.personalInfo.title}</p>
            </div>
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{data.personalInfo.name.charAt(0)}</span>
            </div>
          </div>
        </div>
        <div className="p-8 grid grid-cols-4 gap-8">
          <div className="col-span-3 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-1 h-8 bg-gray-600 mr-4"></div>
                About
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-1 h-8 bg-gray-600 mr-4"></div>
                Experience
              </h2>
              {data.experience.slice(0, 1).map((exp) => (
                <div key={exp.id} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-gray-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">Contact</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.location}</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">Skills</h2>
              <div className="space-y-2">
                {data.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Essential Layout - Streamlined professional look
  const getEssentialLayout = (data, templateColor) => (
    <div className="bg-white border border-gray-300 max-w-4xl mx-auto">
      <div className="p-8">
        <div className="text-center mb-8 pb-6 border-b-2 border-gray-800">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.personalInfo.name}</h1>
          <p className="text-lg text-gray-600">{data.personalInfo.title}</p>
          <div className="flex justify-center space-x-4 mt-4 text-sm text-gray-600">
            <span>{data.personalInfo.email}</span>
            <span>|</span>
            <span>{data.personalInfo.phone}</span>
            <span>|</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase">Professional Experience</h2>
            {data.experience.slice(0, 1).map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600 italic">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                    <li key={idx} className="text-sm">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase">Core Skills</h2>
            <div className="grid grid-cols-4 gap-2">
              {data.skills.slice(0, 8).map((skill, index) => (
                <div key={index} className="text-center border border-gray-300 py-2 px-1 text-sm text-gray-700">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Tech Innovator Layout - Modern tech-inspired design
  const getTechInnovatorLayout = (data, templateColor) => (
    <div className="bg-gray-900 text-green-400 font-mono">
      <div className="p-8">
        <div className="border border-green-400 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-green-300">$ {data.personalInfo.name.toLowerCase().replace(' ', '_')}</h1>
              <p className="text-cyan-400">~/{data.personalInfo.title.toLowerCase().replace(' ', '_')}</p>
            </div>
            <div className="text-right text-sm">
              <p>email: {data.personalInfo.email}</p>
              <p>phone: {data.personalInfo.phone}</p>
              <p>location: {data.personalInfo.location}</p>
            </div>
          </div>
          <div className="border-t border-green-400 pt-4">
            <p className="text-green-300 text-sm leading-relaxed">{data.summary}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-cyan-400 mb-4">./experience</h2>
            <div className="border border-green-400 p-4">
              {data.experience.slice(0, 1).map((exp) => (
                <div key={exp.id}>
                  <h3 className="text-green-300 font-bold">{exp.title}</h3>
                  <p className="text-cyan-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                  <ul className="space-y-1 text-sm">
                    {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                      <li key={idx} className="text-green-400">→ {resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-cyan-400 mb-4">./skills</h2>
            <div className="border border-green-400 p-4">
              <div className="grid grid-cols-1 gap-2">
                {data.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-green-400 text-sm">{skill}</span>
                    <span className="text-cyan-400 text-xs">████████░░ 80%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Business Executive Layout - Premium business design
  const getBusinessExecutiveLayout = (data, templateColor) => (
    <div className="bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="p-8">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
            <p className="text-2xl text-blue-300 mb-6">{data.personalInfo.title}</p>
            <div className="flex justify-center space-x-8 text-sm opacity-80">
              <span>{data.personalInfo.email}</span>
              <span>{data.personalInfo.phone}</span>
              <span>{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Executive Summary</h2>
              <p className="leading-relaxed opacity-90">{data.summary}</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Leadership Experience</h2>
              {data.experience.slice(0, 1).map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-blue-300 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">{exp.duration}</span>
                  </div>
                  <ul className="space-y-2 opacity-90">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-300 mb-4">Core Competencies</h2>
              <div className="space-y-3">
                {data.skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="bg-white bg-opacity-5 p-3 rounded text-center text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Add remaining specialized layouts...
  const getMarketingCreativeLayout = (data, templateColor) => getCreativeBurstLayout(data, templateColor);
  const getHealthcareProfessionalLayout = (data, templateColor) => getExecutiveProLayout(data, templateColor);
  const getEducationSpecialistLayout = (data, templateColor) => getBusinessClassicLayout(data, templateColor);
  const getNaturalFlowLayout = (data, templateColor) => getArtisticFlowLayout(data, templateColor);
  const getSunsetGlowLayout = (data, templateColor) => getVisualImpactLayout(data, templateColor);
  const getOceanDepthsLayout = (data, templateColor) => getAIModernLayout(data, templateColor);

  // Default resume preview for templates without specific components
  const getDefaultPreview = (data) => {
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

  // Resume Preview Component
  const ResumePreview = ({ data }) => {
    // Check if we have a specific template component
    const hasCustomTemplate = ['minimalbrowntemplate', 'greenillustratedtemplate', 'detaileduitemplate', 'creativegeometrictemplate'].includes(currentTemplate);

    if (hasCustomTemplate) {
      return getTemplateComponent(currentTemplate, data);
    }

    // Use default preview for other templates
    return getDefaultPreview(data);
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
                <p className="text-xs text-gray-500">Powered by ChatGPT</p>
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
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      
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
                            generateResume();
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
