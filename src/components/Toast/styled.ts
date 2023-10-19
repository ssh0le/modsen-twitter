import styled from 'styled-components';

import { flexCenter } from '@/styles/common';

export const ToastContainer = styled.div<{
  $active: boolean;
  $type: 'error' | 'not-error';
}>`
  position: fixed;
  top: -100;
  left: 50%;
  padding: 10px;
  z-index: 10;
  ${flexCenter};
  height: 100px;
  width: 150px;
  transform: translateX(-50%);
  transition: top 0.5s ease-in-out;
  top: -100px;
  background-color: ${({
    $type,
    theme: {
      colors: { red, green },
    },
  }) => ($type === 'error' ? red : green)};
  ${({ $active }) => $active && 'top: 10px;'};
`;

export const MessageContainer = styled.p<{
  $type: 'error' | 'not-error';
}>`
  text-align: center;
  color: ${({
    $type,
    theme: {
      colors: { white, black },
    },
  }) => ($type === 'error' ? white : black)};
`;
