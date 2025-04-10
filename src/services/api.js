import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // backend
  withCredentials: true, // se usi cookie (può rimanere anche se usi solo token)
});

// ✅ Interceptor per aggiungere automaticamente il token JWT
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Aggiunge Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
