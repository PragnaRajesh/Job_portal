import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SignupProgressBar from '../components/SignupProgressBar';

const ProgressBarDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= 7) {
            return 1;
          }
          return prev + 1;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🎯 Signup Progress Bar Demo
          </h1>
          <p className="text-gray-600">
            Interactive demo of the 7-step animated progress bar component
          </p>
        </div>

        {/* Progress Bar Component */}
        <div className="mb-12">
          <SignupProgressBar currentStep={currentStep} totalSteps={7} />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Demo Controls</h3>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 shadow-md'
              }`}
            >
              <ArrowLeft size={16} />
              <span>Previous</span>
            </button>
            
            <button
              onClick={nextStep}
              disabled={currentStep === 7}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentStep === 7
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 shadow-md'
              }`}
            >
              <span>Next</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Step Selector */}
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5, 6, 7].map(step => (
              <button
                key={step}
                onClick={() => goToStep(step)}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  currentStep === step
                    ? 'bg-blue-500 text-white shadow-lg scale-110'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105'
                }`}
              >
                {step}
              </button>
            ))}
          </div>

          {/* Auto Play Toggle */}
          <div className="flex justify-center items-center space-x-3">
            <span className="text-gray-700 font-medium">Auto Play Demo</span>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`relative inline-flex w-12 h-6 rounded-full transition-colors duration-300 ${
                autoPlay ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                  autoPlay ? 'translate-x-6' : 'translate-x-0.5'
                } mt-0.5`}
              />
            </button>
          </div>
        </div>

        {/* Current Step Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Step Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Step:</span>
                <span className="font-semibold text-blue-600">{currentStep} of 7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Progress:</span>
                <span className="font-semibold text-blue-600">
                  {Math.round((currentStep / 7) * 100)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">
                  {currentStep === 7 ? 'Complete!' : 'In Progress'}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-700">Step Details:</h4>
              <div className="text-sm text-gray-600">
                {currentStep === 1 && "👤 Create Profile - Set up your basic profile information"}
                {currentStep === 2 && "🗂️ Basic Details - Add your personal details and contact info"}
                {currentStep === 3 && "🎓 Education - Share your educational background"}
                {currentStep === 4 && "💼 Preferred Job Type - Tell us what kind of job you're looking for"}
                {currentStep === 5 && "🧳 Experience - Add your work experience and skills"}
                {currentStep === 6 && "📍 Location - Set your preferred work location"}
                {currentStep === 7 && "📄 Resume - Upload your resume and complete your profile"}
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✨ Component Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>7-step progress tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>3D-style emoji icons</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Bounce/pulse animations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Colorful gradient progress line</span>
              </li>
            </ul>
            
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>White stripe animation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Smooth transitions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Fully responsive design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Hover and active states</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarDemo;
