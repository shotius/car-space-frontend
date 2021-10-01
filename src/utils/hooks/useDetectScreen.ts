import { MOBILE_SCREEN_SIZE, TABLET_SCREEN_SIZE } from '../../constants/index';
import { useViewPortWidth } from 'utils/hooks/useViewPortWidth';
import { useEffect, useState } from 'react';

export const useDetectScreen = ()=> {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const wv = useViewPortWidth()

  useEffect(() => {
    if (wv > 0 && wv< MOBILE_SCREEN_SIZE) {
      setIsMobile(true)
      setIsTablet(false)
      setIsDesktop(false)
    } else if (wv > MOBILE_SCREEN_SIZE && wv< TABLET_SCREEN_SIZE) {
      setIsMobile(false)
      setIsTablet(true)
      setIsDesktop(false)
    } else if (wv > TABLET_SCREEN_SIZE ) {
      setIsMobile(false)
      setIsTablet(false)
      setIsDesktop(true)
    }

  }, [wv])

  return {isMobile, isTablet, isDesktop}
}