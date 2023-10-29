import { useNavigate } from 'react-router-dom';

import { Button, SerifText } from '@/components/UI';
import { notFoundPageStatics, routePathes } from '@/constants';

import { ContentWrapper, NotFoundMessage, NotFoundPageWrapper } from './styled';

const { message, backButtonText } = notFoundPageStatics;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(routePathes.home);
  };

  return (
    <NotFoundPageWrapper>
      <ContentWrapper>
        <NotFoundMessage>
          <SerifText>{message}</SerifText>
        </NotFoundMessage>
        <Button type={'colored'} onClick={handleButtonClick}>
          {backButtonText}
        </Button>
      </ContentWrapper>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
