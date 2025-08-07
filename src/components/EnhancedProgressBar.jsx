import React, { useState, useEffect } from 'react';

const EnhancedProgressBar = ({ currentStep = 1, totalSteps = 7 }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  
  // Define the 7 steps with 3D emojis and labels
  const steps = [
    { emoji: '👤', label: 'Create Profile', id: 'profile' },
    { emoji: '🗂️', label: 'Basic Details', id: 'details' },
    { emoji: '🎓', label: 'Education', id: 'education' },
    { emoji: '💼', label: 'Preferred Job Type', id: 'jobtype' },
    { emoji: '🧳', label: 'Experience', id: 'experience' },
    { emoji: '📍', label: 'Location', id: 'location' },
    { emoji: '📄', label: 'Resume', id: 'resume' }
  ];

  useEffect(() => {
    // Animate progress bar fill with smooth transition
    const targetProgress = Math.max(0, ((currentStep - 1) / (totalSteps - 1)) * 100);
    const duration = 1500;
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
  }, [currentStep, totalSteps, animatedProgress]);

  useEffect(() => {
    // Staggered step visibility animation
    const timer = setTimeout(() => {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => new Set([...prev, index]));
        }, index * 120);
      });
    }, 300);

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
      transform transition-all duration-700 ease-out
      ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-90'}
    `;

    return baseClasses;
  };

  const getEmojiClasses = (status) => {
    const baseClasses = `
      relative text-2xl sm:text-3xl md:text-4xl
      w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18
      flex items-center justify-center rounded-full
      transition-all duration-500 ease-out
      filter drop-shadow-lg hover:drop-shadow-2xl
      transform-gpu
    `;

    switch (status) {
      case 'completed':
        return `${baseClasses}
          bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600
          border-3 border-emerald-500 shadow-2xl
          hover:scale-110 hover:shadow-emerald-500/50
          animate-completed-bounce
        `;
      case 'active':
        return `${baseClasses}
          bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600
          border-3 border-blue-500 shadow-2xl shadow-blue-500/40
          hover:scale-115 hover:shadow-blue-500/60
          animate-active-pulse
          before:absolute before:inset-0 before:rounded-full 
          before:bg-gradient-to-br before:from-blue-300 before:to-purple-400 
          before:opacity-40 before:animate-ping before:scale-110
        `;
      default:
        return `${baseClasses}
          bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300
          border-3 border-gray-300 shadow-lg
          group-hover:scale-105 group-hover:shadow-xl
          group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-indigo-200
          group-hover:border-blue-300 group-hover:shadow-blue-200/50
        `;
    }
  };

  const getLabelClasses = (status) => {
    const baseClasses = `
      mt-2 text-center transition-all duration-500 ease-out
      text-xs sm:text-sm md:text-base font-medium px-1 leading-tight
    `;

    switch (status) {
      case 'completed':
        return `${baseClasses} text-emerald-600 font-bold`;
      case 'active':
        return `${baseClasses} text-blue-600 font-bold animate-text-pulse`;
      default:
        return `${baseClasses} text-gray-500 group-hover:text-blue-500`;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4">
      {/* Main Progress Container */}
      <div className="relative">
        {/* Background Progress Line */}
        <div className="absolute top-7 sm:top-8 md:top-9 left-7 right-7 h-3 sm:h-4 bg-gradient-to-r from-gray-200 via-gray-250 to-gray-300 rounded-full shadow-inner border border-gray-300">
          {/* Animated Progress Fill */}
          <div 
            className="relative h-full bg-gradient-to-r from-purple-500 via-blue-500 via-indigo-500 to-purple-600 rounded-full transition-all duration-500 ease-out shadow-2xl overflow-hidden border border-purple-400"
            style={{ 
              width: `${animatedProgress}%`,
              boxShadow: '0 0 25px rgba(99, 102, 241, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
            }}
          >
            {/* White stripe animation flowing through the filled portion */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-stripe-slide"></div>
            
            {/* Additional gradient overlay for 3D effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 rounded-full"></div>
            
            {/* Sparkle effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse opacity-70"></div>
          </div>
          
          {/* Progress indicator dot */}
          {animatedProgress > 0 && (
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-2xl border-3 border-blue-500 transition-all duration-500 ease-out z-10"
              style={{ 
                left: `calc(${animatedProgress}% - 10px)`,
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Step Icons and Labels */}
        <div className="relative flex justify-between items-start">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            
            return (
              <div key={step.id} className={getStepClasses(status, index)}>
                {/* Step Icon with 3D Emoji */}
                <div className={getEmojiClasses(status)}>
                  {status === 'completed' ? (
                    <div className="text-white text-xl sm:text-2xl font-bold animate-check-bounce">✓</div>
                  ) : (
                    <span className="relative z-10 transform-gpu animate-emoji-3d">{step.emoji}</span>
                  )}
                  
                  {/* Active step additional ring effects */}
                  {status === 'active' && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 animate-ping scale-110"></div>
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 opacity-20 animate-slow-pulse scale-125"></div>
                    </>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Step Label */}
                <div className={getLabelClasses(status)}>
                  <div className="text-center">
                    {step.label}
                  </div>
                </div>

                {/* Step Number Badge */}
                <div className={`
                  absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full 
                  text-xs sm:text-sm font-bold flex items-center justify-center
                  transition-all duration-500 transform-gpu border-2 border-white
                  ${status === 'completed' 
                    ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl shadow-emerald-500/50' 
                    : status === 'active'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/50 animate-badge-pulse'
                    : 'bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-lg'
                  }
                `}>
                  {index + 1}
                </div>

                {/* Interactive hover overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110 blur-sm"></div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Progress Stats with enhanced styling */}
      <div className="flex justify-between items-center mt-6 sm:mt-8 text-sm sm:text-base bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-4 border border-blue-100 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full shadow-lg animate-pulse"></div>
          <span className="text-gray-700 font-semibold">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        
        <div className="text-right">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-xl sm:text-2xl">
            {Math.round((currentStep / totalSteps) * 100)}%
          </div>
          <div className="text-gray-500 text-xs sm:text-sm font-medium">Complete</div>
        </div>
      </div>

      {/* Motivational Message with enhanced styling */}
      <div className="text-center mt-4 p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-200 shadow-lg">
        <p className="text-sm sm:text-base text-gray-700 font-medium">
          {currentStep === 1 && "🚀 Let's get started with creating your profile!"}
          {currentStep === 2 && "✨ Perfect! Now let's add your basic details."}
          {currentStep === 3 && "📚 Great progress! Time to add your education background."}
          {currentStep === 4 && "💼 Excellent! What type of job are you looking for?"}
          {currentStep === 5 && "🏆 Almost there! Tell us about your experience."}
          {currentStep === 6 && "🌍 Fantastic! Where would you like to work?"}
          {currentStep === 7 && "📄 Final step! Let's upload your resume and complete your profile."}
        </p>
      </div>
    </div>
  );
};

export default EnhancedProgressBar;
