import { ButtonProps, IconButton } from '@chakra-ui/button';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { useAppSelector } from 'src/redux/app/hook';

interface ButtonPrevProps {
  activeBg?: ButtonProps['bg'];
}

export const ButtonPrev = forwardRef<
  HTMLButtonElement,
  ButtonPrevProps & ButtonProps
>(
  (
    {
      activeBg = 'autoGrey.200',
      bg = 'autoGrey.600',
      top = '50%',
      left = '-15px',
      w = '50px',
      h = '50px',
      ...rest
    },
    ref
  ) => {
    const {isDesktop} = useAppSelector(state => state.globalAppState.screen)

    return (
      <IconButton
        top={top}
        left={left}
        w={w}
        h={h}
        bg={bg}
        icon={
          <DropdownIcon transform="translateX(3px)" boxSize={[4, null, 5]} />
        }
        aria-label="previous slide"
        transform="rotate(90deg) translateX(-50%) translateY(5px)"
        position="absolute"
        borderRadius="100px"
        _hover={{
          opacity: isDesktop && '0.86',
          transform:
            isDesktop && 'rotate(90deg) translateX(-50%) translateY(9px)'  ,
        }}
        _active={{
          bg: activeBg,
          opacity: !isDesktop && "1",
          transform:
            isDesktop &&
            'rotate(90deg) translateX(-50%) translateY(10px) scale(0.9)',
        }}
        zIndex="1"
        {...rest}
        ref={ref}
      />
    );
  }
);
