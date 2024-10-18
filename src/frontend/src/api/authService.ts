import { AxiosError } from 'axios';
import axiosInstance from './axiosConfig';

// Function to handle user registration
export const registerUser = async (userData: any) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || 'Error during registration';
    } else {
      throw 'An unexpected error occurred during registration';
    }
  }
};

// Function to handle user login
export const loginUser = async (credentials: any) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    console.log('login response: ', response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || 'Error during login';
    } else {
      throw 'An unexpected error occurred during login';
    }
  }
};

// Function to verify OTP (during registration)
export const verifyRegistrationOtp = async (data: any) => {
  try {
    const response = await axiosInstance.post('/auth/verify-register', data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || 'Error verifying OTP';
    } else {
      throw 'An unexpected error occurred during OTP verification';
    }
  }
};

// Function to verify OTP (during login)
export const verifyLoginOtp = async (data: any) => {
  try {
    const response = await axiosInstance.post('/auth/verify-login', data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || 'Error verifying OTP';
    } else {
      throw 'An unexpected error occurred during OTP verification';
    }
  }
};

// Function to resend OTP
export const resendOtp = async (email: string) => {
  try {
    const response = await axiosInstance.post('/auth/resend-otp', { email });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || 'Error resending OTP';
    } else {
      throw 'An unexpected error occurred during OTP resending';
    }
  }
};

// Function to get logged-in user details
export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || 'Error fetching user details';
    } else {
      throw 'An unexpected error occurred while fetching user details';
    }
  }
};
