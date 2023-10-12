const copyRight = `© ${new Date().getFullYear()} Twitter, Inc.`;

export const signUpFooterLinks = [
  'About',
  'Help Center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Ads info',
  'Blog',
  'Status',
  'Carrres',
  'Brand Resources',
  'Advertsing',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
  copyRight,
];

export const searchLinks = [
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Imprint',
  'Ads Info',
  'More ···',
  copyRight,
];

export const menuTitles = [
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Bookmarks',
  'Lists',
  'Profile',
  'More',
] as const;

const defaultPath = '/';
const home = '/home';
const userDetails = '/profile/:userId';
const profile = '/profile';
const signUp = '/sign-up';
const login = '/login';
const registration = '/registartion';
const notifications = '/notifications';
const messages = '/messages';
const bookmarks = '/bookmarks';
const explore = '/explore';
const lists = '/lists';
const more = '/more';

export const routePathes = {
  home,
  profile,
  signUp,
  login,
  registration,
  userDetails,
  defaultPath,
};

export const menuLinks: { title: string; route: string }[] = [
  {
    title: 'Home',
    route: home,
  },
  {
    title: 'Explore',
    route: explore,
  },
  {
    title: 'Notifications',
    route: notifications,
  },
  {
    title: 'Messages',
    route: messages,
  },
  {
    title: 'Bookmarks',
    route: bookmarks,
  },
  {
    title: 'Lists',
    route: lists,
  },
  {
    title: 'Profile',
    route: profile,
  },
  {
    title: 'More',
    route: more,
  },
];
