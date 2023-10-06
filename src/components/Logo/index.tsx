import { FC } from 'react';

import { icons } from '@/constants';

import { LogoProps } from './interfaces';
import { LogoWrapper } from './styled';

const Logo: FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <LogoWrapper $size={size}>
      <img src={icons.twitterLogo} alt="Twitter logo" />
    </LogoWrapper>
  );
};

export default Logo;
