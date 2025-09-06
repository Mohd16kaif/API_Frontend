// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://fortunate-rebirth-production.up.railway.app/api';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
};

// Helper function for API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Auth helper for protected endpoints
export const apiCallWithAuth = async (endpoint: string, token: string, options: RequestInit = {}) => {
  return apiCall(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    },
  });
};

// Example service functions
export const authService = {
  login: (credentials: { username: string; password: string }) => 
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  register: (userData: { username: string; email: string; password: string }) => 
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
};

export const userService = {
  getCurrentUser: (token: string) => 
    apiCallWithAuth('/users/me', token),

  getAllUsers: (token: string) => 
    apiCallWithAuth('/users', token),
};