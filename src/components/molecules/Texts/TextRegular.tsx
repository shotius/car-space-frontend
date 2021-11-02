import { Text, TextProps } from '@chakra-ui/layout';


interface TextRegularProps {}

export const TextRegular: React.FC<TextRegularProps & TextProps> = ({
  children,
  fontSize=["16px", null, "14px"],
  ...rest
}) => {
  return <Text fontSize={fontSize} {...rest}>{children}</Text>;
};
