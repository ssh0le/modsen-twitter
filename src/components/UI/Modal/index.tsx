import { MouseEvent, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from '@/hooks/usePortal';

import { ModalProps } from './interfaces';
import {
  ModalContainer,
  ModalContentWrapper,
  ModalMainContentContainer,
} from './styled';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const portalContainer = usePortal();

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - body.offsetWidth;
    if (isOpen) {
      body.addEventListener('keyup', handleKeyUp);
      body.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.style.overflowY = 'hidden';
    }

    return () => {
      if (isOpen) {
        body.removeEventListener('keyup', handleKeyUp);
        body.style.paddingRight = `0`;
        document.documentElement.style.overflowY = 'auto';
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
    <>
      <ModalContainer onClick={onClose}>
        <ModalContentWrapper onClick={onClose}>
          <ModalMainContentContainer onClick={onClose}>
            <div onClick={handleModalClick}>{children}</div>
          </ModalMainContentContainer>
        </ModalContentWrapper>
      </ModalContainer>
    </>,
    portalContainer,
  );
};
