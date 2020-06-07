import React from 'react';
import * as style from './SuperMarketTemplate.scss';
const cn = require('classnames/bind').bind(style);

const SuperMarketTemplate: React.FC<{ items: React.ReactNode; basket: React.ReactNode }> = ({ items, basket }) => {
  return (
    <div className={cn('SuperMarketTemplate')}>
      <div className={cn('items-wrapper')}>
        <h2>상품</h2>
        {items}
      </div>
      <div className={cn('basket-wrapper')}>
        <h2>장바구니</h2>
        {basket}
      </div>
    </div>
  );
};

export default SuperMarketTemplate;
