import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sadBoyImage from '../../assets/onboarding1.png';
import questionIcon from '../../assets/question-bubble.png';
import '../../styles/onboarding-animations.css';

const OnboardingScreen1 = ({ onNext, onSkip }) => {
  const navigate = useNavigate();

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
      // Stay on first onboarding screen, don't close app
      window.history.pushState(null, '', window.location.href);
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-white flex flex-col relative overflow-hidden pt-safe pb-safe animate-fade-scale-in">
      {/* Floating Background Elements */}
      <div className="floating-bubble" style={{animationDelay: '0s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-3s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-6s'}}></div>

      {/* Main Content - Takes up most space */}
      <div className="flex-1 flex flex-col px-4 pt-4">

        {/* Top Text Box - Fixed height with animated gradient */}
        <div className="relative bg-gradient-to-br from-[#7551FF] to-[#7551FF99] animate-gradient-shift rounded-3xl p-4 border-2 border-[#CB9D73] shadow-lg h-[25vh] flex items-center overflow-hidden">
          <div className="relative z-10">
            <h1 className="font-montserrat font-bold text-[clamp(1.2rem,5.5vw,2rem)] leading-tight text-white">
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.2s'}}>
                Worried about<br />
              </span>
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.4s'}}>
                job feedback!<br />
              </span>
              <span className="text-white/90 inline-block animate-slideUp" style={{animationDelay: '0.6s'}}>
                No hassle get it<br />
              </span>
              <span className="text-white/90 inline-block animate-slideUp" style={{animationDelay: '0.8s'}}>
                here..
              </span>
            </h1>
          </div>

          {/* Animated Question Bubble */}
          <div className="absolute -top-1 -right-1 w-[clamp(60px,15vw,85px)] h-[clamp(40px,10vw,60px)] z-20">
            <img
              src={questionIcon}
              alt="Question Bubble"
              className="w-full h-full object-contain animate-question-bounce"
            />
          </div>

          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Character Image - Flexible space with animations */}
        <div className="flex-1 flex items-center justify-center relative min-h-0 sm:min-h-[82px]">
          <div className="w-[clamp(250px,65vw,350px)] h-full max-h-[50vh] flex items-center justify-center">
            <img
              src={sadBoyImage}
              alt="Worried Character"
              className="w-full h-auto object-contain max-h-full animate-worried-sway"
            />
            
            {/* Floating worry indicators */}
            <div className="absolute -top-4 -left-4 text-2xl opacity-60 animate-float" style={{animationDelay: '1s'}}>
              😰
            </div>
            <div className="absolute -top-2 -right-8 text-lg opacity-60 animate-float" style={{animationDelay: '2s'}}>
              💭
            </div>
          </div>

          {/* Background effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-full opacity-30 animate-success-pulse"></div>
        </div>

        {/* Description Text - Fixed space with staggered animation */}
        <div className="text-center px-2 h-[8vh] flex items-center justify-center">
          <p className="font-poppins font-medium text-[clamp(0.9rem,3.8vw,1.1rem)] leading-tight text-gray-800">
            <span className="inline-block animate-slideUp" style={{animationDelay: '1.2s'}}>
              Secure your dream job<br />
            </span>
            <span className="inline-block animate-slideUp" style={{animationDelay: '1.4s'}}>
              with our trusted<br />
            </span>
            <span className="inline-block animate-slideUp" style={{animationDelay: '1.6s'}}>
              companies..
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Navigation Section - Fixed height with enhanced animations */}
      <div className="bg-gradient-to-r from-[#9E85FF] to-[#7551FF] animate-gradient-shift rounded-3xl p-4 border-2 border-[#CB9D73] h-[15vh] flex flex-col justify-center mx-4 animate-slideUp" style={{animationDelay: '1.8s'}}>
        {/* Navigation Dots with pulse animation */}
        <div className="flex justify-center gap-2 mb-3">
          <div className="w-6 h-2.5 bg-white rounded-full shadow-sm animate-dot-pulse" />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.2s'}} />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.4s'}} />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.6s'}} />
        </div>

        {/* Skip and Next Button Container */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="text-white text-[clamp(0.9rem,3.5vw,1.1rem)] font-semibold font-poppins hover:text-white/80 transition-all duration-300 hover:scale-105 animate-button-hover"
          >
            Skip
          </button>

          {/* Enhanced Circular Next Button */}
          <div className="w-[clamp(55px,14vw,70px)] h-[clamp(55px,14vw,70px)]">
            <div className="flex items-center justify-center rounded-full w-full h-full border-2 border-white bg-white/10 backdrop-blur-sm animate-success-pulse">
              <button
                onClick={handleNext}
                className="flex items-center justify-center rounded-full shadow-lg w-[85%] h-[85%] bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-110 animate-button-hover group"
              >
                <svg
                  width="24"
                  height="24"
                  className="w-[clamp(18px,4.5vw,24px)] h-[clamp(18px,4.5vw,24px)] animate-arrow-slide group-hover:animate-none group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="#9E85FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
