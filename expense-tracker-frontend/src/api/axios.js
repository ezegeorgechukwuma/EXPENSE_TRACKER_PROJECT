import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ Update if hosted
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
// This Axios instance is configured to communicate with the backend API.
// It sets the base URL and default headers for all requests.