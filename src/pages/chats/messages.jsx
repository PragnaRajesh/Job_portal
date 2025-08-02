import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal, Search, HomeIcon,Briefcase,PlusCircle, FileBarChart, User2, MessageSquare, Plus, FileText, User } from 'lucide-react';
import { useConversation } from './conversationcontext';
import NewChatModal from './newchatmodal';

const Messages = () => {
  const navigate = useNavigate();
  const { conversations, markAsRead } = useConversation();
  const [showNewChatModal, setShowNewChatModal] = React.useState(false);

  const handleConversationClick = (conversation) => {
    markAsRead(conversation.id);
    navigate(`/chat/${conversation.id}`);
  };

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col w-full lg:max-w-2xl lg:mx-auto pt-safe pb-safe">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" onClick={() => navigate(-1)} />
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Messages</h1>
        <MoreHorizontal className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
      </div>

      {/* Search Bar */}
      <div className="p-4 sm:p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search message"
            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => handleConversationClick(conversation)}
            className="flex items-center p-4 sm:p-6 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors"
          >
            <div className="relative">
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
              />
              {conversation.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            
            <div className="ml-3 sm:ml-4 flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">
                  {conversation.name}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 ml-2 flex-shrink-0">
                  {conversation.lastMessageTime}
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm sm:text-base text-gray-600 truncate">
                  {conversation.lastMessage}
                </p>
                {conversation.unreadCount > 0 && (
                  <div className="ml-2 bg-blue-600 text-white text-xs sm:text-sm rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                    {conversation.unreadCount}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 sm:py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
        <button onClick={() => navigate("/home")}>
          <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hover:text-blue-600 transition-colors" />
        </button>
        <button onClick={() => navigate("/jobs/joblist")}>
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hover:text-blue-600 transition-colors" />
        </button>
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
          <Plus className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <button onClick={() => navigate("/applications/application")}>
          <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hover:text-blue-600 transition-colors" />
        </button>
        <button onClick={() => navigate("/myprofilesection/myprofile")}>
          <User className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
        </button>
      </div>
    </div>

      {/* New Chat Modal */}
      {showNewChatModal && (
        <NewChatModal onClose={() => setShowNewChatModal(false)} />
      )}
    </>
  );
};

export default Messages;
