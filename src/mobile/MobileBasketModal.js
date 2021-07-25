import { Alert, message } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BasketItem from '../components/BasketItem';
import { getUserCart } from '../lib/api/cart';
import { postOrderItem } from '../lib/api/order';

function MobileBasketModal(props) {
  const { handleCloseDrawer, history } = props;
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  function removeCartItem(cartId) {
    for (let i = 0; i < items.length; i++) {
      const cartItem = items[i];
      console.log(`cartItem.id=${cartItem.id}, cartId=${cartId}`);
      if (cartItem.id == cartId) {
        items.splice(i, 1);
        setItems([...items]);
        break;
      }
    }
  }

  function toCheckout() {
    const ids = items.map((item) => item.id);
    postOrderItem(ids)
      .then((res) => {
        window.location.href = '/orderlist';
      })
      .catch((err) => {
        message.error(`Fail to connect to server. Try again.`, 1);
      });
  }

  let totalPrice = 0;
  for (let item of items) {
    totalPrice += item.item.price;
  }

  function getBasket() {
    getUserCart()
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    getBasket();
  }, [props]);

  if (error)
    return (
      <Alert
        message="Error"
        description="Try Again Please."
        type="error"
        showIcon
      />
    );

  return (
    <div style={{ width: '100%' }}>
      <CancelBtn onClick={handleCloseDrawer}>
        <CancelXicon viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </CancelXicon>
      </CancelBtn>
      <CartList>
        <span>YOUR CART LIST</span>
        {items.map((item) => (
          <BasketItem basket={item} removeCartItem={removeCartItem} />
        ))}
      </CartList>

      <div style={{ marginTop: '24rem' }}>
        <BasketContentContainer>
          <BasketContentLeft>SUBTOTAL : </BasketContentLeft>
          <BasketContentRight>{totalPrice}.00 EUR</BasketContentRight>
        </BasketContentContainer>
        <BasketContentContainer>
          <BasketContentLeft>SHIPPING :</BasketContentLeft>
          <BasketContentRight>25.00 EUR</BasketContentRight>
        </BasketContentContainer>
        <BasketContentContainer>
          <BasketContentLeft>TOTAL :</BasketContentLeft>
          <BasketContentRight>{totalPrice + 25.0}.00 EUR</BasketContentRight>
        </BasketContentContainer>

        <CheckOut
          onClick={() => {
            toCheckout();
          }}
        >
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
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const BasketContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BasketContentLeft = styled.div`
  margin-left: 1rem;
  font-weight: 600;
`;

const BasketContentRight = styled.div`
  margin-right: 1rem;
  font-weight: 600;
`;

const CheckOut = styled.div`
  margin-top: 1rem;
  color: rgba(0, 0, 0, 0.87);
  background-color: #dadada;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  display: inline-block;
  text-align: center;
`;
