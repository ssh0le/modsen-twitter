import styled from 'styled-components';

import {
  adaptiveIconStyle,
  flexCenter,
  themedSvgFilter,
} from '@/styles/common';

export const AddTweetModalContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.border};
  padding: ${({ theme }) => theme.padding.l}px;
  border-radius: 20px;
  width: 600px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0 40px;
    width: auto;
    padding: ${({ theme }) => theme.padding.s}px;
  }
`;

export const MobileButtonContainer = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    ${flexCenter};

    padding: 10px;
  }
`;

export const ComputerButtonContainer = styled.div`
  display: block;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const AddTweetIcon = styled.img`
  ${adaptiveIconStyle};
  ${themedSvgFilter};
`;
