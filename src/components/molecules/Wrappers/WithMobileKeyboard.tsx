import { Box, BoxProps } from '@chakra-ui/layout';

interface WithMobileKeyboardProps {
  isKeyboardActive: boolean;
}

// if mobile keyboard is active component passed
// to this wrapper will be on top of the keyboard
export const WithMobileKeyboard: React.FC<WithMobileKeyboardProps & BoxProps> =
  ({
    isKeyboardActive,
    children,
    w = 'full',
    bottom = '10px',
    pr = '4',
    pl = '4',
    ...rest
  }) => {
    return (
      <>
        {!isKeyboardActive ? (
          <Box w={w} {...rest}>
            {children}
          </Box>
        ) : (
          <Box
            w={w}
            position="fixed"
            bottom={bottom}
            pr={pr}
            pl={pl}
            zIndex="modal"
            {...rest}
          >
            {children}
          </Box>
        )}
      </>
    );
  };
