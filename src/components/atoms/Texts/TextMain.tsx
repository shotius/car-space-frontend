import { Text, TextProps } from '@chakra-ui/layout';
 ;

interface TextMainProps {}

export const TextMain: React.FC<TextMainProps & TextProps> = ({
  opacity = '63%',
  color = '#000',
  fontSize = '16px',
  lineHeight = '21px',
  children,
  ...rest
}) => {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      opacity={opacity}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </Text>
  );
};
