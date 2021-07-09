import React from 'react';
import styled from 'styled-components';

function MobileMen() {
  return (
    <MenCategoryList>
      <div>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>NEW ARRIVALS</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>SHIRTING</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>JERSEY</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>OUTWEAR</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>JEANS</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>LEATHER</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>KNITWEAR</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>SUITING</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>TROUSERS</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>SHORTS</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>SHOES</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>ACCESSORIES</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>JEWELERY</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>BAGS & WALLETS</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>EYEWEAR</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>BOOKS</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>HANDS</a>
          </CategoryBtn>
        </MenCategoryDetail>
        <MenCategoryDetail>
          <CategoryBtn>
            <a>WORK SHOP STÜSSY</a>
          </CategoryBtn>
        </MenCategoryDetail>
      </div>
    </MenCategoryList>
  );
}

const MenCategoryList = styled.div`
  font-size: 1rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  padding-left: 2rem;
`;

const MenCategoryDetail = styled.div`
  margin-bottom: 1rem;
`;

const CategoryBtn = styled.span`
  cursor: pointer;
`;
export default MobileMen;
