import { useState } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import { Button, Modal, SerifText } from '@/components/UI';

import { AddTweetModalContainer } from './styled';

export const AddTweetModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button type="colored" onClick={handleModalOpen}>
        <SerifText>Tweet</SerifText>
      </Button>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <AddTweetModalContainer>
          <AddTweetForm />
        </AddTweetModalContainer>
      </Modal>
    </>
  );
};
