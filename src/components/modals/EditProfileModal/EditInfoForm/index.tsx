import { useEffect, useState } from 'react';
import { Control, useForm } from 'react-hook-form';

import Toast from '@/components/Toast';
import { Button, InputField, Select, SerifText } from '@/components/UI';
import { genderOptions, layoutStatics } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { updateUserInfo } from '@/store/slices/thunk/user';
import { updateUser } from '@/utils';

import { Gender, IEditInfoForm } from './interfaces';
import { ControlsContainer, EditInfoFormContainer } from './styled';

const { resetButtonText, saveButtonText } = layoutStatics;

export const EditInfoForm = () => {
  const { name, status, id, tag, profileId } =
    useAppSelector(selectCurrentUser);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      name: name,
      telegram: status || '',
      gender: Gender.default,
      tag: tag,
    },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    reset({
      name: name,
      telegram: status || '',
      gender: Gender.default,
      tag: tag,
    });
  }, [name, status, tag, reset]);

  const handleFormSubmit = (data: IEditInfoForm) => {
    const { tag, telegram, gender, name } = data;
    updateUser(id, profileId, {
      name,
      tag,
      status: telegram,
      gender,
    }).then(() => {
      dispatch(updateUserInfo(profileId));
      setSuccessMessage('Saved!');
    });
  };

  const handleFormReset = () => {
    reset();
  };

  const handleSuccessAnimationEnd = () => {
    setSuccessMessage('');
  };

  const typedControl = control as unknown as Control;

  return (
    <EditInfoFormContainer>
      <Toast
        type={'succes'}
        onAnimationEnd={handleSuccessAnimationEnd}
        message={successMessage}
      />
      <InputField
        placeholder="Name"
        label="Name"
        name="name"
        validationType={'text'}
        required={false}
        control={typedControl}
      />
      <InputField
        placeholder="Tag"
        label="Tag"
        name="tag"
        required={false}
        validationType={'text'}
        control={typedControl}
      />
      <Select
        options={genderOptions}
        placeholder="Gender"
        label="Gender"
        required={false}
        name="gender"
        control={typedControl}
      />
      <InputField
        label="Telegram"
        placeholder="Telegram"
        name="telegram"
        required={false}
        validationType={'text'}
        control={typedControl}
      />
      <ControlsContainer>
        <Button data-cy="reset" onClick={handleFormReset} isActive={isDirty}>
          {resetButtonText}
        </Button>

        <Button
          data-cy="save-info"
          onClick={handleSubmit(handleFormSubmit)}
          type="colored"
          isActive={isDirty}
        >
          <SerifText>{saveButtonText}</SerifText>
        </Button>
      </ControlsContainer>
    </EditInfoFormContainer>
  );
};
