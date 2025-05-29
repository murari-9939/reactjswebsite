import axios from 'axios';
import Swal from 'sweetalert2';
import { isTokenExpired } from './useAuthCheck';  // Check expired token
import { refreshAccessToken } from './tokenUtils'; // Refresh access token
const BASE_URL = 'https://localhost:44345/api/Userloginfetch';

export const loginUser1 = async (username, password, setRole, navigate) => {
  try {
    // First, attempt to login and receive the token
    const response = await axios.post(`${BASE_URL}/Login`, { name: username, password });
    const { token, refreshToken, role, message } = response.data;

    if (token) {
      // Store both token and refreshToken
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('role', role);

      Swal.fire({
        title: 'Success',
        text: message || 'Login successful!',
        icon: 'success',
        confirmButtonText: 'Okay',
      });

      setRole(role);
      navigate(role === 'Admin' ? '/admin-dashboard' : '/user-dashboard');
    } else {
      Swal.fire({
        title: 'Error',
        text: message || 'Invalid login credentials.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  } catch (error) {
    console.error('Login error:', error);

    // Check if the token expired and attempt to refresh it
    if (isTokenExpired()) {
      const newToken = await refreshAccessToken();
      if (newToken) {
        // If the refresh token works, continue the process
        localStorage.setItem('token', newToken);
        Swal.fire({
          title: 'Session refreshed',
          text: 'Your session has been refreshed.',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
        navigate('/'); // Redirect to the home page or any other route
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Unable to refresh session, please log in again.',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
        // Optionally, you can navigate to the login page
        // navigate('/login');
      }
    } else {
      // Handle other errors
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'An error occurred during login.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  }
};
