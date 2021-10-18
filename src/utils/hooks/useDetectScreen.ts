import { MOBILE_SCREEN_SIZE, TABLET_SCREEN_SIZE } from '../../constants/index';
import { useState, useLayoutEffect } from 'react';
import useWindowSize from './useWindowSize';

export const useDetectScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const window = useWindowSize();

  useLayoutEffect(() => {
    if (window?.width) {
      console.log('isMobile', isMobile)
      const { width } = window;
      if (width > 0 && width < MOBILE_SCREEN_SIZE) {
        // mobile screen
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      } else if (width > MOBILE_SCREEN_SIZE && width < TABLET_SCREEN_SIZE) {
        // tablet screen
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else if (width > TABLET_SCREEN_SIZE) {
        // desktop
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    }
  }, [window]);

  return { isMobile, isTablet, isDesktop };
};
