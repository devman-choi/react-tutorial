import React from 'react';
import WelcomFn from './components/WelcomFn';
import WelcomClass from './components/WelcomClass';

const Welcom = () => {
  return (
    <div>
      <div>
        <WelcomFn name="함수형" /> {/* 컴포넌트의 attribute를 통해 인자를 전달한다. */}
      </div>
      <div>
        <WelcomClass name="클래스형" />
      </div>
    </div>
  );
};

export default Welcom;
