import { InputHTMLAttributes } from 'react';
import { UseControllerProps } from 'react-hook-form';

import { ValidationType } from '@/types';

export interface InputFieldProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'type'>,
    UseControllerProps {
  label?: string;
  required?: boolean;
  validationType?: ValidationType;
}
