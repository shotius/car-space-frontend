import { Text, TextProps } from '@chakra-ui/layout';
 ;

interface TextRegularProps {}

export const TextRegular: React.FC<TextRegularProps & TextProps> = ({
  children,
  fontSize=["14px", null, null, "14px", null,  "16px"],
  ...rest
}) => {
  return <Text fontSize={fontSize} {...rest}>{children}</Text>;
};
