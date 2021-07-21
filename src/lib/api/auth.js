import axios from 'axios';
import { baseUrl } from '../../static/axios-config';
import client from './client';

export const login = async (username, password) => {
  return axios.post(
    `${baseUrl}/api/login`,
    { username, password },
    { withCredentials: true },
  );
};

export const logout = () => {
  return client.get('api/logout', { withCredentials: true });
};

export const signin = (userInfo) => {
  return client.post('api/signin', userInfo, { withCredentials: true });
};
