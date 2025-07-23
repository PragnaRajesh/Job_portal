import React, { useState } from 'react';
import { ArrowLeft, Play, Volume2 } from 'lucide-react';

const AIJobPrep = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('behavioral');

  const interviewData = {
    behavioral: {
      title: "Behavioral",
      subtitle: "Lateral Thinking",
      questions: [
        "Tell me about a time when you had to work under pressure",
        "Describe a situation where you had to solve a complex problem",
        "How do you handle criticism and feedback?",
        "Tell me about a time you made a mistake and how you handled it",
        "Describe a situation where you had to work with a difficult team member"
      ]
    },
    technical: {
      title: "Technical",
      subtitle: "Problem Solving",
      questions: [
        "Explain the difference between HTTP and HTTPS",
        "What is the difference between == and === in JavaScript?",
        "How would you optimize a slow-loading webpage?",
        "Explain the concept of responsive design",
        "What is version control and why is it important?"
      ]
    },
    situational: {
      title: "Situational",
      subtitle: "Critical Thinking",
      questions: [
        "How would you prioritize tasks when everything seems urgent?",
        "What would you do if you disagreed with your manager's decision?",
        "How would you handle a project with an unrealistic deadline?",
        "What would you do if you noticed a colleague struggling with their work?",
        "How would you approach learning a new technology for a project?"
      ]
    }
  };

  const currentData = interviewData[activeCategory];

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative">
            <Volume2 className="w-6 h-6 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-4">
        {/* Title Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Your Interviews</h1>
            <h2 className="text-3xl font-bold text-white">Prep.</h2>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="text-lg text-gray-300">Interview</div>
            <div className="text-lg text-gray-300">Questions</div>
          </div>
        </div>

        {/* Interactive AI Section */}
        <div className="bg-black rounded-3xl p-6 mb-8 relative overflow-hidden border border-gray-700">
          {/* Audio Waveform Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="flex items-center gap-1 h-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-t from-cyan-400 to-orange-400 w-1"
                  style={{
                    height: `${Math.random() * 60 + 20}%`,
                    opacity: Math.random() * 0.8 + 0.2
                  }}
                />
              ))}
            </div>
          </div>

          {/* AI Assistant Circle */}
          <div className="relative z-10 flex flex-col items-center mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-green-400 p-1 mb-4">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🤖</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-1">{currentData.title}</h3>
              <p className="text-gray-300 mb-4">{currentData.subtitle}</p>
              <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-black ml-1" />
              </button>
            </div>
          </div>

          {/* Category Selector */}
          <div className="flex justify-center gap-4 mb-4">
            {Object.keys(interviewData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {interviewData[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Sample Questions */}
        <div className="bg-gray-900 rounded-2xl p-4 mb-8 border border-gray-700">
          <h4 className="font-bold text-white mb-3">Sample {currentData.title} Questions:</h4>
          <div className="space-y-2">
            {currentData.questions.slice(0, 3).map((question, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-gray-300">{question}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start Interview Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-cyan-400 via-orange-400 to-green-400 text-black px-8 py-4 rounded-2xl font-bold text-lg">
            START AI INTERVIEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIJobPrep;
