const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Set token in localStorage
export const setToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};

// Get auth headers
export const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Extract token from response headers or body
export const extractTokenFromResponse = (response, data) => {
  // Try to get from Authorization header first
  const authHeader = response.headers.get('Authorization');
  if (authHeader) {
    return authHeader.replace('Bearer ', '');
  }
  
  // Some APIs return token in response body
  if (data?.token) {
    return data.token;
  }
  
  if (data?.data?.token) {
    return data.data.token;
  }
  
  return null;
};

// API utility functions
export const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });
      
      if (!response) {
        throw new Error('Network error: Unable to connect to server.');
      }
      
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        throw new Error('Invalid response from server');
      }
      
      if (!response.ok) {
        throw new Error(data.status?.message || data.message || `Request failed: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        throw new Error('Network error: Unable to connect to server. Please ensure the backend is running.');
      }
      throw error;
    }
  },

  post: async (endpoint, body) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      // Handle network errors or CORS failures
      if (!response) {
        throw new Error('Network error: Unable to connect to server. Please ensure the backend is running.');
      }
      
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        // If response is not JSON, check status
        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        throw new Error('Invalid response from server');
      }
      
      if (!response.ok) {
        throw new Error(data.status?.message || data.message || `Request failed: ${response.status}`);
      }
      
      // Extract token if present
      const token = extractTokenFromResponse(response, data);
      if (token) {
        setToken(token);
      }
      
      return data;
    } catch (error) {
      // Handle network errors (CORS, connection refused, etc.)
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        throw new Error('Network error: Unable to connect to server. Please ensure the backend is running on http://localhost:3000');
      }
      throw error;
    }
  },

  patch: async (endpoint, body) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.status?.message || 'Request failed');
    }
    
    return data;
  },

  delete: async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.status?.message || 'Request failed');
    }
    
    return data;
  },
};

export default api;
