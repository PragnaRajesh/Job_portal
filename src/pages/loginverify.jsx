import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import OTPInput from '../components/otpinput';

const LoginVerify = () => {
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(false);

  const handleOTPComplete = (otp) => {
    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      if (otp === '1234') { // Mock verification
        navigate('/home');
      } else {
        alert('Invalid OTP. Please try again.');
        setIsVerifying(false);
      }
    }, 1500);
  };

  const handleResendOTP = () => {
    alert('OTP resent to your phone number');
  };

  return (
    <div className="min-h-screen bg-white p-6 sm:p-8 md:p-12 lg:max-w-md lg:mx-auto flex flex-col pt-safe pb-safe">
      <div className="flex-1">
        <button onClick={() => navigate(-1)} className="mb-4 sm:mb-6">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Verify Phone Number</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            We've sent a verification code to<br />
            <span className="font-semibold">+91 ****-****-90</span>
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <OTPInput 
            onComplete={handleOTPComplete}
            onResend={handleResendOTP}
          />
        </div>

        <div className="text-center text-sm sm:text-base text-gray-500">
          <p>Didn't receive the code?</p>
          <button 
            onClick={handleResendOTP}
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Resend OTP
          </button>
        </div>
      </div>

      <button
        disabled={isVerifying}
        className={`w-full py-4 sm:py-5 mt-8 sm:mt-12 rounded-full text-white font-semibold text-base sm:text-lg transition-colors ${
          isVerifying 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-800 hover:bg-blue-900'
        }`}
      >
        {isVerifying ? 'Verifying...' : 'Verify'}
      </button>
    </div>
  );
};

export default LoginVerify;
