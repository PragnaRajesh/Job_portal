import React, { useState } from 'react';
import { ArrowLeft, Play, Share, Bell } from 'lucide-react';
import AIJobPrep from './AIJobPrep';

const InterviewPrep = ({ onClose }) => {
  const [showAIPrep, setShowAIPrep] = useState(false);

  const practiceInterviews = [
    {
      id: 1,
      title: "Video Editor",
      company: "Spotify",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-400"
    },
    {
      id: 2,
      title: "Video Editor",
      company: "Spotify",
      color: "from-green-400 to-emerald-500",
      borderColor: "border-green-400"
    },
    {
      id: 3,
       title: "Video Editor",
      company: "Spotify",
      color: "from-orange-400 to-yellow-500",
      borderColor: "border-orange-400"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 lg:max-w-6xl lg:mx-auto">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2">
            <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center relative">
            <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>
          </div>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 pb-4 lg:max-w-6xl lg:mx-auto">
        {/* Title Section */}
        <div className="flex justify-between items-start mb-8 sm:mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Your Interviews</h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Prep.</h2>
          </div>
          <div className="text-right">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">100+</div>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-300">Interview</div>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-300">Questions</div>
          </div>
        </div>

        {/* AI Interview Prep Card */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 text-white">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">AI Interview Coach</h3>
              <p className="text-purple-100 text-base sm:text-lg">Practice with AI-powered interview simulation</p>
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl">🤖</div>
          </div>
          <button
            onClick={() => setShowAIPrep(true)}
            className="w-full bg-white text-purple-600 py-3 sm:py-4 md:py-5 rounded-2xl font-semibold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6" />
            Start AI Practice
          </button>
        </div>

        {/* Practice Interview Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Practice Interview</h3>
            <button className="text-blue-400 font-medium text-base sm:text-lg">View All</button>
          </div>

          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
            {practiceInterviews.map((interview) => (
              <div
                key={interview.id}
                className={`min-w-[7.5rem] sm:min-w-[9rem] md:min-w-0 bg-black rounded-2xl p-4 sm:p-6 border-2 ${interview.borderColor} relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${interview.color} opacity-20`} />
                <div className="relative z-10">
                  <div className="text-white mb-4 sm:mb-6">
                    <h4 className="font-bold text-sm sm:text-base">{interview.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300">{interview.company}</p>
                  </div>
                  <button className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${interview.color} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-black ml-0.5" />
                  </button>
                  <div className={`text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r ${interview.color} bg-clip-text text-transparent`}>
                    {interview.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row">
          <button className="flex-1 bg-black-800 text-white py-4 sm:py-5 md:py-6 rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-6 border-2 border-orange-400 hover:bg-gray-900 transition-colors">
            <Play className="w-5 h-5 sm:w-6 sm:h-6" />
            WATCH DEMO
          </button>
          <button className="flex-1 bg-black-800 text-white py-4 sm:py-5 md:py-6 rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 border-2 border-green-400 hover:bg-gray-900 transition-colors">
            <Share className="w-5 h-5 sm:w-6 sm:h-6" />
            SHARE
          </button>
        </div>
      </div>

      {/* AI Job Prep Modal */}
      {showAIPrep && (
        <AIJobPrep onClose={() => setShowAIPrep(false)} />
      )}
    </div>
  );
};

export default InterviewPrep;
