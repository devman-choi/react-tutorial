import React, { useState } from 'react';
import State from './Counter';

const CounterContainer = () => {
  const defaultNumber = 5; // default값은 5

  // 참고로 num도 state이다. Hooks시간에 배우겠지만
  // 함수형 컴포넌트에서도 state를 사용하기위해 추가된 기능이다.
  const [num, setNum] = useState(defaultNumber);

  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <div>
        <div>초기값은 {defaultNumber}</div>
        <div>
          <span>[A] {num}: 부모의 숫자</span>
          <button onClick={increment}>+</button>&nbsp;
          <button onClick={decrement}>-</button>
        </div>
      </div>
      <hr></hr>
      <div>
        <p>자식 Component</p>
        <State defaultNum={num}></State> {/* props로 부모의 state를 전달 */}
      </div>
      <hr></hr>
      <div>
        일단 먼저 아래 순서대로 테스트 해보자.
        <ul>
          <li>
            [A]를 증가시켜 보자. 그러면 자식 Component로 전달된 [B] 숫자도 함께
            증가할 것이다.
          </li>
          <li>
            [C]를 증가시켜보자. 그러면 화면에는 아무런 반응이 없을 것이다.
          </li>
          <li>
            [D]를 증가시켜보자. 그러면 [D]숫자가 증가될 것이고, [C]숫자도
            변경되어 있을 것이다.
          </li>
        </ul>
        <p>왜 이렇게 될까?</p>
        <p>
          props와 state의 값이 변경되면 화면 갱신이 함께 이루어지지만 일반
          변수의 값은 변경 되더라도 화면 갱신까지 이루어지지 않는다.<br></br>
          그래서 [C]의 숫자를 증가시키더라도 화면상으로는 변화는 없지만
          내부적으로는 증가되고 있다.
          <br></br>그 후에 [D]를 증가시키면서(즉 state의 값이 변경되면서) 화면
          갱신이 이루어지고, 그때 [C]의 숫자도 반영되는 것이다.
        </p>
      </div>
    </div>
  );
};

export default CounterContainer;
