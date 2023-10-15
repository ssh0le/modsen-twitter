import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  label?: string;
  error?: FieldError;
  options: { value: string | number; name: string | number }[];
}
