import { Alert } from 'antd';
import React, { useEffect, useState } from 'react';
import ItemList from '../components/item-list/ItemList';
import { getItemsByCategoryId } from '../lib/api/items';

function Category(props) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  function getCategory(categoryId) {
    getItemsByCategoryId(categoryId)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    getCategory(props.match.params.categoryId);
  }, [props.match.params.categoryId]);

  if (error)
    return (
      <Alert
        message="Error"
        description="Try Again Please."
        type="error"
        showIcon
      />
    );

  return <ItemList items={items} />;
}

export default Category;
