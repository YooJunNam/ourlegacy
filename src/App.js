import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import styled from 'styled-components';
import Search from './modal/Search';
import { Link, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Detail from './pages/Detail';
import MobileCategory from './mobile/MobileCategory';
import MobileBasketModal from './mobile/MobileBasketModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchClose, setSearchClose] = useState(true);
  const openSearchModal = () => {
    setSearchClose(false);
  };
  const [HamburgerModal, SetHamburgerModal] = useState(false);
  const OpenHamburger = () => {
    SetHamburgerModal((prevState) => !prevState);
  };

  const [MobileBasketdata, SetMobileBasketdata] = useState(false);

  const handleOpenBasket = () => {
    SetMobileBasketdata(true);
  };
  return (
    <div className="App">
      {MobileBasketdata == true ? <MobileBasketModal /> : undefined}
      <Header
        openSearchModal={openSearchModal}
        OpenHamburger={OpenHamburger}
      ></Header>

      <Route exact={true} path="/">
        {HamburgerModal == true ? (
          <MobileCategory
            HamburgerModal={HamburgerModal}
            SetMobileBasketdata={SetMobileBasketdata}
          ></MobileCategory>
        ) : (
          <>
            <Body></Body>
          </>
        )}
      </Route>

      <Route exact={true} path="/category">
        {HamburgerModal == true ? (
          <MobileCategory
            HamburgerModal={HamburgerModal}
            SetMobileBasketdata={SetMobileBasketdata}
          ></MobileCategory>
        ) : (
          <>
            <Category />
          </>
        )}
      </Route>

      <Route exact={true} path="/detail/:itemId" component={Detail}></Route>

      <Route exact={true} path="/contact">
        {HamburgerModal == true ? (
          <MobileCategory
            HamburgerModal={HamburgerModal}
            SetMobileBasketdata={SetMobileBasketdata}
          ></MobileCategory>
        ) : (
          <>
            <Contact />
          </>
        )}
      </Route>
      {HamburgerModal == true ? undefined : (
        <>
          <Footer></Footer>
        </>
      )}

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
