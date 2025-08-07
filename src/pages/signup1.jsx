import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SignupProgressBar from '../components/SignupProgressBar';
import { useUser } from '../contexts/UserContext';
import authService from '../services/authService';
import '../styles/signup-animations.css';

const Signup1 = () => {
  const { user, updateBasicInfo, updateSignupStep, completeOnboarding } = useUser();
  const [mobile, setMobile] = useState(user.mobile || '');
  const [agreed, setAgreed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNext = () => {
    if (!agreed || mobile.length !== 10) return;

    setIsSubmitting(true);

    // Save mobile number to user context
    updateBasicInfo({ mobile: mobile });
    updateSignupStep(1);

    // Simulate API call
    setTimeout(() => {
      navigate('/signupverify');
    }, 1000);
  };

  const handleGoogleSignup = async () => {
    if (!agreed) {
      alert('Please accept the terms and conditions to continue');
      return;
    }

    setIsGoogleLoading(true);

    try {
      const result = await authService.signInWithGoogle();

      if (result.success) {
        // Save user data
        authService.saveUserData(result.user, result.token);

        // Update user context
        updateBasicInfo({
          fullName: result.user.name,
          email: result.user.email,
          profilePicture: result.user.picture
        });

        // Complete onboarding and redirect to home
        completeOnboarding();
        navigate('/home');
      }
    } catch (error) {
      console.error('Google signup error:', error);
      alert('Google signup failed. Please try again.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8 md:p-12 lg:max-w-md lg:mx-auto flex flex-col justify-between rounded-3xl pt-safe pb-safe">
      <div>
        <button onClick={() => navigate(-1)} className="mb-4 sm:mb-6 p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" />
        </button>

        {/* Progress Bar */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <SignupProgressBar
            currentStep={1}
            totalSteps={7}
          />
        </div>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Sign Up</h2>
        <p className={`text-center text-gray-600 mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Choose your preferred signup method</p>

        {/* Third-party signup options */}
        <div className={`space-y-3 mb-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={handleGoogleSignup}
            disabled={!agreed || isGoogleLoading}
            className={`w-full flex items-center justify-center space-x-3 py-3 sm:py-4 rounded-xl border-2 transition-all duration-300 ${
              agreed && !isGoogleLoading
                ? 'border-red-300 bg-white hover:bg-red-50 hover:border-red-400 shadow-sm hover:shadow-md'
                : 'border-gray-300 bg-gray-100 cursor-not-allowed'
            }`}
          >
            {isGoogleLoading ? (
              <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <img src="/src/assets/google.png" alt="Google" className="w-5 h-5" />
            )}
            <span className={`font-medium ${agreed ? 'text-gray-700' : 'text-gray-400'}`}>
              {isGoogleLoading ? 'Signing up...' : 'Sign up with Google'}
            </span>
          </button>
        </div>

        <div className={`flex items-center mb-6 transform transition-all duration-1000 delay-450 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or continue with phone</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <label className="block text-gray-700 font-medium text-sm sm:text-base mb-3">Enter your mobile number</label>
          <div className="flex gap-2 sm:gap-3">
            <div className="border-2 border-blue-500 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-blue-600 font-semibold text-sm sm:text-base bg-blue-50 shadow-sm">+91</div>
            <input
              type="tel"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="1234567890"
              className="flex-1 border-2 border-blue-400 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-blue-600 placeholder-blue-300 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-300 bg-white shadow-sm"
            />
          </div>
        </div>

        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mt-6 sm:mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              id="terms"
              className="mr-3 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="terms" className="text-sm sm:text-base text-gray-700 cursor-pointer">
              By signing up, you agree to{' '}
              <span className="text-blue-600 font-medium">Terms of Service</span> and{' '}
              <span className="text-blue-600 font-medium">Privacy Policy</span>.
            </label>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700 flex items-center">
              <span className="mr-2">📱</span>
              A verification code will be sent to your number.
            </p>
          </div>
        </div>
      </div>

      <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button
          onClick={handleNext}
          disabled={!agreed || mobile.length !== 10 || isSubmitting}
          className={`w-full py-4 sm:py-5 mt-8 sm:mt-12 rounded-2xl text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-lg relative overflow-hidden ${
            agreed && mobile.length === 10 && !isSubmitting
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-blue-300'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center space-x-2">
              <span>Get OTP</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          )}

          {/* Button shine effect */}
          {agreed && mobile.length === 10 && !isSubmitting && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Signup1;
