import { Drawer } from 'antd';
import React from 'react';
import MobileBasketModal from '../../mobile/MobileBasketModal';

const BasketDrawer = ({ visible, onClose, width }) => {
  return (
    <Drawer
      closable={false}
      visible={visible}
      width={width ?? '100%'}
      mask={false}
    >
      <MobileBasketModal handleCloseDrawer={onClose} />
    </Drawer>
  );
};

export default BasketDrawer;
