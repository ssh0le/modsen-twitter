import { useId } from 'react';
import { useController } from 'react-hook-form';

import { createValidationOptions } from '@/helpers';

import { SerifText } from '../SerifText';

import { InputFieldProps } from './interfaces';
import {
  ErrorMessageContainer,
  Input,
  InputContent,
  InputLabel,
  InputWrapper,
} from './styled';

export function InputField(props: InputFieldProps) {
  const {
    label,
    control,
    name,
    rules = {},
    required = true,
    validationType = 'text',
    ...remainedProps
  } = props;

  const { field, fieldState } = useController({
    name,
    control,
    rules: { ...createValidationOptions(validationType, required), ...rules },
  });
  const id = useId();

  const { error } = fieldState;
  return (
    <div>
      {label && (
        <InputLabel htmlFor={id}>
          <SerifText>{label}</SerifText>
        </InputLabel>
      )}
      <InputContent>
        <InputWrapper>
          <Input id={id} {...remainedProps} {...field} />
        </InputWrapper>
        {error && (
          <ErrorMessageContainer>{error.message}</ErrorMessageContainer>
        )}
      </InputContent>
    </div>
  );
}
