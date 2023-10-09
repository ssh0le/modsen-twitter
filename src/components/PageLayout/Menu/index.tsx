import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { menuLinks } from '@/constants';
import { isActiveLink } from '@/helpers';

import MenuLink from './MenuLink';
import { MenuContainer } from './styled';

const MenuSidebar: FC = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <MenuContainer>
        {menuLinks.map(({ route, title }, key) => (
          <MenuLink
            key={key}
            route={route}
            title={title}
            isSelected={isActiveLink(route, pathname)}
          />
        ))}
      </MenuContainer>
    </nav>
  );
};

export default MenuSidebar;
