import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Search,
  MapPin,
  Bookmark,
  HomeIcon,
  Plus,
  User,
  Briefcase,
  FileText,
  Building2,
  Zap,
  TrendingUp,
  Menu,
  X
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const popupRef = useRef(null);

  const [user, setUser] = useState({
    name: "Alex Johnson",
    role: "Job Seeker",
    location: "Koramangala",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Chef");
  const [bookmarkedJobs, setBookmarkedJobs] = useState(new Set());
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const jobCategories = ["Chef", "Marketing", "Technology", "Finance", "Design"];

  const jobsByCategory = {
    Chef: [
      {
        id: "chef-marriott",
        company: "Marriott",
        role: "Head Chef",
        location: "Koramangala - Onsite",
        tags: ["Full-time", "Senior"],
        logoLetter: "M",
        logoColor: "#8B0000",
      },
      {
        id: "chef-taj",
        company: "Taj Hotels",
        role: "Sous Chef",
        location: "HSR Layout - Onsite",
        tags: ["Full-time", "Mid-level"],
        logoLetter: "T",
        logoColor: "#DAA520",
      },
      {
        id: "chef-oberoi",
        company: "Oberoi",
        role: "Pastry Chef",
        location: "Whitefield - Onsite",
        tags: ["Full-time", "Junior"],
        logoLetter: "O",
        logoColor: "#4B0082",
      }
    ],
    Marketing: [
      {
        id: "marketing-google",
        company: "Google",
        role: "Marketing Manager",
        location: "Koramangala - Hybrid",
        tags: ["Remote", "Senior"],
        logoLetter: "G",
        logoColor: "#4285F4",
      },
      {
        id: "marketing-meta",
        company: "Meta",
        role: "Social Media Specialist",
        location: "HSR Layout - Remote",
        tags: ["Remote", "Mid-level"],
        logoLetter: "M",
        logoColor: "#1877F2",
      },
      {
        id: "marketing-hubspot",
        company: "HubSpot",
        role: "Content Marketing",
        location: "Bangalore - Remote",
        tags: ["Remote", "Junior"],
        logoLetter: "H",
        logoColor: "#FF7A59",
      }
    ],
    Technology: [
      {
        id: "tech-microsoft",
        company: "Microsoft",
        role: "Software Engineer",
        location: "Koramangala - Onsite",
        tags: ["Full-time", "Senior"],
        logoLetter: "M",
        logoColor: "#00A4EF",
      },
      {
        id: "tech-amazon",
        company: "Amazon",
        role: "Frontend Developer",
        location: "HSR Layout - Hybrid",
        tags: ["Hybrid", "Mid-level"],
        logoLetter: "A",
        logoColor: "#FF9900",
      },
      {
        id: "tech-flipkart",
        company: "Flipkart",
        role: "Full Stack Developer",
        location: "Whitefield - Onsite",
        tags: ["Full-time", "Junior"],
        logoLetter: "F",
        logoColor: "#047BD6",
      }
    ],
    Finance: [
      {
        id: "finance-jpmorgan",
        company: "JP Morgan",
        role: "Financial Analyst",
        location: "Koramangala - Onsite",
        tags: ["Full-time", "Senior"],
        logoLetter: "J",
        logoColor: "#0066CC",
      },
      {
        id: "finance-goldman",
        company: "Goldman Sachs",
        role: "Investment Banker",
        location: "HSR Layout - Onsite",
        tags: ["Full-time", "Mid-level"],
        logoLetter: "G",
        logoColor: "#1E3A8A",
      },
      {
        id: "finance-hdfc",
        company: "HDFC Bank",
        role: "Credit Analyst",
        location: "Koramangala - Onsite",
        tags: ["Full-time", "Junior"],
        logoLetter: "H",
        logoColor: "#004C8F",
      }
    ],
    Design: [
      {
        id: "design-adobe",
        company: "Adobe",
        role: "UX Designer",
        location: "Koramangala - Remote",
        tags: ["Remote", "Senior"],
        logoLetter: "A",
        logoColor: "#FF0000",
      },
      {
        id: "design-figma",
        company: "Figma",
        role: "Product Designer",
        location: "HSR Layout - Remote",
        tags: ["Remote", "Mid-level"],
        logoLetter: "F",
        logoColor: "#F24E1E",
      },
      {
        id: "design-zomato",
        company: "Zomato",
        role: "UI Designer",
        location: "Whitefield - Hybrid",
        tags: ["Hybrid", "Junior"],
        logoLetter: "Z",
        logoColor: "#E23744",
      }
    ]
  };

  const specializations = [
    { 
      name: "Finance", 
      icon: TrendingUp,
      bgColor: "#FFF8F1",
      iconColor: "#F97316"
    },
    { 
      name: "Technology", 
      icon: Zap,
      bgColor: "#FAF5FF",
      iconColor: "#8B5CF6"
    },
    { 
      name: "Marketing", 
      icon: Building2,
      bgColor: "#FFF2F2",
      iconColor: "#EF4444"
    },
  ];

  const recommendedJobs = [
    {
      id: "invision-ui-designer",
      company: "Invision",
      role: "UI Designer",
      location: "HSR Layout - Onsite",
      tags: ["Remote", "Junior"],
      logoLetter: "I",
      logoColor: "#FF3366",
    },
    {
      id: "telegram-digital-marketing",
      company: "Telegram",
      role: "Digital Marketing",
      location: "HSR Layout - Onsite", 
      tags: ["Remote", "Junior"],
      logoLetter: "T",
      logoColor: "#0088CC",
    },
    {
      id: "netflix-accounting",
      company: "Netflix",
      role: "Accounting",
      location: "Koramangala - Onsite",
      tags: ["Remote", "Junior"],
      logoLetter: "N",
      logoColor: "#E50914",
    },
  ];

  const navigationItems = [
    { name: 'Home', icon: HomeIcon, path: '/home', active: true },
    { name: 'Jobs', icon: Briefcase, path: '/jobs/joblist' },
    { name: 'Applications', icon: FileText, path: '/applications/application' },
    { name: 'Profile', icon: User, path: '/myprofilesection/myprofile' }
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedBookmarks = localStorage.getItem("bookmarkedJobs");
    if (storedBookmarks) {
      setBookmarkedJobs(new Set(JSON.parse(storedBookmarks)));
    }
    const handlePopState = (event) => {
      if (showPopup) {
        setShowPopup(false);
        event.preventDefault();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [showPopup]);

  useEffect(() => {
    localStorage.setItem("bookmarkedJobs", JSON.stringify(Array.from(bookmarkedJobs)));
  }, [bookmarkedJobs]);

  useEffect(() => {
    if (showPopup) {
      window.history.pushState({ popup: true }, '');
    }
  }, [showPopup]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(jobId)) {
        newBookmarks.delete(jobId);
      } else {
        newBookmarks.add(jobId);
      }
      return newBookmarks;
    });
  };

  const JobCard = ({ job, index, isHorizontal = false }) => {
    const isBookmarked = bookmarkedJobs.has(job.id);
    return (
      <div className={`bg-white rounded-2xl p-4 md:p-6 relative border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${
        isHorizontal ? 'min-w-[280px] md:min-w-[320px]' : 'w-full'
      }`}>
        <Bookmark
          size={18}
          className={`absolute top-4 right-4 cursor-pointer transition-colors ${
            isBookmarked 
              ? 'text-blue-600 fill-blue-600' 
              : 'text-gray-400 hover:text-blue-600'
          }`}
          onClick={() => toggleBookmark(job.id)}
        />
        
        {isHorizontal ? (
          <>
            <div 
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg"
              style={{ backgroundColor: job.logoColor }}
            >
              {job.logoLetter}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">
                {job.company}
              </p>
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                {job.role}
              </h4>
              <p className="text-sm text-gray-500 mb-1">{job.location}</p>
              <div className="flex gap-2 mb-4 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs border border-blue-200 px-3 py-1 rounded-full text-blue-700 bg-blue-50 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>3 days ago</span>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-start gap-4">
            <div 
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0"
              style={{ backgroundColor: job.logoColor }}
            >
              {job.logoLetter}
            </div>
            <div className="flex-1 pr-8">
              <p className="text-base font-semibold text-gray-900 mb-1">
                {job.company}
              </p>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {job.role}
              </h4>
              <p className="text-base text-gray-500 mb-4">{job.location}</p>
              <div className="flex gap-3 mb-6 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 border border-gray-300 text-gray-600 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">3 days ago</p>
                <button className="text-blue-600 text-base font-semibold hover:text-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // The corrected return block of the Home component with all tags properly closed
return (
  <div className="min-h-screen bg-gray-50 pb-20">
    <div className="px-4 mt-4 flex flex-col gap-6">
      {recommendedJobs.map((job, idx) => (
        <JobCard key={idx} job={job} index={idx} isHorizontal={false} />
      ))}
    </div>

    <div className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around py-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
      <button onClick={() => navigate('/home')}>
        <HomeIcon className="w-6 h-6 text-blue-600" />
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
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white w-64 rounded-2xl border border-gray-200 shadow-xl p-5 z-50" ref={popupRef}>
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
}
export default Home;
