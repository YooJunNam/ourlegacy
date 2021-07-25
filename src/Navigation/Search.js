import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput/SearchInput';

const Search = withRouter(({ history, closeHandler }) => {
  return (
    <SearchContainer onClick={(e) => e.stopPropagation()}>
      <ProductSearch>
        <SearchInput
          closeHandler={closeHandler}
          history={history}
        ></SearchInput>
        <SearchBtn>
          <span class="MuiIconButton-label">
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </span>
        </SearchBtn>
      </ProductSearch>
    </SearchContainer>
  );
});

const SearchContainer = styled.div`
  text-align: center;
  margin-top: 190px;
  max-height: 100%;
  padding-top: 30px;
  height: 80px;
  background-color: white;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
  z-index: 1200;
`;
const ProductSearch = styled.div`
  display: inline-flex;
  width: 70%;
  border-bottom: 1px solid;
`;

const SearchBtn = styled.button`
  flex: 1;
  border: none;
  background: white;
`;
export default Search;
