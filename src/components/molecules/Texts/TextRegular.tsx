import { Text, TextProps } from '@chakra-ui/layout';


interface TextRegularProps {}

export const TextRegular: React.FC<TextRegularProps & TextProps> = ({
  children,
  lineHeight="24px", 
  fontSize=["16px", null, "14px"],
  ...rest
}) => {
  return <Text lineHeight={"24px"} fontSize={fontSize} {...rest}>{children}</Text>;
};
