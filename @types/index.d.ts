type AppConfig = {
  appCd: string;
  appName: string;
  homeUrl: string;
};
type UserInfo = {
  name: string;
  email: string;
};
type NavigationItem = {
  label: string;
  url: string;
  className?: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
};
type Navigation = Array<NavigationItem>;
