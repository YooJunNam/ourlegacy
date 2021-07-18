import FormItemInput from 'antd/lib/form/FormItemInput';
import Item from 'antd/lib/list/Item';
import React from 'react';
import styled from 'styled-components';
import categories from '../static/categories';

function MobileCategoryDetail({ categoryName }) {
  return (
    <MobileCategoryList>
      <div>
        {categories[categoryName]?.level2?.map((item) => (
          <MobileCategoryDetailblock>
            <CategoryBtn>
              <a>{item.level2}</a>
            </CategoryBtn>
          </MobileCategoryDetailblock>
        ))}
      </div>
    </MobileCategoryList>
  );
}

const MobileCategoryList = styled.div`
  font-size: 1rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  padding-left: 2rem;
`;

const MobileCategoryDetailblock = styled.div`
  margin-bottom: 1rem;
`;

const CategoryBtn = styled.span`
  cursor: pointer;
`;
export default MobileCategoryDetail;
