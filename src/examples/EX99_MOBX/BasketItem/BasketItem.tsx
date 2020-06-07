import React from 'react';
import * as style from './BasketItem.scss';
import { TProduct } from 'examples/EX99_MOBX/stores/market';
const cn = require('classnames/bind').bind(style);

export type TOnTake = (name: string) => TProduct;
interface BasketItemProps extends TProduct {
  onTake: TOnTake;
}
const BasketItem: React.FC<BasketItemProps> = ({ name, price, count, onTake }) => {
  return (
    <div className={cn('BasketItem')}>
      <div className={cn('name')}>{name}</div>
      <div className={cn('price')}>{price}원</div>
      <div className={cn('count')}>{count}</div>
      <div className={cn('return')} onClick={() => onTake(name)}>
        갖다놓기
      </div>
    </div>
  );
};

export default BasketItem;
