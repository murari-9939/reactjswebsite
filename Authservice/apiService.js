// userProfileService.js
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'https://localhost:44345/api/User';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Authorization header to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');  // Get token from cookies
    console.log('Token in request:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fetch User Profile
export const fetchUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/GetUserProfile');
    console.log('User profile response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data.message || 'Failed to load user profile',
    };
  }
};
