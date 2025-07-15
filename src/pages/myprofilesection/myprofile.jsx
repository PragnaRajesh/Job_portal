import React from 'react';
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
  User, 
  Plus,
  Home,
  FileBarChart,
  UserCircle,
  Bookmark
} from 'lucide-react';

const MyProfile = () => {
  const navigate = useNavigate();

  const sections = [
    { path: 'workexperience', icon: Briefcase, title: 'Work experience' },
    { path: 'skills', icon: Snowflake, title: 'Skills' },
    { path: 'documents', icon: Shield, title: 'Documents' },
    { path: 'basicdetails', icon: User, title: 'Basic Details' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Profile Card */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 rounded-b-2xl p-5 text-white overflow-hidden mb-4">
        <div className="absolute inset-0 rounded-b-2xl">
          <div className="absolute top-4 right-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -top-8 -right-4 w-24 h-24 bg-white/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-8 left-4 w-20 h-20 bg-white/8 rounded-full blur-lg"></div>
        </div>

        <div className="relative flex justify-end gap-2 mb-4">
          <button className="p-2 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors">
            <Send size={18} />
          </button>
          <button className="p-2 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors">
            <Settings size={18} />
          </button>
        </div>

        <div className="relative flex items-start gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold mb-3">John D</h2>

            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <MapPin size={14} className="opacity-80 flex-shrink-0" />
                  <span className="text-sm opacity-90">HSR Layout, KA</span>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <Phone size={14} className="opacity-80 flex-shrink-0" />
                  <span className="text-sm opacity-90">9136479870</span>
                </div>
                <button className="p-1 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors flex-shrink-0">
                  <Edit3 size={12} />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <p className="text-sm opacity-90 flex-1 leading-relaxed">Looking for jobs in UI/UX Designer/ Web Designer</p>
              <button className="p-1 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors flex-shrink-0 mt-0.5">
                <Edit3 size={12} />
              </button>
            </div>
          </div>
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
          <button className="flex-1 py-2.5 px-4 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
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

      {/* Profile Tabs as Navigation */}
      <div className="px-4 mb-20">
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

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-between items-center max-w-sm mx-auto">
          <button onClick={() => navigate('/home')} className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
            <Home size={22} className="text-gray-400" />
          </button>
          <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
            <Briefcase size={22} className="text-gray-400" />
          </button>
          <button className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
            <Plus size={22} className="text-white" />
          </button>
          <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
            <FileBarChart size={22} className="text-gray-400" />
          </button>
          <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
            <UserCircle size={22} className="text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
