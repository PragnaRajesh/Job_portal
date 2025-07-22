import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MoreHorizontal,
  Search,
  HomeIcon,
  Briefcase,
  MessageSquare,
  Plus,
  FileText,
  User,
} from 'lucide-react';
import { useConversation } from './conversationcontext';
import NewChatModal from './newchatmodal';

const Messages = () => {
  const navigate = useNavigate();
  const { conversations, markAsRead } = useConversation();
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleConversationClick = (conversation) => {
    markAsRead(conversation.id);
    navigate(`/chat/${conversation.id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col w-full pb-20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
          <h1 className="text-lg font-semibold text-gray-900">Messages</h1>
          <MoreHorizontal className="w-6 h-6 text-gray-600" />
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search message"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => handleConversationClick(conversation)}
              className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
            >
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {conversation.unread && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                )}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 truncate">
                  {conversation.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <button onClick={() => navigate('/home')}>
            <HomeIcon className="w-6 h-6 text-blue-600" />
          </button>
          <button onClick={() => navigate('/jobs/joblist')}>
            <Briefcase className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
          </button>

          {/* Plus Icon with Popup */}
          <div className="relative">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-6 h-6 text-white" />
            </button>

            {showPopup && (
              <div
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white w-64 rounded-2xl border border-gray-200 shadow-xl p-5 z-50"
                ref={popupRef}
              >
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
                  Quick Actions
                </h3>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setShowPopup(false);
                      navigate('/messages');
                    }}
                    className="w-full bg-blue-100 text-blue-800 py-2 rounded-lg font-medium hover:bg-blue-200"
                  >
                    📩 Messages
                  </button>
                  <button
                    onClick={() => {
                      setShowPopup(false);
                      navigate('/resume/resumebuilder');
                    }}
                    className="w-full bg-green-100 text-green-800 py-2 rounded-lg font-medium hover:bg-green-200"
                  >
                    📝 Resume Builder
                  </button>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => navigate('/applications/application')}>
            <FileText className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
          </button>
          <button onClick={() => navigate('/myprofilesection/myprofile')}>
            <User className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
          </button>
        </div>
      </div>

      {showNewChatModal && (
        <NewChatModal
          onClose={() => setShowNewChatModal(false)}
          onCreateChat={(name, avatar) => {
            setShowNewChatModal(false);
            // Handle new chat creation
          }}
        />
      )}
    </>
  );
};

export default Messages;
