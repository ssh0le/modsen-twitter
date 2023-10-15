import styled from 'styled-components';

export const AddTweetModalContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 30px;
  border-radius: 20px;
  width: 600px;
`;
