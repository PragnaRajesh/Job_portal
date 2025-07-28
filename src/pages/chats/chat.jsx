import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MoreHorizontal,
  Phone,
  Search,
  Paperclip,
  Send,
  Check
} from 'lucide-react';
import { useConversation } from './conversationcontext';

const Chat = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);
  const { conversations, addMessage, setCurrentChat } = useConversation();

  const conversation = conversations.find(conv => conv.id === parseInt(userId));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (conversation) {
      setCurrentChat(conversation);
    }
  }, [conversation, setCurrentChat]);

  useEffect(() => {
    scrollToBottom();
  }, [conversation?.messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      addMessage(conversation.id, message);
      setMessage('');
    }
  };

  if (!conversation) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Conversation not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header - Clean design matching second photo */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ArrowLeft
              className="w-6 h-6 text-gray-800 cursor-pointer mr-3"
              onClick={() => navigate('/messages')}
            />
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{conversation.name}</h2>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">{conversation.status}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <Phone className="w-6 h-6 text-blue-600 cursor-pointer" />
            <Search className="w-6 h-6 text-blue-600 cursor-pointer" />
            <MoreHorizontal className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Date separator */}
      <div className="flex justify-center py-6">
        <span className="text-sm text-gray-400 font-medium">Today</span>
      </div>

      {/* Chat messages */}
      <div className="flex-1 px-4 pb-4 bg-gray-100">
        <div className="space-y-6">
          {/* Sent message - User */}
          <div className="flex justify-end">
            <div className="max-w-xs lg:max-w-md">
              <div className="bg-purple-600 text-white px-4 py-3 rounded-2xl rounded-br-md">
                <p className="text-sm">Hello sir, Good Morning</p>
              </div>
              <div className="flex items-center justify-end mt-1 text-xs text-gray-500">
                <span>09:30 am</span>
                <Check className="w-3 h-3 ml-1 text-green-500" />
                <Check className="w-3 h-3 -ml-1 text-green-500" />
              </div>
            </div>
          </div>

          {/* Received message with avatar */}
          <div className="flex items-start space-x-3">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="max-w-xs lg:max-w-md">
              <div className="bg-orange-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-md">
                <p className="text-sm">Morning, Can i help you ?</p>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                <span>09:31 am</span>
              </div>
            </div>
          </div>

          {/* Sent message - User */}
          <div className="flex justify-end">
            <div className="max-w-xs lg:max-w-md">
              <div className="bg-purple-600 text-white px-4 py-3 rounded-2xl rounded-br-md">
                <p className="text-sm">I saw the UI/UX Designer vacancy that you uploaded on linkedin yesterday and I am interested in joining your company.</p>
              </div>
              <div className="flex items-center justify-end mt-1 text-xs text-gray-500">
                <span>09:33 am</span>
                <Check className="w-3 h-3 ml-1 text-green-500" />
                <Check className="w-3 h-3 -ml-1 text-green-500" />
              </div>
            </div>
          </div>

          {/* Received message with avatar */}
          <div className="flex items-start space-x-3">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="max-w-xs lg:max-w-md">
              <div className="bg-orange-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-md">
                <p className="text-sm">Oh yes, please send your CV/Resume here</p>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                <span>09:35 am</span>
              </div>
            </div>
          </div>

          {/* File attachment message - Sent */}
          <div className="flex justify-end">
            <div className="max-w-xs lg:max-w-md">
              <div className="bg-purple-600 text-white px-4 py-3 rounded-2xl rounded-br-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-white">PDF</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Jamet- CV - UI/ UX Designer.PDF</p>
                    <p className="text-xs text-purple-200">867 Kb PDF</p>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex items-center justify-end mt-1 text-xs text-gray-500">
                <span>09:33 am</span>
                <Check className="w-3 h-3 ml-1 text-green-500" />
              </div>
            </div>
          </div>
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="px-4 py-4 bg-white">
        <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-3">
          <Paperclip className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
