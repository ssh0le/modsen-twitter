import { menuLinks } from '@/constants';

export interface MenuLinkProps {
  isSelected: boolean;
  title: (typeof menuLinks)[number];
}

export interface MenuLinkWrapperProps {
  $isSelected: boolean;
}
