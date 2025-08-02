import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup2 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
      navigate('/profile/createprofile');
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 sm:p-8 md:p-12 lg:max-w-md lg:mx-auto flex flex-col justify-between rounded-3xl pt-safe pb-safe">
      <div>
        <button onClick={() => navigate(-1)} className="mb-4 sm:mb-6">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Complete Your Profile</h2>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter your full name"
              className={`w-full border px-4 py-3 sm:px-6 sm:py-4 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.fullName ? 'border-red-500' : 'border-blue-400'
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              className={`w-full border px-4 py-3 sm:px-6 sm:py-4 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.email ? 'border-red-500' : 'border-blue-400'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Create a password"
              className={`w-full border px-4 py-3 sm:px-6 sm:py-4 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.password ? 'border-red-500' : 'border-blue-400'
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm sm:text-base mb-2">Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              placeholder="Confirm your password"
              className={`w-full border px-4 py-3 sm:px-6 sm:py-4 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.confirmPassword ? 'border-red-500' : 'border-blue-400'
              }`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-full py-4 sm:py-5 mt-8 sm:mt-12 rounded-full text-white font-semibold text-base sm:text-lg bg-blue-800 hover:bg-blue-900 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};

export default Signup2;
