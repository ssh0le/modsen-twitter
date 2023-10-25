import { FC } from 'react';

import { icons } from '@/constants';

import { LogoWrapper } from './styled';
import { LogoProps } from './types';

const Logo: FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <LogoWrapper $size={size}>
      <img src={icons.twitterLogo} alt="Twitter logo" />
    </LogoWrapper>
  );
};

export default Logo;
