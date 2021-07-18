import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import MobileCategoryDetail from './MobileCategoryDetail';

import MobileBasketModal from './MobileBasketModal';
import { Drawer } from 'antd';
import BasketDrawer from '../components/basket-drawer/BasketDrawer';
import { ModalStore } from '../App';

const MobileCategory = ({
  HamburgerModal,
  SetMobileBasketdata,
  closeHamburgerModal,
}) => {
  const [MobileMenModal, SetMobileMenModal] = useState(false);
  const [MobileWomenModal, SetMobileWomenModal] = useState(false);
  const [MobileCollectionModal, SetMobileCollectionModal] = useState(false);
  const [MobileInformation, SetMobileInformation] = useState(false);

  const [visible, setVisible] = useState(false);

  const openBasketDrawer = () => {
    setVisible(true);
  };

  const closeBasketDrawer = () => {
    setVisible(false);
  };
  return (
    <>
      {HamburgerModal === true ? (
        <div style={{ marginLeft: '2rem', width: '80%' }}>
          <div style={{ textAlign: 'center', background: 'none' }}>
            <MobileSearch placeholder="SEARCH"></MobileSearch>
          </div>

          <List>
            <CategoryBtn
              onClick={() => {
                SetMobileMenModal((prevState) => !prevState);
              }}
            >
              MEN
            </CategoryBtn>
          </List>
          {MobileMenModal == true ? (
            <MobileCategoryDetail
              categoryName="mens"
              linkClickHandler={closeHamburgerModal}
            />
          ) : undefined}

          <List>
            <CategoryBtn
              onClick={() => {
                SetMobileWomenModal((prevState) => !prevState);
              }}
            >
              WOMEN
            </CategoryBtn>
          </List>
          {MobileWomenModal == true ? (
            <MobileCategoryDetail
              categoryName="womens"
              linkClickHandler={closeHamburgerModal}
            />
          ) : undefined}

          <List>
            <CategoryBtn
              onClick={() => {
                SetMobileCollectionModal((prevState) => !prevState);
              }}
            >
              COLLECTIONS
            </CategoryBtn>
          </List>
          {MobileCollectionModal == true ? (
            <MobileCategoryDetail
              categoryName="collections"
              linkClickHandler={closeHamburgerModal}
            />
          ) : undefined}

          <List>
            <CategoryBtn
              onClick={() => {
                SetMobileInformation((prevState) => !prevState);
              }}
            >
              INFO
            </CategoryBtn>
          </List>
          {MobileInformation == true ? (
            <MobileCategoryDetail
              categoryName="infos"
              linkClickHandler={closeHamburgerModal}
            />
          ) : undefined}

          <List>
            <CategoryBtn>ACCOUNT</CategoryBtn>
          </List>
          <List style={{ borderBottom: 'none' }}>
            <CategoryBtn onClick={openBasketDrawer}>BASKET / 0</CategoryBtn>
          </List>
        </div>
      ) : undefined}
      <BasketDrawer
        visible={visible}
        onClose={closeBasketDrawer}
      ></BasketDrawer>
    </>
  );
};

const MobileSearch = styled.input`
  margin-top: 7rem;
  border: none;
  font-size: 1rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 1060px) {
    display: none;
  }
`;

const List = styled.div`
  font-size: 1rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 2px solid;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  @media (min-width: 1060px) {
    display: none;
  }
`;

const CategoryBtn = styled.span`
  cursor: pointer;
`;

export default MobileCategory;
