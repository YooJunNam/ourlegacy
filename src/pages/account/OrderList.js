import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getOrderItem } from '../../lib/api/order';
import { logout } from '../../lib/api/auth';

function OrderList() {
  const [orders, setOrders] = useState();

  function Logout() {
    const logoutHandler = () => {
      window.location.href = '/';
    };
    return logout().then(logoutHandler);
  }
  function getOrderItems() {
    getOrderItem()
      .then((res) => {
        setOrders(res.data);
      })
      .catch(() => {
        message.error('faild', 1);
      });
  }

  useEffect(() => {
    getOrderItems();
  }, []);

  return (
    <>
      <div
        style={{
          marginTop: '200px',
          border: '2px solid',
          width: '50%',
          display: 'inline-block',
          padding: '20px',
        }}
      >
        <div style={{ fontSize: '30px' }}>Your Order List</div>

        {orders?.map((order) => (
          <div
            style={{
              marginTop: '20px',
              textAlign: 'left',
              borderBottom: '2px solid',
              maxWidth: '100%',
              height: 'auto',
            }}
          >
            <p style={{ padding: '10px' }}>Order Number: {order.uuid}</p>
            <div>
              <p style={{ padding: '10px' }}>Date : {order.createdAt}</p>
              {order?.details?.map((detail) => (
                <>
                  <p
                    style={{
                      display: 'inline-block',
                      width: '80%',
                      padding: '10px',
                    }}
                  >
                    Oredered Product : {detail.item.name}
                  </p>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={Logout} style={{ backgroundColor: 'white' }}>
          LOGOUT
        </button>
      </div>
    </>
  );
}

export default OrderList;
