import React from 'react';
import { useNavigate } from 'react-router-dom';
import sadBoyImage from '../../assets/onboarding1.png';
import questionIcon from '../../assets/question-bubble.png';

const OnboardingScreen1 = ({ onNext, onSkip }) => {
  const navigate = useNavigate();

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      navigate('/signup1');
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      navigate('/onboarding2');
    }
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col relative overflow-hidden">

      {/* Top Text Box - positioned exactly as in reference */}
      <div className="absolute top-8 left-4 right-4 bg-gradient-to-br from-[#7551FF] to-[#7551FF99] rounded-3xl p-6 border-2 border-[#CB9D73] shadow-lg z-10" style={{height: '11rem'}}>
        <h1 className="font-montserrat font-semibold text-2xl leading-7 tracking-normal text-black w-full text-left">
          Worried about<br />
          job feedback!<br />
          No hassle get it<br />
          here..
        </h1>

        {/* Question Icon - positioned as in reference */}
        <div className="absolute top-3 right-3 w-14 h-10 z-20">
          <img
            src={questionIcon}
            alt="Question Bubble"
            className="w-full h-full object-contain transform rotate-[15deg]"
          />
        </div>
      </div>

      {/* Character Image - positioned to start from text box area as in reference */}
      <div className="absolute top-24 left-0 right-0 z-20 pointer-events-none" style={{height: '26rem'}}>
        <img
          src={sadBoyImage}
          alt="Worried Character"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* Text below Character - positioned exactly as in reference */}
      <div className="absolute left-6 z-30" style={{bottom: '10.5rem'}}>
        <p className="font-poppins text-base text-gray-800 leading-5 font-normal">
          Secure your dream job<br />
          with our trusted<br />
          companies..
        </p>
      </div>

      {/* Bottom Navigation - styled exactly as in reference */}
      <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#9E85FF] to-[#7551FF] rounded-3xl border-2 border-[#CB9D73] p-4 z-40" style={{height: '8.5rem'}}>
        
        {/* Skip Button */}
        <div className="flex justify-between items-start mb-6">
          <button
            onClick={handleSkip}
            className="text-white text-base font-semibold font-poppins"
          >
            Skip
          </button>
          
          {/* Circular Next Button */}
          <div className="w-14 h-14">
            <div className="flex items-center justify-center rounded-full w-full h-full border-2 border-white bg-white/10">
              <button
                onClick={handleNext}
                className="flex items-center justify-center rounded-full shadow-lg w-10 h-10 bg-white hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  className="w-5 h-5"
                  fill="none"
                  stroke="#9E85FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dots - positioned at bottom as in reference */}
        <div className="flex gap-2">
          <div className="w-6 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/60 rounded-full" />
          <div className="w-2 h-2 bg-white/60 rounded-full" />
          <div className="w-2 h-2 bg-white/60 rounded-full" />
        </div>
      </div>

    </div>
  );
};

export default OnboardingScreen1;
