import { ReactNode, useState } from 'react';

import { Modal } from '@/components/UI';
import { icons } from '@/constants';

import {
  CloseBadge,
  SearchButtonContainer,
  SearchModalContainer,
  SearchModalContentWrapper,
  SerchIcon,
} from './styled';

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
        <SerchIcon src={icons.searchIcon} alt="Search button" />
      </SearchButtonContainer>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <SearchModalContentWrapper>
          <SearchModalContainer>
            <CloseBadge onClick={handleModalClose}>X</CloseBadge>
            {children}
          </SearchModalContainer>
        </SearchModalContentWrapper>
      </Modal>
    </>
  );
};

export default SearchModal;
