import { Alert } from 'antd';
import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { searchItems } from '../lib/api/items';

const SearchResultPage = ({ match }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const search = (query) => {
    searchItems(query)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    search(match.params.query);
  }, []);

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
};

export default SearchResultPage;
