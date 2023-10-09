import { useNavigate } from 'react-router-dom';

import { getMenuIcon } from '@/helpers/getIcon';

import { MenuLinkProps } from './interfaces';
import { MenuLinkIcon, MenuLinkWrapper } from './styled';

const MenuLink = ({ isSelected, title, route }: MenuLinkProps) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(route);
  };

  return (
    <MenuLinkWrapper $isSelected={isSelected} onClick={handleLinkClick}>
      <MenuLinkIcon src={getMenuIcon(title, isSelected)} />
      {title}
    </MenuLinkWrapper>
  );
};

export default MenuLink;
