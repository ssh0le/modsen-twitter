import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Toast from '@/components/Toast';
import { Button, InputField, Select, SerifText } from '@/components/UI';
import { genderOptions } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { updateUserInfo } from '@/store/slices/thunk/user';
import { firestore } from '@/utils';

import { Gender, IEditInfoForm } from './interfaces';
import { ControlsContainer, EditInfoFormContainer } from './styled';

export const EditInfoForm = () => {
  const { name, status, id, tag, profileId } =
    useAppSelector(selectCurrentUser)!;
  const [successMessage, setSuccessMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<IEditInfoForm>({
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
    firestore
      .updateUser(id, profileId, {
        name,
        tag,
        status: telegram,
        gender,
      })
      .then(() => {
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

  const { name: nameError, telegram: telegramError } = errors;

  return (
    <EditInfoFormContainer>
      <Toast
        type={'not-error'}
        onAnimationEnd={handleSuccessAnimationEnd}
        message={successMessage}
      />
      <InputField
        placeholder="Name"
        label="Name"
        error={nameError}
        {...register('name')}
      />
      <InputField
        placeholder="Tag"
        label="Tag"
        error={nameError}
        {...register('tag')}
      />
      <Select
        options={genderOptions}
        placeholder="Gender"
        label="Gender"
        {...register('gender')}
      />
      <InputField
        label="Status"
        placeholder="Telegram"
        error={telegramError}
        {...register('telegram')}
      />
      <ControlsContainer>
        <Button data-cy="reset" onClick={handleFormReset} isActive={isDirty}>
          Reset
        </Button>

        <Button
          data-cy="save-info"
          onClick={handleSubmit(handleFormSubmit)}
          type="colored"
          isActive={isDirty}
        >
          <SerifText>Save info</SerifText>
        </Button>
      </ControlsContainer>
    </EditInfoFormContainer>
  );
};
