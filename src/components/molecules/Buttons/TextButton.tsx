import { Button, ButtonProps } from '@chakra-ui/button';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface TextButtonProps {
  bgFocus?: ButtonProps['bg'];
  bgActive?: ButtonProps['bg'];
  bgHover?: ButtonProps['bg'];
  font?: 'Medium' | 'Regular';
}

export const TextButton: React.FC<TextButtonProps & ButtonProps> = ({
  variant = 'ghost',
  p = '0',
  bg = 'transparent',
  bgActive = 'autoGrey.200',
  bgFocus = 'transparent',
  bgHover = 'transparent',
  fontWeight = 'light',
  fontSize,
  children,
  font = 'Regular',
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      padding={p}
      bg={bg}
      _focus={{
        bg: bgFocus,
      }}
      _active={{
        bg: bgActive,
      }}
      _hover={{
        bg: bgHover,
      }}
      fontWeight={fontWeight}
      minW="0px"
      h="auto"
      {...rest}
    >
      {font === 'Regular' ? (
        <TextRegular fontSize={fontSize}>{children}</TextRegular>
      ) : (
        <HeadingSecondary fontSize={fontSize}>{children}</HeadingSecondary>
      )}
    </Button>
  );
};
