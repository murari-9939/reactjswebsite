import axios from "axios";
import Cookies from "js-cookie";

// API Base URL
// const API_BASE_URL = "https://localhost:44345/api/User";

// Create Axios Instance with Default Config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization Header Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);