import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// 🔹 Pages
import Onboarding1 from './pages/onboarding1';
import Signup1 from './pages/signup1';
import Signup2 from './pages/signup2';
import SignupVerify from './pages/signupverify';
import Login from './pages/login';
import Loginverify from './pages/loginverify';
import SuccessScreen from './pages/profile/successscreen';
import Home from './pages/home';
import CreateProfile from './pages/profile/createprofile';
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
import UploadResume from './pages/profile/uploadresume';
// import Applications from './pages/applications/applications';
// import ApplicationDetails from './pages/applications/applicationdetails';
// import MapComponent from '../components/mapcomponent';
// import NavigationApps from '../components/navigationapps';

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
        {/* Onboarding and Auth */}
        <Route path="/" element={<Onboarding1 />} />

        {/* Sign Up Flow */}
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signupverify" element={<SignupVerify />} />
        <Route path="/profile/createprofile" element={<CreateProfile />} />
        <Route path="/profile/profilesetup1" element={<ProfileSetup1 />} />
        <Route path="/profile/profilesetup2" element={<ProfileSetup2 />} />
        <Route path="/profile/educationdetails" element={<EducationDetails />} />
        <Route path="/profile/educationdetails2" element={<EducationDetails2 />} />
        <Route path="/profile/jobtype" element={<JobType />} />
        <Route path="/profile/experiencedecision" element={<ExperienceDecision />} />
        <Route path="/profile/experiencedetails1" element={<ExperienceDetails1 />} />
        <Route path="/profile/experiencedetails2" element={<ExperienceDetails2 />} />
        <Route path="/profile/experiencedetails3" element={<ExperienceDetails3 />} />
        <Route path="/profile/location" element={<Location />} />
        <Route path="/profile/uploadresume" element={<UploadResume />} />
        <Route path="/profile/successscreen" element={<SuccessScreenWrapper />} />

        {/* Login Flow */}
        <Route path="/login" element={<Login />} />
        <Route path="/loginverify" element={<Loginverify />} />
        <Route path="/home" element={<Home />} />

        { /* Application Pages */}
        {/* <Route path="/applications" element={<Applications />} />
        <Route path="/applicationdetails/:id" element={<ApplicationDetails />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
