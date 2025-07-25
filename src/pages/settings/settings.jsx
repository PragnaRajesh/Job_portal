import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Bell,
  Shield,
  Moon,
  Sun,
  Globe,
  HelpCircle,
  LogOut,
  ChevronRight,
  Eye,
  EyeOff,
  Trash2,
  Download
} from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    jobAlerts: true,
    profileViews: true,
    messages: true
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    contactVisible: false,
    resumeVisible: true
  });
  const [language, setLanguage] = useState('English');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePrivacyChange = (key) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userProfile');
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    if (showDeleteConfirm) {
      // Perform account deletion
      localStorage.clear();
      navigate('/login');
    } else {
      setShowDeleteConfirm(true);
    }
  };

  const handleExportData = () => {
    const userData = {
      profile: JSON.parse(localStorage.getItem('userProfile') || '{}'),
      settings: {
        darkMode,
        notifications,
        privacy,
        language
      },
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my_profile_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
          <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Account</h2>
          </div>
          <div className="divide-y">
            <button 
              onClick={() => navigate('/myprofilesection/myprofile')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Edit Profile</p>
                  <p className="text-sm text-gray-500">Update your personal information</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            
            <button 
              onClick={() => navigate('/changepassword')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield size={20} className="text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Change Password</p>
                  <p className="text-sm text-gray-500">Update your security credentials</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          </div>
          <div className="p-4 space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </p>
                  <p className="text-sm text-gray-500">
                    {key === 'email' && 'Receive notifications via email'}
                    {key === 'push' && 'Receive push notifications'}
                    {key === 'sms' && 'Receive SMS notifications'}
                    {key === 'jobAlerts' && 'Get notified about new job opportunities'}
                    {key === 'profileViews' && 'Get notified when someone views your profile'}
                    {key === 'messages' && 'Get notified about new messages'}
                  </p>
                </div>
                <button
                  onClick={() => handleNotificationChange(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Privacy</h2>
          </div>
          <div className="p-4 space-y-4">
            {Object.entries(privacy).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {value ? <Eye size={20} className="text-blue-600" /> : <EyeOff size={20} className="text-gray-400" />}
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </p>
                    <p className="text-sm text-gray-500">
                      {key === 'profileVisible' && 'Make your profile visible to employers'}
                      {key === 'contactVisible' && 'Show your contact information publicly'}
                      {key === 'resumeVisible' && 'Allow employers to view your resume'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handlePrivacyChange(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Appearance</h2>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? <Moon size={20} className="text-blue-600" /> : <Sun size={20} className="text-yellow-500" />}
                <div>
                  <p className="font-medium text-gray-900">Dark Mode</p>
                  <p className="text-sm text-gray-500">Switch to dark theme</p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Language & Region</h2>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Globe size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Language</p>
                  <p className="text-sm text-gray-500">Current: {language}</p>
                </div>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Data & Privacy</h2>
          </div>
          <div className="divide-y">
            <button 
              onClick={handleExportData}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Download size={20} className="text-indigo-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Export Data</p>
                  <p className="text-sm text-gray-500">Download a copy of your data</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Support</h2>
          </div>
          <div className="divide-y">
            <button 
              onClick={() => navigate('/help')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <HelpCircle size={20} className="text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Help & Support</p>
                  <p className="text-sm text-gray-500">Get help and contact support</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Account Actions</h2>
          </div>
          <div className="divide-y">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <LogOut size={20} className="text-gray-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Log Out</p>
                  <p className="text-sm text-gray-500">Sign out of your account</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            
            <button 
              onClick={handleDeleteAccount}
              className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Trash2 size={20} className="text-red-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-red-600">
                    {showDeleteConfirm ? 'Confirm Delete Account' : 'Delete Account'}
                  </p>
                  <p className="text-sm text-red-500">
                    {showDeleteConfirm ? 'Click again to permanently delete' : 'Permanently delete your account'}
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-red-400" />
            </button>
            
            {showDeleteConfirm && (
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="w-full p-4 text-center text-sm text-gray-500 hover:bg-gray-50"
              >
                Cancel Delete
              </button>
            )}
          </div>
        </div>

        {/* App Info */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 text-center space-y-2">
            <p className="text-sm text-gray-500">Job Finder App</p>
            <p className="text-xs text-gray-400">Version 1.0.0</p>
            <p className="text-xs text-gray-400">© 2024 Job Finder. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;