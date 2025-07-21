import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal, Phone, Search, Paperclip, Send, Home, MessageSquare, Plus, FileText, User, Briefcase } from 'lucide-react';
import { useConversation } from './conversationcontext';

const Chat = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);
  const { conversations, addMessage, setCurrentChat } = useConversation();

  const conversation = conversations.find(conv => conv.id === parseInt(userId));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (conversation) {
      setCurrentChat(conversation);
    }
  }, [conversation, setCurrentChat]);

  useEffect(() => {
    scrollToBottom();
  }, [conversation?.messages]);

  if (!conversation) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Conversation not found</p>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      addMessage(conversation.id, message);
      setMessage('');
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center">
          <ArrowLeft 
            className="w-6 h-6 text-gray-600 cursor-pointer mr-3" 
            onClick={() => navigate('/messages')}
          />
          <div className="flex items-center">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <h2 className="font-semibold text-gray-900 text-sm">{conversation.name}</h2>
              <p className={`text-xs ${conversation.status === 'Online' ? 'text-green-500' : 'text-gray-400'}`}>
                {conversation.isTyping ? (
                  <span className="text-blue-500">● typing...</span>
                ) : (
                  <span>● {conversation.status}</span>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-600" />
          <Search className="w-5 h-5 text-gray-600" />
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Date Separator */}
      <div className="flex justify-center py-3">
        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {conversation.messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              msg.sent 
                ? 'bg-blue-600 text-white rounded-br-md' 
                : 'bg-gray-100 text-gray-900 rounded-bl-md'
            }`}>
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sent ? 'text-blue-100' : 'text-gray-500'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {conversation.isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}

        {/* File Attachment - Only show for Andy Robertson */}
        {conversation.id === 1 && (
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PDF</span>
                </div>
                <div>
                  <p className="text-sm font-medium">James_CV - UI</p>
                  <p className="text-xs">UX Designer.PDF</p>
                  <p className="text-xs text-blue-100">807 KB PDF</p>
                </div>
              </div>
              <p className="text-xs text-blue-100 mt-2">09:36 am</p>
            </div>
          </div>
        )}

        {/* Scroll anchor - always at the bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <Paperclip className="w-5 h-5 text-gray-400" />
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
          </div>
          <button
            onClick={handleSendMessage}
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-4 border-t border-gray-100 bg-white">
        <Home className="w-6 h-6 text-gray-400" onClick={() => navigate('/pages/home')}/>
        <Briefcase className="w-6 h-6 text-gray-400"  onClick={() => navigate("/jobs/joblist")}/>
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <Plus className="w-6 h-6 text-white" onClick={() => navigate("/jobs/joblist")} />
        </div>
        <FileText className="w-6 h-6 text-gray-400" onClick={() => navigate('/applications/application')} />
        <User className="w-6 h-6 text-gray-400" 
         onClick={() => navigate("/myprofilesection/myprofile")}/>
      </div>
    </div>
  );
};

export default Chat;
