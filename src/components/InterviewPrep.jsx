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

        {/* AI Interview Prep Card */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">AI Interview Coach</h3>
              <p className="text-purple-100">Practice with AI-powered interview simulation</p>
            </div>
            <div className="text-4xl">🤖</div>
          </div>
          <button
            onClick={() => setShowAIPrep(true)}
            className="w-full bg-white text-purple-600 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Start AI Practice
          </button>
        </div>

        {/* Practice Interview Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-white">Practice Interview</h3>
            <button className="text-blue-400 font-medium">View All</button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {practiceInterviews.map((interview) => (
              <div
                key={interview.id}
                className={`min-w-[120px] bg-black rounded-2xl p-4 border-2 ${interview.borderColor} relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${interview.color} opacity-20`} />
                <div className="relative z-10">
                  <div className="text-white mb-4">
                    <h4 className="font-bold text-sm">{interview.title}</h4>
                    <p className="text-xs text-gray-300">{interview.company}</p>
                  </div>
                  <button className={`w-8 h-8 bg-gradient-to-r ${interview.color} rounded-full flex items-center justify-center mb-4`}>
                    <Play className="w-4 h-4 text-black ml-0.5" />
                  </button>
                  <div className={`text-6xl font-bold bg-gradient-to-r ${interview.color} bg-clip-text text-transparent`}>
                    {interview.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-black-800 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-6 border-2 border-orange-400">
            <Play className="w-5 h-5" />
            WATCH DEMO
          </button>
          <button className="flex-1 bg-black-800 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 border-2 border-green-400">
            <Share className="w-5 h-5" />
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
