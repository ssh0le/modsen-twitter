import { BoldText, Loader, SerifText } from '@/components/UI';
import { loadPageStatics } from '@/constants';

import { LoadPageContainer } from './styled';

const { message } = loadPageStatics;

export const LoadPage = () => {
  return (
    <LoadPageContainer>
      <Loader />
      <SerifText>
        <BoldText>{message}</BoldText>
      </SerifText>
    </LoadPageContainer>
  );
};
