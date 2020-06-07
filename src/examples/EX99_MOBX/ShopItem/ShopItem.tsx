import React from 'react';
import * as style from './ShopItem.scss';
import { TProduct } from 'examples/EX99_MOBX/stores/market';
const cn = require('classnames/bind').bind(style);

export type OnPutProps = (name: string, price: number) => void;
export interface ShopItemProps extends TProduct {
  onPut: OnPutProps;
}
const ShopItem: React.FC<ShopItemProps> = ({ name, price, onPut }) => {
  return (
    <div className={cn('ShopItem')} onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default ShopItem;
