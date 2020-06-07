import React from 'react';
import { TProduct } from 'examples/EX99_MOBX/stores/market';
import BasketItem, { TOnTake } from 'examples/EX99_MOBX/BasketItem/BasketItem';
import { inject, observer } from 'mobx-react';

interface BasketItemListProps {
  items?: TProduct[];
  total?: number;
  onTake?: TOnTake;
}
const BasketItemList: React.FC<BasketItemListProps> = ({ items, total, onTake }) => {
  let itemList = null;
  if (items !== undefined) {
    itemList = items.map(item => (
      <BasketItem name={item.name} price={item.price} count={item.count} key={item.name} onTake={onTake!} />
    ));
  }
  return (
    <div>
      {itemList}
      <hr />
      <p>
        <b>총합: </b> {total}원
      </p>
    </div>
  );
};

export default inject(({ market }) => ({
  items: market.selectedItems,
  total: market.total,
  onTake: market.take
}))(observer(BasketItemList));
