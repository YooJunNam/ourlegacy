import React from 'react';
import styled from 'styled-components';

function MobileInfo() {
  return (
    <InfoCategoryList>
      <div>
        <InfoCategory>
          <CategoryBtn>
            <a>STORES</a>
          </CategoryBtn>
        </InfoCategory>
        <InfoCategory>
          <CategoryBtn>
            <a>CONTACT</a>
          </CategoryBtn>
        </InfoCategory>
        <InfoCategory>
          <CategoryBtn>
            <a>ABOUT</a>
          </CategoryBtn>
        </InfoCategory>
        <InfoCategory>
          <CategoryBtn>
            <a>CAREERS</a>
          </CategoryBtn>
        </InfoCategory>
        <InfoCategory>
          <CategoryBtn>
            <a>SHOWROOM</a>
          </CategoryBtn>
        </InfoCategory>
      </div>
    </InfoCategoryList>
  );
}

const InfoCategoryList = styled.div`
  font-size: 1rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  padding-left: 2rem;
`;

const InfoCategory = styled.div`
  margin-bottom: 1rem;
`;

const CategoryBtn = styled.span`
  cursor: pointer;
`;
export default MobileInfo;
