import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.artic.edu',
});

export default axiosInstance;
