import client from './client';

export const getOrderItem = () => {
  return client.get(`order`);
};

export const postOrderItem = (cartIds) => {
  return client.post(`order`, { cartIds });
};
