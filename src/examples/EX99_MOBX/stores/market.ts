import { observable, action, computed } from 'mobx';

export type TProduct = {
  name: string;
  price: number;
  count?: number;
};
export default class MarketStore {
  @observable
  selectedItems: Array<TProduct> = [];

  @action
  put = (name: string, price: number): void => {
    // 존재하는지 찾고
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,
        price,
        count: 1
      });
      return;
    }
    // 존재 한다면 count 값만 올립니다.
    if (exists.count !== undefined) exists.count++;
  };

  @action
  take = (name: string): void => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    if (itemToTake !== undefined) {
      if (itemToTake.count !== undefined) itemToTake.count--;
      if (itemToTake.count === 0) {
        // 갯수가 0 이면
        const idx = this.selectedItems.findIndex(item => item.name === itemToTake.name);
        this.selectedItems.splice(idx, 1); // 배열에서 제거처리합니다.
      }
    }
  };

  @computed
  get total(): number {
    console.log('총합 계산...');
    return this.selectedItems.reduce((previous, current) => {
      if (current.count === undefined) return 0;
      return previous + current.price * current.count;
    }, 0);
  }
}
