import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// 🔹 Pages
import Onboarding1 from './pages/onboarding1';
import Onboarding4 from './pages/onboarding4';
import Signup1 from './pages/signup1';
import Signup2 from './pages/signup2';
import Signup3 from './pages/signup3';
import Login from './pages/login';
import Loginverify from './pages/loginverify';
import SuccessScreen from './pages/successscreen';
import Home from './pages/home';
import CreateProfile from './pages/profile/createprofile';
import ProfileSetup1 from './pages/profile/profilesetup1';
import ProfileSetup2 from './pages/profile/profilesetup2';
import ProfileSetup3 from './pages/profile/profilesetup3';
import EducationDetails from './pages/profile/educationdetails';
import ExperienceDecision from './pages/profile/experiencedecision';
import Experience1 from './pages/profile/experience1';
import Experience2 from './pages/profile/experience2'; 
import Experience3 from './pages/profile/experience3';
import Experience4 from './pages/profile/experience4';
import Location from './pages/profile/location'; 
import SetupComplete from './pages/profile/setupcomplete';
// ✅ Wrapper to pass state to SuccessScreen
const SuccessScreenWrapper = () => {
  const { state } = useLocation();
  const name = state?.name || 'User';
  return <SuccessScreen name={name} />;
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
        <Route path="/registration-complete" element={<SuccessScreenWrapper />} />
        <Route path="/home" element={<Home />} />
         <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/profile-setup-1" element={<ProfileSetup1 />} />
        <Route path="/profile-setup-2" element={<ProfileSetup2 />} />
        <Route path="/profile-setup-3" element={<ProfileSetup3 />} />
        <Route path="/education-details" element={<EducationDetails />} />
        <Route path="/experience-decision" element={<ExperienceDecision />} />
        <Route path="/experience1" element={<Experience1 />} />
        <Route path="/experience2" element={<Experience2 />} />
        <Route path="/experience3" element={<Experience3 />} />
        <Route path="/experience4" element={<Experience4 />} />
        <Route path="/location" element={<Location />} />
        <Route path="/setupcomplete" element={<SetupComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
