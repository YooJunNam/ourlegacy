import client from './client';

export const getUserCart = () => {
  return client.get(`cart`);
};

export const createCart = (itemId, count) => {
  return client.post(`cart`, { itemId, count });
};

export const removeCartList = (cartId) => {
  return client.delete(`cart/${cartId}`);
};
