import axios from 'axios';

const BASE_URL = 'https://codespark-server.onrender.com/api'

// const TEST_URL = 'http:localhost:7777'

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance
