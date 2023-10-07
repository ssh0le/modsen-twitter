import { FC } from 'react';

import { menuLinks } from '@/constants/links';

import MenuLink from './MenuLink';
import { MenuContainer } from './styled';

const MenuSidebar: FC = () => {
  return (
    <nav>
      <MenuContainer>
        {menuLinks.map((link, key) => (
          <MenuLink key={key} title={link} isSelected={false} />
        ))}
      </MenuContainer>
    </nav>
  );
};

export default MenuSidebar;
