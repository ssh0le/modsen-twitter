import { Control, useForm } from 'react-hook-form';

import { Button, PasswordInput, SerifText } from '@/components/UI';
import { layoutStatics } from '@/constants';
import { updateUserPassword } from '@/utils';

import { PasswordForm } from './interfaces';
import { EditPasswordFormContainer, SubmitButtonContainer } from './styled';

const { updatePasswordButtonText } = layoutStatics;

export const NewPasswordForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { isDirty },
    reset,
  } = useForm<PasswordForm>({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const handleFormSubmit = (data: PasswordForm) => {
    updateUserPassword(data.newPassword).then(() => {
      reset();
    });
  };

  const typedControl = control as unknown as Control;

  return (
    <EditPasswordFormContainer>
      <PasswordInput
        placeholder="New password"
        label="New password"
        name={'newPassword'}
        validationType="password"
        control={typedControl}
      />
      <PasswordInput
        placeholder="Confirm password"
        label="Confirm password"
        name="confirmPassword"
        validationType="password"
        control={typedControl}
        rules={{
          validate: (val: string) => {
            if (watch('newPassword') != val) {
              return `Your passwords don't match`;
            }
          },
        }}
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
