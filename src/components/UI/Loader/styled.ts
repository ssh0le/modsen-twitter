import styled from 'styled-components';

import { flexCenter } from '@/styles/common';

export const LoaderContainer = styled.div`
  ${flexCenter}
`;

export const MainLoader = styled.div`
  border: 8px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  border-top: 8px solid ${({ theme }) => theme.color};
  border-bottom: 8px solid ${({ theme }) => theme.color};
  width: 70px;
  height: 70px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
