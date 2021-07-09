import React from 'react';
import styled from 'styled-components';

function MobileBasketModal() {
  return (
    <div>
      <CancelBtn>
        <CancelXicon viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </CancelXicon>
      </CancelBtn>
      <CartList>
        <span>YOUR CART LIST</span>
      </CartList>

      <div style={{ marginTop: '24rem' }}>
        <BasketContentContainer>
          <BasketContentLeft>SUBTOTAL :</BasketContentLeft>
          <BasketContentRight>EUR</BasketContentRight>
        </BasketContentContainer>
        <BasketContentContainer>
          <BasketContentLeft>SHIPPING :</BasketContentLeft>
          <BasketContentRight>EUR</BasketContentRight>
        </BasketContentContainer>
        <BasketContentContainer>
          <BasketContentLeft>TOTAL :</BasketContentLeft>
          <BasketContentRight>EUR</BasketContentRight>
        </BasketContentContainer>
        <CheckOut>
          <a>
            <span style={{ fontWeight: '700' }}>TO CHECKOUT</span>
          </a>
        </CheckOut>
      </div>
    </div>
  );
}

export default MobileBasketModal;

const CancelBtn = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const CancelXicon = styled.svg`
  height: 2rem;
  margin-top: 0.5rem;
`;

const CartList = styled.div`
  margin-top: 2.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const BasketContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BasketContentLeft = styled.div`
  margin-left: 1rem;
`;

const BasketContentRight = styled.div`
  margin-right: 1rem;
`;

const CheckOut = styled.div`
  margin-top: 1rem;
  color: rgba(0, 0, 0, 0.87);
  background-color: #dadada;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 95%;
  display: inline-block;
`;
