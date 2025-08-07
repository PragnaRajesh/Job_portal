// Auth service for handling third-party authentication
// This is a mock implementation - in production, use Firebase, Auth0, or similar

class AuthService {
  constructor() {
    this.isInitialized = false;
  }

  // Mock Google Sign-In
  async signInWithGoogle() {
    return new Promise((resolve, reject) => {
      // Simulate Google auth flow
      setTimeout(() => {
        try {
          const mockUser = {
            id: 'google_' + Date.now(),
            email: 'user@gmail.com',
            name: 'John Doe',
            picture: 'https://via.placeholder.com/150',
            provider: 'google',
            verified: true
          };

          // Simulate success response
          resolve({
            success: true,
            user: mockUser,
            token: 'mock_google_token_' + Date.now()
          });
        } catch (error) {
          reject({
            success: false,
            error: 'Google sign-in failed',
            details: error.message
          });
        }
      }, 2000); // Simulate network delay
    });
  }

  // Mock Phone Sign-In
  async signInWithPhone(phoneNumber) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Validate phone number format
          if (!phoneNumber || phoneNumber.length !== 10) {
            throw new Error('Invalid phone number');
          }

          const mockUser = {
            id: 'phone_' + Date.now(),
            phone: '+91' + phoneNumber,
            provider: 'phone',
            verified: false // Will be verified after OTP
          };

          resolve({
            success: true,
            user: mockUser,
            requiresVerification: true,
            verificationId: 'mock_verification_' + Date.now()
          });
        } catch (error) {
          reject({
            success: false,
            error: 'Phone sign-in failed',
            details: error.message
          });
        }
      }, 1500);
    });
  }

  // Mock OTP verification
  async verifyOTP(verificationId, otp) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (otp === '1234') { // Mock OTP
            resolve({
              success: true,
              token: 'mock_phone_token_' + Date.now(),
              user: {
                verified: true
              }
            });
          } else {
            throw new Error('Invalid OTP');
          }
        } catch (error) {
          reject({
            success: false,
            error: 'OTP verification failed',
            details: error.message
          });
        }
      }, 1000);
    });
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
    return !!(token && hasCompletedOnboarding === 'true');
  }

  // Get current user from localStorage
  getCurrentUser() {
    try {
      const userData = localStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Sign out
  async signOut() {
    return new Promise((resolve) => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      localStorage.removeItem('hasCompletedOnboarding');
      localStorage.removeItem('isAuthenticated');
      
      setTimeout(() => {
        resolve({ success: true });
      }, 500);
    });
  }

  // Save user data after successful authentication
  saveUserData(user, token) {
    try {
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true');
      
      // Complete onboarding for third-party signups
      if (user.provider === 'google') {
        localStorage.setItem('hasCompletedOnboarding', 'true');
      }
      
      return true;
    } catch (error) {
      console.error('Error saving user data:', error);
      return false;
    }
  }

  // Initialize auth service (for future Firebase/Auth0 integration)
  async initialize() {
    // Mock initialization
    return new Promise((resolve) => {
      setTimeout(() => {
        this.isInitialized = true;
        resolve(true);
      }, 100);
    });
  }
}

// Create and export service instance
const authService = new AuthService();

export default authService;

// Export individual methods for convenience
export const {
  signInWithGoogle,
  signInWithPhone,
  verifyOTP,
  isAuthenticated,
  getCurrentUser,
  signOut,
  saveUserData,
  initialize
} = authService;
