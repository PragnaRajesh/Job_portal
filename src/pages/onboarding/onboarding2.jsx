import React from 'react';
import { useNavigate } from 'react-router-dom';
import rocketImage from '../../assets/onboarding2.png';
import '../../styles/onboarding-animations.css';

const OnboardingScreen2 = ({ onNext, onSkip }) => {
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
      navigate('/onboarding3');
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col relative overflow-hidden pt-safe pb-safe animate-fade-scale-in">
      {/* Floating Background Elements */}
      <div className="floating-bubble" style={{animationDelay: '-1s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-4s'}}></div>
      <div className="floating-bubble" style={{animationDelay: '-7s'}}></div>

      {/* Main Content - Takes up most space */}
      <div className="flex-1 flex flex-col px-4 pt-4">
        
        {/* Top Content Box - Fixed height with rocket launch scene */}
        <div className="relative bg-gradient-to-br from-[#7551FF] to-[#7551FF99] animate-gradient-shift rounded-3xl p-4 border-2 border-[#CB9D73] shadow-lg h-[65vh] flex flex-col justify-start overflow-hidden">
          
          {/* Animated stars/particles background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-16 right-20 w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-24 left-20 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-32 left-8 w-1 h-1 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-40 right-12 w-1.5 h-1.5 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '2.5s'}}></div>
            
            {/* Rocket trail effect */}
            <div className="absolute bottom-0 right-8 w-16 h-32 opacity-40">
              <div className="w-full h-full bg-gradient-to-t from-orange-300 via-yellow-200 to-transparent rounded-full animate-rocket-trails"></div>
            </div>
            <div className="absolute bottom-4 right-12 w-8 h-20 opacity-30">
              <div className="w-full h-full bg-gradient-to-t from-red-300 via-orange-200 to-transparent rounded-full animate-rocket-trails" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

          {/* Text Content with staggered animation */}
          <div className="relative z-10 mb-4">
            <h1 className="font-montserrat font-bold text-[clamp(1.3rem,5.5vw,2rem)] leading-tight text-gray-900 mb-3">
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.2s'}}>
                Track your<br />
              </span>
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.4s'}}>
                application on<br />
              </span>
              <span className="inline-block animate-slideUp" style={{animationDelay: '0.6s'}}>
                real time!
              </span>
            </h1>

            <p className="font-poppins text-[clamp(0.8rem,3.2vw,1rem)] leading-relaxed text-gray-700 max-w-[250px] animate-slideUp" style={{animationDelay: '0.8s'}}>
              Our team of professionals will guide you through the process and help
              you find the best career for your goals. Get started today...
            </p>
          </div>

          {/* Rocket Image with launch animation */}
          <div className="absolute bottom-0 right-0 w-[clamp(150px,40vw,220px)] h-[clamp(150px,40vw,220px)] translate-x-4 translate-y-4">
            <img
              src={rocketImage}
              alt="Rocket Illustration"
              className="w-full h-full object-contain animate-rocket-launch"
            />
            
            {/* Speed lines effect */}
            <div className="absolute -bottom-4 -right-4 opacity-50">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-gray-400 rounded animate-rocket-trails" style={{animationDelay: '0.2s'}}></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-300 rounded mt-1 animate-rocket-trails" style={{animationDelay: '0.4s'}}></div>
              <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-gray-400 rounded mt-1 animate-rocket-trails" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>

          {/* Progress tracking elements */}
          <div className="absolute top-4 right-4 opacity-60">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-dot-pulse"></div>
              <div className="w-8 h-0.5 bg-white rounded animate-rocket-trails"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-dot-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section - Fixed height */}
      <div className="bg-gradient-to-r from-[#9E85FF] to-[#7551FF] animate-gradient-shift rounded-3xl p-4 border-2 border-[#CB9D73] h-[18vh] flex flex-col justify-center mx-4 mb-4 animate-slideUp" style={{animationDelay: '1s'}}>
        {/* Navigation Dots with enhanced animation */}
        <div className="flex justify-center gap-2 mb-3">
          <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-dot-pulse" />
          <div className="w-6 h-2.5 bg-white rounded-full shadow-sm animate-dot-pulse" style={{animationDelay: '0.2s'}} />
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

export default OnboardingScreen2;
