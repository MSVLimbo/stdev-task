import axios from 'axios';

export const privateClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});
