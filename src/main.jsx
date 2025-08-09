import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import './styles/global.css';

function ScaledApp() {
  useEffect(() => {
    function scaleWrapper() {
      const baseHeight = 844;
      const wrapper = document.querySelector('.scaled-wrapper');
      if (!wrapper) return;

      const scaleFactor = window.innerHeight / baseHeight;

      wrapper.style.transform = `scale(${scaleFactor})`;
      wrapper.style.height = `${baseHeight / scaleFactor}px`;
    }

    window.addEventListener('resize', scaleWrapper);
    scaleWrapper();

    return () => {
      window.removeEventListener('resize', scaleWrapper);
    };
  }, []);

  return (
    <div className="scaled-wrapper">
      <App />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScaledApp />
  </React.StrictMode>
);
