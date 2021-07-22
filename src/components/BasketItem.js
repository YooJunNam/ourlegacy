const BasketItem = ({ basket }) => {
  return (
    <div
      style={{
        display: 'flex',
        paddingBottom: '3px',
        borderBottom: '2px solid ',
        marginTop: '100px',
      }}
    >
      <img
        src={basket.item.thumbnail}
        style={{ width: '80px', height: '120px' }}
      ></img>
      <div style={{ flex: '2' }}>
        <span style={{ flex: '1', fontSize: '25px' }}>{basket.item.name}</span>
        <br />
        <span style={{ flex: '1', fontSize: '15px' }}>
          {basket.item.price}.00 EUR
        </span>
        <br />
        <span style={{ flex: '1', fontSize: '15px' }}>
          SIZE : {basket?.option?.name}
        </span>
      </div>
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ width: '20px', height: '20px' }}
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
    </div>
  );
};

export default BasketItem;
