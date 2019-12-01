import axios from 'axios';
import {
  API_URL
} from 'react-native-dotenv';

const API = axios.create({
  baseURL: 'http://192.168.18.3:8080',
});

export default API;