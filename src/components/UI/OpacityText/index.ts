import styled from 'styled-components';

export const OpacityText = styled.span<{ $size?: 'small' | 'medium' }>`
  opacity: ${({ theme }) => theme.opacity.medium}%;
  font-size: ${({
    theme: {
      fontSizes: { fs16, fs18 },
    },
    $size,
  }) => ($size === 'medium' && fs18) || fs16}px;

  @media only screen and (max-width: 1200px) {
    font-size: ${({
      theme: {
        fontSizes: { fs16, fs14 },
      },
      $size,
    }) => ($size === 'medium' && fs16) || fs14}px;
  }
`;
