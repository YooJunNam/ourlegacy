import { baseUrl } from '../../static/axios-config';
import client from './client';

export const login = async (username, password) => {
  return client.post(`${baseUrl}/api/login`, { username, password });
};

export const logout = () => {
  return client.get('api/logout');
};

export const signin = (userInfo) => {
  return client.post('api/signin', userInfo);
};

export const checkStatus = () => {
  return client.get('api/check');
};
