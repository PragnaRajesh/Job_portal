import React from 'react';

const HRScoreProgress = ({ score, maxScore = 900, className = "" }) => {
  const percentage = Math.min((score / maxScore) * 100, 100);
  
  // Generate unique IDs for filters to avoid conflicts
  const uniqueId = React.useMemo(() => Math.random().toString(36).substr(2, 9), []);
  const filter0Id = `filter0_${uniqueId}`;
  const filter1Id = `filter1_${uniqueId}`;
  
  // Calculate the circumference for the progress circle
  const radius = 4.71273; // Inner circle radius from SVG
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <svg width="78" height="72" viewBox="0 0 78 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id={filter0Id} x="0.137537" y="0.809086" width="77.2884" height="77.2884" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="3.77018"/>
              <feGaussianBlur stdDeviation="14.6095"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_879_691"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_879_691" result="shape"/>
            </filter>
            <filter id={filter1Id} x="4.85043" y="5.52198" width="67.8636" height="67.8636" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="3.77018"/>
              <feGaussianBlur stdDeviation="14.6095"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_879_691"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_879_691" result="shape"/>
            </filter>
          </defs>
          
          {/* Outer white circle with shadow */}
          <g filter={`url(#${filter0Id})`}>
            <circle cx="38.7819" cy="35.6833" r="9.42545" fill="white"/>
          </g>
          
          {/* Background circle for progress track */}
          <circle 
            cx="38.7821" 
            cy="35.6834" 
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1.5"
          />
          
          {/* Progress circle */}
          <circle 
            cx="38.7821" 
            cy="35.6834" 
            r={radius}
            fill="none"
            stroke="#074799"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 38.7821 35.6834)"
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out'
            }}
          />
          
          {/* Center dot */}
          <circle cx="38.7821" cy="35.6834" r="1.5" fill="#074799"/>
        </svg>
        
        {/* Score text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-gray-700">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
      
      {/* Score details */}
      <div className="mt-2 text-center">
        <div className="text-sm font-semibold text-gray-800">
          {score}/{maxScore}
        </div>
        <div className="text-xs text-gray-600">
          HR Score
        </div>
      </div>
    </div>
  );
};

export default HRScoreProgress;