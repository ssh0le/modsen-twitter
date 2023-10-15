export interface ToastProps {
  message?: string;
  type: 'error' | 'not-error';
  onAnimationEnd: () => void;
}
