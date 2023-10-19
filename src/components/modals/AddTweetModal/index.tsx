import { useState } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import { Button, Modal, SerifText } from '@/components/UI';
import { icons, profileStatics } from '@/constants';

import {
  AddTweetIcon,
  AddTweetModalContainer,
  ComputerButtonContainer,
  MobileButtonContainer,
} from './styled';

const { addTweetButtonText } = profileStatics;

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
      <ComputerButtonContainer>
        <Button type="colored" onClick={handleModalOpen}>
          <SerifText>{addTweetButtonText}</SerifText>
        </Button>
      </ComputerButtonContainer>
      <MobileButtonContainer onClick={handleModalOpen}>
        <AddTweetIcon src={icons.addTweet} alt="Add tweet" />
      </MobileButtonContainer>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <AddTweetModalContainer>
          <AddTweetForm />
        </AddTweetModalContainer>
      </Modal>
    </>
  );
};
