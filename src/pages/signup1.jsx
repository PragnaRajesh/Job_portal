import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup1 = () => {
  const [mobile, setMobile] = useState('');
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!agreed || mobile.length !== 10) return;
    navigate('/signupverify');
  };

  return (
    <div className="min-h-screen bg-white p-6 sm:p-8 md:p-12 lg:max-w-md lg:mx-auto flex flex-col justify-between rounded-3xl pt-safe pb-safe">
      <div>
        <button onClick={() => navigate(-1)} className="mb-4 sm:mb-6">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Sign Up</h2>

        <label className="block mt-10 sm:mt-12 md:mt-16 text-gray-700 font-medium text-sm sm:text-base">Enter your mobile number</label>
        <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3">
          <div className="border border-blue-500 px-4 py-3 sm:px-6 sm:py-4 rounded-md text-blue-500 font-semibold text-sm sm:text-base">+91</div>
          <input
            type="tel"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="1234567890"
            className="flex-1 border border-blue-400 px-4 py-3 sm:px-6 sm:py-4 rounded-md text-blue-500 placeholder-blue-300 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mt-6 sm:mt-8">
          <input type="checkbox" id="terms" className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" checked={agreed} onChange={() => setAgreed(!agreed)} />
          <label htmlFor="terms" className="text-sm sm:text-base text-gray-700">
            By signing up, you agree to Terms of Service and Privacy Policy.
          </label>
        </div>

        <p className="text-sm sm:text-base text-gray-500 mt-3 sm:mt-4">A code will be sent to your number.</p>
      </div>

      <button
        onClick={handleNext}
        disabled={!agreed || mobile.length !== 10}
        className={`w-full py-4 sm:py-5 mt-8 sm:mt-12 rounded-full text-white font-semibold text-base sm:text-lg transition-colors ${
          agreed && mobile.length === 10 ? 'bg-blue-800 hover:bg-blue-900' : 'bg-gray-300'
        }`}
      >
        Get OTP
      </button>
    </div>
  );
};

export default Signup1;
