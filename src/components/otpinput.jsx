import React, { useState, useRef, useEffect } from 'react';

const OTPInput = ({ onComplete, onResend }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on first input when component mounts
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/\D/g, '').split('').slice(0, 4);
    
    const newOtp = [...otp];
    digits.forEach((digit, index) => {
      if (index < 4) {
        newOtp[index] = digit;
      }
    });
    
    setOtp(newOtp);
    
    // Focus on the next empty input or the last one
    const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
    const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
    
    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 sm:space-y-8">
      <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => inputRefs.current[index] = el}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
          />
        ))}
      </div>
      
      {onResend && (
        <button
          onClick={onResend}
          className="text-blue-600 text-sm sm:text-base md:text-lg font-medium hover:text-blue-800 transition-colors"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
};

export default OTPInput;
