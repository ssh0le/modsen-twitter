import { useState } from 'react';

import { Modal } from '@/components/UI';
import { profileStatics } from '@/constants';

import { EditInfoForm } from './EditInfoForm';
import { NewPasswordForm } from './NewPasswordForm';
import { EditButton, EditProfileModalContainer } from './styled';

const { editButtonText } = profileStatics;

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
      <EditButton data-cy={'edit-modal'} onClick={handleEditButtonClick}>
        {editButtonText}
      </EditButton>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <EditProfileModalContainer>
          <EditInfoForm />
          <NewPasswordForm />
        </EditProfileModalContainer>
      </Modal>
    </>
  );
};
