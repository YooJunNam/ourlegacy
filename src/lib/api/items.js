import client from './client';

export const getItemsByCategoryId = (categoryId) => {
  return client.get(`items/category/${categoryId}`);
};

export const getItemByItemId = (itemId) => {
  return client.get(`items/${itemId}`);
};
