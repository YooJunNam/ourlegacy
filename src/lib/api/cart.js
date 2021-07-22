import client from './client';

export const getUserCart = () => {
  return client.get(`cart`);
};

export const createCart = (itemId, count, optionId) => {
  console.log(optionId);
  return client.post(`cart`, { itemId, count, optionId });
};

export const removeCartList = (cartId) => {
  return client.delete(`cart/${cartId}`);
};
