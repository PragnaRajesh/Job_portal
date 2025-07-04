import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Onboarding1 from './pages/onboarding1';
import Onboarding4 from './pages/onboarding4';
import Signup1 from './pages/signup1';
import Signup2 from './pages/signup2';
import Signup3 from './pages/signup3';
import Login from './pages/login';
import Loginverify from './pages/loginverify';
import SuccessScreen from './pages/successscreen';
import Home from './pages/home';
const SuccessScreenWrapper = () => {
  const { state } = useLocation();
  const name = state?.name || 'User'; // fallback name
  return <successscreen name={name} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/onboarding4" element={<Onboarding4 />} />
        <Route path="/signup" element={<Signup1 />} />
        <Route path="/signup/verify" element={<Signup2 />} />
        <Route path="/signup/details" element={<Signup3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/verify" element={<Loginverify />} />
        <Route path="/registration-complete" element={<SuccessScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
