import { icons } from '@/constants';
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
  return (
    <AddTweetFormContainer>
      <UserAvatar size="small" />
      <TweetInputContainer>
        <TweetInput placeholder={`What's happening`} rows={3} />
        <TweetInputControlsContainer>
          <img src={icons.media} alt="Add mediad icon" />
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
