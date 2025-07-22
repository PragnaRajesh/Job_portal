import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// 🔹 Pages
import OnboardingScreen1 from './pages/onboarding/onboarding1';
import OnboardingScreen2 from './pages/onboarding/onboarding2';
import OnboardingScreen3 from './pages/onboarding/onboarding3';
import OnboardingScreen4 from './pages/onboarding/onboarding4';
import OnboardingFlow from './pages/onboarding/onboardingflow';
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
import MyProfile from './pages/myprofilesection/myprofile';
import WorkExperience from './pages/myprofilesection/workexperience';
import SkillsPage from './pages/myprofilesection/skills';
import Documents from './pages/myprofilesection/documents';
import BasicDetails from './pages/myprofilesection/basicdetails';
import JobList from './pages/jobs/joblist';
import JobDetails from './pages/jobs/jobdetails';
import SubmitDocuments from './pages/jobs/submitdocuments';
import Verified from './pages/jobs/verified';
import Application from "./pages/applications/application";
import VirtualInterview from "./pages/applications/virtualinterview";
import FaceToFaceInterview from "./pages/applications/facetofaceinterview";
import Chat from "./pages/chats/chat";
import Messages from "./pages/chats/messages";
import NoMessage from "./pages/chats/nomessage";
import { ConversationProvider } from "./pages/chats/conversationcontext";
import ResumeBuilder from "./pages/resume/resumebuilder";

// Wrapper to pass state to SuccessScreen
const SuccessScreenWrapper = () => {
  const { state } = useLocation();
  const name = state?.name || 'User';
  return <SuccessScreen name={name} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ConversationProvider>
        <Routes>
          {/* Onboarding and Auth */}
          <Route path="/" element={<OnboardingFlow />} />
          <Route path="/onboarding1" element={<OnboardingScreen1 />} />
          <Route path="/onboarding2" element={<OnboardingScreen2 />} />
          <Route path="/onboarding3" element={<OnboardingScreen3 />} />
          <Route path="/onboarding4" element={<OnboardingScreen4 />} />


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

          {/* Profile Screen */}
          <Route path="/myprofilesection/myprofile" element={<MyProfile />} />
          <Route path="/myprofilesection/workexperience" element={<WorkExperience />} />
          <Route path="/myprofilesection/skills" element={<SkillsPage />} />
          <Route path="/myprofilesection/documents" element={<Documents />} />
          <Route path="/myprofilesection/basicdetails" element={<BasicDetails />} />

          {/* Jobs Screen */}
          <Route path="/jobs/joblist" element={<JobList />} />
          <Route path="/jobs/jobdetails" element={<JobDetails />} />
          <Route path="/jobs/submitdocuments" element={<SubmitDocuments />} />
          <Route path="/jobs/verified" element={<Verified />} />

          {/* Application Screen */}
          <Route path="/applications/application" element={<Application />} />
          <Route path="/virtualinterview" element={<VirtualInterview />} />
          <Route path="/facetofaceinterview" element={<FaceToFaceInterview />} />

          {/* Chats Routes */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/chat/:userId" element={<Chat />} />
          <Route path="/no-message" element={<NoMessage />} />

          {/* Resume routes */}
          <Route path="/resume/resumebuilder" element={<ResumeBuilder />} />
        </Routes>
      </ConversationProvider>
    </BrowserRouter>
  );
};
export default App;
