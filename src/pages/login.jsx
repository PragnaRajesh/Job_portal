import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (phone.length === 10) {
      // You can also store dummy user info here:
      const user = {
        name: "Pru",
        role: "Frontend Developer",
        location: "Koramangala"
      };
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/loginverify");
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  return (
    <div className="p-6 sm:p-8 md:p-12 lg:max-w-md lg:mx-auto lg:mt-12">
      <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 mb-2 cursor-pointer hover:text-gray-600 transition-colors" onClick={() => navigate(-1)} />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">Login</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border px-4 py-2 sm:px-6 sm:py-3 md:py-4 rounded w-full mb-4 sm:mb-6 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-700 text-white px-6 py-2 sm:py-3 md:py-4 rounded-full w-full text-sm sm:text-base md:text-lg font-medium hover:bg-blue-800 transition-colors"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
