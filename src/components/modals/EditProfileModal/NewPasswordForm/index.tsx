import { useForm } from 'react-hook-form';

import { Button, InputField, SerifText } from '@/components/UI';
import { profileStatics } from '@/constants';
import { createValidationOptions } from '@/helpers';
import { firebaseAuth } from '@/utils';

import { PasswordForm } from './interfaces';
import { EditPasswordFormContainer, SubmitButtonContainer } from './styled';

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

  const handleFormSubmit = (data: PasswordForm) => {
    firebaseAuth.updateUserPassword(data.newPassword).then(() => {
      reset();
    });
  };

  const { newPassword, confirmPassword } = errors;

  return (
    <EditPasswordFormContainer>
      <InputField
        placeholder="New password"
        label="New password"
        error={newPassword}
        {...register('newPassword', createValidationOptions('password'))}
      />
      <InputField
        placeholder="Confirm password"
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
