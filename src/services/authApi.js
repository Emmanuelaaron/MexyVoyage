import api, { setToken } from './api';

export const authApi = {
  // Sign up
  signUp: async (userData) => {
    return await api.post('/api/v1/users/sign_up', { user: userData });
  },

  // Sign in
  signIn: async (email, password) => {
    return await api.post('/api/v1/users/sign_in', {
      user: { email, password },
    });
  },

  // Sign out
  signOut: async () => {
    try {
      await api.delete('/api/v1/users/sign_out');
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      // Always remove token from localStorage
      setToken(null);
    }
  },

  // Get current user
  getCurrentUser: async () => {
    return await api.get('/api/v1/user');
  },

  // Update user
  updateUser: async (userData) => {
    return await api.patch('/api/v1/user', { user: userData });
  },
};
