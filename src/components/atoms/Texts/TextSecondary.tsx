import { Text, TextProps } from '@chakra-ui/layout';


interface TextSecondaryProps {}

export const TextSecondary: React.FC<TextSecondaryProps & TextProps> = ({
  opacity = '63%',
  color = '#000',
  fontSize = ['14px', '16px'],
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
