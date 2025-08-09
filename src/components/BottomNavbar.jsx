import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, Briefcase, Plus, FileText, User } from 'lucide-react';
import resumeImg from '../assets/resume-builder.png';
import chatImg from '../assets/chat.png';
import robotImg from '../assets/mock-interview.png';

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Paths where navbar should be hidden
  const hideExactPaths = [
    '/', // onboarding root
    '/onboarding1',
    '/onboarding2',
    '/onboarding3',
    '/onboarding4',
    '/signup1',
    '/signup2',
    '/signupverify',
    '/login',
    '/loginverify',
    '/InterviewPrep',
    '/resume/airesumechat',
    '/resume/resumebuilder',
    '/resume/resumetemplates',
    '/resume/resumeeditor',
    '/pages/chats/messages'
 ];

  // Prefix paths where navbar should be hidden (including all subroutes)
  const hidePrefixPaths = ['/profile'];

  // Determine if navbar should be hidden
  const shouldHideNavbar =
    hideExactPaths.includes(location.pathname) ||
    hidePrefixPaths.some(prefix => location.pathname.startsWith(prefix));

  // Hooks must be called always, before early return
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Early return after hooks
  if (shouldHideNavbar) return null;

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-1 sm:py-1 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
      <button onClick={() => navigate('/home')}>
        <HomeIcon
          className={`w-6 h-6 sm:w-7 sm:h-7 mt-2 ${
            isActive('/home') ? 'text-blue-600' : 'text-gray-400'
          }`}
        />
      </button>
      <button onClick={() => navigate('/jobs/joblist')}>
        <Briefcase
          className={`w-6 h-6 sm:w-7 sm:h-7 mt-2 ${
            isActive('/jobs') ? 'text-blue-600' : 'text-gray-400'
          }`}
        />
      </button>

      <div className="relative">
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="w-8 h-8 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 mt-2"
        >
          <Plus className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
        </button>

        {showPopup && (
          <div
            ref={popupRef}
            className="fixed bottom-16 sm:bottom-20 left-0 w-full bg-gradient-to-t from-blue-100 via-white to-white z-50 rounded-t-3xl shadow-2xl flex flex-col items-center pt-6 pb-4 animate-slideUp"
          >
            <div className="w-16 h-1 bg-blue-200 rounded-full mb-6 mt-2" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">Quick Actions</h3>

            <div className="flex flex-col gap-4 w-4/5 sm:w-3/5 md:w-2/5">
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate('/resume/resumebuilder');
                }}
                className="w-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <span className="absolute top-1 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  ✨ AI
                </span>
                <img src={resumeImg} alt="Resume" className="w-6 h-6 sm:w-8 sm:h-8" />
                Resume Builder
              </button>

              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate('/messages');
                }}
                className="w-full bg-[#E8F9ED] text-[#2E7D32] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#BEE7C9] hover:bg-[#d3f3db] transition-all flex items-center justify-center gap-3"
              >
                <img src={chatImg} alt="Chat" className="w-6 h-6 sm:w-8 sm:h-8" />
                Chats
              </button>

              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate('/InterviewPrep');
                }}
                className="w-full bg-[#F3E9FF] text-[#6A1B9A] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#D8C5ED] hover:bg-[#ebdbff] transition-all flex items-center justify-center gap-3"
              >
                <img src={robotImg} alt="AI Prep" className="w-6 h-6 sm:w-8 sm:h-8" />
                AI Job Prep
              </button>
            </div>
          </div>
        )}
      </div>

      <button onClick={() => navigate('/applications/application')}>
        <FileText
          className={`w-6 h-6 sm:w-7 sm:h-7 mt-2 ${
            isActive('/applications') ? 'text-blue-600' : 'text-gray-400'
          }`}
        />
      </button>
      <button onClick={() => navigate('/myprofilesection/myprofile')}>
        <User
          className={`w-6 h-6 sm:w-7 sm:h-7 mt-2 ${
            isActive('/myprofilesection') ? 'text-blue-600' : 'text-gray-400'
          }`}
        />
      </button>
    </div>
  );
};

export default BottomNavbar;
