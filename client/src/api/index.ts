import axios from 'axios';
export * from './user';

export const clientApi = axios.create({
  baseURL: 'http://localhost:8091',
  withCredentials: true,
});
