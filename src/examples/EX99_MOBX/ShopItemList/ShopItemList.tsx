import React from 'react';
import { inject, observer } from 'mobx-react'; // 불러오기
import ShopItem, { OnPutProps } from 'examples/EX99_MOBX/ShopItem/ShopItem';

const items = [
  {
    name: '생수',
    price: 850
  },
  {
    name: '신라면',
    price: 900
  },
  {
    name: '포카칩',
    price: 1500
  },
  {
    name: '새우깡',
    price: 1000
  }
];

export interface ShopItemListProps {
  onPut?: OnPutProps;
}
const ShopItemList: React.FC<ShopItemListProps> = ({ onPut }) => {
  const itemList = items.map(item => <ShopItem {...item} key={item.name} onPut={onPut!} />);
  return <div>{itemList}</div>;
};

// **** inject, observer 적용
export default inject(({ market }) => ({
  onPut: market.put
}))(observer(ShopItemList));
