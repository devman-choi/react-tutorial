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
            {list.map((item, idx) => (
              <a key={idx} href={item.url}>
                {item.label}&nbsp;&nbsp;
              </a>
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
