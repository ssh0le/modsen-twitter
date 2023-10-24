import { useEffect, useState } from 'react';

import { MessageContainer, ToastContainer } from './styled';
import { ToastProps } from './types';

const animationDuration = 3000;

const Toast = ({ message, type, onAnimationEnd }: ToastProps) => {
  const [innerMessage, setInnerMessage] = useState<string>('');

  useEffect(() => {
    if (!message) {
      return;
    }
    setInnerMessage(message);
    const timeoutId = setTimeout(() => {
      setInnerMessage('');
      onAnimationEnd();
    }, animationDuration);

    return () => {
      clearTimeout(timeoutId);
      setInnerMessage('');
    };
  }, [message, onAnimationEnd]);

  return (
    <ToastContainer $isActive={Boolean(innerMessage)} $type={type}>
      <MessageContainer $type={type}>{message}</MessageContainer>
    </ToastContainer>
  );
};

export default Toast;
