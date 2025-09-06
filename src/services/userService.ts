import { apiCall, apiCallWithAuth } from '@/lib/api';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  currency: string;
  role: string;
  createdAt: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  type: string; // Should be "Bearer"
  user: User;
}

export const userService = {
  // Public endpoints
  login: (credentials: LoginRequest): Promise<AuthResponse> => 
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  register: (userData: RegisterRequest): Promise<AuthResponse> => 
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  // Protected endpoints
  getCurrentUser: (token: string): Promise<User> => 
    apiCallWithAuth('/user/profile', token),

  // Logout helper
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  // Get stored token
  getStoredToken: (): string | null => {
    return localStorage.getItem('authToken');
  },

  // Get stored user
  getStoredUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};