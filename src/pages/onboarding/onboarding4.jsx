import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/onboarding-animations.css';

const OnboardingScreen4 = ({ onSignUp, onLogIn }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col overflow-hidden pt-safe pb-safe relative">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-bubble" style={{animationDelay: '-3s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-6s'}}></div>
        <div className="floating-bubble" style={{animationDelay: '-9s'}}></div>
        
        {/* Success celebration elements */}
        <div className="absolute top-20 left-8 text-3xl animate-float" style={{animationDelay: '1s'}}>🎉</div>
        <div className="absolute top-32 right-12 text-2xl animate-wobble" style={{animationDelay: '1.5s'}}>✨</div>
        <div className="absolute top-16 right-24 text-xl animate-float" style={{animationDelay: '2s'}}>🚀</div>
        <div className="absolute top-40 left-16 text-2xl animate-wobble" style={{animationDelay: '2.5s'}}>💼</div>
        <div className="absolute top-24 left-1/2 text-xl animate-float" style={{animationDelay: '3s'}}>⭐</div>
        <div className="absolute bottom-32 right-16 text-lg animate-wobble" style={{animationDelay: '3.5s'}}>🎯</div>
        <div className="absolute bottom-40 left-12 text-xl animate-float" style={{animationDelay: '4s'}}>🌟</div>
      </div>
      
      {/* Header Section */}
      <div className={`px-6 py-6 text-center relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="relative">
          <h1 className="text-[clamp(2rem,8vw,3rem)] font-bold leading-tight text-gray-900 mb-4 font-montserrat">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-slideUp block" style={{animationDelay: '0.2s'}}>
              Find Your
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-slideUp block" style={{animationDelay: '0.4s'}}>
              Dream Job
            </span>
          </h1>
          
          <p className="text-[clamp(0.9rem,4vw,1.2rem)] text-gray-600 font-medium max-w-[320px] mx-auto leading-relaxed font-poppins animate-slideUp" style={{animationDelay: '0.6s'}}>
            Finding the right job can feel like a daunting task, but it's also an 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold"> exciting opportunity</span> for personal growth.
          </p>

          {/* Achievement badge */}
          <div className={`inline-flex items-center mt-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-4 py-2 border border-green-200 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-dot-pulse mr-2"></div>
            <span className="text-green-700 font-semibold text-sm animate-slideUp" style={{animationDelay: '0.8s'}}>
              Ready to Launch Your Career! 🚀
            </span>
          </div>
        </div>
      </div>

      {/* Character Illustration Section */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-0 relative">
        <div className={`w-[clamp(320px,80vw,450px)] h-full max-h-[50vh] flex items-center justify-center relative transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          
          {/* Professional aura effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-full animate-glow opacity-80"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-indigo-100/40 to-blue-100/40 rounded-full animate-success-pulse"></div>
          
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F066a49ebd63d4888b50b2ed95c4b0a2d%2F1fce1cfe00ad43b39d0f0e156be3f338?format=webp&width=800"
            alt="Professional Character"
            className="w-full h-auto object-contain max-h-full animate-professional-wave relative z-10"
            style={{animationDelay: '0.6s'}}
          />
          
          {/* Floating achievement indicators */}
          <div className="absolute -top-6 -left-6 opacity-80">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float shadow-lg" style={{animationDelay: '1s'}}>
              <span className="text-white text-lg font-bold">🏆</span>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-8 opacity-80">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-wobble shadow-lg" style={{animationDelay: '1.5s'}}>
              <span className="text-white text-sm font-bold">✓</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 opacity-80">
            <div className="w-11 h-11 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center animate-float shadow-lg" style={{animationDelay: '2s'}}>
              <span className="text-white text-lg">💡</span>
            </div>
          </div>

          {/* Professional skills showcase */}
          <div className="absolute top-1/4 -right-8 opacity-70">
            <div className="flex flex-col space-y-2 animate-slideUp" style={{animationDelay: '1.2s'}}>
              <div className="bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform">
                <span className="text-xs text-gray-700 font-bold flex items-center">
                  <span className="mr-1">💼</span> Experience
                </span>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform">
                <span className="text-xs text-gray-700 font-bold flex items-center">
                  <span className="mr-1">⚡</span> Skills
                </span>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform">
                <span className="text-xs text-gray-700 font-bold flex items-center">
                  <span className="mr-1">🤝</span> Network
                </span>
              </div>
            </div>
          </div>

          {/* Motivation boost */}
          <div className="absolute bottom-1/4 -left-8 opacity-60">
            <div className="bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 animate-bounce-in" style={{animationDelay: '2.5s'}}>
              <span className="text-xs text-gray-700 font-bold">
                You've got this! 💪
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className={`px-6 py-6 space-y-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Final progress indicator */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-dot-pulse" />
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-dot-pulse" style={{animationDelay: '0.2s'}} />
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-dot-pulse" style={{animationDelay: '0.4s'}} />
          <div className="w-8 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-sm animate-glow" style={{animationDelay: '0.6s'}} />
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          className="w-full h-[clamp(50px,12vw,60px)] bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-bold rounded-2xl text-[clamp(1rem,4.2vw,1.2rem)] shadow-2xl border-2 border-indigo-200 hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-button-hover font-poppins relative overflow-hidden group"
          style={{animationDelay: '0.8s'}}
        >
          <span className="relative z-10 flex items-center justify-center space-x-3">
            <span>Start Your Journey</span>
            <span className="group-hover:animate-bounce text-xl">🚀</span>
          </span>
          
          {/* Button magical effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        </button>

        {/* Log In Button */}
        <button
          onClick={handleLogIn}
          className="w-full h-[clamp(50px,12vw,60px)] bg-white text-indigo-600 font-bold rounded-2xl text-[clamp(1rem,4.2vw,1.2rem)] border-2 border-indigo-500 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 animate-button-hover font-poppins relative overflow-hidden group shadow-lg"
          style={{animationDelay: '1s'}}
        >
          <span className="relative z-10 flex items-center justify-center space-x-3">
            <span>Welcome Back</span>
            <span className="group-hover:animate-bounce text-xl">👋</span>
          </span>
          
          {/* Button shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>

        {/* Motivational footer text */}
        <div className="text-center pt-4">
          <p className="text-[clamp(0.8rem,3.2vw,0.95rem)] text-gray-500 font-medium animate-slideUp" style={{animationDelay: '1.2s'}}>
            Join thousands of professionals who found their 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold"> perfect match</span> ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen4;
