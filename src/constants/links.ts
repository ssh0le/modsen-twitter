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

export const routePathes = {
  defaultPath: '/',
  home: '/home',
  userDetails: '/profile/:userId',
  profile: '/profile',
  signUp: '/sign-up',
  login: '/login',
  registration: '/registartion',
  notifications: '/notifications',
  messages: '/messages',
  bookmarks: '/bookmarks',
  explore: '/explore',
  lists: '/lists',
  more: '/more',
};

const {
  home,
  profile,
  notifications,
  messages,
  explore,
  bookmarks,
  lists,
  more,
} = routePathes;

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
