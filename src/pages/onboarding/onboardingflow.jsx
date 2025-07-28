import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingScreen1 from './onboarding1';
import OnboardingScreen2 from './onboarding2';
import OnboardingScreen3 from './onboarding3';
import OnboardingScreen4 from './onboarding4';

const OnboardingFlow = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentScreen < 4) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigate('/signup1');
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
    <div className="h-screen flex flex-col items-stretch justify-between">
      {renderScreen()}
    </div>
  );
};

export default OnboardingFlow;
