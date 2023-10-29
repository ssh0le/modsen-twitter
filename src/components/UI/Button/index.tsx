import { FC, memo } from 'react';

import { ButtonWrapper } from './styled';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = memo((props) => {
  const { isActive = true, type = 'default', onClick, children } = props;
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
});
