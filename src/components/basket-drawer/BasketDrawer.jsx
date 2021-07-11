import { Drawer } from 'antd';
import MobileBasketModal from '../../mobile/MobileBasketModal';
import React, { useState } from 'react';

const BasketDrawer = ({ visible, onClose, width }) => {
  return (
    <Drawer closable={false} visible={visible} width={width ?? '100%'}>
      <MobileBasketModal handleCloseDrawer={onClose} />
    </Drawer>
  );
};

export default BasketDrawer;
