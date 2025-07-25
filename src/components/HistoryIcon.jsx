import React from 'react';

const HistoryIcon = ({ size = 20, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size * 0.777} // Maintain aspect ratio (115/148)
      viewBox="0 0 148 115" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_879_679)">
        <path d="M52 30.6897L89.9964 30.6897C92.4365 30.6897 94.4145 32.4395 94.4145 34.5979L94.4145 54.1384C94.4145 56.2968 92.4365 58.0465 89.9964 58.0465L73.2073 58.0465L56.4182 58.0465C53.9781 58.0465 52 56.2968 52 54.1384L52 30.6897Z" fill="#2869FE"/>
        <path d="M52 36.5519L52 52.5752C52 54.7336 53.9781 56.4833 56.4182 56.4833L89.9964 56.4833C92.4365 56.4833 94.4145 54.7336 94.4145 52.5752L94.4145 36.1611C94.4145 34.0027 92.4365 32.253 89.9964 32.253L71.44 32.253L71.44 34.207C71.44 35.5021 70.2531 36.5519 68.7891 36.5519L52 36.5519Z" fill="url(#paint0_linear_879_679)"/>
        <path d="M52 29.1265C52 27.3998 53.5825 26 55.5345 26L67.9055 26C69.8575 26 71.44 27.3998 71.44 29.1265L71.44 30.6897L52 30.6897L52 29.1265Z" fill="#2869FE"/>
      </g>
      <defs>
        <filter id="filter0_d_879_679" x="-0.782543" y="-23.0124" width="147.979" height="137.612" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3.77018"/>
          <feGaussianBlur stdDeviation="26.3913"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_879_679"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_879_679" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_879_679" x1="52" y1="26" x2="104.263" y2="61.4014" gradientUnits="userSpaceOnUse">
          <stop stopColor="#81A7FF"/>
          <stop offset="1" stopColor="#306FFF"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HistoryIcon;