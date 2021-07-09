import React from 'react';
import styled from 'styled-components';

function MobileWomen() {
  return (
    <WomenCategoryList>
      <div>
        <WomenCategory>
          <CategoryBtn>
            <a>NEW ARRIVALS</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>SHIRTING</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>JERSEY</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>TOPS</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>SKITRS</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>TROUSERS</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>LEATHER</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>SUITING</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>OUTWEAR</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>JEANS</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>KNITWEAR</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>SHOES</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>ACCESSORIES</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>JEWELERY</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>BAGS & WALLETS</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>EYEWEAR</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>BOOKS</a>
          </CategoryBtn>
        </WomenCategory>
        <WomenCategory>
          <CategoryBtn>
            <a>HANDS</a>
          </CategoryBtn>
        </WomenCategory>
      </div>
    </WomenCategoryList>
  );
}

const WomenCategoryList = styled.div`
  font-size: 1rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  padding-left: 2rem;
`;

const WomenCategory = styled.div`
  margin-bottom: 1rem;
`;

const CategoryBtn = styled.span`
  cursor: pointer;
`;
export default MobileWomen;
