import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Mail, 
  Phone,
  Search,
  BookOpen,
  HelpCircle
} from 'lucide-react';

const Help = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I update my profile information?",
      answer: "You can update your profile by going to Settings > Edit Profile. From there, you can modify your personal information, contact details, and bio."
    },
    {
      id: 2,
      question: "How do I upload or update my resume?",
      answer: "In your profile page, click on the edit button next to your resume file. You can then select a new PDF, DOC, or DOCX file to upload."
    },
    {
      id: 3,
      question: "How do I add work experience?",
      answer: "Go to your profile and click the plus (+) button next to 'Work Experience'. You can add multiple job experiences with details like job title, company, duration, and salary."
    },
    {
      id: 4,
      question: "How do I manage my skills?",
      answer: "In the Skills section of your profile, you can click on skill tags to add or remove them. You can also add custom skills using the input field."
    },
    {
      id: 5,
      question: "How do I change my password?",
      answer: "Go to Settings > Change Password. You'll need to enter your current password and create a new one that meets our security requirements."
    },
    {
      id: 6,
      question: "How do I control my privacy settings?",
      answer: "In Settings > Privacy, you can control who can see your profile, contact information, and resume. Toggle the switches to adjust your visibility preferences."
    },
    {
      id: 7,
      question: "How do I turn off notifications?",
      answer: "Go to Settings > Notifications to customize which notifications you receive. You can control email, push, SMS, and specific job alert notifications."
    },
    {
      id: 8,
      question: "How do I delete my account?",
      answer: "In Settings > Account Actions, you'll find the 'Delete Account' option. This action is permanent and cannot be undone. You'll need to confirm the deletion."
    },
    {
      id: 9,
      question: "How do I export my data?",
      answer: "Go to Settings > Data & Privacy > Export Data. This will download a JSON file containing all your profile information and settings."
    },
    {
      id: 10,
      question: "How do I share my profile?",
      answer: "On your profile page, click the share button in the top-right corner. You can use native sharing or copy the profile link to your clipboard."
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: () => alert("Live chat feature would open here"),
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      action: () => window.open('mailto:support@jobfinder.com'),
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our support line",
      action: () => window.open('tel:+1234567890'),
      color: "bg-purple-100 text-purple-600"
    }
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
          <h1 className="text-xl font-semibold text-gray-900">Help & Support</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
          <p className="text-blue-100">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Quick Contact */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Contact Support</h3>
            <p className="text-sm text-gray-500 mt-1">Choose your preferred way to reach out</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {contactOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center mb-3`}>
                    <option.icon size={24} />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{option.title}</h4>
                  <p className="text-sm text-gray-500 text-center">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <BookOpen size={18} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
                <p className="text-sm text-gray-500">Quick answers to common questions</p>
              </div>
            </div>
          </div>
          <div className="divide-y">
            {filteredFAQs.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-gray-500">No FAQs match your search.</p>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="border-b last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Additional Resources</h3>
          </div>
          <div className="p-6 space-y-4">
            <button 
              onClick={() => navigate('/privacy-policy')}
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Privacy Policy</h4>
                <p className="text-sm text-gray-500">Learn how we protect your data</p>
              </div>
              <ChevronDown size={20} className="text-gray-400 transform rotate-270" />
            </button>
            
            <button 
              onClick={() => navigate('/terms-of-service')}
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Terms of Service</h4>
                <p className="text-sm text-gray-500">Read our terms and conditions</p>
              </div>
              <ChevronDown size={20} className="text-gray-400 transform rotate-270" />
            </button>
            
            <button 
              onClick={() => window.open('https://jobfinder.com/blog', '_blank')}
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Blog & Tips</h4>
                <p className="text-sm text-gray-500">Career advice and job search tips</p>
              </div>
              <ChevronDown size={20} className="text-gray-400 transform rotate-270" />
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Still need help?</h3>
          <p className="text-gray-500 text-sm mb-4">
            Our support team is available 24/7 to assist you
          </p>
          <button 
            onClick={() => contactOptions[0].action()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;