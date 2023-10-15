import styled from 'styled-components';

import { flexCenter } from '@/styles/common';

export const ModalContainer = styled.div`
  ${flexCenter};
  position: absolute;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
`;

export const ModalBackdrop = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  width: 100vw;
  top: 0;
  position: fixed;
  bottom: 0;
  z-index: 0;
`;

export const ModalContentWrapper = styled.div`
  z-index: 10;
  height: fit-content;
`;
