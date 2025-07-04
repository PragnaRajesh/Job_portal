import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "../components/otpinput";
import OtpTimer from "../components/otptimer";

const SignupVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (otp.length === 6) {
      navigate("/signup/info");
    } else {
      alert("Please enter the full 6-digit OTP.");
    }
  };

  return (
    <div className="p-5 min-h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-center">Sign Up</h2>
        <h3 className="text-blue-600 text-lg font-semibold text-center mt-6">Verification</h3>
        <p className="text-center text-sm text-gray-600">Enter the code sent to your number</p>

        <OtpTimer duration={300} onExpire={() => alert("OTP expired!")} />

        <OtpInput length={6} onChange={(val) => setOtp(val)} />
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="bg-blue-700 text-white py-3 rounded-full w-full mt-6 font-semibold"
        >
          Submit
        </button>

        <p className="text-center text-sm mt-3">
          Did not receive the code?{" "}
          <span className="text-blue-600 font-medium cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default SignupVerify;
