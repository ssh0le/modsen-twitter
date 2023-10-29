import { FC } from 'react';

import { icons } from '@/constants';

import { LogoWrapper } from './styled';
import { LogoProps } from './types';

const { TwitterLogo } = icons;

const Logo: FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <LogoWrapper $size={size}>
      <TwitterLogo />
    </LogoWrapper>
  );
};

export default Logo;
