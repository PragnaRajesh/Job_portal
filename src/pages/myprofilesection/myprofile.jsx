import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Edit3,
  Send,
  Settings,
  FileText,
  Folder,
  PieChart,
  Briefcase,
  Snowflake,
  Shield,
  Plus,
  Home,
  User
} from 'lucide-react';

const MyProfile = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sections = [
    { path: 'workexperience', icon: Briefcase, title: 'Work experience' },
    { path: 'skills', icon: Snowflake, title: 'Skills' },
    { path: 'documents', icon: Shield, title: 'Documents' },
    { path: 'basicdetails', icon: User, title: 'Basic Details' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Profile Header Card */}
      <div className="relative bg-gradient-to-br from-[#3D3A8E] via-[#5B4AAE] to-[#3E3C8A] rounded-b-3xl p-4 text-white overflow-hidden mb-4">
        {/* Top Buttons */}
        <div className="relative flex justify-end gap-2 mb-3">
          <button className="p-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors">
            <Send size={18} />
          </button>
          <button className="p-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors">
            <Settings size={18} />
          </button>
        </div>

        {/* Row 1: Profile Picture */}
        <div className="relative mb-2">
          <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/30">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2: Name */}
        <div className="relative mb-2">
          <h2 className="text-lg font-semibold">John D</h2>
        </div>

        {/* Row 3: Location, Phone, and Edit Profile */}
        <div className="relative flex items-center justify-between mb-2">
          <div className="flex items-center gap-3 text-white text-xs">
            <div className="flex items-center gap-1.5 opacity-90">
              <MapPin size={14} />
              <span>HSR,Layout, KA</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-90">
              <Phone size={14} />
              <span>9136479870</span>
            </div>
          </div>
          <button className="px-2.5 py-1 text-xs rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-colors">
            Edit profile ✏️
          </button>
        </div>

        {/* Row 4: Bio and Edit Icon */}
        <div className="relative flex items-center justify-between text-xs text-white opacity-90">
          <p>Looking for jobs in UI/UX Designer/ Web Designer</p>
          <button className="p-1 rounded-full bg-white/15 hover:bg-white/25 transition-colors">
            <Edit3 size={12} />
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 mb-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-sm">+91 1234567890</p>
              <p className="text-sm text-blue-600">123 Elm Street, Anytown</p>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-50 transition-colors flex-shrink-0">
              <Edit3 size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Personal Resume Section */}
      <div className="px-4 mb-4">
        <h3 className="text-base font-semibold text-gray-900 mb-3">Personal Resume</h3>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText size={18} className="text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-sm">Sumona_resume.pdf</p>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-50 transition-colors flex-shrink-0">
              <Edit3 size={16} className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 py-2.5 px-4 bg-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-300 transition-colors">
            View Resume
          </button>
          <button
            onClick={() => navigate("/resume/resumebuilder")}
            className="flex-1 py-2.5 px-4 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Build Resume
          </button>
        </div>
      </div>

      {/* Job History & HR Score */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
              <Folder size={20} className="text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-3 text-sm">Job History</h4>
            <button className="w-full py-2 px-3 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
              Click here
            </button>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-3">
              <PieChart size={20} className="text-red-500" />
            </div>
            <h4 className="font-medium text-gray-900 mb-3 text-sm">HR Score</h4>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-600">30%</span>
              <span className="text-xs font-semibold text-gray-900">9000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-blue-600 h-1.5 rounded-full relative" style={{ width: '30%' }}>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="px-4 mb-24">
        {sections.map(({ path, icon: Icon, title }) => (
          <div key={path} className="bg-white rounded-xl mb-3 shadow-sm">
            <button
              onClick={() => navigate(`/myprofilesection/${path}`)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-blue-600" />
                <span className="font-medium text-gray-900 text-sm">{title}</span>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Plus size={14} className="text-blue-600" />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation with Popup */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
        <button onClick={() => navigate('/home')}>
          <Home className="w-6 h-6 text-blue-600" />
        </button>
        <button onClick={() => navigate('/jobs/joblist')}>
          <Briefcase className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>

        {/* Plus Icon with Popup */}
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-6 h-6 text-white" />
          </button>

          {showPopup && (
            <div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white w-64 rounded-2xl border border-gray-200 shadow-xl p-5 z-50"
              ref={popupRef}
            >
              <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
                Quick Actions
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setShowPopup(false);
                    navigate("/messages");
                  }}
                  className="w-full bg-blue-100 text-blue-800 py-2 rounded-lg font-medium hover:bg-blue-200"
                >
                  📩 Messages
                </button>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    navigate("/resume/resumebuilder");
                  }}
                  className="w-full bg-green-100 text-green-800 py-2 rounded-lg font-medium hover:bg-green-200"
                >
                  📝 Resume Builder
                </button>
              </div>
            </div>
          )}
        </div>

        <button onClick={() => navigate('/applications/application')}>
          <FileText className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>
        <button onClick={() => navigate('/myprofilesection/myprofile')}>
          <User className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
