import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal, Home, MessageSquare, Plus, FileText, User } from 'lucide-react';

const NoMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <ArrowLeft 
          className="w-6 h-6 text-gray-600 cursor-pointer" 
          onClick={() => navigate('/messages')}
        />
        <h1 className="text-lg font-semibold text-gray-900">No Message</h1>
        <MoreHorizontal className="w-6 h-6 text-gray-600" />
      </div>

      {/* Empty State Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Illustration */}
        <div className="relative mb-8">
          <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-12 shadow-lg"></div>
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-orange-400 rounded-full"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full"></div>
          <div className="absolute top-2 -left-6 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="absolute -top-2 right-8 w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-4 right-2 w-5 h-5 bg-purple-400 rounded-full"></div>
          <div className="absolute top-8 left-2 w-2 h-8 bg-pink-300 rounded-full transform rotate-45"></div>
        </div>

        {/* Text Content */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">No Message</h2>
        <p className="text-gray-500 text-center text-sm mb-8 max-w-xs leading-relaxed">
          You currently have no incoming messages thank you
        </p>

        {/* Create Message Button */}
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors">
          CREATE A MESSAGE
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-around py-4 border-t border-gray-100 bg-white">
        <Home className="w-6 h-6 text-gray-400" />
        <MessageSquare className="w-6 h-6 text-gray-400" />
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <Plus className="w-6 h-6 text-white" />
        </div>
        <FileText className="w-6 h-6 text-gray-400" />
        <User className="w-6 h-6 text-gray-400" />
      </div>

    </div>
  );
};

export default NoMessage;