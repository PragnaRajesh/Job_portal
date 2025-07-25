import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  BookOpen,
  Target,
  Clock,
  CheckCircle,
  Star,
  MessageSquare,
  Users,
  Lightbulb
} from 'lucide-react';

const AIPrep = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('technical');

  const categories = [
    { id: 'technical', label: 'Technical', icon: Target, color: 'bg-blue-500' },
    { id: 'behavioral', label: 'Behavioral', icon: Users, color: 'bg-purple-500' },
    { id: 'general', label: 'General', icon: MessageSquare, color: 'bg-green-500' }
  ];

  const prepModules = [
    {
      id: 1,
      title: 'Mock Interview Simulator',
      description: 'Practice with AI-powered interview simulations',
      duration: '30-45 min',
      difficulty: 'Intermediate',
      icon: Play,
      color: 'from-blue-500 to-blue-600',
      action: () => navigate('/mock-interview')
    },
    {
      id: 2,
      title: 'Common Questions Bank',
      description: 'Browse 500+ frequently asked interview questions',
      duration: '10-20 min',
      difficulty: 'Beginner',
      icon: BookOpen,
      color: 'from-green-500 to-green-600',
      action: () => navigate('/question-bank')
    },
    {
      id: 3,
      title: 'Answer Framework',
      description: 'Learn STAR method and other proven frameworks',
      duration: '15-25 min',
      difficulty: 'Beginner',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      action: () => navigate('/answer-framework')
    },
    {
      id: 4,
      title: 'Industry-Specific Tips',
      description: 'Tailored advice for your field and role',
      duration: '10-15 min',
      difficulty: 'Intermediate',
      icon: Lightbulb,
      color: 'from-orange-500 to-orange-600',
      action: () => navigate('/industry-tips')
    }
  ];

  const recentActivity = [
    { id: 1, title: 'Technical Interview Practice', score: 85, date: '2 days ago' },
    { id: 2, title: 'Behavioral Questions', score: 92, date: '1 week ago' },
    { id: 3, title: 'System Design Mock', score: 78, date: '2 weeks ago' }
  ];

  const tips = [
    "Practice your answers out loud, not just in your head",
    "Research the company thoroughly before the interview",
    "Prepare specific examples that showcase your skills",
    "Ask thoughtful questions about the role and company",
    "Follow up with a thank-you email within 24 hours"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center gap-4 p-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">AI Interview Prep</h1>
            <p className="text-sm text-gray-500">Ace your next interview with AI-powered practice</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Target size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to nail your interview?</h2>
              <p className="text-blue-100">
                Practice with our AI-powered tools and boost your confidence
              </p>
            </div>
          </div>
        </div>

        {/* Category Selector */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Interview Type</h3>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <p className="font-medium text-gray-900 text-sm">{category.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Prep Modules */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Preparation Modules</h3>
            <p className="text-sm text-gray-500">Choose a module to start practicing</p>
          </div>
          <div className="p-4 grid md:grid-cols-2 gap-4">
            {prepModules.map((module) => (
              <button
                key={module.id}
                onClick={module.action}
                className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <module.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{module.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{module.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={12} />
                        <span>{module.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Recent Practice Sessions</h3>
          </div>
          <div className="divide-y">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{activity.title}</h4>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activity.score >= 90 ? 'bg-green-100 text-green-800' :
                    activity.score >= 80 ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.score}%
                  </div>
                  <CheckCircle size={20} className="text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Interview Tips</h3>
            <p className="text-sm text-gray-500">Expert advice to improve your performance</p>
          </div>
          <div className="p-4 space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to start practicing?</h3>
          <p className="text-green-100 mb-4">
            Begin with a quick 10-minute practice session
          </p>
          <button 
            onClick={() => navigate('/mock-interview')}
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <Play size={20} />
            Start Mock Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPrep;