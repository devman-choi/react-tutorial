import React from 'react';
import * as style from './MainHeader.scss';
import { Link } from 'react-router-dom';
const cn = require('classnames/bind').bind(style);

interface MainHeaderProps {
  title: string;
  subTitle: string;
}
const MainHeader: React.FC<MainHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className={cn('header')}>
      <Link className={cn('title')} to="/">
        {title}
      </Link>
      <div className={cn('sub-title')}>{subTitle}</div>
    </div>
  );
};

export default MainHeader;
