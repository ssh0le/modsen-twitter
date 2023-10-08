import { FC } from 'react';

import { InputFieldProps } from './interfaces';
import { Input } from './styled';

export const InputField: FC<InputFieldProps> = ({ placeholder }) => {
  return <Input placeholder={placeholder ?? ''} />;
};
