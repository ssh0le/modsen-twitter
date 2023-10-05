import { FC } from 'react';

import { ButtonProps } from './interfaces';
import { ButtonWrapper } from './styled';

export const Button: FC<ButtonProps> = (props) => {
  const {
    isActive = true,
    type = 'default',
    onClick,
    children,
  } = props;
  return (
    <ButtonWrapper
      $isActive={isActive}
      disabled={!isActive}
      $type={type}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};
