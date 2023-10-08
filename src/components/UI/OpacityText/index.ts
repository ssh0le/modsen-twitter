import styled from 'styled-components';

export const OpacityText = styled.span<{ $size?: 'small' | 'medium' }>`
  opacity: ${({ theme }) => theme.opacity.medium}%;
  font-size: ${({
    theme: {
      fontSizes: { fs16, fs18 },
    },
    $size,
  }) => ($size === 'medium' && fs18) || fs16}px;
`;
