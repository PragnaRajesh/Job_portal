import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import EnhancedProgressBar from '../components/EnhancedProgressBar';

const ProgressBarDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);

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

  const setStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Enhanced Progress Bar Demo
          </h1>
          <p className="text-gray-600 text-lg">
            Interactive demonstration of the new 7-step progress bar with 3D emojis and animations
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="mb-12">
          <EnhancedProgressBar currentStep={currentStep} totalSteps={7} />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 hover:scale-105 shadow-lg'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === 7}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentStep === 7
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 hover:scale-105 shadow-lg'
            }`}
          >
            <span>Next</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Step Selection */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Step Selection</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <button
                key={step}
                onClick={() => setStep(step)}
                className={`w-12 h-12 rounded-full font-bold text-lg transition-all duration-300 border-2 ${
                  currentStep === step
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-blue-500 scale-110 shadow-lg'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600 hover:scale-105'
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Step Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {currentStep === 1 && "Create Profile 👤"}
              {currentStep === 2 && "Basic Details 🗂️"}
              {currentStep === 3 && "Education 🎓"}
              {currentStep === 4 && "Preferred Job Type 💼"}
              {currentStep === 5 && "Experience 🧳"}
              {currentStep === 6 && "Location 📍"}
              {currentStep === 7 && "Resume 📄"}
            </h2>
            
            <div className="text-gray-600 text-lg mb-6">
              {currentStep === 1 && "Start your journey by setting up your professional profile with language preferences and notification settings."}
              {currentStep === 2 && "Add your personal information including name, date of birth, gender, and contact details."}
              {currentStep === 3 && "Share your educational background, degrees, specializations, and academic achievements."}
              {currentStep === 4 && "Select your preferred work arrangements, shift timings, and employment types."}
              {currentStep === 5 && "Detail your work experience, skills, and professional accomplishments."}
              {currentStep === 6 && "Choose your preferred work location and explore opportunities near you."}
              {currentStep === 7 && "Upload your resume and complete your professional profile setup."}
            </div>

            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <span>Step {currentStep} of 7</span>
              </span>
              <span>•</span>
              <span>{Math.round((currentStep / 7) * 100)}% Complete</span>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">3D Animated Emojis</h3>
            <p className="text-gray-600 text-sm">Each step features a unique 3D emoji with bounce and pulse animations when active.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">🌈</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Gradient Progress Bar</h3>
            <p className="text-gray-600 text-sm">Colorful animated gradient with flowing white stripes to indicate progress.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fully Responsive</h3>
            <p className="text-gray-600 text-sm">Adapts perfectly to all mobile screen sizes with smooth transitions.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hover Effects</h3>
            <p className="text-gray-600 text-sm">Interactive hover states with scale transforms and shadow effects.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Smooth Transitions</h3>
            <p className="text-gray-600 text-sm">Fluid animations between steps with easing functions.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Status Indicators</h3>
            <p className="text-gray-600 text-sm">Clear visual feedback for completed, active, and upcoming steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarDemo;
