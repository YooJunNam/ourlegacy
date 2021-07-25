import React, { useState } from 'react';
import styled from 'styled-components';

function SearchInput({ closeHandler, history }) {
  const [query, setQuery] = useState('');

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      closeHandler();
      e.target.value = '';
      history.push(`/search/${query}`);
    }
  };

  return (
    <SearchInputBox
      onChange={inputHandler}
      placeholder="Search product"
      onKeyPress={handleKeyPress}
    ></SearchInputBox>
  );
}
const SearchInputBox = styled.input`
  flex: 35;
  width: 800px;
  border: none;
`;

export default SearchInput;
