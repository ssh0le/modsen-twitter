import { memo } from 'react';

import { getMenuIcon } from '@/helpers/getIcon';

import { MenuLinkProps } from './interfaces';
import {
  MenuLinkIconContainer,
  MenuLinkTitle,
  MenuLinkWrapper,
} from './styled';

const MenuLink = ({ isSelected, title, route, onClick }: MenuLinkProps) => {
  const Icon = getMenuIcon(title, isSelected);

  const handleLinkClick = () => {
    if (!isSelected) {
      onClick(route);
    }
  };

  return (
    <MenuLinkWrapper $isSelected={isSelected} onClick={handleLinkClick}>
      <MenuLinkIconContainer>
        <Icon />
      </MenuLinkIconContainer>
      <MenuLinkTitle>{title}</MenuLinkTitle>
    </MenuLinkWrapper>
  );
};

export default memo(MenuLink);
