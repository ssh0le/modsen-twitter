type LogoSize = 'small' | 'medium';

export interface LogoProps {
  size?: LogoSize;
}

export interface LogoWrapperProps {
  $size: LogoSize;
}
