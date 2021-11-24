import { useAppDispatch } from './../../redux/app/hook';
import { MOBILE_SCREEN_SIZE, TABLET_SCREEN_SIZE } from '../../constants/index';
import { useState, useLayoutEffect, useEffect } from 'react';
import useWindowSize from './useWindowSize';
import { setScreenSize } from 'src/redux/features/global/gloabalSlice';

export const useDetectScreen = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isTablet, setIsTablet] = useState<boolean | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  const window = useWindowSize();

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (window?.width) {
      const { width } = window;
      if (width > 0 && width < MOBILE_SCREEN_SIZE) {
        console.log('inMobile: ', window);
        // mobile screen
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      } else if (width > MOBILE_SCREEN_SIZE && width < TABLET_SCREEN_SIZE) {
        console.log('inTable: ', window);
        // tablet screen
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else if (width > TABLET_SCREEN_SIZE) {
        console.log('inDesktop: ', window);
        // desktop
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    }
  }, [window]);

  useEffect(() => {
    if (isMobile !== null && isTablet !== null && isDesktop !== null) {
      console.log('isMobile', isMobile);
      console.log('isTablet', isTablet);
      console.log('isDesktop', isDesktop);
      dispatch(
        setScreenSize({
          isDesktop,
          isTablet,
          isMobile,
        })
      );
    }
  }, [isDesktop, isTablet, isMobile]);

  return { isMobile, isTablet, isDesktop };
};
