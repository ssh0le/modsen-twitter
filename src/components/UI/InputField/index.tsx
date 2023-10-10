import { forwardRef } from 'react';

import { InputFieldProps } from './interfaces';
import { ErrorMessageContainer, Input } from './styled';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const { error, ...remainProps } = props;
    return (
      <div>
        <Input ref={ref} {...remainProps} />
        {error && (
          <ErrorMessageContainer>{error.message}</ErrorMessageContainer>
        )}
      </div>
    );
  },
);
