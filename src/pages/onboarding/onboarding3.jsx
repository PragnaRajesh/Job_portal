import React from 'react';
import { useNavigate } from 'react-router-dom';
import resumeImg from '../../assets/onboarding3.png';
import '../../styles/onboarding-animations.css';

const OnboardingScreen3 = ({ onNext, onSkip }) => {
  const navigate = useNavigate();

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
    <div className="min-h-screen w-full bg-white flex flex-col relative overflow-hidden pt-safe pb-safe animate-fade-scale-in">
      {/* Floating Background Elements */}
      <div className="floating-bubble" style={{animationDelay: '-2s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-5s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-8s'}}></div>

      {/* Main Content - Takes up most space */}
      <div className="flex-1 flex flex-col px-4 pt-4">
        
        {/* Top Text Box - Fixed height with animated elements */}
        <div className="bg-gradient-to-br from-[#799EFF] to-[#799EFF99] animate-gradient-shift rounded-3xl p-4 border-2 border-[#CB9D73] shadow-lg h-[25vh] flex items-center relative overflow-hidden">
          
          {/* Animated typing cursor and lines - moved below */}

          {/* Document icons floating */}
          <div className="absolute bottom-4 left-4 opacity-40">
            <div className="flex space-x-2">
              <div className="w-6 h-8 bg-white rounded animate-paper-stack"></div>
              <div className="w-6 h-8 bg-white/80 rounded animate-paper-stack" style={{animationDelay: '0.3s'}}></div>
              <div className="w-6 h-8 bg-white/60 rounded animate-paper-stack" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>

          <h1 className="font-montserrat font-semibold text-[clamp(1.1rem,4.8vw,1.7rem)] leading-tight text-black relative z-10">
            {/* <span className="inline-block animate-slideUp" style={{animationDelay: '0.2s'}}> */}
              Build a graphic-<br />
            {/* </span> */}
            {/* <span className="inline-block animate-slideUp" style={{animationDelay: '0.4s'}}> */}
              rich animated<br />
            {/* </span> */}
            {/* <span className="inline-block animate-slideUp" style={{animationDelay: '0.6s'}}> */}
              resume to make<br />
            {/* </span> */}
            {/* <span className="inline-block animate-slideUp" style={{animationDelay: '0.8s'}}> */}
              your profile stand<br />
            {/* </span> */}
            {/* <span className="inline-block animate-slideUp" style={{animationDelay: '1s'}}> */}
              out.
            {/* </span> */}
          </h1>
        </div>

        {/* Resume Illustration - Flexible space with building animation */}
        <div className="flex-1 flex items-center justify-center min-h-0 py-2 relative">
          <div className="w-[clamp(320px,80vw,420px)] h-full max-h-[70vh] flex items-center justify-center relative">
            
            {/* Resume glow effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#7551FF]/20 to-[#9E85FF]/20 rounded-lg animate-resume-glow"></div> */}
            
            <img
              src={resumeImg}
              alt="Resume Building Illustration"
              // className="w-full h-auto object-contain max-h-full animate-paper-stack relative z-10"
              className="w-[80vw] h-[70vh] sm:w-[366px] sm:h-[466px] object-contain animate-paper-stack relative z-10 -mt-20"


            />
            
            {/* Animated building elements
            <div className="absolute top-4 -left-8 opacity-60">
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-4 bg-blue-500 rounded animate-dot-pulse">📝</div>
                <div className="w-4 h-4 bg-green-500 rounded animate-dot-pulse" style={{animationDelay: '0.5s'}}>💼</div>
                <div className="w-4 h-4 bg-purple-500 rounded animate-dot-pulse" style={{animationDelay: '1s'}}>🎓</div>
              </div>
            </div>

            <div className="absolute top-8 -right-8 opacity-60">
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-4 bg-orange-500 rounded animate-dot-pulse" style={{animationDelay: '0.3s'}}>⭐</div>
                <div className="w-4 h-4 bg-red-500 rounded animate-dot-pulse" style={{animationDelay: '0.8s'}}>🏆</div>
                <div className="w-4 h-4 bg-yellow-500 rounded animate-dot-pulse" style={{animationDelay: '1.3s'}}>💡</div>
              </div> 
            </div>*/}

            {/* Progress bars simulation
            <div className="absolute bottom-4 left-4 opacity-50">
              <div className="space-y-1">
                <div className="w-16 h-1 bg-gray-300 rounded">
                  <div className="w-12 h-full bg-blue-500 rounded animate-rocket-trails"></div>
                </div>
                <div className="w-20 h-1 bg-gray-300 rounded">
                  <div className="w-16 h-full bg-green-500 rounded animate-rocket-trails" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="w-14 h-1 bg-gray-300 rounded">
                  <div className="w-10 h-full bg-purple-500 rounded animate-rocket-trails" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section - Fixed height */}
      <div className="bg-gradient-to-r from-[#799EFF] to-[#799EFF99] animate-gradient-shift rounded-3xl p-4 border-2 border-[#CB9D73] h-[18vh] sm:h-[125px] flex flex-col justify-center mx-4 mb-4 animate-slideUp" style={{animationDelay: '1.2s'}}>
        {/* Navigation Dots with enhanced animation */}
        <div className="flex justify-center gap-2 mb-3">
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.2s'}} />
          <div className="w-6 h-2.5 bg-white rounded-full shadow-sm animate-dot-pulse" style={{animationDelay: '0.4s'}} />
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" style={{animationDelay: '0.6s'}} />
        </div>

        {/* Skip and Get Started Button Container */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="text-white text-[clamp(0.9rem,3.5vw,1.1rem)] font-semibold font-poppins hover:text-white/80 transition-all duration-300 hover:scale-105 animate-button-hover"
          >
            Skip
          </button>

          {/* Enhanced Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="bg-white text-[#7551FF] border-2 border-white text-[clamp(0.9rem,3.5vw,1rem)] font-bold font-poppins shadow-lg px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 animate-button-hover relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:animate-none">Get Started</span>
            
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen3;
