import { ReactNode, useState } from 'react';

import { Modal } from '@/components/UI';
import { closeBadgeText, icons } from '@/constants';

import {
  CloseBadge,
  SearchButtonContainer,
  SearchModalContainer,
  SearchModalContentWrapper,
} from './styled';

const { SearchIcon } = icons;

const SearchModal = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <SearchButtonContainer onClick={handleModalOpen}>
        <SearchIcon />
      </SearchButtonContainer>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <SearchModalContentWrapper>
          <SearchModalContainer>
            <CloseBadge onClick={handleModalClose}>{closeBadgeText}</CloseBadge>
            {children}
          </SearchModalContainer>
        </SearchModalContentWrapper>
      </Modal>
    </>
  );
};

export default SearchModal;
