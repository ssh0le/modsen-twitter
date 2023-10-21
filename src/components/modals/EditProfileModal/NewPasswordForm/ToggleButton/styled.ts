import styled from 'styled-components';

export const ToggleButtonContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.padding.l}px;
  width: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-bottom: ${({ theme }) => theme.padding.s}px;
  }
`;
