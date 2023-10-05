import { FC } from 'react';

import { ButtonProps } from './interfaces';
import { ButtonWrapper } from './styled';

export const Button: FC<ButtonProps> = (props) => {
  const {
    isActive = true,
    typeface = 'serif',
    type = 'default',
    onClick,
    children,
  } = props;
  return (
    <ButtonWrapper
      $isActive={isActive}
      disabled={!isActive}
      $type={type}
      $typeface={typeface}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};
