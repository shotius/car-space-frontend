import { useMediaQuery } from '@chakra-ui/media-query';

export const useMediaQueryMin = (width: number) => {
  const [isLargerThan] = useMediaQuery(`(min-width: ${width}px)`);

  return { isLargerThan };
};
