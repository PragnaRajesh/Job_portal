import React, { useRef, useState } from "react";

const OtpInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (val, index) => {
    if (!/^\d*$/.test(val)) return;
    const updated = [...otp];
    updated[index] = val;
    setOtp(updated);
    onChange(updated.join(""));

    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((digit, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-10 h-10 text-center border border-gray-400 rounded text-lg"
        />
      ))}
    </div>
  );
};

export default OtpInput;
