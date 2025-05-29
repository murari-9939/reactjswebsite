import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const API_URL = 'https://localhost:44345/api/Userloginfetch';

// Function to handle user login
export const loginUser = async (name, password) => {
  try {
    const response = await axios.post(`${API_URL}/Login`, { name, password });

    if (response.data.token && response.data.refreshToken) {
      const secureFlag = true; // Always use secure cookies
      const sameSitePolicy = 'Strict'; // Prevent cross-site access

      // Store all user-related data in secure cookies and sessionStorage
      Cookies.set('token', response.data.token, { secure: secureFlag, sameSite: sameSitePolicy });
      Cookies.set('refreshToken', response.data.refreshToken, { secure: secureFlag, sameSite: sameSitePolicy });
      Cookies.set('userId', response.data.userid, { secure: secureFlag, sameSite: sameSitePolicy }); // Store userId in cookies
      Cookies.set('name', response.data.name, { secure: secureFlag, sameSite: sameSitePolicy });
      Cookies.set('role', response.data.role, { secure: secureFlag, sameSite: sameSitePolicy });

      // Store in sessionStorage for temporary use
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('refreshToken', response.data.refreshToken);
      sessionStorage.setItem('userId', response.data.userid); // Store userId in sessionStorage
      sessionStorage.setItem('name', response.data.name);
      sessionStorage.setItem('role', response.data.role);

      // Return success message
      return { success: true, message: response.data.message };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  } catch (error) {
    console.error('Login failed:', error);
    return { success: false, message: 'Login failed. Please try again.' };
  }
};

// Axios interceptor to add Authorization header to each request
axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token') || sessionStorage.getItem('token'); // Get token from cookies or sessionStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Attach token to request header
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios interceptor to handle token expiration and refresh automatically
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();
      if (newToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

// Function to handle token refresh
export const refreshAccessToken = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken') || sessionStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token found');

    const response = await axios.post(`${API_URL}/RefreshToken`, { refreshToken });

    if (response.data.token) {
      Cookies.set('token', response.data.token, { secure: true, sameSite: 'Strict' });
      sessionStorage.setItem('token', response.data.token); // Store new token in sessionStorage
      return response.data.token;
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Token refresh error:', error);
    logoutUser(); // Logout user if refresh fails
    return null;
  }
};

// Function to handle user logout
export const logoutUser = () => {
  // Remove all cookies and sessionStorage
  Cookies.remove('token');
  Cookies.remove('refreshToken');
  Cookies.remove('userId');
  Cookies.remove('name');
  Cookies.remove('role');
  
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('refreshToken');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('name');
  sessionStorage.removeItem('role');

  // Show logout confirmation
  Swal.fire({
    icon: 'success',
    title: 'Logged out',
    text: 'You have been successfully logged out.',
  });
};
