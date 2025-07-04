import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

      navigate("/home");
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border px-4 py-2 rounded w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-700 text-white px-6 py-2 rounded-full w-full"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
