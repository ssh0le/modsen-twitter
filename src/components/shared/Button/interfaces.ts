import { ReactNode } from 'react';

type ButtonType = 'sign-up' | 'log-out' | 'colored' | 'default';

export interface ButtonProps {
  type?: ButtonType;
  isActive?: boolean;
  children: ReactNode;
  onClick: () => void;
}

export interface ButtonWrapperProps {
  $type: ButtonType;
  $isActive: boolean;
}
