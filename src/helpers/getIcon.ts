import { icons } from '@/constants';

const {
  BookmarksIcon,
  BookmarksFilledIcon,
  ExploreIcon,
  ExploreFilledIcon,
  HomeIcon,
  HomeFilledIcon,
  ListsIcon,
  ListsFilledIcon,
  MessagesIcon,
  MessagesFilledIcon,
  NotificationIcon,
  NotificationFilledIcon,
  ProfileIcon,
  ProfileFilledIcon,
  MoreIcon,
} = icons;

export const getMenuIcon = (linkName: string, isSelected: boolean) => {
  switch (linkName) {
    case 'Home':
      return isSelected ? HomeFilledIcon : HomeIcon;
    case 'Explore':
      return isSelected ? ExploreFilledIcon : ExploreIcon;
    case 'Notifications':
      return isSelected ? NotificationFilledIcon : NotificationIcon;
    case 'Messages':
      return isSelected ? MessagesFilledIcon : MessagesIcon;
    case 'Bookmarks':
      return isSelected ? BookmarksFilledIcon : BookmarksIcon;
    case 'Lists':
      return isSelected ? ListsFilledIcon : ListsIcon;
    case 'Profile':
      return isSelected ? ProfileFilledIcon : ProfileIcon;
    case 'More':
      return MoreIcon;
    default:
      return HomeIcon;
  }
};
