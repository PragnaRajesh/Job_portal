import React, { useState, useEffect } from 'react';

const SignupProgressBar = ({ currentStep = 1, totalSteps = 7 }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  
  // Define the 7 steps with emojis and labels
  const steps = [
    { emoji: '👤', label: 'Create Profile', id: 'profile' },
    { emoji: '🗂️', label: 'Basic Details', id: 'details' },
    { emoji: '🎓', label: 'Education', id: 'education' },
    { emoji: '💼', label: 'Job Type', id: 'jobtype' },
    { emoji: '🧳', label: 'Experience', id: 'experience' },
    { emoji: '📍', label: 'Location', id: 'location' },
    { emoji: '📄', label: 'Resume', id: 'resume' }
  ];

  useEffect(() => {
    // Animate progress bar fill with smooth transition
    const targetProgress = Math.max(0, ((currentStep - 1) / (totalSteps - 1)) * 100);
    const duration = 1200;
    const startProgress = animatedProgress;
    const progressDiff = targetProgress - startProgress;
    const startTime = Date.now();

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentProgress = startProgress + (progressDiff * easeOut);
      
      setAnimatedProgress(currentProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);
  }, [currentStep, totalSteps]);

  useEffect(() => {
    // Staggered step visibility animation
    const timer = setTimeout(() => {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => new Set([...prev, index]));
        }, index * 100);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const getStepStatus = (stepIndex) => {
    const stepNumber = stepIndex + 1;
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'active';
    return 'upcoming';
  };

  const getStepClasses = (status, stepIndex) => {
    const isVisible = visibleSteps.has(stepIndex);
    
    const baseClasses = `
      relative flex flex-col items-center cursor-pointer group
      transform transition-all duration-500 ease-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
    `;

    return baseClasses;
  };

  const getEmojiClasses = (status) => {
    switch (status) {
      case 'completed':
        return `
          text-2xl sm:text-3xl transform transition-all duration-300 scale-110
          bg-gradient-to-br from-green-400 to-green-600 rounded-full w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center shadow-lg border-2 border-green-500
          hover:scale-125 hover:shadow-xl
        `;
      case 'active':
        return `
          text-2xl sm:text-3xl transform transition-all duration-300 scale-105
          bg-gradient-to-br from-blue-400 to-blue-600 rounded-full w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center shadow-lg border-2 border-blue-500
          animate-bounce hover:scale-125 hover:shadow-xl
          before:absolute before:inset-0 before:rounded-full before:bg-blue-400 before:opacity-30 before:animate-ping
        `;
      default:
        return `
          text-2xl sm:text-3xl transform transition-all duration-300
          bg-gradient-to-br from-gray-200 to-gray-300 rounded-full w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center shadow-md border-2 border-gray-300
          group-hover:scale-110 group-hover:shadow-lg group-hover:border-blue-300
          group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-blue-200
        `;
    }
  };

  const getLabelClasses = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 font-semibold';
      case 'active':
        return 'text-blue-600 font-bold animate-pulse';
      default:
        return 'text-gray-500 group-hover:text-blue-500';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-8 px-4">
      {/* Main Progress Container */}
      <div className="relative">
        {/* Background Progress Line */}
        <div className="absolute top-6 sm:top-7 left-6 right-6 h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-inner">
          {/* Animated Progress Fill */}
          <div 
            className="relative h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out shadow-lg overflow-hidden"
            style={{ 
              width: `${animatedProgress}%`,
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
            }}
          >
            {/* White stripe animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-stripe-slide"></div>
            
            {/* Progress glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
          
          {/* Progress indicator dot */}
          {animatedProgress > 0 && (
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-blue-500 transition-all duration-300 ease-out animate-pulse"
              style={{ 
                left: `calc(${animatedProgress}% - 8px)`,
              }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          )}
        </div>

        {/* Step Icons and Labels */}
        <div className="relative flex justify-between items-start">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            
            return (
              <div key={step.id} className={getStepClasses(status, index)}>
                {/* Step Icon with Emoji */}
                <div className={getEmojiClasses(status)}>
                  {status === 'completed' ? (
                    <div className="text-white text-lg font-bold animate-bounce">✓</div>
                  ) : (
                    <span className="relative z-10 filter drop-shadow-sm">{step.emoji}</span>
                  )}
                  
                  {/* Active step additional effects */}
                  {status === 'active' && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 animate-pulse"></div>
                    </>
                  )}
                </div>

                {/* Step Label */}
                <div className={`mt-2 text-center transition-all duration-300 ${getLabelClasses(status)}`}>
                  <div className="text-xs sm:text-sm font-medium px-2 leading-tight">
                    {step.label}
                  </div>
                </div>

                {/* Step Number Badge */}
                <div className={`
                  absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center
                  transition-all duration-300
                  ${status === 'completed' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : status === 'active'
                    ? 'bg-blue-500 text-white shadow-lg animate-pulse'
                    : 'bg-gray-400 text-white shadow-sm'
                  }
                `}>
                  {index + 1}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-full bg-blue-100 opacity-0 group-hover:opacity-20 transition-all duration-300 scale-110"></div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Progress Stats */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <span className="text-gray-600 font-medium">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        
        <div className="text-right">
          <div className="text-blue-600 font-bold text-lg">
            {Math.round((currentStep / totalSteps) * 100)}%
          </div>
          <div className="text-gray-500 text-xs">Complete</div>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="text-center mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <p className="text-sm text-gray-700">
          {currentStep === 1 && "🚀 Let's get started with your profile!"}
          {currentStep === 2 && "✨ Great! Now let's add your basic details."}
          {currentStep === 3 && "📚 Time to showcase your education background."}
          {currentStep === 4 && "💼 What type of job are you looking for?"}
          {currentStep === 5 && "🏆 Tell us about your experience."}
          {currentStep === 6 && "🌍 Where would you like to work?"}
          {currentStep === 7 && "📄 Almost done! Let's upload your resume."}
        </p>
      </div>
    </div>
  );
};

export default SignupProgressBar;
