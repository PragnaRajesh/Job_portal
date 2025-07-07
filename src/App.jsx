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
import CreateProfile from './pages/profile/createprofile'
import ProfileSetup1 from './pages/profile/profilesetup1';
import ProfileSetup2 from './pages/profile/profilesetup2';
import EducationDetails from './pages/profile/educationdetails';
import EducationDetails2 from './pages/profile/educationdetails2';
import JobType from './pages/profile/jobtype';
import ExperienceDecision from './pages/profile/experiencedecision';
import ExperienceDetails1 from './pages/profile/experiencedetails1';
import ExperienceDetails2 from './pages/profile/experiencedetails2'; 
import ExperienceDetails3 from './pages/profile/experiencedetails3';
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
        <Route path="/profilesetup1" element={<ProfileSetup1 />} />
        <Route path="/profilesetup2" element={<ProfileSetup2 />} />
        <Route path="/educationdetails" element={<EducationDetails />} />
        <Route path="/educationdetails2" element={<EducationDetails2 />} />
        <Route path="/JobType" element={<JobType />} />
        <Route path="/experiencedecision" element={<ExperienceDecision />} />
        <Route path="/experiencedetails1" element={<ExperienceDetails1 />} />
        <Route path="/experiencedetails2" element={<ExperienceDetails2 />} />
        <Route path="/experiencedetails3" element={<ExperienceDetails3 />} />
        <Route path="/location" element={<Location />} />
        <Route path="/setupcomplete" element={<SetupComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
