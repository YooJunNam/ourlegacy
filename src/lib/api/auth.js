import client from './client';

export const login = (username, password) => {
  return client.post(`api/login`, { username, password });
};

export const logout = () => {
  return client.get('api/logout');
};