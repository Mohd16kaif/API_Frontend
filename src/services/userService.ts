import { apiCall, apiCallWithAuth } from '@/lib/api';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export const userService = {
  // Public endpoints
  login: (credentials: LoginRequest) => 
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  register: (userData: RegisterRequest) => 
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  // Protected endpoints
  getCurrentUser: (token: string) => 
    apiCallWithAuth('/users/me', token),

  getAllUsers: (token: string) => 
    apiCallWithAuth('/users', token),
};