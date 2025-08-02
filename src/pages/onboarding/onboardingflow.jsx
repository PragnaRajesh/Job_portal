import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingScreen1 from './onboarding1';
import OnboardingScreen2 from './onboarding2';
import OnboardingScreen3 from './onboarding3';
import OnboardingScreen4 from './onboarding4';

const OnboardingFlow = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const navigate = useNavigate();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleNext = () => {
    if (currentScreen < 4) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigate('/signup1');
    }
  };

  const handlePrevious = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  // Handle hardware back button for mobile
  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();
      if (currentScreen > 1) {
        setCurrentScreen(currentScreen - 1);
      }
      // If on first screen, do nothing (prevent app closure)
    };

    // Add history entry to prevent app closure
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [currentScreen]);

  const handleSkip = () => {
    navigate('/signup1');
  };

  const handleSignUp = () => {
    navigate('/signup1');
  };

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left - go to next screen
      handleNext();
    } else {
      // Swiped right - go to previous screen
      handlePrevious();
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />;
      case 2:
        return <OnboardingScreen2 onNext={handleNext} onSkip={handleSkip} />;
      case 3:
        return <OnboardingScreen3 onNext={handleNext} onSkip={handleSkip} />;
      case 4:
        return <OnboardingScreen4 onSignUp={handleSignUp} onLogIn={handleLogIn} />;
      default:
        return <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />;
    }
  };

  return (
    <div 
      className="min-h-screen w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {renderScreen()}
    </div>
  );
};

export default OnboardingFlow;
