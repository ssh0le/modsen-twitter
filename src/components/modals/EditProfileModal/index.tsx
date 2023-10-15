import { useState } from 'react';

import { Modal } from '@/components/UI';

import { EditInfoForm } from './EditInfoForm';
import { NewPasswordForm } from './NewPasswordForm';
import { EditButton, EditProfileModalContainer } from './styled';

export const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleEditButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <EditButton onClick={handleEditButtonClick}>Edit profile</EditButton>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <EditProfileModalContainer>
          <EditInfoForm />
          <NewPasswordForm />
        </EditProfileModalContainer>
      </Modal>
    </>
  );
};
