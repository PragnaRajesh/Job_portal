import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/onboarding-animations.css';

const OnboardingScreen4 = ({ onSignUp, onLogIn }) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp();
    } else {
      navigate('/signup1');
    }
  };

  const handleLogIn = () => {
    if (onLogIn) {
      onLogIn();
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 flex flex-col overflow-hidden pt-safe pb-safe animate-fade-scale-in">
      
      {/* Floating Background Elements */}
      <div className="floating-bubble" style={{animationDelay: '-3s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-6s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-9s'}}></div>

      {/* Success confetti elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-8 text-2xl animate-float" style={{animationDelay: '1s'}}>🎉</div>
        <div className="absolute top-32 right-12 text-xl animate-float" style={{animationDelay: '1.5s'}}>✨</div>
        <div className="absolute top-16 right-24 text-lg animate-float" style={{animationDelay: '2s'}}>🚀</div>
        <div className="absolute top-40 left-16 text-xl animate-float" style={{animationDelay: '2.5s'}}>💼</div>
        <div className="absolute top-24 left-1/2 text-lg animate-float" style={{animationDelay: '3s'}}>⭐</div>
      </div>
      
      {/* Header Text Section - Fixed height */}
      <div className="px-6 py-4 text-center h-[22vh] flex flex-col justify-center relative">
        <h1 className="text-[clamp(1.8rem,7vw,2.5rem)] font-bold leading-tight text-gray-900 mb-3 font-montserrat animate-slideUp" style={{animationDelay: '0.2s'}}>
          <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
            Find Your Job
          </span>
        </h1>
        
        <p className="text-[clamp(0.9rem,3.8vw,1.1rem)] text-gray-600 font-medium max-w-[300px] mx-auto leading-relaxed font-poppins animate-slideUp" style={{animationDelay: '0.4s'}}>
          Finding the right job can feel like a daunting task, but it's also an exciting opportunity for personal growth.
        </p>

        {/* Animated success indicators */}
        <div className="absolute top-8 right-8 opacity-60">
          <div className="flex items-center space-x-2 animate-slideUp" style={{animationDelay: '0.6s'}}>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-dot-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">Ready to start!</span>
          </div>
        </div>
      </div>

      {/* Character Illustration - Takes remaining flexible space */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-0 relative">
        <div className="w-[clamp(300px,75vw,400px)] h-full max-h-[60vh] flex items-center justify-center relative">
          
          {/* Professional aura effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full animate-success-pulse opacity-60"></div>
          
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2F1fce1cfe00ad43b39d0f0e156be3f338?format=webp&width=800"
            alt="Professional Character"
            className="w-full h-auto object-contain max-h-full animate-professional-wave relative z-10"
          />
          
          {/* Achievement badges floating around character */}
          <div className="absolute -top-4 -left-4 opacity-70">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center animate-float text-white text-xs font-bold" style={{animationDelay: '1s'}}>
              🏆
            </div>
          </div>
          
          <div className="absolute -top-2 -right-6 opacity-70">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-float text-white text-xs" style={{animationDelay: '1.5s'}}>
              ✓
            </div>
          </div>
          
          <div className="absolute -bottom-2 -left-2 opacity-70">
            <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-float text-white text-xs" style={{animationDelay: '2s'}}>
              💡
            </div>
          </div>

          {/* Professional skills indicators */}
          <div className="absolute top-1/4 -right-8 opacity-60">
            <div className="flex flex-col space-y-2 animate-slideUp" style={{animationDelay: '1.2s'}}>
              <div className="bg-white rounded-lg px-2 py-1 shadow-sm border">
                <span className="text-xs text-gray-700 font-medium">Skills ✨</span>
              </div>
              <div className="bg-white rounded-lg px-2 py-1 shadow-sm border">
                <span className="text-xs text-gray-700 font-medium">Experience 💼</span>
              </div>
              <div className="bg-white rounded-lg px-2 py-1 shadow-sm border">
                <span className="text-xs text-gray-700 font-medium">Network 🤝</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons - Fixed height */}
      <div className="px-6 py-4 space-y-3 h-[22vh] flex flex-col justify-center animate-slideUp" style={{animationDelay: '0.8s'}}>
        <button
          onClick={handleSignUp}
          className="w-full h-[clamp(45px,11vw,55px)] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-bold rounded-2xl text-[clamp(1rem,4vw,1.15rem)] shadow-lg border-2 border-[#CB9D73] hover:shadow-xl transition-all duration-300 hover:scale-105 animate-button-hover font-poppins relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>Sign up</span>
            <span className="group-hover:animate-bounce">🚀</span>
          </span>
          
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>

        <button
          onClick={handleLogIn}
          className="w-full h-[clamp(45px,11vw,55px)] bg-white text-[#2563EB] font-bold rounded-2xl text-[clamp(1rem,4vw,1.15rem)] border-2 border-[#2563EB] hover:bg-gray-50 transition-all duration-300 hover:scale-105 animate-button-hover font-poppins relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>Log in</span>
            <span className="group-hover:animate-bounce">👋</span>
          </span>
          
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen4;
