import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const signup = async (userData: {
  fullName: string;
  email: string;
  password: string;
  mobileNumber: string;
  dateOfBirth: string;
  gender: string;
  country: string;
  receiveEmails: boolean;
}) => {
  const response = await api.post('/auth/signup', userData);
  return response.data;
};