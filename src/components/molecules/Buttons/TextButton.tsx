import { Button, ButtonProps } from '@chakra-ui/button';
import { TextRegular } from '../Texts/TextRegular';

interface TextButtonProps {
  bgFocus?: ButtonProps['bg'];
  bgActive?: ButtonProps['bg'];
  bgHover?: ButtonProps['bg']
}

export const TextButton: React.FC<TextButtonProps & ButtonProps> = ({
  variant="ghost",
  p="0",
  bg="transparent",
  bgActive="transparent",
  bgFocus="transparent",
  bgHover="transparent",
  fontWeight="light",
  children,
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
      <TextRegular>{children}</TextRegular>
    </Button>
  );
};
