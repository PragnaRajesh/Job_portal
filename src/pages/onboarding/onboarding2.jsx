import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rocketImage from '../../assets/onboarding2.png';
import '../../styles/onboarding-animations.css';

const OnboardingScreen2 = ({ onNext, onSkip }) => {
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
      navigate('/onboarding3');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-emerald-50 flex flex-col relative overflow-hidden pt-safe pb-safe">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-bubble" style={{animationDelay: '-1s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-4s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-7s'}}></div>
        
        {/* Space-themed floating elements */}
        <div className="absolute top-20 left-12 text-2xl animate-float" style={{animationDelay: '1s'}}>⭐</div>
        <div className="absolute top-40 right-16 text-xl animate-wobble" style={{animationDelay: '2s'}}>🌟</div>
        <div className="absolute bottom-40 left-8 text-lg animate-float" style={{animationDelay: '3s'}}>✨</div>
        <div className="absolute top-60 left-20 text-sm animate-wobble" style={{animationDelay: '4s'}}>🪐</div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col px-4 sm:px-6">
        
        {/* Hero Section with Rocket Theme */}
        <div className={`mt-6 mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-gradient-to-br from-emerald-300 via-green-200 to-teal-300 animate-gradient-shift rounded-3xl p-6 border border-emerald-200 shadow-2xl overflow-hidden min-h-[45vh]">
            
            {/* Animated stars background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-16 right-20 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-24 left-20 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute bottom-32 left-8 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-40 right-12 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2.5s'}}></div>
              
              {/* Rocket trail effects */}
              <div className="absolute bottom-0 right-8 w-16 h-32 opacity-40">
                <div className="w-full h-full bg-gradient-to-t from-orange-300 via-yellow-200 to-transparent rounded-full animate-rocket-trails"></div>
              </div>
              <div className="absolute bottom-4 right-12 w-8 h-20 opacity-30">
                <div className="w-full h-full bg-gradient-to-t from-red-300 via-orange-200 to-transparent rounded-full animate-rocket-trails" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 mb-6">
              <h1 className="font-bold text-[clamp(1.4rem,6vw,2.2rem)] leading-tight text-gray-800 mb-4">
                <span className="inline-block animate-slideUp" style={{animationDelay: '0.3s'}}>
                  Track your{" "}
                </span>
                <br />
                <span className="inline-block animate-slideUp" style={{animationDelay: '0.6s'}}>
                  application on{" "}
                </span>
                <br />
                <span className="inline-block text-white animate-slideUp" style={{animationDelay: '0.9s'}}>
                  real time!
                </span>
              </h1>

              <p className="font-medium text-[clamp(0.85rem,3.5vw,1rem)] leading-relaxed text-gray-700 max-w-[280px] animate-slideUp" style={{animationDelay: '1.2s'}}>
                Our team of professionals will guide you through the process and help
                you find the best career for your goals. Get started today...
              </p>
            </div>

            {/* Rocket Illustration with enhanced animation */}
            <div className="absolute -bottom-8 right-0 w-[clamp(300px,120vw,400px)] h-[clamp(300px,120vw,400px)]">
              <div className="relative w-full h-full">
                <img
                  src={rocketImage}
                  alt="Rocket Illustration"
                  className="w-full h-full object-contain animate-rocket-launch"
                  style={{animationDelay: '0.8s'}}
                />
                
                {/* Rocket exhaust effect */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-12 bg-gradient-to-t from-orange-400 via-yellow-300 to-transparent rounded-full animate-rocket-trails opacity-70"></div>
                  <div className="w-6 h-8 bg-gradient-to-t from-red-400 via-orange-300 to-transparent rounded-full animate-rocket-trails absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-50" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>

            {/* Progress tracking visual element */}
            <div className="absolute top-4 right-4 opacity-60">
              <div className="flex items-center space-x-2 animate-slideUp" style={{animationDelay: '1.5s'}}>
                <div className="w-3 h-3 bg-white rounded-full animate-dot-pulse"></div>
                <div className="w-12 h-1 bg-white rounded animate-rocket-trails"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>

            {/* Launch countdown effect */}
            <div className="absolute bottom-4 left-4 opacity-50">
              <div className="text-white font-bold text-sm animate-bounce-in" style={{animationDelay: '2s'}}>
                🚀 Launch Ready!
              </div>
            </div>
          </div>
        </div>

        {/* Additional motivation text */}
        <div className={`text-center px-2 py-2 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <p className="font-medium text-[clamp(0.8rem,3.2vw,0.95rem)] leading-relaxed text-gray-600 max-w-sm mx-auto">
            <span className="inline-block animate-slideUp" style={{animationDelay: '1.8s'}}>
              Ready for takeoff?{" "}
            </span>
            <span className="inline-block animate-slideUp" style={{animationDelay: '2.1s'}}>
              Your career journey starts here! 🌟
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className={`bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 animate-gradient-shift rounded-3xl p-4 border border-emerald-200 mx-4 mb-4 shadow-xl transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-dot-pulse" />
          <div className="w-8 h-3 bg-white rounded-full shadow-sm animate-glow" style={{animationDelay: '0.2s'}} />
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

          {/* Next Button with rocket theme */}
          <div className="relative">
            <div className="w-[clamp(60px,15vw,75px)] h-[clamp(60px,15vw,75px)] rounded-full bg-gradient-to-r from-white to-gray-100 shadow-xl animate-success-pulse flex items-center justify-center">
              <button
                onClick={handleNext}
                className="w-[85%] h-[85%] rounded-full bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-110 animate-button-hover group flex items-center justify-center shadow-lg relative overflow-hidden"
              >
                <svg
                  className="w-[clamp(20px,5vw,26px)] h-[clamp(20px,5vw,26px)] animate-arrow-slide group-hover:animate-none group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                
                {/* Button shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
            
            {/* Floating rocket emoji */}
            <div className="absolute -top-2 -right-2 text-lg animate-wobble" style={{animationDelay: '2.5s'}}>
              🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen2;
