import { Input, InputProps } from '@chakra-ui/input';

interface InputRegularProps {
  focusBoxShadow?: InputProps['shadow'];
  placeholderColor?: InputProps['color'];
  placeholderFontSize?: InputProps['fontSize'];
  placeholderOpacity?: InputProps['opacity'];
}

export const InputRegular: React.FC<InputRegularProps & InputProps> = ({
  opacity = '0.7',
  outline = 'none',
  border = 'none',
  focusBoxShadow = 'none',
  placeholderColor = '#000',
  placeholderFontSize = "16px",
  placeholderOpacity = "0.5",
  ...rest
}) => {
  return (
    <Input
      outline={outline}
      border={border}
      opacity={opacity}
      _focus={{
        boxShadow: focusBoxShadow,
      }}
      _placeholder={{
        fontSize: placeholderFontSize,
        color: placeholderColor,
        opacity: placeholderOpacity,
      }}
      {...rest}
    />
  );
};
