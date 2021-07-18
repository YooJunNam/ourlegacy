import axios from 'axios';
import { baseUrl } from '../../static/axios-config';

const client = axios.create({ baseURL: baseUrl });

export default client;
