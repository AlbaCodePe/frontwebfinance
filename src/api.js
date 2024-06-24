import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Register user
export const registerUser = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

// Login user
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};
