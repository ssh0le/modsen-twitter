import { fireEvent, render, screen } from '@testing-library/react';

// import { userEvent } from '@testing-library/user-event';
import AddTweetForm from '@/components/AddTweetForm';

import '@testing-library/jest-dom';
import { TestProviders } from './constants/store';

const testImageSrc = './constants/defaultUserBackground.jpg';

jest.mock('firebase/auth');
window.URL.createObjectURL = jest.fn().mockReturnValue(testImageSrc);

describe('AddTweetForm', () => {
  test('renders the AddTweetForm component', () => {
    render(<AddTweetForm />, {
      wrapper: TestProviders,
    });
    const tweetInput = screen.getByPlaceholderText("What's happening");
    expect(tweetInput).toBeInTheDocument();
  });

  test('handles text input', () => {
    render(<AddTweetForm />, {
      wrapper: TestProviders,
    });
    const tweetInput = screen.getByPlaceholderText("What's happening");
    fireEvent.change(tweetInput, { target: { value: 'Test tweet' } });
    expect(tweetInput).toHaveValue('Test tweet');
  });

  test('handles image upload', () => {
    const { container } = render(<AddTweetForm />, {
      wrapper: TestProviders,
    });
    const uploadIcon = screen.getByAltText('Add media icon');
    const fileInput = container.querySelector('input[type="file"]')!;
    const image = new File(['file contents'], testImageSrc, {
      type: 'image/jpeg',
    });

    fireEvent.click(uploadIcon);
    fireEvent.change(fileInput, { target: { files: [image] } });

    const previewImage = screen.getByAltText('Loaded image');
    expect(previewImage).toBeInTheDocument();
  });

  test('deletes uploaded image', () => {
    const { container } = render(<AddTweetForm />, {
      wrapper: TestProviders,
    });
    const uploadIcon = screen.getByAltText('Add media icon');
    const fileInput = container.querySelector('input[type="file"]')!;
    const image = new File(['file contents'], testImageSrc, {
      type: 'image/jpeg',
    });

    fireEvent.click(uploadIcon);
    fireEvent.change(fileInput, { target: { files: [image] } });

    const deleteBadge = screen.getByText('x');
    fireEvent.click(deleteBadge);

    const previewImage = screen.queryByAltText('Loaded image');
    expect(previewImage).not.toBeInTheDocument();
  });
});
