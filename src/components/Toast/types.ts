export interface ToastProps {
  message?: string;
  type: ToastType;
  onAnimationEnd: () => void;
}

export interface ToastContainerProps {
  $type: ToastType;
  $isActive: boolean;
}

export interface ToastMessageProps {
  $type: ToastType;
}

type ToastType = 'error' | 'succes';
