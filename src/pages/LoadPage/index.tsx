import { BoldText, Loader, SerifText } from '@/components/UI';

import { LoadPageContainer } from './styled';

export const LoadPage = () => {
  return (
    <LoadPageContainer>
      <Loader />
      <SerifText>
        <BoldText>Please, wait...</BoldText>
      </SerifText>
    </LoadPageContainer>
  );
};
