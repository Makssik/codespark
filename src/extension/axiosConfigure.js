import axios from 'axios';

const BASE_URL = 'https://codespark-server.onrender.com/api'

// const BASE_URL = 'http://localhost:7777/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance
