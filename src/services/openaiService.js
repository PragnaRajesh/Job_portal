import OpenAI from 'openai';

// Function to get API key from multiple sources
function getApiKey() {
  const localStorageKey = localStorage.getItem('openai_api_key');
  if (localStorageKey) return localStorageKey;

  // Fall back to environment variable
  return import.meta.env.VITE_OPENAI_API_KEY;
}

// Initialize OpenAI client
let openai = null;

function getOpenAIClient() {
  const apiKey = getApiKey();

  if (!apiKey) {
    throw new Error('OpenAI API key not found. Please set your API key in settings or environment variables.');
  }

  if (!openai || openai.apiKey !== apiKey) {
    openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true 
    });
  }

  return openai;
}

// System prompt for the AI resume assistant
const SYSTEM_PROMPT = `You are an expert resume assistant AI. Your role is to help users create professional, compelling resumes by gathering information about their background, skills, and experience.

IMPORTANT GUIDELINES:
1. Be conversational and encouraging
2. Ask follow-up questions to gather detailed information
3. Focus on extracting specific details about:
   - Job titles and responsibilities
   - Skills and technologies
   - Achievements and metrics
   - Education background
   - Career goals and target positions

4. Provide helpful suggestions and advice
5. Keep responses concise but comprehensive
6. Use a professional yet friendly tone
7. When you have enough information, suggest generating the resume

Do not generate actual resume content - just help gather information and provide guidance.`;

// Chat with OpenAI for resume building assistance
export async function getChatResponse(messages, userInput) {
  try {
    const client = getOpenAIClient();

    // Prepare messages for OpenAI
    const openaiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(1).map(msg => ({ // Skip the initial bot message
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: userInput }
    ];

    const completion = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: openaiMessages,
      max_tokens: 300,
      temperature: 0.7,
    });

    const responseContent = completion.choices[0].message.content;
    
    // Generate suggestions based on the conversation context
    const suggestions = generateContextualSuggestions(messages.length, userInput);
    
    return {
      content: responseContent,
      suggestions: suggestions,
      showGenerateButton: shouldShowGenerateButton(messages.length, userInput)
    };

  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Fallback to mock response if API fails
    return getFallbackResponse(messages.length, userInput);
  }
}

// Generate contextual suggestions based on conversation progress
function generateContextualSuggestions(messageCount, userInput) {
  const lowerInput = userInput.toLowerCase();
  
  // Early conversation - gather basic info
  if (messageCount <= 4) {
    return [
      "I'm a software engineer with 3 years of experience",
      "I work in marketing and social media",
      "I'm a recent graduate looking for my first job",
      "I'm changing careers from teaching to tech"
    ];
  }
  
  // Mid conversation - get specific details
  if (messageCount <= 8) {
    if (lowerInput.includes('software') || lowerInput.includes('engineer') || lowerInput.includes('developer')) {
      return [
        "I know React, Node.js, and Python",
        "I've built web applications and APIs",
        "I want to work at a tech startup",
        "I increased system performance by 40%"
      ];
    } else if (lowerInput.includes('marketing') || lowerInput.includes('business')) {
      return [
        "I managed social media campaigns",
        "I increased brand engagement by 200%",
        "I have experience with Google Analytics",
        "I want to work in digital marketing"
      ];
    } else {
      return [
        "I led a team of 5 people",
        "I improved processes and saved costs",
        "I have a bachelor's degree",
        "I'm targeting management positions"
      ];
    }
  }
  
  // Later conversation - finalize details
  return [
    "I want to emphasize my leadership skills",
    "My biggest achievement was launching a new product",
    "I prefer a modern, clean design",
    "Include my volunteer work experience"
  ];
}

// Determine if generate button should be shown
function shouldShowGenerateButton(messageCount, userInput) {
  return messageCount >= 6 && (
    userInput.toLowerCase().includes('ready') ||
    userInput.toLowerCase().includes('generate') ||
    userInput.toLowerCase().includes('create') ||
    messageCount >= 10
  );
}

// Fallback response if OpenAI API fails
function getFallbackResponse(messageCount, userInput) {
  const fallbackResponses = [
    {
      content: "I'd love to learn more about your background! What's your current job title or the type of work you do?",
      suggestions: [
        "I'm a software developer",
        "I work in marketing",
        "I'm a project manager",
        "I'm a recent graduate"
      ]
    },
    {
      content: "Great! Now tell me about your experience and skills. What are you most proud of in your career?",
      suggestions: [
        "I've led successful projects",
        "I have strong technical skills",
        "I'm great at problem-solving",
        "I work well in teams"
      ]
    },
    {
      content: "Perfect! I'm getting a good picture of your background. What type of positions are you targeting, and what would you like to highlight most?",
      suggestions: [
        "I want senior-level positions",
        "Looking for remote opportunities",
        "Interested in startups",
        "Targeting specific companies"
      ],
      showGenerateButton: true
    }
  ];

  const responseIndex = Math.min(Math.floor(messageCount / 3), fallbackResponses.length - 1);
  return fallbackResponses[responseIndex];
}

// Enhanced resume content generation using OpenAI
export async function generateResumeContent(conversationHistory) {
  try {
    const client = getOpenAIClient();

    const conversationText = conversationHistory
      .filter(msg => msg.type === 'user')
      .map(msg => msg.content)
      .join(' ');

    const prompt = `Based on this conversation about someone's career background, extract and structure the key information for a professional resume:

Conversation: ${conversationText}

Please provide a JSON response with the following structure:
{
  "personalInfo": {
    "name": "extracted or 'Your Name'",
    "title": "professional title",
    "email": "professional email format",
    "phone": "phone format",
    "location": "city, state/country"
  },
  "summary": "professional summary paragraph",
  "experience": [
    {
      "title": "job title",
      "company": "company name",
      "duration": "time period",
      "responsibilities": ["achievement 1", "achievement 2", "achievement 3"]
    }
  ],
  "education": [
    {
      "degree": "degree type",
      "school": "institution name",
      "year": "graduation year"
    }
  ],
  "skills": ["skill1", "skill2", "skill3", "skill4", "skill5"]
}

Make the content professional, specific, and tailored to the person's background mentioned in the conversation.`;

    const completion = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 0.3,
    });

    const responseContent = completion.choices[0].message.content;
    
    try {
      return JSON.parse(responseContent);
    } catch (parseError) {
      console.error('Error parsing OpenAI JSON response:', parseError);
      return null;
    }

  } catch (error) {
    console.error('OpenAI Resume Generation Error:', error);
    return null;
  }
}
