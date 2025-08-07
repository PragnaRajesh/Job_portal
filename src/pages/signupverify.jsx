import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import OTPInput from '../components/otpinput';
import SignupProgressBar from '../components/SignupProgressBar';
import { useUser } from '../contexts/UserContext';
import '../styles/signup-animations.css';

const SignupVerify = () => {
  const navigate = useNavigate();
  const { user, updateSignupStep, login } = useUser();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Start resend timer
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOTPComplete = (otp) => {
    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      if (otp === '1234') { // Mock verification
        // Update signup step and set as authenticated
        updateSignupStep(2);
        login('mock-token', { isAuthenticated: true });

        // Show success animation before navigation
        setTimeout(() => {
          navigate('/signup2');
        }, 500);
      } else {
        alert('Invalid OTP. Please try again.');
        setIsVerifying(false);
      }
    }, 1500);
  };

  const handleResendOTP = () => {
    if (!canResend) return;

    setCanResend(false);
    setResendTimer(30);

    // Restart timer
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    alert('OTP resent to your phone number');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 sm:p-8 md:p-12 lg:max-w-md lg:mx-auto flex flex-col pt-safe pb-safe">
      <div className="flex-1">
        <button onClick={() => navigate(-1)} className="mb-4 sm:mb-6 p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" />
        </button>

        {/* Progress Bar */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <SignupProgressBar
            currentStep={2}
            totalSteps={3}
            labels={['Phone', 'Verify', 'Profile']}
          />
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Verify Phone Number</h2>
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4">
              We've sent a verification code to
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 inline-block">
              <p className="text-blue-700 font-semibold text-lg flex items-center">
                <span className="mr-2">📱</span>
                +91 {user.mobile ? `${user.mobile.slice(0, 2)}**-****-${user.mobile.slice(-2)}` : '****-****-90'}
              </p>
            </div>
          </div>
        </div>

        <div className={`mb-8 sm:mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <OTPInput
            onComplete={handleOTPComplete}
            onResend={handleResendOTP}
          />
        </div>

        <div className={`text-center text-sm sm:text-base text-gray-500 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="mb-3">Didn't receive the code?</p>
          <button
            onClick={handleResendOTP}
            disabled={!canResend}
            className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
              canResend
                ? 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            {canResend ? 'Resend OTP' : `Resend in ${resendTimer}s`}
          </button>
        </div>
      </div>

      <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button
          disabled={isVerifying}
          className={`w-full py-4 sm:py-5 mt-8 sm:mt-12 rounded-2xl text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-lg relative overflow-hidden ${
            isVerifying
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:scale-105 shadow-green-300'
          }`}
        >
          {isVerifying ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Verifying...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center space-x-2">
              <span>Verify & Continue</span>
              <span className="group-hover:translate-x-1 transition-transform">✓</span>
            </span>
          )}

          {/* Button shine effect */}
          {!isVerifying && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default SignupVerify;
