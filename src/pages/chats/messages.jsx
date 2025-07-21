import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal, Search, Home, MessageSquare, Plus, FileText, User } from 'lucide-react';
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
      <div className="bg-white min-h-screen flex flex-col w-full">
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
                <h3 className="font-semibold text-gray-900 text-sm">{conversation.name}</h3>
                <span className="text-xs text-gray-500">{conversation.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1 truncate">{conversation.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 z-50">
        <HomeIcon size={22} className="text-gray-600" 
        onClick={() => navigate("/home")}/>
        <Briefcase
          size={22}
          className="text-gray-600"
          onClick={() => navigate("/jobs/joblist")}
        />
        <div className="-mt-5 bg-white rounded-full shadow-md p-1">
          <PlusCircle size={32} className="text-blue-500" onClick={() =>  navigate("/chats/messages")} />
        </div>
        <FileBarChart
          size={22}
          className="text-gray-600"
          onClick={() => navigate("/applications/application")}
        />
        <User2
          size={22}
          className="text-blue-600 cursor-pointer"
          onClick={() => navigate("/myprofilesection/myprofile")}
        />
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
