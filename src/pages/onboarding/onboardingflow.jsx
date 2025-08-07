import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingScreen1 from './onboarding1';
import OnboardingScreen2 from './onboarding2';
import OnboardingScreen3 from './onboarding3';
import OnboardingScreen4 from './onboarding4';
import '../../styles/onboarding-animations.css';

const OnboardingFlow = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('');
  const navigate = useNavigate();

  // Check if user has already completed onboarding
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (hasCompletedOnboarding === 'true' && isAuthenticated === 'true') {
      navigate('/home', { replace: true });
    }
  }, [navigate]);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);

  const handleNext = () => {
    if (isTransitioning) return;
    
    if (currentScreen < 4) {
      setIsTransitioning(true);
      setTransitionDirection('next');
      
      // Delay screen change to allow exit animation
      setTimeout(() => {
        setCurrentScreen(currentScreen + 1);
        setTransitionDirection('');
        setIsTransitioning(false);
      }, 300);
    } else {
      // Final screen transition to signup
      setIsTransitioning(true);
      setTransitionDirection('final');
      
      setTimeout(() => {
        navigate('/signup1');
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    
    if (currentScreen > 1) {
      setIsTransitioning(true);
      setTransitionDirection('previous');
      
      // Delay screen change to allow exit animation
      setTimeout(() => {
        setCurrentScreen(currentScreen - 1);
        setTransitionDirection('');
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Enhanced hardware back button handling for mobile
  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();
      if (currentScreen > 1 && !isTransitioning) {
        handlePrevious();
      }
      // If on first screen, do nothing (prevent app closure)
    };

    // Add history entry to prevent app closure
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [currentScreen, isTransitioning]);

  const handleSkip = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTransitionDirection('skip');
    
    setTimeout(() => {
      navigate('/signup1');
    }, 400);
  };

  const handleSignUp = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTransitionDirection('signup');
    
    setTimeout(() => {
      navigate('/signup1');
    }, 400);
  };

  const handleLogIn = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTransitionDirection('login');
    
    setTimeout(() => {
      navigate('/login');
    }, 400);
  };

  // Enhanced touch handling with better swipe detection
  const handleTouchStart = (e) => {
    if (isTransitioning) return;
    
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (isTransitioning) return;
    
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (isTransitioning || !touchStartX.current || !touchEndX.current) return;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = Math.abs(touchStartY.current - touchEndY.current);
    const minSwipeDistance = 50;
    const maxVerticalDistance = 100; // Prevent accidental swipes during vertical scrolling

    // Only process horizontal swipes
    if (Math.abs(deltaX) < minSwipeDistance || deltaY > maxVerticalDistance) {
      // Reset values
      touchStartX.current = null;
      touchEndX.current = null;
      touchStartY.current = null;
      touchEndY.current = null;
      return;
    }

    if (deltaX > 0) {
      // Swiped left - go to next screen
      handleNext();
    } else {
      // Swiped right - go to previous screen
      handlePrevious();
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  };

  const getScreenClassName = () => {
    let baseClass = "min-h-screen w-full transition-all duration-300 ease-out";
    
    if (transitionDirection === 'next') {
      return `${baseClass} animate-slide-out-left`;
    } else if (transitionDirection === 'previous') {
      return `${baseClass} animate-slide-out-right`;
    } else if (transitionDirection === 'skip' || transitionDirection === 'final' || transitionDirection === 'signup' || transitionDirection === 'login') {
      return `${baseClass} animate-fade-scale-in opacity-0 scale-95`;
    }
    
    return `${baseClass} animate-slide-in-right`;
  };

  const renderScreen = () => {
    const screenProps = {
      onNext: handleNext,
      onSkip: handleSkip,
      onSignUp: handleSignUp,
      onLogIn: handleLogIn
    };

    switch (currentScreen) {
      case 1:
        return <OnboardingScreen1 {...screenProps} />;
      case 2:
        return <OnboardingScreen2 {...screenProps} />;
      case 3:
        return <OnboardingScreen3 {...screenProps} />;
      case 4:
        return <OnboardingScreen4 {...screenProps} />;
      default:
        return <OnboardingScreen1 {...screenProps} />;
    }
  };

  // Add keyboard navigation for web testing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return;
      
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevious();
          break;
        case 'Escape':
          e.preventDefault();
          handleSkip();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, isTransitioning]);

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Screen transition container */}
      <div className={getScreenClassName()}>
        {renderScreen()}
      </div>
      
      {/* Transition overlay for smooth screen changes */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 pointer-events-none animate-fade-scale-in" />
      )}
      
      {/* Screen progress indicator (hidden on mobile for cleaner look) */}
      <div className="fixed bottom-safe left-1/2 transform -translate-x-1/2 mb-4 z-40 hidden sm:block">
        <div className="bg-black/20 backdrop-blur-md rounded-full px-3 py-1">
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map((screen) => (
              <div
                key={screen}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  screen === currentScreen
                    ? 'bg-white scale-125'
                    : screen < currentScreen
                    ? 'bg-white/80'
                    : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Debug info for development (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black/80 text-white text-xs rounded px-2 py-1 z-50 hidden lg:block">
          Screen: {currentScreen}/4 | Transitioning: {isTransitioning ? 'Yes' : 'No'} | Direction: {transitionDirection || 'None'}
        </div>
      )}
    </div>
  );
};

export default OnboardingFlow;
