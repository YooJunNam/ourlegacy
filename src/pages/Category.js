import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <Container>
      <CategoryContainer>
        <ProductCategory>
          <Link to="/detail">
            <CategoryImage
              src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
              alt="CAPE PARKA"
              width="400px"
              height="844px"
              margin="6px"
            ></CategoryImage>
          </Link>

          <CategoryImage
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></CategoryImage>
          <CategoryImage
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></CategoryImage>

          <Link to="/detail">
            <CategoryImage
              src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
              alt="CAPE1 PARKA"
              width="400px"
            ></CategoryImage>
          </Link>
          <CategoryImage
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></CategoryImage>
          <CategoryImage
            src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
            alt="CAPE1 PARKA"
            width="400px"
          ></CategoryImage>
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
