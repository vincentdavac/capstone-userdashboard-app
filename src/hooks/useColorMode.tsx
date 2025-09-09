import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const element = window.document.documentElement; // <html>, not <body>

    if (colorMode === 'dark') {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode] as const;
};

export default useColorMode;
