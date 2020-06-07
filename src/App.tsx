import React from 'react';
import Root from 'components/pages/Root';
import { Provider } from 'mobx-react';
import AppCtxStore from 'stores/appCtx';

const appCtx = new AppCtxStore();

const App: React.FC = () => {
  return (
    <Provider appCtx={appCtx}>
      <Root />
    </Provider>
  );
};

export default App;
