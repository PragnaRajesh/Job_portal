import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import onboarding33Img from '../../assets/onboarding33.png';
import '../../styles/onboarding-animations.css';

const OnboardingScreen3 = ({ onNext, onSkip }) => {
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

  const handleGetStarted = () => {
    if (onNext) {
      onNext();
    } else {
      navigate('/onboarding4');
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-bubble" style={{animationDelay: '-2s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-5s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-8s'}}></div>
        
        {/* Professional floating elements */}
        <div className="absolute top-16 left-8 text-xl animate-float" style={{animationDelay: '1s'}}>📄</div>
        <div className="absolute top-32 right-12 text-lg animate-wobble" style={{animationDelay: '2s'}}>✏️</div>
        <div className="absolute bottom-32 left-16 text-lg animate-float" style={{animationDelay: '3s'}}>🎨</div>
        <div className="absolute top-48 right-20 text-sm animate-wobble" style={{animationDelay: '4s'}}>💼</div>
        <div className="absolute bottom-48 right-8 text-lg animate-float" style={{animationDelay: '5s'}}>⭐</div>
      </div>

      {/* Main Content - Takes up most space */}
      <div className="flex-1 flex flex-col px-4 pt-4">

        {/* Top Blue Speech Box - Fixed height with animated gradient (ORIGINAL DIMENSIONS) */}
        <div className={`relative bg-gradient-to-br from-[#7B9EFF] to-[#A8C5FF] animate-gradient-shift rounded-3xl p-4 border-2 border-[#CB9D73] shadow-lg h-[25vh] flex items-center overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10">
            <h1 className="font-montserrat font-semibold text-[clamp(1.2rem,5.5vw,2rem)] leading-tight text-black/70">
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.3s'}}>
                Build a &nbsp;
              </span>
              <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-slideUp" style={{animationDelay: '0.6s'}}>
                graphic-rich{" "}
              </span>
              <br />
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.9s'}}>
                animated resume{" "}
              </span>
              <br />
              <span className="inline-block text-white/90 animate-slideUp" style={{animationDelay: '1.2s'}}>
                to make your{" "}
              </span>
              <span className="inline-block text-white/90 animate-slideUp" style={{animationDelay: '1.5s'}}>
                profile stand out.
              </span>
            </h1>
          </div>

          {/* Floating design elements */}
          <div className="absolute -top-2 -right-2 text-3xl animate-wobble" style={{animationDelay: '1.8s'}}>
            ✨
          </div>

          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Character Image - Full-height stretch like Onboarding 1 */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-full h-full flex items-center justify-center -mt-16 relative">
            {/* Glow effect behind character */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-full blur-xl animate-glow"></div>

            {/* Apply diff changes with responsive layout */}
            <div className="relative overflow-hidden p-2 sm:flex sm:flex-col">
              <img
                src={onboarding33Img}
                alt="Resume Building Illustration"
                className="w-full h-full object-cover relative z-10 animate-bounce-in sm:mx-auto"
                style={{
                  animationDelay: '0.8s',
                  filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))',
                  transform: 'translateY(0px)'
                }}
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
        </div>

        {/* Description Text */}
        <div className={`text-center px-2 py-2 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <p className="font-medium text-[clamp(0.9rem,3.8vw,1.1rem)] leading-relaxed text-gray-700 max-w-xs mx-auto">
            <span className="inline-block animate-slideUp" style={{animationDelay: '2.2s'}}>
              Create a resume that{" "}
            </span>
            <br />
            <span className="inline-block animate-slideUp" style={{animationDelay: '2.5s'}}>
              wow's recruiters and lands interviews!
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Navigation Card - Increased size to match other screens */}
      <div className="px-4 pb-6 relative z-20 flex-shrink-0">
        <div className={`bg-gradient-to-r from-[#7B9EFF] to-[#A8C5FF] animate-gradient-shift rounded-3xl p-6 border-2 border-[#CB9D73] shadow-xl h-[20vh] flex flex-col justify-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Navigation Dots - Enhanced size */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" />
            <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.2s'}} />
            <div className="w-8 h-2.5 bg-white rounded-full shadow-sm animate-glow" style={{animationDelay: '0.4s'}} />
            <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.6s'}} />
          </div>

          {/* Skip and Get Started Buttons */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handleSkip}
              className="text-white text-[clamp(0.9rem,3.5vw,1.1rem)] font-bold hover:text-white/80 transition-all duration-300 hover:scale-105 animate-button-hover relative group flex-shrink-0"
            >
              <span className="relative z-10">Skip</span>
              <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>

            {/* Enhanced Circular Next Button */}
            <div className="w-[clamp(60px,15vw,75px)] h-[clamp(60px,15vw,75px)]">
              <div className="flex items-center justify-center rounded-full w-full h-full border-2 border-white bg-white/10 backdrop-blur-sm animate-success-pulse">
                <button
                  onClick={handleGetStarted}
                  className="flex items-center justify-center rounded-full shadow-xl w-[85%] h-[85%] bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-110 animate-button-hover group relative overflow-hidden"
                >
                  <span className="text-[#7B9EFF] text-[clamp(0.8rem,3.2vw,1rem)] font-bold relative z-10">🚀</span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen3;
