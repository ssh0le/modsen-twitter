import styled from 'styled-components';

import { flexCenter } from '@/styles/common';

const borderWidth = '8px';
const loaderSize = '70px';
const loaderAnimation = 'spin 2s linear infinite';

export const LoaderContainer = styled.div`
  ${flexCenter}
`;

export const MainLoader = styled.div`
  border: ${borderWidth} solid ${({ theme }) => theme.border};
  border-radius: 50%;
  border-top: ${borderWidth} solid ${({ theme }) => theme.color};
  border-bottom: ${borderWidth} solid ${({ theme }) => theme.color};
  width: ${loaderSize};
  height: ${loaderSize};
  -webkit-animation: ${loaderAnimation};
  animation: ${loaderAnimation};

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
