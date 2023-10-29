import styled from 'styled-components';

export const EditProfileModalContainer = styled.div`
  width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 25px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 300px;
  }
`;

export const EditButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  border: 2px solid ${({ theme }) => theme.color};
  padding: ${({
    theme: {
      padding: { xs, s },
    },
  }) => `${xs}px ${s}px`};
  height: fit-content;
  border-radius: 50px;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
  }
`;
