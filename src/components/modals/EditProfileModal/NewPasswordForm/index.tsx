import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, InputField, SerifText } from '@/components/UI';
import { profileStatics } from '@/constants';
import { createValidationOptions } from '@/helpers';
import { updateUserPassword } from '@/utils';

import { PasswordForm } from './interfaces';
import {
  EditPasswordFormContainer,
  InputContainer,
  SubmitButtonContainer,
} from './styled';
import ToggleButton from './ToggleButton';

const { updatePasswordButtonText } = profileStatics;

export const NewPasswordForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { isDirty, errors },
    reset,
  } = useForm<PasswordForm>({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleFormSubmit = (data: PasswordForm) => {
    updateUserPassword(data.newPassword).then(() => {
      reset();
    });
  };

  const toggleNewPassordView = () => {
    setShowNewPassword((prevView) => !prevView);
  };

  const toggleConfirmPassordView = () => {
    setShowConfirmPassword((prevView) => !prevView);
  };

  const { newPassword, confirmPassword } = errors;

  return (
    <EditPasswordFormContainer>
      <InputContainer>
        <InputField
          placeholder="New password"
          label="New password"
          type={showNewPassword ? 'text' : 'password'}
          error={newPassword}
          {...register('newPassword', createValidationOptions('password'))}
        />
        <ToggleButton
          isShown={showNewPassword}
          onClick={toggleNewPassordView}
        />
      </InputContainer>
      <InputContainer>
        <InputField
          placeholder="Confirm password"
          type={showConfirmPassword ? 'text' : 'password'}
          label="Confirm password"
          error={confirmPassword}
          {...register('confirmPassword', {
            validate: (val: string) => {
              if (watch('newPassword') != val) {
                return `Your passwords don't match`;
              }
            },
          })}
        />
        <ToggleButton
          isShown={showConfirmPassword}
          onClick={toggleConfirmPassordView}
        />
      </InputContainer>
      <SubmitButtonContainer>
        <Button
          onClick={handleSubmit(handleFormSubmit)}
          type="colored"
          isActive={isDirty}
        >
          <SerifText>{updatePasswordButtonText}</SerifText>
        </Button>
      </SubmitButtonContainer>
    </EditPasswordFormContainer>
  );
};
