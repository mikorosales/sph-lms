import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ANALYTICS_API_BASE_URL
});

export default axiosInstance;
