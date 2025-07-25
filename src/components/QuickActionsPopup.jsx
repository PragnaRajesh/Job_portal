import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

const QuickActionsPopup = ({ showPopup, setShowPopup }) => {
  const navigate = useNavigate();
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowPopup]);

  return (
    <div className="relative">
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={`w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 ${showPopup ? 'rotate-45' : ''}`}
      >
        <Plus className="w-6 h-6 text-white" />
      </button>

      {showPopup && (
        <div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white w-80 rounded-2xl border border-gray-200 shadow-2xl overflow-hidden z-50 animate-slide-up"
          ref={popupRef}
          style={{
            height: 'calc(25vh)',
            minHeight: '200px'
          }}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Quick Actions
              </h3>
              <p className="text-sm text-gray-500 text-center mt-1">
                Choose an action to get started
              </p>
            </div>
            
            <div className="flex-1 p-4 space-y-3">
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/resume/resumebuilder");
                }}
                className="w-full bg-gradient-to-r from-green-100 to-green-50 border border-green-200 text-green-800 py-3 px-4 rounded-xl font-medium hover:from-green-200 hover:to-green-100 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Resume Builder</div>
                  <div className="text-xs text-green-600">Create & edit your resume</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/ai-prep");
                }}
                className="w-full bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 text-purple-800 py-3 px-4 rounded-xl font-medium hover:from-purple-200 hover:to-purple-100 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold">AI Prep</div>
                  <div className="text-xs text-purple-600">Interview preparation & tips</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/messages");
                }}
                className="w-full bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 text-blue-800 py-3 px-4 rounded-xl font-medium hover:from-blue-200 hover:to-blue-100 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Chats</div>
                  <div className="text-xs text-blue-600">Message with employers</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActionsPopup;