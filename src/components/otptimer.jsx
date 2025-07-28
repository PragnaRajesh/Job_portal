import React, { useState, useEffect } from 'react';

const OTPTimer = ({ initialTime = 30, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsActive(false);
            if (onComplete) onComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimeLeft(initialTime);
    setIsActive(true);
  };

  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-gray-800">
        {formatTime(timeLeft)}
      </div>
      
      <div className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        {isActive ? (
          <span>Resend OTP in {formatTime(timeLeft)}</span>
        ) : (
          <span className="text-red-500">OTP expired</span>
        )}
      </div>
      
      {!isActive && (
        <button
          onClick={resetTimer}
          className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
};

export default OTPTimer;
