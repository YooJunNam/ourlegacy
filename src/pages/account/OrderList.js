import React from 'react';

function OrderList() {
  return (
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
      <div
        style={{
          marginTop: '20px',
          textAlign: 'left',
          border: '1px solid',
          maxWidth: '100%',
          height: 'auto',
        }}
      >
        <p style={{ padding: '10px' }}>Order Number:</p>
        <div style={{}}>
          <p style={{ padding: '10px' }}>Date :</p>
          <p
            style={{
              display: 'inline-block',
              width: '80%',

              padding: '10px',
            }}
          >
            Amount :
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
