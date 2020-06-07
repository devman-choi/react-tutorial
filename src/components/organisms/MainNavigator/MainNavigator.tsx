import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './MainNavigator.scss';
import { TClickNav } from 'stores/appCtx';

const cn = require('classnames/bind').bind(style);

interface MainNavigatorProps {
  navList: Array<NavigationItem>;
  selIdx: number;
  clickNav: TClickNav;
}
type TOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: NavigationItem) => void;

const MainNavigator: React.FC<MainNavigatorProps> = ({ clickNav, navList, selIdx }) => {
  const onClick: React.MouseEventHandler = event => {
    clickNav(selIdx, navList[selIdx]);
  };

  return (
    <div className={cn('navigator')}>
      <dd>
        {navList.map((link, idx) => (
          <dl className={cn({ selected: selIdx === idx })} key={idx}>
            <Link to={link.url} className={link.className} onClick={onClick}>
              {link.label}
            </Link>
          </dl>
        ))}
      </dd>
    </div>
  );
};

export default MainNavigator;
