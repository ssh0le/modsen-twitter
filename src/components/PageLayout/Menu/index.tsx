import { FC, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { menuLinks } from '@/constants';
import { isActiveLink } from '@/helpers';

import MenuLink from './MenuLink';
import { MenuContainer } from './styled';

const MenuSidebar: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = useCallback((path: string) => {
    navigate(path);
  }, []);

  return (
    <nav>
      <MenuContainer>
        {menuLinks.map(({ route, title }, key) => (
          <MenuLink
            key={key}
            route={route}
            title={title}
            isSelected={isActiveLink(route, pathname)}
            onClick={handleLinkClick}
          />
        ))}
      </MenuContainer>
    </nav>
  );
};

export default MenuSidebar;
