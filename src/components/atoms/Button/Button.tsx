import React from 'react';
import * as style from './Button.scss';
const cn = require('classnames/bind').bind(style);
interface ButtonPros {
  type?: string;
  [x: string]: unknown;
}
const Button: React.FC<ButtonPros> = ({ type = 'primary', children, ...others }) => {
  return (
    <button
      className={cn({
        btn: true,
        [`btn-${type}`]: true
      })}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
