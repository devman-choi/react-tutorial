# JSX

- JSX는 자바스크립트의 확장한 문법이다. (Javascript XML의 약어)
- HTML을 직접 작성 할 수 있다. (일반적으로 javascript에서 HTML을 다룰 때 문자열 형태로 다룬다.)
- JSX내에 자바스크립트 표현식을 넣기 위해서는 중괄호 { } 를 사용해야 한다.
- 기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 escape하므로 주입 공격을 방지 한다.


##### 사용 예
```jsx
// src/examples/EX03_components/EX1.jsx
import React, { useState } from 'react';

const EX1 = () => {
  const text = '와우~~';
  const num1 = 100;
  const num2 = 200;
  const sampleJSX = <span>JSX를 이렇게 변수에 담은 후 주입할 수 있다.</span>;
  const conditional1 = <span>참</span>;
  const conditional2 = <span>거짓</span>;
  const list = [
    { label: '네이버', url: 'https://www.naver.com' },
    { label: '다음', url: 'https://www.daum.net' }
  ];

  const [count, setCount] = useState(0); // Hooks 챕터에서 다룰 예정
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <table style={{ width: '100%' }}>
      <col width="40%" />
      <col width="60%" />
      <tbody>
        <tr>
          <td>JSX 내 스크립트 삽입</td>
          <td>{`여기가 삽입된 Text - ${text}`}</td>
        </tr>
        <tr>
          <td>JSX 내 스크립트 삽입 2 (100 + 200) </td>
          <td>{num1 + num2}</td>
        </tr>
        <tr>
          <td>변수로 삽입</td>
          <td>{sampleJSX}</td>
        </tr>
        <tr>
          <td>조건부 삽입 (1 &gt; 0)</td>
          <td>{1 > 0 ? conditional1 : conditional2}</td>
        </tr>
        <tr>
          <td>조건부 삽입 (1 &lt; 0)</td>
          <td>{1 < 0 ? conditional1 : conditional2}</td>
        </tr>
        <tr>
          <td>조건부 삽입 (1 &gt; 0)</td>
          <td>{1 > 0 && conditional1}</td>
        </tr>
        <tr>
          <td>조건부 삽입 (1 &lt; 0)</td>
          <td>{1 < 0 && conditional1}</td>
        </tr>
        <tr>
          <td>리스트로 삽입</td>
          <td>
            {list.map(item => (
              <a href={item.url}>{item.label}&nbsp;&nbsp;</a>
            ))}
          </td>
        </tr>
        <tr>
          <td>1초 마다 증가</td>
          <td>{count}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EX1;
```
## > [예제코드 실행하기](/example/jsx)