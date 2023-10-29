import styled from 'styled-components';

export const Toggler = styled.label`
  cursor: pointer;
  width: 54px;
  height: 28px;
  border: 2px solid black;
  display: block;
  position: relative;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 30px;

  &::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: -1px;
    bottom: -1px;
    left: -1px;
    aspect-ratio: 1 / 1;
    border-radius: 90px;
    border: 2px solid ${({ theme }) => theme.border};
    transition: 0.3s;
  }

  &.active::after {
    left: calc(100% + 1px);
    transform: translateX(-100%);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    cursor: pointer;
    width: 40px;
    height: 20px;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
