import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'antd';

function Category() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  function getItemsByCategory(categoryId) {
    axios
      .get(`http://192.168.25.48:3000/items/category/${categoryId}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    getItemsByCategory();
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

  return (
    <Container>
      <CategoryContainer>
        <ProductCategory>
          {items.map((item) => (
            <CategoryImage
              src={item.thumbnail}
              alt={item.name}
              width="400px"
            ></CategoryImage>
          ))}
          {/* <Link to="/detail">
            <CategoryImage
              src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
              alt="CAPE1 PARKA"
              width="400px"
            ></CategoryImage>
          </Link>
    */}
        </ProductCategory>
      </CategoryContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 180px;
`;
const CategoryContainer = styled.section`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProductCategory = styled.div`
  width: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2rem, 1fr);
  grid-column-gap : 5px;
  grid-row-gap : 5px;
  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(2rem, 1fr);
  

    `;

const CategoryImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export default Category;
