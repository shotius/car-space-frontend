import { ButtonProps, IconButton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { useAppSelector } from 'src/redux/app/hook';

interface ButtonNextProps {
  activeBg?: ButtonProps['bg'];
}

export const ButtonNext = forwardRef<
  HTMLButtonElement,
  ButtonNextProps & ButtonProps
>(
  (
    {
      activeBg = 'autoGrey.200',
      bg = 'autoGrey.600',
      top = '50%',
      right = '-35px',
      w = '50px',
      h = '50px',
      ...rest
    },
    ref
  ) => {
    const {isDesktop} = useAppSelector(state => state.globalAppState.screen)
    return (
      <IconButton
        icon={
          <DropdownIcon transform="translateX(1px)" boxSize={[4, null, 5]} />
        }
        aria-label="previous slide"
        transform="rotate(-90deg) translateX(50%) translateY(-15px)"
        position="absolute"
        top={top}
        right={right}
        w={w}
        h={h}
        bg={bg}
        _hover={{
          opacity: isDesktop && '0.86',
          transform:
            isDesktop && 'rotate(-90deg) translateX(50%) translateY(-11px)',
        }}
        _active={{
          opacity: !isDesktop && '1',
          bg: activeBg,
          transform:
            isDesktop &&
            'rotate(-90deg) translateX(50%) translateY(-11px) scale(0.9)',
        }}
        borderRadius="100px"
        zIndex="1"
        ref={ref}
        {...rest}
      />
    );
  }
);
