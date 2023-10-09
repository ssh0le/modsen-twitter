import { icons } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { Button, SerifText } from '@UI';

import UserAvatar from '../UserAvatar';

import {
  AddTweetFormContainer,
  TweetButtonContainer,
  TweetInput,
  TweetInputContainer,
  TweetInputControlsContainer,
} from './styled';

const AddTweetForm = () => {
  const { avatar } = useAppSelector(selectCurrentUser)!;

  return (
    <AddTweetFormContainer>
      <UserAvatar src={avatar} size="small" />
      <TweetInputContainer>
        <TweetInput placeholder={`What's happening`} rows={3} />
        <TweetInputControlsContainer>
          <img src={icons.media} alt="Add media icon" />
          <TweetButtonContainer>
            <Button onClick={() => 0} type="colored" isActive={false}>
              <SerifText>Tweet</SerifText>
            </Button>
          </TweetButtonContainer>
        </TweetInputControlsContainer>
      </TweetInputContainer>
    </AddTweetFormContainer>
  );
};

export default AddTweetForm;
