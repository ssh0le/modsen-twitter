import { ComponentProps, useState } from 'react';

import { InputField } from '../InputField';
import { Link } from '../Link';

import { InputContainer, ToggleButtonContainer } from './styled';

export const PasswordInput = (props: ComponentProps<typeof InputField>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordView = () => {
    setShowPassword((prevView) => !prevView);
  };

  return (
    <InputContainer>
      <InputField {...props} type={showPassword ? 'text' : 'password'} />
      <ToggleButtonContainer onClick={togglePasswordView}>
        <Link>{showPassword ? 'Hide' : 'Show'}</Link>
      </ToggleButtonContainer>
    </InputContainer>
  );
};
