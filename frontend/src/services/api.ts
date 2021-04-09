import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
});


export const nasaApi = axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`,
});