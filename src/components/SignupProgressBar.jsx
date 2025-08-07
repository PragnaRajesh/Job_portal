import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const SignupProgressBar = ({ currentStep, totalSteps = 3, labels = [] }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  useEffect(() => {
    // Animate progress bar fill
    const targetProgress = (currentStep / totalSteps) * 100;
    const animationDuration = 800;
    const steps = 60;
    const increment = (targetProgress - animatedProgress) / steps;
    
    let current = animatedProgress;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetProgress) {
        current = targetProgress;
        clearInterval(interval);
      }
      setAnimatedProgress(current);
    }, animationDuration / steps);
    
    return () => clearInterval(interval);
  }, [currentStep, totalSteps, animatedProgress]);

  const getStepStatus = (stepIndex) => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'upcoming';
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      {/* Progress Bar Background */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
        {/* Animated Progress Fill */}
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full transition-all duration-300 ease-out"
          style={{ 
            width: `${animatedProgress}%`,
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Progress sparkle effect */}
        {animatedProgress > 0 && (
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-blue-500 transition-all duration-300 ease-out"
            style={{ 
              left: `calc(${animatedProgress}% - 6px)`,
              animation: 'pulse 2s infinite'
            }}
          >
            <div className="w-1 h-1 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        )}
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center relative">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const status = getStepStatus(stepNumber);
          
          return (
            <div key={index} className="flex flex-col items-center relative z-10">
              {/* Step Circle */}
              <div 
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  status === 'completed' 
                    ? 'bg-blue-600 border-blue-600 text-white scale-110 shadow-lg' 
                    : status === 'active'
                    ? 'bg-white border-blue-600 text-blue-600 scale-105 shadow-md animate-pulse'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
              >
                {status === 'completed' ? (
                  <Check size={16} className="animate-bounce" />
                ) : (
                  <span className="text-sm font-bold">{stepNumber}</span>
                )}
              </div>
              
              {/* Step Label */}
              {labels[index] && (
                <div className={`mt-2 text-xs font-medium text-center transition-colors duration-300 ${
                  status === 'completed' || status === 'active' 
                    ? 'text-blue-600' 
                    : 'text-gray-400'
                }`}>
                  {labels[index]}
                </div>
              )}
              
              {/* Active step glow effect */}
              {status === 'active' && (
                <div className="absolute inset-0 w-10 h-10 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
              )}
            </div>
          );
        })}
        
        {/* Connecting Line Behind Circles */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200 -z-10"></div>
        <div 
          className="absolute top-5 left-5 h-0.5 bg-blue-600 -z-10 transition-all duration-500 ease-out"
          style={{ width: `calc(${Math.max(0, (currentStep - 1) / (totalSteps - 1)) * 100}% - 40px + 20px)` }}
        ></div>
      </div>
      
      {/* Progress Percentage */}
      <div className="text-center mt-4">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {Math.round(animatedProgress)}% Complete
        </span>
      </div>
    </div>
  );
};

export default SignupProgressBar;
