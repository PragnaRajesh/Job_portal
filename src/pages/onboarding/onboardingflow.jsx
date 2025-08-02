import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnboardingScreen1 from './onboarding1';
import OnboardingScreen2 from './onboarding2';
import OnboardingScreen3 from './onboarding3';
import OnboardingScreen4 from './onboarding4';

const OnboardingFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current screen based on route
  const getCurrentScreen = () => {
    switch (location.pathname) {
      case '/onboarding1':
        return 1;
      case '/onboarding2':
        return 2;
      case '/onboarding3':
        return 3;
      case '/onboarding4':
        return 4;
      case '/':
      default:
        return 1;
    }
  };

  const currentScreen = getCurrentScreen();

  // Redirect to onboarding1 if on root path
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/onboarding1', { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleNext = () => {
    if (currentScreen < 4) {
      navigate(`/onboarding${currentScreen + 1}`);
    } else {
      navigate('/signup1');
    }
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      navigate(`/onboarding${currentScreen - 1}`);
    }
  };

  const handleSkip = () => {
    navigate('/signup1');
  };

  const handleSignUp = () => {
    navigate('/signup1');
  };

  const handleLogIn = () => {
    navigate('/login');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />;
      case 2:
        return <OnboardingScreen2 onNext={handleNext} onSkip={handleSkip} onBack={handleBack} />;
      case 3:
        return <OnboardingScreen3 onNext={handleNext} onSkip={handleSkip} onBack={handleBack} />;
      case 4:
        return <OnboardingScreen4 onSignUp={handleSignUp} onLogIn={handleLogIn} onBack={handleBack} />;
      default:
        return <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderScreen()}
    </div>
  );
};

export default OnboardingFlow;
