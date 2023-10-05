import { ReactNode } from 'react';

type ButtonType = 'sign-up' | 'log-out' | 'colored' | 'default';
type ButtonTypeface = 'serif' | 'sans-serif';

export interface ButtonProps {
  typeface?: ButtonTypeface;
  type?: ButtonType;
  isActive?: boolean;
  children: ReactNode;
  onClick: () => void;
}

export interface ButtonWrapperProps {
  $type: ButtonType;
  $typeface: ButtonTypeface;
  $isActive: boolean;
}
