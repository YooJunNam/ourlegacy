import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { checkStatus } from './lib/api/auth';
import MobileBasketModal from './mobile/MobileBasketModal';
import MobileCategory from './mobile/MobileCategory';
import Search from './Navigation/Search';
import Login from './pages/account/Login';
import OrderList from './pages/account/OrderList';
import Signin from './pages/account/Sign-in';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import SearchResultPage from './pages/SearchResult';
export const UserContext = createContext();

function App() {
  const [userState, setUserState] = useState(null);
  const [cartState, setCartState] = useState(
    window.localStorage.getItem('cart') ?? [],
  );
  const [searchClose, setSearchClose] = useState(true);
  const [HamburgerModal, setHamburgerModal] = useState(false);
  const [MobileBasketdata, SetMobileBasketdata] = useState(false);

  const initializeUserInfo = async () => {
    const userInfo = window.localStorage.getItem('user');
    if (!userInfo) return;

    try {
      await checkStatus();
      setUserState(userInfo);
    } catch (e) {
      window.localStorage.removeItem('user');
      // window.location.href = '/login;
    }
  };

  useEffect(() => {
    initializeUserInfo();
  }, []);

  const openSearchModal = () => {
    setSearchClose(false);
  };

  const switchHamburger = () => {
    setHamburgerModal((prev) => !prev);
  };

  const closeHambugerModal = () => {
    setHamburgerModal(false);
  };

  const updateUserState = (state) => {
    try {
      window.localStorage.setItem('user', JSON.stringify(state));
      setUserState(window.localStorage.getItem('user') ?? userState);
    } catch (err) {
      console.log(`LocalStorage is not avaliable`);
    }
  };

  return (
    <UserContext.Provider value={{ userState, updateUserState }}>
      <div className="App">
        {MobileBasketdata == true ? <MobileBasketModal /> : undefined}
        <Header
          openSearchModal={openSearchModal}
          switchHamburger={switchHamburger}
        ></Header>

        <Route
          exact={true}
          path="/"
          render={(props) => {
            return HamburgerModal == true ? (
              <MobileCategory
                {...props}
                HamburgerModal={HamburgerModal}
                SetMobileBasketdata={SetMobileBasketdata}
                closeHamburgerModal={closeHambugerModal}
              ></MobileCategory>
            ) : (
              <>
                <Body></Body>
                {/* {<OrderList></OrderList>} */}
              </>
            );
          }}
        ></Route>
        <Route exact={true} path="/login" component={Login}></Route>
        <Route exact={true} path="/signin" component={Signin}></Route>
        <Route
          exact={true}
          path="/search/:query"
          component={SearchResultPage}
        ></Route>

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

        <Route
          exact={true}
          path="/orderlist"
          render={(props) => {
            return HamburgerModal == true ? (
              <MobileCategory
                {...props}
                HamburgerModal={HamburgerModal}
                SetMobileBasketdata={SetMobileBasketdata}
                closeHamburgerModal={closeHambugerModal}
              ></MobileCategory>
            ) : (
              <OrderList {...props} />
            );
          }}
        ></Route>

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
          <Search
            closeHandler={() => {
              setSearchClose(true);
            }}
          />
        </SearchModalContainer>
      </div>
    </UserContext.Provider>
  );
}

const SearchModalContainer = styled.div`
  display: ${(props) => (props.isClosed ? 'none' : 'block')};
`;
export default App;
