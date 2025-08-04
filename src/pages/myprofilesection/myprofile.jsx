import {useRef, useEffect, React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Edit3,
  Share2,
  MapPin,
  Plus,
  HomeIcon,
  Briefcase,
  FileText,
  User
} from 'lucide-react';

import iconBasic from '../../assets/1.png';
import iconCategory from '../../assets/2.png';
import iconSkills from '../../assets/3.png';
import iconWork from '../../assets/4.png';
import iconFolder from '../../assets/5.png';
import iconChart from '../../assets/6.png';
import resumeImg from "../../assets/resume-builder.png";
import chatImg from "../../assets/chat.png";
import robotImg from "../../assets/mock-interview.png";

const MyProfile = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showBasicDetails, setShowBasicDetails] = useState(false);
  const [workExperiences, setWorkExperiences] = useState([{
    id: 1,
    jobTitle: '',
    jobRole: '',
    companyName: '',
    years: '',
    months: '',
    salary: '',
    currentlyWorking: false
  }]);
  const [skills, setSkills] = useState(['Figma', 'Illustrator', 'Adobe XD', 'Wireframing', 'Flow-map', 'HTML/CSS']);
  const [newSkill, setNewSkill] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState(['PAN Card', 'Aadhar Card', 'Bank Account']);
  const [basicDetails, setBasicDetails] = useState({
    alternatePhone: '',
    age: '',
    education: ['Graduate'],
    languages: ['English', 'Hindi', 'Kannada'],
    gender: 'Male'
  });
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditBio, setShowEditBio] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John D',
    location: 'HSR,Layout, KA',
    phone: '9136479870',
    bio: 'Looking for jobs in UI/UX Designer/ Web Designer'
  });
  const [tempProfileData, setTempProfileData] = useState(profileData);
  const popupRef = useRef(null);

  const addNewWorkExperience = () => {
    const newExperience = {
      id: workExperiences.length + 1,
      jobTitle: '',
      jobRole: '',
      companyName: '',
      years: '',
      months: '',
      salary: '',
      currentlyWorking: false
    };
    setWorkExperiences([...workExperiences, newExperience]);
  };

  const removeWorkExperience = (id) => {
    if (workExperiences.length > 1) {
      setWorkExperiences(workExperiences.filter(exp => exp.id !== id));
    }
  };

  const updateWorkExperience = (id, field, value) => {
    setWorkExperiences(workExperiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  // Skills functions
  const toggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter(s => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const addNewSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills([...skills, trimmedSkill]);
      setNewSkill('');
    }
  };

  // Documents functions
  const toggleDocument = (doc) => {
    if (doc === 'None of these') {
      setSelectedDocuments(['None of these']);
    } else {
      const filtered = selectedDocuments.filter(d => d !== 'None of these');
      if (selectedDocuments.includes(doc)) {
        setSelectedDocuments(filtered.filter(d => d !== doc));
      } else {
        setSelectedDocuments([...filtered, doc]);
      }
    }
  };

  // Basic Details functions
  const toggleEducation = (edu) => {
    if (basicDetails.education.includes(edu)) {
      setBasicDetails({
        ...basicDetails,
        education: basicDetails.education.filter(e => e !== edu)
      });
    } else {
      setBasicDetails({
        ...basicDetails,
        education: [...basicDetails.education, edu]
      });
    }
  };

  const toggleLanguage = (lang) => {
    if (basicDetails.languages.includes(lang)) {
      setBasicDetails({
        ...basicDetails,
        languages: basicDetails.languages.filter(l => l !== lang)
      });
    } else {
      setBasicDetails({
        ...basicDetails,
        languages: [...basicDetails.languages, lang]
      });
    }
  };

  const updateBasicDetails = (field, value) => {
    setBasicDetails({
      ...basicDetails,
      [field]: value
    });
  };

  // Profile editing functions
  const handleSaveProfile = () => {
    setProfileData(tempProfileData);
    setShowEditProfile(false);
  };

  const handleCancelProfile = () => {
    setTempProfileData(profileData);
    setShowEditProfile(false);
  };

  const handleSaveBio = () => {
    setProfileData({...profileData, bio: tempProfileData.bio});
    setShowEditBio(false);
  };

  const handleCancelBio = () => {
    setTempProfileData({...tempProfileData, bio: profileData.bio});
    setShowEditBio(false);
  };

  const handleSaveContact = () => {
    setProfileData({
      ...profileData, 
      location: tempProfileData.location,
      phone: tempProfileData.phone
    });
    setShowEditContact(false);
  };

  const handleCancelContact = () => {
    setTempProfileData({
      ...tempProfileData,
      location: profileData.location,
      phone: profileData.phone
    });
    setShowEditContact(false);
  };
    
    useEffect(() => {
        const handleClickOutside = (e) => {
          if (popupRef.current && !popupRef.current.contains(e.target)) {
            setShowPopup(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

  return (
    <div className="min-h-screen overflow-y-auto pb-[80px] pt-safe pb-safe">
     <div className="min-h-screen bg-gray-100 pb-24 font-sans pt-safe pb-safe">
      {/* Profile Header Card */}
      <div className="relative rounded-b-3xl p-4 text-white overflow-hidden mb-4" style={{ background: 'none', minHeight: '11.25rem' }}>
        {/* Custom SVG Background */}
        <div className="absolute inset-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 375 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <mask id="mask0_2_38" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="7" y="-7" width="375" height="220">
              <path d="M382 23C382 6.43146 368.569 -7 352 -7H37C20.4314 -7 6.99999 6.43146 6.99999 23V183C6.99999 199.569 20.4314 213 37 213H352C368.569 213 382 199.569 382 183V23Z" fill="url(#paint0_linear_2_38)"/>
            </mask>
            <g mask="url(#mask0_2_38)">
              <g filter="url(#filter0_d_2_38)">
                <path d="M382 23C382 6.43146 368.569 -7 352 -7H37C20.4314 -7 6.99999 6.43146 6.99999 23V183C6.99999 199.569 20.4314 213 37 213H352C368.569 213 382 199.569 382 183V23Z" fill="url(#paint1_linear_2_38)"/>
              </g>
              <path d="M51.7533 -60.583C-73.1761 -94.4231 4.09799 211.389 -61.06 -49.2073L70.4011 -244.312L493.058 -141.891L600.566 11.6884L529.523 222.153L368.378 329.57C398.826 276.568 506.434 78.0266 312.971 99.1921C71.1415 125.649 248.845 -7.1962 51.7533 -60.583Z" fill="url(#paint2_linear_2_38)" fillOpacity="0.12"/>
              <path d="M-6.19685 35.9152C-135.611 38.0571 23.4599 310.434 -111.428 78.1376L-39.2453 -145.777L395.236 -164.615L541.126 -46.8837L531.252 175.028L430.51 312.799C445.061 253.431 469.09 42.9624 289.089 116.962C64.0891 209.461 197.969 32.5361 -6.19685 35.9152Z" fill="url(#paint3_linear_2_38)" fillOpacity="0.12"/>
              <path d="M-13.3357 126.541C-138.815 158.28 78.4366 386.959 -106.091 191.753L-87.1386 -42.7443L331.466 -160.64L500.452 -79.4716L541.69 138.798L453.882 311.414C454.443 250.291 450.919 24.4907 292.665 137.767C94.8473 279.363 184.624 76.4677 -13.3357 126.541Z" fill="url(#paint4_linear_2_38)" fillOpacity="0.12"/>
              <path d="M-9.88668 211.511C-125.872 268.956 134.655 446.771 -86.8343 294.789L-117.675 61.5578L266.726 -141.826L449.013 -98.0533L535.279 106.642L485.781 293.875C473.461 234.005 422.478 14.0071 291.619 158.063C128.046 338.132 173.094 120.883 -9.88668 211.511Z" fill="url(#paint5_linear_2_38)" fillOpacity="0.12"/>
            </g>
            <defs>
              <filter id="filter0_d_2_38" x="-55" y="-65" width="499" height="344" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="31"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.600625 0 0 0 0 0.670375 0 0 0 0 0.775 0 0 0 0.18 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_38"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_38" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_2_38" x1="386" y1="213" x2="7" y2="-6.99998" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7551FF"/>
                <stop offset="1" stopColor="#A993FF"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2_38" x1="386" y1="213" x2="7" y2="-6.99998" gradientUnits="userSpaceOnUse">
                <stop stopColor="#130160"/>
                <stop offset="1" stopColor="#36353C"/>
              </linearGradient>
              <linearGradient id="paint2_linear_2_38" x1="2.53717" y1="322.826" x2="415.339" y2="-111.262" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear_2_38" x1="52.872" y1="417.93" x2="329.063" y2="-113.629" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint4_linear_2_38" x1="131.698" y1="484.856" x2="278.736" y2="-95.8479" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint5_linear_2_38" x1="207.333" y1="531.261" x2="228.819" y2="-67.3842" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Top Buttons */}
        <div className="relative flex justify-end gap-2 mb-3">
          <button 
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            onClick={() => {
              // Share profile functionality
              if (navigator.share) {
                navigator.share({
                  title: 'John D Profile',
                  text: 'Check out my profile',
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Profile link copied to clipboard!');
              }
            }}
            title="Share Profile"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_879_576" fill="white">
                <path d="M11.5 3.05878C11.5004 2.24599 12.4193 1.77322 13.0811 2.2453L21.8584 8.50702C22.4174 8.9058 22.4174 9.73617 21.8584 10.1349L13.0811 16.3967C12.4191 16.8688 11.5 16.3953 11.5 15.5822V12.3908C8.0693 12.581 5.02708 14.7163 3.69727 17.9162L2 22.0002V16.0002C2.00012 10.6451 6.20952 6.2734 11.5 6.01288V3.05878Z"/>
              </mask>
              <path d="M11.5 3.05878L10 3.05811V3.05878H11.5ZM13.0811 2.2453L13.9522 1.02419L13.9521 1.02414L13.0811 2.2453ZM21.8584 8.50702L20.9873 9.72813L20.9873 9.72818L21.8584 8.50702ZM21.8584 10.1349L20.9873 8.91379L20.9873 8.91384L21.8584 10.1349ZM13.0811 16.3967L13.9521 17.6178L13.9522 17.6178L13.0811 16.3967ZM11.5 15.5822H13H11.5ZM11.5 12.3908H13V10.8053L11.417 10.8931L11.5 12.3908ZM3.69727 17.9162L5.08241 18.4919L5.08241 18.4918L3.69727 17.9162ZM2 22.0002H0.5L3.38514 22.5758L2 22.0002ZM2 16.0002L0.5 16.0002V16.0002H2ZM11.5 6.01288L11.5738 7.51106L13 7.44083V6.01288H11.5ZM11.5 3.05878L13 3.05944C12.9998 3.46678 12.5402 3.70199 12.21 3.46646L13.0811 2.2453L13.9521 1.02414C12.2983 -0.155543 10.0009 1.0252 10 3.05811L11.5 3.05878ZM13.0811 2.2453L12.2099 3.46641L20.9873 9.72813L21.8584 8.50702L22.7295 7.28591L13.9522 1.02419L13.0811 2.2453ZM21.8584 8.50702L20.9873 9.72818C20.7078 9.52879 20.7078 9.11318 20.9873 8.91379L21.8584 10.1349L22.7295 11.3561C24.1271 10.3592 24.1271 8.2828 22.7295 7.28586L21.8584 8.50702ZM21.8584 10.1349L20.9873 8.91384L12.2099 15.1756L13.0811 16.3967L13.9522 17.6178L22.7295 11.3561L21.8584 10.1349ZM13.0811 16.3967L12.21 15.1755C12.5413 14.9391 13 15.1762 13 15.5822H11.5L10 15.5822C10 17.6144 12.2969 18.7985 13.9521 17.6178L13.0811 16.3967ZM11.5 15.5822H13V12.3908H11.5H10V15.5822H11.5ZM11.5 12.3908L11.417 10.8931C7.41394 11.1151 3.86401 13.6063 2.31212 17.3406L3.69727 17.9162L5.08241 18.4918C6.19015 15.8264 8.72465 14.047 11.583 13.8885L11.5 12.3908ZM3.69727 17.9162L2.31212 17.3405L0.614856 21.4245L2 22.0002L3.38514 22.5758L5.08241 18.4919L3.69727 17.9162ZM2 22.0002H3.5V16.0002H2H0.5V22.0002H2ZM2 16.0002L3.5 16.0002C3.5001 11.4489 7.07806 7.73244 11.5738 7.51106L11.5 6.01288L11.4262 4.51469C5.34098 4.81435 0.500136 9.84133 0.5 16.0002L2 16.0002ZM11.5 6.01288H13V3.05878H11.5H10V6.01288H11.5Z" fill="white" mask="url(#path-1-inside-1_879_576)"/>
            </svg>
          </button>
          <button 
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            onClick={() => {
              navigate('/settings');
            }}
            title="Settings"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_879_568" fill="white">
                <path d="M12.0002 2C13.657 2 15.0002 3.34315 15.0002 5V5.67383C15.3409 5.83569 15.6661 6.02472 15.9738 6.2373L16.5627 5.89844C17.9974 5.07032 19.8319 5.56156 20.6603 6.99609C21.4887 8.43089 20.9973 10.2662 19.5627 11.0947L18.9748 11.4326C18.9898 11.6198 19.0002 11.8089 19.0002 12C19.0002 12.1884 18.9904 12.3749 18.9757 12.5596L19.5627 12.8984C20.9972 13.7269 21.4884 15.5614 20.6603 16.9961C19.832 18.4308 17.9975 18.9229 16.5627 18.0947L15.9797 17.7578C15.6702 17.9721 15.343 18.1623 15.0002 18.3252V19C15.0002 20.6569 13.657 22 12.0002 22C10.3433 22 9.00016 20.6569 9.00016 19V18.3252C8.65703 18.1622 8.32932 17.9723 8.01969 17.7578L7.43766 18.0947C6.00282 18.923 4.16839 18.4309 3.34 16.9961C2.51179 15.5613 3.00299 13.7269 4.43766 12.8984L5.0236 12.5586C5.00904 12.3743 5.00016 12.1881 5.00016 12C5.00016 11.8093 5.00961 11.6205 5.02457 11.4336L4.43766 11.0947C3.00287 10.2663 2.5116 8.43094 3.34 6.99609C4.16851 5.56158 6.00294 5.07022 7.43766 5.89844L8.02555 6.2373C8.33345 6.02454 8.6592 5.8358 9.00016 5.67383V5C9.00016 3.34315 10.3433 2 12.0002 2Z"/>
              </mask>
              <path d="M15.0002 5H16.5002H15.0002ZM15.0002 5.67383H13.5002V6.62189L14.3565 7.02871L15.0002 5.67383ZM15.9738 6.2373L15.1212 7.47143L15.9007 8.00998L16.7219 7.53741L15.9738 6.2373ZM16.5627 5.89844L17.3108 7.19854L17.3125 7.19756L16.5627 5.89844ZM20.6603 6.99609L21.9594 6.24609L21.9593 6.24594L20.6603 6.99609ZM19.5627 11.0947L20.3101 12.3952L20.3128 12.3937L19.5627 11.0947ZM18.9748 11.4326L18.2273 10.1321L17.4036 10.6056L17.4796 11.5526L18.9748 11.4326ZM18.9757 12.5596L17.4804 12.4413L17.4057 13.3852L18.2257 13.8586L18.9757 12.5596ZM19.5627 12.8984L20.3128 11.5995L20.3127 11.5994L19.5627 12.8984ZM20.6603 16.9961L21.9594 17.7461L21.9594 17.7459L20.6603 16.9961ZM16.5627 18.0947L15.8121 19.3935L15.8128 19.3939L16.5627 18.0947ZM15.9797 17.7578L16.7302 16.4591L15.9072 15.9835L15.1257 16.5246L15.9797 17.7578ZM15.0002 18.3252L14.3564 16.9704L13.5002 17.3772V18.3252H15.0002ZM9.00016 19H7.50016H9.00016ZM9.00016 18.3252H10.5002V17.3772L9.6439 16.9704L9.00016 18.3252ZM8.01969 17.7578L8.87377 16.5247L8.09164 15.983L7.26822 16.4596L8.01969 17.7578ZM7.43766 18.0947L8.18755 19.3938L8.18913 19.3929L7.43766 18.0947ZM3.34 16.9961L2.0409 17.746L2.04097 17.7461L3.34 16.9961ZM4.43766 12.8984L5.18774 14.1974L5.19024 14.196L4.43766 12.8984ZM5.0236 12.5586L5.77617 13.8561L6.59331 13.3822L6.51894 12.4405L5.0236 12.5586ZM5.02457 11.4336L6.51979 11.5533L6.59546 10.6085L5.77459 10.1346L5.02457 11.4336ZM4.43766 11.0947L3.68761 12.3937L3.68764 12.3938L4.43766 11.0947ZM3.34 6.99609L2.04108 6.2459L2.04097 6.24609L3.34 6.99609ZM7.43766 5.89844L6.68774 7.19752L6.68857 7.198L7.43766 5.89844ZM8.02555 6.2373L7.27647 7.53687L8.0981 8.01047L8.87829 7.47133L8.02555 6.2373ZM9.00016 5.67383L9.64382 7.02871L10.5002 6.62189V5.67383H9.00016ZM12.0002 2V3.5C12.8286 3.5 13.5002 4.17157 13.5002 5H15.0002H16.5002C16.5002 2.51472 14.4854 0.5 12.0002 0.5V2ZM15.0002 5H13.5002V5.67383H15.0002H16.5002V5H15.0002ZM15.0002 5.67383L14.3565 7.02871C14.6225 7.15507 14.878 7.30341 15.1212 7.47143L15.9738 6.2373L16.8264 5.00318C16.4542 4.74604 16.0593 4.51631 15.6438 4.31894L15.0002 5.67383ZM15.9738 6.2373L16.7219 7.53741L17.3108 7.19854L16.5627 5.89844L15.8145 4.59833L15.2256 4.9372L15.9738 6.2373ZM16.5627 5.89844L17.3125 7.19756C18.0301 6.78337 18.9473 7.02922 19.3614 7.74625L20.6603 6.99609L21.9593 6.24594C20.7164 4.0939 17.9647 3.35728 15.8128 4.59931L16.5627 5.89844ZM20.6603 6.99609L19.3613 7.74609C19.7756 8.46376 19.5296 9.38167 18.8125 9.79576L19.5627 11.0947L20.3128 12.3937C22.4651 11.1508 23.2018 8.39801 21.9594 6.24609L20.6603 6.99609ZM19.5627 11.0947L18.8152 9.79423L18.2273 10.1321L18.9748 11.4326L19.7222 12.7331L20.3101 12.3952L19.5627 11.0947ZM18.9748 11.4326L17.4796 11.5526C17.4927 11.7156 17.5002 11.8621 17.5002 12H19.0002H20.5002C20.5002 11.7558 20.4869 11.5241 20.47 11.3126L18.9748 11.4326ZM19.0002 12H17.5002C17.5002 12.1372 17.493 12.2823 17.4804 12.4413L18.9757 12.5596L20.4711 12.6779C20.4877 12.4676 20.5002 12.2396 20.5002 12H19.0002ZM18.9757 12.5596L18.2257 13.8586L18.8126 14.1975L19.5627 12.8984L20.3127 11.5994L19.7258 11.2605L18.9757 12.5596ZM19.5627 12.8984L18.8125 14.1974C19.5295 14.6115 19.7754 15.5287 19.3612 16.2462L20.6603 16.9961L21.9594 17.7459C23.2015 15.5941 22.4649 12.8423 20.3128 11.5995L19.5627 12.8984ZM20.6603 16.9961L19.3613 16.2461C18.9469 16.9637 18.0296 17.2095 17.3125 16.7956L16.5627 18.0947L15.8128 19.3939C17.9654 20.6362 20.717 19.898 21.9594 17.7461L20.6603 16.9961ZM16.5627 18.0947L17.3132 16.796L16.7302 16.4591L15.9797 17.7578L15.2291 19.0565L15.8121 19.3935L16.5627 18.0947ZM15.9797 17.7578L15.1257 16.5246C14.8816 16.6937 14.6246 16.8429 14.3564 16.9704L15.0002 18.3252L15.6439 19.68C16.0615 19.4816 16.4588 19.2505 16.8336 18.991L15.9797 17.7578ZM15.0002 18.3252H13.5002V19H15.0002H16.5002V18.3252H15.0002ZM15.0002 19H13.5002C13.5002 19.8284 12.8286 20.5 12.0002 20.5V22V23.5C14.4854 23.5 16.5002 21.4853 16.5002 19H15.0002ZM12.0002 22V20.5C11.1717 20.5 10.5002 19.8284 10.5002 19H9.00016H7.50016C7.50016 21.4853 9.51488 23.5 12.0002 23.5V22ZM9.00016 19H10.5002V18.3252H9.00016H7.50016V19H9.00016ZM9.00016 18.3252L9.6439 16.9704C9.37421 16.8422 9.11683 16.6931 8.87377 16.5247L8.01969 17.7578L7.16561 18.9909C7.54181 19.2515 7.93985 19.4821 8.35642 19.68L9.00016 18.3252ZM8.01969 17.7578L7.26822 16.4596L6.68619 16.7965L7.43766 18.0947L8.18913 19.3929L8.77116 19.056L8.01969 17.7578ZM7.43766 18.0947L6.68777 16.7956C5.97072 17.2095 5.05345 16.9639 4.63904 16.2461L3.34 16.9961L2.04097 17.7461C3.28333 19.8979 6.03491 20.6364 8.18755 19.3938L7.43766 18.0947ZM3.34 16.9961L4.63911 16.2462C4.22484 15.5285 4.47069 14.6115 5.18774 14.1974L4.43766 12.8984L3.68758 11.5994C1.53529 12.8423 0.798744 15.5941 2.0409 17.746L3.34 16.9961ZM4.43766 12.8984L5.19024 14.196L5.77617 13.8561L5.0236 12.5586L4.27102 11.261L3.68508 11.6009L4.43766 12.8984ZM5.0236 12.5586L6.51894 12.4405C6.50683 12.2872 6.50016 12.1411 6.50016 12H5.00016H3.50016C3.50016 12.235 3.51125 12.4614 3.52825 12.6767L5.0236 12.5586ZM5.00016 12H6.50016C6.50016 11.8583 6.50719 11.7106 6.51979 11.5533L5.02457 11.4336L3.52936 11.3138C3.51203 11.5303 3.50016 11.7602 3.50016 12H5.00016ZM5.02457 11.4336L5.77459 10.1346L5.18768 9.7957L4.43766 11.0947L3.68764 12.3938L4.27455 12.7326L5.02457 11.4336ZM4.43766 11.0947L5.18771 9.79572C4.47068 9.3817 4.22463 8.46388 4.63904 7.74609L3.34 6.99609L2.04097 6.24609C0.798568 8.39799 1.53505 11.1508 3.68761 12.3937L4.43766 11.0947ZM3.34 6.99609L4.63893 7.74629C5.05313 7.02912 5.9703 6.78337 6.68774 7.19752L7.43766 5.89844L8.18758 4.59935C6.03558 3.35708 3.28389 4.09404 2.04108 6.2459L3.34 6.99609ZM7.43766 5.89844L6.68857 7.198L7.27647 7.53687L8.02555 6.2373L8.77464 4.93774L8.18675 4.59887L7.43766 5.89844ZM8.02555 6.2373L8.87829 7.47133C9.12043 7.30401 9.37631 7.15579 9.64382 7.02871L9.00016 5.67383L8.35651 4.31894C7.94209 4.51582 7.54647 4.74506 7.17281 5.00328L8.02555 6.2373ZM9.00016 5.67383H10.5002V5H9.00016H7.50016V5.67383H9.00016ZM9.00016 5H10.5002C10.5002 4.17157 11.1717 3.5 12.0002 3.5V2V0.5C9.51488 0.5 7.50016 2.51472 7.50016 5H9.00016Z" fill="white" mask="url(#path-1-inside-1_879_568)"/>
              <circle cx="12" cy="12" r="2.25" stroke="white" strokeWidth="1.5"/>
            </svg>
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
          {showEditProfile ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tempProfileData.name}
                onChange={(e) => setTempProfileData({...tempProfileData, name: e.target.value})}
                className="text-lg font-semibold bg-white/20 text-white placeholder-white/70 border border-white/30 rounded px-2 py-1"
                placeholder="Enter name"
              />
              <button onClick={handleSaveProfile} className="text-green-400 hover:text-green-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={handleCancelProfile} className="text-red-400 hover:text-red-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">{profileData.name}</h2>
              <button 
                onClick={() => {
                  setTempProfileData(profileData);
                  setShowEditProfile(true);
                }}
                className="text-white/70 hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1596 4.32367L5.41565 9.06764C5.08103 9.40218 4.66483 9.64379 4.20859 9.76922L2.90555 10.1276C2.71859 10.179 2.54687 10.0073 2.59827 9.82032L2.95665 8.51728C3.08209 8.06105 3.32369 7.64484 3.65824 7.31023L8.4022 2.56626C8.88749 2.08128 9.67445 2.08179 10.1596 2.56695C10.6445 3.05214 10.6445 3.83848 10.1596 4.32367Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M7.81738 2.97656L9.80612 4.9653" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Row 3: Location, Phone, and Edit Profile */}
        <div className="relative flex items-center justify-between mb-2">
          {showEditContact ? (
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5.90909C11 9.72727 6 13 6 13C6 13 1 9.72727 1 5.90909C1 4.60712 1.52678 3.35847 2.46447 2.43784C3.40215 1.51721 4.67392 1 6 1C7.32608 1 8.59785 1.51721 9.53553 2.43784C10.4732 3.35847 11 4.60712 11 5.90909Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  value={tempProfileData.location}
                  onChange={(e) => setTempProfileData({...tempProfileData, location: e.target.value})}
                  className="flex-1 text-xs bg-white/20 text-white placeholder-white/70 border border-white/30 rounded px-2 py-1"
                  placeholder="Location"
                />
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 1H2.25C1.55964 1 1 1.55964 1 2.25V12.25C1 12.9404 1.55964 13.5 2.25 13.5H8.5C9.19036 13.5 9.75 12.9404 9.75 12.25V2.25C9.75 1.55964 9.19036 1 8.5 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  value={tempProfileData.phone}
                  onChange={(e) => setTempProfileData({...tempProfileData, phone: e.target.value})}
                  className="flex-1 text-xs bg-white/20 text-white placeholder-white/70 border border-white/30 rounded px-2 py-1"
                  placeholder="Phone number"
                />
              </div>
              <div className="flex gap-2">
                <button onClick={handleSaveContact} className="px-3 py-1 text-xs bg-green-500 text-white rounded">
                  Save
                </button>
                <button onClick={handleCancelContact} className="px-3 py-1 text-xs bg-red-500 text-white rounded">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 text-white text-xs">
                <div className="flex items-center gap-1.5 opacity-90">
                  <svg width="24" height="24" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5.90909C11 9.72727 6 13 6 13C6 13 1 9.72727 1 5.90909C1 4.60712 1.52678 3.35847 2.46447 2.43784C3.40215 1.51721 4.67392 1 6 1C7.32608 1 8.59785 1.51721 9.53553 2.43784C10.4732 3.35847 11 4.60712 11 5.90909Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-90">
                  <svg width="24" height="24" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1H2.25C1.55964 1 1 1.55964 1 2.25V12.25C1 12.9404 1.55964 13.5 2.25 13.5H8.5C9.19036 13.5 9.75 12.9404 9.75 12.25V2.25C9.75 1.55964 9.19036 1 8.5 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{profileData.phone}</span>
                </div>
              </div>
              <button 
                className="px-2.5 py-1 text-xs rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5"
                onClick={() => {
                  setTempProfileData(profileData);
                  setShowEditContact(true);
                }}
              >
                Edit profile
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1596 4.32367L5.41565 9.06764C5.08103 9.40218 4.66483 9.64379 4.20859 9.76922L2.90555 10.1276C2.71859 10.179 2.54687 10.0073 2.59827 9.82032L2.95665 8.51728C3.08209 8.06105 3.32369 7.64484 3.65824 7.31023L8.4022 2.56626C8.88749 2.08128 9.67445 2.08179 10.1596 2.56695C10.6445 3.05214 10.6445 3.83848 10.1596 4.32367Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M7.81738 2.97656L9.80612 4.9653" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M1.875 12.5H13.125" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Row 4: Bio and Edit Icon */}
        <div className="relative text-xs text-white opacity-90">
          {showEditBio ? (
            <div className="space-y-2">
              <textarea
                value={tempProfileData.bio}
                onChange={(e) => setTempProfileData({...tempProfileData, bio: e.target.value})}
                className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded px-2 py-1 text-xs resize-none"
                rows="2"
                placeholder="Enter your bio"
              />
              <div className="flex gap-2">
                <button onClick={handleSaveBio} className="px-3 py-1 text-xs bg-green-500 text-white rounded">
                  Save
                </button>
                <button onClick={handleCancelBio} className="px-3 py-1 text-xs bg-red-500 text-white rounded">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <p>{profileData.bio}</p>
              <button 
                className="p-1 rounded-full hover:bg-white/25 transition-colors ml-2"
                onClick={() => {
                  setTempProfileData(profileData);
                  setShowEditBio(true);
                }}
                title="Edit Bio"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1596 4.32367L5.41565 9.06764C5.08103 9.40218 4.66483 9.64379 4.20859 9.76922L2.90555 10.1276C2.71859 10.179 2.54687 10.0073 2.59827 9.82032L2.95665 8.51728C3.08209 8.06105 3.32369 7.64484 3.65824 7.31023L8.4022 2.56626C8.88749 2.08128 9.67445 2.08179 10.1596 2.56695C10.6445 3.05214 10.6445 3.83848 10.1596 4.32367Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M7.81738 2.97656L9.80612 4.9653" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M1.875 12.5H13.125" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          )}
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
              <p className="font-medium text-gray-900 text-sm">+91 {profileData.phone}</p>
              <p className="text-sm text-blue-600">{profileData.location}</p>
            </div>
            <button 
              className="p-2 rounded-full hover:bg-gray-50 transition-colors flex-shrink-0"
              onClick={() => {
                setTempProfileData(profileData);
                setShowEditContact(true);
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_879_724_contact)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.3103 8.87844L19.1216 4.68875C18.8402 4.40737 18.4587 4.24929 18.0608 4.24929C17.6629 4.24929 17.2813 4.40737 17 4.68875L5.43969 16.25C5.15711 16.5303 4.99873 16.9123 5 17.3103V21.5C5 22.3284 5.67157 23 6.5 23H10.6897C11.0877 23.0013 11.4697 22.8429 11.75 22.5603L23.3103 11C23.5917 10.7187 23.7498 10.3371 23.7498 9.93922C23.7498 9.54133 23.5917 9.15975 23.3103 8.87844ZM10.6897 21.5H6.5V17.3103L14.75 9.06031L18.9397 13.25L10.6897 21.5ZM20 12.1888L15.8103 8L18.0603 5.75L22.25 9.93875L20 12.1888Z" fill="#074799"/>
                </g>
                <defs>
                  <clipPath id="clip0_879_724_contact">
                    <rect width="24" height="24" fill="white" transform="translate(2 2)"/>
                  </clipPath>
                </defs>
              </svg>
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
              <p className="font-medium text-gray-900 text-sm">{profileData.name.replace(' ', '_')}_resume.pdf</p>
            </div>
            <button 
              className="p-2 rounded-full hover:bg-gray-50 transition-colors flex-shrink-0"
              onClick={() => {
                // Create a file input element
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.pdf,.doc,.docx';
                input.onchange = (e) => {
                  const file = e.target.files[0];
                  if (file) {
                    console.log('New resume file selected:', file.name);
                    // Update the filename display
                    const resumeElement = e.target.parentElement.parentElement.querySelector('.font-medium');
                    if (resumeElement) {
                      resumeElement.textContent = file.name;
                    }
                  }
                };
                input.click();
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_879_724_resume)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.3103 8.87844L19.1216 4.68875C18.8402 4.40737 18.4587 4.24929 18.0608 4.24929C17.6629 4.24929 17.2813 4.40737 17 4.68875L5.43969 16.25C5.15711 16.5303 4.99873 16.9123 5 17.3103V21.5C5 22.3284 5.67157 23 6.5 23H10.6897C11.0877 23.0013 11.4697 22.8429 11.75 22.5603L23.3103 11C23.5917 10.7187 23.7498 10.3371 23.7498 9.93922C23.7498 9.54133 23.5917 9.15975 23.3103 8.87844ZM10.6897 21.5H6.5V17.3103L14.75 9.06031L18.9397 13.25L10.6897 21.5ZM20 12.1888L15.8103 8L18.0603 5.75L22.25 9.93875L20 12.1888Z" fill="#074799"/>
                </g>
                <defs>
                  <clipPath id="clip0_879_724_resume">
                    <rect width="24" height="24" fill="white" transform="translate(2 2)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            className="flex-1 py-2.5 px-4 bg-[#074799]/20 text-black rounded-xl text-sm font-medium hover:bg-[#074799]/30 transition-colors"
            onClick={() => {
              // Create a mock PDF blob and download it
              const resumeContent = `
              ${profileData.name} - Resume
              
              Contact Information:
              Phone: ${profileData.phone}
              Location: ${profileData.location}
              
              Bio: ${profileData.bio}
              
              Work Experience:
              ${workExperiences.map((exp, index) => 
                `${index + 1}. ${exp.jobTitle} at ${exp.companyName}
                   Duration: ${exp.years} years, ${exp.months} months
                   Salary: ${exp.salary}
                   Currently Working: ${exp.currentlyWorking ? 'Yes' : 'No'}`
              ).join('\n')}
              
              Skills: ${skills.join(', ')}
              
              Documents: ${selectedDocuments.join(', ')}
              
              Education: ${basicDetails.education.join(', ')}
              Languages: ${basicDetails.languages.join(', ')}
              Gender: ${basicDetails.gender}
              Age: ${basicDetails.age}
              Alternate Phone: ${basicDetails.alternatePhone}
              `;
              
              const blob = new Blob([resumeContent], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${profileData.name.replace(' ', '_')}_resume.txt`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
          >
            View Resume
          </button>
          <button
            onClick={() => navigate("/resume/resumebuilder")}
            className="flex-1 py-2.5 px-4 bg-[#074799] text-white rounded-xl text-sm font-medium hover:bg-[#053560] transition-colors"
          >
            Build Resume
          </button>
        </div>
      </div>

      {/* History & HR Score */}
      <div className="flex gap-4 mt-4 px-4">
        <div className="flex-1 p-4 rounded-xl shadow-sm border flex flex-col items-center">
          <img src={iconFolder} alt="History Icon" className="w-10 h-10" />
          <p className="mt-2 font-medium">My History</p>
          <button className="text-blue-600 text-sm mt-1">Click here</button>
        </div>
        <div className="flex-1 p-4 rounded-xl shadow-sm border">
          <div className="flex flex-col items-center">
            <img src={iconChart} alt="HR Score Icon" className="w-10 h-10" />
            <p className="mt-2 font-medium">HR Score</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-blue-600 h-2 rounded-full w-[30%]"></div>
            </div>
            <span className="text-sm mt-1">30%</span>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4 mt-4 px-4">
        {/* Work Experience Section */}
        <div className="bg-[#F6F7FB] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img src={iconWork} alt="Work Experience" className="w-8 h-8" />
              <span className="font-medium text-[#1A1A2C]">Work experience</span>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              onClick={() => setShowWorkExperience(!showWorkExperience)}
            >
              <Plus size={20} className={`text-[#074799] transition-transform ${showWorkExperience ? 'rotate-45' : ''}`} />
            </button>
          </div>
          {showWorkExperience && (
            <div className="px-4 pb-4">
              <div className="bg-white rounded-lg p-4 space-y-4">
                {workExperiences.map((experience, index) => (
                  <div key={experience.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    {workExperiences.length > 1 && (
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-medium text-[#1a1444]">Job Experience {index + 1}</h4>
                        <button
                          onClick={() => removeWorkExperience(experience.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-[#1a1444] font-medium mb-1">Job Title</label>
                        <input
                          type="text"
                          placeholder="e.g Executive Sales Manager"
                          value={experience.jobTitle}
                          onChange={(e) => updateWorkExperience(experience.id, 'jobTitle', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#1a1444] font-medium mb-1">Job Role</label>
                        <select 
                          value={experience.jobRole}
                          onChange={(e) => updateWorkExperience(experience.id, 'jobRole', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                        >
                          <option value="">Select Job Role</option>
                          <option value="manager">Manager</option>
                          <option value="developer">Developer</option>
                          <option value="designer">Designer</option>
                          <option value="analyst">Analyst</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-[#1a1444] font-medium mb-1">Company Name</label>
                        <input
                          type="text"
                          placeholder="e.g Amazon"
                          value={experience.companyName}
                          onChange={(e) => updateWorkExperience(experience.id, 'companyName', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#1a1444] font-medium mb-1">Experience in this company</label>
                        <div className="flex gap-2">
                          <select 
                            value={experience.years}
                            onChange={(e) => updateWorkExperience(experience.id, 'years', e.target.value)}
                            className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          >
                            <option value="">Years</option>
                            {[...Array(20)].map((_, i) => (
                              <option key={i} value={i}>{i} {i === 1 ? 'Year' : 'Years'}</option>
                            ))}
                          </select>
                          <select 
                            value={experience.months}
                            onChange={(e) => updateWorkExperience(experience.id, 'months', e.target.value)}
                            className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          >
                            <option value="">Months</option>
                            {[...Array(12)].map((_, i) => (
                              <option key={i} value={i}>{i} {i === 1 ? 'Month' : 'Months'}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-[#1a1444] font-medium mb-1">Current/Last Salary</label>
                        <input
                          type="text"
                          placeholder="$15,0000"
                          value={experience.salary}
                          onChange={(e) => updateWorkExperience(experience.id, 'salary', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                        />
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`currentlyWorking-${experience.id}`}
                          checked={experience.currentlyWorking}
                          onChange={(e) => updateWorkExperience(experience.id, 'currentlyWorking', e.target.checked)}
                          className="mr-2" 
                        />
                        <label htmlFor={`currentlyWorking-${experience.id}`} className="text-sm text-[#1a1444]">
                          I am currently working here
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add Another Job Experience Button */}
                <button
                  onClick={addNewWorkExperience}
                  className="w-full py-3 border-2 border-dashed border-blue-300 rounded-lg text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={18} />
                  Add Another Job Experience
                </button>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button
                    className="px-4 py-2 rounded-lg border border-[#1a1444] text-[#1a1444] text-sm"
                    onClick={() => setShowWorkExperience(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg bg-[#0047AB] text-white text-sm"
                    onClick={() => {
                      console.log('Work experiences saved:', workExperiences);
                      setShowWorkExperience(false);
                    }}
                  >
                    Save All Experiences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="bg-[#F6F7FB] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img src={iconSkills} alt="Skills" className="w-8 h-8" />
              <span className="font-medium text-[#1A1A2C]">Skills</span>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              onClick={() => setShowSkills(!showSkills)}
            >
              <Plus size={20} className={`text-[#074799] transition-transform ${showSkills ? 'rotate-45' : ''}`} />
            </button>
          </div>
          {showSkills && (
            <div className="px-4 pb-4">
              <div className="bg-white rounded-lg p-4 space-y-3">
                <p className="text-sm text-gray-700 mb-3">UI/UX Designer/ Web Designer</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Figma', 'Illustrator', 'Adobe XD', 'Wireframing', 'Flow-map', 'HTML/CSS', 'React', 'JavaScript', 'Python', 'Photoshop'].map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                        skills.includes(skill)
                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill} {skills.includes(skill) ? '✓' : '+'}
                    </button>
                  ))}
                </div>
                {skills.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">Selected Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs flex items-center gap-1"
                        >
                          {skill}
                          <button
                            onClick={() => toggleSkill(skill)}
                            className="ml-1 text-green-600 hover:text-green-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add custom skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addNewSkill()}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={addNewSkill}
                    disabled={!newSkill.trim()}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50 transition-colors"
                    onClick={() => setShowSkills(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 transition-colors"
                    onClick={() => {
                      console.log('Skills saved:', skills);
                      setShowSkills(false);
                    }}
                  >
                    Save ({skills.length})
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Documents Section */}
        <div className="bg-[#F6F7FB] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img src={iconCategory} alt="Category Details" className="w-8 h-8" />
              <span className="font-medium text-[#1A1A2C]">Category Details</span>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              onClick={() => setShowDocuments(!showDocuments)}
            >
              <Plus size={20} className={`text-[#074799] transition-transform ${showDocuments ? 'rotate-45' : ''}`} />
            </button>
          </div>
          {showDocuments && (
            <div className="px-4 pb-4">
              <div className="bg-white rounded-lg p-4 space-y-3">
                <p className="text-sm text-gray-600 mb-3">
                  Which of these IDs/documents do you have?
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['PAN Card', 'Aadhar Card', 'Bank Account', 'Passport', 'Driving License', 'None of these'].map((doc) => (
                    <button
                      key={doc}
                      onClick={() => toggleDocument(doc)}
                      className={`px-3 py-1 rounded-full border text-sm font-medium transition-colors ${
                        selectedDocuments.includes(doc)
                          ? 'bg-blue-100 text-blue-900 border-blue-300'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {doc} {selectedDocuments.includes(doc) ? '✓' : '+'}
                    </button>
                  ))}
                </div>
                {selectedDocuments.length > 0 && !selectedDocuments.includes('None of these') && (
                  <div className="mb-3 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-green-800 mb-2">Selected Documents:</p>
                    <ul className="text-sm text-green-700">
                      {selectedDocuments.map((doc) => (
                        <li key={doc} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedDocuments.includes('None of these') && (
                  <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">No documents selected</p>
                  </div>
                )}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    className="px-4 py-2 border rounded-lg text-sm text-blue-700 border-blue-600 hover:bg-blue-50 transition-colors"
                    onClick={() => setShowDocuments(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-700 text-white text-sm rounded-lg hover:bg-blue-800 transition-colors"
                    onClick={() => {
                      console.log('Documents saved:', selectedDocuments);
                      setShowDocuments(false);
                    }}
                  >
                    Save ({selectedDocuments.length})
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Basic Details Section */}
        <div className="bg-[#F6F7FB] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img src={iconBasic} alt="Basic Details" className="w-8 h-8" />
              <span className="font-medium text-[#1A1A2C]">Basic Details</span>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              onClick={() => setShowBasicDetails(!showBasicDetails)}
            >
              <Plus size={20} className={`text-[#074799] transition-transform ${showBasicDetails ? 'rotate-45' : ''}`} />
            </button>
          </div>
          {showBasicDetails && (
            <div className="px-4 pb-4">
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div>
                  <label className="text-sm font-medium">Add Alternate phone number</label>
                  <input
                    type="text"
                    value={basicDetails.alternatePhone}
                    onChange={(e) => updateBasicDetails('alternatePhone', e.target.value)}
                    className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 9876543210"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Age</label>
                  <input
                    type="number"
                    value={basicDetails.age}
                    onChange={(e) => updateBasicDetails('age', e.target.value)}
                    className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 25"
                    min="16"
                    max="65"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Education level</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Below 10th', '10th Pass', '12th Pass', 'Diploma', 'Graduate', 'Post Graduate'].map((edu) => (
                      <button
                        key={edu}
                        onClick={() => toggleEducation(edu)}
                        className={`border rounded-full px-3 py-1 text-sm transition-colors ${
                          basicDetails.education.includes(edu)
                            ? 'bg-blue-100 text-blue-600 border-blue-400'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {edu} {basicDetails.education.includes(edu) ? '✓' : '+'}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Languages</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['English', 'Hindi', 'Kannada', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => toggleLanguage(lang)}
                        className={`border rounded-full px-3 py-1 text-sm transition-colors ${
                          basicDetails.languages.includes(lang)
                            ? 'bg-blue-100 text-blue-600 border-blue-400'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {lang} {basicDetails.languages.includes(lang) ? '✓' : '+'}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Gender</label>
                  <div className="flex gap-4 mt-2">
                    {['Male', 'Female', 'Other'].map((gender) => (
                      <button
                        key={gender}
                        onClick={() => updateBasicDetails('gender', gender)}
                        className={`border rounded-full px-4 py-1 text-sm transition-colors ${
                          basicDetails.gender === gender
                            ? 'bg-blue-100 text-blue-600 border-blue-400'
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {gender} {basicDetails.gender === gender }
                      </button>
                    ))}
                  </div>
                </div>
                {/* Summary Section */}
                <div className="p-3 bg-gray-50 rounded-lg mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Current Details:</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    {basicDetails.alternatePhone && <p>Phone: {basicDetails.alternatePhone}</p>}
                    {basicDetails.age && <p>Age: {basicDetails.age} years</p>}
                    {basicDetails.education.length > 0 && <p>Education: {basicDetails.education.join(', ')}</p>}
                    {basicDetails.languages.length > 0 && <p>Languages: {basicDetails.languages.join(', ')}</p>}
                    <p>Gender: {basicDetails.gender}</p>
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                    onClick={() => setShowBasicDetails(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      console.log('Basic details saved:', basicDetails);
                      setShowBasicDetails(false);
                    }}
                  >
                    Save Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ✅ Fixed Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-1 sm:py-1 border-t border-gray-200 bg-white/95 backdrop-blur-sm pb-safe">
              <button onClick={() => navigate("/home")}>
                <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
              </button>
              <button onClick={() => navigate("/jobs/joblist")}>
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
              </button>
      
              {/* Plus Icon with Popup */}
                                <div className="relative">
                                  <button
                                    onClick={() => setShowPopup(!showPopup)}
                                    className="w-8 h-8 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 mt-2"
                                  >
                                    <Plus className="w-4 h-4 sm:w-7 sm:h-7  text-white" />
                                  </button>
                        
                                  {showPopup && (
                          <div
                            ref={popupRef}
                            className="fixed bottom-16 sm:bottom-20 left-0 w-full h-[50vh] sm:h-[45vh] md:h-[40vh] bg-gradient-to-t from-blue-100 via-white to-white z-50 rounded-t-3xl shadow-2xl flex flex-col items-center pt-6 pb-4 animate-slideUp"
                          >
                            <div className="w-16 h-1 bg-blue-200 rounded-full mb-6 mt-2" />
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">Quick Actions</h3>
                        
                            <div className="flex flex-col gap-4 w-4/5 sm:w-3/5 md:w-2/5">
                        
                          {/* Resume Button */}
                          <button
                            onClick={() => {
                              setShowPopup(false);
                              navigate("/resume/resumebuilder");
                            }}
                            className="w-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all flex items-center justify-center gap-3 relative overflow-hidden"
                          >
                           <span className="absolute top-1 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                             ✨ AI
                           </span>
                           <img src={resumeImg} alt="Resume" className="w-6 h-6 sm:w-8 sm:h-8" />
                        Resume Builder
                          </button>
                          
                        
                          {/* Chats Button */}
                          <button
                            onClick={() => {
                              setShowPopup(false);
                              navigate("/messages");
                            }}
                            className="w-full bg-[#E8F9ED] text-[#2E7D32] py-6 sm:py-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-md border border-[#BEE7C9] hover:bg-[#d3f3db] transition-all flex items-center justify-center gap-3"
                          ><img src={chatImg} alt="Chat" className="w-6 h-6 sm:w-8 sm:h-8" />
                        Chats
                          </button>
                        
                          {/* AI Job Prep Button */}
                          <button
                            onClick={() => {
                              setShowPopup(false);
                              navigate("/InterviewPrep");
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
      
              <button onClick={() => navigate("/applications/application")}>
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-gray-400" />
              </button>
              <button onClick={() => navigate("/myprofile")}>
                <User className="w-6 h-6 sm:w-7 sm:h-7 mt-2 text-blue-600" />
              </button>
            </div>
      
                </div>
                </div>
        );
      };
      
export default MyProfile;
