import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useBackButton = (customHandler = null, preventAppClosure = true) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBackButton = (event) => {
      // Prevent default behavior to avoid app closure
      if (preventAppClosure) {
        event.preventDefault();
        window.history.pushState(null, '', window.location.href);
      }

      // Use custom handler if provided
      if (customHandler) {
        customHandler(event);
        return;
      }

      // Default back button behavior
      const currentPath = location.pathname;
      
      if (currentPath === '/' || currentPath === '/home') {
        // On main screens, prevent going back to avoid app closure
        return;
      } else if (window.history.length > 1) {
        // Go back if there's history
        navigate(-1);
      } else {
        // Fallback to home if no history
        navigate('/home');
      }
    };

    // Add initial history entry to prevent app closure
    if (preventAppClosure) {
      window.history.pushState(null, '', window.location.href);
    }

    // Listen for back button events
    window.addEventListener('popstate', handleBackButton);
    
    // For Capacitor/Cordova apps
    document.addEventListener('backbutton', handleBackButton, false);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
      document.removeEventListener('backbutton', handleBackButton, false);
    };
  }, [navigate, location, customHandler, preventAppClosure]);
};

export default useBackButton;
