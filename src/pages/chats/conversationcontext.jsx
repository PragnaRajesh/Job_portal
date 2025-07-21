import React, { createContext, useContext, useState } from 'react';

const ConversationContext = createContext();

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error('useConversation must be used within a ConversationProvider');
  }
  return context;
};

export const ConversationProvider = ({ children }) => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Andy Robertson',
      message: 'Oh yes, please send your CV/Res...',
      time: '5m ago',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      unread: true,
      status: 'Online',
      messages: [
        { id: 1, text: 'Hello sir, Good Morning', time: '09:30 am', sent: false },
        { id: 2, text: 'Morning, Can I help you ?', time: '09:31 am', sent: true },
        { id: 3, text: 'I saw the UI/UX Designer vacancy that you uploaded on linkedin yesterday and I am interested in joining your company.', time: '09:33 am', sent: false },
        { id: 4, text: 'Oh yes, please send your CV/Resume here', time: '09:35 am', sent: true }
      ],
      isTyping: false,
      lastSeen: '2 minutes ago'
    },
    {
      id: 2,
      name: 'Giorgio Chiellini',
      message: 'Have a Good Morning',
      time: '10m ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      unread: false,
      status: 'Online',
      messages: [
        { id: 1, text: 'Good morning!', time: '08:00 am', sent: false },
        { id: 2, text: 'Have a Good Morning', time: '08:01 am', sent: true }
      ],
      isTyping: false,
      lastSeen: 'just now'
    },
    {
      id: 3,
      name: 'Alex Morgan',
      message: 'Hey I am UI/UX Designer, wou...',
      time: '09:30 am',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      unread: false,
      status: 'Offline',
      messages: [
        { id: 1, text: 'Hey I am UI/UX Designer, would love to connect', time: '09:30 am', sent: false }
      ],
      isTyping: false,
      lastSeen: '1 hour ago'
    },
    {
      id: 4,
      name: 'Megan Rapinoe',
      message: 'I saw the UI/UX Designer vac...',
      time: '01:00 pm',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      unread: false,
      status: 'Online',
      messages: [
        { id: 1, text: 'I saw the UI/UX Designer vacancy and I\'m interested', time: '01:00 pm', sent: false }
      ],
      isTyping: false,
      lastSeen: '5 minutes ago'
    },
    {
      id: 5,
      name: 'Alessandro Bastoni',
      message: 'I saw the UI/UX Designer vac...',
      time: '06:00 pm',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      unread: false,
      status: 'Offline',
      messages: [
        { id: 1, text: 'I saw the UI/UX Designer vacancy, can we discuss?', time: '06:00 pm', sent: false }
      ],
      isTyping: false,
      lastSeen: '3 hours ago'
    },
    {
      id: 6,
      name: 'Ilkay Gundogan',
      message: 'I saw the UI/UX Designer vac...',
      time: 'Yesterday',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      unread: false,
      status: 'Online',
      messages: [
        { id: 1, text: 'I saw the UI/UX Designer vacancy yesterday', time: 'Yesterday', sent: false }
      ],
      isTyping: false,
      lastSeen: '10 minutes ago'
    }
  ]);

  const [currentChat, setCurrentChat] = useState(null);
  const [typingTimeouts, setTypingTimeouts] = useState({});

  // Auto-responses for different contacts
  const getAutoResponse = (conversationId, userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Contextual job-focused responses
    const responses = {
      1: [ // Andy Robertson
        {
          keywords: ['cv', 'resume', 'portfolio', 'send', 'attach'],
          response: "Perfect! Please attach your CV. I'll review it within 24 hours and get back to you with feedback."
        },
        {
          keywords: ['experience', 'work', 'years', 'background'],
          response: "Tell me about your UI/UX experience. We're looking for 3+ years with strong portfolio in mobile apps."
        },
        {
          keywords: ['salary', 'pay', 'money', 'compensation', 'package'],
          response: "Our range is $65k-$95k + benefits. Final offer depends on experience and portfolio strength."
        },
        {
          keywords: ['start', 'when', 'join', 'available', 'notice'],
          response: "When can you start? We're looking to fill this position within 2-3 weeks. What's your notice period?"
        },
        {
          keywords: ['hello', 'hi', 'hey', 'morning', 'good'],
          response: "Hi! Thanks for your interest in our Senior UI/UX Designer role. Ready to discuss the opportunity?"
        },
        {
          keywords: ['company', 'about', 'culture', 'team'],
          response: "We're a fintech startup, 50+ employees. Great culture, flexible work, and we value design thinking. Want to know more?"
        },
        {
          keywords: ['role', 'responsibilities', 'duties', 'job'],
          response: "You'll lead mobile app redesign, work with product team, conduct user research, and mentor junior designers."
        },
        {
          keywords: ['skills', 'requirements', 'tools', 'software'],
          response: "We need expertise in Figma, Sketch, user research, prototyping, and mobile-first design. Familiar with these?"
        },
        {
          keywords: ['interview', 'process', 'next', 'steps'],
          response: "Our process: Portfolio review → Design challenge → Team interview → Final round. Takes about 1 week total."
        },
        {
          keywords: ['remote', 'office', 'hybrid', 'location'],
          response: "We're hybrid - 3 days in office (downtown), 2 days remote. Office has great design setup and collaboration spaces."
        },
        {
          keywords: ['benefits', 'perks', 'vacation', 'health'],
          response: "Full health/dental, 4 weeks PTO, $2k learning budget, latest design tools, and equity options."
        },
        {
          keywords: ['portfolio', 'work', 'projects', 'show'],
          response: "I'd love to see your portfolio! Focus on mobile projects and your design process. Can you share a link?"
        },
        {
          keywords: ['questions', 'ask', 'concerns', 'clarify'],
          response: "Great question! What specific aspects would you like to know more about? Happy to clarify anything."
        }
      ],
      2: [ // Giorgio Chiellini
        {
          keywords: ['morning', 'hello', 'hi', 'hey', 'good'],
          response: "Hey! Great to connect with another designer. How's your design journey going?"
        },
        {
          keywords: ['design', 'ui', 'ux', 'designer'],
          response: "Nice! What type of design work excites you most? I'm currently leading a team working on B2B SaaS products."
        },
        {
          keywords: ['portfolio', 'work', 'projects', 'show'],
          response: "I'd love to see your work! Always interested in seeing different design approaches and methodologies."
        },
        {
          keywords: ['advice', 'tips', 'career', 'growth'],
          response: "Focus on understanding business goals, not just making things pretty. Learn to present your design decisions clearly."
        },
        {
          keywords: ['tools', 'software', 'figma', 'sketch'],
          response: "I'm all about Figma these days. The collaboration features are game-changing. What's your go-to design tool?"
        },
        {
          keywords: ['team', 'collaboration', 'work', 'together'],
          response: "Collaboration is key in design. I always involve developers early and do regular design reviews with stakeholders."
        },
        {
          keywords: ['trends', 'future', 'industry', 'design'],
          response: "AI is changing everything! But core UX principles remain. Focus on user needs, not just following trends."
        },
        {
          keywords: ['research', 'user', 'testing', 'data'],
          response: "User research is crucial! I always start with understanding the problem before jumping into solutions. Do you do research?"
        },
        {
          keywords: ['challenge', 'difficult', 'problem', 'stuck'],
          response: "Design challenges are the best learning opportunities! What's the trickiest design problem you've solved recently?"
        },
        {
          keywords: ['mentor', 'learn', 'junior', 'help'],
          response: "I love mentoring! Best advice: Always ask 'why' before 'how'. Understanding the problem is half the solution."
        }
      ],
      3: [ // Alex Morgan
        {
          keywords: ['designer', 'design', 'ui', 'ux', 'freelance'],
          response: "Awesome! I'm freelancing and loving the variety. What type of design work do you focus on?"
        },
        {
          keywords: ['freelance', 'independent', 'clients', 'projects'],
          response: "Freelancing has been great! I work with startups mostly. The key is building long-term client relationships."
        },
        {
          keywords: ['rates', 'pricing', 'charge', 'cost'],
          response: "I charge $75-120/hour depending on project complexity. Always price based on value, not just time."
        },
        {
          keywords: ['clients', 'finding', 'work', 'projects'],
          response: "Most of my work comes from referrals now. LinkedIn, Dribbble, and networking events have been goldmines."
        },
        {
          keywords: ['portfolio', 'work', 'show', 'projects'],
          response: "I'd love to see your work! My portfolio focuses on case studies showing my process, not just pretty visuals."
        },
        {
          keywords: ['startup', 'small', 'business', 'company'],
          response: "Startups are exciting! I help them establish design systems and user-centered processes from day one."
        },
        {
          keywords: ['remote', 'location', 'travel', 'work'],
          response: "I work 100% remote and travel often. Digital nomad life while designing for global clients - living the dream!"
        },
        {
          keywords: ['advice', 'tips', 'freelancing', 'start'],
          response: "Start freelancing while you have a job. Build a client base gradually. And always have contracts - learned that the hard way!"
        },
        {
          keywords: ['tools', 'workflow', 'process', 'method'],
          response: "My workflow: Discovery → Research → Wireframes → Prototypes → Testing. I use Figma, Notion, and Loom for client updates."
        },
        {
          keywords: ['collaborate', 'partner', 'together', 'team'],
          response: "I'm always open to collaborating! Working with other designers brings fresh perspectives to projects."
        }
      ],
      4: [ // Megan Rapinoe
        {
          keywords: ['job', 'position', 'designer', 'vacancy', 'role'],
          response: "Great timing! We're looking for a product designer to join our team. Tell me about your product design experience."
        },
        {
          keywords: ['product', 'manager', 'pm', 'management'],
          response: "I'm a PM here and work closely with designers. Looking for someone who understands business goals, not just aesthetics."
        },
        {
          keywords: ['user', 'research', 'data', 'analytics'],
          response: "User research is crucial in our process. We make data-driven decisions. Do you have experience with user interviews and testing?"
        },
        {
          keywords: ['agile', 'scrum', 'sprint', 'process'],
          response: "We work in 2-week sprints. Designers are involved in planning, daily standups, and retrospectives. Familiar with agile?"
        },
        {
          keywords: ['stakeholder', 'business', 'requirements', 'goals'],
          response: "You'll work with engineering, marketing, and executives. Strong communication skills are essential. How do you handle feedback?"
        },
        {
          keywords: ['metrics', 'kpi', 'success', 'measure'],
          response: "We measure design success through user engagement, conversion rates, and task completion. Do you track design metrics?"
        },
        {
          keywords: ['roadmap', 'strategy', 'vision', 'future'],
          response: "Our product roadmap focuses on mobile-first experiences and AI integration. Excited about designing for emerging tech?"
        },
        {
          keywords: ['challenge', 'problem', 'solve', 'difficult'],
          response: "Our biggest challenge is balancing user needs with business constraints. How do you approach design trade-offs?"
        },
        {
          keywords: ['team', 'culture', 'environment', 'work'],
          response: "Our design team is collaborative and data-driven. We value diverse perspectives and continuous learning. Sound like a fit?"
        },
        {
          keywords: ['growth', 'career', 'development', 'learn'],
          response: "We invest in our team's growth - conferences, courses, mentorship. What areas do you want to develop in your career?"
        }
      ],
      5: [ // Alessandro Bastoni
        {
          keywords: ['discuss', 'position', 'job', 'role', 'tech'],
          response: "Happy to discuss! As tech lead, I work closely with designers on implementation. What's your technical background?"
        },
        {
          keywords: ['technical', 'code', 'development', 'frontend'],
          response: "Great! Understanding frontend basics helps designers create feasible solutions. Do you know HTML/CSS/JavaScript?"
        },
        {
          keywords: ['design', 'system', 'components', 'library'],
          response: "We're building a comprehensive design system. Experience with component libraries and design tokens would be valuable."
        },
        {
          keywords: ['handoff', 'developer', 'specs', 'implementation'],
          response: "Clean design handoffs save us tons of time. Do you provide detailed specs, assets, and interaction guidelines?"
        },
        {
          keywords: ['responsive', 'mobile', 'breakpoints', 'adaptive'],
          response: "Mobile-first is crucial for us. How do you approach responsive design and different screen sizes?"
        },
        {
          keywords: ['performance', 'optimization', 'speed', 'loading'],
          response: "Page speed matters! Do you consider image optimization, loading states, and performance in your designs?"
        },
        {
          keywords: ['accessibility', 'a11y', 'inclusive', 'wcag'],
          response: "Accessibility is non-negotiable. Do you design with WCAG guidelines and test with screen readers?"
        },
        {
          keywords: ['prototype', 'interaction', 'animation', 'micro'],
          response: "Interactive prototypes help us understand complex flows. What tools do you use for prototyping and animations?"
        },
        {
          keywords: ['feedback', 'iteration', 'changes', 'revisions'],
          response: "Design is iterative! How do you handle technical constraints and feedback during the development process?"
        },
        {
          keywords: ['collaboration', 'communication', 'team', 'work'],
          response: "Close designer-developer collaboration is key to our success. How do you prefer to work with engineering teams?"
        },
        {
          keywords: ['tools', 'figma', 'workflow', 'process'],
          response: "We use Figma for design and Jira for project management. What's your preferred design-to-development workflow?"
        }
      ],
      6: [ // Ilkay Gundogan
        {
          keywords: ['position', 'available', 'open', 'startup', 'founder'],
          response: "Yes! We're a early-stage startup looking for our first design hire. Interested in shaping our design culture from scratch?"
        },
        {
          keywords: ['equity', 'stock', 'ownership', 'shares'],
          response: "As an early employee, you'd get meaningful equity (0.5-1.5%) plus competitive salary. Interested in startup ownership?"
        },
        {
          keywords: ['vision', 'mission', 'product', 'idea'],
          response: "We're building AI-powered productivity tools for remote teams. Think Notion meets Slack with smart automation."
        },
        {
          keywords: ['stage', 'funding', 'investors', 'money'],
          response: "We just closed our seed round ($2M) and have 18 months runway. Backed by top VCs who believe in our vision."
        },
        {
          keywords: ['team', 'size', 'employees', 'people'],
          response: "We're 8 people total - 4 engineers, 2 product, 1 marketing, and me. You'd be our design foundation."
        },
        {
          keywords: ['growth', 'scale', 'future', 'plans'],
          response: "Planning to 10x our user base this year. You'd lead design as we scale from 1K to 100K+ users. Exciting challenge!"
        },
        {
          keywords: ['risk', 'stability', 'secure', 'safe'],
          response: "Startups have risks, but also huge upside. We're well-funded with strong traction. Want to build something from zero to one?"
        },
        {
          keywords: ['culture', 'values', 'environment', 'work'],
          response: "We value ownership, rapid iteration, and user obsession. Fast-paced but supportive. Does startup culture excite you?"
        },
        {
          keywords: ['remote', 'office', 'location', 'hybrid'],
          response: "Fully remote team across 3 time zones. We meet quarterly in person. Freedom to work from anywhere!"
        },
        {
          keywords: ['impact', 'influence', 'decisions', 'voice'],
          response: "As our first designer, you'd have huge impact on product direction and user experience. Your voice will be heard!"
        },
        {
          keywords: ['learning', 'growth', 'development', 'skills'],
          response: "You'll learn incredibly fast here - wearing multiple hats, direct user feedback, rapid iteration. Best growth environment!"
        }
      ]
    };

    const contactResponses = responses[conversationId] || [];
    
    // Find matching response based on keywords
    for (const responseObj of contactResponses) {
      if (responseObj.keywords.some(keyword => message.includes(keyword))) {
        return responseObj.response;
      }
    }
    
    // Default responses if no keywords match
    const defaultResponses = {
      1: ["Tell me more about your background.", "What questions do you have about the role?", "Anything specific you'd like to discuss?"],
      2: ["That's interesting! What's your take on current design trends?", "How do you approach design challenges?", "What's your design philosophy?"],
      3: ["What type of projects are you working on lately?", "How's the freelance life treating you?", "Any exciting clients recently?"],
      4: ["What aspects of product design interest you most?", "How do you balance user needs with business goals?", "Tell me about your design process."],
      5: ["What's your experience with design systems?", "How do you ensure designs are technically feasible?", "Any questions about our tech stack?"],
      6: ["What excites you about early-stage startups?", "Ready to wear multiple hats and move fast?", "What's your biggest career goal?"]
    };

    const contactDefaults = defaultResponses[conversationId] || [
      "Tell me more about that.",
      "What's your perspective on this?",
      "Interesting point!"
    ];

    return contactDefaults[Math.floor(Math.random() * contactDefaults.length)];
  };

  const simulateTyping = (conversationId) => {
    setConversations(prev => prev.map(conv => 
      conv.id === conversationId ? { ...conv, isTyping: true } : conv
    ));

    // Clear existing timeout for this conversation
    if (typingTimeouts[conversationId]) {
      clearTimeout(typingTimeouts[conversationId]);
    }

    // Set new timeout
    const timeout = setTimeout(() => {
      setConversations(prev => prev.map(conv => 
        conv.id === conversationId ? { ...conv, isTyping: false } : conv
      ));
    }, 2000 + Math.random() * 2000); // 2-4 seconds

    setTypingTimeouts(prev => ({ ...prev, [conversationId]: timeout }));
  };

  const addMessage = (conversationId, message) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        const newMessage = {
          id: conv.messages.length + 1,
          text: message,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sent: true
        };
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          message: message.length > 30 ? message.substring(0, 30) + '...' : message,
          time: 'now',
          unread: false
        };
      }
      return conv;
    }));

    // Simulate other person typing and responding (only if they're online)
    const conversation = conversations.find(conv => conv.id === conversationId);
    if (conversation && conversation.status === 'Online') {
      simulateTyping(conversationId);
      
      setTimeout(() => {
        const autoResponse = getAutoResponse(conversationId, message);
        setConversations(prev => prev.map(conv => {
          if (conv.id === conversationId) {
            const responseMessage = {
              id: conv.messages.length + 2,
              text: autoResponse,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              sent: false
            };
            return {
              ...conv,
              messages: [...conv.messages, responseMessage],
              message: autoResponse.length > 30 ? autoResponse.substring(0, 30) + '...' : autoResponse,
              time: 'now',
              unread: true,
              isTyping: false
            };
          }
          return conv;
        }));
      }, 3000 + Math.random() * 3000); // 3-6 seconds delay
    }
  };

  const markAsRead = (conversationId) => {
    setConversations(prev => prev.map(conv => 
      conv.id === conversationId ? { ...conv, unread: false } : conv
    ));
  };

  const createNewConversation = (name, avatar) => {
    const newId = Math.max(...conversations.map(c => c.id)) + 1;
    const newConversation = {
      id: newId,
      name,
      avatar,
      message: 'Start a conversation...',
      time: 'now',
      unread: false,
      status: 'Online',
      messages: []
    };
    setConversations(prev => [newConversation, ...prev]);
    return newId;
  };

  return (
    <ConversationContext.Provider value={{
      conversations,
      currentChat,
      setCurrentChat,
      addMessage,
      markAsRead,
      createNewConversation
    }}>
      {children}
    </ConversationContext.Provider>
  );
};
