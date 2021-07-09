import React from 'react';
import styled from 'styled-components';

function MobileCollections() {
  return (
    <CollectionCategoryList>
      <div>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2021</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2020</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2020</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>PRE SPRING 2020</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2019</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>PRE FALL 2019</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2019</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2018</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2018</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2017</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2017</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2016</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2016</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2015</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2015</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2014</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2014</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2013</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2013</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>FALL 2012</a>
          </CategoryBtn>
        </CollectionCategory>
        <CollectionCategory>
          <CategoryBtn>
            <a>SPRING 2012</a>
          </CategoryBtn>
        </CollectionCategory>
      </div>
    </CollectionCategoryList>
  );
}

const CollectionCategoryList = styled.div`
  font-size: 1rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  padding-left: 2rem;
`;

const CollectionCategory = styled.div`
  margin-bottom: 1rem;
`;

const CategoryBtn = styled.span`
  cursor: pointer;
`;
export default MobileCollections;
