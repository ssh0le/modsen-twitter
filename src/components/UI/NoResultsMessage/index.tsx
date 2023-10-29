import { noResultsText } from '@/constants';

import { SerifText } from '../SerifText';

import { NoResultsMessageContainer } from './styled';

export const NoResultMessage = () => {
  return (
    <NoResultsMessageContainer>
      <SerifText>{noResultsText}</SerifText>
    </NoResultsMessageContainer>
  );
};
