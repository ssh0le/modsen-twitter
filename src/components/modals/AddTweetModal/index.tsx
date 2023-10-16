import { useState } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import { Button, Modal, SerifText } from '@/components/UI';
import { icons } from '@/constants';

import {
  AddTweetIcon,
  AddTweetModalContainer,
  ComputerButtonContainer,
  MobileButtonContainer,
} from './styled';

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
          <SerifText>Tweet</SerifText>
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
