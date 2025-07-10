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
    <div className="min-h-screen bg-white p-6 flex flex-col justify-between rounded-3xl">
      <div>
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <label className="block mt-10 text-gray-700 font-medium">Enter your mobile number</label>
        <div className="flex gap-2 mt-2">
          <div className="border border-blue-500 px-4 py-3 rounded-md text-blue-500 font-semibold">+91</div>
          <input
            type="tel"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="1234567890"
            className="flex-1 border border-blue-400 px-4 py-3 rounded-md text-blue-500 placeholder-blue-300"
          />
        </div>

        <div className="flex items-center mt-6">
          <input type="checkbox" id="terms" className="mr-2" checked={agreed} onChange={() => setAgreed(!agreed)} />
          <label htmlFor="terms" className="text-sm text-gray-700">
            By signing up, you agree to Terms of Service and Privacy Policy.
          </label>
        </div>

        <p className="text-sm text-gray-500 mt-3">A code will be sent to your number.</p>
      </div>

      <button
        onClick={handleNext}
        disabled={!agreed || mobile.length !== 10}
        className={`w-full py-4 mt-8 rounded-full text-white font-semibold ${
          agreed && mobile.length === 10 ? 'bg-blue-800' : 'bg-gray-300'
        }`}
      >
        Get OTP
      </button>
    </div>
  );
};

export default Signup1;
