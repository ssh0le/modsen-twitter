import { InputHTMLAttributes } from 'react';
import { UseControllerProps } from 'react-hook-form';

export interface SelectProps
  extends Pick<InputHTMLAttributes<HTMLSelectElement>, 'type'>,
    UseControllerProps {
  placeholder?: string;
  label?: string;
  required?: boolean;
  options: { value: string | number; name: string | number }[];
}
