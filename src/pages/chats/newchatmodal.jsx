import React, { useState } from 'react';
import { X, Search, Plus } from 'lucide-react';
import { useConversation } from './conversationcontext';
import { useNavigate } from 'react-router-dom';

const NewChatModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { createNewConversation } = useConversation();
  const navigate = useNavigate();

  const availableContacts = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'Online'
    },
    {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'Online'
    },
    {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'Offline'
    },
    {
      name: 'David Rodriguez',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'Online'
    }
  ];

  const filteredContacts = availableContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStartChat = (contact) => {
    const newChatId = createNewConversation(contact.name, contact.avatar);
    onClose();
    navigate(`/chat/${newChatId}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">New Message</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto max-h-96">
          {filteredContacts.map((contact, index) => (
            <div
              key={index}
              onClick={() => handleStartChat(contact)}
              className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                  contact.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">{contact.name}</h3>
                <p className={`text-xs ${contact.status === 'Online' ? 'text-green-500' : 'text-gray-400'}`}>
                  {contact.status}
                </p>
              </div>
              <Plus className="w-5 h-5 text-blue-600" />
            </div>
          ))}
          
          {filteredContacts.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-sm">No contacts found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;