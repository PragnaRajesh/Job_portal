import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';

export const useBackButton = (customHandler = null, preventAppClosure = true) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let backButtonListener = null;

    const handleBackButton = (event) => {
      // Use custom handler if provided
      if (customHandler) {
        customHandler(event);
        return;
      }

      // Default back button behavior
      const currentPath = location.pathname;
      
      // Define specific navigation logic for key paths
      if (currentPath === '/' || currentPath === '/home') {
        // On main screens, prevent going back to avoid app closure
        if (preventAppClosure && Capacitor.isNativePlatform()) {
          // On mobile, stay on current screen
          return;
        }
      } else if (currentPath === '/onboarding1') {
        navigate('/');
      } else if (currentPath === '/onboarding2') {
        navigate('/onboarding1');
      } else if (currentPath === '/onboarding3') {
        navigate('/onboarding2');
      } else if (currentPath === '/onboarding4') {
        navigate('/onboarding3');
      } else if (currentPath.startsWith('/signup') || currentPath.startsWith('/login')) {
        navigate('/');
      } else if (currentPath.startsWith('/profile/')) {
        navigate('/signup1');
      } else {
        // Default behavior - go back if there's history
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate('/home');
        }
      }
    };

    const setupBackButtonHandling = async () => {
      if (Capacitor.isNativePlatform()) {
        // For Capacitor apps (iOS/Android)
        try {
          const { App } = await import('@capacitor/app');
          backButtonListener = await App.addListener('backButton', handleBackButton);
        } catch (error) {
          console.warn('Failed to set up Capacitor back button listener:', error);
          // Fallback to web handling
          setupWebBackButtonHandling();
        }
      } else {
        // For web browsers
        setupWebBackButtonHandling();
      }
    };

    const setupWebBackButtonHandling = () => {
      const handlePopState = (event) => {
        // Prevent default browser back behavior for specific paths
        if (preventAppClosure && (location.pathname === '/' || location.pathname === '/home')) {
          event.preventDefault();
          window.history.pushState(null, '', window.location.href);
          return;
        }
        handleBackButton(event);
      };

      // Add initial history entry to prevent app closure on main screens
      if (preventAppClosure && (location.pathname === '/' || location.pathname === '/home')) {
        window.history.pushState(null, '', window.location.href);
      }

      window.addEventListener('popstate', handlePopState);
      
      // Cleanup function for web
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    };

    setupBackButtonHandling();

    // Cleanup function
    return () => {
      if (backButtonListener && typeof backButtonListener.remove === 'function') {
        backButtonListener.remove();
      }
    };
  }, [navigate, location, customHandler, preventAppClosure]);
};

export default useBackButton;
