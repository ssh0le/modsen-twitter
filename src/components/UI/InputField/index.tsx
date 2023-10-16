import { forwardRef, useId } from 'react';

import { SerifText } from '../SerifText';

import { InputFieldProps } from './interfaces';
import {
  ErrorMessageContainer,
  Input,
  InputContent,
  InputLabel,
  InputWrapper,
} from './styled';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const { error, label, ...remainedProps } = props;
    const id = useId();
    return (
      <>
        {label && (
          <InputLabel htmlFor={id}>
            <SerifText>{label}</SerifText>
          </InputLabel>
        )}
        <InputContent>
          <InputWrapper>
            <Input ref={ref} id={id} {...remainedProps} />
          </InputWrapper>
          {error && (
            <ErrorMessageContainer>{error.message}</ErrorMessageContainer>
          )}
        </InputContent>
      </>
    );
  },
);
