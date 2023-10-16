import styled from 'styled-components';

import {
  adaptiveIconStyle,
  flexCenter,
  themedSvgFilter,
} from '@/styles/common';

export const AddTweetModalContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 30px;
  border-radius: 20px;
  width: 600px;

  @media only screen and (max-width: 888px) {
    margin: 0 40px;
    width: auto;
    padding: 15px;
  }
`;

export const MobileButtonContainer = styled.div`
  display: none;

  @media only screen and (max-width: 888px) {
    ${flexCenter};
    padding: 10px;
  }
`;

export const ComputerButtonContainer = styled.div`
  display: block;

  @media only screen and (max-width: 888px) {
    display: none;
  }
`;

export const AddTweetIcon = styled.img`
  ${adaptiveIconStyle};
  ${themedSvgFilter};
`;
