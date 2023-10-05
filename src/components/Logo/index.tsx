import { FC } from 'react';

import logo from '@/assets/icons/twitterLogo.svg';

import { LogoProps } from './interfaces';
import { LogoWrapper } from './styled';

const Logo: FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <LogoWrapper $size={size}>
      <img src={logo} alt="Twitter logo" />
    </LogoWrapper>
  );
};

export default Logo;
