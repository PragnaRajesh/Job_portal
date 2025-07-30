import React, { useState, useEffect } from 'react';
import { Settings, Eye, EyeOff, Save, AlertCircle } from 'lucide-react';

const ApiKeySettings = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Load API key from localStorage on component mount
    const savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      setIsSaved(true);
    }
  }, []);

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openai_api_key', apiKey);
      // Also set it as environment variable for the session
      window.VITE_OPENAI_API_KEY = apiKey;
      setIsSaved(true);
      
      // Show success message
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  const handleClear = () => {
    setApiKey('');
    localStorage.removeItem('openai_api_key');
    delete window.VITE_OPENAI_API_KEY;
    setIsSaved(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-800">API Settings</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              OpenAI API Key
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium">How to get your API key:</p>
                <ol className="mt-1 list-decimal list-inside space-y-1">
                  <li>Visit <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">OpenAI API Keys</a></li>
                  <li>Sign in to your OpenAI account</li>
                  <li>Click "Create new secret key"</li>
                  <li>Copy and paste it here</li>
                </ol>
              </div>
            </div>
          </div>

          {isSaved && (
            <div className="mb-4 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-green-800 text-sm font-medium">API key saved successfully!</span>
              </div>
            </div>
          )}

          <div className="flex justify-between space-x-3">
            <button
              onClick={handleClear}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
            <button
              onClick={handleSave}
              disabled={!apiKey.trim()}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              <span>Save API Key</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeySettings;
