import 'dotenv/config'
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
});


export const nasaApi = axios.create({
  baseURL: process.env.NASA_API_URL,
});