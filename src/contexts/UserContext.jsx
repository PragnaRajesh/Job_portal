import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';

// Initial user state
const initialUserState = {
  // Authentication
  isAuthenticated: false,
  authToken: null,
  
  // Basic info from signup
  fullName: '',
  email: '',
  mobile: '',
  
  // Profile details
  profilePicture: null,
  role: 'Job Seeker',
  location: 'Koramangala',
  bio: '',
  
  // Professional info
  jobRoles: [],
  skills: [],
  experience: {
    level: '', // 'fresher', 'experienced'
    years: 0,
    companies: [],
    currentCompany: '',
    currentRole: '',
    startDate: null,
    endDate: null,
    description: ''
  },
  
  // Education
  education: {
    degree: '',
    institution: '',
    year: '',
    percentage: '',
    specialization: ''
  },
  
  // Preferences
  jobType: '', // 'full-time', 'part-time', 'contract', 'freelance'
  preferredLocation: '',
  expectedSalary: '',
  
  // Resume and documents
  resumeUrl: null,
  documents: [],
  
  // Settings
  preferences: {
    notifications: true,
    newsletter: false,
    language: 'en'
  },
  
  // Onboarding and flow tracking
  onboardingCompleted: false,
  signupStep: 0,
  profileSetupCompleted: false,
  
  // App state
  lastActiveDate: null,
  createdAt: null,
  updatedAt: null
};

// Action types
const USER_ACTIONS = {
  // Authentication
  SET_AUTH: 'SET_AUTH',
  LOGOUT: 'LOGOUT',
  
  // Basic info
  UPDATE_BASIC_INFO: 'UPDATE_BASIC_INFO',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  
  // Professional info
  UPDATE_JOB_ROLES: 'UPDATE_JOB_ROLES',
  UPDATE_SKILLS: 'UPDATE_SKILLS',
  UPDATE_EXPERIENCE: 'UPDATE_EXPERIENCE',
  UPDATE_EDUCATION: 'UPDATE_EDUCATION',
  
  // Preferences
  UPDATE_PREFERENCES: 'UPDATE_PREFERENCES',
  UPDATE_JOB_TYPE: 'UPDATE_JOB_TYPE',
  
  // Documents
  UPDATE_RESUME: 'UPDATE_RESUME',
  UPDATE_DOCUMENTS: 'UPDATE_DOCUMENTS',
  
  // Flow tracking
  UPDATE_SIGNUP_STEP: 'UPDATE_SIGNUP_STEP',
  COMPLETE_ONBOARDING: 'COMPLETE_ONBOARDING',
  COMPLETE_PROFILE_SETUP: 'COMPLETE_PROFILE_SETUP',
  
  // Full user data
  SET_USER_DATA: 'SET_USER_DATA',
  RESET_USER_DATA: 'RESET_USER_DATA',
  
  // Activity tracking
  UPDATE_LAST_ACTIVE: 'UPDATE_LAST_ACTIVE'
};

