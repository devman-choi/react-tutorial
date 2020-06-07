/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import PageTemplate from 'components/templates/PageTemplate';
import ExampleTemplate from 'components/templates/ExampleTemplate';
import { MainHeader, MainNavigator } from 'components/organisms';

import NotFound from './NotFound';

import { inject, observer } from 'mobx-react';

interface RootProps {
  title?: string;
  subTitle?: string;
  navList?: NavigationItem[];
  exList?: NavigationItem[];
  curNav?: NavigationItem;
  clickNav?: (index: number, item: NavigationItem) => void;
}
const Root: React.FC<RootProps> = ({ title, subTitle, navList, exList, curNav, clickNav }) => {
  const pageCtx = navList!.find(nav => nav.url === window.location.pathname) || { label: 'Page Not Found' };
  const curNavIdx = navList!.findIndex(nav => nav.url === window.location.pathname);

  return (
    <BrowserRouter>
      <MainTemplate
        naviation={
          <MainNavigator
            navList={navList!}
            selIdx={curNavIdx}
            clickNav={(index, selected): void => {
              clickNav!(index, selected);
            }}
          />
        }
        header={<MainHeader title={title!} subTitle={subTitle!} />}
      >
        <Switch>
          <Redirect exact path="/" to="/document/home" />
          <Route path={['/document']}>
            <PageTemplate title={pageCtx.label}>
              {navList!
                .filter(nav => nav.url !== '/')
                .map((nav, index) => (
                  <Route key={index} exact path={nav.url} component={nav.component} />
                ))}
            </PageTemplate>
          </Route>
          <Route path={['/example']}>
            <ExampleTemplate>
              {exList!.map((nav, index) => (
                <Route key={index} exact path={nav.url} component={nav.component} />
              ))}
            </ExampleTemplate>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default inject(({ appCtx }) => {
  return {
    title: appCtx.appTitle,
    subTitle: appCtx.appSubTitle,
    curNav: appCtx.curNav,
    navList: appCtx.navList,
    exList: appCtx.exList,
    clickNav: appCtx.clickNav
  };
})(observer(Root));
