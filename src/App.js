import React, { Component, useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import styled from 'styled-components';
import Search from './Modal/Search';
import { Link, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Detail from './pages/Detail';
function App() {
  const [searchClose, setSearchClose] = useState(true);

  const openSearchModal = () => {
    setSearchClose(false);
  };

  return (
    <div className="App">
      <Header openSearchModal={openSearchModal}></Header>

      <Route exact={true} path="/">
        <Body></Body>
      </Route>

      <Route exact={true} path="/category">
        <Category />
      </Route>

      <Route exact={true} path="/detail">
        <Detail />
      </Route>

      <Route exact={true} path="/contact">
        <Contact />
      </Route>
      <Footer></Footer>
      <SearchModalContainer
        isClosed={searchClose}
        style={{
          position: 'fixed',
          'z-index': 1300,
          inset: '0px',
        }}
        searchClose={searchClose}
        onClick={(e) => {
          setSearchClose(true);
        }}
      >
        <Search />
      </SearchModalContainer>
    </div>
  );
}

const SearchModalContainer = styled.div`
  display: ${(props) => (props.isClosed ? 'none' : 'block')};
`;
export default App;
