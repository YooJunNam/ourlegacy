import React, { useState, useContext, createContext } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import styled from 'styled-components';
import Search from './Navigation/Search';
import { Link, Route, Switch } from 'react-router-dom';
import Category from './pages/Category';
import Detail from './pages/Detail';
import MobileCategory from './mobile/MobileCategory';
import MobileBasketModal from './mobile/MobileBasketModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/account/Login';
import Contact from './pages/Contact';

export const UserContext = createContext();
function App() {
  const [userState, setUserState] = useState(null);
  const [searchClose, setSearchClose] = useState(true);
  const [HamburgerModal, setHamburgerModal] = useState(false);
  const [MobileBasketdata, SetMobileBasketdata] = useState(false);

  const openSearchModal = () => {
    setSearchClose(false);
  };

  const switchHamburger = () => {
    setHamburgerModal((prev) => !prev);
  };

  const closeHambugerModal = () => {
    console.log(`closeHamburger`);
    setHamburgerModal(false);
  };

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {userState ? <div>로그인</div> : <div>미로그인</div>}
      <div className="App">
        {MobileBasketdata == true ? <MobileBasketModal /> : undefined}
        <Header
          openSearchModal={openSearchModal}
          switchHamburger={switchHamburger}
        ></Header>

        <Route
          exact={true}
          path="/"
          render={() => {
            return HamburgerModal == true ? (
              <MobileCategory
                HamburgerModal={HamburgerModal}
                SetMobileBasketdata={SetMobileBasketdata}
                closeHamburgerModal={closeHambugerModal}
              ></MobileCategory>
            ) : (
              <>
                <Body></Body>
              </>
            );
          }}
        ></Route>
        <Route exact={true} path="/login" component={Login}></Route>

        <Route
          exact={true}
          path="/category/:categoryId"
          render={(props) => {
            return HamburgerModal == true ? (
              <MobileCategory
                {...props}
                HamburgerModal={HamburgerModal}
                SetMobileBasketdata={SetMobileBasketdata}
                closeHamburgerModal={closeHambugerModal}
              ></MobileCategory>
            ) : (
              <Category {...props} />
            );
          }}
        ></Route>

        <Route
          exact={true}
          path="/detail/:itemId"
          render={(props) => {
            return HamburgerModal == true ? (
              <MobileCategory
                {...props}
                HamburgerModal={HamburgerModal}
                SetMobileBasketdata={SetMobileBasketdata}
                closeHamburgerModal={closeHambugerModal}
              ></MobileCategory>
            ) : (
              <Detail {...props} />
            );
          }}
        ></Route>

        <Route
          exact={true}
          path="/contact"
          render={() => {
            return HamburgerModal == true ? (
              <MobileCategory
                HamburgerModal={HamburgerModal}
                SetMobileBasketdata={SetMobileBasketdata}
                closeHamburgerModal={closeHambugerModal}
              ></MobileCategory>
            ) : (
              <>
                <Contact />
              </>
            );
          }}
        ></Route>

        {/* {HamburgerModal == true ? undefined : (
          <>
            <Footer></Footer>
          </>
        )} */}

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
    </UserContext.Provider>
  );
}

const SearchModalContainer = styled.div`
  display: ${(props) => (props.isClosed ? 'none' : 'block')};
`;
export default App;
