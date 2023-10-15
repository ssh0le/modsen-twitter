import { MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from '@/hooks/usePortal';

import { ModalProps } from './interfaces';
import { ModalBackdrop, ModalContainer, ModalContentWrapper } from './styled';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const portalContainer = usePortal();

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add('modaled');
      body.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      if (isOpen) {
        body.classList.remove('modaled');
        body.removeEventListener('keyup', handleKeyUp);
      }
    };
  }, [isOpen, handleKeyUp]);

  if (!isOpen) {
    return null;
  }

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return createPortal(
    <ModalContainer>
      <ModalBackdrop onClick={onClose} />
      <ModalContentWrapper onClick={handleModalClick}>
        {children}
      </ModalContentWrapper>
    </ModalContainer>,
    portalContainer,
  );
};
