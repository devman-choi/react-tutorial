import React from 'react';
import SuperMarketTemplate from 'examples/EX99_MOBX/SuperMarketTemplate/SuperMarketTemplate';
import ShopItemList from 'examples/EX99_MOBX/ShopItemList/ShopItemList';
import BasketItemList from 'examples/EX99_MOBX/BasketItemList/BasketItemList';

const SuperMarket = () => {
  return <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />;
};

export default SuperMarket;
