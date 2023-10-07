import { getMenuIcon } from '@/helpers/getIcon';

import { MenuLinkProps } from './interfaces';
import { MenuLinkIcon, MenuLinkWrapper } from './styled';

const MenuLink = ({ isSelected, title }: MenuLinkProps) => {
  return (
    <MenuLinkWrapper $isSelected={isSelected}>
      <MenuLinkIcon src={getMenuIcon(title, isSelected)} />
      {title}
    </MenuLinkWrapper>
  );
};

export default MenuLink;
