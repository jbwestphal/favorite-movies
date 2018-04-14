import * as routes from './routes';

export const navItems = [
  {
    title: 'Home',
    path: routes.LANDING,
    exact: true
  },
  {
    title: 'Movies',
    path: routes.MOVIES,
    exact: false
  },
  {
    title: 'FAQ',
    path: routes.FAQ,
    exact: true
  },
  {
    title: 'Contact',
    path: routes.CONTACT,
    exact: true
  }
];
