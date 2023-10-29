import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  height: fit-content;
  padding: 18px 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const FooterLinkList = styled.ul`
  display: flex;
  gap: 19px;
`;

export const LinkWrapper = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.fs13}px;
  text-align: center;
  cursor: pointer;
`;
