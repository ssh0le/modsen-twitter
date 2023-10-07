import { icons, menuLinks } from '@/constants';

const {
  profile,
  profileFilled,
  home,
  homeFilled,
  explore,
  exploreFilled,
  notification,
  notificationFilled,
  messages,
  messagesFilled,
  bookmarks,
  bookmarksFilled,
  lists,
  listsFilled,
  more,
} = icons;

export const getMenuIcon = (
  linkName: (typeof menuLinks)[number],
  isSelected: boolean,
) => {
  switch (linkName) {
    case 'Home':
      return isSelected ? homeFilled : home;
    case 'Explore':
      return isSelected ? exploreFilled : explore;
    case 'Notifications':
      return isSelected ? notificationFilled : notification;
    case 'Messages':
      return isSelected ? messagesFilled : messages;
    case 'Bookmarks':
      return isSelected ? bookmarksFilled : bookmarks;
    case 'Lists':
      return isSelected ? listsFilled : lists;
    case 'Profile':
      return isSelected ? profileFilled : profile;
    case 'More':
      return more;
    default:
      return home;
  }
};
