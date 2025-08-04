import React, { useState, useRef } from 'react';
import { ArrowLeft, Play, Bell, HomeIcon, Briefcase, FileText, User, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import resumeImg from '../assets/resume-builder.png';
import chatImg from '../assets/chat.png';
import robotImg from '../assets/mock-interview.png';

const AIJobPrep = ({ onClose }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('behavioral');
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

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
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto pb-24">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative">
            <Bell className="w-6 h-6 text-white" />
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

      {/* ✅ Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-1 sm:py-1 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
        <button onClick={() => navigate("/home")}>
          <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
        </button>
        <button onClick={() => navigate("/jobs/joblist")}>
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
        </button>

        {/* Plus Icon with Popup */}
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="w-8 h-8 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 mt-2"
          >
            <Plus className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
          </button>

          {showPopup && (
            <div
              ref={popupRef}
              className="fixed bottom-16 sm:bottom-20 left-0 w-full h-[50vh] sm:h-[45vh] md:h-[40vh] bg-gradient-to-t from-blue-100 via-white to-white z-50 rounded-t-3xl shadow-2xl flex flex-col items-center pt-6 pb-4 animate-slideUp"
            >
              <div className="w-16 h-1 bg-blue-200 rounded-full mb-6 mt-2" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">Quick Actions</h3>

              <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-sm px-6">
                <button
                  onClick={() => {
                    setShowPopup(false);
                    navigate("/resume/resumebuilder");
                  }}
                  className="w-full bg-[#E3F2FD] text-[#1976D2] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#BBDEFB] hover:bg-[#d1e7ff] transition-all flex items-center justify-center gap-3"
                >
                  <img src={resumeImg} alt="Resume Builder" className="w-6 h-6 sm:w-8 sm:h-8" />
                  Resume Builder
                </button>

                <button
                  onClick={() => {
                    setShowPopup(false);
                    navigate("/resume/ai-chat");
                  }}
                  className="w-full bg-[#E8F5E8] text-[#2E7D32] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#C8E6C9] hover:bg-[#dcefdc] transition-all flex items-center justify-center gap-3"
                >
                  <img src={chatImg} alt="AI Chat" className="w-6 h-6 sm:w-8 sm:h-8" />
                  AI Resume Chat
                </button>

                <button
                  onClick={() => {
                    setShowPopup(false);
                    // Already on AI Job Prep, just close popup
                  }}
                  className="w-full bg-[#F3E9FF] text-[#6A1B9A] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#D8C5ED] hover:bg-[#ebdbff] transition-all flex items-center justify-center gap-3"
                >
                  <img src={robotImg} alt="AI Prep" className="w-6 h-6 sm:w-8 sm:h-8" />
                  AI Job Prep
                </button>
              </div>
            </div>
          )}
        </div>

        <button onClick={() => navigate("/applications/application")}>
          <FileText className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
        </button>
        <button onClick={() => navigate("/myprofilesection/myprofile")}>
          <User className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default AIJobPrep;
