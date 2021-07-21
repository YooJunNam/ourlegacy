import axios from 'axios';
import { baseUrl } from '../../static/axios-config';

const client = axios.create({ baseURL: baseUrl, withCredentials: true });
client.defaults.withCredentials = true;

export default client;
