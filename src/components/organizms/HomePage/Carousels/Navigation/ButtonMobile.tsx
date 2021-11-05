import { IconButton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { ArrowNextIcon } from 'src/components/atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from 'src/components/atoms/Icons/Arrows/ArrowPrevIcon';

interface ButtonsMobileProps {
  side: 'left' | 'right';
  animate: boolean;
}

export const ButtonMobile = forwardRef<HTMLButtonElement, ButtonsMobileProps>(
  ({ side, animate }, ref) => {
    return (
      <IconButton
        icon={
          side === 'left' ? (
            <ArrowNextIcon boxSize={6} />
          ) : (
            <ArrowPrevIcon boxSize={6} />
          )
        }
        aria-label="next customer review card"
        bg="transparent"
        _hover={{
          bg: 'trasparent',
        }}
        _active={{
          bg: 'transparent',
          transform: animate && 'scale(1.3)',
        }}
        ref={ref}
      />
    );
  }
);
