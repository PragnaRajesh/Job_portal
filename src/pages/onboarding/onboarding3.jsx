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

      {/* Top Blue Speech Box (ORIGINAL DIMENSIONS) */}
      <div className="px-4 pt-8 pb-4 relative z-20 flex-shrink-0">
        <div className={`relative bg-gradient-to-br from-[#7B9EFF] to-[#A8C5FF] animate-gradient-shift rounded-3xl p-4 shadow-lg border border-[#CB9D73]/20 overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10">
            <h1 className="font-bold text-base sm:text-lg leading-[1.3] text-black tracking-tight">
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.3s'}}>
                Build a{" "}
              </span>
              <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-slideUp" style={{animationDelay: '0.6s'}}>
                graphic-rich{" "}
              </span>
              <br />
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.9s'}}>
                animated resume{" "}
              </span>
              <br />
              <span className="inline-block animate-slideUp" style={{animationDelay: '1.2s'}}>
                to make your{" "}
              </span>
              <br />
              <span className="inline-block text-white animate-slideUp" style={{animationDelay: '1.5s'}}>
                profile stand out.
              </span>
            </h1>
          </div>

          {/* Floating design elements */}
          <div className="absolute -top-2 -right-2 text-2xl animate-wobble" style={{animationDelay: '1.8s'}}>
            ✨
          </div>
          <div className="absolute -bottom-2 -left-2 text-xl animate-float" style={{animationDelay: '2.1s'}}>
            🎯
          </div>
        </div>
      </div>

      {/* Large Resume Illustration - Takes remaining space */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10 min-h-0">
        <div className={`w-full h-full max-w-xs sm:max-w-sm relative transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          
          {/* Glow effect behind illustration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-2xl blur-xl animate-glow"></div>
          
          <div className="relative">
            <img
              src={onboarding33Img}
              alt="Resume Building Illustration"
              className="w-full h-full object-contain relative z-10 animate-bounce-in"
              style={{animationDelay: '0.8s'}}
            />
            
            {/* Floating resume elements */}
            <div className="absolute -top-4 -left-4 opacity-70">
              <div className="bg-white rounded-lg p-2 shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <div className="w-8 h-1 bg-blue-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded mt-1"></div>
              </div>
            </div>
            
            <div className="absolute -top-2 -right-6 opacity-70">
              <div className="bg-white rounded-lg p-2 shadow-lg animate-wobble" style={{animationDelay: '2.5s'}}>
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 opacity-70">
              <div className="bg-white rounded-lg p-2 shadow-lg animate-float" style={{animationDelay: '3s'}}>
                <div className="flex space-x-1">
                  <div className="w-2 h-4 bg-yellow-400 rounded"></div>
                  <div className="w-2 h-6 bg-blue-400 rounded"></div>
                  <div className="w-2 h-3 bg-green-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inspirational Text */}
      <div className={`text-center px-4 py-3 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
        <p className="font-medium text-[clamp(0.85rem,3.5vw,1rem)] leading-relaxed text-gray-600 max-w-sm mx-auto">
          <span className="inline-block animate-slideUp" style={{animationDelay: '2.2s'}}>
            Create a resume that{" "}
          </span>
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold animate-slideUp" style={{animationDelay: '2.5s'}}>
            wow's recruiters{" "}
          </span>
          <span className="inline-block animate-slideUp" style={{animationDelay: '2.8s'}}>
            and lands you interviews! 🎨
          </span>
        </p>
      </div>

      {/* Bottom Navigation Card - Fixed height (ORIGINAL DIMENSIONS) */}
      <div className="px-4 pb-6 relative z-20 flex-shrink-0">
        <div className={`bg-gradient-to-r from-[#7B9EFF] to-[#A8C5FF] animate-gradient-shift rounded-3xl px-4 py-4 shadow-xl border border-blue-200 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-dot-pulse" />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.2s'}} />
            <div className="w-6 h-2 bg-white rounded-full shadow-sm animate-glow" style={{animationDelay: '0.4s'}} />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.6s'}} />
          </div>

          {/* Skip and Get Started Buttons */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handleSkip}
              className="text-white text-base font-bold hover:text-white/80 transition-all duration-300 hover:scale-105 animate-button-hover relative group flex-shrink-0"
            >
              <span className="relative z-10">Skip</span>
              <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>

            <button
              onClick={handleGetStarted}
              className="bg-white text-[#7B9EFF] text-sm font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:scale-105 animate-button-hover relative group overflow-hidden flex-shrink-0"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <span className="group-hover:animate-bounce">🚀</span>
              </span>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen3;
