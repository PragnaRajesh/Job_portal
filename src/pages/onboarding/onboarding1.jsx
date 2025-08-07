import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import infodemicImg from '../../assets/worried.png';
import '../../styles/onboarding-animations.css';

const OnboardingScreen1 = ({ onNext, onSkip }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      navigate('/signup1');
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      navigate('/onboarding2');
    }
  };

  // Prevent app closure on back button
  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();
      window.history.pushState(null, '', window.location.href);
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-white to-rose-50 flex flex-col relative overflow-hidden pt-safe pb-safe">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-bubble" style={{animationDelay: '0s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-3s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-6s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 left-8 w-4 h-4 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-32 right-12 w-6 h-6 bg-gradient-to-r from-orange-300 to-pink-300 rounded-lg animate-wobble" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-gradient-to-r from-rose-300 to-red-300 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col px-4 sm:px-6">
        
        {/* Hero Text Section */}
        <div className={`mt-8 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-gradient-to-br from-rose-300 via-pink-200 to-red-300 animate-gradient-shift rounded-3xl p-6 border border-rose-200 shadow-2xl overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Main headline with staggered animation */}
            <div className="relative z-10">
              <h1 className="font-bold text-[clamp(1.4rem,6vw,2.2rem)] leading-tight text-gray-800 mb-2">
                <span className="inline-block animate-slideUp" style={{animationDelay: '0.3s'}}>
                  Worried about{" "}
                </span>
                <br />
                <span className="inline-block animate-slideUp" style={{animationDelay: '0.6s'}}>
                  job feedback!{" "}
                </span>
                <br />
                <span className="inline-block text-white animate-slideUp" style={{animationDelay: '0.9s'}}>
                  No hassle,{" "}
                </span>
                <span className="inline-block text-white animate-slideUp" style={{animationDelay: '1.2s'}}>
                  get it here..
                </span>
              </h1>
            </div>

            {/* Floating worry emoji */}
            <div className="absolute -top-2 -right-2 text-3xl animate-wobble" style={{animationDelay: '1.5s'}}>
              😰
            </div>
          </div>
        </div>

        {/* Character Illustration Section */}
        <div className="flex-1 flex items-center justify-center relative min-h-0">
          <div className={`w-full max-w-md relative transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            
            {/* Glow effect behind character */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-rose-200/50 rounded-full blur-xl animate-glow"></div>
            
            <img
              src={infodemicImg}
              alt="Worried Character"
              className="w-full h-auto object-contain relative z-10 animate-bounce-in"
              style={{animationDelay: '0.8s'}}
            />
            
            {/* Floating thought bubbles */}
            <div className="absolute -top-4 -left-4 text-xl opacity-70 animate-float" style={{animationDelay: '2s'}}>
              💭
            </div>
            <div className="absolute -top-2 -right-8 text-lg opacity-60 animate-float" style={{animationDelay: '2.5s'}}>
              ❓
            </div>
            <div className="absolute bottom-8 -left-6 text-sm opacity-50 animate-float" style={{animationDelay: '3s'}}>
              😟
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className={`text-center px-2 py-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <p className="font-medium text-[clamp(0.9rem,3.8vw,1.1rem)] leading-relaxed text-gray-700 max-w-xs mx-auto">
            <span className="inline-block animate-slideUp" style={{animationDelay: '1.8s'}}>
              Secure your dream job{" "}
            </span>
            <br />
            <span className="inline-block animate-slideUp" style={{animationDelay: '2.1s'}}>
              with our trusted{" "}
            </span>
            <br />
            <span className="inline-block animate-slideUp" style={{animationDelay: '2.4s'}}>
              companies..
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className={`bg-gradient-to-r from-rose-300 via-pink-200 to-red-300 animate-gradient-shift rounded-3xl p-4 border border-rose-200 mx-4 mb-4 shadow-xl transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-8 h-3 bg-white rounded-full shadow-sm animate-glow" />
          <div className="w-3 h-3 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.2s'}} />
          <div className="w-3 h-3 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.4s'}} />
          <div className="w-3 h-3 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.6s'}} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="text-white text-[clamp(0.9rem,3.5vw,1.1rem)] font-bold hover:text-white/80 transition-all duration-300 hover:scale-105 animate-button-hover relative group"
          >
            <span className="relative z-10">Skip</span>
            <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>

          {/* Next Button with enhanced design */}
          <div className="relative">
            <div className="w-[clamp(60px,15vw,75px)] h-[clamp(60px,15vw,75px)] rounded-full bg-gradient-to-r from-white to-gray-100 shadow-xl animate-success-pulse flex items-center justify-center">
              <button
                onClick={handleNext}
                className="w-[85%] h-[85%] rounded-full bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-110 animate-button-hover group flex items-center justify-center shadow-lg"
              >
                <svg
                  className="w-[clamp(20px,5vw,26px)] h-[clamp(20px,5vw,26px)] animate-arrow-slide group-hover:animate-none group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen1;
