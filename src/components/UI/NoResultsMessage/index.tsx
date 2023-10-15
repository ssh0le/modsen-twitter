import { SerifText } from '../SerifText';

import { NoResultsMessageContainer } from './styled';

export const NoResultMessage = () => {
  return (
    <NoResultsMessageContainer>
      <SerifText>No results</SerifText>
    </NoResultsMessageContainer>
  );
};
