import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const eventName = 'resize' as const;
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener(eventName, handleWindowResize);

    return () => window.removeEventListener(eventName, handleWindowResize);
  }, []);

  return width;
};
