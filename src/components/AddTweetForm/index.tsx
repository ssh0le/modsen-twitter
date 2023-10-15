import { ChangeEvent, useRef, useState } from 'react';

import { icons } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { addTweet } from '@/store/slices/thunk/user';
import { publisher } from '@/utils';
import { Button, SerifText } from '@UI';

import UserAvatar from '../UserAvatar';

import {
  AddTweetFormContainer,
  DeleteBadge,
  FileInput,
  PreviewImage,
  PreviewImageContainer,
  TweetButtonContainer,
  TweetInput,
  TweetInputContainer,
  TweetInputControlsContainer,
} from './styled';

const AddTweetForm = () => {
  const user = useAppSelector(selectCurrentUser)!;
  const { avatar } = user;
  const [tweetText, setTweetText] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const uploadImageRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(event.target.value);
  };

  const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files;
    if (files) {
      setImage(files[0]);
    }
  };

  const handleUploadIconClick = () => {
    const uploadInput = uploadImageRef.current;
    if (uploadInput) {
      uploadInput.click();
    }
  };

  const handleDeleteBadgeClick = () => {
    setImage(null);
  };

  const handleTweetClick = async () => {
    await dispatch(
      addTweet({
        tweetData: {
          text: tweetText,
          image,
        },
        user,
      }),
    );
    publisher.notify('tweetsUpdate');
    setTweetText('');
    setImage(null);
  };

  return (
    <AddTweetFormContainer>
      <UserAvatar src={avatar} size="small" />
      <TweetInputContainer>
        <TweetInput
          placeholder={`What's happening`}
          rows={3}
          value={tweetText}
          onChange={handleInputChange}
        />
        {image && (
          <PreviewImageContainer>
            <PreviewImage src={URL.createObjectURL(image)} />
            <DeleteBadge onClick={handleDeleteBadgeClick}>x</DeleteBadge>
          </PreviewImageContainer>
        )}
        <TweetInputControlsContainer>
          <img
            src={icons.media}
            alt="Add media icon"
            onClick={handleUploadIconClick}
          />
          <FileInput
            type="file"
            accept="image/jpeg, image/png"
            ref={uploadImageRef}
            onChange={handleImageInputChange}
          />
          <TweetButtonContainer>
            <Button
              onClick={handleTweetClick}
              type="colored"
              isActive={tweetText.length > 0 || image !== null}
            >
              <SerifText>Tweet</SerifText>
            </Button>
          </TweetButtonContainer>
        </TweetInputControlsContainer>
      </TweetInputContainer>
    </AddTweetFormContainer>
  );
};

export default AddTweetForm;
