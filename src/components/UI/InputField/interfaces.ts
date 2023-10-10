import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}
