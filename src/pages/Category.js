import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <Container>
      <CategoryContainer>
        <ProductCategory>
          <Link to="/detail">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
              alt="CAPE PARKA"
              width="400px"
              margin="6px"
            ></img>
          </Link>

          <img
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></img>
          <img
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></img>
        </ProductCategory>
      </CategoryContainer>

      <CategoryContainer>
        <ProductCategory>
          <Link to="/detail">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
              alt="CAPE1 PARKA"
              width="400px"
            ></img>
          </Link>
          <img
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></img>
          <img
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></img>

          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
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
`;

const ProductCategory = styled.div`
  width: 80%;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(2rem, 1fr);
`;

export default Category;
