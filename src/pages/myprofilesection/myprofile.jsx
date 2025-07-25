import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Edit3,
  Share2,
  Settings,
  Plus,
  Home,
  Briefcase,
  FileText,
  UserCircle
} from 'lucide-react';

import iconBasic from '../../assets/1.png';
import iconCategory from '../../assets/2.png';
import iconSkills from '../../assets/3.png';
import iconWork from '../../assets/4.png';
import iconFolder from '../../assets/5.png';
import iconChart from '../../assets/6.png';

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      {/* Header */}
      <div className="rounded-b-3xl bg-gradient-to-r from-[#1E085B] to-[#3D1F94] p-6 text-white relative">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-white object-cover"
            />
            <div>
              <h1 className="text-xl font-semibold">John D</h1>
              <div className="flex gap-2 text-sm mt-1">
                <span>HSR, Layout, KA</span>
                <span> | </span>
                <span>9136479870</span>
              </div>
              <p className="text-sm mt-1">Looking for jobs in UI/UX Designer/ Web Designer</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Share2 />
            <Settings />
          </div>
        </div>
        <button className="mt-3 px-3 py-1 border border-white rounded-md text-sm flex items-center gap-1">
          <Edit3 size={14} /> Edit profile
        </button>
      </div>

      {/* Contact Info */}
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm text-gray-800">+91 1234567890</p>
            <p className="text-sm text-blue-600">123 Elm Street, Anytown</p>
          </div>
          <Edit3 size={16} className="text-gray-400" />
        </div>

        {/* Resume Section */}
        <h2 className="font-semibold text-lg text-gray-900">Personal Resume</h2>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="text-blue-600" />
            <p className="text-sm font-medium text-gray-800">Sumona_resume.pdf</p>
          </div>
          <Edit3 size={16} className="text-gray-400" />
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-2 bg-blue-100 rounded-xl text-sm font-medium">View Resume</button>
          <button
            className="flex-1 py-2 bg-[#074799] text-white rounded-xl text-sm font-medium"
            onClick={() => navigate('/resume/resumebuilder')}
          >
            Build Resume
          </button>
        </div>

        {/* History & HR Score */}
        <div className="flex gap-4 mt-4">
          <div className="flex-1 p-4 rounded-xl shadow-sm border flex flex-col items-center">
            <img src={iconFolder} alt="History Icon" className="w-10 h-10" />
            <p className="mt-2 font-medium">My History</p>
            <button className="text-blue-600 text-sm mt-1">Click here</button>
          </div>
          <div className="flex-1 p-4 rounded-xl shadow-sm border">
            <div className="flex flex-col items-center">
              <img src={iconChart} alt="HR Score Icon" className="w-10 h-10" />
              <p className="mt-2 font-medium">HR Score</p>
              <div className="relative mt-3 mb-2">
                <svg width="78" height="72" viewBox="0 0 78 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                  <defs>
                    <filter id="filter0_d_879_691" x="0.137537" y="0.809086" width="77.2884" height="77.2884" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="3.77018"/>
                      <feGaussianBlur stdDeviation="14.6095"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_879_691"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_879_691" result="shape"/>
                    </filter>
                    <filter id="filter1_d_879_691" x="4.85043" y="5.52198" width="67.8636" height="67.8636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="3.77018"/>
                      <feGaussianBlur stdDeviation="14.6095"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_879_691"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_879_691" result="shape"/>
                    </filter>
                  </defs>
                  <g filter="url(#filter0_d_879_691)">
                    <circle cx="38.7819" cy="35.6833" r="9.42545" fill="white"/>
                  </g>
                  <g filter="url(#filter1_d_879_691)">
                    <circle cx="38.7821" cy="35.6834" r="4.71273" fill="#074799"/>
                  </g>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">30%</span>
                </div>
              </div>
              <button className="mt-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.2" cx="12" cy="12" r="11.5" fill="#074799" stroke="#074799"/>
                  <path d="M12 8V16" stroke="#074799" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M16 12L8 12" stroke="#074799" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between bg-[#F6F7FB] p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <img src={iconWork} alt="Work Experience" className="w-8 h-8" />
              <span className="font-medium">Work experience</span>
            </div>
            <button className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" fill="#dbeafe" stroke="#dbeafe"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#074799] text-lg font-bold">+</span>
            </button>
          </div>
          <div className="flex items-center justify-between bg-[#F6F7FB] p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <img src={iconSkills} alt="Skills" className="w-8 h-8" />
              <span className="font-medium">Skills</span>
            </div>
            <button className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" fill="#dbeafe" stroke="#dbeafe"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#074799] text-lg font-bold">+</span>
            </button>
          </div>
          <div className="flex items-center justify-between bg-[#F6F7FB] p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <img src={iconCategory} alt="Category Details" className="w-8 h-8" />
              <span className="font-medium">Category Details</span>
            </div>
            <button className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" fill="#dbeafe" stroke="#dbeafe"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#074799] text-lg font-bold">+</span>
            </button>
          </div>
          <div className="flex items-center justify-between bg-[#F6F7FB] p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <img src={iconBasic} alt="Basic Details" className="w-8 h-8" />
              <span className="font-medium">Basic Details</span>
            </div>
            <button className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" fill="#dbeafe" stroke="#dbeafe"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#074799] text-lg font-bold">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full bg-white border-t flex justify-around items-center p-3">
        <Home />
        <Briefcase />
        <div className="bg-blue-700 text-white p-2 rounded-full">
          <Plus />
        </div>
        <FileText />
        <UserCircle className="text-blue-700" />
      </div>
    </div>
  );
};

export default MyProfile;
