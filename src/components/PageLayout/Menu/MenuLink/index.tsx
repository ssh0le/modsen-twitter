import { useLocation, useNavigate } from 'react-router-dom';

import { getMenuIcon } from '@/helpers/getIcon';

import { MenuLinkProps } from './interfaces';
import { MenuLinkIcon, MenuLinkTitle, MenuLinkWrapper } from './styled';

const MenuLink = ({ isSelected, title, route }: MenuLinkProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLinkClick = () => {
    if (pathname !== route) {
      navigate(route);
    }
  };

  return (
    <MenuLinkWrapper $isSelected={isSelected} onClick={handleLinkClick}>
      <MenuLinkIcon src={getMenuIcon(title, isSelected)} />
      <MenuLinkTitle>{title}</MenuLinkTitle>
    </MenuLinkWrapper>
  );
};

export default MenuLink;
