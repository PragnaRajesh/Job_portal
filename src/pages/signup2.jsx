import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import SignupProgressBar from '../components/SignupProgressBar';
import { useUser } from '../contexts/UserContext';
import '../styles/signup-animations.css';

const Signup2 = () => {
  const { user, updateBasicInfo, updateSignupStep, completeOnboarding } = useUser();
  const [formData, setFormData] = useState({
    fullName: user.fullName || '',
    email: user.email || '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setIsSubmitting(true);

      // Save form data to user context
      updateBasicInfo({
        fullName: formData.fullName,
        email: formData.email
      });
      updateSignupStep(3);
      completeOnboarding();

      // Simulate API call
      setTimeout(() => {
        // Mark onboarding as completed for new users
        localStorage.setItem('hasCompletedOnboarding', 'true');
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6 sm:p-8 md:p-12 lg:max-w-md lg:mx-auto flex flex-col justify-between rounded-3xl pt-safe pb-safe">
      <div>
        <button onClick={() => navigate(-1)} className="mb-4 sm:mb-6 p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" />
        </button>

        {/* Progress Bar */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <SignupProgressBar
            currentStep={3}
            totalSteps={3}
            labels={['Phone', 'Verify', 'Profile']}
          />
        </div>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Complete Your Profile</h2>
        <p className={`text-center text-gray-600 mb-8 sm:mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Just a few more details to get started</p>

        <div className={`space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter your full name"
              className={`w-full border-2 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-purple-500 transition-all duration-300 bg-white shadow-sm ${
                errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-purple-300 focus:border-purple-500'
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1 animate-slide-in-left">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              className={`w-full border-2 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-purple-500 transition-all duration-300 bg-white shadow-sm ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-purple-300 focus:border-purple-500'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1 animate-slide-in-left">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Create a password"
                className={`w-full border-2 px-4 py-3 sm:px-6 sm:py-4 pr-12 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-purple-500 transition-all duration-300 bg-white shadow-sm ${
                  errors.password ? 'border-red-500 focus:border-red-500' : 'border-purple-300 focus:border-purple-500'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs sm:text-sm mt-1 animate-slide-in-left">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Confirm your password"
                className={`w-full border-2 px-4 py-3 sm:px-6 sm:py-4 pr-12 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-purple-500 transition-all duration-300 bg-white shadow-sm ${
                  errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-purple-300 focus:border-purple-500'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs sm:text-sm mt-1 animate-slide-in-left">{errors.confirmPassword}</p>}
          </div>
        </div>
      </div>

      <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button
          onClick={handleNext}
          disabled={isSubmitting}
          className={`w-full py-4 sm:py-5 mt-8 sm:mt-12 rounded-2xl text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-lg relative overflow-hidden ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:scale-105 shadow-purple-300'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Creating Account...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center space-x-2">
              <span>Continue</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          )}

          {/* Button shine effect */}
          {!isSubmitting && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Signup2;
