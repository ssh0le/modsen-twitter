import { useNavigate } from 'react-router-dom';

import { Button, SerifText } from '@/components/UI';
import { routePathes } from '@/constants';

import { ContentWrapper, NotFoundPageWrapper } from './styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(routePathes.home);
  };

  return (
    <NotFoundPageWrapper>
      <ContentWrapper>
        <SerifText>This page wasn't found</SerifText>
        <Button type={'colored'} onClick={handleButtonClick}>
          Go to home
        </Button>
      </ContentWrapper>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
