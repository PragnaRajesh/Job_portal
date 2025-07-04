import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup2 = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleSubmit = () => {
    if (otp.every(d => d !== '')) {
      navigate('/signup/details');
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 rounded-3xl flex flex-col justify-between">
      <div>
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <h3 className="text-blue-600 text-lg font-semibold text-center mt-6">Verification</h3>
        <p className="text-center text-gray-600 text-sm">Enter the code from the SMS we sent you</p>
        <p className="text-center text-black mt-4">05:00</p>

        {/* OTP boxes */}
        <div className="flex justify-center gap-2 mt-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-400 rounded-md text-lg"
            />
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="bg-blue-800 text-white w-full py-4 mt-6 rounded-full font-semibold"
        >
          Submit
        </button>
        <p className="text-center text-sm mt-3">
          I didn’t receive the code! <span className="text-blue-600 font-medium cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default Signup2;
