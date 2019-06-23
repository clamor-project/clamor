import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:1234',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});