import { observable, action, computed } from 'mobx';
import Home from 'components/pages/Home';
import * as Ex from 'examples';
import NotFound from 'components/pages/NotFound';
export type TClickNav = (index: number, item: NavigationItem) => void;
export type TCurNav = () => NavigationItem;

interface AppConfig {
  title: string;
  subTitle: string;
  navList: NavigationItem[];
  exampleList: NavigationItem[];
}
interface SelectedNavItem {
  index: number;
  item: NavigationItem;
}
export default class AppCtxStore {
  appConfig: AppConfig = {
    title: 'React Tutorial',
    subTitle: 'based CRA',
    navList: [
      { label: 'Home', url: '/document/home', component: Home },
      {
        label: 'Hello World',
        url: '/document/helloworld',
        component: Ex.MainEx01
      },
      { label: 'JSX', url: '/document/jsx', component: Ex.MainEx02 },
      {
        label: 'Components & Props',
        url: '/document/components',
        component: Ex.MainEx03
      },
      {
        label: 'State',
        url: '/document/state',
        component: Ex.MainEx05
      },
      {
        label: 'Lifecycle',
        url: '/document/lifecycle',
        component: Ex.MainEx07
      },
      { label: 'Events', url: '/document/events', component: Ex.MainEx08 },
      { label: 'Forms', url: '/document/forms', component: Ex.MainEx09 },
      { label: 'Styles', url: '/document/styles', component: Ex.MainEx10 },
      { label: 'Hooks', url: '/document/hooks', component: Ex.MainEx11 },
      {
        label: 'Immutability',
        url: '/document/immutability',
        component: Ex.MainEx06
      }
    ],
    exampleList: [
      {
        label: 'Example: Hello World',
        url: '/example/helloworld',
        component: Ex.AppEx01
      },
      {
        label: 'Example: JSX',
        url: '/example/jsx',
        component: Ex.AppEx02
      },
      {
        label: 'Example: Components & Props',
        url: '/example/components/welcom',
        component: Ex.Welcom
      },
      {
        label: 'Example: State',
        url: '/example/state/counter',
        component: Ex.CounterContainer
      }
    ]
  };

  @observable
  selectedNav: SelectedNavItem = {
    index: -1,
    item: { label: '', url: '', component: NotFound }
  };

  @action
  clickNav: TClickNav = (index, item) => {
    this.selectedNav = {
      index,
      item
    };
  };

  @computed
  get appTitle(): string {
    return this.appConfig.title;
  }

  @computed
  get appSubTitle(): string {
    return this.appConfig.subTitle;
  }

  @computed
  get curNav(): SelectedNavItem {
    return this.selectedNav;
  }

  @computed
  get navList(): NavigationItem[] {
    return this.appConfig.navList;
  }
  @computed
  get exList(): NavigationItem[] {
    return this.appConfig.exampleList;
  }
}
