import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from './App';
import BasketDrawer from './components/basket-drawer/BasketDrawer';
import NavMenu from './Navigation/NavMenu';

const Header = ({ openSearchModal, switchHamburger }) => {
  const [modal, setModal] = useState('category');
  const [hover, setHover] = useState(false);
  const [basketVisible, setBasketVisible] = useState(false);
  const { userState, updateUserState } = useContext(UserContext);

  return (
    <Fragment>
      <div className="Page">
        <div className="Header">
          <Link
            to="/"
            style={{ 'min-width': '400px', height: 'auto', padding: '25px' }}
          >
            <Logo focusable="false" viewBox="0 0 313 37" aria-hidden="true">
              <path d="M33.37 18.55C33.37 29.993 27.02 37 16.686 37S0 29.993 0 18.55C0 7.108 6.351.1 16.685.1s16.686 6.957 16.686 18.45zm-25.86 0c0 7.41 3.48 11.998 9.175 11.998 5.696 0 9.175-4.537 9.175-11.998 0-7.46-3.479-11.997-9.175-11.997-5.696 0-9.174 4.537-9.174 11.997zm58.525 4.134c0 9.326-5.04 14.266-14.013 14.266-8.973 0-14.014-4.94-14.014-14.266V.907h7.259v21.575c0 5.243 2.37 8.066 6.755 8.066 4.335 0 6.755-2.823 6.755-8.066V.907h7.258zM85.342.907c8.872 0 12.904 3.68 12.904 9.981 0 4.335-2.47 7.511-6.452 8.62v.101c2.47.907 3.68 2.37 5.293 6.856l3.529 9.779h-7.914l-2.823-8.368c-1.311-3.78-2.722-5.091-6.2-5.091h-4.033v13.459h-7.26V.907zm-5.696 15.98h5.192c4.385 0 6.1-1.966 6.1-5.192 0-3.428-2.32-4.89-6.503-4.89h-4.739v10.082zm62.557 13.056v6.25h-23.944V.907h7.259v29.036zm12.804-22.835v7.964h15.929v6.2h-15.93v8.62h17.543v6.251h-24.801V.907h24.398v6.251h-17.14zm53.332 4.788h-7.813c-.656-3.478-2.974-5.343-6.906-5.343-5.646 0-9.225 4.537-9.225 12.149 0 7.712 3.478 12.45 9.073 12.45 5.041 0 7.814-2.923 7.915-8.367h-8.368v-5.999h15.173v19.357h-6.15v-3.831h-.1c-1.967 2.773-5.596 4.486-10.284 4.486-9.023 0-14.77-6.906-14.77-18.197C176.884 7.057 183.336 0 193.62 0c8.67.1 13.963 4.638 14.719 11.896zm14.568 15.627l-2.772 8.62h-7.612L224.773.857h9.779L246.8 36.143h-7.612l-2.722-8.62zm10.838-8.57c-1.411-4.536-2.823-9.224-4.033-13.76h-.1c-1.21 4.536-2.52 9.224-3.983 13.76l-.756 2.32h9.578zm45.317-5.847h-7.309c-.454-4.133-3.176-6.603-7.259-6.603-5.343 0-8.62 4.537-8.62 11.997s3.227 11.997 8.47 11.997c4.183 0 6.905-2.42 7.41-6.754h7.46c-.706 8.367-6.301 13.156-14.921 13.156-9.93 0-15.98-7.007-15.98-18.45 0-11.392 6.15-18.449 16.13-18.449 8.722.1 14.267 5.444 14.62 13.106zm21.071 23.037h-7.259V22.432L280.776.907h8.167l3.377 6.654a144.404 144.404 0 014.133 8.973h.101c1.26-3.024 2.622-6.049 4.134-8.973l3.377-6.654h8.116l-12.048 21.575z"></path>
            </Logo>
          </Link>
          <HamburgerBtn
            onClick={() => {
              switchHamburger();
            }}
          >
            <img src="https://img.icons8.com/material-outlined/24/000000/menu--v3.png" />
          </HamburgerBtn>
        </div>

        <MenuBar>
          <FirstBlock>
            <HiddenButton
              onClick={() => {
                openSearchModal();
              }}
            >
              SEARCH
            </HiddenButton>
          </FirstBlock>

          <SecondBlock>
            <CenterMenuList
              isHovered={hover}
              onMouseLeave={() => {
                setModal('category');
                setHover(false);
              }}
            >
              <WhiteCategory
                isHovered={hover}
                onMouseOver={() => {
                  setModal('man');
                  setHover(true);
                }}
              >
                MENS
              </WhiteCategory>

              <WhiteCategory
                isHovered={hover}
                onMouseOver={() => {
                  setModal('woman');
                  setHover(true);
                }}
              >
                WOMENS
              </WhiteCategory>

              <WhiteCategory
                isHovered={hover}
                onMouseOver={() => {
                  setModal('collections');
                  setHover(true);
                }}
              >
                COLLECTIONS
              </WhiteCategory>

              <WhiteCategory
                isHovered={hover}
                onMouseOver={() => {
                  setModal('info');
                  setHover(true);
                }}
              >
                INFO
              </WhiteCategory>
              {modal == 'man' ? (
                <NavMenu categoryName="mens" />
              ) : modal == 'woman' ? (
                <NavMenu categoryName="womens" />
              ) : modal == 'collections' ? (
                <NavMenu categoryName="collections" />
              ) : modal == 'info' ? (
                <NavMenu categoryName="infos" />
              ) : undefined}
            </CenterMenuList>
          </SecondBlock>

          <ThirdBlock>
            <HiddenButton
              onClick={() => {
                setBasketVisible(true);
              }}
            >
              BASKET / 0
            </HiddenButton>

            {userState ? (
              <Link
                to="/orderlist"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <HiddenButton>ACCOUNT</HiddenButton>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <HiddenButton>ACCOUNT</HiddenButton>
              </Link>
            )}
          </ThirdBlock>
        </MenuBar>

        {/* <Serarch/> */}
      </div>
      <BasketDrawer
        visible={basketVisible}
        onClose={() => {
          setBasketVisible(false);
        }}
        width={414}
      ></BasketDrawer>
    </Fragment>
  );
};

const Logo = styled.svg`
  height: 70%;
`;

const HamburgerBtn = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 1.8rem;
  border: none;
  background: none;
  height: 5%;
  @media (min-width: 1060px) {
    display: none;
  }
  z-index: 2000;
`;

const MenuBar = styled.div`
  display: flex;
  font-size: 1.1rem;
  padding-top: 1rem;
  text-align:center;
  font-family:  font-family: "Neue Haas Unica Pro", "Helvetica", "Arial", sans-serif;
  @media (max-width: 1060px) {
      display: none;
    }

  `;

const HiddenButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  align-items: center;
  display: inline-flex;
  margin-right: 10%;
`;

const CenterMenuList = styled.div`
  width: 65%;

  ${(props) => !props.isHovered} {
    background-color: black;
    color: white;
  }
`;

const WhiteCategory = styled(HiddenButton)`
  margin-right: 3%;
  margin-left: 2%;

  ${(props) => !props.isHovered} {
    background-color: black;
    color: white;
  }
`;

const FirstBlock = styled.div`
  flex: 1;
  margin-left: 2%;
`;

const SecondBlock = styled.div`
  display: flex;
  flex: 2.5;
  justify-content: center;
`;

const ThirdBlock = styled.div`
  flex: 1.1;
`;

export default Header;
