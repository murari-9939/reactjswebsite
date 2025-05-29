// import {jwtDecode} from 'jwt-decode';

// export const decodeToken = (token) => {
//   if (!token) {
//     console.error('No token provided for decoding');
//     return null;
//   }

//   try {
//     return jwtDecode(token);
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// };

// export const checkIfTokenExpired = (token) => {
//   const decoded = decodeToken(token);
//   if (!decoded) return true;

//   const expiryDate = decoded.exp * 1000; // Convert to milliseconds
//   return Date.now() >= expiryDate;
// };

// export const getDecodedUserId = () => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     console.error('No token found in localStorage');
//     return null;
//   }

//   const decoded = decodeToken(token);
//   return decoded?.UserId || null;
// };


import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = 'https://localhost:44345/api/Userloginfetch/RefreshToken';

// Decode the token
export const decodeToken = (token) => {
  if (!token) {
    console.error('No token provided for decoding');
    return null;
  }

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

// Check if the token has expired
export const checkIfTokenExpired = (token) => {
  const decoded = decodeToken(token);
  if (!decoded) return true;

  const expiryDate = decoded.exp * 1000; // Convert to milliseconds
  return Date.now() >= expiryDate;
};

// Get the user ID from the decoded token
export const getDecodedUserId = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found in localStorage');
    return null;
  }

  const decoded = decodeToken(token);
  return decoded?.UserId || null;
};

// // Refresh the access token using the refresh token
// export const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem('refreshToken');
//     if (!refreshToken) {
//       console.error('No refresh token available');
//       return null;
//     }

//     // Make the API call to refresh the token
//     const response = await axios.post(`${BASE_URL}/RefreshToken`, { refreshToken });

//     const { token } = response.data;

//     if (token) {
//       localStorage.setItem('token', token);  // Save the new access token
//       return token;  // Return the new access token
//     } else {
//       console.error('Failed to refresh token: No token returned');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error refreshing token:', error);
//     return null;
//   }
// };