// User reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        authToken: action.payload.token || null,
        lastActiveDate: new Date().toISOString()
      };
      
    case USER_ACTIONS.LOGOUT:
      // Clear localStorage
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
      return {
        ...initialUserState,
        // Keep some preferences
        preferences: state.preferences
      };
      
    case USER_ACTIONS.UPDATE_BASIC_INFO:
      return {
        ...state,
        ...action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_JOB_ROLES:
      return {
        ...state,
        jobRoles: action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_SKILLS:
      return {
        ...state,
        skills: action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_EXPERIENCE:
      return {
        ...state,
        experience: {
          ...state.experience,
          ...action.payload
        },
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_EDUCATION:
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload
        },
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...action.payload
        },
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_JOB_TYPE:
      return {
        ...state,
        jobType: action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_RESUME:
      return {
        ...state,
        resumeUrl: action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_DOCUMENTS:
      return {
        ...state,
        documents: action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.UPDATE_SIGNUP_STEP:
      return {
        ...state,
        signupStep: action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.COMPLETE_ONBOARDING:
      return {
        ...state,
        onboardingCompleted: true,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.COMPLETE_PROFILE_SETUP:
      return {
        ...state,
        profileSetupCompleted: true,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        updatedAt: new Date().toISOString()
      };
      
    case USER_ACTIONS.RESET_USER_DATA:
      return {
        ...initialUserState,
        preferences: state.preferences // Keep preferences
      };
      
    case USER_ACTIONS.UPDATE_LAST_ACTIVE:
      return {
        ...state,
        lastActiveDate: new Date().toISOString()
      };
      
    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const savedUserData = localStorage.getItem('userData');
        const authToken = localStorage.getItem('userToken');

        // Migration: Clear old user data that might have phone number as name
        const oldUserData = localStorage.getItem('user');
        if (oldUserData) {
          localStorage.removeItem('user'); // Remove old format
        }

        // Clear any phone number data from localStorage entries
        const phoneEntries = ['userName', 'fullName'];
        phoneEntries.forEach(key => {
          const value = localStorage.getItem(key);
          if (value && /^\+?[\d\s\-\(\)]{10,}$/.test(value)) {
            localStorage.removeItem(key);
          }
        });
        
        if (savedUserData) {
          const userData = JSON.parse(savedUserData);

          // Migration: Clear fullName if it's a phone number
          const isPhoneNumber = (str) => /^\+?[\d\s\-\(\)]{10,}$/.test(str?.toString());
          if (userData.fullName && isPhoneNumber(userData.fullName)) {
            userData.fullName = ''; // Clear phone number from name field
          }

          dispatch({
            type: USER_ACTIONS.SET_USER_DATA,
            payload: {
              ...userData,
              isAuthenticated: !!authToken,
              authToken: authToken
            }
          });
        } else if (authToken) {
          // User has token but no data - set as authenticated
          dispatch({
            type: USER_ACTIONS.SET_AUTH,
            payload: {
              isAuthenticated: true,
              token: authToken
            }
          });
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        // Clear corrupted data
        localStorage.removeItem('userData');
        localStorage.removeItem('userToken');
      }
    };

    loadUserData();
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (userState.isAuthenticated && userState.fullName) {
      try {
        const dataToSave = {
          ...userState,
          // Don't save sensitive data
          authToken: undefined
        };
        localStorage.setItem('userData', JSON.stringify(dataToSave));
        
        if (userState.authToken) {
          localStorage.setItem('userToken', userState.authToken);
        }
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    }
  }, [userState]);

  // Action creators (helper functions)
  const actions = {
    // Authentication
    login: (token, userData = {}) => {
      dispatch({
        type: USER_ACTIONS.SET_AUTH,
        payload: { isAuthenticated: true, token }
      });
      
      if (Object.keys(userData).length > 0) {
        dispatch({
          type: USER_ACTIONS.SET_USER_DATA,
          payload: userData
        });
      }
    },
    
    logout: () => {
      dispatch({ type: USER_ACTIONS.LOGOUT });
    },
    
    // Basic info updates
    updateBasicInfo: (data) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_BASIC_INFO,
        payload: data
      });
    },
    
    updateProfile: (data) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_PROFILE,
        payload: data
      });
    },
    
    // Professional info
    updateJobRoles: (roles) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_JOB_ROLES,
        payload: roles
      });
    },
    
    updateSkills: (skills) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_SKILLS,
        payload: skills
      });
    },
    
    updateExperience: (experience) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_EXPERIENCE,
        payload: experience
      });
    },
    
    updateEducation: (education) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_EDUCATION,
        payload: education
      });
    },
    
    // Preferences
    updatePreferences: (preferences) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_PREFERENCES,
        payload: preferences
      });
    },
    
    updateJobType: (jobType) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_JOB_TYPE,
        payload: jobType
      });
    },
    
    // Documents
    updateResume: (resumeUrl) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_RESUME,
        payload: resumeUrl
      });
    },
    
    updateDocuments: (documents) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_DOCUMENTS,
        payload: documents
      });
    },
    
    // Flow tracking
    updateSignupStep: (step) => {
      dispatch({
        type: USER_ACTIONS.UPDATE_SIGNUP_STEP,
        payload: step
      });
    },
    
    completeOnboarding: () => {
      dispatch({ type: USER_ACTIONS.COMPLETE_ONBOARDING });
    },
    
    completeProfileSetup: () => {
      dispatch({ type: USER_ACTIONS.COMPLETE_PROFILE_SETUP });
    },
    
    // Bulk updates
    setUserData: (data) => {
      dispatch({
        type: USER_ACTIONS.SET_USER_DATA,
        payload: data
      });
    },
    
    resetUserData: () => {
      dispatch({ type: USER_ACTIONS.RESET_USER_DATA });
    },
    
    // Activity tracking
    updateLastActive: () => {
      dispatch({ type: USER_ACTIONS.UPDATE_LAST_ACTIVE });
    }
  };

  // Helper functions
  const helpers = {
    // Get user's display name
    getDisplayName: () => {
      // Don't show phone numbers as names
      const isPhoneNumber = (str) => /^\+?[\d\s\-\(\)]{10,}$/.test(str?.toString());

      if (userState.fullName && !isPhoneNumber(userState.fullName)) {
        return userState.fullName;
      }

      if (userState.email && !isPhoneNumber(userState.email)) {
        return userState.email.split('@')[0];
      }

      return 'User';
    },
    
    // Get user's initials
    getInitials: () => {
      const name = userState.fullName || 'U S';
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    },
    
    // Check if profile is complete
    isProfileComplete: () => {
      return !!(
        userState.fullName &&
        userState.email &&
        userState.mobile &&
        userState.jobRoles.length > 0 &&
        userState.location
      );
    },
    
    // Get profile completion percentage
    getProfileCompletionPercentage: () => {
      const fields = [
        userState.fullName,
        userState.email,
        userState.mobile,
        userState.jobRoles.length > 0,
        userState.skills.length > 0,
        userState.location,
        userState.bio,
        userState.education.degree,
        userState.experience.level,
        userState.resumeUrl
      ];
      
      const completedFields = fields.filter(field => 
        field !== null && field !== undefined && field !== '' && field !== false
      ).length;
      
      return Math.round((completedFields / fields.length) * 100);
    },
    
    // Get user data for AI context
    getAIContext: () => {
      return {
        name: userState.fullName,
        role: userState.role,
        jobRoles: userState.jobRoles,
        skills: userState.skills,
        experience: userState.experience,
        education: userState.education,
        location: userState.location,
        jobType: userState.jobType,
        bio: userState.bio
      };
    },
    
    // Check if user can access certain features
    canAccessFeature: (feature) => {
      switch (feature) {
        case 'resume_builder':
          return userState.isAuthenticated && userState.fullName;
        case 'job_applications':
          return userState.isAuthenticated && helpers.isProfileComplete();
        case 'ai_chat':
          return userState.isAuthenticated;
        default:
          return userState.isAuthenticated;
      }
    }
  };

  const contextValue = useMemo(() => ({
    // State
    user: userState,

    // Actions
    ...actions,

    // Helpers
    ...helpers,

    // Direct state access for convenience
    isAuthenticated: userState.isAuthenticated,
    isLoading: false // Can be enhanced with loading states
  }), [userState]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
export const useUser = () => {
  const context = useContext(UserContext);
  
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  
  return context;
};

// Export action types for external use
export { USER_ACTIONS };

export default UserContext;
